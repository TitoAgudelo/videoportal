/* jshint -W117, -W030 */
describe('VideosController', function() {
  var controller;

  beforeEach(function() {
    bard.appModule('app.videos');
    bard.inject('$controller', '$log', '$rootScope');
  });

  beforeEach(function() {
    controller = $controller('VideosController');
    $rootScope.$apply();
  });

  bard.verifyNoOutstandingHttpRequests();

  describe('Videos controller', function() {
    it('should be created successfully', function() {
      expect(controller).to.be.defined;
    });

    describe('after activate', function() {
      it('should have title of Detail', function() {
        expect(controller.title).to.equal('Videos');
      });

      it('should have logged "Activated"', function() {
        expect($log.info.logs).to.match(/Activated/);
      });
    });
  });
});





  // describe('Dashboard controller', function() {
  //   it('should be created successfully', function() {
  //     expect(controller).to.be.defined;
  //   });

  //   describe('after activate', function() {
  //     it('should have title of Dashboard', function() {
  //       expect(controller.title).to.equal('Dashboard');
  //     });

  //     it('should have logged "Activated"', function() {
  //       expect($log.info.logs).to.match(/Activated/);
  //     });

  //     it('should have news', function() {
  //       expect(controller.news).to.not.be.empty;
  //     });

  //     it('should have at least 1 person', function() {
  //       expect(controller.people).to.have.length.above(0);
  //     });

  //     it('should have people count of 5', function() {
  //       expect(controller.people).to.have.length(7);
  //     });
  //   });
  // });
