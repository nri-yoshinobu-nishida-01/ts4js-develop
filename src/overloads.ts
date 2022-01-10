export {};

function double(value:number):number;
function double(value:string):string;


function double(value:any):any{
  return value * 2;
}

console.log(double(100));