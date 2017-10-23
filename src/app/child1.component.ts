import { IOnInit, ILogService } from 'angular';

class Child1ComponentController implements IOnInit {
    static $inject: string[] = ['$log'];

    entry: any;
    onUpdated: (e: any) => void;

    constructor(
        private $log: ILogService
    ) { }

    $onInit() {

    }

    updateEntry(e) {
        this.$log.info('child1.updateEntry', e);
        this.onUpdated({
            $event: {
                entry: this.entry
            }});
    }

    updateAddress(address) {
        this.$log.info('Child1.updateAddress', address);

        this.entry.address = address;

        this.onUpdated({
            $event: {
                entry: this.entry
            }});
    }
}

const Child1Component= {
    selector: 'first',
    bindings: {
        'entry': '<',
        'onUpdated': '&'
    },
    controller: Child1ComponentController,
    templateUrl: '/src/app/child1.component.html'
}

export { Child1Component };