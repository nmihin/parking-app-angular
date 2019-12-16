// CORE
import { Component, OnInit, ViewChild } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
import { map, startWith } from 'rxjs/operators';
import { combineLatest, Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http, Response } from '@angular/http';

// DATA
import { parking_area } from '../../data/parking.area.data';
import { parking_barrier } from '../../data/parking.barrier.data';
import { sensor_data } from '../../data/parking.sensors.data';

// INTERFACES
import { parkingArea } from '../../interfaces/parking-area.interface';
import { parkingBarrier } from '../../interfaces/parking-barrier.interface';
import { parkingSensors } from '../../interfaces/parking-sensors.interface';

// MATERIAL
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatChipsModule } from '@angular/material/chips';

// CHART
import { chart_data } from '../../data/chart.data';

// NOTIFICATION
import { NotifierService } from 'angular-notifier';
import { interval } from 'rxjs/observable/interval';

// AUTHENTIFICATION
import { AuthenticationService } from '../../services/authentication.service';

// GET DATA
import { DataService } from '../../services/data.service';

// MODELS
import { Connectivity } from '../../api/models/connectivity';
import { ParkingSpacesResponse } from '../../api/models/parking-spaces-response';
import { ParkingSpace } from '../../api/models/parking-space';
import { GroupedEventsResponse } from '../../api/models/grouped-events-response';
import { ParkingArea } from '../../api/models/parking-area';
import { BarriersResponse } from '../../api/models/barriers-response';
import { ParkingSummaryResponse } from '../../api/models/parking-summary-response';
import { AlarmsResponse } from '../../api/models/alarms-response';

@Component({
  selector: 'app-section-home',
  templateUrl: './section-home.component.html',
  styleUrls: ['./section-home.component.scss']
})
export class SectionHomeComponent implements OnInit {
  isActive = false;
  rampState = "CLOSED";
  layoutOrientation = "horizontal";
  currentUser: any;
  private _barriers = [];
  private _connectivity = [];
  private _parkingAreas = [];
  private _groupedEvents = [];
  private _parkingSpaces = [];
  private _parkingSpacesAreas = [];
  private _summary = [];
  private _alarms = [];
  dataSource_parkingSummary: MatTableDataSource<ParkingSummaryResponse>;
  dataSource_parkingArea: MatTableDataSource<ParkingArea>;
  dataSource_connectivity: MatTableDataSource<Connectivity>;
  dataSource_barrierResponse: MatTableDataSource<BarriersResponse>;

  onClick() {
    this.isActive = !this.isActive;
    this.isActive ? this.rampState = "OPEN" : this.rampState = "CLOSED";
  }

  // TABLES
  events: string[] = [];
  opened: boolean;
  selected = 'option2';

  // CHART
  chart_data: any[];
  colorScheme = {
    domain: ['#7a8236', '#adb752', '#e24804']
  };

  // MOBILE CHECK
  isMobile = false;
  getIsMobile(): boolean {
    const w = document.documentElement.clientWidth;
    const breakpoint = 992;
    console.log(w);
    if (w < breakpoint) {
      this.layoutOrientation = "vertical";
      return true;
    } else {
      this.layoutOrientation = "horizontal";
      return false;
    }
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private notifier: NotifierService,
    private httpClient: HttpClient,
    private authenticationService: AuthenticationService,
    private dataService: DataService
  ) {
    Object.assign(this, { chart_data });
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    this.dataService.getGroupedEvents().subscribe((res: GroupedEventsResponse[]) => {
      //console.log(res);
      this._groupedEvents = res;
    });
  }

  // type: error, info, success, warning
  public showNotification(type: string, message: string): void {
    if (type === '1')
      this.notifier.notify("error", message);
    if (type === '2')
      this.notifier.notify("info", message);
    if (type === '3')
      this.notifier.notify("success", message);
    if (type === '4')
      this.notifier.notify("warning", message);
  }

  dataSourceSensors = new MatTableDataSource<parkingSensors>(PARKING_SENSORS);

  // AREAS TABLE PAGINATION
  parkingAreaDisplayedColumns: string[] = ['name', 'freeSpacesCount', 'occupiedSpacesCount', 'totalParkingSpaces'];

  // BARRIERS TABLE PAGINATION
  barriersDisplayedColumns: string[] = ['name', 'barrierState', 'barrierType', 'lastStateChangeDate'];


  ngOnInit() {

    // AREAS TABLE
    this.dataService.getParkingAreas().subscribe((res: ParkingSpace[]) => {
      this._parkingAreas = res;
      this.dataSource_parkingArea = new MatTableDataSource<ParkingArea>(res);
      console.log(this.dataSource_parkingArea)
    });

    // CONNECTIVITY
    this.dataService.getConnectivity().subscribe((res: Connectivity[]) => {
      this._connectivity = res;
      this.dataSource_connectivity = new MatTableDataSource<Connectivity>(res);
    });

    //BARRIERS
    this.dataService.getBarriers().subscribe((res: BarriersResponse[]) => {
      //this._barriers = res.data.barriers;
      this._barriers = res['data'].barriers;

      console.log("barriers")
      console.log(this._barriers)
    });

    //SUMMARY
    this.dataService.getParkingSummaryResponse().subscribe((res: ParkingSummaryResponse[]) => {
      this._summary = res;
      console.log(this._summary)
      //WARNNING NOTIFICATION PARKING
      if(this._summary.data.freeSpacesCount < 8){
        this.notifier.notify("warning", "Warnning: there is less than 20% of parking places left!");
      }
    });

    // AREAS
    this.dataService.getParkingSpaces().subscribe((res: ParkingSpacesResponse[]) => {
      console.log("res")
      console.log(res[0])
      this._parkingSpaces = res['data'].parkingSpaces;
      this._parkingSpaces.forEach(element => {
        this._parkingAreas.push({
          name: element.parkingAreas[0].name,
          externalId: element.parkingAreas[0].externalId
        });
      });
      const uniqueParkingSpaces = this._parkingAreas.filter((thing, i, arr) => {
        return arr.indexOf(arr.find(t => t.name === thing.name)) === i;
      });
      this._parkingAreas = uniqueParkingSpaces;
      // PARKING SPACES
      this._parkingSpaces.forEach(element => {
        this._parkingSpacesAreas.push({
          externalId: element.parkingAreas[0].externalId,
          name: element.name,
          occupancy: element.occupancy,
          sensors: element.sensors
        });
      });
      console.log("parking spaces")
      console.log(this._parkingSpaces)
    });

    // Mobile detector
    this.isMobile = this.getIsMobile();
    window.onresize = () => {
      this.isMobile = this.getIsMobile();
    };

  }

}

const PARKING_SENSORS: parkingSensors[] = sensor_data.data.parkingSpaces;

