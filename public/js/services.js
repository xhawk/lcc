lccApp.service('reportService', function() {

    this.report = {};

    /**
     *
     * @param query Query object to search products
     * @returns report
     */
    this.generate = function(query) {
        if (query.country.name == "Finland") {
            this.report.customerName = "Suomi";
        } else {
            this.report.customerName = "Ulkomaat";
        }

        return "PF60";
    };

    this.getReport = function() {
        return this.report;
    };
});

lccApp.service('countryService', function() {

    this.country;

    this.getCountries = function() {
        return [
           {name: "Finland"},
           {name: "Sweden"},
           {name: "Canada"}
        ];
    };

    this.setCountry = function(country) {
        this.country = country;
    };

    this.getCountry = function() {
        return this.country;
    };

});