function ProjectsController ($rootScope) {
  let vm = this;
  vm.go = go;
  
  console.log('projects')

  function go(url){
    window.location = url;
  }

}


ProjectsController.$inject = ['$rootScope'];
export { ProjectsController };