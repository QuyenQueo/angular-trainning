import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { EntityModule } from './entities/entity.module';
import {
    MainComponent,
    FooterComponent,
    HeaderComponent
} from './layouts';

@NgModule({
    declarations: [
        MainComponent,
        FooterComponent,
        HeaderComponent,
    ],
    imports: [
        BrowserModule,
        EntityModule
    ],
    providers: [],
    bootstrap: [MainComponent]
})
export class AppModule { }
