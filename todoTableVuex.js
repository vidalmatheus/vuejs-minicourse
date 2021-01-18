Vue.component('todo-table', {
    data: () => {return {};}, // must be a function for new instances
    methods: {
        remove: function(task){
            this.$store.commit('removeTask', task);
          },
    },
    computed: {
        tasks: function() {
            return this.$store.state.tasks;
        },
    },
    template:`
    <table class="table">
    <thead>
      <tr>
        <th></th>
        <th>To-do list</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <!-- iterates with a js variable -->
      <tr v-for="task in tasks">
        <!-- use v-model to capture user values -->
        <td><input type="checkbox" v-model="task.done"></td>
        <!-- v-bind:class for conditional CSS class application-->
        <td :class="{risca: task.done}">{{task.name}}</td>
        <!-- use v-on:click to execute a js method on event-->
        <td><button v-on:click="remove(task)"><span class="icon has-text-info">
            <i class="fa fa-trash-o"></i>
          </span></button></td>
      </tr>
    </tbody>
    </table>
    `, // how can I do the same, but with syntax highlighting??!!
});
