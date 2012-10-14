var chart1; // globally available
$(document).ready(function() {
    
    $.ajax({
        url: Drupal.settings.basePath + "get_deaths",
        success: function(data) {
            var death_data = JSON.parse(data);
            $.ajax({
                url: Drupal.settings.basePath + "get_injuries",
                success: function(data) {
                    var injuries_data = JSON.parse(data);
                    chart1 = new Highcharts.Chart({
                        chart: {
                            renderTo: 'container',
                            type: 'line'
                        },
                        title: {
                            text: 'Data From Last 10 Years'
                        },
                        xAxis: {
                            categories: ['2002', '2003','2004','2005','2006','2007','2008','2009','2010','2011','2012']
                        },
                        yAxis: {
                            title: {
                                text: 'No. of Deaths and Injuries'
                            }
                        //categories: [1,2,3,4,5,6,7,8,9]
                        },
                        series: [{
                            name: 'Injuries',
                            data: injuries_data
                        }, {
                            name: 'Deaths',
                            data: death_data
                        }]
                    });
                }
            });

            console.log(data);
        }
    });

});