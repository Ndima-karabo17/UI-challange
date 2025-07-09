document.addEventListener("DOMContentLoaded", function () {
  const featureToggle = document.getElementById("feature");
  const featureList = document.getElementById("feature-lists");

  const companyToggle = document.getElementById("comp");
  const companyList = companyToggle.querySelector(".company");

 
  featureToggle.addEventListener("click", function (event) {
    event.stopPropagation();
    featureList.style.display = (featureList.style.display === "block") ? "none" : "block";
    companyList.style.display = "none"; 
  });


  companyToggle.addEventListener("click", function (event) {
    event.stopPropagation();
    companyList.style.display = (companyList.style.display === "block") ? "none" : "block";
    featureList.style.display = "none";
  });


  document.addEventListener("click", function () {
    featureList.style.display = "none";
    companyList.style.display = "none";
  });
});
