let video = $('video')[0]
let currenttime = $('.controls .currenttime_range')[0]

video.ontimeupdate = function(){
	currenttime.style.width = this.currentTime/this.duration*100 + '%'
	video.ended?$('.playpause_btn').toggleClass('paused'):0

}
$('.videoplayer .play_btn').click(function(){
	$(this).css('display','none')
	$('.videoplayer .controls').slideToggle(250)
	$('.playpause_btn').toggleClass('paused')
	video.play()
})
$('.playpause_btn').click(function(){
	if($(this).hasClass('paused')){
		video.play()
	}
	else{
		video.pause()
	}
	$(this).toggleClass('paused')
})
$('.videoplayer .videoduration_range').click(function(e){
	let clickedTimestamp = (e.clientX - $(this)[0].getBoundingClientRect().left)/parseFloat($(this).parent().css('width'))
	console.log(parseFloat($(this).parent().css('width')))
	console.log($(this)[0].getBoundingClientRect().left)
	video.pause()
	video.currentTime = video.duration * clickedTimestamp
	if(!$('.playpause_btn').hasClass('paused')){
		video.play()
	}
})
