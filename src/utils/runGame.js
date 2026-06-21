export default function runGame(pickArr){
    var randPick = (pickArr) => {
        const randNo = Math.floor((Math.random() * 5 +1)); // generates a random number from 1 - 5

        // pick one item from the array randomly
        const comPick = pickArr[randNo]

        return comPick
    }

    return randPick(pickArr)
}