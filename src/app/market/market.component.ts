import { Component } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { IProduct } from 'src/interfaces/product';

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.css']
})
export class MarketComponent {
  products: Array<IProduct>

  constructor(private prodServe: ProductsService){
    this.products = prodServe.products;
  }

  /**
   * 
   * @param event On Clicking Add to Cart Button
   * @description event Handler method for clicking Add to Cart
   */
  addCart(event: MouseEvent){
    let id = (event.target as HTMLElement).id;

    let prodIdx: number = parseInt(id.substring(4))
    
    // logic for local storage set cart value
    
    let stored: string | null = localStorage.getItem('cart')

    let parsedData: Array<number>;

    if (stored == null){
      stored = ""
      parsedData = []
      parsedData.push(prodIdx);
    } else{
      parsedData = JSON.parse(stored)
      
      let idxCart: number = parsedData.findIndex((e : number) => e == prodIdx)
      if (idxCart == -1)
        parsedData.push(prodIdx)
    }
    localStorage.setItem('cart', JSON.stringify(parsedData))

    let element = document.getElementById(id)

    element!.textContent = "Added to Cart"
    element!.style.backgroundColor = 'yellow';
    element!.style.color = 'black'
  }


}
