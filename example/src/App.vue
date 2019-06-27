<template>
    <div id="app">
        <!-- <Nav /> -->
        <div id="page">
            <div id="content">
                <router-view />
            </div>
        </div>
        <!-- <EditorOperator /> -->
    </div>
</template>

<script>
// import Nav from '@/components/nav';
// import EditorOperator from '@/components/editor-operator';

export default {
    name: 'App',
    components: {
        // Nav,
        // EditorOperator,
    },
    data() {
        return {
            KissyAsync: null,
        };
    },
    methods: {
        getKissyAsync() {
            return new Promise((resolve, reject) => {
                if (window.KISSY) {
                    this.KissyAsync = window.KISSY.require('wangpu/dc-async');
                    resolve(this.KissyAsync);
                } else {
                    reject(new Error('no kissy'));
                }
            });
        },
        update() {
            if (this.KissyAsync && this.KissyAsync.init) {
                this.KissyAsync.init({
                    assetsHost: window.g_config.assetsHost,
                    pageType: window.g_config.pageType,
                    lazyContainers: 'body',
                    isvParams: window.shop_config ? window.shop_config.isvStat : {},
                });
                console.log('update');
            } else {
                this.getKissyAsync().then(() => {
                    this.update();
                });
            }
        },
    },
};
</script>


<style lang="less">
* {
  box-sizing: border-box;
}
#app {
  display: flex;
  justify-content: space-between;
  height: 100vh;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#page {
    // padding: 30px;
    // overflow: auto;
}

#J_SiteFooter {
    display: none;
}
</style>
