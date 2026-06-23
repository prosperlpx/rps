export default function runGame(pickArr){
    var randPick = (pickArr) => {
        const randNo = Math.ceil((Math.random() * 4)); // generates a random number from 1 - 5

        // pick one item from the array randomly
        const comPick = pickArr[randNo]

        return comPick
    }

    // console.log(randPick(pickArr))
    return randPick(pickArr)
}