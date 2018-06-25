<template>
    <div class="chart">
        <h5>this is chart.vue</h5>
        <div id="chart-bar" style="width:300px; height:300px"></div>
        <div id="chart-pie" style="width:400px; height:400px"></div>
    </div>
</template>

<script>
export default {
    mounted () {
        let echarts = require('echarts')
        let barSimple = echarts.init(document.getElementById('chart-bar'))
        barSimple.setOption({
            title: { text: 'ECharts Bar' },
            xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                type: 'bar',
                data: [120, 200, 150, 80, 70, 110, 130]
            }]
        })

        let pieSimple = echarts.init(document.getElementById('chart-pie'))
        pieSimple.setOption({
            title: {
                text: 'ECharts Pie',
                subtext: 'pie',
                left: 'center'
            },
            legend: {
                bottom: 10,
                left: 'center',
                data: ['A', 'B', 'C', 'D', 'E']
            },
            series: [{
                type: 'pie',
                radius: '55%',
                center: ['50%', '60%'],
                data: [
                    {value: 335, name: 'A'},
                    {value: 310, name: 'B'},
                    {value: 234, name: 'C'},
                    {value: 135, name: 'D'},
                    {value: 1548, name: 'E'}
                ]
            }]
        })
    }
}
</script>

<style scoped>
.chart{
    border: 1px blue solid;
    margin: 10px 0 0 0;
}
</style>
