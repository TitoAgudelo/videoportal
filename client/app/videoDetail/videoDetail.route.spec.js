/* jshint -W117, -W030 */
describe('video routes', function() {
  describe('state', function() {
    var view = 'app/videoDetail/videoDetail.html';

    beforeEach(function() {
      module('app.video', bard.fakeToastr);
      bard.inject('$httpBackend', '$location', '$rootScope', '$state', '$templateCache');
    });

    beforeEach(function() {
      $templateCache.put(view, '');
    });

    it('should map state video to url /video ', function() {
      expect($state.href('video', {})).to.equal('/video');
    });

    it('should map /video route to video View template', function() {
      expect($state.get('video').templateUrl).to.equal(view);
    });

    it('of admin should work with $state.go', function() {
      $state.go('video');
      $rootScope.$apply();
      expect($state.is('video'));
    });
  });
});
