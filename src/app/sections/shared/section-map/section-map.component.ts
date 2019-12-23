// CORE
import { Component, OnInit } from "@angular/core";

// MATERIAL
import { MatTableDataSource } from "@angular/material/table";

// NOTIFICATION
import { NotifierService } from "angular-notifier";

// AUTHENTIFICATION
import { AuthenticationService } from "../../../services/authentication.service";

// GET DATA
import { DataService } from "../../../services/data.service";

// MODELS
import { Connectivity } from "../../../api/models/connectivity";
import { ParkingSpacesResponse } from "../../../api/models/parking-spaces-response";
import { ParkingArea } from "../../../api/models/parking-area";
import { BarriersResponse } from "../../../api/models/barriers-response";
import { ParkingSummaryResponse } from "../../../api/models/parking-summary-response";

@Component({
  selector: 'app-section-map',
  templateUrl: './section-map.component.html',
  styleUrls: ['./section-map.component.scss']
})
export class SectionMapComponent implements OnInit {
  private _parkingAreas = [];
  private _groupedEvents = [];
  private _eventsChart = [];
  private _parkingSpaces = [];
  private _parkingSpacesAreas = [];
  private _alarms = [];
  private _barriers = [];
  layoutOrientation = "horizontal";
  dataSource_parkingSummary: MatTableDataSource<ParkingSummaryResponse>;
  dataSource_parkingArea: MatTableDataSource<ParkingArea>;
  dataSource_connectivity: MatTableDataSource<Connectivity>;
  dataSource_barrierResponse: MatTableDataSource<BarriersResponse>;

  constructor(
    private dataService: DataService
  ) { }

  //BARRIERS - service
  private getBarriersRefresh() {
    this.dataService.getBarriersUsingGET().subscribe((res: BarriersResponse[]) => {
      this._barriers = res["data"].barriers;
    });
  }

  //PARKING SPACES - service
  private getParkingSpacesRefresh() {
    this.dataService
      .getParkingSpacesUsingGET()
      .subscribe((res: ParkingSpacesResponse[]) => {
        this._parkingSpaces = res["data"].parkingSpaces;
        this._parkingSpaces.forEach(element => {
          this._parkingAreas.push({
            name: element.parkingAreas[0].name,
            externalId: element.parkingAreas[0].externalId
          });
        });
        const uniqueParkingSpaces = this._parkingAreas.filter(
          (thing, i, arr) => {
            return arr.indexOf(arr.find(t => t.name === thing.name)) === i;
          }
        );
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
      });
  }

  // MOBILE CHECK
  isMobile = false;
  getIsMobile(): boolean {
    const w = document.documentElement.clientWidth;
    const breakpoint = 992;
    console.log("Screen width:" + w);
    if (w < breakpoint) {
      this.layoutOrientation = "vertical";
      return true;
    } else {
      this.layoutOrientation = "horizontal";
      return false;
    }
  }

  ngOnInit() {
    // PRELOAD SERVICES
    this.getParkingSpacesRefresh();
    this.getBarriersRefresh();

    // Mobile detector - frontend UI only
    this.isMobile = this.getIsMobile();
    window.onresize = () => {
      this.isMobile = this.getIsMobile();
    };
  }

}
