
const calc = document.querySelector(".calculate");
const invest = document.querySelector(".invest");
const capital = document.querySelector(".capital");
const inputText = document.getElementById("input-text");

// let formatNumber = (inputext.value)

const numberWithCommas = (x) => {
  console.log(x.value, "appjs -> input-text listener == x");
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

inputText.addEventListener('keyup', () => {
  let testingOne = inputText.value;

  let formattedText = numberWithCommas(testingOne);

  console.log(testingOne, "testingOne");
  console.log(formattedText, "formattedText");
  inputText.value.innerHTML = numberWithCommas(formattedText);
     
}); 
 

calc.addEventListener("click", function (event) {
  event.preventDefault();

  if (inputText.value.trim() === "") {
    console.log("Let Input-text Not Be Empty");
    return;
  } else {
    console.log("Let Input-text  Be Empty");

    console.log(inputText.value);

    let amount = inputText.value; // text
    amount = ~~amount; // number

    let thirtyPercent = (amount * 0.3);
    let percent = thirtyPercent.toFixed(1);
    console.log(thirtyPercent, "THIRTY-PERCENT");
    function separator(thirtyPercent) {
      var str = thirtyPercent.toString().split(".");
      str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      return str.join(".");
    }
    outputinvest.innerHTML = separator(thirtyPercent);
    console.log(separator(thirtyPercent));

    let twentyPercent = (thirtyPercent * 0.2);
    let per = twentyPercent.toFixed(1);

    console.log(twentyPercent, "TWENTY-PERCENT")

    function separator(twentyPercent) {
      var str = twentyPercent.toString().split(".");
      str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      return str.join(".");
    }

    outputcapital.innerHTML = separator(twentyPercent);
    console.log(separator(twentyPercent));
  }
});


