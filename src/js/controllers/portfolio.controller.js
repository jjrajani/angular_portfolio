import $ from 'jquery';

function PortfolioController () {
console.log('portfolis')
  
  let vm = this;
  vm.navTab = 1;
  // vm.slide = ['slide-a', 'slide-b', 'slide-c'];
  vm.plusTab = plusTab;
  vm.minusTab = minusTab;

  // let content = $('.content');
  // content.addClass(vm.slide[1])

  console.log(vm.navTab)

  function plusTab() {
    if (vm.navTab === 3) {
      vm.navTab = 1
    } else {
      vm.navTab ++;
    }
    let content = $('#projects');
    console.log(content)
    content[0].classList = '';
  }

  function minusTab() {
    if (vm.navTab === 1) {
      vm.navTab = 3;
    } else {
      vm.navTab --;
    }
    let content = $('#projects');
    content[0].classList = '';
  }

}

PortfolioController.$inject = [];
export { PortfolioController };