<template>
    <el-row justify="center" class="flex-center">
        <el-col :lg="8" :md="10" :sm="18" :xs="24" >
            <card
                v-for="item in difficulty ** 2"
                :key="item"
                :difficulty="difficulty"
                :cardIndex="item"
                :isHighlighted="shouldBeHighlighted(item)"
                :handleCardClick="handleCardClick"
            />
        </el-col>
    </el-row>
</template>

<script>
import Card from '@/components/Card.vue'

export default {
  name: 'card-container',
  props: ['difficulty', 'randomIndex', 'setScore'],
  components: {
    Card
  },
  data () {
    return {
      score: 0
    }
  },
  methods: {
    shouldBeHighlighted (cardIndex) {
      return this.randomIndex === cardIndex
    },
    handleCardClick (clickedIndex) {
      this.randomIndex === clickedIndex ? this.score++ : this.score--
      this.setScore(this.score)
    }
  }
}
</script>

<style lang="scss" scoped>
.el-col {
    margin-bottom: 10px;
    // &:last-child {
    //   margin-bottom: 0;
    // }
  }
.card-container {
    width: 100%;
    // display: flex;
    // flex-wrap: wrap;
    // align-content: center;
    // justify-content: center;
}
.flex-center {
  display: flex;
  justify-content: center;
}
</style>
