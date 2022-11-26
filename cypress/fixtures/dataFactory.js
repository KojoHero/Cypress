export default class RandomDataGenerator {
    generateWord(wordLength) {
        let result = "";
        let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        let charactersLength = wordLength;
        for (let i = 0; i < charactersLength; i++) {
            result += characters.charAt(
                Math.floor(Math.random() * charactersLength)
            );
        }
        return result;
    }

    generateNumbers() {
        let numbers = Math.floor(Math.random() * 99) + 1;
        return numbers.toString();
    }
}