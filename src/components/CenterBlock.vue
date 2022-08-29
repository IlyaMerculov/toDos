<template>
    <div v-bind:class="{frameToDoDone : visibleToDo, unvisibleFrameToDoDone: unvisibleToDo}">
        <div class="centerBlock">
            <div class="labelsToDoDone">
                <div class="blockLabel labelToDo">
                    <div class="textToDo" > TO DO </div>
                </div>
                <div class="blockLabel labelDone">
                    <div class="textDone">DONE</div>
                </div>
            </div>
            <div class="frameCard">
                <div class="toDo">
                    <div  class="card uk-card uk-card-hover uk-card-body"  v-for="todo in toDoList" :key="todo.id">
                        <div class="blockCard labelCard">
                            <div class="frameCheckTitle">
                                <a class="checked" uk-icon="check" v-on:click="doneToDo(todo.id)"></a>
                                <h3>{{todo.title}}</h3>
                            </div>
                            <button class="delToDo" type="button" uk-close v-on:click="deleteToDo(todo.id)"></button>
                        </div>
                        <div class="blockCard infoCard">
                            <p>Created by {{todo.userId}}</p>
                            <span class="uk-badge">In work</span>
                        </div>
                    </div>
                </div>
                <div class="done">
                    <div class="card uk-card uk-card-hover uk-card-body"  v-for="todo in doneToDoList" :key="todo.id">
                        <div class="blockCard labelCard">
                            <div class="frameCheckTitle doneTitle">
                                <h3>{{todo.title}}</h3>
                            </div>
                        </div>
                        <div class="blockCard infoCard">
                            <p>Created by {{todo.userId}}</p>
                            <span  class="uk-badge doneL">Done</span>
                        </div>
                    </div>
                </div>
            </div>
                
        </div>
    </div>
</template>

<script>
import {store} from '../store'
export default {
    name: 'CenterBlock',

    data(){
        return {
            taskName: '',
            creatorName: '',
            toDoDone: [ ]
        }
    },
    computed:{

        toDoList(){
            return store.state.todos.filter( el => el.completed == false)  
        },
        doneToDoList(){
            return store.state.todos.filter( el => el.completed == true)
        },
        visibleToDo(){
            return store.state.visible
        },
        unvisibleToDo(){
            return store.state.unvisible
        },
    },
    methods:{
        showToDoss(){},
        deleteToDo(id){
            
            console.log(id, this.toDoList[id])
            this.toDoList.splice(this.toDoList[id], 1)
            store.commit('deleteToDo', id)
        },
        doneToDo(id){
            console.log(id, this.toDoList[id])
            store.commit('doneToDo', id)
        },       
    },
    mounted(){
    },
    
}
</script>

<style lang="scss">
    $width: calc(100% - 320px);
    $white: #ffffff;
    $grey: #F2F4F7;
    $green: #17bf1c;

    .frameToDoDone{
        height: 100%;
        width: $width;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .unvisibleFrameToDoDone{
        display: none;
    }
   
    .centerBlock{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 0px;
        gap: 36px;
        width: 676px;
        height: 100%;
        margin: 0 0 20px 0;
    }

    .labelsToDoDone{
        width: 100%;
        height: 80px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 25px 0 25px 0;
    }

    .blockLabel{
        align-items: flex-end;
        justify-content: flex-start;
        width: 50%;
        height: 100%;
        display: flex;
    }

    .frameCard{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        overflow: auto;
    }
    
    .frameCard::-webkit-scrollbar{
        width: 3px;
        border-radius: 0.25px;
        background-color: $grey;
    }

    .frameCard::-webkit-scrollbar-track{
        background-color: $grey;
    }

    .frameCard::-webkit-scrollbar-thumb{
        background-color: $white;
    }


    .toDo{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 0px;
        gap: 24px;
        height: 100%;
        width: 320px;
        margin: 5px 0 0 2px
    }

    .done{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 0px;
        gap: 24px;
        width: 320px;
        height: 100%;
        margin: 5px 10px 2px 0;
    }

    .doneL{
        background: $green !important;
    }

    .card{
        background: $white;
        width: 320px;
        height: 97px;
        box-shadow: 0px 0.5px 2px rgba(16, 24, 40, 0.3);
        border-radius: 8px;
        padding: 10px 10px !important;
    }

    .blockCard{
        width: 100%;
        height: 50%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .checked{
        margin: 0 0 25px 0 !important;
    }

    .frameCheckTitle{
        width: auto;
        height: 100%;
        display: flex;
        justify-content: flex-start;
    }

    .frameCheckTitle h3{
        font-size: 0.8em;
        margin: 20px 0 0 5px !important;
    }

    .doneTitle h3{
        margin: 20px 0 0 25px !important;
    }

    .delToDo{
        margin: 0 0 25px 0 !important;
    }

    .blockCard p{
        margin: 20px 0 10px 25px !important;
    }

    .infoCard{
        display:flex;
        justify-content: space-between
    }

    .infoCard span{
        margin: 15px 0 0 0;
    }

    @media screen and (max-width: 1100px) and (min-width: 764px) {
        $width: calc(100% - 230px);
        .frameToDoDone{
            width: $width;
        }

        .centerBlock{
            width: 90%;
        }

        .frameCard{
            width: 100%;
            align-items: center;
        }

        .card{
            width: 220px;
            height: 250px;
        }

        .frameCheckTitle{
            width: 80%;
        }

        .chexked{
            width: 13%;
        }

        .frameCheckTitle h3{
            width: 80%;
            font-size: 0.7em;
            margin: 15px 0 0 5px !important
        }

        .delToDo{
            margin: 0 0 40px 0 !important;
        }

        .infoCard p{
            font-size: 0.9em;
        }
        
    }

    @media screen and (max-width: 764px) and (min-width: 319px) {
       .frameToDoDone{
            height: 100%;
            width: 100%;
       }

       .centerBlock{
            width: 95%;
            height: 100%;
            margin: 30px 0 20px 0;
       }

       .labelsToDoDone{
           display: none;
       }

       .frameCard{
            width: 100%;
            height: auto;
            display: flex;
            flex-direction: column;
       }

       .toDo{
            height: auto;
            width: 100%;
            margin: 0 0 20px 5px;
            align-items: center;
       }

       .done{
           align-items: center;
           margin: 0 0 20px 5px;
       }

       .card{
           width: 290px;
       }
    }
</style>