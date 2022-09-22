<template>
    <div>
        <ul>
            <li v-for="( todoItem, index ) in todoItems" v-bind:key="todoItem.item" class="shadow">
                <i class="checkBtn fa-solid fa-check" v-bind:class="{textCompleted: todoItem.complated}" v-on:click="toggleComplete(todoItem, index)"></i>
                <span v-bind:class="{textCompleted: todoItem.complated}">{{ todoItem.item }}</span>
                <span class="removeBtn" v-on:click="removeTodo(todoItem, index)">
                    <i class="fa-solid fa-trash"></i>
                </span>
            </li>
            
        </ul>
    </div>
</template>

<script>
export default {
    data: function(){
        return {
            todoItems: [],
        }
    },
    methods:{
        removeTodo: function(todoItem, index){
            localStorage.removeItem(todoItem.item);
            this.todoItems.splice(index, 1);
        },
        toggleComplete: function(todoItem){
            todoItem.complated = !todoItem.complated;
            localStorage.removeItem(todoItem.item);
            localStorage.setItem(todoItem.item, JSON.stringify(todoItem)); 
        }
    },
    created: function(){
        if(localStorage.length > 0){
            for(let i = 0;i < localStorage.length; i++){
                if(localStorage.key(i) !== 'loglevel:webpack-dev-server'){
                    this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
                }
            }
        }
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

</style>