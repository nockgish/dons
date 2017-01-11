/* `||| Intro Scene |||` */
/* clouds module */

var cloud1 = document.querySelector('.c1'),
    cloud2 = document.querySelector('.c2'),
    cloud3 = document.querySelector('.c3'),
    cloud4 = document.querySelector('.c4'),
    cloud5 = document.querySelector('.c5'),
    cloud6 = document.querySelector('.c6');

/* defining requestAnimationFrame for all */
var raF = window.requestAnimationFrame ||
    	    window.webkitRequestAnimationFrame ||
    	    window.mozRequestAnimationFrame ||
    	    window.msRequestAnimationFrame ||
    	    function(callback) { return setTimeout(callback, 1000 / 60); };

var latestKnownScrollY = 0, ticking = false;

var activateScene1 = document.getElementById('activateS1');

var scene1      = document.getElementById('scene-first'),
    scene2      = document.getElementById('scene-second'),
    scene3      = document.getElementById('scene-third'),
    sZietzChar  = document.querySelector('.s-zietz'),
    sZietzName  = document.querySelector('.s-zietz-name'),
    s1mountains = document.querySelector('.s1-mountains'),
    s1trees     = document.querySelector('.fronttrees'),
    s2backTower = document.querySelector('.s2-backtower'),
    rScheckChar = document.querySelector('.r-scheckler'),
    rScheckName = document.querySelector('.r-scheckler-name'),
    s2Skyline   = document.querySelector('.s2-frontskyline'),
    s3backMount = document.querySelector('.s3-backmountains'),
    s3midMount  = document.querySelector('.s3-middlemountains'),
    HuckerChar  = document.querySelector('.mc-hucker'),
    HuckerName  = document.querySelector('.mc-hucker-name'),
    s3frontRock = document.querySelector('.s3-frontrock'),
    s1bioCopy   = document.getElementById('s1-bio-copy'),
    s2bioCopy   = document.getElementById('s2-bio-copy'),
    s3bioCopy   = document.getElementById('s3-bio-copy');


var leftPanelS1  = document.querySelector('.s1-lefts'),
    rightPanelS1 = document.querySelector('.s1-rights'),
    leftPanelS2  = document.querySelector('.s2-lefts'),
    rightPanelS2 = document.querySelector('.s2-rights'),
    leftPanelS3  = document.querySelector('.s3-lefts'),
    rightPanelS3 = document.querySelector('.s3-rights'),
    viewPicsAll  = document.querySelector('.viewpics'),
    playVidAll   = document.querySelector('.playvid');


/* these handle the scroll itself */
function onScrollClouds() {
	  latestKnownScrollY = (window.scrollY || window.pageYOffset);
    requestTick();
}

function onScrollScene1() {
    latestKnownScrollY = (window.scrollY || window.pageYOffset);
    requestTickZietz();
}

function onScrollScene2() {
    latestKnownScrollY = (window.scrollY || window.pageYOffset);
    requestTickScheckler();
}

function onScrollScene3() {
    latestKnownScrollY = (window.scrollY || window.pageYOffset);
    requestTickHucker();
}

/* these assist in the debounce for a better framerate */
function requestTick() {
	if(!ticking) {
		raF(cloudMover);
	}
	ticking = true;
}

function requestTickZietz() {
    if(!ticking) {
    raF(zietzMover);
  }
  ticking = true;
}

function requestTickScheckler() {
    if(!ticking) {
    raF(schecklerMover);
  }
  ticking = true;
}

function requestTickHucker() {
    if(!ticking) {
    raF(huckerMover);
    }
    ticking = true;
}

/* attaches the cloud parallax to the scroll event */
window.addEventListener('scroll', onScrollClouds, false);

/* This is moving the clouds in the intro scene */
function cloudMover() {
	  var currentScrollY = latestKnownScrollY;
    var fps = 60;
    ticking = false;
    window.setTimeout(function() {
      	cloud1.style.transform = 'translate3d(' + currentScrollY/5 + 'px,' + currentScrollY/6 + 'px, 0px)';
      	cloud2.style.transform = 'translate3d(0px,' + currentScrollY/5 + 'px, 0px)';
      	cloud3.style.transform = 'translate3d(' + currentScrollY/6 + 'px,' + currentScrollY/8 + 'px, 0px)';
      	cloud4.style.transform = 'translate3d(0px,' + currentScrollY/4.5 + 'px, 0px)';
      	cloud5.style.transform = 'translate3d(' + currentScrollY/-8 + 'px,' + currentScrollY/6 + 'px, 0px)';
      	cloud6.style.transform = 'translate3d(0px,' + currentScrollY/2.5 + 'px, 0px)';
      }, 1000/fps);
}

/* ^ Scene 1st ^ */

/* this is moving the Zietz and surroundings*/
function zietzMover() {
       // console.log('I been activates');
       ticking = false;
       var currentScrollY = latestKnownScrollY;
       var fps = 60;
       window.setTimeout(function() {
        cloud1.style.transform = 'translate3d(' + currentScrollY/5 + 'px,' + currentScrollY/6 + 'px, 0px)';
        cloud2.style.transform = 'translate3d(0px,' + currentScrollY/5 + 'px, 0px)';
        cloud3.style.transform = 'translate3d(' + currentScrollY/6 + 'px,' + currentScrollY/8 + 'px, 0px)';
        cloud4.style.transform = 'translate3d(0px,' + currentScrollY/4.5 + 'px, 0px)';
        cloud5.style.transform = 'translate3d(' + currentScrollY/-8 + 'px,' + currentScrollY/6 + 'px, 0px)';
        cloud6.style.transform = 'translate3d(0px,' + currentScrollY/2.5 + 'px, 0px)';
          sZietzChar.style.cssText  = 'transform: translate3d(' + (currentScrollY/-25 + 100) + 'px, 0px, 0px); opacity: 1';
          sZietzName.style.cssText  = 'transform: translate3d(' + currentScrollY/15 + 'px, 0px, 0px); opacity: 1';
          s1mountains.style.cssText = 'transform: translate3d(' + currentScrollY/30 + 'px, 0px, 0px) scale(1.1); opacity: 1';
          s1trees.style.cssText     = 'transform: translate3d(' + currentScrollY/35 + 'px, 0px, 0px) scale(1.1); opacity: 1';
          // console.log(currentScrollY/20);
       }, 1000/fps);
}


/* ^ Scene 2nd ^ */

function schecklerMover() {
      var currentScrollY = latestKnownScrollY;
      var fps = 60;
      ticking = false;
      window.setTimeout(function() {
          rScheckChar.style.cssText  = 'transform: translate3d(' + (currentScrollY/-15 + 200) + 'px, 0px, 0px); opacity: 1';
          rScheckName.style.cssText  = 'transform: translate3d(' + (currentScrollY/10 - 400) + 'px, 0px, 0px) scale(1.3); opacity: 1';
          s2backTower.style.cssText  = 'transform: translate3d(' + (currentScrollY/500 + 100) + 'px, 0px, 0px) scale(1.1); opacity: 1';
          s2Skyline.style.cssText    = 'transform: translate3d(' + currentScrollY/200 + 'px, 0px, 0px) scale(1.1); opacity: 1';
      }, 1000/fps);
      // console.log(currentScrollY/30);
}

/* ^ Scene 3rd ^ */

function huckerMover() {
      var currentScrollY = latestKnownScrollY;
      var fps = 60;
      ticking = false;
      window.setTimeout(function() {
          s3backMount.style.cssText = 'transform: translate3d(' + (currentScrollY/60) + 'px, 0px, 0px); opacity: 1';
          s3midMount.style.cssText  = 'transform: translate3d(' + (currentScrollY/-80) + 'px, 0px, 0px); opacity: 1';
          HuckerChar.style.cssText  = 'transform: translate3d(' + (currentScrollY/-20) + 'px, 0px, 0px); opacity: 1';
          HuckerName.style.cssText  = 'transform: translate3d(' + (currentScrollY/10 - 300) + 'px, 0px, 0px) scale(1.3); opacity: 1';
          s3frontRock.style.cssText = 'transform: translate3d(0px, 0px, 0px); opacity: 1)';
      }, 1000/fps);
}

/*

Waypoints
Here and there....oops there too;

 */

var s1Arts = document.getElementById('s1-arts'),
    s2Arts = document.getElementById('s2-arts'),
    s3Arts = document.getElementById('s3-arts');

var scene1Change = new Waypoint({
  element: document.getElementById('scene-first'),
  handler: function(direction) {
    window.removeEventListener('scroll', onScrollClouds, false);
    window.addEventListener('scroll', onScrollScene1, false);
    s1Arts.style.cssText = "opacity: 1; transform: scale(1)";
    s1bioCopy.style.cssText = "transform: translate3d(23%, 93%, 0); opacity: 1";
    ga('send', 'event', 'Scene1', 'reached', 'OakleySpectrumDesktop');
  },
  offset: '90%'
});

var scene1Panels = new Waypoint({
  element: document.getElementById('s1-twosides'),
  handler: function(direction) {
        leftPanelS1.style.cssText  = "transform: translateX(0%)";
        rightPanelS1.style.cssText = "transform: translateX(0%)";
        document.querySelector('.s1pics').style.cssText = "transform: skew(20deg) scale(1) rotate(720deg) translate3d(0, 0, 0)";
        document.querySelector('.s1vid').style.cssText  = "transform: skew(20deg) scale(1) rotate(-720deg) translate3d(0, 0, 0)";
        window.removeEventListener('scroll', onScrollScene1, false);
  },
  offset: '90%'
});

var scene1quote = new Waypoint({
   element: document.getElementById('s1-pullquote'),
   handler: function(direction) {
       document.getElementById('s1-pullquote').style.cssText = "transform: scale(1.2); opacity: 1";
   },
   offset: '65%'
})

var scene2Change = new Waypoint({
    element: document.getElementById('scene-second'),
    handler: function(direction) {
      // console.log('oh my, the second scene - you really are a super web-viewer! First Place!');
      window.addEventListener('scroll', onScrollScene2, false);
      s2Arts.style.cssText = "opacity: 1; transform: scale(1)";
      s2bioCopy.style.cssText = "transform: translate3d(13%, 75%, 0); opacity: 1";
      ga('send', 'event', 'Scene2', 'reached', 'OakleySpectrumDesktop');
    },
    offset: '90%'
});

var scene2Panels = new Waypoint({
    element: document.getElementById('s2-twosides'),
    handler: function(direction) {
        leftPanelS2.style.cssText  = "transform: translateX(0%)";
        rightPanelS2.style.cssText = "transform: translateX(0%)";
        document.querySelector('.s2pics').style.cssText = "transform: skew(20deg) scale(1) rotate(720deg) translate3d(0, 0, 0)";
        document.querySelector('.s2vid').style.cssText  = "transform: skew(20deg) scale(1) rotate(-720deg) translate3d(0, 0, 0)";

      },
      offset: '90%'
});

var scene2quote = new Waypoint({
   element: document.getElementById('s2-pullquote'),
   handler: function(direction) {
       document.getElementById('s2-pullquote').style.cssText = "transform: scale(1.2); opacity: 1";
   },
   offset: '65%'
})

var scene3Change = new Waypoint({
    element: document.getElementById('scene-third'),
    handler: function(direction) {
      // console.log('intrepid reader, the third scene - your sense of wonder clearly serves you well, friend.');
      window.addEventListener('scroll', onScrollScene3, false);
      s3Arts.style.cssText = "opacity: 1; transform: scale(1)";
      window.removeEventListener('scroll', onScrollScene2, false);
      s3bioCopy.style.cssText = "transform: translate3d(25%, 93%, 0); opacity: 1;"
      ga('send', 'event', 'Scene3', 'reached', 'OakleySpectrumDesktop');
    },
    offset: '80%'
});

var scene3Panels = new Waypoint({
    element: document.getElementById('s3-twosides'),
    handler: function(direction) {
        leftPanelS3.style.cssText  = "transform: translateX(0%)";
        rightPanelS3.style.cssText = "transform: translateX(0%)";
        document.querySelector('.s3pics').style.cssText = "transform: skew(20deg) scale(1) rotate(720deg) translate3d(0, 0, 0)";
        document.querySelector('.s3vid').style.cssText  = "transform: skew(20deg) scale(1) rotate(-720deg) translate3d(0, 0, 0)";
    },
    offset: '90%'
});

var scene3quote = new Waypoint({
   element: document.getElementById('s3-pullquote'),
   handler: function(direction) {
       document.getElementById('s3-pullquote').style.cssText = "transform: scale(1.2); opacity: 1";
   },
   offset: '65%'
})

var modCurtain = document.getElementById('modesty-curtain');

window.onload = function() {

   modCurtain.style.opacity = "0";
   onScrollScene3();
   onScrollScene2();
   onScrollClouds();
   onScrollClouds();

   modCurtain.addEventListener('transitionend', noCurtain, false);

   function noCurtain() {
     modCurtain.style.display = 'none';
   }
}

var s1picOverTrigger = document.querySelector('.s1pics'),
    s1vidOverTrigger = document.querySelector('.s1vid'),
    s2picOverTrigger = document.querySelector('.s2pics'),
    s2vidOverTrigger = document.querySelector('.s2vid'),
    s3picOverTrigger = document.querySelector('.s3pics'),
    s3vidOverTrigger = document.querySelector('.s3vid'),
    picsVidOverlay   = document.getElementById('overlay-picsvid'),
    overCloser       = document.querySelector('.over-closer'),
    holdsPicsVids    = document.getElementById('holds_vid-and-pics');


    // leftPanelS1.onclick = function(event) {
    //      event.stopPropagation();
    // }

    s1picOverTrigger.onclick = function() {
         // console.log('look at this');
         ga('send', 'event', 'Scene1', 'ClickViewPics', 'OakleySpectrumDesktop');
         picsVidOverlay.style.transform = "translateY(-50%) translateX(-50%) scale(1)";
         window.setTimeout(function(){
           picsVidOverlay.style.transition = "0.5s ease-in-out"
           picsVidOverlay.style.opacity = "1";
           holdsPicsVids.src = "http://media.complex.com/campaigns/2016-q3/oakley-spectrum/zietzgallery.html";
         }, 100);
    }

    s1vidOverTrigger.onclick = function() {
         // console.log('look at video');
         ga('send', 'event', 'Scene1', 'ClickPlayVideo', 'OakleySpectrumDesktop');
         picsVidOverlay.style.transform = "translateY(-50%) translateX(-50%) scale(1)"; // <--- add values to this to position the iframe dynamically.
         window.setTimeout(function(){
           picsVidOverlay.style.transition = "0.5s ease-in-out"
           picsVidOverlay.style.opacity = "1";
           holdsPicsVids.src = "https://media.complex.com/campaigns/2016-q3/oakley-spectrum/zietz-video.html";
         }, 100);
         window.setTimeout(function(){
            picsVidOverlay.style.transform = "translateY(-50%) translateX(-50%) scale(1)";
         }, 2000)
    }

    s2picOverTrigger.onclick = function() {
         // console.log('look at this');
         ga('send', 'event', 'Scene2', 'ClickViewPics', 'OakleySpectrumDesktop');
         picsVidOverlay.style.transform = "translateY(-50%) translateX(-50%) scale(1)";
         window.setTimeout(function(){
           picsVidOverlay.style.transition = "0.5s ease-in-out"
           picsVidOverlay.style.opacity = "1";
           holdsPicsVids.src = "http://media.complex.com/campaigns/2016-q3/oakley-spectrum/schecklergallery.html";
         }, 100);
    }

    s2vidOverTrigger.onclick = function() {
         // console.log('look at video');
         ga('send', 'event', 'Scene2', 'ClickPlayVideo', 'OakleySpectrumDesktop');
         picsVidOverlay.style.transform = "translateY(-50%) translateX(-50%) scale(1)";
         window.setTimeout(function(){
           picsVidOverlay.style.transition = "0.5s ease-in-out"
           picsVidOverlay.style.opacity = "1";
           holdsPicsVids.src = "https://media.complex.com/campaigns/2016-q3/oakley-spectrum/scheckler-video.html";
         }, 100);
    }

    s3picOverTrigger.onclick = function() {
         // console.log('look at this');
         ga('send', 'event', 'Scene3', 'ClickViewPics', 'OakleySpectrumDesktop');
         picsVidOverlay.style.transform = "translateY(-50%) translateX(-50%) scale(1)";
         window.setTimeout(function(){
           picsVidOverlay.style.transition = "0.5s ease-in-out"
           picsVidOverlay.style.opacity = "1";
           holdsPicsVids.src = "http://media.complex.com/campaigns/2016-q3/oakley-spectrum/huckergallery.html";
         }, 100);
    }

    s3vidOverTrigger.onclick = function() {
         ga('send', 'event', 'Scene3', 'ClickPlayVideo', 'OakleySpectrumDesktop');
         // console.log('look at video');
         picsVidOverlay.style.transform = "translateY(-50%) translateX(-50%) scale(1)";
         window.setTimeout(function(){
           picsVidOverlay.style.transition = "0.5s ease-in-out"
           picsVidOverlay.style.opacity = "1";
           holdsPicsVids.src = "https://media.complex.com/campaigns/2016-q3/oakley-spectrum/hucker-video.html";
         }, 100);
    }

    var isFullscreen = false;

      window.onresize = reloadInteract;

      window.addEventListener("message", dontResizeFS, false);

    function dontResizeFS(event) {
      if(event.data == "fullscreenvideo") {
         isFullscreen = true;

      }
      else {
        isFullscreen = false;
      }
    }

    function reloadInteract() {
      if (isFullscreen) {
        // don't reload, do nothing...do the default.
      }
      else {
        window.setTimeout(function(){
        document.location.reload(false);
        }, 1500);
      }
    }
    /* close the overlay */

    overCloser.onclick = function() {
      // If the close button is clicked for the video or pics gallery, per scene
      if (holdsPicsVids.src == "http://media.complex.com/campaigns/2016-q3/oakley-spectrum/zietzgallery.html") {
        ga('send', 'event', 'Scene1', 'ClosePics', 'OakleySpectrumDesktop');
      }
      else if (holdsPicsVids.src == "https://media.complex.com/campaigns/2016-q3/oakley-spectrum/zietz-video.html") {
        ga('send', 'event', 'Scene1', 'CloseVideo', 'OakleySpectrumDesktop');
      }
      else if (holdsPicsVids.src == "http://media.complex.com/campaigns/2016-q3/oakley-spectrum/schecklergallery.html") {
        ga('send', 'event', 'Scene2', 'ClosePics', 'OakleySpectrumDesktop');
      }
      else if (holdsPicsVids.src == "https://media.complex.com/campaigns/2016-q3/oakley-spectrum/scheckler-video.html") {
        ga('send', 'event', 'Scene2', 'CloseVideo', 'OakleySpectrumDesktop');
      }
      else if (holdsPicsVids.src == "http://media.complex.com/campaigns/2016-q3/oakley-spectrum/huckergallery.html") {
        ga('send', 'event', 'Scene3', 'ClosePics', 'OakleySpectrumDesktop');
      }
      else if (holdsPicsVids.src == "https://media.complex.com/campaigns/2016-q3/oakley-spectrum/hucker-video.html") {
        ga('send', 'event', 'Scene3', 'CloseVideo', 'OakleySpectrumDesktop');
      }
      isFullscreen = false;

      // then -->

      picsVidOverlay.style.opacity = "0";
      window.setTimeout(function(){
        picsVidOverlay.style.transition = "0.0s ease"
        picsVidOverlay.style.transform = "translateY(-2000%)";
        holdsPicsVids.src = " ";
      }, 500)
    }


/* on resize Event */
var isSafari = navigator.vendor && navigator.vendor.indexOf('Apple') > -1 &&
               navigator.userAgent && !navigator.userAgent.match('CriOS');

if(isSafari) {
  // console.log('This is Safari');
  document.querySelector('.s1-rights .holds-right-vid').style.cssText = "right: 0%";
  document.querySelector('.s2-rights .holds-right-vid').style.cssText = "right: 0%";
  document.querySelector('.s3-rights .holds-right-vid').style.cssText = "right: 0%";

  var scene1Change = new Waypoint({
  element: document.getElementById('scene-first'),
  handler: function(direction) {
    window.removeEventListener('scroll', onScrollClouds, false);
    window.addEventListener('scroll', onScrollScene1, false);
    s1Arts.style.cssText = "opacity: 1; transform: scale(1)";
    ga('send', 'event', 'Scene1', 'reached', 'OakleySpectrumDesktop');
  },
  offset: '120%'
});

var scene1Panels = new Waypoint({
  element: document.getElementById('s1-twosides'),
  handler: function(direction) {
        leftPanelS1.style.cssText  = "transform: translateX(0%)";
        rightPanelS1.style.cssText = "transform: translateX(0%)";
        document.querySelector('.s1pics').style.cssText = "transform: skew(20deg) scale(1) rotate(720deg) translate3d(0, 0, 0)";
        document.querySelector('.s1vid').style.cssText  = "transform: skew(20deg) scale(1) rotate(-720deg) translate3d(0, 0, 0)";
        window.removeEventListener('scroll', onScrollScene1, false);
  },
  offset: '140%'
});

var scene1quote = new Waypoint({
   element: document.getElementById('s1-pullquote'),
   handler: function(direction) {
       document.getElementById('s1-pullquote').style.cssText = "transform: scale(1.0); opacity: 1";
   },
   offset: '140%'
})

var scene2Change = new Waypoint({
    element: document.getElementById('scene-second'),
    handler: function(direction) {
      // console.log('oh my, the second scene - you really are a super web-viewer! First Place!');
      window.addEventListener('scroll', onScrollScene2, false);
      s2Arts.style.cssText = "opacity: 1; transform: scale(1)";
      ga('send', 'event', 'Scene2', 'reached', 'OakleySpectrumDesktop');
    },
    offset: '120%'
});

var scene2Panels = new Waypoint({
    element: document.getElementById('s2-twosides'),
    handler: function(direction) {
        leftPanelS2.style.cssText  = "transform: translateX(0%)";
        rightPanelS2.style.cssText = "transform: translateX(0%)";
        document.querySelector('.s2pics').style.cssText = "transform: skew(20deg) scale(1) rotate(720deg) translate3d(0, 0, 0)";
        document.querySelector('.s2vid').style.cssText  = "transform: skew(20deg) scale(1) rotate(-720deg) translate3d(0, 0, 0)";

      },
      offset: '140%'
});

var scene2quote = new Waypoint({
   element: document.getElementById('s2-pullquote'),
   handler: function(direction) {
       document.getElementById('s2-pullquote').style.cssText = "transform: scale(1); opacity: 1";
   },
   offset: '140%'
})

var scene3Change = new Waypoint({
    element: document.getElementById('scene-third'),
    handler: function(direction) {
      // console.log('intrepid reader, the third scene - your sense of wonder clearly serves you well, friend.');
      window.addEventListener('scroll', onScrollScene3, false);
      s3Arts.style.cssText = "opacity: 1; transform: scale(1)";
      window.removeEventListener('scroll', onScrollScene2, false);
      ga('send', 'event', 'Scene3', 'reached', 'OakleySpectrumDesktop');
    },
    offset: '120%'
});

var scene3Panels = new Waypoint({
    element: document.getElementById('s3-twosides'),
    handler: function(direction) {
        leftPanelS3.style.cssText  = "transform: translateX(0%)";
        rightPanelS3.style.cssText = "transform: translateX(0%)";
        document.querySelector('.s3pics').style.cssText = "transform: skew(20deg) scale(1) rotate(720deg) translate3d(0, 0, 0)";
        document.querySelector('.s3vid').style.cssText  = "transform: skew(20deg) scale(1) rotate(-720deg) translate3d(0, 0, 0)";
    },
    offset: '140%'
});

var scene3quote = new Waypoint({
   element: document.getElementById('s3-pullquote'),
   handler: function(direction) {
       document.getElementById('s3-pullquote').style.cssText = "transform: scale(1); opacity: 1";
   },
   offset: '140%'
})

}
else {
  // console.log('This is not Safari');
}

document.querySelector('.share__twitter').onclick = function() {
  ga('send', 'event', 'Twitter', 'Share', 'OakleySpectrumDesktop');
}

document.querySelector('.share__facebook').onclick = function() {
  ga('send', 'event', 'Facebook', 'Share', 'OakleySpectrumDesktop');
}

var complexfooterLogo = document.querySelector('.footer-logo');

complexfooterLogo.onclick = function() {
  window.open("http://www.complex.com", "_blank");
  ga('send', 'event', 'ComplexLogoClick', 'inFooter', 'OakleySpectrumDesktop');
}
