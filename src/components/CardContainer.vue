<template>
    <div>
        <div v-for="outer in difficulty" class="main-card-container" :key="outer">
            <div v-for="inner in difficulty" class="row" :key="inner">
                <div :key="(outer + '') + (inner + '')">
                    <card
                        :isHighlighted='shouldBeHighlighted(outer-1, inner-1)'
                        :handleCardClick="() => handleCardClick(outer-1, inner-1)"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Card from '@/components/Card.vue'
export default {
    name:'card-container',
    props:['difficulty', 'highlightedRow', 'highlightedColumn', 'handleCardClick'],
    components: {
        Card
    },
    methods: {
        shouldBeHighlighted(outer, inner) {
            return this.highlightedRow === outer && this.highlightedColumn === inner
        }
    }
}
</script>


<style lang="scss" scoped>

</style>


