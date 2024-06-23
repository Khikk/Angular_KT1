import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormDataComponent } from './components/filter-form/filter-form.component';
import { ProductListComponent } from './components/products-list/products-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormDataComponent, ProductListComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class MainComponent {
  mainTitle = 'myapp';
}

