// CORE
import { Component, OnInit, ViewChild, Pipe, PipeTransform } from '@angular/core';

// DATA
import { sensor_data } from '../../data/parking.sensors.data';

// INTERFACES
//import { parkingSensors } from '../../interfaces/parking-sensors.interface';

// MATERIAL
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

// NOTIFICATION
import { NotifierService } from 'angular-notifier';

// AUTHENTIFICATION
import { AuthenticationService } from '../../services/authentication.service';

// GET DATA
import { DataService } from '../../services/data.service';

// MODELS
import { SensorsResponse } from '../../api/models/sensors-response';
import { ParkingSensor } from '../../api/models/parking-sensor';
import { ParkingSpacesResponse } from '../../api/models/parking-spaces-response';
import { ParkingSummary } from '../../api/models/parking-summary';
import { BarriersResponse } from '../../api/models/barriers-response';

@Component({
  selector: 'app-section-areas',
  templateUrl: './section-areas.component.html',
  styleUrls: ['./section-areas.component.scss']
})
export class SectionAreasComponent implements OnInit {

  events: string[] = [];
  opened: boolean;
  selected = 'option2';
  layoutOrientation = 'horizontal';
  currentUser: any;
  private _sensors = [];
  private _parkingSpaces = [];
  private _parkingSpacesAreas = [];
  private _parkingAreas = [];
  private _summary = [];
  private _barriers = [];

  constructor(
    private notifier: NotifierService,
    private authenticationService: AuthenticationService,
    private dataService: DataService
  ) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }

  // MOBILE CHECK
  isMobile = false;
  getIsMobile(): boolean {
    const w = document.documentElement.clientWidth;
    const breakpoint = 992;
    console.log(w);
    if (w < breakpoint) {
      this.layoutOrientation = 'vertical';
      return true;
    } else {
      this.layoutOrientation = 'horizontal';
      return false;
    }
  }

  public showNotification(type: string, message: string): void {
    this.notifier.notify(type, message);
  }

  displayedColumns: string[] = ['name', 'occupancy'];


  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  ngOnInit() {
    //BARRIERS
    this.dataService.getBarriers().subscribe((res: BarriersResponse[]) => {
      this._barriers = res.data.barriers;

      console.log("barriers")
      console.log(res)
    });

    this.dataService.getParkingSpaces().subscribe((res: ParkingSpacesResponse[]) => {
      //PARKING SPACES
      this._parkingSpaces = res.data.parkingSpaces;
      console.log(res)
      // AREAS
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

      //SUMMARY
      this.dataService.getParkingSummary().subscribe((res: ParkingSummary[]) => {
        this._summary = res;
        console.log("this_summary")
        console.log(this._summary)
      });

    });
    this.isMobile = this.getIsMobile();
    window.onresize = () => {
      this.isMobile = this.getIsMobile();
    };
  }
}

//const PARKING_SENSORS: parkingSensors[] = sensor_data.data.parkingSpaces;
