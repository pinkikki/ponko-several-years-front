<template>
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
        <ul v-for="error in errors">
          <li>{{error.field}}：{{error.code}}：{{error.detail}}</li>
        </ul>
        <form>
          <appinput v-model="eventId" name="eventId" placeholder="please input event id" label="event id"/>
          <div style="text-align: center">
            <button @click.prevent="fetch()" class="hollow button secondary">search</button>
          </div>
        </form>
        <table>
          <thead>
          <tr>
            <th>event_id</th>
            <th>object_name</th>
            <th>procedure</th>
            <th>scene_name</th>
          </tr>
          </thead>
          <tbody>
            <tr v-for="event in events">
              <td>{{event.eventId}}</td>
              <td>{{event.objectName}}</td>
              <td>{{event.procedure}}</td>
              <td>{{event.sceneName}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
  import axios from 'axios'

  export default {
    data() {
      return {
        events: {},
        eventId: "",
        errors: {}
      }
    },
    methods: {
      fetch() {
        axios.get('http://localhost:8090/hero/find?eventId=' + this.eventId)
          .then((response) => {
            this.events = response.data;
            this.errors = {};
          }).catch((error) => {
            this.errors = error.response.data.errors;
            this.events = {};
        });
      },
      init() {
        event = {};
        eventId = "";
        errors = {};
      }
    },
    mounted() {
      // this.fetch();
    },
    // このwatchはいらないかも
    watch: {
      '$route': 'init'
    }
  }
</script>
