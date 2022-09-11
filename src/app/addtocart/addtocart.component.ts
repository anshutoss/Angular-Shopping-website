import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service'
import { ApiService } from 'src/app/services/api.service'

@Component({
  selector: 'app-addtocart',
  templateUrl: './addtocart.component.html',
  styleUrls: ['./addtocart.component.css']
})
export class AddtocartComponent implements OnInit {


    productList : any = [
     {
        "id": 12,
        "title": "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
        "price": 114,
        "description": "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
        "category": "electronics",
        "image": "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
        "rating": {
            "rate": 4.8,
            "count": 400
        },
        "quantity" : 1,
    },
    {
        "id": 13,
        "title": "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
        "price": 599,
        "description": "21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz",
        "category": "electronics",
        "image": "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
        "rating": {
            "rate": 2.9,
            "count": 250
        },
        "quantity" : 1,
    },
    {
        "id": 14,
        "title": "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ",
        "price": 999.99,
        "description": "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag",
        "category": "electronics",
        "image": "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
        "rating": {
            "rate": 2.2,
            "count": 140
        },
        "quantity" : 1,
    }
  ] ;

  // totalprice !: number[];
  // for(let i =0; i<this.productList.length;i++)
  // {

  // }

  totalPrice !: number[];

  taotalbillgen:number = 0;
  public products : any = [];
   grandTotal : number=0;
  constructor(private cartService : CartService) { }

  ngOnInit(): void {
    // this.cartService.getProducts()
    // .subscribe(res=>{
    //   this.products = res;
    //   this.grandTotal = this.cartService.getTotalPrice();
    // })
   
  }
   // grandTotal:number = 0;
    getTotalPrice() {

    // this.productList.map((a:any)=>{
    //   this.grandTotal += a.price;
    // })
    this.grandTotal=0;
    for(let i =0;i<this.productList.length;i++)
    {
      this.grandTotal += Number(this.productList[i].price) * Number(this.productList[i].quantity)
       
    }
    
  }
  
  calculatebill(){

    for(let i =0;i<this.productList.length;i++)
    {
       this.totalPrice[i] = this.productList[i].price 
       this.taotalbillgen += this.totalPrice[i];
    }

  }

  removeCartItem(item: any){
    
    for(let i =0;i<this.productList.length;i++)
    {
      if(item.id == this.productList[i].id)
      {
          this.productList.splice(i,1);
      }
    }
  }
  emptycart(){
    
    this.productList = []
  }


}
