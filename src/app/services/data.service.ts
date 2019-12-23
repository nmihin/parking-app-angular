import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Barrier } from '../api/models/barrier';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject, throwError } from "rxjs";
import { tap, retry, catchError } from 'rxjs/operators';
import { ApiConfiguration } from '../../app/api/api-configuration';


let auth_token ='';
localStorage.getItem('currentUser') ? auth_token = JSON.parse(localStorage.getItem('currentUser')) : auth_token='';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: "Bearer " + auth_token
  })
};


@Injectable({
  providedIn: 'root'
})
export class DataService {
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;
  private _refreshData$ = new Subject<void>();




  // Handle API errors
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };


  get refreshData$(){
    return this._refreshData$;
  }

  constructor(private httpClient: HttpClient,
    private http: HttpClient,
    private apiConfiguration: ApiConfiguration
  ) {
    this.currentUserSubject = new BehaviorSubject<any>(
      JSON.parse(localStorage.getItem('currentUser'))
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue() {
    return this.currentUserSubject.value;
  }

  connectivityUsingGET() {
    return this.httpClient.get(this.apiConfiguration.rootUrl + '/parkingzr/api/v1/connectivity');
  }
  getBarriersUsingGET() {
    return this.httpClient.get(this.apiConfiguration.rootUrl + '/parkingzr/api/v1/barriers');
  }
  getParkingAreasUsingGET() {
    return this.httpClient.get(this.apiConfiguration.rootUrl + '/parkingzr/api/v1/parkingareas');
  }
  getParkingSpacesUsingGET() {
    return this.httpClient.get(this.apiConfiguration.rootUrl + '/parkingzr/api/v1/parkingspaces?page=0&pageSize=50')
  }
  getParkingSummaryUsingGET() {
    return this.httpClient.get(this.apiConfiguration.rootUrl + '/parkingzr/api/v1/parkingSummary')
    .pipe(
      tap(() => {
        this._refreshData$.next();
      })
    )
  }
  getGroupedEventsUsingGET() {
    let currentUnixTimeFromNew = new Date();
    let currentUnixTimeToNew = new Date();
    let currentUnixTimeFrom = currentUnixTimeFromNew.setHours(currentUnixTimeFromNew.getHours() - 12) ;
    let currentUnixTimeTo = currentUnixTimeToNew.setHours(currentUnixTimeToNew.getHours());

    let ISOStringFrom = new Date(currentUnixTimeFrom).toISOString().slice(0,-5);
    let ISOStringTo = new Date(currentUnixTimeTo).toISOString().slice(0,-5);
    //console.log(ISOStringFrom +' '+ISOStringTo)

    return this.httpClient.get(this.apiConfiguration.rootUrl + '/parkingzr/api/v1/groupedEvents?&eventType=ParkingOccupancyChanged&fromUTC='+ISOStringFrom+'&toUTC='+ISOStringTo+'&interval=1200');
    //return this.httpClient.get('http://dev.aldo.tech:8080/parkingzr/api/v1/groupedEvents?&eventType=ParkingOccupancyChanged&from=2019-12-19T00:30:00&to=2019-12-19T11:15:00&interval=1200')
    //return this.httpClient.get('http://dev.aldo.tech:8080/parkingzr/api/v1/groupedEvents?eventType=ParkingOccupancyChanged&fromUTC=2019-12-19T00:30:00&toUTC=2019-12-19T10:15:00&interval=1200')
  }
  getSensorsUsingGET() {
    return this.httpClient.get(this.apiConfiguration.rootUrl + '/parkingzr/api/v1/sensors?page=0&pageSize=100');
  }
  getAlarmsUsingGET() {
    return this.httpClient.get(this.apiConfiguration.rootUrl + '/parkingzr/api/v1/alarms?page=0&pageSize=20&sortBy=eventTime:desc');
  }
  updateEntryBarrierStatusUsingPOST(barrier: Barrier): Observable<Barrier> {
    //console.log(barrier.barrierState)
    return this.httpClient.post<Barrier>(this.apiConfiguration.rootUrl + '/parkingzr/api/v1/barriers/entryBarrier1',
    JSON.stringify({
      "state": barrier.barrierState
    }),
    httpOptions
    )
    .pipe(
      retry(2),
      catchError(this.handleError)
    );
  }
  updateExitBarrierStatusUsingPOST(barrier: Barrier): Observable<Barrier> {
    //console.log(barrier.barrierState)
    return this.httpClient.post<Barrier>(this.apiConfiguration.rootUrl + '/parkingzr/api/v1/barriers/exitBarrier1',
    JSON.stringify({
      "state": barrier.barrierState
    }),
    httpOptions
    )
    .pipe(
      retry(2),
      catchError(this.handleError)
    );
  }
}
