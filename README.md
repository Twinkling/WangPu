# 淘宝 Widget 组件示例

- 限制模板实际宽度 950px, 淘宝店铺装修自定义区域宽度只有 950px, 模板制作 1920px 需向左平移 (1920 - 950) / 2 = 485px
- 限制模板主体宽度 1200px
- 限制模板宽度 1920px
- 制作模板时也需要给出实际高度
- 是否可以均分宽度：提供可供选择的多列数据，2 列，3 列，4 列，注：存在多列选择时，默认可以平均分配总宽度 1200px
- 搭配使用 Carousel + Accordion 可以实现较复杂的效果：
    1. Carousel 用于实现主特效
    2. Accordion 用于实现 Carousel 的选中特效, Accordion 配置中的时间必须与 Carousel 一致
- hover 特效均可使用 Popup 实现

**模板需使用绝对定位以突破 overflow: hidden 限制**
为避免使用淘宝、天猫 CSS 类, 而直接使用 absolute 定位, 需要使用 Tabs 改造最外围 dom 结构, 并且装修页面并不会初始化 widget 相关组件, 为了能够在装修页面可以较为直观的看到装修效果, 必须使用装修页面已有的 `footer-more-trigger` 类
```
// 此 CSS 类的查看日期: 2019.06.28 11:32 AM
.footer-more-trigger {
    position: absolute;
    padding: 6px 11px 4px 14px;
    width: 37px;
    line-height: 1.3;
    border: 1px solid #fff;
    left:-12px;
    top:-5px;
}
```

每个产品包含：名称，图片，描述，价格，立即购买，可能还会有蒙版
title, img, desc, price, buyNow[, mask]

分类：
1. 产品展示、多图循环
2. 倒计时
3. 尾页模块 属于静态模板
4. 淘宝视频
5. 店铺公告 使用的滚动标签被 html5 废弃了, 查询是否有替换

各组件结构：
Tabs、Slide:
```
wrapper
    nav
        item --> 可以对多个 content
        item
    content
        item
        item
```
Carousel:
```
wrapper
    nav
        item --> 可以对多个 content
        item
    content
        item
        item
    prev
    next
```
Accordion:
```
wrapper
    trigger
    content
    trigger
    content
    trigger
    content
    .
    .
    .
```
Popup:
```
wrapper
    content
```

结构：
```javascript
{
    columns: [1], // 提供多个选项，则表示可以平分宽度，每项可以单独设置宽度，并自适应其他参数(字体大小, 高度)，默认 [1]
    title: '', // 标题, 为空则不展示标题栏，标题栏包含副标题
    subTitle: '', // 副标题
    total: 0, // 产品总个数, 循环 content
    contents: [{
        dom: '',
        type: 'Popup',
        category: '',
        config: {
            trigger: '.trigger',
        },
        isFullPage: false, // Carousel、Slide 才能够选择是否全屏
        item: {
            title: '',
            img: '',
            desc: '',
            detail: '',
            price: '',
            buyNow: '立即购买',
            mask: '',
        }
    }]
}
```

店铺搜索：
- gbk 编码
- 排序: orderType: 收藏 hotkeep_desc, 价格 price_asc, 新品 newOn_desc, 销量 hotsell_desc, 人气 coefp_desc
- 关键字: keyword 
- 价格区间: lowPrice, highPrice

**注意**
CSS 白名单中有些属性已不支持，比如：box-sizing: border-box

img.alicdn.com === gd3.alicdn.com 两处可引用到内容相同的图片

data-* ==> * :
title,
subTitle,
desc,
detail,
img,
navImg,
count,
nav,
link,
price,
buyNow,

复合组件模板数据结构
```js
{
    category: 'category',
    columns: [1], // 提供多个选项，则表示可以平分宽度，每项可以单独设置宽度，并自适应其他参数(字体大小, 高度)，默认 [1]
    title: 'HOT SELLING GOODS', // 标题, 为空则不展示标题栏，标题栏包含副标题
    subTitle: '测试编辑器', // 副标题
    total: 4, // 产品总个数, 循环 content
    column: 1, // 最终结果是多少列
    backgroundColor: '#fff',
    bgType: 'initial',
    topSpace: 0, // 去除顶部间隙
    width: 1200,
    items: [{
        name: null, // 产品名称
        img: {
            width: 460,
            height: 460,
            url: 'https://img.alicdn.com/imgextra/i3/2067408037/O1CN01t3FpAg29EzipxN1v8_!!2067408037.jpg',
            navWidth: 400,
            navHeight: 400,
        }, // 产品图片
        images: [],
        desc: null, // 产品描述
        detail: null, // 产品详情
        price: '234', // 产品价格
        originalPrice: null, // 市场价
        buyNow: '立即购买', // 立即购买按钮的文案
        link: {
            url: '',
            target: '_blank',
        }, // 产品链接
    }],
    configs: {
        _1: [{
            dom: `<div style="padding: 25px 20px;width: 1160px;font-size: 0;">
                    <div data-count style="display: inline-block;width: 340px;vertical-align: top;">
                        <a href="" class="trigger1" data-link style="text-decoration: none;">
                            <div data-img-bg style="height: 500px;background: url(https://img.alicdn.com/imgextra/i3/2067408037/O1CN01t3FpAg29EzipxN1v8_!!2067408037.jpg) no-repeat center;overflow: hidden;">
                                <div class="pop1" style="margin: 385px auto 0;padding: 16px 0;width: 270px;text-align: center;background: rgba(255, 255, 255, .5);">
                                    <h2 data-name style="font-size: 20px;color: #000;">2019 夏季新品</h2>
                                    <span data-desc style="font-size: 12px;line-height: 18px;color: #000;">新品上市 请多关注</span>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div style="display: inline-block;margin: 0 20px;width: 440px;vertical-align: top;">
                        <div data-count style="margin-bottom: 20px;">
                            <a href="" class="trigger2" data-link style="text-decoration: none;">
                                <div data-img-bg style="height: 240px;background: url(https://img.alicdn.com/imgextra/i3/2067408037/O1CN01t3FpAg29EzipxN1v8_!!2067408037.jpg) no-repeat center;overflow: hidden;">
                                    <div class="pop2" style="margin: 125px auto 0;padding: 16px 0;width: 270px;text-align: center;background: rgba(255, 255, 255, .5);">
                                        <h2 data-name style="font-size: 20px;color: #000;">2019 夏季新品</h2>
                                        <span data-desc style="font-size: 12px;line-height: 18px;color: #000;">新品上市 请多关注</span>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div data-count>
                            <a href="" class="trigger3" data-link style="text-decoration: none;">
                                <div data-img-bg style="height: 240px;background: url(https://img.alicdn.com/imgextra/i3/2067408037/O1CN01t3FpAg29EzipxN1v8_!!2067408037.jpg) no-repeat center;overflow: hidden;">
                                    <div class="pop3" style="margin: 125px auto 0;padding: 16px 0;width: 270px;text-align: center;background: rgba(255, 255, 255, .5);">
                                        <h2 data-name style="font-size: 20px;color: #000;">2019 夏季新品</h2>
                                        <span data-desc style="font-size: 12px;line-height: 18px;color: #000;">新品上市 请多关注</span>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div data-count style="display: inline-block;width: 340px;vertical-align: top;">
                        <div style="display: inline-block;width: 340px;vertical-align: top;">
                            <a href="" class="trigger4" data-link style="text-decoration: none;">
                                <div data-img-bg style="height: 500px;background: url(https://img.alicdn.com/imgextra/i3/2067408037/O1CN01t3FpAg29EzipxN1v8_!!2067408037.jpg) no-repeat center;overflow: hidden;">
                                    <div class="pop4" style="margin: 385px auto 0;padding: 16px 0;width: 270px;text-align: center;background: rgba(255, 255, 255, .5);">
                                        <h2 data-name style="font-size: 20px;color: #000;">2019 夏季新品</h2>
                                        <span data-desc style="font-size: 12px;line-height: 18px;color: #000;">新品上市 请多关注</span>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>`,
            category: 'Multiple',
            space: {
                top: 20,
                right: 40,
            }, // 间隔
            widget: [{
                type: 'Popup',
                config: {
                    trigger: '.trigger1',
                    align: {
                        node: '.pop1',
                        points: ['cc', 'cc'],
                        offset: [0, 0],
                    },
                },
                mask: {
                    dom: `<div data-nav>
                            <a data-link style="display: block;padding: 16px 0;width: 270px;text-align: center;background: rgba(255, 255, 255, 1);text-decoration: none;">
                                <h2 data-name style="font-size: 20px;color: #000;">2019 夏季新品</h2>
                                <span data-desc style="font-size: 12px;line-height: 18px;color: #000;">新品上市 请多关注</span>
                            </a>
                        </div>`,
                },
                imgSize: {
                    width: 340,
                    height: 500,
                },
            }, {
                type: 'Popup',
                config: {
                    trigger: '.trigger2',
                    align: {
                        node: '.pop2',
                        points: ['cc', 'cc'],
                        offset: [0, 0],
                    },
                },
                mask: {
                    dom: `<div data-nav>
                            <a data-link style="display: block;padding: 16px 0;width: 270px;text-align: center;background: rgba(255, 255, 255, 1);text-decoration: none;">
                                <h2 data-name style="font-size: 20px;color: #000;">2019 夏季新品</h2>
                                <span data-desc style="font-size: 12px;line-height: 18px;color: #000;">新品上市 请多关注</span>
                            </a>
                        </div>`,
                },
                imgSize: {
                    width: 440,
                    height: 240,
                },
            }, {
                type: 'Popup',
                config: {
                    trigger: '.trigger3',
                    align: {
                        node: '.pop3',
                        points: ['cc', 'cc'],
                        offset: [0, 0],
                    },
                },
                mask: {
                    dom: `<div data-nav>
                            <a data-link style="display: block;padding: 16px 0;width: 270px;text-align: center;background: rgba(255, 255, 255, 1);text-decoration: none;">
                                <h2 data-name style="font-size: 20px;color: #000;">2019 夏季新品</h2>
                                <span data-desc style="font-size: 12px;line-height: 18px;color: #000;">新品上市 请多关注</span>
                            </a>
                        </div>`,
                },
                imgSize: {
                    width: 440,
                    height: 240,
                },
            }, {
                type: 'Popup',
                config: {
                    trigger: '.trigger4',
                    align: {
                        node: '.pop4',
                        points: ['cc', 'cc'],
                        offset: [0, 0],
                    },
                },
                mask: {
                    dom: `<div data-nav>
                            <a data-link style="display: block;padding: 16px 0;width: 270px;text-align: center;background: rgba(255, 255, 255, 1);text-decoration: none;">
                                <h2 data-name style="font-size: 20px;color: #000;">2019 夏季新品</h2>
                                <span data-desc style="font-size: 12px;line-height: 18px;color: #000;">新品上市 请多关注</span>
                            </a>
                        </div>`,
                },
                imgSize: {
                    width: 340,
                    height: 500,
                },
            }],
            // 模板所需字段
            itemProps: ['img', 'link', 'name', 'desc'],
            count: 4,
        }],
    },
},

{
    category: 'category',
    columns: [1], // 提供多个选项，则表示可以平分宽度，每项可以单独设置宽度，并自适应其他参数(字体大小, 高度)，默认 [1]
    title: 'HOT SELLING GOODS', // 标题, 为空则不展示标题栏，标题栏包含副标题
    subTitle: '测试编辑器', // 副标题
    total: 3, // 产品总个数, 循环 content
    column: 1, // 最终结果是多少列
    backgroundColor: '#fff',
    bgType: 'initial',
    topSpace: 0, // 去除顶部间隙
    width: 1200,
    items: [{
        name: null, // 产品名称
        img: {
            width: 460,
            height: 460,
            url: 'https://img.alicdn.com/imgextra/i3/2067408037/O1CN01t3FpAg29EzipxN1v8_!!2067408037.jpg',
            navWidth: 400,
            navHeight: 400,
        }, // 产品图片
        images: [],
        desc: null, // 产品描述
        detail: null, // 产品详情
        price: '234', // 产品价格
        originalPrice: null, // 市场价
        buyNow: '立即购买', // 立即购买按钮的文案
        link: {
            url: '',
            target: '_blank',
        }, // 产品链接
    }],
    configs: {
        _1: [{
            dom: `<ul class="trigger" style="width: 1200px;overflow: hidden;">
                    <li data-count style="float: left;margin-right: 6px;width: 396px;height: 450px;">
                        <img data-img src="https://img.alicdn.com/imgextra/i1/2067408037/O1CN01mnfnTx29EzijYD7Vn_!!2067408037.jpg" alt="" style="width: 396px;height: 450px;">
                    </li>
                    <li data-count style="float: left;margin-right: 6px;width: 396px;height: 450px;">
                        <img data-img src="https://img.alicdn.com/imgextra/i1/2067408037/O1CN01mnfnTx29EzijYD7Vn_!!2067408037.jpg" alt="" style="width: 396px;height: 450px;">
                    </li>
                    <li data-count style="float: left;width: 396px;height: 450px;">
                        <img data-img src="https://img.alicdn.com/imgextra/i1/2067408037/O1CN01mnfnTx29EzijYD7Vn_!!2067408037.jpg" alt="" style="width: 396px;height: 450px;">
                    </li>
                </ul>`,
            category: 'Multiple',
            space: {
                top: 20,
                right: 40,
            }, // 间隔
            widget: [{
                type: 'Popup',
                config: {
                    trigger: '.trigger',
                    align: {
                        node: '.trigger',
                        points: ['cc', 'cc'],
                        offset: [0, 0],
                    },
                },
                mask: {
                    dom: `<ul class="accordion">
                            <li data-nav class="trigger-nav" style="float: left;margin-right: 6px;width: 396px;height: 450px;outline: none;">
                                <a href="" data-link style="display: block;width: 396px;height: 450px;text-decoration: none;overflow: hidden;outline: none;">
                                    <div class="panel-nav" style="display: none;height: 450px;">
                                        <div style="margin: 330px auto 0;padding: 10px 0;width: 280px;background: rgba(255, 255, 255, .9);text-align: center;">
                                            <div data-name style="color: #000;line-height: 48px;font-size: 22px;font-weight: bold;">当季新品</div>
                                            <div data-desc style="display: inline-block;padding: 3px 30px;border-radius: 20px;background: red;color: #fff;line-height: 26px;font-size: 16px;">超多优惠, 快来抢!</div>
                                        </div>
                                    </div>
                                    <div style="height: 450px;background: rgba(0, 0, 0, .3);"></div>
                                </a>
                            </li>
                            <li data-nav class="trigger-nav" style="float: left;margin-right: 6px;width: 396px;height: 450px;outline: none;">
                                <a href="" data-link style="display: block;width: 396px;height: 450px;text-decoration: none;overflow: hidden;outline: none;">
                                    <div class="panel-nav" style="display: none;height: 450px;">
                                        <div style="margin: 330px auto 0;padding: 10px 0;width: 280px;background: rgba(255, 255, 255, .9);text-align: center;">
                                            <div data-name style="color: #000;line-height: 48px;font-size: 22px;font-weight: bold;">当季新品</div>
                                            <div data-desc style="display: inline-block;padding: 3px 30px;border-radius: 20px;background: red;color: #fff;line-height: 26px;font-size: 16px;">超多优惠, 快来抢!</div>
                                        </div>
                                    </div>
                                    <div style="height: 450px;background: rgba(0, 0, 0, .3);"></div>
                                </a>
                            </li>
                            <li data-nav class="trigger-nav" style="float: left;width: 396px;height: 450px;outline: none;">
                                <a href="" data-link style="display: block;width: 396px;height: 450px;text-decoration: none;overflow: hidden;outline: none;">
                                    <div class="panel-nav" style="display: none;height: 450px;">
                                        <div style="margin: 330px auto 0;padding: 10px 0;width: 280px;background: rgba(255, 255, 255, .9);text-align: center;">
                                            <div data-name style="color: #000;line-height: 48px;font-size: 22px;font-weight: bold;">当季新品</div>
                                            <div data-desc style="display: inline-block;padding: 3px 30px;border-radius: 20px;background: red;color: #fff;line-height: 26px;font-size: 16px;">超多优惠, 快来抢!</div>
                                        </div>
                                    </div>
                                    <div style="height: 450px;background: rgba(0, 0, 0, .3);"></div>
                                </a>
                            </li>
                        </ul>`,
                },
                imgSize: {
                    width: 396,
                    height: 450,
                },
            }, {
                type: 'Accordion',
                config: {
                    triggerCls: 'trigger-nav',
                    panelCls: 'panel-nav',
                    triggerType: 'mouse',
                },
                target: '.accordion',
                imgSize: {
                    width: 396,
                    height: 450,
                },
            }],
            // 模板所需字段
            itemProps: ['img', 'link', 'name', 'desc'],
            count: 4,
        }],
    },
}
```
复合组件模板可以整合单一组件模板, 具备更好的兼容性及扩展性