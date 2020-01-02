import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { tap, map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BrowseService {

  constructor(private http: HttpClient) { }
  imageServiceUrl = 'http://localhost:3000/imageuploadapi/';
  public images: any = [];
  // tslint:disable-next-line:variable-name
  public _pageNumber = 1;
  // tslint:disable-next-line:variable-name
  public _pageSize = 6;

  getImages(filterBy: any, loadMore: boolean) {
    const obj: any = {}; obj.page_number = this._pageNumber; obj.page_size = this._pageSize; obj.filterBy = filterBy;
    console.log(obj);
    return this.http.post<any[]>(`${this.imageServiceUrl}/fetchImages`, obj)
      .pipe(
        tap((data: any) => {
          console.log(data.images);
          if (loadMore) {
            data.images.forEach(element => {
              this.images.push(element);
            });
          } else {
            this.images = data.images;
          }
          console.log(this.images);
        })
        , map((data) => {
          const obj1: any = {};
          obj1.images = this.images;
          obj1.images_total_count = data.images_total_count.images_count;
          obj1.imagesCount = this.images.length;
          return obj1;

        })
        , catchError(this.handleError)
      );
  }

  uploadImage(uploadData: FormData) {
    return this.http.post(`${this.imageServiceUrl}/imageupload`, uploadData).pipe(
      tap(data => {
      }),
      map((files: any) => {
        return files;
      })
    );
  }

  private handleError(err: HttpErrorResponse) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    // console.error(errorMessage);
    return throwError(errorMessage);
  }
}
