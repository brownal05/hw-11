var columns = Object.keys(data[0]);
var tableData = data
var submit = d3.select("#filter-btn")

function buildTable(tableData, columns) {
  var table = d3.select("#table-area")
  .append('table')
  .attr('id', 'ufo-table')
  .attr('class', "table table-dark table-striped table-responisve table-hover table-md ")

	var thead = table.append('thead')
	//var	tbody = table.append('tbody');

	// append the header row
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

submit.on("click", function() {
  d3.event.preventDefault();
  d3.select('#ufo-table').selectAll("tbody").remove()
  var inputElement = function(u) {d3.selectAll(".form-contol")
    .property("value");
    return (inputElement)
    
  };
  
 // var inputValue = inputElement.property("value");
  var filteredData = tableData.filter(date => date.datetime === inputElement );
  newtable = buildAll(filteredData)
  return newtable
});

// submit.on("click", function() {
//   d3.event.preventDefault();
//   var searched_data = tableData,
//     text = this.value.trim();
//   searched_data = searched_data.map(function(r){
//     return data.filter(function(p))
//   })
   
//     })
var myTable = buildTable(data, columns)
var mydata = buildAll(data, columns)
