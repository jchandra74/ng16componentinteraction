import { module, IModule } from 'angular';

import { AppComponent } from './app.component';
import { ContactEditorComponent } from './contact-editor/contact-editor.component';
import { AddressEditorComponent } from './address-editor/address-editor.component';
import { ContactViewerComponent } from './contact-viewer/contact-viewer.component';

const AppModule: IModule = module('AppModule', []);

AppModule
    .component(AppComponent.selector, AppComponent)
    .component(ContactEditorComponent.selector, ContactEditorComponent)
    .component(AddressEditorComponent.selector, AddressEditorComponent)
    .component(ContactViewerComponent.selector, ContactViewerComponent);

export { AppModule };