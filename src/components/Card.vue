<template>
  <div class="card-container">
      <div class="card" @click="handleCardClick" :class="{ highlighted: isHighlighted }">
      </div>
  </div>
</template>
<script>
export default {
  name: 'card',
  props: ['handleCardClick', 'isHighlighted']
}
</script>

<style lang="scss" scoped>
    .card {
        height: 80px;
        width: 80px;
        cursor: pointer;
        background-color: lightgray;
        margin:10px;
        &.highlighted {
            background-color:  #0095da;
        }
    }
</style>

