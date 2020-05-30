// Import existing ufo data, append to web page
var table = d3.select("table");
var tbody = d3.select("tbody");


data.forEach((ExistingUfodata) => {
    var row = tbody.append("tr");
    Object.entries(ExistingUfodata).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
  
//   Create form so user can filter by date

var ufo = data;
var button = d3.select("#filter-btn");
var form = d3.select("#form-group");

button.on("click", runEnter);
form.on("submit",runEnter);

// Complete the event handler function for the form
function runEnter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();
  
  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  // var inputValue = inputElement.property("value");
  let filteredData = ufo;
  const inputValue = d3.select("#datetime").property("value");

  console.log(inputValue);
  console.log(ufo);

  filteredData = filteredData.filter(row => row.datetime === inputValue);

  console.log(filteredData);


  tbody.html("");
  filteredData.forEach((filteredData) => {
    var row = tbody.append("tr");
    Object.entries(filteredData).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
   
  };
