<template>
<div id="User">
    <h1>Usuario</h1>
    <form id="form1" method="post" action="Enviar">

        <label for="">Nombre : </label>
        <input type="text" name="nombre">
        <button type="submit" > Enviar</button>

    </form>
</div>

</template>
<script>
export default {
    name: 'User',
    data(){
        return {
            
        }
    }
}
</script>
