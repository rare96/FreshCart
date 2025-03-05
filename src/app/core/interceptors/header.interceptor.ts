
import { HttpInterceptorFn } from '@angular/common/http';

export const headerInterceptor: HttpInterceptorFn = (req, next) => {

  if (typeof localStorage !== 'undefined') {
    if (localStorage.getItem('myToke') !== null) {
      let myToken : any = localStorage.getItem('myToken');
      let updatedReq = req.clone({
        setHeaders: {
          token: myToken
        },
      });
      return next(updatedReq);
    } else {
      return next(req);
    }
    

  }
  
  return next(req);
};

