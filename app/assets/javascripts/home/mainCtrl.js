angular.module('flapperNews')
.controller('MainCtrl', ['$scope', 'postFactory', function($scope, postFactory){
  
  $scope.posts = postFactory.posts;

  $scope.addPost = function(){
    if(!$scope.title || $scope.title === '') { return; }
    postFactory.create({
      title: $scope.title,
      link: $scope.link,
      upvotes: 0,
      comments: [
        {author: 'Joe', body: 'Cool post!', upvotes: 0},
        {author: 'Bob', body: 'Great idea but everything is wrong!', upvotes: 0}
      ]
    });
    $scope.title = '';
    $scope.link = '';
    };

  $scope.incrementUpvotes = function(post) {
    postFactory.upvote(post);
    // posts.upvote(post);
  };

}]);