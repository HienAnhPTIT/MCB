

$(document).ready(function () {
    var x = document.getElementById("nhiet-do").innerHTML = Math.floor(Math.random() * 101);
    
    if (x < 10) {
        $(".div-nd").css("background-color", "#6C7EE2");
        document.getElementById("nhiet-do").innerHTML=x+'°C';
    } else if (x > 10 && x < 40) {
        $(".div-nd").css("background-color", "#FBC34A");
        document.getElementById("nhiet-do").innerHTML=x+'°C';
    } else {
        $(".div-nd").css("background-color", "#FF414D");
        document.getElementById("nhiet-do").innerHTML=x+'°C';
        
    }
    if(x>80){
        confirm("Nhiệt độ đang rất cao!");
    }

    document.getElementById("do-am").innerHTML= Math.floor(Math.random() * 101)+'%';

    document.getElementById("anh-sang").innerHTML= Math.floor(Math.random() * 101)+'%';
    
    $("#button-on").click(function(){
        $("#div-btna").css("background-color", "#1ED395");
        $('p').slideUp(200).delay(1000).fadeIn(400);
        $("#div-btna").css("background-color", "#F6A8C7");
    })
    $("#button-off").click(function(){
        $("#div-btna").css("background-color", "#FF414D");
        $('p').slideUp(200).delay(1000).fadeIn(400);
        $("#div-btna").css("background-color", "#F6A8C7");
    })
    
    //Bieu-do
    Highcharts.chart('container', {
        chart: {
          zoomType: 'xy'
        },
        title: {
          text: 'Average Monthly Precipitation and Temperature in Ha Noi, 2022',
          align: 'left'
        },
        subtitle: {
          text: 'Source: ' +
            '<a href="https://www.yr.no/nb/historikk/graf/5-97251/Norge/Troms%20og%20Finnmark/Karasjok/Karasjok?q=2021"' +
            'target="_blank">YR</a>'
        },
        xAxis: [{
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          crosshair: true
        }],
        yAxis: [{ // Primary yAxis
          labels: {
            format: '{value}°C',
            style: {
              color: Highcharts.getOptions().colors[1]
            }
          },
          title: {
            text: 'Temperature',
            style: {
              color: Highcharts.getOptions().colors[1]
            }
          }
        }, { // Secondary yAxis
          title: {
            text: 'Precipitation',
            style: {
              color: Highcharts.getOptions().colors[0]
            }
          },
          labels: {
            format: '{value} mm',
            style: {
              color: Highcharts.getOptions().colors[0]
            }
          },
          opposite: true
        }],
        tooltip: {
          shared: true
        },
        legend: {
          align: 'left',
          x: 80,
          verticalAlign: 'top',
          y: 80,
          floating: true,
          backgroundColor:
            Highcharts.defaultOptions.legend.backgroundColor || // theme
            'rgba(255,255,255,0.25)'
        },
        series: [{
          name: 'Precipitation',
          type: 'column',
          yAxis: 1,
          data: [27.6, 28.8, 21.7, 34.1, 29.0, 28.4, 45.6, 51.7, 39.0,
            60.0, 28.6, 32.1],
          tooltip: {
            valueSuffix: ' mm'
          }
      
        }, {
          name: 'Temperature',
          type: 'spline',
          data: [-13.6, -14.9, -5.8, -0.7, 3.1, 13.0, 14.5, 10.8, 5.8,
            -0.7, -11.0, -16.4],
          tooltip: {
            valueSuffix: '°C'
          }
        }]
      });
    
    

    // $('#nhiet-do').click(function () {
    //     $(".div-nd").css("background-color", "red");
    //     console.log(x);

    // })
})


