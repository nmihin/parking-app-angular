/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { AlarmsResponse } from '../models/alarms-response';
import { BarriersResponse } from '../models/barriers-response';
import { Barrier } from '../models/barrier';
import { BarrierRequest } from '../models/barrier-request';
import { BarrierSchedulerResponse } from '../models/barrier-scheduler-response';
import { ActionScheduler } from '../models/action-scheduler';
import { Connectivity } from '../models/connectivity';
import { ParkingEventsResponse } from '../models/parking-events-response';
import { GroupedEventsResponse } from '../models/grouped-events-response';
import { ParkingSummaryResponse } from '../models/parking-summary-response';
import { ParkingAreasResponse } from '../models/parking-areas-response';
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
  static readonly getAlarmsUsingGETPath = '/parkingzr/api/v1/alarms';
  static readonly getBarriersUsingGETPath = '/parkingzr/api/v1/barriers';
  static readonly updateBarrierStateUsingPUTPath = '/parkingzr/api/v1/barriers/{id}';
  static readonly getBarrierSchedulerUsingGETPath = '/parkingzr/api/v1/barriers/{id}/scheduler';
  static readonly updateBarrierSchedulerUsingPUTPath = '/parkingzr/api/v1/barriers/{id}/scheduler';
  static readonly connectivityUsingGETPath = '/parkingzr/api/v1/connectivity';
  static readonly getEventsUsingGETPath = '/parkingzr/api/v1/events';
  static readonly getGroupedEventsUsingGETPath = '/parkingzr/api/v1/groupedEvents';
  static readonly getParkingSummaryUsingGETPath = '/parkingzr/api/v1/parkingSummary';
  static readonly getParkingAreasUsingGETPath = '/parkingzr/api/v1/parkingareas';
  static readonly getParkingSpacesUsingGETPath = '/parkingzr/api/v1/parkingspaces';
  static readonly registerUsingPOSTPath = '/parkingzr/api/v1/register';
  static readonly getSensorsUsingGETPath = '/parkingzr/api/v1/sensors';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param params The `ParkingRestApiControllerService.GetAlarmsUsingGETParams` containing the following parameters:
   *
   * - `to`: Alarms to.
   *
   * - `sortBy`: sortBy
   *
   * - `pageSize`: pageSize
   *
   * - `page`: page
   *
   * - `from`: Alarms from.
   *
   * - `deviceExternalId`: deviceExternalId
   *
   * - `alarmType`: alarmType
   *
   * @return OK
   */
  getAlarmsUsingGETResponse(params: ParkingRestApiControllerService.GetAlarmsUsingGETParams): __Observable<__StrictHttpResponse<AlarmsResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.to != null) __params = __params.set('to', params.to.toString());
    if (params.sortBy != null) __params = __params.set('sortBy', params.sortBy.toString());
    if (params.pageSize != null) __params = __params.set('pageSize', params.pageSize.toString());
    if (params.page != null) __params = __params.set('page', params.page.toString());
    if (params.from != null) __params = __params.set('from', params.from.toString());
    if (params.deviceExternalId != null) __params = __params.set('deviceExternalId', params.deviceExternalId.toString());
    if (params.alarmType != null) __params = __params.set('alarmType', params.alarmType.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/parkingzr/api/v1/alarms`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<AlarmsResponse>;
      })
    );
  }
  /**
   * @param params The `ParkingRestApiControllerService.GetAlarmsUsingGETParams` containing the following parameters:
   *
   * - `to`: Alarms to.
   *
   * - `sortBy`: sortBy
   *
   * - `pageSize`: pageSize
   *
   * - `page`: page
   *
   * - `from`: Alarms from.
   *
   * - `deviceExternalId`: deviceExternalId
   *
   * - `alarmType`: alarmType
   *
   * @return OK
   */
  getAlarmsUsingGET(params: ParkingRestApiControllerService.GetAlarmsUsingGETParams): __Observable<AlarmsResponse> {
    return this.getAlarmsUsingGETResponse(params).pipe(
      __map(_r => _r.body as AlarmsResponse)
    );
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
   * @param params The `ParkingRestApiControllerService.UpdateBarrierStateUsingPUTParams` containing the following parameters:
   *
   * - `id`: id
   *
   * - `barrier`: barrier
   *
   * @return OK
   */
  updateBarrierStateUsingPUTResponse(params: ParkingRestApiControllerService.UpdateBarrierStateUsingPUTParams): __Observable<__StrictHttpResponse<Barrier>> {
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
   * @param params The `ParkingRestApiControllerService.UpdateBarrierStateUsingPUTParams` containing the following parameters:
   *
   * - `id`: id
   *
   * - `barrier`: barrier
   *
   * @return OK
   */
  updateBarrierStateUsingPUT(params: ParkingRestApiControllerService.UpdateBarrierStateUsingPUTParams): __Observable<Barrier> {
    return this.updateBarrierStateUsingPUTResponse(params).pipe(
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
   * @return OK
   */
  getParkingSummaryUsingGETResponse(): __Observable<__StrictHttpResponse<ParkingSummaryResponse>> {
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
        return _r as __StrictHttpResponse<ParkingSummaryResponse>;
      })
    );
  }
  /**
   * @return OK
   */
  getParkingSummaryUsingGET(): __Observable<ParkingSummaryResponse> {
    return this.getParkingSummaryUsingGETResponse().pipe(
      __map(_r => _r.body as ParkingSummaryResponse)
    );
  }

  /**
   * @return OK
   */
  getParkingAreasUsingGETResponse(): __Observable<__StrictHttpResponse<ParkingAreasResponse>> {
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
        return _r as __StrictHttpResponse<ParkingAreasResponse>;
      })
    );
  }
  /**
   * @return OK
   */
  getParkingAreasUsingGET(): __Observable<ParkingAreasResponse> {
    return this.getParkingAreasUsingGETResponse().pipe(
      __map(_r => _r.body as ParkingAreasResponse)
    );
  }

  /**
   * @param params The `ParkingRestApiControllerService.GetParkingSpacesUsingGETParams` containing the following parameters:
   *
   * - `pageSize`: pageSize
   *
   * - `page`: page
   *
   * - `areaId`: areaId
   *
   * @return OK
   */
  getParkingSpacesUsingGETResponse(params: ParkingRestApiControllerService.GetParkingSpacesUsingGETParams): __Observable<__StrictHttpResponse<ParkingSpacesResponse>> {
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
   * @param params The `ParkingRestApiControllerService.GetParkingSpacesUsingGETParams` containing the following parameters:
   *
   * - `pageSize`: pageSize
   *
   * - `page`: page
   *
   * - `areaId`: areaId
   *
   * @return OK
   */
  getParkingSpacesUsingGET(params: ParkingRestApiControllerService.GetParkingSpacesUsingGETParams): __Observable<ParkingSpacesResponse> {
    return this.getParkingSpacesUsingGETResponse(params).pipe(
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
   * @param params The `ParkingRestApiControllerService.GetSensorsUsingGETParams` containing the following parameters:
   *
   * - `pageSize`: pageSize
   *
   * - `page`: page
   *
   * @return OK
   */
  getSensorsUsingGETResponse(params: ParkingRestApiControllerService.GetSensorsUsingGETParams): __Observable<__StrictHttpResponse<SensorsResponse>> {
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
   * @param params The `ParkingRestApiControllerService.GetSensorsUsingGETParams` containing the following parameters:
   *
   * - `pageSize`: pageSize
   *
   * - `page`: page
   *
   * @return OK
   */
  getSensorsUsingGET(params: ParkingRestApiControllerService.GetSensorsUsingGETParams): __Observable<SensorsResponse> {
    return this.getSensorsUsingGETResponse(params).pipe(
      __map(_r => _r.body as SensorsResponse)
    );
  }
}

module ParkingRestApiControllerService {

  /**
   * Parameters for getAlarmsUsingGET
   */
  export interface GetAlarmsUsingGETParams {

    /**
     * Alarms to.
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
     * Alarms from.
     */
    from?: string;

    /**
     * deviceExternalId
     */
    deviceExternalId?: string;

    /**
     * alarmType
     */
    alarmType?: string;
  }

  /**
   * Parameters for updateBarrierStateUsingPUT
   */
  export interface UpdateBarrierStateUsingPUTParams {

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
   * Parameters for getParkingSpacesUsingGET
   */
  export interface GetParkingSpacesUsingGETParams {

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
   * Parameters for getSensorsUsingGET
   */
  export interface GetSensorsUsingGETParams {

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
