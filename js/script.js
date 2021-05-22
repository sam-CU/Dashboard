

 google.charts.load('current', {'packages':['corechart']});
 google.charts.setOnLoadCallback(drawChart);
 google.charts.load('current', {'packages':['line']});
 google.charts.setOnLoadCallback(drawChartspenttime);

  function drawChart() {

    var data = google.visualization.arrayToDataTable([
      ['Effort', 'Amount given'],
      ['My all',75],
      ['less',25]
    ]);

    var options = {
      pieHole: 0.5,
      legend: 'none',
      slices:{
        0:{color :'purple'},
        1:{color:'transparent'}
      },
      pieSliceText:'none'
    };

    var chart = new google.visualization.PieChart(document.getElementById('donut_single'));
    chart.draw(data, options);
  }

  google.charts.load('current', {'packages':['line']});
  google.charts.setOnLoadCallback(drawChart);
//another chart
function drawChartspenttime() {
  
  var data = new google.visualization.DataTable();
  data.addColumn('number', 'Day');
  data.addColumn('number', 'Guardians of the Galaxy');
  data.addColumn('number', 'The Avengers');


  data.addRows([
    [1,  37.8, 80.8],
    [2,  30.9, 69.5],
    [3,  25.4,   57],
    [4,  11.7, 18.8],
    [5,  11.9, 17.6],
    [6,   8.8, 13.6],
    [7,   7.6, 12.3],
    [8,  12.3, 29.2],
    [9,  16.9, 42.9],
    [10, 12.8, 30.9],
    [11,  5.3,  7.9],
    [12,  6.6,  8.4],
    [13,  4.8,  6.3],
    [14,  4.2,  6.2]
  ]);

  var options = {
    chart: {
    //   title: 'Box Office Earnings in First Two Weeks of Opening',
    //   subtitle: 'in millions of dollars (USD)'
    },
    lengends:'{fontSize:0}',
    width: 400,
    height: 200,
    axes: {
      x: {
        0: {side: 'top'}
      }
    }
  };

  var chart = new google.charts.Line(document.getElementById('line_top_x'));

  chart.draw(data, google.charts.Line.convertOptions(options));
}
