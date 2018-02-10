import angular from 'angular';
import uirouter from 'angular-ui-router';
import routes from './desk.route';
import DeskController from './desk.controller';

export default angular.module('newsfeed.desk', [uirouter])
    .config(routes)
    .controller('DeskController', DeskController)
    .name;