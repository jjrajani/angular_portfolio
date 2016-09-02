function funTimeHobbiesCard () {
  return {
    restrict: 'E',
    scope: {
      navTab: '=',
      language: '='
    },
    templateUrl: 'templates/portfolio/fun-time-hobbies.tpl.html'
  }
}

funTimeHobbiesCard.$inject = [];
export { funTimeHobbiesCard };