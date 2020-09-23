<template>
    <div class="header-section">
        <div class="timer">
            {{ timeLeft }}
        </div>
    </div>
</template>

<script>
export default {
  name: 'timer',
  inject: ['$generateRandomIndexes', '$setScore', '$difficulty'],
  created () {
    this.startTimer()
  },
  data () {
    return {
      timeLeft: 120
    }
  },
  methods: {
    startTimer () {
      const self = this
      setInterval(() => {
        if (self.timeLeft > 0) {
          self.timeLeft -= 1
          self.$generateRandomIndexes()
        } else {
          self.$setScore()
        }
      }, 1000 * (3))
    }
  }
}
</script>
