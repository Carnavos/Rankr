"use strict";

describe('TwitterFactory', function () {

    var scope, controller, TwitterFactory, constants;

    beforeEach(function () {

        inject(function (_settings_, $injector, $controller, _$rootScope_) {

            $rootScope = _$rootScope_;
            scope = $rootScope.$new();
            constants = _settings_;

            TwitterFactory = function () {
                return $injector.get('TwitterFactory');
            };

            controller = $controller;
            controller('MainCtrl', { '$scope': scope });
        });

    });

    it('should return an object with a getRecentTweets function', function() {
      expect(TwitterFactory.getRecentTweets).toBeDefined();
    
    });

});