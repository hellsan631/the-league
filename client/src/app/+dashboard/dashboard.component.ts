import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../shared/index';
import { CanActivate } from '@angular/router-deprecated';
import { SecureRoute, RouteList  } from '../shared/index';
import { TlNavigationComponent } from '../widgets/index';

@Component({
  moduleId: module.id,
  selector: 'app-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css'],
  directives: [TlNavigationComponent]
})

@CanActivate(next => {
  return SecureRoute(next);
})

export class DashboardComponent implements OnInit {

  constructor(
    private _LoggerService: LoggerService  
  ) { }

  ngOnInit() {
    /*this._LoggerService.dialogConfirm('Do you want to save')
      .then((result) => {
        if (result) {
          this._LoggerService.success('saved');
          return this._LoggerService.dialogSuccess('Saved');
        }
        if (!result) {
          this._LoggerService.error('not saved');
          return this._LoggerService.dialogError('Data not saved!');
        }
      })*/
  }
}
