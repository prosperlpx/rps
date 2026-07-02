export default function runGame(pickArr) {
  var randPick = (pickArr) => {
    const randNo = Math.floor(Math.random() * pickArr.length); // generates a random number from the length provided

    // pick one item from the array randomly
    const comPick = pickArr[randNo];

    return comPick;
  };

  // console.log(randPick(pickArr))
  return randPick(pickArr);
}
