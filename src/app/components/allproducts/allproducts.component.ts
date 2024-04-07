import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-allproducts',
  templateUrl: './allproducts.component.html',
  styleUrls: ['./allproducts.component.css']
})
export class AllproductsComponent implements OnInit{

  allproducts:any[]=[] //hold all products

  constructor(private api:ApiService) {}
  ngOnInit(): void {
  this.getproducts()
  }

  getproducts(){
    this.api.getallproducts().subscribe((products:any)=>{
      console.log(products);
      this.allproducts=products
    })
  }

}
