<template>
    <!-- <div class="trigger">
        <Widget
            widget-type="Popup"
            :widget-config="getWidgetConfig"
        >
            <div style="width: 300px; height: 300px;background: url(https://img.alicdn.com/imgextra/i2/2067408037/O1CN01eiCelp29EzidXw0Rp_!!2067408037.gif) center;" />
        </Widget>
        <img
            src="https://img.alicdn.com/imgextra/i2/2067408037/O1CN01Wva90N29EzicaEt1P_!!2067408037.jpg"
            class="img"
            style="width: 300px;height: 300px"
        >
    </div> -->
    <div
        class="tool-editor"
        v-html="html"
    >
        <!-- d -->
    </div>
</template>

<script>
// import Widget from '@/components/widget';
import { generateWrapCode } from '@/services/generator-code';

export default {
    name: 'Popup',
    components: {
        // Widget,
    },
    data() {
        return {
            KissyAsync: null,
            widgetConfig: {
                trigger: '.trigger',
                align: {
                    node: '.trigger',
                    points: ['cc', 'cc'],
                    offset: [0, 0],
                },
            },
            html: '',
        };
    },
    computed: {
        getWidgetConfig() {
            return JSON.stringify(this.widgetConfig);
        },
    },
    mounted() {
        this.html = generateWrapCode();
        this.update();
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
                    setTimeout(() => {
                        this.update();
                    }, 500);
                });
            }
        },
    },
};
</script>

<style lang='less'>
.tool-editor {
    width: 1920px;
    height: 200px;
    background-color: #ccc;
}
</style>
