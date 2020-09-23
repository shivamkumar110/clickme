<template>
    <div id="app">
        Welcome to Card Game
        <Header
            :score="score"
            :started="started"
            :setDifficulty="setDifficulty"
        />
        <div class="cards-section" v-if="started">
            <card-container
                :difficulty="difficulty"
                :randomIndex="randomIndex"
                :setScore="setScore"
            />
        </div>
    </div>
</template>

<script>
import CardContainer from './components/CardContainer.vue'
import Header from './components/Header/GameHeader.vue'

export default {
  name: 'app',
  data () {
    return {
      timeLeft: 120,
      score: 0,
      difficulty: null,
      started: false,
      randomIndex: null
    }
  },
  provide () {
    return {
      $generateRandomIndexes: this.generateRandomIndexes,
      $setScore: this.setScore,
      $started: this.started,
      $difficulty: () => this.getDifficulty
    }
  },
  components: {
    CardContainer,
    Header
  },
  computed: {
    getDifficulty () {
      return this.difficulty
    }
  },
  methods: {
    restart () {
      window.location.reload()
    },
    setDifficulty (level) {
      this.difficulty = level
      this.startGame()
    },
    startGame () {
      this.started = true
    },
    generateRandomIndexes () {
      this.randomIndex = Math.floor(Math.random() * this.difficulty ** 2)
    },
    setScore () {
      if (this.score > localStorage.getItem('highScore')) {
        localStorage.setItem('highScore', this.score)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
.cards-section {
    display: flex;
    justify-content: center;
    // background-color: red;
}
</style>
