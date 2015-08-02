import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

import bootstrap from 'bootstrap';

import angular from 'angular';
import uirouter from 'angular-ui-router';

import { routing, routingEventsLogger } from './app.config';

import common from './common/common.module';

import featureA from './feature-a/feature-a.module';
import featureB from './feature-b/feature-b.module';

const DEBUG = false;

const app = angular
    .module('app', [uirouter, common, featureA, featureB])
    .config(routing);

if (DEBUG) {
    app
        .run(routingEventsLogger)
    ;
}
