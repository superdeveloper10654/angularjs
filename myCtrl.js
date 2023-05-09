
app.controller('myCtrl', function($scope, $http) {
    $scope.person = {
        firstName: "Gerard",
        lastName: "Sullivan"
    };
    $scope.names = [
        {name:'Jani',country:'Norway'},
        {name:'Carl',country:'Sweden'},
        {name:'Margareth',country:'England'},
        {name:'Hege',country:'Norway'},
        {name:'Joe',country:'Denmark'},
        {name:'Gustav',country:'Sweden'},
        {name:'Birgit',country:'Denmark'},
        {name:'Mary',country:'England'},
        {name:'Kai',country:'Norway'}
    ];
    // $scope.myUrl = $location.absUrl();
    $scope.points = [1, 15, 19, 2, 40];
    $scope.myCol = 'lightblue';
    $scope.quantity = 5;
    $scope.cost = 1;
    $http.get("login.html").then(function (response) {
        $scope.myWelcome = response.data;
    });

    $scope.showName = function( ) {
        alert($scope.person.firstName + " " + $scope.person.lastName);
    };

    $scope.orderByMe = function(x) {
        $scope.myOrderBy = x;
    }
});