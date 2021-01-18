<template>
  <div class="hello">
    <!-- dado(msg) desceu -->
    <h1>Da raiz, o dado desceu como propriedade para a componente HelloWorld: '{{ msg }}' </h1>
    <h2 class="my-comment" style="border: solid;">Da componente HelloWorld: '{{ dataMsg }}'</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dataMsg: 'Vue ate que e dahora!',
      v1: true,
    };
  },
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  methods: {
  },
};
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
.my-comment {
  color: cadetblue;
  font-weight: bold;
}
</style>
