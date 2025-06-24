const submitAge = () => {
  var inputs = document.getElementsByTagName("input");
  let valid = {};
  for (let i = 0; i < inputs.length; i++) {
    if (!inputs[i].value.length) {
      document.getElementById(inputs[i].id).style.borderColor =
        "hsl(0, 100%, 67%)";
      let labels = document.getElementById(inputs[i].id).previousElementSibling;
      labels.style.color = "hsl(0, 100%, 67%)";
      let error = document.getElementsByClassName("error-msg");
      error[i].style.display = "block";
      error[i].innerText = "This field is required";
    }
    if (inputs[i].value.length) {
      valid[i] = true;
    }
  }
  let allValues = Object.values(valid).every((ele) => ele == true);
  if (allValues) {
    let date = new Date();
    let currentYear = Number(date.getFullYear());
    let currentMonth = Number(date.getMonth() + 1);
    let currentDay = Number(date.getDate());
    let dobYear = Number(document.getElementById("years").value);
    let dobMonth = Number(document.getElementById("months").value);
    let dobDay = Number(document.getElementById("days").value);
    let validDays = new Date(currentYear, currentDay, 0).getDate();
    let validDay = new Date(dobYear, dobMonth, 0).getDate();
    if (dobMonth < 1 || dobMonth > 12) {
      document.getElementById("months").style.borderColor = "hsl(0, 100%, 67%)";
      let labels = document.getElementById("months").previousElementSibling;
      labels.style.color = "hsl(0, 100%, 67%)";
      let error = document.getElementById("month");
      error.style.display = "block";
      error.innerText = "This field is required";
      return;
    }
    if (dobDay < 1 || dobDay > validDay) {
      document.getElementById("days").style.borderColor = "hsl(0, 100%, 67%)";
      let labels = document.getElementById("days").previousElementSibling;
      labels.style.color = "hsl(0, 100%, 67%)";
      let error = document.getElementById("day");
      error.style.display = "block";
      error.innerText = "Must be a valid day";
      return;
    }
    if (dobYear > currentYear) {
      document.getElementById("years").style.borderColor = "hsl(0, 100%, 67%)";
      let labels = document.getElementById("years").previousElementSibling;
      labels.style.color = "hsl(0, 100%, 67%)";
      let error = document.getElementById("year");
      error.style.display = "block";
      error.innerText = "Must be in the past";
      return;
    }
    let calculateDays = 0;
    if (dobDay > currentDay) {
      calculateDays = currentDay + validDays - dobDay;
      if (dobMonth == 12) {
        dobYear = dobYear + 1;
        dobMonth = dobMonth + 1;
      } else {
        dobMonth = dobMonth + 1;
      }
    } else {
      calculateDays = currentDay - dobDay;
    }
    let calculateMonths = 0;
    if (dobMonth > currentMonth) {
      calculateMonths = currentMonth + 12 - dobMonth;
    } else {
      calculateMonths = currentMonth - dobMonth;
    }
    let calculateYears = currentYear - dobYear;
    document.getElementById("dobyears").innerText = calculateYears;
    document.getElementById("dobmonths").innerText = calculateMonths;
    document.getElementById("dobdays").innerText = calculateDays;
  }
};
function change(e) {
  if (e.value.length) {
    e.value = e.value.replace(/[^0-9.]/g, "").replace(/(\..*?)\..*/g, "$1");
    document.getElementById(e.id).style.borderColor = "hsl(0, 0%, 86%)";
    let labels = document.getElementById(e.id).previousElementSibling;
    labels.style.color = "hsl(0, 1%, 44%)";
    let error = document.getElementById(e.name);
    error.style.display = "none";
  } else {
    document.getElementById(e.id).style.borderColor = "hsl(0, 100%, 67%)";
    let labels = document.getElementById(e.id).previousElementSibling;
    labels.style.color = "hsl(0, 100%, 67%)";
    let error = document.getElementById(e.name);
    error.style.display = "block";
    error.innerText = "This field is required";
  }
}
