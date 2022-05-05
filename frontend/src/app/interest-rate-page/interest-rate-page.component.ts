import { Component, OnInit } from '@angular/core';
import * as uuid from 'uuid';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-interest-rate-page',
  templateUrl: './interest-rate-page.component.html',
  styleUrls: ['./interest-rate-page.component.scss']
})
export class InterestRatePageComponent implements OnInit {

  constructor(private http: HttpClient) { }
  
  data: any = [];

  ngOnInit(): void {
    this.http.get("http://localhost:3000/interestRates/").subscribe(data => {
      this.data = data;
    });

  }

  submit(interestForm: any) {
    interestForm.id = uuid.v4();
    if (interestForm.times == "") {
      interestForm.times = 1;
    }
    interestForm.total = this.calculateTotal(interestForm);
    interestForm.profit = interestForm.total - interestForm.principal;
    interestForm.isSave = false;
    this.data = [interestForm].concat(this.data);
  }

  calculateTotal(form: any) {
    return form.principal * Math.pow((1+form.rate/form.times), form.times*form.year);
  }

  remove(id: string) {
    this.data = this.data.filter((e: any) => e.id != id);

    let saveData = this.data.filter((e: any) => e.isSave);

    this.http.post("http://localhost:3000/interestRates/", saveData).subscribe();
  }

  save(id: string) {
    let saveData = this.data.filter((e: any) => e.id == id || e.isSave);
    for (let e of saveData) {
      e.isSave = true;
    }

    this.http.post("http://localhost:3000/interestRates/", saveData).subscribe();
  }
  

}
