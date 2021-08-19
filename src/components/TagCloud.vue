<template>
  <div class="tag-cloud">
    <h3>Tags</h3>
    <div v-for="tag in tags">
      <router-link :to="{name: 'Tag', params:{tag: tag}}">#{{tag}}</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "TagCloud",
  props: ['tags']
}
</script>

<style scoped>
.tag-cloud{
  padding: 10px;
}
.tag-cloud h3{
  border-bottom: 1px solid #eee;
  padding: 16px 8px;
  color: #444;
}
.tag-cloud div{
  display: inline-block;
  padding: 10px;
}
.tag-cloud a{
  color: #ff8800;
  text-decoration: none;
}
.tag-cloud a.router-link-active{
  color: #ff8800;
  font-weight: bold;
}
</style>