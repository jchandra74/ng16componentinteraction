import { module, IModule } from 'angular';

import { AppComponent } from './app.component';
import { Child1Component } from './child1.component';
import { Child2Component } from './child2.component';

const AppModule: IModule = module('AppModule', []);

AppModule
    .component(AppComponent.selector, AppComponent)
    .component(Child1Component.selector, Child1Component)
    .component(Child2Component.selector, Child2Component);

export { AppModule };