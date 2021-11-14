import { Route, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BuilderComponent } from './builder.component';

const routes: Route[] = [
  {
    path: '',
    component: BuilderComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuilderRoutingModule {}

