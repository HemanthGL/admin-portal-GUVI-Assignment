import { Injectable } from '@angular/core';
import { IFormProduct } from 'src/interfaces/form-product';
import { IProduct } from 'src/interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  products: Array<IProduct> = [
    {
      id: 1,
      productName: 'Smart Watch',
      photo: 'https://rukminim2.flixcart.com/image/850/1000/xif0q/smartwatch/p/u/b/41-ga05029-gb-android-google-no-original-imagtf3rxyepwhdt.jpeg?q=90',
      category: 'Electronics',
      cost: 320
    },
    {
      id: 2,
      productName: 'Pixel 8',
      photo: 'https://cdn.dxomark.com/wp-content/uploads/medias/post-157493/Google-Pixel-8-featured-image-packshot-review-Recovered.jpg',
      category: 'Electronics',
      cost: 600
    },
    {
      id: 3,
      productName: 'Atomic Habits',
      photo: 'https://m.media-amazon.com/images/I/51-nXsSRfZL.jpg',
      category: 'Books & Novels',
      cost: 50
    }
  ]

  /**
   * 
   * @param prodID Unique Product ID
   * @returns index of the product in the products Array
   */
  getProductById(prodID: number): number{
    let idx = this.products.findIndex((product: IProduct) => product.id == prodID)

    return idx;
  }

  /**
   * 
   * @returns Total no. of Products in the products Array
   */
  getProductsLength(): number {
    return this.products.length;
  }

  /**
   * 
   * @param product Product Object
   * @description Adds Product to the Product Portfolio/Array
   */
  addProduct(product: IProduct){
    this.products.push(product)
  }

  /**
   * 
   * @param prodId Unique Product ID
   * @returns index of product in the Product Portfolio
   */
  findProdIndex(prodId: number){
    let idx = this.products.findIndex((prod: IProduct) => prod.id == prodId)

    return idx;
  }
  

  /**
   * 
   * @param prodId Unique Product ID
   * @param formData Data from Form for Edit Product
   * @returns status Code for succes/failure
   */
  editProd(prodId: number, formData: IFormProduct): number{

    let prodObj:IProduct = this.products[this.getProductById(prodId)]

    if (formData.productName == prodObj.productName && formData.photo ==  prodObj.photo && formData.category == prodObj.category && parseInt(formData.cost) == prodObj.cost){
      return -1;
    } else {
      let idx = this.findProdIndex(prodId)

      if (idx == -1)
        return -1
      else {
        this.products[idx] = {
          ...this.products[idx],
          productName : formData.productName,
          photo : formData.photo,
          category : formData.category,
          cost : parseFloat(formData.cost),
        }
        return 1
      }
    }

  }

}
