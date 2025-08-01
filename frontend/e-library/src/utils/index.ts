export const shuffleArray = (array) => {
      for (let i = array?.length - 1; i > 0; i--) {

            // Generate random number 
            const j = Math.floor(Math.random() * (i + 1));

            const temp = array[i];
            array[i] = array[j];
            array[j] = temp;
      }

      return array;
}

export const capitalizeFirstLetter = (str: string) => {
      return str.charAt(0).toUpperCase() + str.slice(1);
}

export const isNumber = (input: string): boolean  => {
    return input === "" || /^[0-9]+$/.test(input);
}

