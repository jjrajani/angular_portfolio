function bioCard () {
  return {
    restrict: 'E',
    scope: {
      navTab: '=',
      language: '='
    },
    templateUrl: 'templates/portfolio/bio.tpl.html'
  }
}

bioCard.$inject = [];
export { bioCard };