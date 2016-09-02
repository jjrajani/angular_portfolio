function LanguagesController () {

  let vm = this;
  vm.tab = tab;
  vm.currentTab = 7;

  function tab(num) {
    if (vm.currentTab == num) {
      vm.currentTab = 0;
    } else {
      vm.currentTab = num;
    }
  }

  console.log('languages');

}

LanguagesController.$inject = [];
export { LanguagesController };