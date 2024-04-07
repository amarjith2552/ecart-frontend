import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-viewproducts',
  templateUrl: './viewproducts.component.html',
  styleUrls: ['./viewproducts.component.css']
})
export class ViewproductsComponent implements OnInit{

  product : any={}

  constructor(private route:ActivatedRoute , private api:ApiService) {}
  ngOnInit(): void {
this.viewproduct()
  }

  viewproduct(){
    //to get product id
    this.route.params.subscribe((res:any)=>{
      console.log(res);
      const {id}=res
      console.log(id);

      //get products details
      this.api.getAproduct(id).subscribe((res:any)=>{
        console.log(res);
        this.product=res
      })
    })
  }

  addtoWishlist(){
    if(sessionStorage.getItem('token')){
      this.api.addtoWishlist(this.product).subscribe({
        next:(res:any)=>{
          alert("added to wishlist")
        },
        error:(err)=>{
          alert("already added to wishlist")
        }
      })
    }
    else{
      alert("please login")
    }
  }

}
