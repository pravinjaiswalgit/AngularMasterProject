import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from '../iproduct';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {

  sectionTitle:string="Product Details !!!"
  pageTitle="Product Details : "
  product:IProduct[] = []

  constructor(private _activatedRoute:ActivatedRoute,
    private _router:Router,
    private _teamService:ProductService) { 

    }

    ngOnInit(): void {
      const ProductId:number=Number(this._activatedRoute.snapshot.paramMap.get('ProductId'));
       this.pageTitle+=ProductId
         this._teamService.getAllProduct().subscribe({
           next:(data)=>{
            this.product = data.filter(data=>data.ProductId===ProductId)
           }
         });
     }
    
     onBack():void{
         this._router.navigate(['/product'])
     }
}
