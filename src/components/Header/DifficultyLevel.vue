<template>
    <div>
Select Difficulty Level :
            <button
                @click="
                    () => {
                        setDifficulty(3);
                    }
                "
            >
                Easy (3x3)
            </button>
            <button
                @click="
                    () => {
                        setDifficulty(4);
                    }
                "
            >
                Medium (4x4)
            </button>
            <button
                @click="
                    () => {
                        setDifficulty(6);
                    }
                "
            >
                Hard (6x6)
            </button>
    </div>
</template>
<script>
export default {
  name: 'difficulty-level',
  methods: {
    setDifficulty (difficulty) {
      this.$emit('on-difficulty-select', difficulty)
    }

  }
}
</script>
