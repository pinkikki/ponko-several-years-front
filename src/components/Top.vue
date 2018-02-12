<template>
    <!--<p>top</p>-->
    <!--<button v-on:click="fetch">fetch</button>-->
    <!--<ul>-->
      <!--<li v-for="item in list">-->
        <!--{{item.eventId}}-->
      <!--</li>-->
    <!--</ul>-->

  <div id="top" class="cell medium-auto medium-cell-block-container">
    <div class="grid-x grid-margin-x">
      <div class="cell medium-3 medium-cell-block-y">
        <div class="callout secondary">
          <h4>menu</h4>
          <ul class="vertical menu">
            <li><a href="#">event list</a></li>
            <li><a href="#">event input</a></li>
          </ul>
        </div>
      </div>
      <div class="cell medium-9 medium-cell-block-y">
        <form action="events" method="get">
          <label>
            event id<input type="text" placeholder="please input event id"/>
          </label>
          <div style="text-align: center">
            <button type="submit" class="hollow button secondary">search</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
  import axios from 'axios'

  export default {
    data() {
      return {
        list: {}
      }
    },
    methods: {
      fetch() {
        axios.get('http://localhost:8090/hero/find')
          .then((response) => {
            this.list = response.data;
          }).catch((response) => {
          console.log('failure');
        });
      }
    },
    mounted() {
      this.fetch();
    }
  }
</script>
