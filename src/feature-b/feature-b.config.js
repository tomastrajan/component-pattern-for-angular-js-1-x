export function routing($stateProvider) {

    $stateProvider
        .state('app.feature-b', {
            url: '/feature-b',
            template: '<div some-component></div>'
        });
}