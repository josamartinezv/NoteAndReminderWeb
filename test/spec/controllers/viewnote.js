'use strict';

describe('Controller: ViewnoteCtrl', function () {

  // load the controller's module
  beforeEach(module('noteAndReminderWebApp'));

  var ViewnoteCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ViewnoteCtrl = $controller('ViewnoteCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
