import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { ReplacePipe } from "../shared/pipe/replace.pipe";
import { StarModule } from "../shared/component/star/star.module";
import { CourseInfoComponent } from "./course-info.component";
import { CourseListComponent } from "./course-list.component";
import { AppPipeModule } from "../shared/pipe/app-pipe.module";

@NgModule({
    declarations: [
        CourseListComponent,
        CourseInfoComponent
     ],
     imports: [
         CommonModule,
         FormsModule,
         StarModule,
         AppPipeModule,
         RouterModule.forChild([
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
         ])
     ]
})
export class CourseModule{

}