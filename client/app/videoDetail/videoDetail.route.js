(function() {
  'use strict';

  angular
    .module('app.video')
    .run(appRun);

  appRun.$inject = ['routerHelper'];
  /* @ngInject */
  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [
      {
        state: 'video',
        config: {
          url: '/video/?videoId=',
          templateUrl: 'app/videoDetail/videoDetail.html',
          controller: 'VideoDetailController',
          controllerAs: 'vm',
          title: 'video detail',
          settings: {
            nav: 1,
            content: '<i class="fa fa-dashboard"></i>'
          }
        }
      }
    ];
  }
})();
