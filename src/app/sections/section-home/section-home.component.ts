// CORE
import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { interval } from "rxjs";

// MATERIAL
import { MatTableDataSource } from "@angular/material/table";

// NOTIFICATION
import { NotifierService } from "angular-notifier";

// AUTHENTIFICATION
import { AuthenticationService } from "../../services/authentication.service";

// GET DATA
import { DataService } from "../../services/data.service";

// MODELS
import { Connectivity } from "../../api/models/connectivity";
import { ParkingSpacesResponse } from "../../api/models/parking-spaces-response";
import { ParkingSpace } from "../../api/models/parking-space";
import { GroupedEventsResponse } from "../../api/models/grouped-events-response";
import { ParkingArea } from "../../api/models/parking-area";
import { Barrier } from "../../api/models/barrier";
import { BarriersResponse } from "../../api/models/barriers-response";
import { ParkingSummaryResponse } from "../../api/models/parking-summary-response";
import { AlarmsResponse } from "../../api/models/alarms-response";

@Component({
  selector: "app-section-home",
  templateUrl: "./section-home.component.html",
  styleUrls: ["./section-home.component.scss"]
})
export class SectionHomeComponent implements OnInit {
  isActive = false;
  rampState = "CLOSED";
  isActiveEntry = false;
  isActiveExit = false;
  rampStateEntry = "closed";
  rampStateExit = "closed";

  layoutOrientation = "horizontal";
  currentUser: any;
  editBarrier: Barrier;
  private barrier: Barrier;
  private _barrier: Barrier;
  private _barriers = [];
  private _connectivity = [];
  private _parkingAreas = [];
  private _groupedEvents = [];
  private _eventsChart = [];
  private _parkingSpaces = [];
  private _parkingSpacesAreas = [];
  private _summary = [];
  private _alarms = [];
  dataSource_parkingSummary: MatTableDataSource<ParkingSummaryResponse>;
  dataSource_parkingArea: MatTableDataSource<ParkingArea>;
  dataSource_connectivity: MatTableDataSource<Connectivity>;
  dataSource_barrierResponse: MatTableDataSource<BarriersResponse>;

  // CHANGE BARRIER STATE

  updateEntryBarrierStatusUsingPOST(bar) {
    bar.barrierState === "closed"
      ? (bar.barrierState = "open")
      : (bar.barrierState = "closed");
    this.dataService
      .updateEntryBarrierStatusUsingPOST(bar)
      .subscribe(barrier => (this.barrier = barrier));
  }

  updateExitBarrierStatusUsingPOST(bar) {
    bar.barrierState === "closed"
      ? (bar.barrierState = "open")
      : (bar.barrierState = "closed");
    this.dataService
      .updateExitBarrierStatusUsingPOST(bar)
      .subscribe(barrier => (this.barrier = barrier));
  }

  // TABLES
  events: string[] = [];
  opened: boolean;
  selected = "option2";

  // CHART
  chart_data: any[];
  colorScheme = {
    domain: ["#7a8236", "#adb752", "#e24804"]
  };

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

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private notifier: NotifierService,
    private httpClient: HttpClient,
    private authenticationService: AuthenticationService,
    private dataService: DataService
  ) {
    this.authenticationService.currentUser.subscribe(
      x => (this.currentUser = x)
    );
  }

  // type: error, info, success, warning
  public showNotification(type: string, message: string): void {
    if (type === "1") this.notifier.notify("error", message);
    if (type === "2") this.notifier.notify("info", message);
    if (type === "3") this.notifier.notify("success", message);
    if (type === "4") this.notifier.notify("warning", message);
  }

  //SUMMARY - service
  private getSummaryRefreshe() {
    this.dataService
      .getParkingSummaryUsingGET()
      .subscribe((res: ParkingSummaryResponse[]) => {
        this._summary = res;
      });
  }

  // ALARMS - service
  private getAlarmResponseRefresh() {
    this.dataService.getAlarmsUsingGET().subscribe((res: AlarmsResponse[]) => {
      this._alarms = res;
      let lastWarnningEvent = Date.parse(this._alarms['data'].alarms[0].eventTime);
      let currentUnixTime = Date.now();

      // IF NOTIFICATION IN LAST 15 MINUTES
      const secondsCounter = interval(60000);
      secondsCounter.subscribe(n => {
        if((currentUnixTime - lastWarnningEvent) < 600000) {
          this.showNotification(this._alarms['data'].alarms[0].type,this._alarms['data'].alarms[0].title);
        }
        }
      );
    });
  }

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
    this.getParkingSpacesRefresh();
    this.getSummaryRefreshe();
    this.getBarriersRefresh();

    // ALARM - no tap
    this.dataService.getAlarmsUsingGET().subscribe((res: AlarmsResponse[]) => {
      this._alarms = res;
      let lastWarnningEvent = Date.parse(this._alarms['data'].alarms[0].eventTime);
      let currentUnixTime = Date.now();
      if((currentUnixTime - lastWarnningEvent) < 180000) {
        this.showNotification(this._alarms['data'].alarms[0].type,this._alarms['data'].alarms[0].title)
      }

      // IF NOTIFICATION IN LAST 15 MINUTES
      const secondsCounter = interval(60000);
      secondsCounter.subscribe(n => {
        if((currentUnixTime - lastWarnningEvent) < 180000) {
          this.showNotification(this._alarms['data'].alarms[0].type,this._alarms['data'].alarms[0].title)
        }
        }
      );
    });

    setTimeout(() => {
      const secondsCounter = interval(5000);

      secondsCounter.subscribe(n => {
        this.getParkingSpacesRefresh();
        this.getSummaryRefreshe();
        this.getBarriersRefresh();
      });
    }, 5000);

    // GROUPED EVENTS / no tap
    this.dataService
      .getGroupedEventsUsingGET()
      .subscribe((res: GroupedEventsResponse[]) => {
        this._groupedEvents = res["data"].groupedEvents;
        this._groupedEvents.forEach(element => {
          this._eventsChart.push({
            name: element.to.substring(11).slice(0,-3),
            series: [
              { name: "Occupied", value: element.value / element.count },
              { name: "Free", value: 41 - element.value / element.count }
            ]
          });
        });
      });

    // Mobile detector - frontend UI only
    this.isMobile = this.getIsMobile();
    window.onresize = () => {
      this.isMobile = this.getIsMobile();
    };
  }
}


