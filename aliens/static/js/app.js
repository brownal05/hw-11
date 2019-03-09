// from data.js
var tableData = data;
var datamap = data.map(function(item){
    return item;
});
var dates = data.map(date => date.datetime);
var city = data.map(cities => cities.city);
var state = data.map(countries => countries.country)
var shape = data.map(shapes => shapes.shape)
var comment = data.map(comment => comment.comments)
console.log(city);
console.log(state);
console.log(shape);
console.log(comment)
console.log(dates)

// YOUR CODE HERE!
