// hello.js

var chart = c3.generate({
data: {
  columns: [
    ['data1', 30, 200, 100, 400, 150, 250],
    ['data2', 50,  20,  10,  40,  15,  25]
  ],
  onclick: function (d, element) { console.log("onclick", d, element); },
  onmouseover: function (d) { console.log("onmouseover", d); },
  onmouseout: function (d) { console.log("onmouseout", d); },
}
});
