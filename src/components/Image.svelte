<script lang="ts">
    export let path:string;
    export let name:string;
    export let modalId:string;
    export let onClick = () => {};

</script>

<div class="relative rounded-xl p-6 w-1/2 lg:w-1/3 h-42 lg:h-96 drop-shadow-2xl">
    <label on:click={onClick} for={modalId} class="modal-button w-full h-full p-0 border-0">
        <img src={path} alt={name} class="modal-button w-full h-full object-cover rounded-lg cursor-pointer"/>
        <h2 class="text-slate-600 pt-2 pb-6">{name}</h2>
    </label>
</div>