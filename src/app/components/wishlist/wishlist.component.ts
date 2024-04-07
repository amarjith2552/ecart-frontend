import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit{
  wishlistproducts:any=[] //hold all products

  constructor(private api:ApiService) {}

  ngOnInit(): void {
    this.getwishlistproducts()
  }

  getwishlistproducts(){
    this.api.getwishlist().subscribe({
      next:(res:any)=>{
        console.log(res);
        this.wishlistproducts=res
      },
      error:(err:any)=>{
        console.log("error",err);
        
      }
    })
  }

}
