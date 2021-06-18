<template>
  <div>
    <table class="table table-striped">
      <tr>
        <th>#</th>
        <th>Nom</th>
        <th>Description</th>
        <th>Actions</th>
      </tr>
      <tr></tr>

      <movie
        v-for="(movie, indexMovie) in movies"
        :key="movie.id"
        :id="movie.id"
        :editing="movie.editing"
        :title="movie.title"
        :description="movie.description"
        @deleteMovie="deleteMovie(indexMovie)"
        @editMovie="editMovie(movie)"
        @stopEditMovie="stopEdit(movie, indexMovie)"
        @updateMovie="updateMovie($event, indexMovie)"
      ></movie>
    </table>

    <p class="lead">
      <span>{{ lengthMovies }}</span>

      <button @click="createMovie()" class="btn btn-primary">
        Ajouter un nouveau film
      </button>
    </p>
  </div>
</template>

<script>
import moviesService from "../services/moviesService";
import Movie from "./Movie.vue";

export default {
  components: { Movie },
  data() {
    return {
      movies: moviesService.loadMovies(),
      movie: {},
    };
  },
  methods: {
    createMovie: function () {
      var newMovie = {
        title: "",
        description: "",
        note: 0,
        editing: true,
        isNew: true,
      };
      this.movies.push(newMovie);
    },
    deleteMovie: function (indexMovie) {
      this.movies.splice(indexMovie, 1);
    },
    editMovie: function (movie) {
      movie.editing = true;
    },
    stopEdit: function (movie, index) {
      if (movie.isNew) {
        this.deleteMovie(index);
      } else {
        movie.editing = false;
      }
    },
    updateMovie: function (newMovie, index) {
      newMovie.editing = false;

      this.movies[index] = newMovie;
      // La ligne ci-dessous ne fonctionne pas en VueJS ! (Cf chapitre 9.Comprendre le binding)
      //this.movies[index] = newMovie;
      // On préférera cette écriture pour enclencher le réaffichage
      //Vue.set(this.movies, index, newMovie);
    },
  },
  computed: {
    lengthMovies: function () {
      const nb = +this.movies.length;

      if (nb === 1) {
        return "Il n'y a qu'un seul film";
      } else if (nb > 1) {
        return `Il y a ${nb} films au total`;
      } else {
        return "Aucun film pour le moment";
      }
    },
  },
};
</script>

<style>
</style>
