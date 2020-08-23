import { Component, OnInit } from '@angular/core';
import { CarpartsService } from '../carparts.service'

@Component({
  selector: 'app-view-carparts',
  templateUrl: './view-carparts.component.html',
  styleUrls: ['./view-carparts.component.css']
})
export class ViewCarpartsComponent {

  data:any;

  constructor(private service: CarpartsService){}

	viewCarParts() {
    this.service.fetchCarParts().subscribe(data=> {
      // alert(JSON.stringify(data));
      // console.log(data);
      this.data = data;
    })
  }		
}
