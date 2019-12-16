import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class DataService {
baseUrl:string = 'http://dev.aldo.tech:8080';

constructor(private httpClient : HttpClient) {}
  getConnectivity(){
      return this.httpClient.get(this.baseUrl + '/parkingzr/api/v1/connectivity');
  }
  getBarriers(){
    return this.httpClient.get(this.baseUrl + '/parkingzr/api/v1/barriers');
  }
  getParkingAreas(){
    return this.httpClient.get(this.baseUrl + '/parkingzr/api/v1/parkingareas');
  }
  getParkingSpaces(){
    return this.httpClient.get(this.baseUrl + '/parkingzr/api/v1/parkingspaces?page=0&pageSize=50')
  }
  getParkingSummaryResponse(){
      return this.httpClient.get(this.baseUrl + '/parkingzr/api/v1/parkingSummary');
  }
  getGroupedEvents(){
      return this.httpClient.get(this.baseUrl + '/parkingzr/api/v1/groupedEvents?deviceExternalId=entryBarrier1&eventType=BarrierLift&from=2019-10-24T14:30:00&to=2019-10-24T15:30:00&interval=600');
  }
  getSensors(){
    return this.httpClient.get(this.baseUrl + '/parkingzr/api/v1/sensors?page=0&pageSize=100');
  }
  getAlarmResponse(){
    //ALARM RESPONSE POSTMAN???
  }
  putBarrierStatus(){
    //return this.http.put<Barrier>(this.baseUrl + '/parkingzr/api/v1/barriers/entryBarrier1/scheduler');
  }
}
