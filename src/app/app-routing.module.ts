import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCategoryComponent } from './components/categories-crud/add-category/add-category.component';
import { CategoriesComponent } from './components/categories-crud/categories/categories.component';
import { UpdateCategoryComponent } from './components/categories-crud/update-category/update-category.component';


const routes: Routes = [
  { path: '', component: CategoriesComponent },
  { path: 'add-category', component: AddCategoryComponent },
  { path: 'update-category/:id', component: UpdateCategoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
