var app = angular.module('myApp',['ngMessages'])
    .controller('myCtrl', function($scope){
        var vm = this;
        vm.newObject = {},
        vm.validForm = false,
        vm.questionInput = [
            {placeholder:"adjective", model:"adj1"},
            {placeholder:"adjective", model:"adj2"},
            {placeholder:"adjective", model:"adj3"},
            {placeholder:"noun", model:"noun1"},
            {placeholder:"noun", model:"noun2"},
            {placeholder:"verb ending in ed", model:"verbed1"},
            {placeholder:"noun", model:"noun3"},
            {placeholder:"noun", model:"noun4"},
            {placeholder:"place", model:"place"},
            {placeholder:"noun", model:"noun5"},
            {placeholder:"adjective", model:"adj4"},
            {placeholder:"verb ending in ing", model:"verbing"},
            {placeholder:"noun", model:"noun6"},
            {placeholder:"verb ending in ed", model:"verbed2"},
            {placeholder:"adverb", model:"adverb"},
            {placeholder:"plural noun", model:"nounP"},
            {placeholder:"adjective", model:"adj5"},
            {placeholder:"adjective", model:"adj6"},
            {placeholder:"adjective", model:"adj7"},
            {placeholder:"female name", model:"femalename"}
        ],
        vm.submit = function(){
            if ($scope.madLibForm.$valid) {
                console.log('The form is valid');
                vm.validForm = true;
                
            } else {
                console.log('The form is invalid');
                
            }
        },
        vm.reset = function(){
            vm.newObject = {};
            vm.validForm = false;
        }
        
});        
