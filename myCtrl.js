
app.controller('myCtrl', function($scope) {
    $scope.person = {
        firstName: "Gerard",
        lastName: "Sullivan"
    };
    $scope.points = [1, 15, 19, 2, 40];
    $scope.myCol = 'lightblue';
    $scope.quantity = 5;
    $scope.cost = 1;
})