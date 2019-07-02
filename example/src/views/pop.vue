<template>
    <div
        class="tool-editor"
        v-html="html"
    />
</template>

<script>
// import Widget from '@/components/widget';
import { generateWrapCode } from '@/services/generator-code';

export const defaultConfig = {
    columns: [3], // 提供多个选项，则表示可以平分宽度，每项可以单独设置宽度，并自适应其他参数(字体大小, 高度)，默认 [1]
    title: '', // 标题, 为空则不展示标题栏，标题栏包含副标题
    subTitle: '', // 副标题
    total: 5, // 产品总个数, 循环 content
    column: 3, // 最终结果是多少列
    configs: {
        _3: [{
            dom: `<div style="width: 380px;">
                    <div style="position: relative;width: 380px;height: 380px;overflow: hidden;">
                        <ul class="content" style="width: 10000px;height: 380px;">
                            <li class="" data-count style="float: left;">
                                <a href="" class="" data-link style="display: block;width: 380px;height: 380px;">
                                    <div style="float: left;height: 340px;">
                                        <img data-img src="https://img.alicdn.com/imgextra/i1/2067408037/O1CN01mnfnTx29EzijYD7Vn_!!2067408037.jpg" style="width: 380px;height: 380px;" alt="">
                                    </div>
                                    <div style="float: left;padding: 0 10px;width: 380px;height: 40px;line-height: 40px;background-color: rgba(187, 62, 74, .7);font-size: 14px;color: #fff;box-sizing: border-box;">
                                        <span style="float: left;">RMB</span>
                                        <span data-price style="float: left;padding: 0 10px;">149</span>
                                        <span data-buyNow style="float: right;">立即购买</span>
                                    </div>
                                </a>
                            </li>
                            <li class="" data-count style="float: left;">
                                <a href="" class="" data-link style="display: block;width: 380px;height: 380px;">
                                    <div style="float: left;height: 340px;">
                                        <img data-img src="https://img.alicdn.com/imgextra/i1/2067408037/O1CN01mnfnTx29EzijYD7Vn_!!2067408037.jpg" style="width: 380px;height: 380px;" alt="">
                                    </div>
                                    <div style="float: left;padding: 0 10px;width: 380px;height: 40px;line-height: 40px;background-color: rgba(187, 62, 74, .7);font-size: 14px;color: #fff;box-sizing: border-box;">
                                        <span style="float: left;">RMB</span>
                                        <span data-price style="float: left;padding: 0 10px;">149</span>
                                        <span data-buyNow style="float: right;">立即购买</span>
                                    </div>
                                </a>
                            </li>
                            <li class="" data-count style="float: left;">
                                <a href="" class="" data-link style="display: block;width: 380px;height: 380px;">
                                    <div style="float: left;height: 340px;">
                                        <img data-img src="https://img.alicdn.com/imgextra/i1/2067408037/O1CN01mnfnTx29EzijYD7Vn_!!2067408037.jpg" style="width: 380px;height: 380px;" alt="">
                                    </div>
                                    <div style="float: left;padding: 0 10px;width: 380px;height: 40px;line-height: 40px;background-color: rgba(187, 62, 74, .7);font-size: 14px;color: #fff;box-sizing: border-box;">
                                        <span style="float: left;">RMB</span>
                                        <span data-price style="float: left;padding: 0 10px;">149</span>
                                        <span data-buyNow style="float: right;">立即购买</span>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <ul class="nav" style="margin-top: 10px;overflow: hidden">
                        <li class="" data-nav style="float: left;">
                            <a href="" class="" data-link style="display: block;width: 120px;height: 120px;">
                                <img src="https://img.alicdn.com/imgextra/i1/2067408037/O1CN01mnfnTx29EzijYD7Vn_!!2067408037.jpg" style="width: 120px;height: 120px;" alt="">
                            </a>
                        </li>
                        <li class="" data-nav style="float: left;margin-left: 10px;">
                            <a href="" class="" data-link style="display: block;width: 120px;height: 120px;">
                                <img src="https://img.alicdn.com/imgextra/i1/2067408037/O1CN01mnfnTx29EzijYD7Vn_!!2067408037.jpg" style="width: 120px;height: 120px;" alt="">
                            </a>
                        </li>
                        <li class="" data-nav style="float: left;margin-left: 10px;">
                            <a href="" class="" data-link style="display: block;width: 120px;height: 120px;">
                                <img src="https://img.alicdn.com/imgextra/i1/2067408037/O1CN01mnfnTx29EzijYD7Vn_!!2067408037.jpg" style="width: 120px;height: 120px;" alt="">
                            </a>
                        </li>
                    </ul>
                </div>`,
            widgetType: 'Carousel',
            category: '',
            space: {
                top: 10,
                right: 30,
            }, // 间隔
            widgetConfig: {
                trigger: '.trigger',
                align: {
                    node: '.trigger',
                    points: ['cc', 'cc'],
                    offset: [0, 0],
                },
            },
            isFullPage: false, // Carousel、Slide 才能够选择是否全屏
            // 配置每个产品信息, 存在字段则编辑器中会出现相应配置项, 不需要配置的字段需将其置为 null, 对应 dom 结构上需有 data-* 的属性
            // 例如：对于要填入 title 的 dom 结构，需要在其 dom 上存在 data-title 属性
            item: [{
                title: '', // 产品名称
                img: {
                    width: '',
                    height: '',
                    url: '',
                    navWidth: '',
                    navHeight: '',
                }, // 产品图片
                desc: '', // 产品描述
                detail: '', // 产品详情
                price: '', // 产品价格
                buyNow: '立即购买', // 立即购买按钮的文案
                url: '', // 产品链接
                mask: { // 蒙版配置
                    width: 380,
                    height: 380,
                    // url: 'https://gd2.alicdn.com/imgextra/i1/848470502/O1CN011FZxH8oC9i9S88b_!!848470502.jpg_430x430.jpg', // 蒙版图案
                    url: 'https://img.alicdn.com/imgextra/i3/2067408037/O1CN01VSAfr029Ezifx17Tr_!!2067408037.gif',
                    style: 'background-color: rgba(255, 255, 255, .3)', // 蒙版样式
                    type: 'effect', // picture: 图片, effect: 动效 默认 effect, picture 会多增加 background-size： width height
                },
            }],
        }],
    },
};

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
