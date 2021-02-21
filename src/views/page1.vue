<template>
	<div>
		<el-button type="primary" @click="saveCurrentData()">保存当前数据</el-button>
		<highcharts :options="chartOptions" :highcharts="hcInstance"></highcharts>
	</div>
</template>

<script>
	import Highcharts from 'highcharts'
	import {
		getDynamicData,
		saveCurrentData
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
						text: '页面1：实时数据'
					},
					series: [{
						data: []
					}]
				},
				data: [],
				timer: null
			}
		},

		methods: {
			getDynamicData: function() {
				getDynamicData().then(res => {
					const data = res.results
					this.data.push(...data)
					this.chartOptions.series[0].data = this.data
				}).catch(function(error) { // 请求失败处理
					console.log(error);
				});
			},

			saveCurrentData: function() {
				let data = {
					data: this.data
				};
				saveCurrentData(data).then(res => {
					this.$message({
						message: '保存成功',
						type: 'success'
					});

				}).catch(function(error) { // 请求失败处理
					console.log(error);
				});
			}
		},

		created() {
			this.timer = setInterval(this.getDynamicData, 2000);
		},

		beforeDestroy() {
			clearInterval(this.timer)
		}
	}
</script>

<style>
</style>
