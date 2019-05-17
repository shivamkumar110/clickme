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

      <div class="cards-section">
          <div v-for="outer in difficulty" class="main-card-container">
              <div v-for="inner in difficulty" class="row">
                  <div :key="(outer + '') + (inner + '')">
                        <card
                        :isHighlighted= "isHighlighted(outer, inner)"
                        :handleCardClick="handleCardClick"/>
                    </div>

              </div>
          </div>
      </div>
  </div>
</template>

<script>
import Card from './components/Card.vue';

export default {
  name: 'app',
  data() {
      return  {
          timeLeft: 120,
          score: 0,
          difficultyNotSelected: true,
          difficulty: null,
          started : false
      }
  },
  mounted() {

  },
  components: {
    Card,
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
      handleCardClick() {
          this.score += 1
      },
      startGame() {
         this.started = true
      },
      isHighlighted(inner, outer) {
          return false
      }
  },
  computed: {
      getTimer: function () {
          if (this.started) {
            self = this
            setTimeout(()=> {
                self.timeLeft-=1
            }, 1000)

            let inner = Math.floor(Math.random() * this.difficulty)
            let outer = Math.floor(Math.random() * this.difficulty)
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
