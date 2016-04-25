angular.module('app.controllers', [])
     
.controller('exercisesCtrl', function($scope) {

})
   
.controller('workoutsCtrl', function($scope) {

})
   
.controller('eatingAdviceCtrl', function($scope, $http) {
    
})
   
.controller('twitterFeedsCtrl', function($scope) {

})
   
.controller('pageCtrl', function($scope) {

})
   
.controller('shouldersCtrl', function($scope) {

})
   
.controller('chestCtrl', function($scope) {

})
   
.controller('backCtrl', function($scope) {

})
   
.controller('legsCtrl', function($scope) {

})
   
.controller('armsCtrl', function($scope) {

})
   
.controller('cableCrossoverCtrl', function($scope) {

})
   
.controller('benchPressCtrl', function($scope) {

})
   
.controller('dumbbellFlyCtrl', function($scope) {

})
   
.controller('dumbbellPulloverCtrl', function($scope) {

})
   
.controller('dipsForChestCtrl', function($scope) {

})
   
.controller('dumbbellPressCtrl', function($scope) {

})
   
.controller('pressUpsCtrl', function($scope) {

})
   
.controller('seatedMachineChestPressCtrl', function($scope) {

})
   
.controller('dumbbellShoulderPressCtrl', function($scope) {

})
   
.controller('lateralRaiseCtrl', function($scope) {

})
   
.controller('frontBarbellRaiseCtrl', function($scope) {

})
   
.controller('machineShoulderPressCtrl', function($scope) {

})
   
.controller('reverseMachineFlyCtrl', function($scope) {

})
   
.controller('arnoldDumbbellPressCtrl', function($scope) {

})
   
.controller('dumbbellShrugsCtrl', function($scope) {

})
   
.controller('uprightRowCtrl', function($scope) {

})
   
.controller('dumbbellCurlCtrl', function($scope) {

})
   
.controller('eZBarBicepsCurlCtrl', function($scope) {

})
   
.controller('alternatingDumbbellCurlCtrl', function($scope) {

})
   
.controller('hammerDumbbellCurlCtrl', function($scope) {

})
   
.controller('closeGripBenchPressCtrl', function($scope) {

})
   
.controller('dumbbellOverheadTricepsPressCtrl', function($scope) {

})
   
.controller('skullCrushersCtrl', function($scope) {

})
   
.controller('tricepsPushdownCtrl', function($scope) {

})
   
.controller('backSquatCtrl', function($scope) {

})
   
.controller('deadliftCtrl', function($scope) {

})
   
.controller('frontSquatCtrl', function($scope) {

})
   
.controller('bulgarianSplitSquatCtrl', function($scope) {

})
   
.controller('calfRaisesCtrl', function($scope) {

})
   
.controller('dumbbellLungeCtrl', function($scope) {

})
   
.controller('legPressCtrl', function($scope) {

})
   
.controller('bentOverBarbellRowCtrl', function($scope) {

})
   
.controller('standingTBarRowCtrl', function($scope) {

})
   
.controller('wideGripPullUpCtrl', function($scope) {

})
   
.controller('wideGripSeatedCableRowCtrl', function($scope) {

})
   
.controller('closeGripPullDownsCtrl', function($scope) {

})
   
.controller('singleArmDumbbellRowCtrl', function($scope) {

})
   
.controller('weightLossMealIdeasCtrl', function($scope, $http) {
        $scope.newTask = function() {
        $http({
            method: 'GET',
            url: 'http://pauldolan123.cloudapp.net/eatingloss.php',
        }).success(function(data) {
            $scope.description = data;
        })
          .error(function(data) {
            $scope.description = "No categories found by that name";
        })
    }
})
   
.controller('weightGainMealIdeasCtrl', function($scope, $http) {
    $scope.newTask = function() {
        $http({
            method: 'GET',
            url: 'http://pauldolan123.cloudapp.net/eatinggain.php',
        }).success(function(data) {
            $scope.description = data;
        })
          .error(function(data) {
            $scope.description = "No categories found by that name";
        })
    }
})
   
.controller('healthySnackIdeasCtrl', function($scope, $http) {
        $scope.newTask = function() {
        $http({
            method: 'GET',
            url: 'http://pauldolan123.cloudapp.net/eatingsnacks.php',
        }).success(function(data) {
            $scope.description = data;
        })
          .error(function(data) {
            $scope.description = "No categories found by that name";
        })
    }
})
   
.controller('noGymHitWorkoutCtrl', function($scope, $http) {
        $scope.newTask = function() {
        $http({
            method: 'GET',
            url: 'http://pauldolan123.cloudapp.net/nogymhit.php',
        }).success(function(data) {
            $scope.description = data;
        })
          .error(function(data) {
            $scope.description = "No categories found by that name";
        })
    }
})
   
.controller('15MinuteMuscleWorkoutCtrl', function($scope, $http) {
        $scope.newTask = function() {
        $http({
            method: 'GET',
            url: 'http://pauldolan123.cloudapp.net/15minute.php',
        }).success(function(data) {
            $scope.description = data;
        })
          .error(function(data) {
            $scope.description = "No categories found by that name";
        })
    }
})
   
.controller('shortCircuitTrainingWorkoutCtrl', function($scope, $http) {
        $scope.newTask = function() {
        $http({
            method: 'GET',
            url: 'http://pauldolan123.cloudapp.net/shortcircuit.php',
        }).success(function(data) {
            $scope.description = data;
        })
          .error(function(data) {
            $scope.description = "No categories found by that name";
        })
    }
})
   
.controller('allAboutAbsWorkoutCtrl', function($scope, $http) {
        $scope.newTask = function() {
        $http({
            method: 'GET',
            url: 'http://pauldolan123.cloudapp.net/abs.php',
        }).success(function(data) {
            $scope.description = data;
        })
          .error(function(data) {
            $scope.description = "No categories found by that name";
        })
    }
})
 