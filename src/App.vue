<template>
	<div id="app">
		<h1>Hello World!</h1>
		<p>
			<!-- 使用 router-link 组件来导航. -->
			<!-- 通过传入 `to` 属性指定链接. -->
			<!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
			<router-link to="/page1"><el-button type="primary">实时数据图表</el-button></router-link>
			<router-link to="/page2" style="margin-left: 5px;"><el-button type="primary">100 条数据图表</el-button></router-link>
			
		</p>
		<router-view />
	</div>
</template>

<script>
	export default {
		name: 'App'
	}
</script>

<style>
	#app {
		text-align: center;
	}
</style>
