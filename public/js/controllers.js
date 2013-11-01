lccApp.controller(
    // name of the service
    "InitialInfoCtrl",
    function InitialInfoCtrl(
    // this is where the dependency injection happens
    $scope,
    reportService,
    countryService
    ) {
        $scope.countries = countryService.getCountries();

        $scope.country = null;
        $scope.customerName = null;

        $scope.mainShown = true;
        $scope.applicationShown = false;
        $scope.purposeShown = false;

        $scope.active1 = "active";
        $scope.active2 = "";
        $scope.active3 = "";

        $scope.setQuery = function() { 
            var query = {
                customerName: this.customerName,
                country: this.country
            };
            reportService.generate(query);
        };

        $scope.getCountry = function() {
            return countryService.getCountry().name;
        };

        $scope.report = reportService.getReport();

        $scope.show = function(id) {
            console.log(id);
            if (id == "purpose") {
                $scope.purposeShown = true;
                $scope.mainShown = false;
                $scope.active2 = "active";
            }
            if (id == "application") {
                $scope.purposeShown = false;
                $scope.applicationShown = true;
                $scope.active3 = "active";
            }
        };
});

function toggle(booleanValue) {
    if (booleanValue) return false;
    return true;
}
