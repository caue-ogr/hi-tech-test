google.charts.load('current', {packages: ['corechart']});
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
      var data = new google.visualization.DataTable();
      data.addColumn('string', 'State');
      data.addColumn('number', 'Ocorrencias');
      data.addRows([
        ['Amazonas', 1],
        ['Acre', 1],
        ['Paraná', 2],
        ['São Paulo', 3],
        ['Santa Catarina', 2]
      ]);

      var chart = new google.visualization.ColumnChart(document.getElementById('myPieChart'));
      chart.draw(data, null);
    }
