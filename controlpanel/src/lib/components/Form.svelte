<script lang="ts">
	import { onMount } from 'svelte';

	onMount(() => {
		const datepickers = Array.from(
			document.getElementsByClassName(
				'datepicker-dropdown'
			) as HTMLCollectionOf<HTMLElement>
		);
		for (let i = 0; i < datepickers.length; i++) {
			datepickers[i].style.zIndex = 99;
		}

		console.log();
	});
</script>

<form>
	<div class="relative z-0 w-full mb-6 group">
		<input
			type="email"
			name="name"
			class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
			placeholder=" "
			required=""
		/>
		<label
			for="floating_email"
			class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
			>Titulo...</label
		>
	</div>
	<div class="relative z-0 w-full mb-6 group">
		<textarea
			id="message"
			rows="4"
			class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
			placeholder="Descricao..."
		/>
	</div>

	<div class="relative mb-6">
		<div
			class=" absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
		>
			<svg
				class="w-5 h-5 text-gray-500 dark:text-gray-400"
				fill="currentColor"
				viewBox="0 0 20 20"
				xmlns="http://www.w3.org/2000/svg"
				><path
					fill-rule="evenodd"
					d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
					clip-rule="evenodd"
				/></svg
			>
		</div>
		<input
			datepicker=""
			type="text"
			class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 datepicker-input"
			placeholder="Data..."
		/>
	</div>

	<div class="relative z-0 w-full mb-6 group">
		<label
			class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
			for="multiple_files">Adicionar multimedia</label
		>
		<input
			class="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
			id="multiple_files"
			type="file"
			multiple
		/>
	</div>

	<div class="grid xl:grid-cols-2 xl:gap-6" />
	<!-- Modal footer -->
	<div
		class="flex items-center py-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600"
	>
		<button
			type="submit"
			class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
			>Salvar</button
		>
	</div>
</form>
