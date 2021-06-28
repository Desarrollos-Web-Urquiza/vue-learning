<template>
  <div class="hello">
    <h2>{{texto}}</h2>   
    <MyComponent @surnameChild="surnameChild= $event" msg="Welcome to Your Vue.js Aplication"/>
    {{surnameChild}}
  </div>
</template>

<script>
import MyComponent from './myComponent.vue'
export default {
  name: 'HelloWorld',
  components: {
    MyComponent
  },
  props: {
    msg: String
  },
  data(){
    return{
      texto: "Hola mundo desde componente!",
      surnameChild: 'No llega data desde el hijo'
    }
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
@import '../assets/css/styles.css';
</style>
