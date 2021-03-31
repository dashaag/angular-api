import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiCollectionResponse, ApiResponse } from '../models/apiResponse';
import { CategoryDto } from '../models/categoryDto';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

constructor(private http: HttpClient) { }

  getCategories(): Observable<ApiResponse>{
    return this.http.get<ApiCollectionResponse>('https://localhost:44357/api/category');
  }

  deleteCategory(id: number): Observable<ApiResponse>{
    return this.http.delete<ApiResponse>('https://localhost:44357/api/category?id=' + id);
  }

  addCategory(category: CategoryDto): Observable<ApiResponse>{
    return this.http.post<ApiResponse>('https://localhost:44357/api/category', category);
  }

}
