const store = new Vuex.Store({
    state: {
        tasks: [
            {
              name: 'Lavar a roupa',
              done: false,
            },
            {
              name: 'Trocar a fralda do neném',
              done: true,
            },
            {
              name: 'Passear com o cachorro',
              done: false,
            },
        ],
    },
    mutations: {
        addTask: function(state, task) {
            state.tasks.push({name: task, done: false});
        },
        removeTask: function(state, task) {
            let idx = state.tasks.indexOf(task);
            state.tasks.splice(idx, 1);
        },
    },
});

window.STORE = store;
