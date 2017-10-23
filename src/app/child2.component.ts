import { IOnInit, ILogService } from 'angular';

class Child2ComponentController implements IOnInit {
    static $inject: string[] = ['$log'];

    entry: any;
    onUpdated: (e: any) => void;

    constructor(
        private $log: ILogService
    ) { }

    $onInit() {

    }

    updateAddress() {
        this.$log.info('child2.updateAddress');
        this.onUpdated({
            $event: this.entry
        });
    }
}

const Child2Component = {
    selector: 'second',
    bindings: {
        'entry': '<',
        'onUpdated': '&'
    },
    controller: Child2ComponentController,
    templateUrl: '/src/app/child2.component.html'
}

export { Child2Component };