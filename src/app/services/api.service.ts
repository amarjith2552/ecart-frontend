import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
baseurl = "http://localhost:3000"

  constructor(private http:HttpClient) { }

  register(user:any){
    return this.http.post(`${this.baseurl}/user/register`,user)
  }

  login(user:any){
    return this.http.post(`${this.baseurl}/user/login`,user)
  }

  getallproducts(){
    return this.http.get(`${this.baseurl}/all-products`)
  }

  getAproduct(id:any){
    return this.http.get(`${this.baseurl}/viewproduct/${id}`)
  }

  appendToken(){
    let headers = new HttpHeaders()
    const token = sessionStorage.getItem('token')
    if(token){
      headers = headers.append("Authorization",`Bearer ${token}`)
    }
    return {headers}
  }
  addtoWishlist(product:any){
    return this.http.post(`${this.baseurl}/wishlist`,product,this.appendToken())
  }

  getwishlist(){
    return this.http.get(`${this.baseurl}/getwishlist`,this.appendToken())
  }
}
