import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { catchError, delay, Observable, retry, tap, throwError } from 'rxjs';
import { Product } from '../entity/product';
import { ErrorService } from './error.service';


@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  products: Product[] = [];

  constructor(
    private http: HttpClient,
    private errorService: ErrorService,
  ) {
  }

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>('https://fakestoreapi.com/products', {
      // params: new HttpParams().append('limit', 5)
      // params: new HttpParams({fromObject: {limit: 5}})
      params: new HttpParams({ fromString: 'limit=5' }),
    }).pipe(
      delay(200),
      retry(2),
      tap(p => this.products = p),
      catchError(this.errorHandler.bind(this)),
    );
  }

  create(product: Product): Observable<Product> {
    return this.http.post<Product>('https://fakestoreapi.com/products', product).pipe(
      tap(p => this.products.push(p)),
      catchError(this.errorHandler.bind(this)),
    );
  }

  private errorHandler(error: HttpErrorResponse) {
    this.errorService.handle(error.message);
    return throwError(() => error.message);
  }
}
