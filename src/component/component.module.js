import angular from 'angular';
import uirouter from 'angular-ui-router';

import { routing } from './component.config';

export default angular.module('app.component', [uirouter])
    .config(routing)
    .name;