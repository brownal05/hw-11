
var tableData = data
var columns = Object.keys(tableData[0]);
var myTable = buildTable(columns)
buildAll(tableData)
function buildTable(columns) {
  var table = d3.select("#table-area")
  .append('table')
  .attr('id', 'ufo-table')
  .attr('class', "table table-dark table-striped table-responisve table-hover table-md ")

	var thead = table.append('thead')
	//var	tbody = table.append('tbody');

	// append t row
	thead.append('tr')
	  .selectAll('th')
    .data(columns)
    .enter()
    .append('th')
    .attr('scope', 'col')
    .text(function (column) { return column; });
  return table    
};

 function buildAll(varData) {
	// create a row for each object in the data
	var tbody = d3.select('#ufo-table').append('tbody')
  var rows = tbody.selectAll('tr')
    .data(varData)
	  .enter()
	  .append('tr');

	// create a cell in each row for each column
	var cells = rows.selectAll('td')
	  .data(function (row) {
	    return columns.map(function (column) {
	      return {column: column, value: row[column]};
	    });
	  })
	  .enter()
	  .append('td')
      .text(function (d) {
         return d.value;
       });
  return tbody;
};

var submit = d3.select("#filter-btn")

submit.on("click", function() {
  d3.event.preventDefault();
  d3.select('#ufo-table').selectAll("td").remove()
  var inputElement = d3.selectAll("#datetime"); //this needs to loop through the form and find the values 
  var inputValue = inputElement.property("value");
  console.log(inputValue);
  console.log(tableData);
  var filteredData = tableData.filter(date => date.datetime === inputValue ); 
  buildAll(filteredData)
});
// submit.on("click", function() {
//   d3.event.preventDefault();
//   d3.select('#ufo-table').selectAll("tbody").remove()
//   var inputElement = function(u) {d3.selectAll(".form-contol")
//     .property("value");
//     return (inputElement)
   
//   };
  
//  // var inputValue = inputElement.property("value");
//   var filteredData = tableData.filter(date => date.datetime === inputElement );
//   newtable = buildAll(filteredData)
//   return newtable
// });

// submit.on("click", function() {
//   d3.event.preventDefault();
//   d3.select('#ufo-table').selectAll("td").remove() //remove table body
//   var inputElement = d3.selectAll(".form-control"); //this needs to loop through the form and find the values 
//   console.log(inputElement)
//   var inputValue = inputElement.property("value");
//   console.log(inputValue)

//   function bigFilter(inputValue){
//   let copyData = tableData
//   Object.entries(inputValue).forEach((formOption) =>{
//     copyData = copyData.filter((row) => { 
//       return row[formOption[0]] === row[formOption[1]]})
//   });
//   console.log(copyData)
//     return copyData;
    
// }
//   filteredData = bigFilter()
//   console.log(filteredData)
//   // console.log(copyData);
//   // var filteredData = tableData.filter(sighting => sighting[property] === inputValue ); 
//   // var filteredData = tableData.filter(sighting => sighting.datetime === inputValue ); 
//   // console.log(tableData)
//   buildAll(filteredData)
// });


// submit.on("click", function() {
//   d3.event.preventDefault();
//   d3.select('#ufo-table').selectAll("tbody").remove()
//   var inputValue = d3.selectAll("li").selectAll(".form-control")
//   console.log(Object.values(inputValue))
  //var filteredData = inputValue.forEach(function(d,i) {console.log(d)})
   
  //console.log(filteredData)
  // var filteredData = tableData.
  // console.log(filteredData)
  // newtable = buildAll(filteredData)
  // return newtable
  
// }); 

// submit.on("click", function() {
//   d3.event.preventDefault();
//   var searched_data = tableData,
//     text = this.value.trim();
//   searched_data = searched_data.map(function(r){
//     return data.filter(function(p))
//   })
   
//     })


//works
// submit.on("click", function() {
//   d3.event.preventDefault();
//   d3.select('#ufo-table').selectAll("td").remove()
//   var inputElement = d3.selectAll("#datetime"); //this needs to loop through the form and find the values 
//   var inputValue = inputElement.property("value");
//   console.log(inputValue);
//   console.log(tableData);
//   var filteredData = tableData.filter(date => date.datetime === inputValue ); 
//   buildAll(filteredData)
// });