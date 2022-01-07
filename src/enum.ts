export {};

enum Months {
  January = 1, // you can set start number 
  February,
  March,
  April,
  May
}

console.log(Months.January)
console.log(Months.May)

enum COLORS {
  RED = '#FF0000',
  WHITE = '#FFFFFF',
  GREEN = '#008000',
  BLUE = '#0000FF',
}

let green = COLORS.GREEN;
console.log(green);

enum COLORS{
  YELLOW = '#FFFF00',
  GLAY = '#808080'
}
COLORS.YELLOW;