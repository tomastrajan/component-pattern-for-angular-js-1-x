import template from './feature-a.tpl.html'

export function routing($stateProvider) {

    $stateProvider
        .state('app.feature-a', {
            url: '/feature-a',
            controller: 'FeatureACtrl',
            controllerAs: 'ctrl',
            template: template
        });
}