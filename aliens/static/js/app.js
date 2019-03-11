// from data.js
//Table update
var tableData = data;
var tbody = d3.select("tbody");
var submit = d3.select("#filter-btn")
tableData.forEach((ufoSighting) => {
    var row = tbody.append("tr");
    Object.entries(ufoSighting).forEach(([key, value]) => {
      var cell = tbody.append("td");
      cell.text(value);
    });
  });

submit.on("click", function() {
    d3.event.preventDefault();
    d3.select('#ufo-table').selectAll("td").remove();
    var cityElement 
    var inputElement = d3.select("#datetime"); //this needs to loop through the form and find the values 
    var inputValue = inputElement.property("value");
    var filteredData = tableData.filter(date => date.datetime === inputValue );
    filteredData.forEach((ufoSighting) => {
        var row = tbody.append("tr");
        Object.entries(ufoSighting).forEach(([key, value]) => {
          var cell = tbody.append("td");
          cell.text(value);
        });
      });
});

// Input field formatter!!!
// var text = d3.select("#datetime");
// function handleChange(event) {
//     var value = d3.event.target.value;
//     output.html("");
// }
// YOUR CODE HERE!


//needs handleChange as an event listener 

// WORKING CODE HERE - DONT DELETE TILL ABOVE IS ALLLLLL DONE
// submit.on("click", function() {
//     d3.event.preventDefault();
//     d3.select('#ufo-table').selectAll("td").remove()
//     var inputElement = d3.select("#datetime"); //this needs to loop through the form and find the values 
//     var inputValue = inputElement.property("value");
//     console.log(inputValue);
//     console.log(tableData);
//     var filteredData = tableData.filter(date => date.datetime === inputValue );
//     console.log(filteredData)
//     filteredData.forEach((ufoSighting) => {
//         var row = tbody.append("tr");
//         Object.entries(ufoSighting).forEach(([key, value]) => {
//           var cell = tbody.append("td");
//           cell.text(value);
//         });
//       });
// });