function tickets(peopleInLine){
  let twentyFives = 0;
  let fifties=0;
  for(let i=0; i<peopleInLine.length; i++){
  if (peopleInLine[i]===25){
    twentyFives++;
  } else if (peopleInLine[i]===50 && twentyFives>=1){
    twentyFives--;
    fifties++;} else if (peopleInLine[i]===50 && twentyFives===0) return "NO"
else if (peopleInLine[i]===100) {
  if(twentyFives>=3 && fifties<=0){
    twentyFives -=3;
  } else if (twentyFives>=1 && fifties>=1){
      twentyFives--;
    fifties--;
  }else if (twentyFives===0 )return "NO"
else if (twentyFives<=2 && fifties===0 ) return "NO"
}
}
return "YES";
}

console.log(tickets([25, 25, 50, 50])); //"YES");
console.log(tickets([25, 100])); //"NO");
console.log(tickets([25, 25, 50, 50, 100]));
console.log(tickets([25, 100, 50, 100, 25, 25, 25, 100]));
console.log(tickets([25, 25, 25, 100, 25, 25, 25, 100, 25, 25, 25, 100]));
console.log(
  tickets([25, 25, 50, 100, 25, 50, 25, 100, 25, 50, 25, 100, 25, 50, 25, 100])
);
