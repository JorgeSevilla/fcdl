import { Component, OnInit } from '@angular/core';

// services
import { ProductService} from '../../../services/product.service';
import { ToastrService } from 'ngx-toastr'

// Class product
import { Product } from '../../../models/product';
import { element } from 'protractor';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  productList: Product[];

  constructor(
    private productService: ProductService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.productService.getProducts()
    .snapshotChanges()
    .subscribe(item => {
      this.productList = [];
      item.forEach(element => {
        let x = element.payload.toJSON();
        x["$key"] = element.key;
        this.productList.push(x as Product);
      });
    });
  }
  onEdit(product: Product){
    this.productService.selectedProduct = Object.assign({},product);
  }
  onDelete($key: string){
    if(confirm('Are you sure you want delete?')){
      this.productService.deleteProduct($key);
      this.toastr.success('Sucess full Operation', 'User Deleted');
    }
     }

}
