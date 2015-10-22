var app = window.angular.module('app', []).config(function($sceDelegateProvider) {
  $sceDelegateProvider.resourceUrlWhitelist([
    'self',
    'https://www.youtube.com/**'
  ]);
});

app.factory('movieFetcher', movieFetcher)
app.controller('mainCtrl', mainCtrl)

function movieFetcher ($http) {

  var API_ROOT = 'movies'
  return {
    get: function () {
      return $http
        .get(API_ROOT)
        .then(function (resp) {
          return resp.data
        })
    }
  }

}

function mainCtrl ($scope, movieFetcher) {

  $scope.movies = []

  movieFetcher.get()
    .then(function (data) {
      $scope.movies = data
    })
}
