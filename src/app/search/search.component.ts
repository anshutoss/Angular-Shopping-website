import { Component, OnInit } from '@angular/core';
import {SearchService} from "./search.service"
import {ActivatedRoute} from '@angular/router'
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  products:any=[]
  totalProducts:number=0;
  constructor(private http:SearchService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    // data:any=this.route.snapshot.paramMap.get("productName")
    // this.route.paramMap.subscribe(param=>{
      this.http.getProductSearch(this.route.snapshot.paramMap.get("productName")).subscribe({
        next:data=>{
          this.products=data.data.search_result;
          this.totalProducts=data.results
        }
      })

  }

}
