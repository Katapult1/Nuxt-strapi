<template>
    <h1>Apollo graphql</h1>
    div v-for="message in messages" 
    
    
    <div v-for="message in messages" 
    v-bind:key="message.id">
      {{ message.text }}
  
    </div>
  </template>
  
  <script>
  import { greetingsQuery } from '@/graphql/query'
  
  export default {
    data() {
      return {
        messages: [],
      }
    },
    apollo:{
      messages:{
        prefetch: true,
        query: greetingsQuery,
      },
    },
  }
  </script>