<template>
  <header>
    <nav class="container">
      <ul>
        <li><a href="#">Home</a></li>
        <li><a class="active" href="#">Blog</a></li>
        <li><a href="#">Chi siamo</a></li>
        <li><a href="#">Contatti</a></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="scss" scoped>
  header{
    background-color: grey;
    height: 50px;
    line-height: 50px;
    text-align: center;
    ul{
      list-style: none;
      li{
        display: inline-block;
        margin: 0 20px;
        a{
          text-decoration: none;
          color:white;
          &:hover{
            text-decoration: underline;
          }
          &.active{
            color: yellow;
          }
   }
      }
    }
  }
</style>