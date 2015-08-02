import angular from 'angular';

import { routing } from './feature-b.config.js';

import someComponent from './some-component/some-component';

export default angular
    .module('app.feature-b', [])
    .config(routing)
    .directive('someComponent', someComponent)
    .name;