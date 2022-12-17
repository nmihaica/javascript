<template>
  <div class="block text-right">
    <div class="text-3xl font-bold">{{ clock }}</div>
    <div class="text-sm text-gray-600"></div>
  </div>
</template>
<script>
/* clock in vue 2 with every second update */
export default {
  beforeDestroy () {
    // prevent memory leak
    clearInterval(this.interval)
  },
  created () {
    // update the time every second
    this.interval = setInterval(() => {
    // concise way to format time according to system locale.
    // In my case this returns "3:48:00 am"
      this.clock = Intl.DateTimeFormat(navigator.language, {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
      }).format()
    }, 1000)
  },
  data () {
    return {
      interval: null,
      clock: null
    }
  }
}
</script>
