import { Component } from '@angular/core';
import { InputDetailsService } from '../input-details.service';



@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {

fromPlace: string = "";
toPlace: string = "";
date:string = "";
general: string = ""
classes: string = ""
cb1: any;
cb2: any;
cb3: any;
cb4: any;


constructor(private details:InputDetailsService){}

passDetails(){
  this.details.setFrom(this.fromPlace);
  this.details.setTo(this.toPlace);
  this.details.setDate(this.date);
  this.details.setGeneral(this.general);
  this.details.setClasses(this.classes);
  this.details.setCb1(this.cb1);
  this.details.setCb2(this.cb2);
  this.details.setCb3(this.cb3);
  this.details.setCb4(this.cb4);

}


}
