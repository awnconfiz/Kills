var chart1; // globally available
        $(document).ready(function() {
              chart1 = new Highcharts.Chart({
                 chart: {
                    renderTo: 'container',
                    type: 'line'
                 },
                 title: {
                    text: 'Data From Last 10 Years'
                 },
                 xAxis: {
                    categories: ['2000', '2001', '2002', '2003','2004','2005','2006','2007','2008','2009','2010','2011','2012']
                 },
                 yAxis: {
                    title: {
                       text: 'No. of Deaths and Injuries'
                    }
                    //categories: [1,2,3,4,5,6,7,8,9]
                 },
                 series: [{
                    name: 'Injuries',
                    data: [1, 0, 4, 3,4,1, 0, 4, 3,4,1, 0,1]
                 }, {
                    name: 'Deaths',
                    data: [5, 7, 3, 3, 3,5, 7, 3, 3, 3,5, 7, 3]
                 }]
              });
           });