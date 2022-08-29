<template>
    <div class="frameLeftBlock">
        <div class="leftBlock">
            <div class="block company">
                <img src="../assets/Infotex.png" alt="" class="companyLable">
            </div>
            <div class="frame">
                <div class="block companyTasks">
                    <div class="companyTasksBlock">
                        <div class="icoText">
                            <img src="../assets/Icon.png" alt="" class="taskLable">
                            <div class="taskName uk-text-bold"  v-on:click="showToDos" title="Show tasks">Tasks</div>
                        </div>
                        <div class="numDoDone">
                            <a v-on:click="startAdd" class="add" uk-icon="plus" title="Add Tasks"></a>
                            <div class="numTasks uk-text-normal" title="In work">{{numToDoList}}</div>
                            <div class="numTasks uk-text-normal" title="Done">{{numDoneToDoList}}</div>
                        </div>
                        
                    </div>
                    
                </div>
                <div v-bind:class="{unvisibleFrameAdd: unvisibleFrameAdd ,frameAdd: frameAdd}">
                    <div class="firstBlockClose">
                        <button class="closeForm" type="button" uk-close v-on:click="closeAdd"></button>
                    </div>
                    <div class="secondBlock">
                        <div class="titleBlock uk-text-bold">Task</div>
                        <input v-model="task" class="uk-input uk-form-width-medium uk-form-small" type="text" placeholder="What you want to do">
                    </div>
                    <div class="secondBlock">
                        <div class="titleBlock uk-text-bold">User</div>
                        <input v-model="userName" class="uk-input uk-form-width-medium uk-form-small" type="text" placeholder="Your user name">
                    </div>
                    <div class="secondBlock">
                        <button v-on:click="addToDos" class="addButon uk-button uk-button-small uk-width-1-1">Add task</button>
                    </div>
                </div>
            </div>
            <div class="block sortFilter">
                <a v-on:click="sortByUserIdDownToUpper" uk-icon="arrow-up" title="Sort by Id down to up"></a>
                <a v-on:click="sortByUserIdUpperToDown"  uk-icon="arrow-down" title="Sort by Id up to down"></a>
                <a v-on:click="sortByUserName"  uk-icon="users" title="Sort by User name"></a>
            </div>
        </div>
    </div>
</template>

<script>
import {store} from '../store'
// console.log()

export default {
    name: 'LeftBlock',
    data() {
        return{
            task: '',
            userName: '',
            unvisibleFrameAdd: true,
            frameAdd: false,
        }
    },
    computed: {
        numToDos(){
           return  store.state.todos.length
        },
        numToDoList(){
                return store.state.todos.filter( el => el.completed == false).length  
        },
        numDoneToDoList(){
                return store.state.todos.filter( el => el.completed == true).length
        }
    },
    methods:{
        showToDos(){
            store.commit('visibleToDos')
            store.commit('unvisibleToDos')
        },
        startAdd(){
            this.unvisibleFrameAdd = false
            this.frameAdd = true
        },
        closeAdd(){
            this.frameAdd = false
            this.unvisibleFrameAdd = true
        },
        addToDos(){
            console.log(this.task, this.userName)
            if(this.task != '' && this.userName != ''){
                let toDo = {completed: false, id: this.numToDos, title: this.task, userId: this.userName }
                store.commit('addToDo', toDo)
            }
        },
        sortByUserIdDownToUpper(){
            store.commit('sortByIdDownToUp')
        },
        sortByUserIdUpperToDown(){
            store.commit('sortByIdUpToDown')
        },
        sortByUserName(){
            store.commit('sortByUserName')
        },
    },
    mounted(){}
    
}
</script>

<style lang="scss">
    $white: #FFFFFF;
    $grey: #F2F4F7;
    $darkGrey: #1D2939;
    $green: #17bf1c;
    $blue: #1e87f0;

    .frameLeftBlock{
        height: 100%;
        width: 320px;
    }

    .leftBlock{
        height: 100%;
        width: 320px;
        left: 0;
        top: 0;
        background: $white;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 24px 10px 16px;
        gap: 32px;
    }

    .block{
        box-sizing: border-box;
        width: 272px;
        height: 48px;
        display: flex;
        padding: 12px 8px 12px 6px;
    }

    .company{
        align-items: center;
        justify-content: center;
    }

    .companyLable{
        height: 24px;
        width: 100px;
    }

    .frame{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        padding: 0px;
        gap: 8px;
        width: 272px;
        height: 75%;
    }

    .companyTasksBlock{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 0px;
        gap: 62px;
        width: 258px;
        height: 24px;
    }

    .icoText{
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 0px;
        gap: 8px;
        width: 73px;
        height: 24px;
    }

    .companyTasks{
        background: $grey;
        border-radius: 8px;
        align-items: flex-start;
        flex-direction: column;
        gap: 10px;
    }

    .taskLable{
        width: 16px;
        height: 16px;
        margin: 0 10px 0 10px;
    }

    .taskName{
        width: 41px;
        height: 19px;
        font-size: 16px;
        line-height: 19px;
        letter-spacing: -0.03em;
        color: $darkGrey;
        margin: 0 0 2px 0;
        cursor: pointer;
    }
    
    .taskName:hover{
        transform: scale( 0.9, 0.9)
    }

    .numDoDone{
        display: flex;
        height: 100%;
        width: auto;
        align-items: center;
    }

    .numTasks{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 0px;
        gap: 10px;
        width: 20px;
        height: 20px;
        border-radius: 6px;
        color: $white;
        font-size: 12px;
        margin: 1px 5px 0 0;
    }
    
    .numDoDone > :nth-child(1){
        width: 19px;
        height: 19px;
        margin: 2px 5px 0 0;
    }

    .numDoDone > :nth-child(2){
        background: $blue;
    }

    .numDoDone > :nth-child(3){
        background: $green;
    }

    .frameAdd{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        width: 272px;
        height: 150px;
        background: #F2F4F7;
        border-radius: 10px;
    }

    .unvisibleFrameAdd{
        display: none;
    }

    .firstBlockClose{
        display: flex;
        align-items: center;
        justify-content: flex-end;
        width: 100%;
        height: 20%;
    }

    .firstBlockClose > :first-child{
        margin: 10px 10px 0 0;
    }

    .secondBlock{
        width: 96%;
        height: 40%;
        display: flex;
        align-items: center;
        justify-content: space-around;
        color: $darkGrey;
    }

    .addButon{
        background: $green !important;
        color: $white !important;
        border-radius: 5px !important;
        margin: 0 5px 0 5px !important;
    }

    .sortFilter{
        display: flex;
        align-items: center;
        justify-content: space-evenly;
    }

    @media screen and (max-width: 1100px) and (min-width: 764px) {
        .frameLeftBlock{
            width: 270px;
        }

        .leftBlock{
            width: 230px;
        }

        .frame{
            width: 230px;
            height: 72%;
        }

        .block{
            width: 230px
        }

        .companyTasksBlock{
            width: 220px;
        }

        .taskLable{
            width: 13px;
            height: 13px;
        }

        .taskName{
            font-size: 13px;
        }

        .numDoDone > :nth-child(1){
            width: 13px;
            height: 13px;
        }

        .numTasks{
            width: 14px;
            height: 14px;
            border-radius: 3px;
            font-size: 9px
        }

        .frameAdd{
            width: 230px;
        }

        .titleBlock{
            font-size: 13px;
        }

        .uk-form-width-medium{
            width: 150px;
        }

    }

    @media screen and (max-width: 764px) and (min-width: 319px) {
        .frameLeftBlock{
            height: auto;
            width: 100%;
        }
        .leftBlock{
            height: auto;
            width: 100%;
            padding: 0;
        }
    }
</style>