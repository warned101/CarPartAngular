import { Component, OnInit } from '@angular/core';
import { Carpart } from '../carpart'
import { HttpClient } from '@angular/common/http';
import { CarpartsService } from '../carparts.service'
import { from } from 'rxjs';

@Component({
  selector: 'app-add-carpart',
  templateUrl: './add-carpart.component.html',
  styleUrls: ['./add-carpart.component.css']
})
export class AddCarpartComponent {

  carPart: Carpart = new Carpart();

  constructor(private service: CarpartsService) { }

  addCarPart() {
    this.service.addCarPart(this.carPart).subscribe(data=> {
      alert(JSON.stringify(data));
    })
  }

}
