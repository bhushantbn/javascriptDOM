function countWords() {
  let characterCounter = document.getElementById("words").value.length;
  let wordCounter = document.getElementById("words").value;
  if (wordCounter.trim() === "") {
    alert("Please Enter Value.");
    return; // Exit the function early if the value is empty
  }
  wordCounter = wordCounter.match(/\w+/g);
  wordCounter = wordCounter.length;
    document.getElementById("showData").innerHTML =
      "The Total character is:" + characterCounter;
    document.getElementById("showWords").innerHTML =
      "The Total Word Count is:" + wordCounter;
  
}
