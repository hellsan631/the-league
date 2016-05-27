import { Component, OnInit } from '@angular/core';
import { Routes } from '@angular/router';

@Routes([

])

@Component({
  moduleId: module.id,
  selector: 'secure-router',
  templateUrl: 'secure-router.component.html',
  styleUrls: ['secure-router.component.css']
})
export class SecureRouterComponent implements OnInit {

  constructor() {}
  
  

  ngOnInit() {
    this.validateRequest()
  }
  
  validateRequest() {
    
  }

}
