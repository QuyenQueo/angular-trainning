import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRouteSnapshot, NavigationEnd } from '@angular/router';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.scss'],
    encapsulation: ViewEncapsulation.None
})
export class MainComponent implements OnInit {
    constructor() { }

    ngOnInit(): void { }
}
