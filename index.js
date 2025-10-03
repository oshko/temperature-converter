let fahrenheit = prompt("Please enter the Fahrenheit, convert into Celsius?");
function convertToCelius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

function describeTemperature(fahrenheit) {
  let celsius = convertToCelius(fahrenheit);
  let description;
  if (celsius < 0) {
    description = "Water is going to freeze!";
  } else if (celsius < 20) {
    description = "Warm enough to walk outside";
  } else if (celsius < 30) {
    description = "Not stay outside more than 20 min, otherwise get sunsick!";
  } else if (celsius < 40) {
    description =
      "When visit Vegas in July, you feel this temperature even in the night!";
  } else if (celsius >= 40) {
    description = "When you put raw egg outside, it can cook itself.";
  } else {
    description = "Only Alien can handle this temperature!";
  }
  return `Your entered: ${fahrenheit} Fahrenheit, which is in Celsius: ${celsius},
  And that would be: ${description}`;
}
const descriptionBasedOnTemp = describeTemperature(fahrenheit);
alert(descriptionBasedOnTemp);
