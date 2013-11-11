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

/**
 * Service that wraps d3.js
 */
angular.module('d3', []).factory('d3Service', ['$document', '$window', '$q', '$rootScope',
    function($document, $window, $q, $rootScope) {
        var d = $q.defer(),
            d3service = {
                d3: function() { return d.promise; }
            };
        function onScriptLoad() {
        // Load client in the browser
            $rootScope.$apply(function() { d.resolve($window.d3); });
        }
        var scriptTag = $document[0].createElement('script');
        scriptTag.type = 'text/javascript';
        scriptTag.async = true;
        scriptTag.src = 'libs/d3/d3.min.js';
        scriptTag.onreadystatechange = function () {
            if (this.readyState == 'complete') onScriptLoad();
        }
        scriptTag.onload = onScriptLoad;

        var s = $document[0].getElementsByTagName('body')[0];
        s.appendChild(scriptTag);

        return d3service;
    }
]);
