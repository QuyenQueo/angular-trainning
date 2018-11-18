import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { navbarRoute } from './layouts/navbar/item.route';

const LAYOUT_ROUTES = [navbarRoute];

@NgModule({
    imports: [
        RouterModule.forRoot(
            [
                ...LAYOUT_ROUTES,
            ],
            { useHash: true }
        )
    ],
    exports: [RouterModule]
})
export class WebAppRoutingModule {}