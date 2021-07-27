import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CourseModule } from './courses/course.module';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    //Aqui tem que ser declarado todos os componentes e Pipe da aplicação
    AppComponent          
  ],
  imports: [
    BrowserModule,
    HttpClientModule,    
    CourseModule,
    CoreModule,
    /*
    Linha a baixo é usada quando for trabalhar com router(rotas) essa linha espera um array de rotas
    */
    RouterModule.forRoot([      
      {
        /*
        path: '' => indica que é a raiz da aplicação http://localhost:4200/
        quando iniciar a aplicação e bater na raiz ira direcionar para o component de courses
        */
        path: '',redirectTo: 'courses', pathMatch: 'full'
      }            
    ]) 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
