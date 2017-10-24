import { IOnInit, ILogService } from 'angular';

class AppComponentController implements IOnInit {
    public contact: any;
    public states: string[];

    public ComponentName = 'AppComponent';
    static $inject: string[] = [ '$log' ];
    constructor(
        private $log: ILogService
    ) { }

    $onInit() {
        this.contact = {
            firstName: 'John',
            lastName: 'Doe',
            phone: '867-5309',
            address: {
                line1: '1000 Nowhere St',
                suburb: 'Sydney',
                state: 'NSW',
                postCode: '2000'
            }
        };

        this.states = [
            'ACT',
            'NSW',
            'NT',
            'QLD',
            'SA',
            'VIC',
            'WA'
        ]
    }

    onContactUpdated(contact) {
        this.$log.info(`[${this.ComponentName}] onContactUpdated`, contact);
    }
}

export const AppComponent = {
    selector: 'app',
    controller: AppComponentController,
    templateUrl: '/src/app/app.component.html'
}
