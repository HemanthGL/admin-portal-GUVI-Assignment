import { Component } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IProduct } from 'src/interfaces/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent {
  constructor(private router: Router, private prodServe: ProductsService){

  }
  
  prodForm = new FormGroup({
    productName : new FormControl('', [
      Validators.required
    ]),
    // lastName: new FormControl(''),
    category: new FormControl(' ', [
      Validators.required
    ]),
    cost: new FormControl('', [
      Validators.required
    ]),
    photo: new FormControl('', [
      Validators.required
    ])
  })

  prodSub?: IProduct
  onSubmit(){
    // console.log(this.userForm.controls)
    // console.log(this.userServ.getUsersLength())

    this.prodSub = {
        id : this.prodServe.getProductsLength() + 1,
        productName : this.prodForm.controls.productName.value!,
        category : this.prodForm.controls.category.value!,
        cost : parseFloat(this.prodForm.controls.cost.value!),
        photo : this.prodForm.controls.photo.value!,
    }
    this.prodServe.addProduct(this.prodSub)

    this.router.navigate(['/products'])
   
    // console.log(this.userServ.getUsersLength())
  }
}
