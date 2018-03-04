<template>
  <label>
    {{label}}
    <input :type="type"
           :name="name"
           :value="value"
           :placeholder="placeholder"
           @input="$emit('input', $event.target.value)"
           @focus="$emit('focus', $event)"
           @blur="$emit('blur', $event)"
    />
  </label>
</template>

<script>
  export default {
      props: {
        value: {},
        label: {type: String},
        name: {type: String, required: true},
        type: {type: String, default: 'text'},
        placeholder: {type: String}
      }
  }
</script>

<style scoped>

</style>
