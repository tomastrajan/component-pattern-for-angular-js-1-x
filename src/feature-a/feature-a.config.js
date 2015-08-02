export function routing($stateProvider) {

    $stateProvider
        .state('app.feature-a', {
            url: '/feature-a',
            controller: 'FeatureACtrl',
            controllerAs: 'ctrl',
            template: require('./feature-a.tpl.html')
        });
}