import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CourseListComponent } from './courses/course-list.component';
import { StarComponent } from './star/star.component';
import { ReplacePipe } from './pipe/replace.pipe';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { Error404Component } from './error-404/error-404.component';
import { CourseInfoComponent } from './courses/course-info.component';

@NgModule({
  declarations: [
    //Aqui tem que ser declarado todos os componentes e Pipe da aplicação
    AppComponent,
    CourseListComponent,
    StarComponent,
    ReplacePipe,
    NavBarComponent,
    Error404Component,
    CourseInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    /*
    Linha a baixo é usada quando for trabalhar com router(rotas) essa linha espera um array de rotas
    */
    RouterModule.forRoot([
      {
        /* 
        quando o for => path:'courses' vai bater no CourseListComponent e chamar a pagina que esta declarada neste component
        */
        path:'courses', component: CourseListComponent
      },
      {
        // => /:id é para informar que a rota espera um id 
        path:'courses/info/:id', component: CourseInfoComponent
      },
      {
        /*
        path: '' => indica que é a raiz da aplicação http://localhost:4200/
        quando iniciar a aplicação e bater na raiz ira direcionar para o component de courses
        */
        path: '',redirectTo: 'courses', pathMatch: 'full'
      },
      {
        /*
        quando for path:'**' é que a rota não esta definida na aplicação ai sera direcionada para um component criado com uma pagina de erro 
        */
        path:'**', component: Error404Component
      }
    ]) 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
