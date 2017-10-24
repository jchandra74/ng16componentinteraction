import { ILogService } from 'angular';

class AddressEditorComponentController {
    address: any;
    states: string[];
    onUpdated: (e: any) => void;

    ComponentName = 'AddressEditorComponent';
    static $inject: string[] = ['$log'];    
    constructor(
        private $log: ILogService
    ) { }

    onAddressUpdated() {
        this.$log.info(`[${this.ComponentName}] onAddressUpdated`);
        this.onUpdated({
            $event: this.address
        });
    }
}

export const AddressEditorComponent = {
    selector: 'addressEditor',
    bindings: {
        'address': '<',
        'states': '<',
        'onUpdated': '&'
    },
    controller: AddressEditorComponentController,
    templateUrl: '/src/app/address-editor/address-editor.component.html'
}
