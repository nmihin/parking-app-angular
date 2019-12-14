import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Connectivity } from '../../../api/models/connectivity';


@Injectable({
    providedIn: 'root'
})
export class ConnectivityService {
    connectivityUrl: string = 'dev.aldo.tech:8080/parkingzr/api/v1/connectivity';

    constructor(private http: HttpClient){}

    getConnectivity(): Observable<Connectivity[]> {
        return this.http.get<Connectivity[]>(this.connectivityUrl);
    }
}
