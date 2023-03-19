// Home Screen functionalities
onEvent("learnButton", "click", function(){
  setScreen("Main"); //Going to the Main page
});

// When hovering over learnButton, making it a bit opaque
onEvent("learnButton", "mouseover", function(){
  setProperty("learnButton", "background-color", "#272727");
});

// Main Screen functionalities
var womenNames = getColumn("Women of 2020", "name");
var womenDescriptions = getColumn("Women of 2020", "description");
var womenImages = getColumn("Women of 2020", "img");
var index = randomNumber(0, womenNames.length - 1);
setImageURL("womanImage", womenImages[index]);
setText("womanInfo", womenDescriptions[index]);
setText("womanName", womenNames[index]);

// User clicks on homeButton while they're on the Main Screen
onEvent("homeButton", "click", function(){
  setScreen("Home");
});

// User clicks on the arrow icon while they're on the Main Screen
onEvent("nextButton","click", function(){
  index = randomNumber(0, womenNames.length - 1);
  setImageURL("womanImage", womenImages[index]);
  setText("womanInfo", womenDescriptions[index]);
  setText("womanName", womenNames[index]);
});
