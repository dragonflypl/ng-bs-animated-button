'use strict';

var app = angular.module('demoApp', ['jp.ng-bs-animated-button']);

app.controller('demo1Ctrl', function($q, $scope, $interval, $timeout, jpNgBsButtonController) {
  
  $scope.btnCtrl = jpNgBsButtonController.createSave();

  $scope.fakeSubmit = function() {
    var dfd = $q.defer();
    
    $scope.btnCtrl.start(dfd.promise);
    $timeout(function(){
      dfd.resolve();
    }, 2000);
  };
  
  $interval($scope.fakeSubmit, 6000);
  
  $scope.fakeSubmit();

});

app.controller('demo2Ctrl', function($q, $scope, $interval, $timeout, jpNgBsButtonController) {

  $scope.btnCtrl = jpNgBsButtonController.createReset({
    buttonErrorText: 'Failed to reset'
  });

  $scope.fakeSubmit = function() {
    var dfd = $q.defer();
    
    $scope.btnCtrl.start(dfd.promise);
    $timeout(function(){
      dfd.reject();
    }, 2000);
  };
  
  $interval($scope.fakeSubmit, 6000);
  
  $scope.fakeSubmit();

});

app.controller('demo3Ctrl', function($scope, $timeout) {

  $scope.isSubmitting = null;
  $scope.result = null;

  $scope.options = {
    iconsPosition: 'right'
  };

  $scope.fakeSubmit = function() {
    $scope.isSubmitting = true;
    $timeout(function(){
      $scope.result = 'success';
    }, 2000);
  };

});

app.controller('demo4Ctrl', function($scope, $timeout) {

  $scope.isSubmitting = null;
  $scope.result = null;

  $scope.options = {
    buttonDefaultClass: 'btn-default',
    buttonSubmittingClass: 'btn-info',
    buttonSuccessClass: 'btn-success',
  };

  $scope.fakeSubmit = function() {
    $scope.isSubmitting = true;
    $timeout(function(){
      $scope.result = 'success';
    }, 2000);
  };

});

app.controller('demo5Ctrl', function($scope, $timeout) {

  $scope.isSubmitting = null;
  $scope.result = null;

  $scope.options = {
    buttonDefaultText: '',
    buttonSubmittingText: '',
    buttonSuccessText: ''
  };

  $scope.fakeSubmit = function() {
    $scope.isSubmitting = true;
    $timeout(function(){
      $scope.result = 'success';
    }, 2000);
  };

});

app.controller('demo6Ctrl', function($scope, $timeout) {

  $scope.isSubmitting = null;
  $scope.result = null;

  $scope.options = {
    buttonSubmittingIcon: 'fa fa-spinner',
    buttonSuccessIcon: 'fa fa-smile-o'
  };

  $scope.fakeSubmit = function() {
    $scope.isSubmitting = true;
    $timeout(function(){
      $scope.result = 'success';
    }, 2000);
  };

});

app.controller('demo7Ctrl', function($scope, $timeout) {

  $scope.isSubmitting = null;
  $scope.result = null;

  $scope.options = {
    animationCompleteTime: '5000'
  };

  $scope.fakeSubmit = function() {
    $scope.isSubmitting = true;
    $timeout(function(){
      $scope.result = 'success';
    }, 2000);
  };

});

app.controller('demo8Ctrl', function($scope, $timeout) {

  $scope.isSubmitting = null;
  $scope.result = null;

  $scope.options = {
    buttonSizeClass: 'btn-lg'
  };

  $scope.fakeSubmit = function() {
    $scope.isSubmitting = true;
    $timeout(function(){
      $scope.result = 'success';
    }, 2000);
  };

});

app.controller('demo9Ctrl', function($scope, $timeout) {

  $scope.isSubmitting = null;
  $scope.result = null;

  $scope.options = {
    onlyIcons: true
  };

  $scope.fakeSubmit = function() {
    $scope.isSubmitting = true;
    $timeout(function(){
      $scope.result = 'success';
    }, 2000);
  };

});

app.controller('demo10Ctrl', function($scope, $timeout) {

  $scope.isSubmitting = null;
  $scope.result = null;

  $scope.options = {
    onlyIcons: true,
    buttonInitialIcon: 'fa fa-send',
    buttonSubmittingIcon: 'fa fa-circle-o-notch',
    buttonSuccessIcon: 'fa fa-thumbs-up'
  };

  $scope.fakeSubmit = function() {
    $scope.isSubmitting = true;
    $timeout(function(){
      $scope.result = 'success';
    }, 2000);
  };

});


