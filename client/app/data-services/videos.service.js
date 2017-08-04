(function () {
  'use strict';

  angular
    .module('app.data')
    .factory('videosServices', videosServices);

  videosServices.$inject = ['$http', '$q', 'exception', 'logger', '$timeout', '$rootScope', 'siteSettings'];
  /* @ngInject */
  function videosServices($http, $q, exception, logger, $timeout, $rootScope, siteSettings) {

    var self = this;

    var service = {
        getVideos: getVideos,
        getVideoDetail: getVideoDetail,
        rateVideo: rateVideo
        /*getUserMe: getUserMe,
        getUsername: getUsername,
        getFollowers: getFollowers,
        getFollowing: getFollowing,
        getFullUsername: getFullUsername,
        getFullUserMe: getFullUserMe,
        getTags: getTags,
        getScoreStats: getScoreStats,
        followCareerPals: followCareerPals,
        unfollowCareerPals: unfollowCareerPals,
        bucketsCareerPals: bucketsCareerPals,
        autocompleteLocation: autocompleteLocation */
    }

    return service;

    function getVideos(sessionId) {
        return $http.get(siteSettings.apiBaseUrl + '/videos?sessionId=' + sessionId)
            .then(getVideosComplete)
            .catch(getVideosFailed);

        function getVideosComplete(response) {
            return response.data;
        }

        function getVideosFailed(error) {
            var errors = exception.parseErrors(error, "Sorry, there was an error signing you up.");
            return errors;
        }
    }

    function getVideoDetail(sessionId, videoId) {
      return $http.get(siteSettings.apiBaseUrl + '/video?sessionId=' + sessionId + '&videoId=' + videoId)
        .then(getVideoDetail)
        .catch(getVideoDetailFailed);

        function getVideoDetail(response) {
          return response.data;
        }

        function getVideoDetailFailed(error) {
          var errors = exception.parseErrors(error, "Sorry, there was an error signing you up.");
          return errors;
        }
    }

    function rateVideo(video, sessionId) {
      var deferred = $q.defer();

        var data = {};
        data.videoId = video._id;
        data.rating = video.average;

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
