export function routing($stateProvider) {

    $stateProvider
        .state('app.state', {
            url: '/state',
            controller: 'StateCtrl',
            controllerAs: 'ctrl',
            template: require('./state.tpl.html')
        });
}