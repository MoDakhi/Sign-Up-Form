// Sign Up From

document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  let input1 = document.getElementById("input1").value;
  let input2 = document.getElementById("input2").value;
  let input3 = document.getElementById("input3").value;

  // First input and output
  if (input1.length >= 4 && input1.length <= 8) {
    document.getElementById("output1").innerHTML = "";
    document.getElementById("input1").style.border = "2px solid green";
  } else if (input1.length == 0) {
    document.getElementById("output1").innerHTML = "required field";
    document.getElementById("input1").style.border = "2px solid red";
    document.getElementById("output1").style.color = "red";
  } else if (input1.length < 4 || input1.length > 8) {
    document.getElementById("output1").innerHTML =
      "Username must be 4-8 characters";
    document.getElementById("input1").style.border = "2px solid red";
    document.getElementById("output1").style.color = "red";
  }

  // Second input and output
  if (input2.length > 0) {
    document.getElementById("output2").innerHTML = "";
    document.getElementById("input2").style.border = "2px solid green";
  } else if (input2.length == 0) {
    document.getElementById("output2").innerHTML = "required field";
    document.getElementById("input2").style.border = "2px solid red";
    document.getElementById("output2").style.color = "red";
  }

  // Third input and output
  if (input3.length == 0) {
    document.getElementById("output3").innerHTML = "required field";
    document.getElementById("input3").style.borderColor = "red";
    document.getElementById("output3").style.color = "red";
  } else if (input3 == input2) {
    document.getElementById("output3").innerHTML = "";
    document.getElementById("input3").style.border = "2px solid green";
  } else {
    document.getElementById("output3").innerHTML = "Password doesn't match";
    document.getElementById("input3").style.borderColor = "red";
    document.getElementById("output3").style.color = "red";
  }

  // Last output
  if (
    input1.length >= 4 &&
    input1.length <= 8 &&
    input2.length > 0 &&
    input3 == input2
  ) {
    document.getElementById("output4").style.color = "green";
    document.getElementById("output4").innerHTML = "SIGNUP SUCCUSFUL!";
  } else {
    document.getElementById("output4").innerHTML = "";
  }
}
