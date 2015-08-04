import template from './some-component.tpl.html'

export default function() {

    return {
        scope: {},
        controller: SomeComponent,
        controllerAs: 'ctrl',
        bindToController: true,
        template: template
    };

}

class SomeComponent {

    constructor() {
        this.count = 0;
        this.property = 'My Component Property';
    }

    increment() {
        this.count++;
    }

}