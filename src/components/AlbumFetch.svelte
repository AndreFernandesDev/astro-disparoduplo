<script lang="ts">
    import Featured from './components/Featured.astro';
    import { albums } from '../config/db';
    console.log(albums);



</script>

<!-- MEDIA -->
<main class="w-full h-full overflow-y-scroll snap-y snap-mandatory">

    {#each albums as album}
        <Featured id="home" type="image" path={album.featured ? album.featured.path : ""}>
            <div class=" flex flex-col h-screen justify-center">
                <h1 class="text-6xl ml-24 mb-12">{album.name}</h1>
                <p class="text-xl ml-24 mb-12 leading-10">{album.description}</p>
                <div class="h-0.5 w-8/12 bg-black"></div>
                <a href={`/album/${album.id}`}><button class="text-white w-48 mt-6 ml-24 py-3 bg-black text-lg">Ver todas as fotos</button></a>
            </div>
        </Featured>  
    {/each}

</main>