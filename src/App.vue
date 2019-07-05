<template>
  <div id="app">
      Welcome to Card Game
      <div class="header-section">
          <div class="timer" v-if="started">
              {{getTimer}}
          </div>
        <div class="score">
            Current Score: {{score}}
            High Score: {{getHighScore}}
        </div>
        <button @click="restart">
            Restart
        </button>
      </div>


      <div class="menu" v-show="difficultyNotSelected">
          Select Difficulty Level :
          <button @click="() => {setDifficulty(3)}"> Easy (3x3)</button>
          <button @click="() => {setDifficulty(4)}"> Medium (4x4)</button>
          <button @click="() => {setDifficulty(6)}"> Hard (6x6)</button>
      </div>

      <div class="cards-section" v-if="difficulty">
          <card-container
          :difficulty="difficulty"
          :highlightedRow="inner"
          :handleCardClick="handleCardClick"
          :highlightedColumn="outer"
          />
      </div>
  </div>
</template>

<script>
import CardContainer from './components/CardContainer.vue';

export default {
  name: 'app',
  data() {
      return  {
          timeLeft: 120,
          score: 0,
          difficultyNotSelected: true,
          difficulty: null,
          started : false,
          inner: null,
          outer: null
      }
  },
  mounted() {

  },
  components: {
    CardContainer,
  },
  methods: {
      restart() {
        location.reload()
      },
      setDifficulty(level) {
          this.difficulty = level,
          this.difficultyNotSelected = false
          this.startGame()
      },
      handleCardClick(row, column) {
          if(row === this.inner && column === this.outer) {
              this.score += 1
          } else {
              this.score -= 1
          }
      },
      startGame() {
         this.started = true
      },
      isHighlighted(inner, outer) {
          return false
      },
      generateRandomIndexes() {
        this.inner = Math.floor(Math.random() * this.difficulty)
        this.outer = Math.floor(Math.random() * this.difficulty)
      },
      setScore() {
          if(this.score > localStorage.getItem('highScore')) {
              localStorage.setItem('highScore', this.score)
          }
      }
  },
  computed: {
      getTimer: function () {
          if (this.started) {
            self = this
            setTimeout(()=> {
                if(self.timeLeft > 0) {
                    self.timeLeft-=1
                    self.generateRandomIndexes()
                } else {
                    self.setScore()
                }
            }, 1000)
            return self.timeLeft
          }

      },
      getHighScore: function() {
          if(localStorage.getItem('highScore')) {
              return localStorage.getItem('highScore')
          } else {
            localStorage.setItem('highScore', 0)
          }
          return localStorage.getItem('highScore')
      }
  },
};
</script>

<style lang="scss" >
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.cards-section {
    text-align: center;
    .main-card-container {
        width: 100%;
        .row {
        display: inline-block;

    }
    }

}
</style>
