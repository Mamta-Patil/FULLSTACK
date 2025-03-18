// Flatteren arr
function flattenarr() {
  let arr = [1, 2, 3, [4, 5]];
  let newarr = [];

     newarr=[].concat.apply([], arr)
  console.log(newarr);
}
flattenarr();
