angular.module("rnpApp")
    .controller("rnpController",
        [   '$scope', 'NgTableParams', 'maintenanceService',
            function ($scope, NgTableParams, maintenanceService) {
                $scope.test = 'AAA';
                $scope.tableParams = new NgTableParams({
                        sorting: {
                            from: 'desc'
                    }});

                function loadTableData() {
                    maintenanceService.get()
                        .then(updateTableData);
                }

                function updateTableData(dataset) {
                    $scope.tableParams.settings({ dataset: dataset });
                    $scope.tableParams.reload();
                }

                loadTableData();
            }
        ]);