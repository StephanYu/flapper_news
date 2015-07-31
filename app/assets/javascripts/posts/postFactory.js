angular.module('flapperNews')
.factory('postFactory', [
'$http', 
function($http) {
  var postFactoryObject = {
    posts: [],
    getAll: function() {
      return $http.get('/posts.json').success(function(data){
        angular.copy(data, postFactoryObject.posts);
      }
    },
    create: function(post) {
      return $http.post('/posts.json', post).success(function(data){
        postFactoryObject.posts.push(data);
      });
    },
    upvote: function(post) {
      return $http.put('/posts/' + post.id + '/upvote.json')
        .success(function(data){
          post.upvotes += 1;
      });
    },
    get: function(id) {
      return $http.get('/posts/' + id + '.json').then(function(res){
        return res.data;
      });
    },
    addComment: function(id, comment) {
      return $http.post('/posts/' + id + '/comments.json', comment);
    },
    upvoteComment: function(post, comment) {
      return $http.put('/posts/' + post.id + '/comments/'+ comment.id + '/upvote.json')
        .success(function(data){
          comment.upvotes += 1;
      });
    }
  };
  return postFactoryObject;
}]);