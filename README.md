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