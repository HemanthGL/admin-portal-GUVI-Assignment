import { Component } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/interfaces/product';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent {

  constructor(private prodServe: ProductsService, private activRoute: ActivatedRoute, private router: Router){
    this.activRoute.params.subscribe((params) => {
      this.id = params['id']
    })
  }

  prodEdit!: IProduct;

  id!: number;

  prodForm: FormGroup = new FormGroup({
    productName : new FormControl(),
    photo: new FormControl(),
    category: new FormControl(),
    cost: new FormControl(),
  });

  ngOnInit(){
    this.prodEdit = this.prodServe.products[this.prodServe.getProductById(this.id)]

    this.prodForm.patchValue({
      productName: this.prodEdit.productName,
      photo: this.prodEdit.photo,
      category: this.prodEdit.category,
      cost: this.prodEdit.cost,
    })
  }

  onSubmit(){

    let status = this.prodServe.editProd(this.id, this.prodForm.value)
    if (status == -1){
      alert('No Changes in details or No such User Registered')
    }
    else{
      this.router.navigate(['/products'])
    }
  }

}
