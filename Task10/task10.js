let a = [10,9,8,7,6,5,4,3,2,1,0,-1,-2,-3,-4,-5,-6,-7,-8,-9,-10,-11,-12,-13,-14,-15,-16,-17,-18,-19,-20];
printEven(a);

function printEven(a){
  let i;
  for(i=0;i<a.length;i++){
    if(i%2 == 0){
      console.log(a[i]);
    }
  }  
}