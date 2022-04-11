<script>
	import Form_drone from './components/Form_drone.svelte';
	import Form_location from './components/Form_location.svelte';
	import TripDisplay from './components/TripDisplay.svelte';
	import ErrorDisplay from './components/ErrorDisplay.svelte';
</script>

<main>
	<div class="formContainer">
		<Form_drone />
		<Form_location />
	</div>
	<div class="tripContainer">
		<TripDisplay />
		<ErrorDisplay />
	</div>

</main>

<style>
	main {
		display: flex;
		flex-flow: column nowrap;
		align-items: center;
		justify-content: center;
		box-sizing: border-box;
		gap: 2em;
		height: 100%;
		overflow: hidden;
		padding: 1em;
		width: 100%;
	}

	@media only screen and (max-width: 800px) {
			main {
				overflow-y: visible;
				height: auto;

			}
		}

	.formContainer, .tripContainer {
		display: flex;
		flex-flow: row wrap;
		justify-content: center;
		gap: 2em;
		height: max(48%, 350px);
		width: 100%;
	}
</style>