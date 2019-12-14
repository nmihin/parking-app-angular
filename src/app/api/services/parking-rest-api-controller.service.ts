/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { BarriersResponse } from '../models/barriers-response';
import { Barrier } from '../models/barrier';
import { BarrierRequest } from '../models/barrier-request';
import { BarrierSchedulerResponse } from '../models/barrier-scheduler-response';
import { ActionScheduler } from '../models/action-scheduler';
import { Connectivity } from '../models/connectivity';
import { ParkingEventsResponse } from '../models/parking-events-response';
import { GroupedEventsResponse } from '../models/grouped-events-response';
import { ParkingSpacesResponse } from '../models/parking-spaces-response';
import { UserResponse } from '../models/user-response';
import { UserRegisterRequest } from '../models/user-register-request';
import { SensorsResponse } from '../models/sensors-response';

/**
 * Parking Rest API Controller
 */
@Injectable({
  providedIn: 'root',
})
class ParkingRestApiControllerService extends __BaseService {
  static readonly getBarriersUsingGETPath = '/parkingzr/api/v1/barriers';
  static readonly getBarriersUsingHEADPath = '/parkingzr/api/v1/barriers';
  static readonly getBarriersUsingPOSTPath = '/parkingzr/api/v1/barriers';
  static readonly getBarriersUsingPUTPath = '/parkingzr/api/v1/barriers';
  static readonly getBarriersUsingDELETEPath = '/parkingzr/api/v1/barriers';
  static readonly getBarriersUsingOPTIONSPath = '/parkingzr/api/v1/barriers';
  static readonly getBarriersUsingPATCHPath = '/parkingzr/api/v1/barriers';
  static readonly changeBarrierStateUsingPUTPath = '/parkingzr/api/v1/barriers/{id}';
  static readonly getBarrierSchedulerUsingGETPath = '/parkingzr/api/v1/barriers/{id}/scheduler';
  static readonly getBarrierSchedulerUsingHEADPath = '/parkingzr/api/v1/barriers/{id}/scheduler';
  static readonly getBarrierSchedulerUsingPOSTPath = '/parkingzr/api/v1/barriers/{id}/scheduler';
  static readonly updateBarrierSchedulerUsingPUTPath = '/parkingzr/api/v1/barriers/{id}/scheduler';
  static readonly getBarrierSchedulerUsingDELETEPath = '/parkingzr/api/v1/barriers/{id}/scheduler';
  static readonly getBarrierSchedulerUsingOPTIONSPath = '/parkingzr/api/v1/barriers/{id}/scheduler';
  static readonly getBarrierSchedulerUsingPATCHPath = '/parkingzr/api/v1/barriers/{id}/scheduler';
  static readonly connectivityUsingGETPath = '/parkingzr/api/v1/connectivity';
  static readonly connectivityUsingHEADPath = '/parkingzr/api/v1/connectivity';
  static readonly connectivityUsingPOSTPath = '/parkingzr/api/v1/connectivity';
  static readonly connectivityUsingPUTPath = '/parkingzr/api/v1/connectivity';
  static readonly connectivityUsingDELETEPath = '/parkingzr/api/v1/connectivity';
  static readonly connectivityUsingOPTIONSPath = '/parkingzr/api/v1/connectivity';
  static readonly connectivityUsingPATCHPath = '/parkingzr/api/v1/connectivity';
  static readonly getEventsUsingGETPath = '/parkingzr/api/v1/events';
  static readonly getEventsUsingHEADPath = '/parkingzr/api/v1/events';
  static readonly getEventsUsingPOSTPath = '/parkingzr/api/v1/events';
  static readonly getEventsUsingPUTPath = '/parkingzr/api/v1/events';
  static readonly getEventsUsingDELETEPath = '/parkingzr/api/v1/events';
  static readonly getEventsUsingOPTIONSPath = '/parkingzr/api/v1/events';
  static readonly getEventsUsingPATCHPath = '/parkingzr/api/v1/events';
  static readonly getGroupedEventsUsingGETPath = '/parkingzr/api/v1/groupedEvents';
  static readonly getGroupedEventsUsingHEADPath = '/parkingzr/api/v1/groupedEvents';
  static readonly getGroupedEventsUsingPOSTPath = '/parkingzr/api/v1/groupedEvents';
  static readonly getGroupedEventsUsingPUTPath = '/parkingzr/api/v1/groupedEvents';
  static readonly getGroupedEventsUsingDELETEPath = '/parkingzr/api/v1/groupedEvents';
  static readonly getGroupedEventsUsingOPTIONSPath = '/parkingzr/api/v1/groupedEvents';
  static readonly getGroupedEventsUsingPATCHPath = '/parkingzr/api/v1/groupedEvents';
  static readonly getParkingSummaryUsingGETPath = '/parkingzr/api/v1/parkingSummary';
  static readonly getParkingSummaryUsingHEADPath = '/parkingzr/api/v1/parkingSummary';
  static readonly getParkingSummaryUsingPOSTPath = '/parkingzr/api/v1/parkingSummary';
  static readonly getParkingSummaryUsingPUTPath = '/parkingzr/api/v1/parkingSummary';
  static readonly getParkingSummaryUsingDELETEPath = '/parkingzr/api/v1/parkingSummary';
  static readonly getParkingSummaryUsingOPTIONSPath = '/parkingzr/api/v1/parkingSummary';
  static readonly getParkingSummaryUsingPATCHPath = '/parkingzr/api/v1/parkingSummary';
  static readonly parkingAreasUsingGETPath = '/parkingzr/api/v1/parkingareas';
  static readonly parkingAreasUsingHEADPath = '/parkingzr/api/v1/parkingareas';
  static readonly parkingAreasUsingPOSTPath = '/parkingzr/api/v1/parkingareas';
  static readonly parkingAreasUsingPUTPath = '/parkingzr/api/v1/parkingareas';
  static readonly parkingAreasUsingDELETEPath = '/parkingzr/api/v1/parkingareas';
  static readonly parkingAreasUsingOPTIONSPath = '/parkingzr/api/v1/parkingareas';
  static readonly parkingAreasUsingPATCHPath = '/parkingzr/api/v1/parkingareas';
  static readonly parkingSpacesUsingGETPath = '/parkingzr/api/v1/parkingspaces';
  static readonly parkingSpacesUsingHEADPath = '/parkingzr/api/v1/parkingspaces';
  static readonly parkingSpacesUsingPOSTPath = '/parkingzr/api/v1/parkingspaces';
  static readonly parkingSpacesUsingPUTPath = '/parkingzr/api/v1/parkingspaces';
  static readonly parkingSpacesUsingDELETEPath = '/parkingzr/api/v1/parkingspaces';
  static readonly parkingSpacesUsingOPTIONSPath = '/parkingzr/api/v1/parkingspaces';
  static readonly parkingSpacesUsingPATCHPath = '/parkingzr/api/v1/parkingspaces';
  static readonly registerUsingPOSTPath = '/parkingzr/api/v1/register';
  static readonly sensorsUsingGETPath = '/parkingzr/api/v1/sensors';
  static readonly sensorsUsingHEADPath = '/parkingzr/api/v1/sensors';
  static readonly sensorsUsingPOSTPath = '/parkingzr/api/v1/sensors';
  static readonly sensorsUsingPUTPath = '/parkingzr/api/v1/sensors';
  static readonly sensorsUsingDELETEPath = '/parkingzr/api/v1/sensors';
  static readonly sensorsUsingOPTIONSPath = '/parkingzr/api/v1/sensors';
  static readonly sensorsUsingPATCHPath = '/parkingzr/api/v1/sensors';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @return OK
   */
  getBarriersUsingGETResponse(): __Observable<__StrictHttpResponse<BarriersResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/parkingzr/api/v1/barriers`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<BarriersResponse>;
      })
    );
  }
  /**
   * @return OK
   */
  getBarriersUsingGET(): __Observable<BarriersResponse> {
    return this.getBarriersUsingGETResponse().pipe(
      __map(_r => _r.body as BarriersResponse)
    );
  }

  /**
   * @return OK
   */
  getBarriersUsingHEADResponse(): __Observable<__StrictHttpResponse<BarriersResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'HEAD',
      this.rootUrl + `/parkingzr/api/v1/barriers`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<BarriersResponse>;
      })
    );
  }
  /**
   * @return OK
   */
  getBarriersUsingHEAD(): __Observable<BarriersResponse> {
    return this.getBarriersUsingHEADResponse().pipe(
      __map(_r => _r.body as BarriersResponse)
    );
  }

  /**
   * @return OK
   */
  getBarriersUsingPOSTResponse(): __Observable<__StrictHttpResponse<BarriersResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/parkingzr/api/v1/barriers`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<BarriersResponse>;
      })
    );
  }
  /**
   * @return OK
   */
  getBarriersUsingPOST(): __Observable<BarriersResponse> {
    return this.getBarriersUsingPOSTResponse().pipe(
      __map(_r => _r.body as BarriersResponse)
    );
  }

  /**
   * @return OK
   */
  getBarriersUsingPUTResponse(): __Observable<__StrictHttpResponse<BarriersResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/parkingzr/api/v1/barriers`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<BarriersResponse>;
      })
    );
  }
  /**
   * @return OK
   */
  getBarriersUsingPUT(): __Observable<BarriersResponse> {
    return this.getBarriersUsingPUTResponse().pipe(
      __map(_r => _r.body as BarriersResponse)
    );
  }

  /**
   * @return OK
   */
  getBarriersUsingDELETEResponse(): __Observable<__StrictHttpResponse<BarriersResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/parkingzr/api/v1/barriers`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<BarriersResponse>;
      })
    );
  }
  /**
   * @return OK
   */
  getBarriersUsingDELETE(): __Observable<BarriersResponse> {
    return this.getBarriersUsingDELETEResponse().pipe(
      __map(_r => _r.body as BarriersResponse)
    );
  }

  /**
   * @return OK
   */
  getBarriersUsingOPTIONSResponse(): __Observable<__StrictHttpResponse<BarriersResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'OPTIONS',
      this.rootUrl + `/parkingzr/api/v1/barriers`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<BarriersResponse>;
      })
    );
  }
  /**
   * @return OK
   */
  getBarriersUsingOPTIONS(): __Observable<BarriersResponse> {
    return this.getBarriersUsingOPTIONSResponse().pipe(
      __map(_r => _r.body as BarriersResponse)
    );
  }

  /**
   * @return OK
   */
  getBarriersUsingPATCHResponse(): __Observable<__StrictHttpResponse<BarriersResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/parkingzr/api/v1/barriers`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<BarriersResponse>;
      })
    );
  }
  /**
   * @return OK
   */
  getBarriersUsingPATCH(): __Observable<BarriersResponse> {
    return this.getBarriersUsingPATCHResponse().pipe(
      __map(_r => _r.body as BarriersResponse)
    );
  }

  /**
   * @param params The `ParkingRestApiControllerService.ChangeBarrierStateUsingPUTParams` containing the following parameters:
   *
   * - `id`: id
   *
   * - `barrier`: barrier
   *
   * @return OK
   */
  changeBarrierStateUsingPUTResponse(params: ParkingRestApiControllerService.ChangeBarrierStateUsingPUTParams): __Observable<__StrictHttpResponse<Barrier>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.barrier;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/parkingzr/api/v1/barriers/${params.id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Barrier>;
      })
    );
  }
  /**
   * @param params The `ParkingRestApiControllerService.ChangeBarrierStateUsingPUTParams` containing the following parameters:
   *
   * - `id`: id
   *
   * - `barrier`: barrier
   *
   * @return OK
   */
  changeBarrierStateUsingPUT(params: ParkingRestApiControllerService.ChangeBarrierStateUsingPUTParams): __Observable<Barrier> {
    return this.changeBarrierStateUsingPUTResponse(params).pipe(
      __map(_r => _r.body as Barrier)
    );
  }

  /**
   * @param id id
   * @return OK
   */
  getBarrierSchedulerUsingGETResponse(id: string): __Observable<__StrictHttpResponse<BarrierSchedulerResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/parkingzr/api/v1/barriers/${id}/scheduler`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<BarrierSchedulerResponse>;
      })
    );
  }
  /**
   * @param id id
   * @return OK
   */
  getBarrierSchedulerUsingGET(id: string): __Observable<BarrierSchedulerResponse> {
    return this.getBarrierSchedulerUsingGETResponse(id).pipe(
      __map(_r => _r.body as BarrierSchedulerResponse)
    );
  }

  /**
   * @param id id
   * @return OK
   */
  getBarrierSchedulerUsingHEADResponse(id: string): __Observable<__StrictHttpResponse<BarrierSchedulerResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'HEAD',
      this.rootUrl + `/parkingzr/api/v1/barriers/${id}/scheduler`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<BarrierSchedulerResponse>;
      })
    );
  }
  /**
   * @param id id
   * @return OK
   */
  getBarrierSchedulerUsingHEAD(id: string): __Observable<BarrierSchedulerResponse> {
    return this.getBarrierSchedulerUsingHEADResponse(id).pipe(
      __map(_r => _r.body as BarrierSchedulerResponse)
    );
  }

  /**
   * @param id id
   * @return OK
   */
  getBarrierSchedulerUsingPOSTResponse(id: string): __Observable<__StrictHttpResponse<BarrierSchedulerResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/parkingzr/api/v1/barriers/${id}/scheduler`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<BarrierSchedulerResponse>;
      })
    );
  }
  /**
   * @param id id
   * @return OK
   */
  getBarrierSchedulerUsingPOST(id: string): __Observable<BarrierSchedulerResponse> {
    return this.getBarrierSchedulerUsingPOSTResponse(id).pipe(
      __map(_r => _r.body as BarrierSchedulerResponse)
    );
  }

  /**
   * @param params The `ParkingRestApiControllerService.UpdateBarrierSchedulerUsingPUTParams` containing the following parameters:
   *
   * - `scheduler`: scheduler
   *
   * - `id`: id
   *
   * @return OK
   */
  updateBarrierSchedulerUsingPUTResponse(params: ParkingRestApiControllerService.UpdateBarrierSchedulerUsingPUTParams): __Observable<__StrictHttpResponse<BarrierSchedulerResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = params.scheduler;

    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/parkingzr/api/v1/barriers/${params.id}/scheduler`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<BarrierSchedulerResponse>;
      })
    );
  }
  /**
   * @param params The `ParkingRestApiControllerService.UpdateBarrierSchedulerUsingPUTParams` containing the following parameters:
   *
   * - `scheduler`: scheduler
   *
   * - `id`: id
   *
   * @return OK
   */
  updateBarrierSchedulerUsingPUT(params: ParkingRestApiControllerService.UpdateBarrierSchedulerUsingPUTParams): __Observable<BarrierSchedulerResponse> {
    return this.updateBarrierSchedulerUsingPUTResponse(params).pipe(
      __map(_r => _r.body as BarrierSchedulerResponse)
    );
  }

  /**
   * @param id id
   * @return OK
   */
  getBarrierSchedulerUsingDELETEResponse(id: string): __Observable<__StrictHttpResponse<BarrierSchedulerResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/parkingzr/api/v1/barriers/${id}/scheduler`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<BarrierSchedulerResponse>;
      })
    );
  }
  /**
   * @param id id
   * @return OK
   */
  getBarrierSchedulerUsingDELETE(id: string): __Observable<BarrierSchedulerResponse> {
    return this.getBarrierSchedulerUsingDELETEResponse(id).pipe(
      __map(_r => _r.body as BarrierSchedulerResponse)
    );
  }

  /**
   * @param id id
   * @return OK
   */
  getBarrierSchedulerUsingOPTIONSResponse(id: string): __Observable<__StrictHttpResponse<BarrierSchedulerResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'OPTIONS',
      this.rootUrl + `/parkingzr/api/v1/barriers/${id}/scheduler`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<BarrierSchedulerResponse>;
      })
    );
  }
  /**
   * @param id id
   * @return OK
   */
  getBarrierSchedulerUsingOPTIONS(id: string): __Observable<BarrierSchedulerResponse> {
    return this.getBarrierSchedulerUsingOPTIONSResponse(id).pipe(
      __map(_r => _r.body as BarrierSchedulerResponse)
    );
  }

  /**
   * @param id id
   * @return OK
   */
  getBarrierSchedulerUsingPATCHResponse(id: string): __Observable<__StrictHttpResponse<BarrierSchedulerResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/parkingzr/api/v1/barriers/${id}/scheduler`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<BarrierSchedulerResponse>;
      })
    );
  }
  /**
   * @param id id
   * @return OK
   */
  getBarrierSchedulerUsingPATCH(id: string): __Observable<BarrierSchedulerResponse> {
    return this.getBarrierSchedulerUsingPATCHResponse(id).pipe(
      __map(_r => _r.body as BarrierSchedulerResponse)
    );
  }

  /**
   * @return OK
   */
  connectivityUsingGETResponse(): __Observable<__StrictHttpResponse<Connectivity>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/parkingzr/api/v1/connectivity`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Connectivity>;
      })
    );
  }
  /**
   * @return OK
   */
  connectivityUsingGET(): __Observable<Connectivity> {
    return this.connectivityUsingGETResponse().pipe(
      __map(_r => _r.body as Connectivity)
    );
  }

  /**
   * @return OK
   */
  connectivityUsingHEADResponse(): __Observable<__StrictHttpResponse<Connectivity>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'HEAD',
      this.rootUrl + `/parkingzr/api/v1/connectivity`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Connectivity>;
      })
    );
  }
  /**
   * @return OK
   */
  connectivityUsingHEAD(): __Observable<Connectivity> {
    return this.connectivityUsingHEADResponse().pipe(
      __map(_r => _r.body as Connectivity)
    );
  }

  /**
   * @return OK
   */
  connectivityUsingPOSTResponse(): __Observable<__StrictHttpResponse<Connectivity>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/parkingzr/api/v1/connectivity`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Connectivity>;
      })
    );
  }
  /**
   * @return OK
   */
  connectivityUsingPOST(): __Observable<Connectivity> {
    return this.connectivityUsingPOSTResponse().pipe(
      __map(_r => _r.body as Connectivity)
    );
  }

  /**
   * @return OK
   */
  connectivityUsingPUTResponse(): __Observable<__StrictHttpResponse<Connectivity>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/parkingzr/api/v1/connectivity`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Connectivity>;
      })
    );
  }
  /**
   * @return OK
   */
  connectivityUsingPUT(): __Observable<Connectivity> {
    return this.connectivityUsingPUTResponse().pipe(
      __map(_r => _r.body as Connectivity)
    );
  }

  /**
   * @return OK
   */
  connectivityUsingDELETEResponse(): __Observable<__StrictHttpResponse<Connectivity>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/parkingzr/api/v1/connectivity`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Connectivity>;
      })
    );
  }
  /**
   * @return OK
   */
  connectivityUsingDELETE(): __Observable<Connectivity> {
    return this.connectivityUsingDELETEResponse().pipe(
      __map(_r => _r.body as Connectivity)
    );
  }

  /**
   * @return OK
   */
  connectivityUsingOPTIONSResponse(): __Observable<__StrictHttpResponse<Connectivity>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'OPTIONS',
      this.rootUrl + `/parkingzr/api/v1/connectivity`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Connectivity>;
      })
    );
  }
  /**
   * @return OK
   */
  connectivityUsingOPTIONS(): __Observable<Connectivity> {
    return this.connectivityUsingOPTIONSResponse().pipe(
      __map(_r => _r.body as Connectivity)
    );
  }

  /**
   * @return OK
   */
  connectivityUsingPATCHResponse(): __Observable<__StrictHttpResponse<Connectivity>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/parkingzr/api/v1/connectivity`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Connectivity>;
      })
    );
  }
  /**
   * @return OK
   */
  connectivityUsingPATCH(): __Observable<Connectivity> {
    return this.connectivityUsingPATCHResponse().pipe(
      __map(_r => _r.body as Connectivity)
    );
  }

  /**
   * @param params The `ParkingRestApiControllerService.GetEventsUsingGETParams` containing the following parameters:
   *
   * - `to`: Events to.
   *
   * - `sortBy`: sortBy
   *
   * - `pageSize`: pageSize
   *
   * - `page`: page
   *
   * - `from`: Events from.
   *
   * - `eventType`: eventType
   *
   * - `deviceExternalId`: deviceExternalId
   *
   * @return OK
   */
  getEventsUsingGETResponse(params: ParkingRestApiControllerService.GetEventsUsingGETParams): __Observable<__StrictHttpResponse<ParkingEventsResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.to != null) __params = __params.set('to', params.to.toString());
    if (params.sortBy != null) __params = __params.set('sortBy', params.sortBy.toString());
    if (params.pageSize != null) __params = __params.set('pageSize', params.pageSize.toString());
    if (params.page != null) __params = __params.set('page', params.page.toString());
    if (params.from != null) __params = __params.set('from', params.from.toString());
    if (params.eventType != null) __params = __params.set('eventType', params.eventType.toString());
    if (params.deviceExternalId != null) __params = __params.set('deviceExternalId', params.deviceExternalId.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/parkingzr/api/v1/events`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ParkingEventsResponse>;
      })
    );
  }
  /**
   * @param params The `ParkingRestApiControllerService.GetEventsUsingGETParams` containing the following parameters:
   *
   * - `to`: Events to.
   *
   * - `sortBy`: sortBy
   *
   * - `pageSize`: pageSize
   *
   * - `page`: page
   *
   * - `from`: Events from.
   *
   * - `eventType`: eventType
   *
   * - `deviceExternalId`: deviceExternalId
   *
   * @return OK
   */
  getEventsUsingGET(params: ParkingRestApiControllerService.GetEventsUsingGETParams): __Observable<ParkingEventsResponse> {
    return this.getEventsUsingGETResponse(params).pipe(
      __map(_r => _r.body as ParkingEventsResponse)
    );
  }

  /**
   * @param params The `ParkingRestApiControllerService.GetEventsUsingHEADParams` containing the following parameters:
   *
   * - `to`: Events to.
   *
   * - `sortBy`: sortBy
   *
   * - `pageSize`: pageSize
   *
   * - `page`: page
   *
   * - `from`: Events from.
   *
   * - `eventType`: eventType
   *
   * - `deviceExternalId`: deviceExternalId
   *
   * @return OK
   */
  getEventsUsingHEADResponse(params: ParkingRestApiControllerService.GetEventsUsingHEADParams): __Observable<__StrictHttpResponse<ParkingEventsResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.to != null) __params = __params.set('to', params.to.toString());
    if (params.sortBy != null) __params = __params.set('sortBy', params.sortBy.toString());
    if (params.pageSize != null) __params = __params.set('pageSize', params.pageSize.toString());
    if (params.page != null) __params = __params.set('page', params.page.toString());
    if (params.from != null) __params = __params.set('from', params.from.toString());
    if (params.eventType != null) __params = __params.set('eventType', params.eventType.toString());
    if (params.deviceExternalId != null) __params = __params.set('deviceExternalId', params.deviceExternalId.toString());
    let req = new HttpRequest<any>(
      'HEAD',
      this.rootUrl + `/parkingzr/api/v1/events`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ParkingEventsResponse>;
      })
    );
  }
  /**
   * @param params The `ParkingRestApiControllerService.GetEventsUsingHEADParams` containing the following parameters:
   *
   * - `to`: Events to.
   *
   * - `sortBy`: sortBy
   *
   * - `pageSize`: pageSize
   *
   * - `page`: page
   *
   * - `from`: Events from.
   *
   * - `eventType`: eventType
   *
   * - `deviceExternalId`: deviceExternalId
   *
   * @return OK
   */
  getEventsUsingHEAD(params: ParkingRestApiControllerService.GetEventsUsingHEADParams): __Observable<ParkingEventsResponse> {
    return this.getEventsUsingHEADResponse(params).pipe(
      __map(_r => _r.body as ParkingEventsResponse)
    );
  }

  /**
   * @param params The `ParkingRestApiControllerService.GetEventsUsingPOSTParams` containing the following parameters:
   *
   * - `to`: Events to.
   *
   * - `sortBy`: sortBy
   *
   * - `pageSize`: pageSize
   *
   * - `page`: page
   *
   * - `from`: Events from.
   *
   * - `eventType`: eventType
   *
   * - `deviceExternalId`: deviceExternalId
   *
   * @return OK
   */
  getEventsUsingPOSTResponse(params: ParkingRestApiControllerService.GetEventsUsingPOSTParams): __Observable<__StrictHttpResponse<ParkingEventsResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.to != null) __params = __params.set('to', params.to.toString());
    if (params.sortBy != null) __params = __params.set('sortBy', params.sortBy.toString());
    if (params.pageSize != null) __params = __params.set('pageSize', params.pageSize.toString());
    if (params.page != null) __params = __params.set('page', params.page.toString());
    if (params.from != null) __params = __params.set('from', params.from.toString());
    if (params.eventType != null) __params = __params.set('eventType', params.eventType.toString());
    if (params.deviceExternalId != null) __params = __params.set('deviceExternalId', params.deviceExternalId.toString());
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/parkingzr/api/v1/events`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ParkingEventsResponse>;
      })
    );
  }
  /**
   * @param params The `ParkingRestApiControllerService.GetEventsUsingPOSTParams` containing the following parameters:
   *
   * - `to`: Events to.
   *
   * - `sortBy`: sortBy
   *
   * - `pageSize`: pageSize
   *
   * - `page`: page
   *
   * - `from`: Events from.
   *
   * - `eventType`: eventType
   *
   * - `deviceExternalId`: deviceExternalId
   *
   * @return OK
   */
  getEventsUsingPOST(params: ParkingRestApiControllerService.GetEventsUsingPOSTParams): __Observable<ParkingEventsResponse> {
    return this.getEventsUsingPOSTResponse(params).pipe(
      __map(_r => _r.body as ParkingEventsResponse)
    );
  }

  /**
   * @param params The `ParkingRestApiControllerService.GetEventsUsingPUTParams` containing the following parameters:
   *
   * - `to`: Events to.
   *
   * - `sortBy`: sortBy
   *
   * - `pageSize`: pageSize
   *
   * - `page`: page
   *
   * - `from`: Events from.
   *
   * - `eventType`: eventType
   *
   * - `deviceExternalId`: deviceExternalId
   *
   * @return OK
   */
  getEventsUsingPUTResponse(params: ParkingRestApiControllerService.GetEventsUsingPUTParams): __Observable<__StrictHttpResponse<ParkingEventsResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.to != null) __params = __params.set('to', params.to.toString());
    if (params.sortBy != null) __params = __params.set('sortBy', params.sortBy.toString());
    if (params.pageSize != null) __params = __params.set('pageSize', params.pageSize.toString());
    if (params.page != null) __params = __params.set('page', params.page.toString());
    if (params.from != null) __params = __params.set('from', params.from.toString());
    if (params.eventType != null) __params = __params.set('eventType', params.eventType.toString());
    if (params.deviceExternalId != null) __params = __params.set('deviceExternalId', params.deviceExternalId.toString());
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/parkingzr/api/v1/events`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ParkingEventsResponse>;
      })
    );
  }
  /**
   * @param params The `ParkingRestApiControllerService.GetEventsUsingPUTParams` containing the following parameters:
   *
   * - `to`: Events to.
   *
   * - `sortBy`: sortBy
   *
   * - `pageSize`: pageSize
   *
   * - `page`: page
   *
   * - `from`: Events from.
   *
   * - `eventType`: eventType
   *
   * - `deviceExternalId`: deviceExternalId
   *
   * @return OK
   */
  getEventsUsingPUT(params: ParkingRestApiControllerService.GetEventsUsingPUTParams): __Observable<ParkingEventsResponse> {
    return this.getEventsUsingPUTResponse(params).pipe(
      __map(_r => _r.body as ParkingEventsResponse)
    );
  }

  /**
   * @param params The `ParkingRestApiControllerService.GetEventsUsingDELETEParams` containing the following parameters:
   *
   * - `to`: Events to.
   *
   * - `sortBy`: sortBy
   *
   * - `pageSize`: pageSize
   *
   * - `page`: page
   *
   * - `from`: Events from.
   *
   * - `eventType`: eventType
   *
   * - `deviceExternalId`: deviceExternalId
   *
   * @return OK
   */
  getEventsUsingDELETEResponse(params: ParkingRestApiControllerService.GetEventsUsingDELETEParams): __Observable<__StrictHttpResponse<ParkingEventsResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.to != null) __params = __params.set('to', params.to.toString());
    if (params.sortBy != null) __params = __params.set('sortBy', params.sortBy.toString());
    if (params.pageSize != null) __params = __params.set('pageSize', params.pageSize.toString());
    if (params.page != null) __params = __params.set('page', params.page.toString());
    if (params.from != null) __params = __params.set('from', params.from.toString());
    if (params.eventType != null) __params = __params.set('eventType', params.eventType.toString());
    if (params.deviceExternalId != null) __params = __params.set('deviceExternalId', params.deviceExternalId.toString());
    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/parkingzr/api/v1/events`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ParkingEventsResponse>;
      })
    );
  }
  /**
   * @param params The `ParkingRestApiControllerService.GetEventsUsingDELETEParams` containing the following parameters:
   *
   * - `to`: Events to.
   *
   * - `sortBy`: sortBy
   *
   * - `pageSize`: pageSize
   *
   * - `page`: page
   *
   * - `from`: Events from.
   *
   * - `eventType`: eventType
   *
   * - `deviceExternalId`: deviceExternalId
   *
   * @return OK
   */
  getEventsUsingDELETE(params: ParkingRestApiControllerService.GetEventsUsingDELETEParams): __Observable<ParkingEventsResponse> {
    return this.getEventsUsingDELETEResponse(params).pipe(
      __map(_r => _r.body as ParkingEventsResponse)
    );
  }

  /**
   * @param params The `ParkingRestApiControllerService.GetEventsUsingOPTIONSParams` containing the following parameters:
   *
   * - `to`: Events to.
   *
   * - `sortBy`: sortBy
   *
   * - `pageSize`: pageSize
   *
   * - `page`: page
   *
   * - `from`: Events from.
   *
   * - `eventType`: eventType
   *
   * - `deviceExternalId`: deviceExternalId
   *
   * @return OK
   */
  getEventsUsingOPTIONSResponse(params: ParkingRestApiControllerService.GetEventsUsingOPTIONSParams): __Observable<__StrictHttpResponse<ParkingEventsResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.to != null) __params = __params.set('to', params.to.toString());
    if (params.sortBy != null) __params = __params.set('sortBy', params.sortBy.toString());
    if (params.pageSize != null) __params = __params.set('pageSize', params.pageSize.toString());
    if (params.page != null) __params = __params.set('page', params.page.toString());
    if (params.from != null) __params = __params.set('from', params.from.toString());
    if (params.eventType != null) __params = __params.set('eventType', params.eventType.toString());
    if (params.deviceExternalId != null) __params = __params.set('deviceExternalId', params.deviceExternalId.toString());
    let req = new HttpRequest<any>(
      'OPTIONS',
      this.rootUrl + `/parkingzr/api/v1/events`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ParkingEventsResponse>;
      })
    );
  }
  /**
   * @param params The `ParkingRestApiControllerService.GetEventsUsingOPTIONSParams` containing the following parameters:
   *
   * - `to`: Events to.
   *
   * - `sortBy`: sortBy
   *
   * - `pageSize`: pageSize
   *
   * - `page`: page
   *
   * - `from`: Events from.
   *
   * - `eventType`: eventType
   *
   * - `deviceExternalId`: deviceExternalId
   *
   * @return OK
   */
  getEventsUsingOPTIONS(params: ParkingRestApiControllerService.GetEventsUsingOPTIONSParams): __Observable<ParkingEventsResponse> {
    return this.getEventsUsingOPTIONSResponse(params).pipe(
      __map(_r => _r.body as ParkingEventsResponse)
    );
  }

  /**
   * @param params The `ParkingRestApiControllerService.GetEventsUsingPATCHParams` containing the following parameters:
   *
   * - `to`: Events to.
   *
   * - `sortBy`: sortBy
   *
   * - `pageSize`: pageSize
   *
   * - `page`: page
   *
   * - `from`: Events from.
   *
   * - `eventType`: eventType
   *
   * - `deviceExternalId`: deviceExternalId
   *
   * @return OK
   */
  getEventsUsingPATCHResponse(params: ParkingRestApiControllerService.GetEventsUsingPATCHParams): __Observable<__StrictHttpResponse<ParkingEventsResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.to != null) __params = __params.set('to', params.to.toString());
    if (params.sortBy != null) __params = __params.set('sortBy', params.sortBy.toString());
    if (params.pageSize != null) __params = __params.set('pageSize', params.pageSize.toString());
    if (params.page != null) __params = __params.set('page', params.page.toString());
    if (params.from != null) __params = __params.set('from', params.from.toString());
    if (params.eventType != null) __params = __params.set('eventType', params.eventType.toString());
    if (params.deviceExternalId != null) __params = __params.set('deviceExternalId', params.deviceExternalId.toString());
    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/parkingzr/api/v1/events`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ParkingEventsResponse>;
      })
    );
  }
  /**
   * @param params The `ParkingRestApiControllerService.GetEventsUsingPATCHParams` containing the following parameters:
   *
   * - `to`: Events to.
   *
   * - `sortBy`: sortBy
   *
   * - `pageSize`: pageSize
   *
   * - `page`: page
   *
   * - `from`: Events from.
   *
   * - `eventType`: eventType
   *
   * - `deviceExternalId`: deviceExternalId
   *
   * @return OK
   */
  getEventsUsingPATCH(params: ParkingRestApiControllerService.GetEventsUsingPATCHParams): __Observable<ParkingEventsResponse> {
    return this.getEventsUsingPATCHResponse(params).pipe(
      __map(_r => _r.body as ParkingEventsResponse)
    );
  }

  /**
   * @param params The `ParkingRestApiControllerService.GetGroupedEventsUsingGETParams` containing the following parameters:
   *
   * - `to`: Events to.
   *
   * - `interval`: Interval in seconds.
   *
   * - `from`: Events from.
   *
   * - `eventType`: eventType
   *
   * - `deviceExternalId`: deviceExternalId
   *
   * @return OK
   */
  getGroupedEventsUsingGETResponse(params: ParkingRestApiControllerService.GetGroupedEventsUsingGETParams): __Observable<__StrictHttpResponse<GroupedEventsResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.to != null) __params = __params.set('to', params.to.toString());
    if (params.interval != null) __params = __params.set('interval', params.interval.toString());
    if (params.from != null) __params = __params.set('from', params.from.toString());
    if (params.eventType != null) __params = __params.set('eventType', params.eventType.toString());
    if (params.deviceExternalId != null) __params = __params.set('deviceExternalId', params.deviceExternalId.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/parkingzr/api/v1/groupedEvents`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<GroupedEventsResponse>;
      })
    );
  }
  /**
   * @param params The `ParkingRestApiControllerService.GetGroupedEventsUsingGETParams` containing the following parameters:
   *
   * - `to`: Events to.
   *
   * - `interval`: Interval in seconds.
   *
   * - `from`: Events from.
   *
   * - `eventType`: eventType
   *
   * - `deviceExternalId`: deviceExternalId
   *
   * @return OK
   */
  getGroupedEventsUsingGET(params: ParkingRestApiControllerService.GetGroupedEventsUsingGETParams): __Observable<GroupedEventsResponse> {
    return this.getGroupedEventsUsingGETResponse(params).pipe(
      __map(_r => _r.body as GroupedEventsResponse)
    );
  }

  /**
   * @param params The `ParkingRestApiControllerService.GetGroupedEventsUsingHEADParams` containing the following parameters:
   *
   * - `to`: Events to.
   *
   * - `interval`: Interval in seconds.
   *
   * - `from`: Events from.
   *
   * - `eventType`: eventType
   *
   * - `deviceExternalId`: deviceExternalId
   *
   * @return OK
   */
  getGroupedEventsUsingHEADResponse(params: ParkingRestApiControllerService.GetGroupedEventsUsingHEADParams): __Observable<__StrictHttpResponse<GroupedEventsResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.to != null) __params = __params.set('to', params.to.toString());
    if (params.interval != null) __params = __params.set('interval', params.interval.toString());
    if (params.from != null) __params = __params.set('from', params.from.toString());
    if (params.eventType != null) __params = __params.set('eventType', params.eventType.toString());
    if (params.deviceExternalId != null) __params = __params.set('deviceExternalId', params.deviceExternalId.toString());
    let req = new HttpRequest<any>(
      'HEAD',
      this.rootUrl + `/parkingzr/api/v1/groupedEvents`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<GroupedEventsResponse>;
      })
    );
  }
  /**
   * @param params The `ParkingRestApiControllerService.GetGroupedEventsUsingHEADParams` containing the following parameters:
   *
   * - `to`: Events to.
   *
   * - `interval`: Interval in seconds.
   *
   * - `from`: Events from.
   *
   * - `eventType`: eventType
   *
   * - `deviceExternalId`: deviceExternalId
   *
   * @return OK
   */
  getGroupedEventsUsingHEAD(params: ParkingRestApiControllerService.GetGroupedEventsUsingHEADParams): __Observable<GroupedEventsResponse> {
    return this.getGroupedEventsUsingHEADResponse(params).pipe(
      __map(_r => _r.body as GroupedEventsResponse)
    );
  }

  /**
   * @param params The `ParkingRestApiControllerService.GetGroupedEventsUsingPOSTParams` containing the following parameters:
   *
   * - `to`: Events to.
   *
   * - `interval`: Interval in seconds.
   *
   * - `from`: Events from.
   *
   * - `eventType`: eventType
   *
   * - `deviceExternalId`: deviceExternalId
   *
   * @return OK
   */
  getGroupedEventsUsingPOSTResponse(params: ParkingRestApiControllerService.GetGroupedEventsUsingPOSTParams): __Observable<__StrictHttpResponse<GroupedEventsResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.to != null) __params = __params.set('to', params.to.toString());
    if (params.interval != null) __params = __params.set('interval', params.interval.toString());
    if (params.from != null) __params = __params.set('from', params.from.toString());
    if (params.eventType != null) __params = __params.set('eventType', params.eventType.toString());
    if (params.deviceExternalId != null) __params = __params.set('deviceExternalId', params.deviceExternalId.toString());
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/parkingzr/api/v1/groupedEvents`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<GroupedEventsResponse>;
      })
    );
  }
  /**
   * @param params The `ParkingRestApiControllerService.GetGroupedEventsUsingPOSTParams` containing the following parameters:
   *
   * - `to`: Events to.
   *
   * - `interval`: Interval in seconds.
   *
   * - `from`: Events from.
   *
   * - `eventType`: eventType
   *
   * - `deviceExternalId`: deviceExternalId
   *
   * @return OK
   */
  getGroupedEventsUsingPOST(params: ParkingRestApiControllerService.GetGroupedEventsUsingPOSTParams): __Observable<GroupedEventsResponse> {
    return this.getGroupedEventsUsingPOSTResponse(params).pipe(
      __map(_r => _r.body as GroupedEventsResponse)
    );
  }

  /**
   * @param params The `ParkingRestApiControllerService.GetGroupedEventsUsingPUTParams` containing the following parameters:
   *
   * - `to`: Events to.
   *
   * - `interval`: Interval in seconds.
   *
   * - `from`: Events from.
   *
   * - `eventType`: eventType
   *
   * - `deviceExternalId`: deviceExternalId
   *
   * @return OK
   */
  getGroupedEventsUsingPUTResponse(params: ParkingRestApiControllerService.GetGroupedEventsUsingPUTParams): __Observable<__StrictHttpResponse<GroupedEventsResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.to != null) __params = __params.set('to', params.to.toString());
    if (params.interval != null) __params = __params.set('interval', params.interval.toString());
    if (params.from != null) __params = __params.set('from', params.from.toString());
    if (params.eventType != null) __params = __params.set('eventType', params.eventType.toString());
    if (params.deviceExternalId != null) __params = __params.set('deviceExternalId', params.deviceExternalId.toString());
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/parkingzr/api/v1/groupedEvents`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<GroupedEventsResponse>;
      })
    );
  }
  /**
   * @param params The `ParkingRestApiControllerService.GetGroupedEventsUsingPUTParams` containing the following parameters:
   *
   * - `to`: Events to.
   *
   * - `interval`: Interval in seconds.
   *
   * - `from`: Events from.
   *
   * - `eventType`: eventType
   *
   * - `deviceExternalId`: deviceExternalId
   *
   * @return OK
   */
  getGroupedEventsUsingPUT(params: ParkingRestApiControllerService.GetGroupedEventsUsingPUTParams): __Observable<GroupedEventsResponse> {
    return this.getGroupedEventsUsingPUTResponse(params).pipe(
      __map(_r => _r.body as GroupedEventsResponse)
    );
  }

  /**
   * @param params The `ParkingRestApiControllerService.GetGroupedEventsUsingDELETEParams` containing the following parameters:
   *
   * - `to`: Events to.
   *
   * - `interval`: Interval in seconds.
   *
   * - `from`: Events from.
   *
   * - `eventType`: eventType
   *
   * - `deviceExternalId`: deviceExternalId
   *
   * @return OK
   */
  getGroupedEventsUsingDELETEResponse(params: ParkingRestApiControllerService.GetGroupedEventsUsingDELETEParams): __Observable<__StrictHttpResponse<GroupedEventsResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.to != null) __params = __params.set('to', params.to.toString());
    if (params.interval != null) __params = __params.set('interval', params.interval.toString());
    if (params.from != null) __params = __params.set('from', params.from.toString());
    if (params.eventType != null) __params = __params.set('eventType', params.eventType.toString());
    if (params.deviceExternalId != null) __params = __params.set('deviceExternalId', params.deviceExternalId.toString());
    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/parkingzr/api/v1/groupedEvents`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<GroupedEventsResponse>;
      })
    );
  }
  /**
   * @param params The `ParkingRestApiControllerService.GetGroupedEventsUsingDELETEParams` containing the following parameters:
   *
   * - `to`: Events to.
   *
   * - `interval`: Interval in seconds.
   *
   * - `from`: Events from.
   *
   * - `eventType`: eventType
   *
   * - `deviceExternalId`: deviceExternalId
   *
   * @return OK
   */
  getGroupedEventsUsingDELETE(params: ParkingRestApiControllerService.GetGroupedEventsUsingDELETEParams): __Observable<GroupedEventsResponse> {
    return this.getGroupedEventsUsingDELETEResponse(params).pipe(
      __map(_r => _r.body as GroupedEventsResponse)
    );
  }

  /**
   * @param params The `ParkingRestApiControllerService.GetGroupedEventsUsingOPTIONSParams` containing the following parameters:
   *
   * - `to`: Events to.
   *
   * - `interval`: Interval in seconds.
   *
   * - `from`: Events from.
   *
   * - `eventType`: eventType
   *
   * - `deviceExternalId`: deviceExternalId
   *
   * @return OK
   */
  getGroupedEventsUsingOPTIONSResponse(params: ParkingRestApiControllerService.GetGroupedEventsUsingOPTIONSParams): __Observable<__StrictHttpResponse<GroupedEventsResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.to != null) __params = __params.set('to', params.to.toString());
    if (params.interval != null) __params = __params.set('interval', params.interval.toString());
    if (params.from != null) __params = __params.set('from', params.from.toString());
    if (params.eventType != null) __params = __params.set('eventType', params.eventType.toString());
    if (params.deviceExternalId != null) __params = __params.set('deviceExternalId', params.deviceExternalId.toString());
    let req = new HttpRequest<any>(
      'OPTIONS',
      this.rootUrl + `/parkingzr/api/v1/groupedEvents`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<GroupedEventsResponse>;
      })
    );
  }
  /**
   * @param params The `ParkingRestApiControllerService.GetGroupedEventsUsingOPTIONSParams` containing the following parameters:
   *
   * - `to`: Events to.
   *
   * - `interval`: Interval in seconds.
   *
   * - `from`: Events from.
   *
   * - `eventType`: eventType
   *
   * - `deviceExternalId`: deviceExternalId
   *
   * @return OK
   */
  getGroupedEventsUsingOPTIONS(params: ParkingRestApiControllerService.GetGroupedEventsUsingOPTIONSParams): __Observable<GroupedEventsResponse> {
    return this.getGroupedEventsUsingOPTIONSResponse(params).pipe(
      __map(_r => _r.body as GroupedEventsResponse)
    );
  }

  /**
   * @param params The `ParkingRestApiControllerService.GetGroupedEventsUsingPATCHParams` containing the following parameters:
   *
   * - `to`: Events to.
   *
   * - `interval`: Interval in seconds.
   *
   * - `from`: Events from.
   *
   * - `eventType`: eventType
   *
   * - `deviceExternalId`: deviceExternalId
   *
   * @return OK
   */
  getGroupedEventsUsingPATCHResponse(params: ParkingRestApiControllerService.GetGroupedEventsUsingPATCHParams): __Observable<__StrictHttpResponse<GroupedEventsResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.to != null) __params = __params.set('to', params.to.toString());
    if (params.interval != null) __params = __params.set('interval', params.interval.toString());
    if (params.from != null) __params = __params.set('from', params.from.toString());
    if (params.eventType != null) __params = __params.set('eventType', params.eventType.toString());
    if (params.deviceExternalId != null) __params = __params.set('deviceExternalId', params.deviceExternalId.toString());
    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/parkingzr/api/v1/groupedEvents`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<GroupedEventsResponse>;
      })
    );
  }
  /**
   * @param params The `ParkingRestApiControllerService.GetGroupedEventsUsingPATCHParams` containing the following parameters:
   *
   * - `to`: Events to.
   *
   * - `interval`: Interval in seconds.
   *
   * - `from`: Events from.
   *
   * - `eventType`: eventType
   *
   * - `deviceExternalId`: deviceExternalId
   *
   * @return OK
   */
  getGroupedEventsUsingPATCH(params: ParkingRestApiControllerService.GetGroupedEventsUsingPATCHParams): __Observable<GroupedEventsResponse> {
    return this.getGroupedEventsUsingPATCHResponse(params).pipe(
      __map(_r => _r.body as GroupedEventsResponse)
    );
  }

  /**
   * @return OK
   */
  getParkingSummaryUsingGETResponse(): __Observable<__StrictHttpResponse<GroupedEventsResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/parkingzr/api/v1/parkingSummary`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<GroupedEventsResponse>;
      })
    );
  }
  /**
   * @return OK
   */
  getParkingSummaryUsingGET(): __Observable<GroupedEventsResponse> {
    return this.getParkingSummaryUsingGETResponse().pipe(
      __map(_r => _r.body as GroupedEventsResponse)
    );
  }

  /**
   * @return OK
   */
  getParkingSummaryUsingHEADResponse(): __Observable<__StrictHttpResponse<GroupedEventsResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'HEAD',
      this.rootUrl + `/parkingzr/api/v1/parkingSummary`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<GroupedEventsResponse>;
      })
    );
  }
  /**
   * @return OK
   */
  getParkingSummaryUsingHEAD(): __Observable<GroupedEventsResponse> {
    return this.getParkingSummaryUsingHEADResponse().pipe(
      __map(_r => _r.body as GroupedEventsResponse)
    );
  }

  /**
   * @return OK
   */
  getParkingSummaryUsingPOSTResponse(): __Observable<__StrictHttpResponse<GroupedEventsResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/parkingzr/api/v1/parkingSummary`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<GroupedEventsResponse>;
      })
    );
  }
  /**
   * @return OK
   */
  getParkingSummaryUsingPOST(): __Observable<GroupedEventsResponse> {
    return this.getParkingSummaryUsingPOSTResponse().pipe(
      __map(_r => _r.body as GroupedEventsResponse)
    );
  }

  /**
   * @return OK
   */
  getParkingSummaryUsingPUTResponse(): __Observable<__StrictHttpResponse<GroupedEventsResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/parkingzr/api/v1/parkingSummary`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<GroupedEventsResponse>;
      })
    );
  }
  /**
   * @return OK
   */
  getParkingSummaryUsingPUT(): __Observable<GroupedEventsResponse> {
    return this.getParkingSummaryUsingPUTResponse().pipe(
      __map(_r => _r.body as GroupedEventsResponse)
    );
  }

  /**
   * @return OK
   */
  getParkingSummaryUsingDELETEResponse(): __Observable<__StrictHttpResponse<GroupedEventsResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/parkingzr/api/v1/parkingSummary`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<GroupedEventsResponse>;
      })
    );
  }
  /**
   * @return OK
   */
  getParkingSummaryUsingDELETE(): __Observable<GroupedEventsResponse> {
    return this.getParkingSummaryUsingDELETEResponse().pipe(
      __map(_r => _r.body as GroupedEventsResponse)
    );
  }

  /**
   * @return OK
   */
  getParkingSummaryUsingOPTIONSResponse(): __Observable<__StrictHttpResponse<GroupedEventsResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'OPTIONS',
      this.rootUrl + `/parkingzr/api/v1/parkingSummary`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<GroupedEventsResponse>;
      })
    );
  }
  /**
   * @return OK
   */
  getParkingSummaryUsingOPTIONS(): __Observable<GroupedEventsResponse> {
    return this.getParkingSummaryUsingOPTIONSResponse().pipe(
      __map(_r => _r.body as GroupedEventsResponse)
    );
  }

  /**
   * @return OK
   */
  getParkingSummaryUsingPATCHResponse(): __Observable<__StrictHttpResponse<GroupedEventsResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/parkingzr/api/v1/parkingSummary`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<GroupedEventsResponse>;
      })
    );
  }
  /**
   * @return OK
   */
  getParkingSummaryUsingPATCH(): __Observable<GroupedEventsResponse> {
    return this.getParkingSummaryUsingPATCHResponse().pipe(
      __map(_r => _r.body as GroupedEventsResponse)
    );
  }

  /**
   * @return OK
   */
  parkingAreasUsingGETResponse(): __Observable<__StrictHttpResponse<Array<{}>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/parkingzr/api/v1/parkingareas`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<{}>>;
      })
    );
  }
  /**
   * @return OK
   */
  parkingAreasUsingGET(): __Observable<Array<{}>> {
    return this.parkingAreasUsingGETResponse().pipe(
      __map(_r => _r.body as Array<{}>)
    );
  }

  /**
   * @return OK
   */
  parkingAreasUsingHEADResponse(): __Observable<__StrictHttpResponse<Array<{}>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'HEAD',
      this.rootUrl + `/parkingzr/api/v1/parkingareas`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<{}>>;
      })
    );
  }
  /**
   * @return OK
   */
  parkingAreasUsingHEAD(): __Observable<Array<{}>> {
    return this.parkingAreasUsingHEADResponse().pipe(
      __map(_r => _r.body as Array<{}>)
    );
  }

  /**
   * @return OK
   */
  parkingAreasUsingPOSTResponse(): __Observable<__StrictHttpResponse<Array<{}>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/parkingzr/api/v1/parkingareas`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<{}>>;
      })
    );
  }
  /**
   * @return OK
   */
  parkingAreasUsingPOST(): __Observable<Array<{}>> {
    return this.parkingAreasUsingPOSTResponse().pipe(
      __map(_r => _r.body as Array<{}>)
    );
  }

  /**
   * @return OK
   */
  parkingAreasUsingPUTResponse(): __Observable<__StrictHttpResponse<Array<{}>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/parkingzr/api/v1/parkingareas`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<{}>>;
      })
    );
  }
  /**
   * @return OK
   */
  parkingAreasUsingPUT(): __Observable<Array<{}>> {
    return this.parkingAreasUsingPUTResponse().pipe(
      __map(_r => _r.body as Array<{}>)
    );
  }

  /**
   * @return OK
   */
  parkingAreasUsingDELETEResponse(): __Observable<__StrictHttpResponse<Array<{}>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/parkingzr/api/v1/parkingareas`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<{}>>;
      })
    );
  }
  /**
   * @return OK
   */
  parkingAreasUsingDELETE(): __Observable<Array<{}>> {
    return this.parkingAreasUsingDELETEResponse().pipe(
      __map(_r => _r.body as Array<{}>)
    );
  }

  /**
   * @return OK
   */
  parkingAreasUsingOPTIONSResponse(): __Observable<__StrictHttpResponse<Array<{}>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'OPTIONS',
      this.rootUrl + `/parkingzr/api/v1/parkingareas`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<{}>>;
      })
    );
  }
  /**
   * @return OK
   */
  parkingAreasUsingOPTIONS(): __Observable<Array<{}>> {
    return this.parkingAreasUsingOPTIONSResponse().pipe(
      __map(_r => _r.body as Array<{}>)
    );
  }

  /**
   * @return OK
   */
  parkingAreasUsingPATCHResponse(): __Observable<__StrictHttpResponse<Array<{}>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/parkingzr/api/v1/parkingareas`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<{}>>;
      })
    );
  }
  /**
   * @return OK
   */
  parkingAreasUsingPATCH(): __Observable<Array<{}>> {
    return this.parkingAreasUsingPATCHResponse().pipe(
      __map(_r => _r.body as Array<{}>)
    );
  }

  /**
   * @param params The `ParkingRestApiControllerService.ParkingSpacesUsingGETParams` containing the following parameters:
   *
   * - `pageSize`: pageSize
   *
   * - `page`: page
   *
   * - `areaId`: areaId
   *
   * @return OK
   */
  parkingSpacesUsingGETResponse(params: ParkingRestApiControllerService.ParkingSpacesUsingGETParams): __Observable<__StrictHttpResponse<ParkingSpacesResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.pageSize != null) __params = __params.set('pageSize', params.pageSize.toString());
    if (params.page != null) __params = __params.set('page', params.page.toString());
    if (params.areaId != null) __params = __params.set('areaId', params.areaId.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/parkingzr/api/v1/parkingspaces`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ParkingSpacesResponse>;
      })
    );
  }
  /**
   * @param params The `ParkingRestApiControllerService.ParkingSpacesUsingGETParams` containing the following parameters:
   *
   * - `pageSize`: pageSize
   *
   * - `page`: page
   *
   * - `areaId`: areaId
   *
   * @return OK
   */
  parkingSpacesUsingGET(params: ParkingRestApiControllerService.ParkingSpacesUsingGETParams): __Observable<ParkingSpacesResponse> {
    return this.parkingSpacesUsingGETResponse(params).pipe(
      __map(_r => _r.body as ParkingSpacesResponse)
    );
  }

  /**
   * @param params The `ParkingRestApiControllerService.ParkingSpacesUsingHEADParams` containing the following parameters:
   *
   * - `pageSize`: pageSize
   *
   * - `page`: page
   *
   * - `areaId`: areaId
   *
   * @return OK
   */
  parkingSpacesUsingHEADResponse(params: ParkingRestApiControllerService.ParkingSpacesUsingHEADParams): __Observable<__StrictHttpResponse<ParkingSpacesResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.pageSize != null) __params = __params.set('pageSize', params.pageSize.toString());
    if (params.page != null) __params = __params.set('page', params.page.toString());
    if (params.areaId != null) __params = __params.set('areaId', params.areaId.toString());
    let req = new HttpRequest<any>(
      'HEAD',
      this.rootUrl + `/parkingzr/api/v1/parkingspaces`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ParkingSpacesResponse>;
      })
    );
  }
  /**
   * @param params The `ParkingRestApiControllerService.ParkingSpacesUsingHEADParams` containing the following parameters:
   *
   * - `pageSize`: pageSize
   *
   * - `page`: page
   *
   * - `areaId`: areaId
   *
   * @return OK
   */
  parkingSpacesUsingHEAD(params: ParkingRestApiControllerService.ParkingSpacesUsingHEADParams): __Observable<ParkingSpacesResponse> {
    return this.parkingSpacesUsingHEADResponse(params).pipe(
      __map(_r => _r.body as ParkingSpacesResponse)
    );
  }

  /**
   * @param params The `ParkingRestApiControllerService.ParkingSpacesUsingPOSTParams` containing the following parameters:
   *
   * - `pageSize`: pageSize
   *
   * - `page`: page
   *
   * - `areaId`: areaId
   *
   * @return OK
   */
  parkingSpacesUsingPOSTResponse(params: ParkingRestApiControllerService.ParkingSpacesUsingPOSTParams): __Observable<__StrictHttpResponse<ParkingSpacesResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.pageSize != null) __params = __params.set('pageSize', params.pageSize.toString());
    if (params.page != null) __params = __params.set('page', params.page.toString());
    if (params.areaId != null) __params = __params.set('areaId', params.areaId.toString());
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/parkingzr/api/v1/parkingspaces`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ParkingSpacesResponse>;
      })
    );
  }
  /**
   * @param params The `ParkingRestApiControllerService.ParkingSpacesUsingPOSTParams` containing the following parameters:
   *
   * - `pageSize`: pageSize
   *
   * - `page`: page
   *
   * - `areaId`: areaId
   *
   * @return OK
   */
  parkingSpacesUsingPOST(params: ParkingRestApiControllerService.ParkingSpacesUsingPOSTParams): __Observable<ParkingSpacesResponse> {
    return this.parkingSpacesUsingPOSTResponse(params).pipe(
      __map(_r => _r.body as ParkingSpacesResponse)
    );
  }

  /**
   * @param params The `ParkingRestApiControllerService.ParkingSpacesUsingPUTParams` containing the following parameters:
   *
   * - `pageSize`: pageSize
   *
   * - `page`: page
   *
   * - `areaId`: areaId
   *
   * @return OK
   */
  parkingSpacesUsingPUTResponse(params: ParkingRestApiControllerService.ParkingSpacesUsingPUTParams): __Observable<__StrictHttpResponse<ParkingSpacesResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.pageSize != null) __params = __params.set('pageSize', params.pageSize.toString());
    if (params.page != null) __params = __params.set('page', params.page.toString());
    if (params.areaId != null) __params = __params.set('areaId', params.areaId.toString());
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/parkingzr/api/v1/parkingspaces`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ParkingSpacesResponse>;
      })
    );
  }
  /**
   * @param params The `ParkingRestApiControllerService.ParkingSpacesUsingPUTParams` containing the following parameters:
   *
   * - `pageSize`: pageSize
   *
   * - `page`: page
   *
   * - `areaId`: areaId
   *
   * @return OK
   */
  parkingSpacesUsingPUT(params: ParkingRestApiControllerService.ParkingSpacesUsingPUTParams): __Observable<ParkingSpacesResponse> {
    return this.parkingSpacesUsingPUTResponse(params).pipe(
      __map(_r => _r.body as ParkingSpacesResponse)
    );
  }

  /**
   * @param params The `ParkingRestApiControllerService.ParkingSpacesUsingDELETEParams` containing the following parameters:
   *
   * - `pageSize`: pageSize
   *
   * - `page`: page
   *
   * - `areaId`: areaId
   *
   * @return OK
   */
  parkingSpacesUsingDELETEResponse(params: ParkingRestApiControllerService.ParkingSpacesUsingDELETEParams): __Observable<__StrictHttpResponse<ParkingSpacesResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.pageSize != null) __params = __params.set('pageSize', params.pageSize.toString());
    if (params.page != null) __params = __params.set('page', params.page.toString());
    if (params.areaId != null) __params = __params.set('areaId', params.areaId.toString());
    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/parkingzr/api/v1/parkingspaces`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ParkingSpacesResponse>;
      })
    );
  }
  /**
   * @param params The `ParkingRestApiControllerService.ParkingSpacesUsingDELETEParams` containing the following parameters:
   *
   * - `pageSize`: pageSize
   *
   * - `page`: page
   *
   * - `areaId`: areaId
   *
   * @return OK
   */
  parkingSpacesUsingDELETE(params: ParkingRestApiControllerService.ParkingSpacesUsingDELETEParams): __Observable<ParkingSpacesResponse> {
    return this.parkingSpacesUsingDELETEResponse(params).pipe(
      __map(_r => _r.body as ParkingSpacesResponse)
    );
  }

  /**
   * @param params The `ParkingRestApiControllerService.ParkingSpacesUsingOPTIONSParams` containing the following parameters:
   *
   * - `pageSize`: pageSize
   *
   * - `page`: page
   *
   * - `areaId`: areaId
   *
   * @return OK
   */
  parkingSpacesUsingOPTIONSResponse(params: ParkingRestApiControllerService.ParkingSpacesUsingOPTIONSParams): __Observable<__StrictHttpResponse<ParkingSpacesResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.pageSize != null) __params = __params.set('pageSize', params.pageSize.toString());
    if (params.page != null) __params = __params.set('page', params.page.toString());
    if (params.areaId != null) __params = __params.set('areaId', params.areaId.toString());
    let req = new HttpRequest<any>(
      'OPTIONS',
      this.rootUrl + `/parkingzr/api/v1/parkingspaces`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ParkingSpacesResponse>;
      })
    );
  }
  /**
   * @param params The `ParkingRestApiControllerService.ParkingSpacesUsingOPTIONSParams` containing the following parameters:
   *
   * - `pageSize`: pageSize
   *
   * - `page`: page
   *
   * - `areaId`: areaId
   *
   * @return OK
   */
  parkingSpacesUsingOPTIONS(params: ParkingRestApiControllerService.ParkingSpacesUsingOPTIONSParams): __Observable<ParkingSpacesResponse> {
    return this.parkingSpacesUsingOPTIONSResponse(params).pipe(
      __map(_r => _r.body as ParkingSpacesResponse)
    );
  }

  /**
   * @param params The `ParkingRestApiControllerService.ParkingSpacesUsingPATCHParams` containing the following parameters:
   *
   * - `pageSize`: pageSize
   *
   * - `page`: page
   *
   * - `areaId`: areaId
   *
   * @return OK
   */
  parkingSpacesUsingPATCHResponse(params: ParkingRestApiControllerService.ParkingSpacesUsingPATCHParams): __Observable<__StrictHttpResponse<ParkingSpacesResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.pageSize != null) __params = __params.set('pageSize', params.pageSize.toString());
    if (params.page != null) __params = __params.set('page', params.page.toString());
    if (params.areaId != null) __params = __params.set('areaId', params.areaId.toString());
    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/parkingzr/api/v1/parkingspaces`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ParkingSpacesResponse>;
      })
    );
  }
  /**
   * @param params The `ParkingRestApiControllerService.ParkingSpacesUsingPATCHParams` containing the following parameters:
   *
   * - `pageSize`: pageSize
   *
   * - `page`: page
   *
   * - `areaId`: areaId
   *
   * @return OK
   */
  parkingSpacesUsingPATCH(params: ParkingRestApiControllerService.ParkingSpacesUsingPATCHParams): __Observable<ParkingSpacesResponse> {
    return this.parkingSpacesUsingPATCHResponse(params).pipe(
      __map(_r => _r.body as ParkingSpacesResponse)
    );
  }

  /**
   * @param userReq userReq
   * @return OK
   */
  registerUsingPOSTResponse(userReq: UserRegisterRequest): __Observable<__StrictHttpResponse<UserResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = userReq;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/parkingzr/api/v1/register`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<UserResponse>;
      })
    );
  }
  /**
   * @param userReq userReq
   * @return OK
   */
  registerUsingPOST(userReq: UserRegisterRequest): __Observable<UserResponse> {
    return this.registerUsingPOSTResponse(userReq).pipe(
      __map(_r => _r.body as UserResponse)
    );
  }

  /**
   * @param params The `ParkingRestApiControllerService.SensorsUsingGETParams` containing the following parameters:
   *
   * - `pageSize`: pageSize
   *
   * - `page`: page
   *
   * @return OK
   */
  sensorsUsingGETResponse(params: ParkingRestApiControllerService.SensorsUsingGETParams): __Observable<__StrictHttpResponse<SensorsResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.pageSize != null) __params = __params.set('pageSize', params.pageSize.toString());
    if (params.page != null) __params = __params.set('page', params.page.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/parkingzr/api/v1/sensors`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<SensorsResponse>;
      })
    );
  }
  /**
   * @param params The `ParkingRestApiControllerService.SensorsUsingGETParams` containing the following parameters:
   *
   * - `pageSize`: pageSize
   *
   * - `page`: page
   *
   * @return OK
   */
  sensorsUsingGET(params: ParkingRestApiControllerService.SensorsUsingGETParams): __Observable<SensorsResponse> {
    return this.sensorsUsingGETResponse(params).pipe(
      __map(_r => _r.body as SensorsResponse)
    );
  }

  /**
   * @param params The `ParkingRestApiControllerService.SensorsUsingHEADParams` containing the following parameters:
   *
   * - `pageSize`: pageSize
   *
   * - `page`: page
   *
   * @return OK
   */
  sensorsUsingHEADResponse(params: ParkingRestApiControllerService.SensorsUsingHEADParams): __Observable<__StrictHttpResponse<SensorsResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.pageSize != null) __params = __params.set('pageSize', params.pageSize.toString());
    if (params.page != null) __params = __params.set('page', params.page.toString());
    let req = new HttpRequest<any>(
      'HEAD',
      this.rootUrl + `/parkingzr/api/v1/sensors`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<SensorsResponse>;
      })
    );
  }
  /**
   * @param params The `ParkingRestApiControllerService.SensorsUsingHEADParams` containing the following parameters:
   *
   * - `pageSize`: pageSize
   *
   * - `page`: page
   *
   * @return OK
   */
  sensorsUsingHEAD(params: ParkingRestApiControllerService.SensorsUsingHEADParams): __Observable<SensorsResponse> {
    return this.sensorsUsingHEADResponse(params).pipe(
      __map(_r => _r.body as SensorsResponse)
    );
  }

  /**
   * @param params The `ParkingRestApiControllerService.SensorsUsingPOSTParams` containing the following parameters:
   *
   * - `pageSize`: pageSize
   *
   * - `page`: page
   *
   * @return OK
   */
  sensorsUsingPOSTResponse(params: ParkingRestApiControllerService.SensorsUsingPOSTParams): __Observable<__StrictHttpResponse<SensorsResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.pageSize != null) __params = __params.set('pageSize', params.pageSize.toString());
    if (params.page != null) __params = __params.set('page', params.page.toString());
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/parkingzr/api/v1/sensors`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<SensorsResponse>;
      })
    );
  }
  /**
   * @param params The `ParkingRestApiControllerService.SensorsUsingPOSTParams` containing the following parameters:
   *
   * - `pageSize`: pageSize
   *
   * - `page`: page
   *
   * @return OK
   */
  sensorsUsingPOST(params: ParkingRestApiControllerService.SensorsUsingPOSTParams): __Observable<SensorsResponse> {
    return this.sensorsUsingPOSTResponse(params).pipe(
      __map(_r => _r.body as SensorsResponse)
    );
  }

  /**
   * @param params The `ParkingRestApiControllerService.SensorsUsingPUTParams` containing the following parameters:
   *
   * - `pageSize`: pageSize
   *
   * - `page`: page
   *
   * @return OK
   */
  sensorsUsingPUTResponse(params: ParkingRestApiControllerService.SensorsUsingPUTParams): __Observable<__StrictHttpResponse<SensorsResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.pageSize != null) __params = __params.set('pageSize', params.pageSize.toString());
    if (params.page != null) __params = __params.set('page', params.page.toString());
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/parkingzr/api/v1/sensors`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<SensorsResponse>;
      })
    );
  }
  /**
   * @param params The `ParkingRestApiControllerService.SensorsUsingPUTParams` containing the following parameters:
   *
   * - `pageSize`: pageSize
   *
   * - `page`: page
   *
   * @return OK
   */
  sensorsUsingPUT(params: ParkingRestApiControllerService.SensorsUsingPUTParams): __Observable<SensorsResponse> {
    return this.sensorsUsingPUTResponse(params).pipe(
      __map(_r => _r.body as SensorsResponse)
    );
  }

  /**
   * @param params The `ParkingRestApiControllerService.SensorsUsingDELETEParams` containing the following parameters:
   *
   * - `pageSize`: pageSize
   *
   * - `page`: page
   *
   * @return OK
   */
  sensorsUsingDELETEResponse(params: ParkingRestApiControllerService.SensorsUsingDELETEParams): __Observable<__StrictHttpResponse<SensorsResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.pageSize != null) __params = __params.set('pageSize', params.pageSize.toString());
    if (params.page != null) __params = __params.set('page', params.page.toString());
    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/parkingzr/api/v1/sensors`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<SensorsResponse>;
      })
    );
  }
  /**
   * @param params The `ParkingRestApiControllerService.SensorsUsingDELETEParams` containing the following parameters:
   *
   * - `pageSize`: pageSize
   *
   * - `page`: page
   *
   * @return OK
   */
  sensorsUsingDELETE(params: ParkingRestApiControllerService.SensorsUsingDELETEParams): __Observable<SensorsResponse> {
    return this.sensorsUsingDELETEResponse(params).pipe(
      __map(_r => _r.body as SensorsResponse)
    );
  }

  /**
   * @param params The `ParkingRestApiControllerService.SensorsUsingOPTIONSParams` containing the following parameters:
   *
   * - `pageSize`: pageSize
   *
   * - `page`: page
   *
   * @return OK
   */
  sensorsUsingOPTIONSResponse(params: ParkingRestApiControllerService.SensorsUsingOPTIONSParams): __Observable<__StrictHttpResponse<SensorsResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.pageSize != null) __params = __params.set('pageSize', params.pageSize.toString());
    if (params.page != null) __params = __params.set('page', params.page.toString());
    let req = new HttpRequest<any>(
      'OPTIONS',
      this.rootUrl + `/parkingzr/api/v1/sensors`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<SensorsResponse>;
      })
    );
  }
  /**
   * @param params The `ParkingRestApiControllerService.SensorsUsingOPTIONSParams` containing the following parameters:
   *
   * - `pageSize`: pageSize
   *
   * - `page`: page
   *
   * @return OK
   */
  sensorsUsingOPTIONS(params: ParkingRestApiControllerService.SensorsUsingOPTIONSParams): __Observable<SensorsResponse> {
    return this.sensorsUsingOPTIONSResponse(params).pipe(
      __map(_r => _r.body as SensorsResponse)
    );
  }

  /**
   * @param params The `ParkingRestApiControllerService.SensorsUsingPATCHParams` containing the following parameters:
   *
   * - `pageSize`: pageSize
   *
   * - `page`: page
   *
   * @return OK
   */
  sensorsUsingPATCHResponse(params: ParkingRestApiControllerService.SensorsUsingPATCHParams): __Observable<__StrictHttpResponse<SensorsResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.pageSize != null) __params = __params.set('pageSize', params.pageSize.toString());
    if (params.page != null) __params = __params.set('page', params.page.toString());
    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/parkingzr/api/v1/sensors`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<SensorsResponse>;
      })
    );
  }
  /**
   * @param params The `ParkingRestApiControllerService.SensorsUsingPATCHParams` containing the following parameters:
   *
   * - `pageSize`: pageSize
   *
   * - `page`: page
   *
   * @return OK
   */
  sensorsUsingPATCH(params: ParkingRestApiControllerService.SensorsUsingPATCHParams): __Observable<SensorsResponse> {
    return this.sensorsUsingPATCHResponse(params).pipe(
      __map(_r => _r.body as SensorsResponse)
    );
  }
}

module ParkingRestApiControllerService {

  /**
   * Parameters for changeBarrierStateUsingPUT
   */
  export interface ChangeBarrierStateUsingPUTParams {

    /**
     * id
     */
    id: string;

    /**
     * barrier
     */
    barrier: BarrierRequest;
  }

  /**
   * Parameters for updateBarrierSchedulerUsingPUT
   */
  export interface UpdateBarrierSchedulerUsingPUTParams {

    /**
     * scheduler
     */
    scheduler: ActionScheduler;

    /**
     * id
     */
    id: string;
  }

  /**
   * Parameters for getEventsUsingGET
   */
  export interface GetEventsUsingGETParams {

    /**
     * Events to.
     */
    to?: string;

    /**
     * sortBy
     */
    sortBy?: string;

    /**
     * pageSize
     */
    pageSize?: number;

    /**
     * page
     */
    page?: number;

    /**
     * Events from.
     */
    from?: string;

    /**
     * eventType
     */
    eventType?: string;

    /**
     * deviceExternalId
     */
    deviceExternalId?: string;
  }

  /**
   * Parameters for getEventsUsingHEAD
   */
  export interface GetEventsUsingHEADParams {

    /**
     * Events to.
     */
    to?: string;

    /**
     * sortBy
     */
    sortBy?: string;

    /**
     * pageSize
     */
    pageSize?: number;

    /**
     * page
     */
    page?: number;

    /**
     * Events from.
     */
    from?: string;

    /**
     * eventType
     */
    eventType?: string;

    /**
     * deviceExternalId
     */
    deviceExternalId?: string;
  }

  /**
   * Parameters for getEventsUsingPOST
   */
  export interface GetEventsUsingPOSTParams {

    /**
     * Events to.
     */
    to?: string;

    /**
     * sortBy
     */
    sortBy?: string;

    /**
     * pageSize
     */
    pageSize?: number;

    /**
     * page
     */
    page?: number;

    /**
     * Events from.
     */
    from?: string;

    /**
     * eventType
     */
    eventType?: string;

    /**
     * deviceExternalId
     */
    deviceExternalId?: string;
  }

  /**
   * Parameters for getEventsUsingPUT
   */
  export interface GetEventsUsingPUTParams {

    /**
     * Events to.
     */
    to?: string;

    /**
     * sortBy
     */
    sortBy?: string;

    /**
     * pageSize
     */
    pageSize?: number;

    /**
     * page
     */
    page?: number;

    /**
     * Events from.
     */
    from?: string;

    /**
     * eventType
     */
    eventType?: string;

    /**
     * deviceExternalId
     */
    deviceExternalId?: string;
  }

  /**
   * Parameters for getEventsUsingDELETE
   */
  export interface GetEventsUsingDELETEParams {

    /**
     * Events to.
     */
    to?: string;

    /**
     * sortBy
     */
    sortBy?: string;

    /**
     * pageSize
     */
    pageSize?: number;

    /**
     * page
     */
    page?: number;

    /**
     * Events from.
     */
    from?: string;

    /**
     * eventType
     */
    eventType?: string;

    /**
     * deviceExternalId
     */
    deviceExternalId?: string;
  }

  /**
   * Parameters for getEventsUsingOPTIONS
   */
  export interface GetEventsUsingOPTIONSParams {

    /**
     * Events to.
     */
    to?: string;

    /**
     * sortBy
     */
    sortBy?: string;

    /**
     * pageSize
     */
    pageSize?: number;

    /**
     * page
     */
    page?: number;

    /**
     * Events from.
     */
    from?: string;

    /**
     * eventType
     */
    eventType?: string;

    /**
     * deviceExternalId
     */
    deviceExternalId?: string;
  }

  /**
   * Parameters for getEventsUsingPATCH
   */
  export interface GetEventsUsingPATCHParams {

    /**
     * Events to.
     */
    to?: string;

    /**
     * sortBy
     */
    sortBy?: string;

    /**
     * pageSize
     */
    pageSize?: number;

    /**
     * page
     */
    page?: number;

    /**
     * Events from.
     */
    from?: string;

    /**
     * eventType
     */
    eventType?: string;

    /**
     * deviceExternalId
     */
    deviceExternalId?: string;
  }

  /**
   * Parameters for getGroupedEventsUsingGET
   */
  export interface GetGroupedEventsUsingGETParams {

    /**
     * Events to.
     */
    to?: string;

    /**
     * Interval in seconds.
     */
    interval?: number;

    /**
     * Events from.
     */
    from?: string;

    /**
     * eventType
     */
    eventType?: string;

    /**
     * deviceExternalId
     */
    deviceExternalId?: string;
  }

  /**
   * Parameters for getGroupedEventsUsingHEAD
   */
  export interface GetGroupedEventsUsingHEADParams {

    /**
     * Events to.
     */
    to?: string;

    /**
     * Interval in seconds.
     */
    interval?: number;

    /**
     * Events from.
     */
    from?: string;

    /**
     * eventType
     */
    eventType?: string;

    /**
     * deviceExternalId
     */
    deviceExternalId?: string;
  }

  /**
   * Parameters for getGroupedEventsUsingPOST
   */
  export interface GetGroupedEventsUsingPOSTParams {

    /**
     * Events to.
     */
    to?: string;

    /**
     * Interval in seconds.
     */
    interval?: number;

    /**
     * Events from.
     */
    from?: string;

    /**
     * eventType
     */
    eventType?: string;

    /**
     * deviceExternalId
     */
    deviceExternalId?: string;
  }

  /**
   * Parameters for getGroupedEventsUsingPUT
   */
  export interface GetGroupedEventsUsingPUTParams {

    /**
     * Events to.
     */
    to?: string;

    /**
     * Interval in seconds.
     */
    interval?: number;

    /**
     * Events from.
     */
    from?: string;

    /**
     * eventType
     */
    eventType?: string;

    /**
     * deviceExternalId
     */
    deviceExternalId?: string;
  }

  /**
   * Parameters for getGroupedEventsUsingDELETE
   */
  export interface GetGroupedEventsUsingDELETEParams {

    /**
     * Events to.
     */
    to?: string;

    /**
     * Interval in seconds.
     */
    interval?: number;

    /**
     * Events from.
     */
    from?: string;

    /**
     * eventType
     */
    eventType?: string;

    /**
     * deviceExternalId
     */
    deviceExternalId?: string;
  }

  /**
   * Parameters for getGroupedEventsUsingOPTIONS
   */
  export interface GetGroupedEventsUsingOPTIONSParams {

    /**
     * Events to.
     */
    to?: string;

    /**
     * Interval in seconds.
     */
    interval?: number;

    /**
     * Events from.
     */
    from?: string;

    /**
     * eventType
     */
    eventType?: string;

    /**
     * deviceExternalId
     */
    deviceExternalId?: string;
  }

  /**
   * Parameters for getGroupedEventsUsingPATCH
   */
  export interface GetGroupedEventsUsingPATCHParams {

    /**
     * Events to.
     */
    to?: string;

    /**
     * Interval in seconds.
     */
    interval?: number;

    /**
     * Events from.
     */
    from?: string;

    /**
     * eventType
     */
    eventType?: string;

    /**
     * deviceExternalId
     */
    deviceExternalId?: string;
  }

  /**
   * Parameters for parkingSpacesUsingGET
   */
  export interface ParkingSpacesUsingGETParams {

    /**
     * pageSize
     */
    pageSize?: number;

    /**
     * page
     */
    page?: number;

    /**
     * areaId
     */
    areaId?: number;
  }

  /**
   * Parameters for parkingSpacesUsingHEAD
   */
  export interface ParkingSpacesUsingHEADParams {

    /**
     * pageSize
     */
    pageSize?: number;

    /**
     * page
     */
    page?: number;

    /**
     * areaId
     */
    areaId?: number;
  }

  /**
   * Parameters for parkingSpacesUsingPOST
   */
  export interface ParkingSpacesUsingPOSTParams {

    /**
     * pageSize
     */
    pageSize?: number;

    /**
     * page
     */
    page?: number;

    /**
     * areaId
     */
    areaId?: number;
  }

  /**
   * Parameters for parkingSpacesUsingPUT
   */
  export interface ParkingSpacesUsingPUTParams {

    /**
     * pageSize
     */
    pageSize?: number;

    /**
     * page
     */
    page?: number;

    /**
     * areaId
     */
    areaId?: number;
  }

  /**
   * Parameters for parkingSpacesUsingDELETE
   */
  export interface ParkingSpacesUsingDELETEParams {

    /**
     * pageSize
     */
    pageSize?: number;

    /**
     * page
     */
    page?: number;

    /**
     * areaId
     */
    areaId?: number;
  }

  /**
   * Parameters for parkingSpacesUsingOPTIONS
   */
  export interface ParkingSpacesUsingOPTIONSParams {

    /**
     * pageSize
     */
    pageSize?: number;

    /**
     * page
     */
    page?: number;

    /**
     * areaId
     */
    areaId?: number;
  }

  /**
   * Parameters for parkingSpacesUsingPATCH
   */
  export interface ParkingSpacesUsingPATCHParams {

    /**
     * pageSize
     */
    pageSize?: number;

    /**
     * page
     */
    page?: number;

    /**
     * areaId
     */
    areaId?: number;
  }

  /**
   * Parameters for sensorsUsingGET
   */
  export interface SensorsUsingGETParams {

    /**
     * pageSize
     */
    pageSize?: number;

    /**
     * page
     */
    page?: number;
  }

  /**
   * Parameters for sensorsUsingHEAD
   */
  export interface SensorsUsingHEADParams {

    /**
     * pageSize
     */
    pageSize?: number;

    /**
     * page
     */
    page?: number;
  }

  /**
   * Parameters for sensorsUsingPOST
   */
  export interface SensorsUsingPOSTParams {

    /**
     * pageSize
     */
    pageSize?: number;

    /**
     * page
     */
    page?: number;
  }

  /**
   * Parameters for sensorsUsingPUT
   */
  export interface SensorsUsingPUTParams {

    /**
     * pageSize
     */
    pageSize?: number;

    /**
     * page
     */
    page?: number;
  }

  /**
   * Parameters for sensorsUsingDELETE
   */
  export interface SensorsUsingDELETEParams {

    /**
     * pageSize
     */
    pageSize?: number;

    /**
     * page
     */
    page?: number;
  }

  /**
   * Parameters for sensorsUsingOPTIONS
   */
  export interface SensorsUsingOPTIONSParams {

    /**
     * pageSize
     */
    pageSize?: number;

    /**
     * page
     */
    page?: number;
  }

  /**
   * Parameters for sensorsUsingPATCH
   */
  export interface SensorsUsingPATCHParams {

    /**
     * pageSize
     */
    pageSize?: number;

    /**
     * page
     */
    page?: number;
  }
}

export { ParkingRestApiControllerService }
