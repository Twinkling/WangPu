<template>
    <div class="nav">
        <router-link to="/">
            Popup
        </router-link>
        <router-link to="/about">
            About
        </router-link>
    </div>
</template>

<script>
export default {

};
</script>

<style lang="less">
.nav {
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    padding: 30px;
    width: 300px;
    height: 100vh;
    box-shadow: 0 0 1px 0 #ccc;
    a {
        font-weight: bold;
        color: #2c3e50;
        &.router-link-exact-active {
            color: #42b983;
        }
    }
}
</style>
