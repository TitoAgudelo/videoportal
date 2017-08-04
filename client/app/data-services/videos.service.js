(function () {
  'use strict';

  angular
    .module('app.data')
    .factory('videosServices', videosServices);

  videosServices.$inject = ['$http', '$q', 'exception', 'logger', '$timeout', '$rootScope', 'siteSettings'];
  /* @ngInject */
  function videosServices($http, $q, exception, logger, $timeout, $rootScope, siteSettings) {

    var self = this;

    /* service data object declaration */
    var service = {
        getVideos: getVideos,
        getVideoDetail: getVideoDetail,
        rateVideo: rateVideo
    }

    // return instance of services
    return service;

    /* perform to get videos */
    function getVideos(sessionId) {
        return $http.get(siteSettings.apiBaseUrl + '/videos?sessionId=' + sessionId)
            .then(getVideosComplete)
            .catch(getVideosFailed);

        // get videos request success
        function getVideosComplete(response) {
            return response.data;
        }

        // get videos failed
        function getVideosFailed(error) {
            var errors = exception.parseErrors(error, "Sorry, there was an error signing you up.");
            return errors;
        }
    }

    /* perform get video detail */
    function getVideoDetail(sessionId, videoId) {
      return $http.get(siteSettings.apiBaseUrl + '/video?sessionId=' + sessionId + '&videoId=' + videoId)
        .then(getVideoDetail)
        .catch(getVideoDetailFailed);

         // get video detail request success
        function getVideoDetail(response) {
          return response.data;
        }

        // get video detail failed
        function getVideoDetailFailed(error) {
          var errors = exception.parseErrors(error, "Sorry, there was an error signing you up.");
          return errors;
        }
    }

    /* perform ratevideo */
    function rateVideo(video, sessionId) {
      // var declaration
      var deferred = $q.defer();
      var data = {};
      data.videoId = video._id;
      data.rating = video.average;

      // ratings call http post
      $http({
          method: 'POST',
          url: siteSettings.apiBaseUrl + '/video/ratings?sessionId=' + sessionId,
          data: data
      }).success(function (data, status) {

          deferred.resolve(data);

      }).error(function (response) {

          var errors = exception.parseErrors(response, "Sorry, there was an error signing you up.");
          deferred.reject(errors);

      });

      return deferred.promise;
    }

  }
})();
