import { Component, OnInit } from '@angular/core';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-emplist',
  templateUrl: './emplist.component.html',
  styleUrls: ['./emplist.component.css']
})
export class EmplistComponent implements OnInit {
  emps: any;

  constructor(private service: EmpService)
   { }

  ngOnInit() {

    let observableResult=  this.service.select();
      observableResult.subscribe((result)=>{
      console.log(result);
      this.emps = result;
    });
  }

}
