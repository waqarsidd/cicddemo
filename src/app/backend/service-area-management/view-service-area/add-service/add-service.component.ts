import { Component } from '@angular/core';

@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.component.html',
  styleUrls: ['./add-service.component.scss'],
})
export class AddServiceComponent {
  public sourceServices = [
    'Structural repair',
    'HVAC',
    'Water Mitigation',
    'Bio Hazard',
    'Pre Mitigation Scan',
  ];
  public targetServices = [];
  public isEdit: boolean;
  constructor() {}

  public update() {
    console.log(this.targetServices);
  }
}
