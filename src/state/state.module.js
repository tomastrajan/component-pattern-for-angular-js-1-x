import angular from 'angular';
import uirouter from 'angular-ui-router';

import { routing } from './state.config';
import StateCtrl from './state.ctrl';

export default angular.module('app.state', [uirouter])
    .config(routing)
    .controller('StateCtrl', StateCtrl)
    .name;