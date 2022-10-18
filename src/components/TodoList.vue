<template>
    <div>
        <TransitionGroup name="list" tag="ul">
            <li v-for="( todoItem, index ) in this.storedTodoItems" v-bind:key="todoItem.item" class="shadow">
                <i class="checkBtn fa-solid fa-check" v-bind:class="{textCompleted: todoItem.complated}" v-on:click="toggleComplete({todoItem, index})"></i>
                <span v-bind:class="{textCompleted: todoItem.complated}">{{ todoItem.item }}</span>
                <span class="removeBtn" v-on:click="removeTodo({todoItem, index})">
                    <i class="fa-solid fa-trash"></i>
                </span>
            </li> 
        </TransitionGroup>
    </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
    methods:{
        ...mapMutations({
            removeTodo: 'removeOneItem',
            toggleComplete: 'toggleOneItem',
        }),

        // removeTodo: function(todoItem, index){
        //     // this.$emit('removeItem', todoItem, index);
        //     this.$store.commit('removeOneItem', {todoItem, index});
        // },
        // toggleComplete: function(todoItem, index){
        //     this.$store.commit('toggleOneItem', {todoItem,index});
        // }
    },
    computed: {
        // todoItems(){
        //     return this.$store.getters.storedTodoItems;
        // }
        ...mapGetters(['storedTodoItems']),
    }
}
</script>

<style scoped>
    ul{
        list-style-type: none;
        padding-left: 0px;
        margin-top: 0;
        text-align: left;
    }

    li {
        display: flex;
        min-height: 50px;
        height: 50px;
        line-height: 50px;
        margin: 0.5rem 0;
        padding: 0 0.9rem;
        background: white;
        border-radius: 5px;
    }

    .checkBtn {
        line-height: 45px;
        color: #62acde;
        margin-right: 5px;
    }

    .checkBtnCompleted {
        color:  #63adad
    }

    .textCompleted {
        text-decoration: line-through;
        color:#b3adad;
    }

    .removeBtn{
        margin-top: auto;
        color: #de4343;
        float:right;
    }
    /* list */
    .list-enter-active,
    .list-leave-active {
    transition: all 0.5s ease;
    }
    .list-enter-from,
    .list-leave-to {
    opacity: 0;
    transform: translateX(30px);
    }
</style>