(function() {
  'use strict';

  angular
    .module('app.video')
    .controller('VideoDetailController', VideosController);

  VideosController.$inject = ['$q', 'videosServices', 'logger', 'authService', '$state', '$scope'];
  /* @ngInject */
  function VideosController($q, videosServices, logger, authService, $state, $scope) {
    var vm = this;
    vm.news = {
      title: 'Video Portal',
      description: 'Videos Detail portal'
    };
    vm.messageCount = 0;
    vm.title = 'Video';
    vm.getVideo = getVideo;
    vm.sessionId = authService.sessionId;
    vm.averageRate = averageRate;
    vm.calculateAverageRating = calculateAverageRating;

    activate();

    function activate() {
      logger.info('Activated Video Detail View');
      vm.videoId = $state.params.videoId;
      validateSession();
    }

    function validateSession() {
      if(!authService.sessionId) {
        $state.go('home', {});
      } else {
        vm.getVideo();
      }
    }

    function getVideo() {
      var session = vm.sessionId;
      var videoId = vm.videoId;
			return videosServices.getVideoDetail(session, videoId).then(function (data) {
			  if(data.status === 'success'){
          vm.video = data.data;
          vm.video.average = vm.averageRate(vm.video.ratings);
				  return vm.video;
        }
			}, function (errors) {
				logger.error('Error get followers, Try again. ' + errors[0].error);
			});
    }

    /*
     * Calculate average rating from array of values
     */
    function averageRate(ratings){
        var average = vm.calculateAverageRating(ratings);
        average = Math.floor(average);
        return average;
    };

    //calculate average rating
    function calculateAverageRating(ratings) {
        var sum = 0;
        for (var i = 0; i < ratings.length; i++) {
            sum += parseInt(ratings[i], 10); //don't forget to add the base
        }
        var avg = sum/ratings.length;
        return avg;
    };
  }
})();
