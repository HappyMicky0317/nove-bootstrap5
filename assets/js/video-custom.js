"use strict";
 
 /* ======= Play/Stop Video in Bootstrpa Modal  ======= */
 /* ======= Note: Chrome 66+ doesn't allow vimeo video auto play (https://github.com/vimeo/player.js/issues/199) ====== */
		
const videoModal = document.getElementById('modal-video');

const videoTriggers = document.querySelectorAll('.video-play-trigger');

const videoURL = videoModal.getElementsByTagName("iframe")[0].getAttribute('src');
	

videoModal.addEventListener('show.bs.modal', function () {		

    //console.log('video modal show');
    
    videoTriggers.forEach((videoTrigger) => {
	
	    videoTrigger.addEventListener('click', () => {
		  
		    
		    let videoURLAuto = videoURL + "?autoplay=1";
		   
		    //console.log(videoURLAuto);
		    
		    videoModal.getElementsByTagName("iframe")[0].setAttribute ('src', videoURLAuto);

	    
	    });
	    
	});
    
});


videoModal.addEventListener('hide.bs.modal', function () {

    //console.log('video modal hide');
    
    let videoURL = videoModal.getElementsByTagName("iframe")[0].getAttribute('src');
    
    videoModal.getElementsByTagName("iframe")[0].setAttribute ('src', '');
    
    
});


videoModal.addEventListener('hidden.bs.modal', function () {

    //console.log('video modal hidden');
		    
    videoModal.getElementsByTagName("iframe")[0].setAttribute ('src', videoURL);
    
    
});
	