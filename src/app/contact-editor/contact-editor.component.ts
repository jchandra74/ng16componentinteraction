import { ILogService } from 'angular';

class ContactEditorComponentController {
    contact: any;
    states: string[];
    onUpdated: (e: any) => void;

    ComponentName = 'ContactEditorComponent';
    static $inject: string[] = ['$log'];
    constructor(
        private $log: ILogService
    ) { }

    onContactUpdated(e) {
        this.$log.info(`[${this.ComponentName}] onContactUpdated`, e);
        this.onUpdated({
            $event: {
                entry: this.contact
            }});
    }

    onAddressUpdated(address) {
        this.$log.info(`[${this.ComponentName}] onAddressUpdated`, address);
        
        this.contact.address = address;

        this.onUpdated({
            $event: {
                entry: this.contact
            }});
    }
}

export const ContactEditorComponent= {
    selector: 'contactEditor',
    bindings: {
        'contact': '<',
        'states': '<',
        'onUpdated': '&'
    },
    controller: ContactEditorComponentController,
    templateUrl: '/src/app/contact-editor/contact-editor.component.html'
}
