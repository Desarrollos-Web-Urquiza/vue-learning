<template>
    <div id="MyComponent">
        <hr/>
        <h1>Este es mi componente</h1>
        <h2>{{subtitle}}</h2>
        <h4>Apellido: {{surname}}</h4>
        <h1>{{vuexTitle}}</h1>
        <h1>Hola {{username}}</h1>
        <hr/>
    </div>
</template>

<script>
import {  mapGetters, createNamespacedHelpers } from 'vuex'

const { 
  mapGetters: userMapGetter, 
  mapActions: userMapActions
} = createNamespacedHelpers('user')
export default {
  name: 'MyComponent',
  props: {
    msg: String,
  },
  data(){
    return{
      subtitle: "Soy el subtitulo de mi componente!",
      surname: "Peréz",
    }
  },
  computed: {
    ...mapGetters({
      vuexTitle: 'title'
    }),
    ...userMapGetter([
      'username'
    ])
  },
  methods: {
    ...userMapActions([
      'GET_USERNAME'
    ])
  },
  mounted() {
    this.$emit('surnameChild', this.surname);
    console.log(this.$store)
    // let i = 1
    // setInterval(()=>{
      this.GET_USERNAME(1)
      // ++i
    // }, 1000)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
