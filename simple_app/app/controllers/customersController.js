//Option 3
//wrapper function will make names not in global scope, good in long run working on big applications
(function () {
    var CustomersController = function ($scope, customersService) {
        $scope.sortBy = 'name';
        $scope.reverse = false;

        function init() {
            $scope.customers = customersService.getCustomers();
        }
        
        init();
        
        $scope.doSort = function (propName) {
            $scope.sortBy = propName;
            $scope.reverse = !$scope.reverse;
        };
    };

    CustomersController.$inject = ['$scope', 'customersService'];
    angular.module('customersApp').controller('CustomersController', CustomersController);
}());

//Option 1
/*app.controller('CustomersController', function ($scope) {
    $scope.sortBy = 'name';
    $scope.reverse = false;
    $scope.customers = [
        {
            joined: '2000-12-02',
            name: 'John',
            city: 'Chandler',
            orderTotal: 9.9956
        },
        {
            joined: '1965-01-25',
            name: 'Zed',
            city: 'Las Vegas',
            orderTotal: 19.99
        },
        {
            joined: '1944-06-15',
            name: 'Tina',
            city: 'New York',
            orderTotal: 44.99
        },
        {
            joined: '1995-03-28',
            name: 'Dave',
            city: 'Seattle',
            orderTotal: 101.50
        }
    ];
    $scope.doSort = function (propName) {
        $scope.sortBy = propName;
        $scope.reverse = !$scope.reverse;
    };
});
*/

//option 2
/*(function () {
    var CustomersController = function ($scope) {
        $scope.sortBy = 'name';
        $scope.reverse = false;
        $scope.customers = [
            {
                joined: '2000-12-02',
                name: 'John',
                city: 'Chandler',
                orderTotal: 9.9956
        },
            {
                joined: '1965-01-25',
                name: 'Zed',
                city: 'Las Vegas',
                orderTotal: 19.99
        },
            {
                joined: '1944-06-15',
                name: 'Tina',
                city: 'New York',
                orderTotal: 44.99
        },
            {
                joined: '1995-03-28',
                name: 'Dave',
                city: 'Seattle',
                orderTotal: 101.50
        }
    ];
        $scope.doSort = function (propName) {
            $scope.sortBy = propName;
            $scope.reverse = !$scope.reverse;
        };
    };
}());
*/