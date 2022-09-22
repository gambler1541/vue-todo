<template>
    <div>
        <ul>
            <li v-for="( todoItem, index ) in propsdata" v-bind:key="todoItem.item" class="shadow">
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
    props: ['propsdata'],
    methods:{
        removeTodo: function(todoItem, index){
            this.$emit('removeItem', todoItem, index);
        },
        toggleComplete: function(todoItem){
            todoItem.complated = !todoItem.complated;
            localStorage.removeItem(todoItem.item);
            localStorage.setItem(todoItem.item, JSON.stringify(todoItem)); 
        }
    },
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