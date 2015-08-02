import angular from 'angular';

import { routing } from './feature-a.config.js';
import FeatureACtrl from './feature-a.ctrl.js';

export default angular.module('app.feature-a', [])
    .config(routing)
    .controller('FeatureACtrl', FeatureACtrl)
    .name;