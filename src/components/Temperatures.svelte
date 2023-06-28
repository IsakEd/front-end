<script lang="ts">
	import getTemperatures from '../lib/getTemperatures';
	const { inside, outside } = getTemperatures();
</script>

<main>
	<div id="container">
		<div id="inside" class="temperature">{inside}&#8451</div>
		<div id="outside" class="temperature">{outside}&#8451</div>
	</div>
</main>

<style>
	#container {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
	}
	.temperature {
		font-size: xx-large;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
</style>
