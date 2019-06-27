// const generateWrapCode = (type, config, core, title = '来自稿定设计码工代码生成', cls = 'MaGong') => {
//     const cfg = JSON.stringify(config);
//     return `<div class="J_TWidget ${cls}" data-title="${title}" data-widget-type="${type}" data-widget-config="${cfg}">${core}</div>`;
// };
// const generatePopupCode = (options) => {
//     const code = [];
//     options.datas.forEach((item, index) => {
//         const core = '';
//         const popupWrapCode = `<div class="ma-gong-trigger-${index || ''}">${generateWrapCode(item.type, item.config, core)}</div>`;
//         code.push(popupWrapCode);
//     });
//     return code;
// };

// const generateCode = (options) => {
//     switch (options.type) {
//     case 'Popup':
//         generatePopupCode(options);
//         break;
//     default:
//         throw new Error('错误的类型');
//     }
// };
// export default generateCode;


export const defaultConfig = {
    columns: [3], // 提供多个选项，则表示可以平分宽度，每项可以单独设置宽度，并自适应其他参数(字体大小, 高度)，默认 [1]
    title: '', // 标题, 为空则不展示标题栏，标题栏包含副标题
    subTitle: '', // 副标题
    total: 5, // 产品总个数, 循环 content
    column: 3, // 最终结果是多少列
    configs: {
        _3: [{
            dom: `<a class="trigger" data-link href="" style="display: block;width: 380px;height: 380px;">
                        <img data-img src="https://gd1.alicdn.com/imgextra/i1/848470502/O1CN011FZxHxRhSWOc8pb_!!848470502.jpg_430x430.jpg" alt="" style="width: 380px;height: 380px;">
                    </a>`,
            widgetType: 'Popup',
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
            item: {
                title: '', // 产品名称
                img: '', // 产品图片
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
            },
        }],
    },
};

/*
<div class="GaoDing" style="margin: 0 auto;width: 950px;">
    <div class="GaoDing-wrapper" style="position: relative;left: -485px;width: 1920px;">
        <div class="GaoDing-conteiner" style="margin: 0 auto;width: 1200px;overflow: hidden;">
            <div style="padding: 10px 0;text-align: center;">
                <h3 data-text-type="title" style="margin: 0;font-size: 30px;">HOT SELLING GOODS</h3>
                <span data-text-type="sub-title" style="font-size: 16px;">热卖畅销精品</span>
            </div>
            <ul>
                <li style="float: left;margin-right: 30px;width: 380px;height: 380px;">
                    <a class="trigger" data-link href="">
                        <img data-img src="https://gd1.alicdn.com/imgextra/i1/848470502/O1CN011FZxHxRhSWOc8pb_!!848470502.jpg_430x430.jpg" alt="" style="width: 380px;height: 380px;">
                    </a>
                    <div
                        class="J_TWidget"
                        data-widget-type="Popup"
                        style="width: 380px;height: 380px;display: none;"
                    ></div>
                </li>
                <li style="float: left;margin-right: 30px;width: 380px;height: 380px;">
                    <a class="trigger" data-link href="">
                        <img data-img src="https://gd1.alicdn.com/imgextra/i1/848470502/O1CN011FZxHxRhSWOc8pb_!!848470502.jpg_430x430.jpg" alt="" style="width: 380px;height: 380px;">
                    </a>
                    <div
                        class="J_TWidget"
                        data-widget-type="Popup"
                        style="width: 380px;height: 380px;display: none;"
                    ></div>
                </li>
                <li style="float: left;width: 380px;height: 380px;">
                    <a class="trigger" data-link href="">
                        <img data-img src="https://gd1.alicdn.com/imgextra/i1/848470502/O1CN011FZxHxRhSWOc8pb_!!848470502.jpg_430x430.jpg" alt="" style="width: 380px;height: 380px;">
                    </a>
                    <div
                        class="J_TWidget"
                        data-widget-type="Popup"
                        style="width: 380px;height: 380px;display: none;"
                    ></div>
                </li>
                <!-- <li style="width:0;height:0;clear:both;"></li> -->
            </ul>
        </div>
    </div>
</div>
*/

export const getRandomChar = (len = 5) => {
    const CHAR = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-';
    const randomChars = [];
    for (let i = 0; i < len; i++) { // eslint-disable-line no-plusplus
        const index = Math.random() * CHAR.length >> 0; // eslint-disable-line no-bitwise
        randomChars.push(CHAR[index]);
    }
    return randomChars.join('');
};

const generatePopupCode = (div, config, item) => {
    const trigger = config.trigger;
    const triggerCls = getRandomChar();
    const targets = div.querySelectorAll(trigger);
    targets.forEach(target => target.classList.add(triggerCls));
    config.trigger = `.${triggerCls}`;
    if (trigger === config.align.node) config.align.node = `.${triggerCls}`;
    else {
        const node = config.align.node;
        const nodeCls = getRandomChar();
        const nodes = div.querySelectorAll(node);
        nodes.forEach(n => n.classList.add(nodeCls));
        config.align.node = `.${nodeCls}`;
    }
    const maskStyle = item.mask.url ? `background: url(${item.mask.url});${item.mask.type === 'picture' ? `background-size: ${item.mask.width}px ${item.mask.height}px` : ''}` : '';
    return `${div.innerHTML}<div class='J_TWidget' data-widget-type='Popup' data-widget-config='${JSON.stringify(config)}' style="display: none;pointer-events: none;width: ${item.mask.width}px;height: ${item.mask.height}px;${maskStyle};${item.mask.style};">
    </div>`;
};

const generateCarouselCode = (div, config, item) => {};

const addText = div => div.innerHTML;

export const generateItemCode = (itemConfig, style) => {
    const div = document.createElement('div');
    div.innerHTML = itemConfig.dom;
    let code;
    switch (itemConfig.widgetType) {
    case 'Popup':
        // code = generatePopupCode(div, itemConfig.widgetConfig, itemConfig.item);
        div.innerHTML = generatePopupCode(div, itemConfig.widgetConfig, itemConfig.item);
        code = addText(div, itemConfig.item);
        break;
    case 'Carousel':
        code = generateCarouselCode(div, itemConfig.widgetConfig, itemConfig.item);
        break;
    default:
        code = '';
        break;
    }
    return `<li style="float: left;${style}">${code}</li>`;
};

export const generateCoreCode = (cfg) => {
    const { column, total, configs } = cfg;
    const config = configs[`_${column}`];
    const conLen = config.length;
    const codes = [];
    for (let i = 0; i < total; i++) { // eslint-disable-line no-plusplus
        const itemConfig = JSON.parse(JSON.stringify(config[i % conLen]));
        let rightSpace = `margin-right: ${itemConfig.space.right}px;`;
        let topSpace = '';
        if (!((i + 1) % column)) rightSpace = '';
        if (i >= column) topSpace = `margin-top: ${itemConfig.space.top}px;`;
        const itemDom = generateItemCode(itemConfig, topSpace + rightSpace);
        codes.push(itemDom);
    }
    return codes.join('');
};

export const generateWrapCode = (config = defaultConfig) => {
    let title = '';
    if (config.title) {
        title = `<div style="padding: 10px 0;text-align: center;">
                    <h3 style="margin: 0;font-size: 30px;">${config.title || 'HOT SELLING GOODS'}</h3>
                    <span data-text-type="sub-title" style="font-size: 16px;">${config.subTitle || '热卖畅销精品'}</span>
                </div>`;
    }
    const core = generateCoreCode(config);
    return `<div class="GaoDing" style="margin: 0 auto;width: 950px;">
                <div class="GaoDing-wrapper" style="position: relative;left: -485px;width: 1920px;">
                    <div class="GaoDing-conteiner" style="margin: 0 auto;width: 1200px;overflow: hidden;">
                    ${title}
                    <ul>
                        ${core}
                    </ul>
                    </div>
                </div>
            </div>`;
};
