const ctx = document.getElementById('myChart').getContext('2d');
var graphData = {
    type: 'line',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(73, 198, 230, 0.5)',
                            ],
            
            borderWidth: 1
        }]
    },
    options: {
        
    }
}
const myChart = new Chart(ctx,graphData );

var socket = new WebSocket('ws://'
+ window.location.host
+ '/ws/tweets');


socket.onmessage = function(e){
    var djangoData = JSON.parse(e.data);
    console.log(djangoData);
    var newGraphData = graphData.data.datasets[0].data;
    newGraphData.shift();
    newGraphData.push(djangoData.value);
    graphData.data.datasets[0].data= newGraphData;
    myChart.update();
    
    
}