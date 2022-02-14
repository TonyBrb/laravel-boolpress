<template>
  <article>
    <h4><a href="#">{{ post.title }}</a></h4>
    <p class="date">{{ formatDate }}</p>
    <p>{{ post.content }}</p>
  </article>
</template>

<script>
export default {
  name: 'PostItem',
  props:{
    'post': Object
  },
  computed:{
    formatDate(){
      const d = new Date(this.post.created_at);
      let day = d.getDate();
      let month = d.getMonth()+1;
      const year = d.getFullYear();

      if(day<10) day = '0'+day;
      if(month<10) month = '0'+month;

      return `${day}/${month}/${year}`;
    }
  }
}
</script>

<style lang="scss" scoped>
  article{
    margin-bottom: 30px;
    a{
      text-decoration: none;
      color: black;
      &:hover{
        color: blue;
      }
    }
    .data{
      margin: 5px 0;
      font-size: 12px;
    }
  }
</style>