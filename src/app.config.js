export function routing($urlRouterProvider, $stateProvider) {

    $urlRouterProvider.otherwise('/state');

    $stateProvider
        .state('app', {
            abstract: true,
            template: '<div ui-view></div>'
        })

}

export function routingEventsLogger($rootScope) {

    const ROUTING_EVENTS = [
        '$stateChangeStart',
        '$stateChangeSuccess',
        '$stateChangeError'
    ];

    const VIEW_EVENTS = [
        '$viewContentLoading',
        '$viewContentLoaded'
    ];

    ROUTING_EVENTS.forEach(function(routingEvent) {
        $rootScope.$on(routingEvent, function(event, toState, toParams, fromState, fromParams, error){
            console.log(routingEvent, event, toState, toParams, fromState, fromParams);
        });
    });

    VIEW_EVENTS.forEach(function(viewEvent) {
        $rootScope.$on(viewEvent, function(event, viewConfig){
            console.log(viewEvent, event, viewConfig);
        });
    });

}