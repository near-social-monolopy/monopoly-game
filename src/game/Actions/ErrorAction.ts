import {Action} from "./Action";

export class ErrorAction extends Action {
  constructor(dice: Array<number>, playerId: string) {
    super(dice, playerId);
  }
  doAction(): void {
  }
}