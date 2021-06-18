<template>
    <div>
        <div class="disconnect-bloc">
            <button type="button" class="btn btn-outline-danger" @click="onDisconnect">
                Se déconnecter
            </button>
        </div>

        <h2 class="page-title">Les films du moment !</h2>
        <ListMovies/>
    </div>
</template>

<script>
    import ListMovies from '../components/ListMovies.vue';

    export default {
        name: "Home",
        components: {
            ListMovies
        },
        methods: {
            onDisconnect() {
                // On retire tout (dont le token) du localStorage
                localStorage.clear();

                this.$router.push({name: 'login'});
            }
        }
    }
</script>

<style scoped>
    .disconnect-bloc {
        margin-top: 15px;
        margin-bottom: 30px;
    }
</style>