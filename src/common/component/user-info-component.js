export default function() {

    console.log('UIC');

    return {
        scope: {},
        controller: UserInfoComponent,
        controllerAs: 'ctrl',
        bindToController: true,
        template:
            `
                <div>Hi {{ctrl.name}}!</div>
            `
    };

}

class UserInfoComponent {

    constructor() {
        this.name = 'Tomas';
        console.log(this);
    }

}