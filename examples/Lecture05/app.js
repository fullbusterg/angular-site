(function() {
    //we enabling certain thing to just protect us from mistake
    'use strict';
    //define main app that is going to be responsible for some HTML chuck in index.HTML
    //first it take the name of our aplication and list of dependency that out module or app will need in form of array
    //in this case we leave empty because no dependency for now, just regular angular plain app
    angular.module('myFirstApp', [])

    //for controller, is really the way the view model of our view is define, and takes two things
    //one, name of our view model or controller, and takes a function that define the function of our particular controller
    //scope is a special object angular provide for us in order to share data btw our view model and our view
    .controller('MyFirstController', function($scope) {
        $scope.name = "Ibrahim";

        $scope.sayHello = function() {
            return "Say Hello Ibrahim";
        };
    });

})();//we called it IIFE meaning, imediate invoke function expression, making sure that no local variables bleed into the global scope
