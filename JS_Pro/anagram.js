
// Anagram Checker
function anagram() {
    let first = "geeks";
    let second = "tomson";
    first=first.split('').sort().join();
    second=second.split('').sort().join();
    if(first===second)
    {
      console.log("Anagram number")
    }
    else{
      console.log("Not Anagram number")
    }
  }
  anagram()