"use strict";
var app=angular.module('portfolioDetail', ['slick','angular-svg-round-progressbar','angular-clipboard']);

/*Directive for  rest window hight */
app.directive('banner', function ($window) {

    return {
        link: function (scope, element) {

            var m = angular.element($window);

            if (m.innerWidth()<= 1340) {

                angular.element('body nav').css('left','-94px');
            }

            else{

                angular.element('body nav').css('left','0');
            }
        }
    };
});

