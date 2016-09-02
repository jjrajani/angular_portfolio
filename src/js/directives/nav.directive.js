function navCard () {
  return {
    restrict: 'E',
    scope: {
      navTab: '=',
      language: '='
    },
    templateUrl: 'templates/portfolio/nav.tpl.html',
    controller: 'NavController',
    controllerAs: 'vm'
  }
}

navCard.$inject = [];
export { navCard } ;