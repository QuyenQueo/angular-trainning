import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebClientItemModule as HomeModule } from './home/home.module'

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        HomeModule
    ],
    exports: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class EntityModule {}
