// import {
//   HttpErrorResponse,
//   HttpEvent,
//   HttpHandler,
//   HttpInterceptor,
//   HttpRequest,
// } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Router } from '@angular/router';
// import {
//   BehaviorSubject,
//   catchError,
//   filter,
//   Observable,
//   switchMap,
//   take,
//   throwError,
// } from 'rxjs';
// import { AlertService } from '../uiModule/alert/services/alert.service';
// import { AuthService } from 'src/app/auth/services/auth.service';

// @Injectable()
// export class AuthInterceptor implements HttpInterceptor {
//   private isRefreshing = false;
//   private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(
//     null
//   );

//   constructor(
//     private _router: Router,
//     private _alertService: AlertService,
//     private _authService: AuthService
//   ) {}

//   intercept(
//     request: HttpRequest<any>,
//     next: HttpHandler
//   ): Observable<HttpEvent<any>> {
//     return next.handle(request).pipe(
//       catchError((err: HttpErrorResponse) => {
//         console.log(err, 'sd');

//         switch (err.status) {
//           case 400:
//           case 404:
//           case 409: // incorrect request errors handling
//             this._alertService.error(err?.error?.message, true);

//             break;
//           case 500:
//           case 503: // server errors handling
//             this._alertService.error(err?.error?.message, true);
//             break;
//           case 510: // server errors with half success (ex: document was created, but error in file generation)
//             this._alertService.error(err?.error?.message, true);
//             break;
//           default:
//             break;
//         }

//         return throwError(() => err);
//       })
//     );
//   }

//   private addTokenHeader(request: HttpRequest<any>, token: string) {
//     return request.clone({
//       setHeaders: {
//         Authorization: token ? `Bearer ${token}` : '',
//       },
//     });
//   }
// }
