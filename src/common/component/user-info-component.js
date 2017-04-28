export default function() {

    return {
        scope: {},
        controller: UserInfoComponent,
        controllerAs: 'ctrl',
        bindToController: true,
        template: '<span style="color: #0088cc;">Hi {{ctrl.name}}!</span>'
    };

}

class UserInfoComponent {

    constructor() {
        this.name = 'Tomas';
    }

}
