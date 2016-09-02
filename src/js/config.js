function config ($stateProvider, $urlRouterProvider) {

  $stateProvider
  .state('root', {
      abstract: true,
      templateUrl: 'templates/layout.tpl.html'
    })
  .state('root.home', {
    url:'/',
    templateUrl: 'templates/portfolio.tpl.html',
    controller: 'PortfolioController',
    controllerAs: 'vm'
  })
  $urlRouterProvider.otherwise('/');
}

config.$inject = ['$stateProvider', '$urlRouterProvider'];
export { config };