angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    abstract:true
  })

  .state('menu.exercises', {
    url: '/page4',
    views: {
      'side-menu21': {
        templateUrl: 'templates/exercises.html',
        controller: 'exercisesCtrl'
      }
    }
  })

  .state('menu.workouts', {
    url: '/page5',
    views: {
      'side-menu21': {
        templateUrl: 'templates/workouts.html',
        controller: 'workoutsCtrl'
      }
    }
  })

  .state('menu.eatingAdvice', {
    url: '/page59',
    views: {
      'side-menu21': {
        templateUrl: 'templates/eatingAdvice.html',
        controller: 'eatingAdviceCtrl'
      }
    }
  })

  .state('menu.twitterFeeds', {
    url: '/page7',
    views: {
      'side-menu21': {
        templateUrl: 'templates/twitterFeeds.html',
        controller: 'twitterFeedsCtrl'
      }
    }
  })

  .state('page', {
    url: '/page8',
    templateUrl: 'templates/page.html',
    controller: 'pageCtrl'
  })

  .state('menu.shoulders', {
    url: '/page9',
    views: {
      'side-menu21': {
        templateUrl: 'templates/shoulders.html',
        controller: 'shouldersCtrl'
      }
    }
  })

  .state('menu.chest', {
    url: '/page11',
    views: {
      'side-menu21': {
        templateUrl: 'templates/chest.html',
        controller: 'chestCtrl'
      }
    }
  })

  .state('menu.back', {
    url: '/page12',
    views: {
      'side-menu21': {
        templateUrl: 'templates/back.html',
        controller: 'backCtrl'
      }
    }
  })

  .state('menu.legs', {
    url: '/page13',
    views: {
      'side-menu21': {
        templateUrl: 'templates/legs.html',
        controller: 'legsCtrl'
      }
    }
  })

  .state('menu.arms', {
    url: '/page10',
    views: {
      'side-menu21': {
        templateUrl: 'templates/arms.html',
        controller: 'armsCtrl'
      }
    }
  })

  .state('menu.cableCrossover', {
    url: '/page15',
    views: {
      'side-menu21': {
        templateUrl: 'templates/cableCrossover.html',
        controller: 'cableCrossoverCtrl'
      }
    }
  })

  .state('menu.benchPress', {
    url: '/page58',
    views: {
      'side-menu21': {
        templateUrl: 'templates/benchPress.html',
        controller: 'benchPressCtrl'
      }
    }
  })

  .state('menu.dumbbellFly', {
    url: '/page16',
    views: {
      'side-menu21': {
        templateUrl: 'templates/dumbbellFly.html',
        controller: 'dumbbellFlyCtrl'
      }
    }
  })

  .state('menu.dumbbellPullover', {
    url: '/page17',
    views: {
      'side-menu21': {
        templateUrl: 'templates/dumbbellPullover.html',
        controller: 'dumbbellPulloverCtrl'
      }
    }
  })

  .state('menu.dipsForChest', {
    url: '/page18',
    views: {
      'side-menu21': {
        templateUrl: 'templates/dipsForChest.html',
        controller: 'dipsForChestCtrl'
      }
    }
  })

  .state('menu.dumbbellPress', {
    url: '/page19',
    views: {
      'side-menu21': {
        templateUrl: 'templates/dumbbellPress.html',
        controller: 'dumbbellPressCtrl'
      }
    }
  })

  .state('menu.pressUps', {
    url: '/page20',
    views: {
      'side-menu21': {
        templateUrl: 'templates/pressUps.html',
        controller: 'pressUpsCtrl'
      }
    }
  })

  .state('menu.seatedMachineChestPress', {
    url: '/page21',
    views: {
      'side-menu21': {
        templateUrl: 'templates/seatedMachineChestPress.html',
        controller: 'seatedMachineChestPressCtrl'
      }
    }
  })

  .state('menu.dumbbellShoulderPress', {
    url: '/page22',
    views: {
      'side-menu21': {
        templateUrl: 'templates/dumbbellShoulderPress.html',
        controller: 'dumbbellShoulderPressCtrl'
      }
    }
  })

  .state('menu.lateralRaise', {
    url: '/page23',
    views: {
      'side-menu21': {
        templateUrl: 'templates/lateralRaise.html',
        controller: 'lateralRaiseCtrl'
      }
    }
  })

  .state('menu.frontBarbellRaise', {
    url: '/page24',
    views: {
      'side-menu21': {
        templateUrl: 'templates/frontBarbellRaise.html',
        controller: 'frontBarbellRaiseCtrl'
      }
    }
  })

  .state('menu.machineShoulderPress', {
    url: '/page25',
    views: {
      'side-menu21': {
        templateUrl: 'templates/machineShoulderPress.html',
        controller: 'machineShoulderPressCtrl'
      }
    }
  })

  .state('menu.reverseMachineFly', {
    url: '/page26',
    views: {
      'side-menu21': {
        templateUrl: 'templates/reverseMachineFly.html',
        controller: 'reverseMachineFlyCtrl'
      }
    }
  })

  .state('menu.arnoldDumbbellPress', {
    url: '/page27',
    views: {
      'side-menu21': {
        templateUrl: 'templates/arnoldDumbbellPress.html',
        controller: 'arnoldDumbbellPressCtrl'
      }
    }
  })

  .state('menu.dumbbellShrugs', {
    url: '/page28',
    views: {
      'side-menu21': {
        templateUrl: 'templates/dumbbellShrugs.html',
        controller: 'dumbbellShrugsCtrl'
      }
    }
  })

  .state('menu.uprightRow', {
    url: '/page29',
    views: {
      'side-menu21': {
        templateUrl: 'templates/uprightRow.html',
        controller: 'uprightRowCtrl'
      }
    }
  })

  .state('menu.dumbbellCurl', {
    url: '/page30',
    views: {
      'side-menu21': {
        templateUrl: 'templates/dumbbellCurl.html',
        controller: 'dumbbellCurlCtrl'
      }
    }
  })

  .state('menu.eZBarBicepsCurl', {
    url: '/page31',
    views: {
      'side-menu21': {
        templateUrl: 'templates/eZBarBicepsCurl.html',
        controller: 'eZBarBicepsCurlCtrl'
      }
    }
  })

  .state('menu.alternatingDumbbellCurl', {
    url: '/page32',
    views: {
      'side-menu21': {
        templateUrl: 'templates/alternatingDumbbellCurl.html',
        controller: 'alternatingDumbbellCurlCtrl'
      }
    }
  })

  .state('menu.hammerDumbbellCurl', {
    url: '/page33',
    views: {
      'side-menu21': {
        templateUrl: 'templates/hammerDumbbellCurl.html',
        controller: 'hammerDumbbellCurlCtrl'
      }
    }
  })

  .state('menu.closeGripBenchPress', {
    url: '/page34',
    views: {
      'side-menu21': {
        templateUrl: 'templates/closeGripBenchPress.html',
        controller: 'closeGripBenchPressCtrl'
      }
    }
  })

  .state('menu.dumbbellOverheadTricepsPress', {
    url: '/page35',
    views: {
      'side-menu21': {
        templateUrl: 'templates/dumbbellOverheadTricepsPress.html',
        controller: 'dumbbellOverheadTricepsPressCtrl'
      }
    }
  })

  .state('menu.skullCrushers', {
    url: '/page36',
    views: {
      'side-menu21': {
        templateUrl: 'templates/skullCrushers.html',
        controller: 'skullCrushersCtrl'
      }
    }
  })

  .state('menu.tricepsPushdown', {
    url: '/page37',
    views: {
      'side-menu21': {
        templateUrl: 'templates/tricepsPushdown.html',
        controller: 'tricepsPushdownCtrl'
      }
    }
  })

  .state('menu.backSquat', {
    url: '/page38',
    views: {
      'side-menu21': {
        templateUrl: 'templates/backSquat.html',
        controller: 'backSquatCtrl'
      }
    }
  })

  .state('menu.deadlift', {
    url: '/page39',
    views: {
      'side-menu21': {
        templateUrl: 'templates/deadlift.html',
        controller: 'deadliftCtrl'
      }
    }
  })

  .state('menu.frontSquat', {
    url: '/page40',
    views: {
      'side-menu21': {
        templateUrl: 'templates/frontSquat.html',
        controller: 'frontSquatCtrl'
      }
    }
  })

  .state('menu.bulgarianSplitSquat', {
    url: '/page41',
    views: {
      'side-menu21': {
        templateUrl: 'templates/bulgarianSplitSquat.html',
        controller: 'bulgarianSplitSquatCtrl'
      }
    }
  })

  .state('menu.calfRaises', {
    url: '/page42',
    views: {
      'side-menu21': {
        templateUrl: 'templates/calfRaises.html',
        controller: 'calfRaisesCtrl'
      }
    }
  })

  .state('menu.dumbbellLunge', {
    url: '/page43',
    views: {
      'side-menu21': {
        templateUrl: 'templates/dumbbellLunge.html',
        controller: 'dumbbellLungeCtrl'
      }
    }
  })

  .state('menu.legPress', {
    url: '/page44',
    views: {
      'side-menu21': {
        templateUrl: 'templates/legPress.html',
        controller: 'legPressCtrl'
      }
    }
  })

  .state('menu.bentOverBarbellRow', {
    url: '/page45',
    views: {
      'side-menu21': {
        templateUrl: 'templates/bentOverBarbellRow.html',
        controller: 'bentOverBarbellRowCtrl'
      }
    }
  })

  .state('menu.standingTBarRow', {
    url: '/page46',
    views: {
      'side-menu21': {
        templateUrl: 'templates/standingTBarRow.html',
        controller: 'standingTBarRowCtrl'
      }
    }
  })

  .state('menu.wideGripPullUp', {
    url: '/page47',
    views: {
      'side-menu21': {
        templateUrl: 'templates/wideGripPullUp.html',
        controller: 'wideGripPullUpCtrl'
      }
    }
  })

  .state('menu.wideGripSeatedCableRow', {
    url: '/page48',
    views: {
      'side-menu21': {
        templateUrl: 'templates/wideGripSeatedCableRow.html',
        controller: 'wideGripSeatedCableRowCtrl'
      }
    }
  })

  .state('menu.closeGripPullDowns', {
    url: '/page49',
    views: {
      'side-menu21': {
        templateUrl: 'templates/closeGripPullDowns.html',
        controller: 'closeGripPullDownsCtrl'
      }
    }
  })

  .state('menu.singleArmDumbbellRow', {
    url: '/page50',
    views: {
      'side-menu21': {
        templateUrl: 'templates/singleArmDumbbellRow.html',
        controller: 'singleArmDumbbellRowCtrl'
      }
    }
  })

  .state('menu.weightLossMealIdeas', {
    url: '/page51',
    views: {
      'side-menu21': {
        templateUrl: 'templates/weightLossMealIdeas.html',
        controller: 'weightLossMealIdeasCtrl'
      }
    }
  })

  .state('menu.weightGainMealIdeas', {
    url: '/page52',
    views: {
      'side-menu21': {
        templateUrl: 'templates/weightGainMealIdeas.html',
        controller: 'weightGainMealIdeasCtrl'
      }
    }
  })

  .state('menu.healthySnackIdeas', {
    url: '/page53',
    views: {
      'side-menu21': {
        templateUrl: 'templates/healthySnackIdeas.html',
        controller: 'healthySnackIdeasCtrl'
      }
    }
  })

  .state('menu.noGymHitWorkout', {
    url: '/page54',
    views: {
      'side-menu21': {
        templateUrl: 'templates/noGymHitWorkout.html',
        controller: 'noGymHitWorkoutCtrl'
      }
    }
  })

  .state('menu.15MinuteMuscleWorkout', {
    url: '/page55',
    views: {
      'side-menu21': {
        templateUrl: 'templates/15MinuteMuscleWorkout.html',
        controller: '15MinuteMuscleWorkoutCtrl'
      }
    }
  })

  .state('menu.shortCircuitTrainingWorkout', {
    url: '/page56',
    views: {
      'side-menu21': {
        templateUrl: 'templates/shortCircuitTrainingWorkout.html',
        controller: 'shortCircuitTrainingWorkoutCtrl'
      }
    }
  })

  .state('menu.allAboutAbsWorkout', {
    url: '/page57',
    views: {
      'side-menu21': {
        templateUrl: 'templates/allAboutAbsWorkout.html',
        controller: 'allAboutAbsWorkoutCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/side-menu21/page4')

  

});