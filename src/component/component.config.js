export function routing($stateProvider) {

    $stateProvider
        .state('app.component', {
            url: '/component',
            template: '<p>component</p>'
        });
}