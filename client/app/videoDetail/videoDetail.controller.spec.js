/* jshint -W117, -W030 */
describe('VideoDetailController', function() {
  var controller;

  beforeEach(function() {
    bard.appModule('app.video');
    bard.inject('$controller', '$log', '$rootScope');
  });

  beforeEach(function() {
    controller = $controller('VideoDetailController');
    $rootScope.$apply();
  });

  bard.verifyNoOutstandingHttpRequests();

  describe('Video Detail controller', function() {
    it('should be created successfully', function() {
      expect(controller).to.be.defined;
    });

    describe('after activate', function() {
      it('should have title of Detail', function() {
        expect(controller.title).to.equal('Detail');
      });

      it('should have logged "Activated"', function() {
        expect($log.info.logs).to.match(/Activated/);
      });
    });
  });
});
