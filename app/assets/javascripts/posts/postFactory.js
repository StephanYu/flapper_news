angular.module('flapperNews')
.factory('postFactory', [function(){
  var postFactoryObject = {
    posts: []
  };
  return postFactoryObject;
}]);