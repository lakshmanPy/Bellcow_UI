import { WeddingsComponent } from './weddings/weddings.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClassesComponent } from './classes/classes.component';

const routes: Routes = [
  {path:'', component: ClassesComponent},
  {path:'classes', component: ClassesComponent},
  {path:'weddings', component: WeddingsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
