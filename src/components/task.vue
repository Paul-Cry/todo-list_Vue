<template>
        <div class='row'>
            <input type="checkbox" name="check"  @click='words.completed = !words.completed'id="">
            <li :class='{"active-Check": words.completed}'>{{words.title | toUpper}}</li>
            <img src="../assets/close.png" alt="" @click="$emit('delete', words.id)">
        </div>
</template>


<script>
    export default{
        props: ['words'],
        // filters: {
        //     toUpper(value){
        //         console.log(value)
        //         return value.toUpperCase()
        //     }
        // }
    }
</script>


<style scoped>
    input{
        width: 20px;
        height: 20px;
    }
   .row{
       display: flex;
       height: 50px;
       align-items: center;
       width: 100%;
       position: relative;
   }
   li{
       list-style: none;
       justify-self: start;
       font-size: 1.2em;
       margin-left: 2%;
   }
   img{
       width: 20px;
       height: auto;
       position: absolute;
       right: 0;
   }

   .active-Check{
       text-decoration: line-through;
   }
</style>
