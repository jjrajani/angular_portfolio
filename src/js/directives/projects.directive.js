function projectsCard () {
  return {
    restrict: 'E',
    scope: {
      navTab: '=',
      language: '='
    },
    templateUrl: 'templates/portfolio/projects.tpl.html',
    controller: 'ProjectsController',
    controllerAs: 'vm'
  };
}

projectsCard.$inject = [];
export { projectsCard };