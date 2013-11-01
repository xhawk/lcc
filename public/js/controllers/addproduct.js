lccApp.controller("AddProductCtrl", function NavigationCtrl($scope) {
    $scope.product = {
        name: "",
        size: ""
    };

    $scope.products = [
        {
            name: "PF60",
            size: "60cm"
        }
    ]

    $scope.add = function() {
        $scope.products.push($scope.product);
        // placeholder for the service call to add product to database
        $scope.product = {name:"", size:""};
    }
});
