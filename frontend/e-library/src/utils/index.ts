import { BookInterface } from "../types";

export const shuffleArray = (array: BookInterface[]) => {
      for (let i = array?.length - 1; i > 0; i--) {

            // Generate random number 
            const j = Math.floor(Math.random() * (i + 1));

            const temp = array[i];
            array[i] = array[j];
            array[j] = temp;
      }

      return array;
}