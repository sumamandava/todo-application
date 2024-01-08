import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

//@- declarative
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})

// export is similar to public in java.. used to use this class outside the module
//Module in ts is similar to package in java
export class WelcomeComponent implements OnInit{

  name ='';
  constructor(private route : ActivatedRoute){

}

  ngOnInit(){
    
    this.name = this.route.snapshot.params['name'];
  }

}
