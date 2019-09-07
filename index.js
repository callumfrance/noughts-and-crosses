Vue.component('one-cell', {
    data: function() {
        return {
            gridCells: 9,
            currIdx: 0,
            states: ['', 'X', 'O'],
        }
    },
    methods: {
        computedText: function() {
            if(this.currIdx < this.states.length - 1){
                this.currIdx = this.currIdx + 1;
            } else {
                this.currIdx = 0;
            }
            return(this.states[this.currIdx]);
        }
    },
    template: `<div class="gridCell"
            v-on:click="computedText(currIdx)"
            v-bind:class="states[currIdx]">
            <p>
                {{ states[currIdx] }}
            </p>
        </div>`
});

var gridArena = new Vue({
    el: '#gridArena',
});
