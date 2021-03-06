import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesModule } from './pages/categories/categories.module';

const routes: Routes = [
  { path: 'categories', loadChildren: () => CategoriesModule }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
