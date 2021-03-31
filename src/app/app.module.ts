import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoriesComponent } from './components/categories-crud/categories/categories.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddCategoryComponent } from './components/categories-crud/add-category/add-category.component';
import { FormsModule } from '@angular/forms';
import { UpdateCategoryComponent } from './components/categories-crud/update-category/update-category.component';

@NgModule({
  declarations: [			
    AppComponent,
    CategoriesComponent,
    AddCategoryComponent,
    UpdateCategoryComponent
   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
