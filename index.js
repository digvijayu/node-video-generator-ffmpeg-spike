const ffmpeg = require('ffmpeg');

// try {
// 	new ffmpeg('./assets/IMG_8940.MOV', function (err, video) {
// 		if (!err) {
// 			console.log('The video is ready to be processed');
// 		} else {
// 			console.log('Error: ' + err);
// 		}
// 	});
// } catch (e) {
// 	console.log(e.code);
// 	console.log(e.msg);
// }

// try {
//   const process = new ffmpeg('./assets/demo.avi');
//   process.then(function (video) {
//     // Video metadata
//     console.log('video.metadata', video.metadata);
//     // FFmpeg configuration
//     console.log('video.info_configuration', video.info_configuration);

//     video.fnExtractSoundToMP3('/assets/sounds/demo.mp3');
//   }, function (err) {
//     console.log('Error: ' + err);
//   });

// } catch (e) {
//   console.log(e);
//   console.log(e.code);
//   console.log(e.msg);
// }


try {
	var process = new ffmpeg('./assets/demo.MOV');
	process.then(function (video) {
    console.log('video.metadata', video.metadata);
		// Callback mode
		video.fnExtractFrameToJPG('./dist/frames', {
			frame_rate : 1,
			number : 5,
			file_name : 'my_frame_%t_%s'
		}, function (error, files) {
			if (!error)
				console.log('Frames: ' + files);
		});
	}, function (err) {
		console.log('Error: ' + err);
	});
} catch (e) {
	console.log(e.code);
	console.log(e.msg);
}