import { Component } from '@angular/core';

@Component({
  selector: 'app-service-jobs',
  templateUrl: './service-jobs.component.html',
  styleUrls: ['./service-jobs.component.scss'],
})
export class ServiceJobsComponent {
  public jobs = [
    {
      label: '343243WTR',
      status: '',
      provider: '',
      estimator: '',
      program: '',
      final_estimate: '',
    },
    {
      label: '45235435WTR',
      status: '',
      provider: '',
      estimator: '',
      program: '',
      final_estimate: '',
    },
    {
      label: '2343243242WTR',
      status: '',
      provider: '',
      estimator: '',
      program: '',
      final_estimate: '',
    },
  ];
}
