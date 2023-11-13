<template>
    <div id="app">
        <div>333</div>
    </div>
</template>

<script>
export default {
    name: 'App',
    data() {
        return {}
    },
    methods: {
        handleScroll() {
            const scrollTop = getScrollTop()
            this.$store.commit('app/SET_SCROLLTOP', scrollTop)
            // console.log('--handleScroll---:', scrollTop)
        },
    },
    created() {
        // console.log("router",window.location.pathname,this.$route);
        // console.log("router",window.location.pathname,this.$route.meta.keepAlive);
        // this.$router.push(window.location.pathname)
    },
    mounted() {
        addEvent(window, 'scroll', this.handleScroll);
    },
}
</script>

<style lang="css">
#app {
    height: 100%;
}
</style>
