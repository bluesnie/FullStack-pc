<template>
	<div>
		<highcharts :options="chartOptions" :highcharts="hcInstance"></highcharts>
	</div>
</template>

<script>
	import Highcharts from 'highcharts'
	import {
		getDynamicDataList
	} from '@/api/index.js'
	export default {
		// name: 'app',
		data() {
			return {
				hcInstance: Highcharts,
				chartOptions: {
					chart: {
						type: 'spline'
					},
					title: {
						text: '页面2：100 条数据'
					},
					series: [{
						data: []
					}],
				},
				data: []
			}
		},

		methods: {
			getDynamicDataList: function() {
				getDynamicDataList().then(res => {
					if (res.code === 10000) {
						const data = res.results
						for (let i = 0; i < data.length; i++) {
							this.data.push(data[i].content)
						}
						this.chartOptions.series[0].data = this.data
					}
				}).catch(function(error) { // 请求失败处理
					console.log(error);
				});
			}
		},

		created() {
			this.getDynamicDataList()
		}
	}
</script>

<style>
</style>
