# 淘宝 Widget 组件示例


- 限制模板最大展现宽度 1200px
- 是否可以均分宽度：提供可供选择的多列数据，2 列，3 列，4 列，注：存在多列选择时，默认可以平均分配总宽度 1200px
- 搭配使用 Carousel + Accordion 可以实现较复杂的效果：
    1. Carousel 用于实现主特效
    2. Accordion 用于实现 Carousel 的选中特效, Accordion 配置中的时间必须与 Carousel 一致
- hover 特效均可使用 Popup 实现

结构：
```javascript
{
    width: '',
    title: '',
    content: {
        type: '',
        category: '',
        config: '',
        cls: '',
        style: '',
    }
}
```