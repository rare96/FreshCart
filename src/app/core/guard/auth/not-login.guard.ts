import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { inject } from '@angular/core';

export const notLoginGuard: CanActivateFn = (route, state) => {


  
  let _AuthService = inject(AuthService);
   let _Router = inject(Router);
  
    if(_AuthService.isLogin.value == false){
      return true;
    } else {
      _Router.navigate(['/home']);
      return false;
    }
};
