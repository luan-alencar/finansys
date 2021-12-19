import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/shared/category.model';
import { CategoryService } from 'src/app/shared/service/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  categories: Category[] = [];

  constructor(
    private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.categoryService.getAll().subscribe(
      categories => this.categories = categories,
      error => alert('Erro ao carregar a lista.')
    );
  }

  deleteCategory(category: any) {
    this.categoryService.delete(category.id).subscribe(
      () => this.categories = this.categories.filter(element => element != category)
    );
  }

}
