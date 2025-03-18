// duplicate ele
function duplicate() {
    let arr = [1, 2, 3, 4, 3, 2, 5, 6, 7, 8, 9, 0];
    let newarr = [];
    arr.forEach((element) => {
      if (!newarr.includes(element)) {
        newarr.push(element);
      }
    });
    console.log(newarr);
  }
  duplicate();
  