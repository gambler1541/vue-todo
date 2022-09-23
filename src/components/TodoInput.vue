<template>
    <div class="inputBox shadow">
        <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo">
        <span class="addContainer"  v-on:click="addTodo">
            <i class="fa-solid fa-plus addBtn"></i>
        </span>
        <!-- use the modal component, pass in the prop -->
        <Teleport to="body">
            <TodoModal :show="showModal" @close="showModal = false">
                <template #header>
                    <h3>이런?</h3>
                </template>
                <template #body>
                    <p>내용을 입력해주세요</p>
                </template>
            </TodoModal>
        </Teleport>
    </div>
</template>

<script>
import TodoModal from './common/TodoModal.vue'

export default {
    data: function() {
        return {
            newTodoItem: "",
            showModal: false,
        }
    },
    methods: {
        addTodo: function(){
            if(this.newTodoItem !== ''){
                this.$emit('addTodoItem', this.newTodoItem);
                this.clearInput();
            } else {
                this.showModal = true;
            }
        },
        clearInput: function(){
            this.newTodoItem = '';
        }
    },
    components: {
        TodoModal,
    }
}
</script>

<style scoped>
    input:focus{
        outline: none;
    }

    .inputBox{
        background: white;
        height: 50px;
        line-height: 50px;
        border-radius: 5px;
    }
    .inputBox input{
        border-style: none;
        font-size: 0.9rem;
    }
    .addContainer{
        float: right;
        background: linear-gradient(to right, #6478f8, #8763FB);
        display: block;
        width: 3rem;
        border-radius: 0 5px 5px 0;
    }

    .addBtn{
        color: white;
        vertical-align: middle;
    }
</style>    