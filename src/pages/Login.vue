<template>
    <div class="jumbotron page-content">
        <h1 class="display-4">Veuillez vous connecter pour accéder au site</h1>

        <div v-if="doDisplayLogMessage">

        </div>

        <div>
            <button @click="onSubmit()"
                    type="button"
                    class="btn btn-primary btn-lg button-connect">
                Se connecter
            </button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Login",
        data() {
            return {
                doDisplayLogMessage: false
            }
        },
        methods: {
            onSubmit() {
                localStorage.setItem('X-TOKEN', 'Valeur du token fictif');
                this.$router.push({name: 'home'});
            }
        },
        created() {
            if (this.$route.query.notLogged) {
                this.doDisplayLogMessage = true;
            }
        }
    }
</script>

<style scoped>
    .page-content {
        text-align: center;
    }

    .button-connect {
        margin-top: 30px;
    }
</style>