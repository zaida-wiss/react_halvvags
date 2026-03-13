import {CheckIn} from "../types";

export type CheckInAction =
|{type: "ADD_CHECKIN";payload:Omit<CheckIn, "id" | "timestamp">}
|{type: "REMOVE_CHECKIN";payload:}
|{type: "CLEAR_DAY";payload:}

export type CheckInState = CheckIn[];

export function checkInReducer(
  state: CheckInState,
  action: CheckInAction): CheckInState {
    switch (action.type) {
      case "ADD_CHECKIN":
      //Vad ska hända här? Tänk: du vill lägga till en ny check-in i listan.
      //Hur skapar du id och timestamp?
      case "REMOVE_CHECKIN":
      //Vad ska hända här? Tänk: du vill filtrera bort rätt checkin.
    }
  }
