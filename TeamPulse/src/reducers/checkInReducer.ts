import {CheckIn} from "../types";

export type CheckInAction =
|{type: "ADD_CHECKIN";payload:}
|{type: "REMOVE_CHECKIN";payload:}
|{type: "CLEAR_DAY";payload:}

export type checkInState = CheckIn[];

export function checkInReducer(
  state: CheckInState,
  action: CheckInAction): CheckInState {
    switch (action.type) {
      case "ADD_CHECKIN";
      //Vad ska hända här? Tänk: du vill lägga till en ny check-in i listan.
      //Hur skapar du id och timestamp?
    }
  }
