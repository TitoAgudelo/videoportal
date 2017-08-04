(function() {
  'use strict';

  angular
    .module('app.videos')
    .controller('VideosController', VideosController);

  VideosController.$inject = ['$q', 'videosServices', 'logger', 'authService', '$state', '$scope', '$stateParams'];
  /* @ngInject */
  function VideosController($q, videosServices, logger, authService, $state, $scope, $stateParams) {
    var vm = this;
    vm.news = {
      title: 'Video Portal',
      description: 'Videos list portal'
    };
    vm.messageCount = 0;
    vm.people = [];
    vm.title = 'Videos';
    vm.getVideos = getVideos;
    vm.sessionId = authService.sessionId;
    vm.calculateAverageRating = calculateAverageRating;
    vm.averageRate = averageRate;
    vm.makeRate = makeRate;
    vm.goToVideoDetail = goToVideoDetail;
    vm.rateVideo = rateVideo;
    activate();

    function activate() {
      logger.info('Activated Videos View');
      validateSession();
    }

    function validateSession() {
      if(!authService.sessionId) {
        $state.go('home', {});
      } else {
        vm.getVideos();
      }
    }

    function getVideos() {
      var session = vm.sessionId;
			return videosServices.getVideos(session).then(function (data) {
			  if(data.status === 'success'){
          vm.videos = data.data;
          vm.makeRate();
				  return data;
        }
			}, function (errors) {
				logger.error('Error get followers, Try again. ' + errors[0].error);
			});
    }

    /*
    * Calculate rating all data
    */
    function makeRate() {
      if(vm.videos.length > 0) {
        vm.videos.forEach(function(element) {
          element.average = vm.averageRate(element.ratings);
          element.url = decodeURIComponent(element.url);
        }, this);
      }
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

    $scope.ratingStates = [
        {stateOn: 'glyphicon-ok-sign', stateOff: 'glyphicon-ok-circle'},
        {stateOn: 'glyphicon-star', stateOff: 'glyphicon-star-empty'},
        {stateOn: 'glyphicon-heart', stateOff: 'glyphicon-ban-circle'},
        {stateOn: 'glyphicon-heart'},
        {stateOff: 'glyphicon-off'}
    ];

    function goToVideoDetail(videoId) {
      $state.go("video", {"videoId": videoId});
    }

    function rateVideo(video) {
      var session = vm.sessionId;
      return videosServices.rateVideo(video, session).then(function (data) {
			  if(data.status === 'success'){
          logger.success('update was succesfully');
				  vm.getVideos();
        }
			}, function (errors) {
				logger.error('Error get followers, Try again. ' + errors[0].error);
			});
    }
  }
})();
