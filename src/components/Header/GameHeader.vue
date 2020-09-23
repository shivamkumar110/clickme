<template>
    <div>
        <div class="score">
            Current Score: {{ score }} High Score: {{ highScore }}
        </div>
        <Timer v-if="started"/>
        <DifficultyLevel @on-difficulty-select="setDifficulty"/>
    </div>
</template>

<script>
import Timer from './Timer.vue'
import DifficultyLevel from './DifficultyLevel.vue'

export default {
  name: 'game-header',
  props: ['score', 'started', 'setDifficulty'],
  components: {
    Timer,
    DifficultyLevel
  },
  computed: {
    highScore () {
      if (localStorage.getItem('highScore')) {
        return localStorage.getItem('highScore')
      }
      localStorage.setItem('highScore', 0)

      return localStorage.getItem('highScore')
    }
  }
}
</script>
