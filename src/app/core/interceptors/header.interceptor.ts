// import { HttpInterceptorFn } from '@angular/common/http';

// export const headerInterceptor: HttpInterceptorFn = (req, next) => {
//   // Ensure we're running in a browser environment
//   if (typeof localStorage !== 'undefined') {
//     const myToken = localStorage.getItem('myToken'); // Get token from localStorage

//     if (myToken) {
//       // Clone the request and add the token to headers if it's available
//       const updatedReq = req.clone({
//         setHeaders: {
//           token: myToken
//         }
//       });
//       return next(updatedReq);
//     }
//   }

//   // Return the original request if no token is found or in a non-browser environment
//   return next(req);
// };





import { HttpInterceptorFn } from '@angular/common/http';
import { Router } from '@angular/router';
import { inject } from '@angular/core';

export const headerInterceptor: HttpInterceptorFn = (req, next) => {
  const router = inject(Router);
  
  if (typeof localStorage !== 'undefined') {
    const myToken = localStorage.getItem('myToken');

    if (myToken) {
      const updatedReq = req.clone({
        setHeaders: {
          token: myToken
        }
      });
      return next(updatedReq);
    } else {
      // Redirect to login page if no token is found
      router.navigate(['/login']);
      return next(req);
    }
  }
  
  return next(req);
};

