<template>
    <div class='task'>
        <div class="description_text"> Это туду лист сделан в vue приложении </div>
        <hr>
        <router-view/>
        <div class="blcok-input">
            <input type="text" name="" id="" v-model='task'>
            <button @click='addTask'>Добавить</button>
        </div>
        <select v-model='select'>
            <option value="all">Все</option>
            <option value="completed">Отмеченные</option>
            <option value="not-completed">Не отмеченые</option>
        </select>
        <ul>
            <loader
            v-if='loader'
            />
            <task
            v-else-if='filterToDo.length > 0'
            @delete= "deleteTask"
            v-for='element in filterToDo'
             :words ="element"
            />
            <p v-else>Все задачи выполненны!</p>
        </ul>
        
    </div>
    
</template>

<script scope>
    import task from '@/components/task.vue'
    import loader from '@/components/loader.vue'
    export default{
        components: {
            task,
            loader
        },
        data(){
            return{
                word: [],
                task:null,
                loader: true,
                select: 'all'
            }
            
        },
        mounted(){
            fetch('https://jsonplaceholder.typicode.com/todos')
            .then((response)=> response.json())
            .then((data)=>{
                this.word = data.splice(0, 5)
                console.log(this.word)
                this.loader = false
            }) 
            
        },
        computed: {
            filterToDo(){
                if(this.select == 'all'){
                    return this.word
                }
                if(this.select == 'completed'){
                    return this.word.filter((element)=>{ return element.completed})
                }
                if(this.select == 'not-completed'){
                    return this.word.filter((element)=>{ return !element.completed})
                }

            }
        },
        methods: {
            deleteTask(id){
                this.word = this.word.filter((element)=>{
                    return element.id != id
                })
            },
            addTask(){
                this.word.unshift({id: this.word.length, title: this.task, completed: false})
                this.task = ''
            }
        },
    }
</script>

<style >
    .task{
        margin: 0 auto;
    }
    ul{
        margin: 0 auto;
        width: 400px; 
    }

    .blcok-input{
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 50px 0;
    }
    input{
        width: 200px;
        height: 25px;
        font-size: 1.2em;
        color: rgb(77, 77, 77);
    }
    button{
        margin-left: 20px;
    }
</style>