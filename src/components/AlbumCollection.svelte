<script lang="ts">
    export let album;

    console.log(album);
    // Components
    import Modal from './Modal.svelte';
    import Image from './Image.svelte';

	let activeImg = {
		path: '',
		name: ''
	};

	const handleImagePreview = (path: string, name: string) => {
        console.log(path);
		activeImg = {
			path: path,
			name: name
		}
	}

</script>

<!-- MEDIA -->
<section class="flex flex-wrap w-full">
    {#if album.media && album.media.length}
        <Modal type="click" id="fullImg" extraClass="bg-black">
            <img for="my-modal" src={activeImg.path} alt={activeImg.name} class="modal-button w-full h-full object-contain rounded-md"/>
        </Modal>
        {#each album.media as file}
            <Image modalId="fullImg" onClick={() => handleImagePreview(file.path, file.name)} path={file.path} name={file.name} />
        {/each}
    {/if}
</section>