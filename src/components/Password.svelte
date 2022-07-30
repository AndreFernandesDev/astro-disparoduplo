<script lang="ts">
    export let password = "";

    let input = "";
    let open = true;
    let disabled = true;
    let error = false;

    const onChange = (e) => {
        if(e.key === 'Enter' || e.keyCode === 13) return
        
        input.length > 0 ? disabled = false : disabled = true
        error = false
    }
    
    const checkPassword = (e) => {
        if(input === password) {
            open = false;
        }else {
            error = true;
        }
    }
</script>

{#if password}
    <input type="checkbox" id="my-modal" class="modal-toggle" />
    <div class="modal {open === true ? 'modal-open bg-white' : ''} lg:ml-12">
        <div class="modal-box flex flex-col content-center items-center">
            <h3 class="font-bold text-lg">Album Privado</h3>
            <p class="pb-4">Insira a senha para ver todas as fotos</p>
            <form on:submit|preventDefault={checkPassword} class="flex gap-2 items-center mb-4">
                <input on:keyup={onChange} bind:value={input} type="text" placeholder="Senha..." class="input input-bordered input-primary {error ? "text-error input-error" : ""} w-full max-w-xs" />
                <button class="btn btn-primary {error ? "btn-error" : ""} {disabled ? "btn-disabled" : ""}">Confirmar</button>
            </form>
        </div>
    </div>
{/if}