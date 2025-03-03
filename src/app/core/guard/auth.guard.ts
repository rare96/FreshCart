import { inject, PLATFORM_ID } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';
import { isPlatformBrowser } from '@angular/common';
import { catchError, EMPTY, first, map } from 'rxjs';
import { error } from 'console';

export const authGuard: CanActivateFn = (route, state) => {

 let _AuthService = inject(AuthService);
 let _Router = inject(Router);
let  _PLATFORM_ID = inject(PLATFORM_ID);

  if (isPlatformBrowser(_PLATFORM_ID)) {  
    return _AuthService.verifyToken(localStorage.getItem('myToken')).pipe(
      first(),
      map((res) =>{
        if(res.message ==='verified'){
          _AuthService.isLogin.next(true);
          return true;
        }
        else{
          _AuthService.isLogin.next(false);
          return false;
        }
      }),
      catchError(error => {
        console.error('AuthGuard Error:', error);
        _AuthService.isLogin.next(false);
        _Router.navigate(['/login']);
        return EMPTY;
      })
    )
    
  } else {
    return true;
  }
};
