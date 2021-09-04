import { Injectable } from "@angular/core";
import { Product } from "./products";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn:'root'
})
export class CartService{
    items:Product[]=[];
    constructor(
        private http:HttpClient
    ){}

    getItems(){
        return this.items;
    }

    addToCart(product:Product){
        this.items.push(product);
    }

    clearCart(){
        this.items=[];
        return this.items;
    }

    getShippingPrices(){
        return this.http.get<{type:string,price:number}[]>
        ('/assets/shipping.json')
    }
}