// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

console.log(tableData)

data.forEach((ufoData) => {
    var row = tbody.append("tr");
    Object.entries(ufoData).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
  
var button = d3.select("#filter-btn");

// var form = d3.select("#form");

button.on("click", runEnter);
// form.on("submit",runEnter);

function runEnter() {

    d3.event.preventDefault();

    var inputElement = d3.select("#datetime");

    var inputValue = inputElement.property("value");

    console.log(inputValue);
  

    var filteredData = tableData.filter(ufo => ufo.datetime === inputValue);

    console.log(filteredData);
    tbody.html("")
    filteredData.forEach((ufoData) => {
      var row = tbody.append("tr");
      Object.entries(ufoData).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
      });
    });


    $(button).click(function() {
      $(inputElement).val('');
      table.search('').draw(); 
  });

// var date = filteredData.map(time => time.data);

// var list = d3.select(".list-group");

// list.html("");

// list.append("li").text("datetime");
// list.append("li").text("city")

};

