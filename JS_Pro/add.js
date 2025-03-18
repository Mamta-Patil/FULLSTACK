// add()
function add(){
  let arr = [1, 2, 3, 4, 5];
  let newarr=[];
  let step = 2;
  for(let i=0;i<=arr.length;i++)
  {
      newarr.push(arr[(i+step) % arr.length] )
  }
  console.log(newarr)
}

add()