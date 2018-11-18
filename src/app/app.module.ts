import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { EntityModule } from './entities/entity.module';
import {
    MainComponent,
    FooterComponent,
    HeaderComponent,
    NavbarComponent
} from './layouts';
import { WebAppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        MainComponent,
        FooterComponent,
        HeaderComponent,
        NavbarComponent
    ],
    imports: [
        BrowserModule,
        RouterModule,
        EntityModule,
        WebAppRoutingModule
    ],
    providers: [],
    bootstrap: [MainComponent]
})
export class AppModule { }
