import { ILogService } from 'angular';

class ContactViewerComponentController {
    contact: any;

    public ComponentName = 'ContactViewer';
    static $inject: string[] = [ '$log' ];
    constructor(
        private $log: ILogService
    ) { }
}

export const ContactViewerComponent = {
    selector: 'contactViewer',
    bindings: {
        contact: '<'
    },
    templateUrl: '/src/app/contact-viewer/contact-viewer.component.html'
}
