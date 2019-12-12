let video = $('video')[0]
console.log(video)
$('.videoplayer .play_btn').click(function(){
	$('.videoplayer .preview').css('display', 'none')
	$(this).css('display','none')
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