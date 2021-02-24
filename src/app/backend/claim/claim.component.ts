import { ICreateClaimField } from './../../models/createClaimField.d';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CREATE_CLAIM_FIELDS } from '@app/CONSTANT/create-claim-fields';
import { CreateClaim } from '@app/enums/create-claim.enum';

@Component({
  selector: 'app-claim',
  templateUrl: './claim.component.html',
  styleUrls: ['./claim.component.scss'],
})
export class ClaimComponent {
  public steps = CreateClaim;
  public activeStepIndex = 0;
  public formFields = CREATE_CLAIM_FIELDS;
  public submitted: boolean;
  public claimFieldsValue = {
    parent_id: 0,
    service_type: 'Claim',
    network_id: '0',
    customer_id: '22a3adec-b682-4e73-8715-ba83de0d25d7',
    service_type_id: 'b034da0a-ed7c-4642-96d9-8f2d18feb8cd',
    service_template_id: '35c8a1e6-1c57-4048-b3ce-a7db4038c3d3',
    cat_ref_id: '722570c2-5c72-4cff-a945-d0e6c4544275',
    job_template_id: '0',
  };

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    this.setClaimStep();
  }

  private setClaimStep() {
    this.activatedRoute.fragment.subscribe((res) => {
      if (!res) {
        this.activeStepIndex = 0;
      } else {
        this.activeStepIndex = this.steps[res];
      }
    });
  }

  public activeIndexChange(stepIndex: number) {
    this.activeStepIndex = stepIndex;
    this.router.navigate(['./'], {
      relativeTo: this.activatedRoute,
      fragment: this.steps[stepIndex],
    });
  }

  public goNext(event: any) {
    this.activeStepIndex += 1;
    this.router.navigate(['./'], {
      relativeTo: this.activatedRoute,
      fragment: this.steps[this.activeStepIndex],
    });
  }
  public goPrevious() {
    this.activeStepIndex -= 1;
    this.router.navigate(['./'], {
      relativeTo: this.activatedRoute,
      fragment: this.steps[this.activeStepIndex],
    });
  }
}
