import {CheckIn} from "../types";

export type CheckInAction =
|{type: "ADD_CHECKIN";payload:Omit<CheckIn, "id" | "timestamp">}
|{type: "REMOVE_CHECKIN";payload:{id: string}}
|{type: "CLEAR_DAY";payload:{date: string}};

export type CheckInState = CheckIn[];

export function checkInReducer(
  state: CheckInState,
  action: CheckInAction): CheckInState {
    switch (action.type) {
      case "ADD_CHECKIN":
      //Vad ska hända här? Tänk: du vill lägga till en ny check-in i listan.
      //Hur skapar du id och timestamp?
      return [
        ...state,
        {
          ...action.payload,
          id:crypto.randomUUID(),
          timestamp: new Date(),
        },
      ];
      case "REMOVE_CHECKIN":
      //Vad ska hända här? Tänk: du vill filtrera bort rätt checkin.
      return state.filter((CheckIn) =>CheckIn.id !== action.payload.id);
      case "CLEAR_DAY":
      //Vad ska hända här? Tänk: du vill ta bort alla som matchade ett datum.
      default:
      return state;
    }
  }
