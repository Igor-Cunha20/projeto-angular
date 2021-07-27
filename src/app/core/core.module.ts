import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { Error404Component } from "./component/error-404/error-404.component";

import { NavBarComponent } from "./component/nav-bar/nav-bar.component";

@NgModule({
    declarations: [
        NavBarComponent,
        Error404Component
    ], 
    imports: [
        RouterModule.forChild([
            {
                /*
                quando for path:'**' é que a rota não esta definida na aplicação ai sera direcionada para um component criado com uma pagina de erro 
                */
                // path: '**', component: Error404Component
                path: '**', component: Error404Component
            }
        ])
    ],
    exports: [
        NavBarComponent
    ]
})
export class CoreModule {

}