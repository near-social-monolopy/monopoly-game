import {Tile, TileType} from "./Tile";
import {Player} from "../Player";

export class UtilityTile extends Tile {
  private price: number;

  constructor(name: string, players: Array<Player>, owner: Player | null, price: number) {
    super(name, owner, players, TileType.Utility);

    this.price = price;
  }
}
