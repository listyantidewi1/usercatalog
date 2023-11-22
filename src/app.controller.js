// app.controller.js
var app = angular.module('app', []);

app.controller('MyController', ['$scope', '$http', function($scope, $http) {
  $scope.currentPage = 1;
  $scope.customers = [];
  $scope.hasMoreData = true;

  $scope.loadCustomers = function() {
    var apiUrl = `https://retoolapi.dev/yZjtsj/customers?_page=${$scope.currentPage}&_limit=10`;

    $http.get(apiUrl).then(function(response) {
      var newData = response.data;

      // Check if there is more data
      if (newData.length > 0) {
        $scope.customers = $scope.customers.concat(newData);
        $scope.currentPage++;
      } else {
        $scope.hasMoreData = false;
      }
    });
  };

  $scope.prevPage = function() {
    if ($scope.currentPage > 1) {
      $scope.currentPage--;
      $scope.hasMoreData = true;
      $scope.loadCustomers();
    }
  };

  $scope.nextPage = function() {
    if ($scope.hasMoreData) {
      $scope.loadCustomers();
    }
  };

  // Initial load
  $scope.loadCustomers();
}]);
