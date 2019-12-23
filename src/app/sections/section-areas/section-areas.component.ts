// CORE
import {
  Component,
  OnInit,
  ViewChild
} from "@angular/core";
import { interval } from "rxjs";

// MATERIAL
import { MatPaginator } from "@angular/material/paginator";

// NOTIFICATION
import { NotifierService } from "angular-notifier";

// AUTHENTIFICATION
import { AuthenticationService } from "../../services/authentication.service";

// GET DATA
import { DataService } from "../../services/data.service";

// MODELS
import { ParkingSpacesResponse } from "../../api/models/parking-spaces-response";
import { BarriersResponse } from "../../api/models/barriers-response";
import { ParkingSummaryResponse } from "../../api/models/parking-summary-response";

@Component({
  selector: "app-section-areas",
  templateUrl: "./section-areas.component.html",
  styleUrls: ["./section-areas.component.scss"]
})
export class SectionAreasComponent implements OnInit {
  events: string[] = [];
  opened: boolean;
  selected = "option2";
  layoutOrientation = "horizontal";
  currentUser: any;
  private _sensors = [];
  private _parkingSpaces = [];
  private _barriers = [];
  private _connectivity = [];
  private _parkingAreas = [];
  private _groupedEvents = [];
  private _eventsChart = [];
  private _parkingSpacesAreas = [];
  private _summary = [];
  private _alarms = [];

  constructor(
    private notifier: NotifierService,
    private authenticationService: AuthenticationService,
    private dataService: DataService
  ) {
    this.authenticationService.currentUser.subscribe(
      x => (this.currentUser = x)
    );
  }

  // MOBILE CHECK
  isMobile = false;
  getIsMobile(): boolean {
    const w = document.documentElement.clientWidth;
    const breakpoint = 992;
    console.log("screen width:" + w);
    if (w < breakpoint) {
      this.layoutOrientation = "vertical";
      return true;
    } else {
      this.layoutOrientation = "horizontal";
      return false;
    }
  }

  public showNotification(type: string, message: string): void {
    this.notifier.notify(type, message);
  }

  displayedColumns: string[] = ["name", "occupancy", "sensors"];

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

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

  ngOnInit() {
    // PRELOAD SERVICES
    this.getBarriersRefresh();
    this.getParkingSpacesRefresh();

    //SUMMARY - no tap
    this.dataService
      .getParkingSummaryUsingGET()
      .subscribe((res: ParkingSummaryResponse[]) => {
        this._summary = res;
      });

    setTimeout(() => {

      const secondsCounter = interval(5000);

      secondsCounter.subscribe(n => {
        this.getBarriersRefresh();
      });
    }, 5000);

    // Mobile detector - frontend UI only
    this.isMobile = this.getIsMobile();
    window.onresize = () => {
      this.isMobile = this.getIsMobile();
    };
  }
}
