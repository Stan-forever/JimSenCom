<template>
	<div>
		<button class="jimsen-button" :class="btnStyle">btn按钮</button>
	</div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'

const props = defineProps<{
	type?: string
}>()

const btnStyle = computed(() => {
	return { [`jimsen-button--${props.type}`]: props.type }
})

defineOptions({
	name: 'jimsen-button',
})
</script>

<style lang="less" scoped>
@import './style//index.less';
</style>
