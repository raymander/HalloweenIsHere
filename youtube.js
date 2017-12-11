//  This code loads the IFrame Player API code asynchronously.
      var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      //    This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.
      var player;
     
      function onYouTubeIframeAPIReady() {
        player1 = new YT.Player('player1', {
          height: '390',
          width: '640',
          videoId: 'SD1GVW_dRXE',
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
        });
          player2 = new YT.Player('player2', {
          height: '390',
          width: '640',
          videoId: 'OdM0Jg4PIHQ',
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
        });
          player3 = new YT.Player('player3', {
          height: '390',
          width: '640',
          videoId: '_s569q2bHbE',
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
        });
      }

    // The API will call this function when the video player is ready.
      function onPlayerReady(event) {
        player2.mute();
      }

    //The API calls this function when the player's state changes
      var done = false;
      function onPlayerStateChange(event) {
       
      }
      function stopVideo() {
        player.stopVideo();
      }



