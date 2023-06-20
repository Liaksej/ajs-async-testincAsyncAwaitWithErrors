import json from "./parser.js";
import read from "./reader.js";
import { GameSaving } from "./GameSaving.js";

export class GameSavingLoader {
  static async load() {
    try {
      const readed = await read();
      return new GameSaving(JSON.parse(await json(readed)));
    } catch (error) {
      return error;
    }
  }
}
