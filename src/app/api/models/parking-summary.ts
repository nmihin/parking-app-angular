
import { ParkingArea } from './parking-area';
import { Barrier } from './barrier';
export interface ParkingSummary {
    totalSpacesCount?: number;
    occupiedSpacesCount?: number;
    freeSpacesCount?: number;
    defectiveSpacesCount?: number;
    parkingAreas?: Array<ParkingArea>;
    barriers?: Array<Barrier>;
}


