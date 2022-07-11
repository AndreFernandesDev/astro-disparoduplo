<script lang="ts">
	import AlbumCard from '$lib/components/AlbumCard.svelte';
	import Heading from '$lib/components/Heading.svelte';
	import Button from '$lib/components/Button.svelte';

	const featured = ['-', '-', '-'];

	const albums = ['1', '2', '3', '4', '5', '6'];
</script>

<!-- FEATURED -->
<!-- <section class="flex flex-wrap w-full justify-center my-12">
	<Heading type="h1">Featureds</Heading>
	<div class="w-full flex flex-wrap justify-evenly items-stretch gap-6">
		{#each featured as item}
			<AlbumCard name={item} date={item}>
				<Button type="Edit">Editar</Button>
			</AlbumCard>
		{/each}
	</div>
</section> -->

<!-- ALL ALBUMS -->
<section class="flex flex-wrap w-full justify-center my-12">
	<Heading type="h1">Albuns</Heading>
	<div class="flex flex-wrap justify-evenly items-stretch gap-6">
		{#each albums as item}
			<AlbumCard name={item} date={item} page={item}>
				<Button type="Edit">Editar</Button>
				<Button type="Delete">Apagar</Button>
			</AlbumCard>
		{/each}
	</div>
</section>
