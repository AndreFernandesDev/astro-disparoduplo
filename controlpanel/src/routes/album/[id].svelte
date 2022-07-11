<script>
	import { page } from '$app/stores';
	import Heading from '$lib/components/Heading.svelte';
	import AlbumCard from '$lib/components/AlbumCard.svelte';
	import Button from '$lib/components/Button.svelte';

	const id = $page.params.id;
	console.log($page.params);
</script>

<h1>{id}</h1>
<section class="flex flex-wrap w-full justify-center my-12">
	<Heading type="h1">Albuns</Heading>
	<div class="flex flex-wrap justify-evenly items-stretch gap-6" />
</section>
