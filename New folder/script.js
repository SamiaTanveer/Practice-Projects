document.getElementById("submitButton").addEventListener("click", function () {
  var selectedOption = document.querySelector('input[name="option"]:checked');
  var message = "";

  if (selectedOption) {
    // Change content based on selected option
    switch (selectedOption.value) {
      case "option1":
        message = "You selected 1 out of 5";
        break;
      case "option2":
        message = "You selected 2 out of 5";
        break;
      case "option3":
        message = "You selected 3 out of 5";
        break;
      case "option4":
        message = "You selected 4 out of 5";
        break;
      case "option5":
        message = "You selected 5 out of 5";
        break;
    }
  } else {
    message = "Please select an option!";
  }

  // Display the thank you message in the card
  var card = document.querySelector(".card");

  card.innerHTML =
    '<img src="images/illustration-thank-you.svg" alt="Image"  style="padding: 30px 0px;"/>' +
    '<button id="submitButton" style=" width: 55%;font-size: 15px; font-weight: normal; padding:8px; background:hsl(213, 8%, 26%); color: hsl(25, 97%, 53%);letter-spacing: 0px;">' +
    message +
    "</button>" +
    "<h2 style='text-align: center;padding: 15px 0px 0px 0px; font-weight: bolder;'>Thank you!</h2>" +
    "<p style='text-align: center; margin-bottom: 12px;'>We appreciate you taking the time to give a rating. <br> If you ever need more support, don't hesitate to <br> get in touch!</p>";
});
