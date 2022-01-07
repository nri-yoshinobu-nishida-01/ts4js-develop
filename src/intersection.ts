export {};

type Pitcher1 = {
  throwingSpeed: number;
}

type Batter1 = {
  battingAverage: number;
}

type TwoWayPlayer = Pitcher1 & Batter1;

const DaimajinSasaki: Pitcher1 ={
  throwingSpeed: 154
}

const OchiaiHiromitsu: TwoWayPlayer ={
  throwingSpeed: 154,
  battingAverage: 0.367
}

console.log(DaimajinSasaki.throwingSpeed); console.log(OchiaiHiromitsu.battingAverage);