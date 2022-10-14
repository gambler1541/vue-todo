//import Vue from 'vue'
import Vuex from 'vuex'

//Vue.use(Vuex);


const storage = {
    fetch() {
        const arr = [];
        if (localStorage.length > 0) {
            for (let i = 0; i < localStorage.length; i++) {
            if (localStorage.key(i) !== "loglevel:webpack-dev-server") {
                    arr.push(
                    JSON.parse(localStorage.getItem(localStorage.key(i)))
                    );
                }
            }
            return arr;
        }
    },
}

export const store = new Vuex.Store({
    // Vuex 등록
    state: {
        headerText: 'TODO it!!',
        todoItems: storage.fetch(),
    },
    mutations: {
        addOneItem(state, todoItem) {
            const obj = { complated: false, item: todoItem };
            localStorage.setItem(todoItem, JSON.stringify(obj));
            state.todoItems.push(obj);
        },
        removeOneItem(state, payload) {
        localStorage.removeItem(payload.todoItem.item);
        state.todoItems.splice(payload.index, 1);
        },
        toggleOneItem(state, payload) {
            state.todoItems[payload.index].complated = !state.todoItems[payload.index].complated;
            localStorage.removeItem(payload.item);
            localStorage.setItem(payload.item, JSON.stringify(payload));
        },
        clearAllItem(state) {
            localStorage.clear();
            state.todoItems = [];
        },                
    }
});