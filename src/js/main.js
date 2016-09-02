import $ from 'jquery';
import angular from 'angular';
import 'angular-ui-router';

// Config
import { config } from './config';
//Controllers
import { PortfolioController } from './controllers/portfolio.controller'
import { LanguagesController } from './controllers/languages.controller'
import { ProjectsController } from './controllers/projects.controller'
//Directives
import { navCard } from './directives/nav.directive';
import { projectsCard } from './directives/projects.directive';
import { languagesCard } from './directives/languages.directive';
import { bioCard } from './directives/bio.directive';
import { funTimeHobbiesCard } from './directives/fun-time-hobbies.directive';

angular
  .module('app', ['ui.router'])
  .config(config)
  //Controllers  
  .controller('PortfolioController', PortfolioController)
  .controller('ProjectsController', ProjectsController)
  .controller('LanguagesController', LanguagesController)
  //Directives
  .directive('navCard', navCard)
  .directive('projectsCard', projectsCard)
  .directive('languagesCard', languagesCard)
  .directive('bioCard', bioCard)
  .directive('funTimeHobbiesCard', funTimeHobbiesCard)
  ;