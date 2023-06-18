import { GameSavingLoader } from "./GameSavingLoader.js";

(async () => {
  try {
    console.log(await GameSavingLoader.load());
  } catch (error) {
    console.log("error");
  }
})();
