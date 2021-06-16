<template>
    <div>
        {{id}} 
    </div>
</template>

<script>
    export default {
        data() {
            return {
                id: this.$route.params.id
            }
        },
        created(){
            console.log(this.id);
        }
        
    }
</script>

<style>

</style>