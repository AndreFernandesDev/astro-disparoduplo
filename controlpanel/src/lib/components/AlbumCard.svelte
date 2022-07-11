<script lang="ts">
	export let name: string;
	export let date: string;
	export let page: string;
</script>

<div
	class="w-4/12 max-w-md bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
>
	<a href="album/{page}">
		<img
			class="rounded-t-lg h-64 w-full object-cover"
			src="sample.jpg"
			alt=""
		/>
	</a>
	<div class="p-5">
		<a href="album/{page}">
			<h5
				class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
			>
				{name} | {date}
			</h5>
		</a>
		<p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
			Here are the biggest enterprise technology acquisitions of 2021 so far, in
			reverse chronological order.
		</p>

		<div class="flex w-full justify-end">
			<slot />
		</div>
	</div>
</div>
