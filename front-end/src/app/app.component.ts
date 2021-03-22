import { Component,OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
 
  form: FormGroup;
  someError = '';
  constructor(private readonly http: HttpClient, private _snackBar: MatSnackBar){
    this.form = new FormGroup({
      'records': new FormControl(''),
    });
  }
  
  ngOnInit() {
   
  }
  async onSubmit(){
    try{
    const result = await this.http.post<any>('http://localhost:5000/api/v1/validateRecord', {records:this.form.value.records}).toPromise();
      if(result.status !== 200){
        this._snackBar.open('Invalid DNS Records');
      }
      else {
        this._snackBar.open('Valid DNS Records');
      }
    }catch(e){
     this._snackBar.open('Invalid DNS Records');
    }
  }
}


// angular form is group of controls
