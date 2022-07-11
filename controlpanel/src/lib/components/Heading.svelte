<script lang="ts">
	export let type: string;
</script>

{#if type == 'h1'}
	<h1 class="text-4xl mb-12"><slot /></h1>
{:else if type == 'h2'}
	<h2><slot /></h2>
{:else if type == 'h3'}
	<h3><slot /></h3>
{:else if type == 'h4'}
	<h4><slot /></h4>
{:else if type == 'h5'}
	<h5><slot /></h5>
{:else if type == 'h6'}
	<h6><slot /></h6>
{/if}
