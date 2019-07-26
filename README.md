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