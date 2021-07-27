import { NgModule } from '@angular/core';
import { StarComponent } from './star.component';

@NgModule({
    declarations: [
        StarComponent
    ],
    // export deixa o componente disponivel para importar de outro modulo
    exports: [
        StarComponent
    ]
})
export class StarModule{
    
}