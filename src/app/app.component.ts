import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dataToSend = '';
  fetchedData: any;

  constructor(private http: HttpClient) {}

  sendData() {
    this.http.post('http://localhost:3000/data', { data: this.dataToSend })
      .subscribe(response => {
        console.log('Data sent', response);
      });
  }

  fetchData() {
    this.http.get('http://localhost:3000/data')
      .subscribe(response => {
        this.fetchedData = response;
      });
  }
}
