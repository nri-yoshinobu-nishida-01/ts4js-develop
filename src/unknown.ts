export {};

const kansu = (): number =>43;

let numberAny: any = kansu();
let numberUnknown: unknown = kansu();
//let numberUnknown: number = kansu();

let sumAny = numberAny + 10;
console.log(typeof numberUnknown)
if (typeof numberUnknown === 'number'){
  let sumUnknown = numberUnknown + 10;
}else{
  let sumUnknown = numberAny + 10;
}

console.log(sumAny)