angular.module('flapperNews')
.controller('PostsCtrl', [
'$scope',
'postFactory', 
'post'
function($scope, postFactory, post){

  $scope.post = post;

  $scope.addComment = function(){
    if($scope.body === '') { return; }
    postFactory.addComment(post.id, {
      body: $scope.body,
      author: 'user'
    }).success(function(comment) {
      $scope.post.comments.push(comment);
    });
    $scope.body = '';
  };

  $scope.incrementUpvotes = function(comment){
    postFactory.upvoteComment(post, comment);
  };
}]);