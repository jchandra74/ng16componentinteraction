import { IOnInit, ILogService } from 'angular';
import { IComponentOptionsExt } from './angular.ext';

class AppComponentController implements IOnInit {
    public message: string;
    public data: any;

    constructor(
        private $log: ILogService
    ) { }

    $onInit() {
        this.message = 'World';

        this.data = {
            name: 'Jimmy',
            address: {
                line1: '821 Pacific Hwy'
            }
        };
    }

    onUpdated(e) {
        this.$log.info('app.onUpdated', e);
    }
}

const AppComponent: IComponentOptionsExt = {
    selector: 'app',
    controller: AppComponentController,
    templateUrl: '/src/app/app.component.html'
}

export { AppComponent }
