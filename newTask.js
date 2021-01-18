Vue.component('new-task', {
    data: () => {
        return {
            newTask: '',
        };
    },
    methods: {
        add: function() {
            this.$store.commit('addTask', this.newTask);
        }
    },
    template:`
    <div class="field">
        <div class="control">
        <!-- v-on:keyup uses method add() without parameter. v-model has the parameter -->
        <input class="input" type="text" placeholder="Name" v-model="newTask" @keyup.enter="add()">
        </div>
    </div>
    `
});
