import { IUserType } from '@app/models/userType';
import { AuthService } from '@app/services/auth.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthHelperService {
  constructor(private authService: AuthService) {}

  public getAllowedFields(fields: any) {
    return fields.filter((field) => {
      if (field.allowUserAccess) {
        const user = this.authService.loggedInUser.value;
        return field.allowUserAccess.some(
          (userType: IUserType) =>
            userType === (user?.user?.type || 'super-admin')
        );
      } else {
        return true;
      }
    });
  }
}
