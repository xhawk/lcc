lccApp.controller("NavigationCtrl", function NavigationCtrl($scope, $location) {
    $scope.nav = {
        title: "Outotec LCC App",
        items: [
            {
                name: "Start",
                ref: "/"
            },
            {
                name: "Report",
                ref: "/report"
            },{
                name: "Add product",
                ref: "/addproduct"
            }
        ]
    }

    /**
     *
     * @param id page id
     * @returns {string} active if location is the same
     */
    $scope.isActive = function(id) {
        return id == $location.path()? "active" : "";
    }
});
