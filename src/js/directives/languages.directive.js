function languagesCard () {
  return {
    restrict: 'E',
    scope: {
      navTab: '=',
      language: '='
    },
    templateUrl: 'templates/portfolio/languages.tpl.html',
    controller: 'LanguagesController',
    controllerAs: 'vm'
  }
};

languagesCard.$inject = [];
export { languagesCard };