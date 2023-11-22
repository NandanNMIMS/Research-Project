  // Bar chart 
  var ctx = document.getElementById('barChartID').getContext('2d');
  var myChart = new Chart(ctx, {
      type: 'bar',
      options: {
          legend: { display: true },
          indexAxis: 'x',
          title: {
              display: true,
              text: 'Bar Chart using ChartJS library'
          }
      },
      data: {
          labels: ["2019", "2020", "2021", "2022"],
          datasets: [
              {
                  label: "ABDC Indexed Publications",
                  backgroundColor: ["#0047ab", "#0047ab",
                      "#0047ab", "#0047ab"],
                  data: [30, 65, 75, 119]
              }
          ]
      }
  }); 