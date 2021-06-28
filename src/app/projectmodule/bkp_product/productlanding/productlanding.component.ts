import { Component, OnInit } from '@angular/core';
import { IProduct } from '../iproduct';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-productlanding',
  templateUrl: './productlanding.component.html',
  styleUrls: ['./productlanding.component.css']
})
export class ProductlandingComponent implements OnInit {

  title:string="Product List !!!"
  products:IProduct[]=[];
  errorMessage:string=""
  showImage:boolean=false
  imageHeight:number=60;
  imageWidth:number=60;

  constructor(private _productService:ProductService){
  }

  ngOnInit(): void {
    this._productService.getAllProduct().subscribe({
      next:(data)=>this.products=data,
      error:(error) => this.errorMessage=error
    });
  }

  toggleImage():void{
    this.showImage=!this.showImage
  }
}
