<template>
  <div id="app">
    <headeritem></headeritem>
    <router-view/>
    <div class="cell shrink footer">
      copylight 2017
    </div>
  </div>
</template>

<script>
import headeritem from './components/Header'

export default {
  name: 'App',
  components: {
    headeritem
  }
}
</script>

<style>
</style>
