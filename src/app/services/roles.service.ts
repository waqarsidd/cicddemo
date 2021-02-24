import { Injectable } from '@angular/core';
import { IRole } from '@app/models/role';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RolesService {
  public role: BehaviorSubject<IRole> = new BehaviorSubject(undefined);
  constructor() {}
}
