import { Component, OnInit } from '@angular/core';
import { ApiCollectionResponse, ApiResponse } from 'src/app/models/apiResponse';
import { CategoryDto } from 'src/app/models/categoryDto';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories: Array<CategoryDto>;

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.loadCategories();
  }

  onDelete(id: number){
    this.categoryService.deleteCategory(id).subscribe( (res: ApiResponse) => {
      if(res.isSuccessful){
        console.log(res.message);
        this.loadCategories();
      }
    });
  }

  loadCategories(){
    this.categoryService.getCategories().subscribe( (res: ApiCollectionResponse) => {
      if(res.isSuccessful){
        console.log(res.data)
        this.categories = res.data;
      }
    });
  }

}
