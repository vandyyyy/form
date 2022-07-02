import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, NgForm} from '@angular/forms' 
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  
  constructor(){}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
    
  ngOninit(){
  }
    
  username='';
  password='';
    
  completeLogin(login :NgForm){
   
    
  login.reset() 
  

  }  

  

   
  
    selectedLevel: any;
    data:Array<Object> = [
        {id: 0, name: "name1"},
        {id: 1, name: "name2"}
    ];
  
    selected(){
      console.log(this.selectedLevel)
    }
   

}
  
  