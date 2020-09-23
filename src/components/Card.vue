<template>
    <el-col :span="24/difficulty" class="flex-center">
    <div @click="alertme">asdac</div>
        <el-card
            class="card"
            @click="alertme"
            :class="{ highlighted: isHighlighted }"
            :style="dimensionsStyle"
        >
        </el-card>
    </el-col>
</template>
<script>
const DIFFICULTY_MAP = {
  3: {
    height: '100px',
    width: '100px'
  },
  4: {
    height: '80px',
    width: '80px'
  },
  6: {
    height: '60px',
    width: '60px'
  }
}
export default {
  name: 'card',
  props: ['handleCardClick', 'isHighlighted', 'cardIndex', 'difficulty'],
  computed: {
    dimensionsStyle () {
      return DIFFICULTY_MAP[this.difficulty]
    }
  },
  methods: {
    alertme () {
      alert('sd')
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
    height: 100px;
    width: 100px;
    cursor: pointer;
    margin: 0px 2px;
    background-color: lightgray;
    &.highlighted {
        cursor: pointer;
        background-color: #0095da;
    }
}
.flex-center {
    display: flex;
    justify-content: center;
}
</style>
