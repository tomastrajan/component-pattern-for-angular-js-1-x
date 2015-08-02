import angular from 'angular';
import uirouter from 'angular-ui-router';

import { routing, routingEventsLogger } from './app.config';

import state from './state/state.module';
import component from './component/component.module';

const DEBUG = false;

const app = angular
    .module('app', [uirouter, state, component])
    .config(routing);


if (DEBUG) {
    app
        .run(routingEventsLogger)
    ;
}
