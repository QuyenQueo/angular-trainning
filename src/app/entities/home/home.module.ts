import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import {
    HomeComponent,
    HomeRouter
} from './';

const ENTITY_STATES = {...HomeRouter};

@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        RouterModule.forChild([ENTITY_STATES])
    ],
    exports: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class WebClientItemModule {}
