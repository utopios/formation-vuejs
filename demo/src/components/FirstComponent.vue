<template lang="">
    <div>
        Hello From the first component {{firstName}} {{lastName}}
    </div>
    <div>
        {{upperCase()}}
    </div>
    <div>
        {{upperCaseCache}}
    </div>
    <div>
        {{countUpdate}}
    </div>
    <div>
    <button @click="method1">test methode 1</button>
    </div>
</template>
<script>

export default {
    watch: {
        firstName(val) {
            // if(val != this.firstName) {
            //     this.firstName = val
            // }
            this.countUpdate++
        }
    },
    methods: {
      method1() {
          this.firstName += "update"
      },
      upperCase() {
          return this.firstName.toUpperCase()      
      }
    },
    computed : {
        upperCaseCache() {
          return this.firstName.toUpperCase()
        }
    },
    name : 'firstComponent',
    components: {

    },
    data() {
        return {
            firstName : 'abadi',
            lastName : 'ihab',
            countUpdate : 0,
        }
    },
}
</script>
<style lang="">
    
</style>