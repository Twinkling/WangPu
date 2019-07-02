const defaultPopupConfig = {
    columns: [3], // 提供多个选项，则表示可以平分宽度，每项可以单独设置宽度，并自适应其他参数(字体大小, 高度)，默认 [1]
    title: 'HOT SELLING GOODS', // 标题, 为空则不展示标题栏，标题栏包含副标题
    subTitle: '热卖畅销商品', // 副标题
    total: 5, // 产品总个数, 循环 content
    column: 3, // 最终结果是多少列
    background: '#fff',
    topSpace: 0, // 去除顶部间隙
    width: 1200,
    configs: {
        _3: [{
            dom: `<a class="trigger" data-link href="" style="display: block;width: 380px;height: 380px;">
                        <img data-img src="https://img.alicdn.com/imgextra/i2/2067408037/O1CN01Wva90N29EzicaEt1P_!!2067408037.jpg" alt="" style="width: 380px;height: 380px;">
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
            // 例如：对于要填入 name 的 dom 结构，需要在其 dom 上存在 data-name 属性
            item: [{
                name: null, // 产品名称
                img: {
                    width: 460,
                    height: 460,
                    url: '',
                    navWidth: 120,
                    navHeight: 120,
                }, // 产品图片
                desc: null, // 产品描述
                detail: null, // 产品详情
                price: null, // 产品价格
                originalPrice: null, // 市场价
                buyNow: '立即购买', // 立即购买按钮的文案
                link: '', // 产品链接
                linkTarget: '_blank',
                mask: { // 蒙版配置
                    width: 380,
                    height: 380,
                    // url: 'https://gd2.alicdn.com/imgextra/i1/848470502/O1CN011FZxH8oC9i9S88b_!!848470502.jpg_430x430.jpg', // 蒙版图案
                    url: 'https://img.alicdn.com/imgextra/i3/2067408037/O1CN01VSAfr029Ezifx17Tr_!!2067408037.gif',
                    style: 'background-color: rgba(255, 255, 255, .3)', // 蒙版样式
                    type: 'effect', // picture: 图片, effect: 动效 默认 effect, picture 会多增加 background-size： width height
                    dom: '',
                },
            }],
        }],
    },
};

const defaultCarouselConfig = {
    columns: [3], // 提供多个选项，则表示可以平分宽度，每项可以单独设置宽度，并自适应其他参数(字体大小, 高度)，默认 [1]
    title: 'HOT SELLING GOODS', // 标题, 为空则不展示标题栏，标题栏包含副标题
    subTitle: '测试编辑器', // 副标题
    total: 3, // 产品总个数, 循环 content
    column: 3, // 最终结果是多少列
    background: '#fff',
    topSpace: 0, // 去除顶部间隙
    width: 1200,
    configs: {
        _3: [{
            dom: `<div style="width: 380px;">
                    <div style="width: 380px;height: 380px;overflow: hidden;">
                        <ul class="content">
                            <li class="" data-count style="float: left;">
                                <a href="" class="" data-link style="display: block;width: 380px;height: 380px;">
                                    <div style="float: left;height: 340px;">
                                        <img data-img src="https://img.alicdn.com/imgextra/i1/2067408037/O1CN01mnfnTx29EzijYD7Vn_!!2067408037.jpg" style="width: 380px;height: 380px;" alt="">
                                    </div>
                                    <div style="float: left;width: 380px;height: 40px;background-color: rgba(187, 62, 74, .7);font-size: 14px;color: #fff;box-sizing: border-box;">
                                        <span style="float: left;padding: 0 10px;line-height: 40px;">RMB</span>
                                        <span data-price style="float: left;line-height: 40px;">149</span>
                                        <span data-buyNow style="float: right;padding: 0 10px;line-height: 40px;">立即购买</span>
                                    </div>
                                </a>
                            </li>
                            <li class="" data-count style="float: left;">
                                <a href="" class="" data-link style="display: block;width: 380px;height: 380px;">
                                    <div style="float: left;height: 340px;">
                                        <img data-img src="https://img.alicdn.com/imgextra/i1/2067408037/O1CN01mnfnTx29EzijYD7Vn_!!2067408037.jpg" style="width: 380px;height: 380px;" alt="">
                                    </div>
                                    <div style="float: left;width: 380px;height: 40px;background-color: rgba(187, 62, 74, .7);font-size: 14px;color: #fff;box-sizing: border-box;">
                                        <span style="float: left;padding: 0 10px;line-height: 40px;">RMB</span>
                                        <span data-price style="float: left;line-height: 40px;">149</span>
                                        <span data-buyNow style="float: right;padding: 0 10px;line-height: 40px;">立即购买</span>
                                    </div>
                                </a>
                            </li>
                            <li class="" data-count style="float: left;">
                                <a href="" class="" data-link style="display: block;width: 380px;height: 380px;">
                                    <div style="float: left;height: 340px;">
                                        <img data-img src="https://img.alicdn.com/imgextra/i1/2067408037/O1CN01mnfnTx29EzijYD7Vn_!!2067408037.jpg" style="width: 380px;height: 380px;" alt="">
                                    </div>
                                    <div style="float: left;width: 380px;height: 40px;background-color: rgba(187, 62, 74, .7);font-size: 14px;color: #fff;box-sizing: border-box;">
                                        <span style="float: left;padding: 0 10px;line-height: 40px;">RMB</span>
                                        <span data-price style="float: left;line-height: 40px;">149</span>
                                        <span data-buyNow style="float: right;padding: 0 10px;line-height: 40px;">立即购买</span>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <ul class="nav" style="margin-top: 10px;overflow: hidden">
                        <li class="trigger-nav" data-nav style="float: left;width: 120px;height: 120px;overflow: hidden;outline: none;">
                            <a href="" class="pannel-nav" data-link style="display: block;width: 118px;height: 118px;border: 1px solid red;overflow: hidden;">
                                <img src="https://gd3.alicdn.com/imgextra/i1/2067408037/O1CN01mnfnTx29EzijYD7Vn_!!2067408037.jpg_120x120.jpg" alt="" data-img >
                            </a>
                            <a href="" class="" data-link style="display: block;width: 118px;height: 118px;border: 1px solid rgba(255, 255, 255, 0);overflow: hidden;">
                                <img src="https://gd3.alicdn.com/imgextra/i1/2067408037/O1CN01mnfnTx29EzijYD7Vn_!!2067408037.jpg_120x120.jpg" alt="" data-img >
                            </a>
                        </li>
                        <li class="trigger-nav" data-nav style="float: left;margin-left: 10px;width: 120px;height: 120px;overflow: hidden;outline: none;">
                            <a href="" class="pannel-nav" data-link style="display: none;width: 118px;height: 118px;border: 1px solid red;overflow: hidden;">
                                <img src="https://gd3.alicdn.com/imgextra/i1/2067408037/O1CN01mnfnTx29EzijYD7Vn_!!2067408037.jpg_120x120.jpg" alt="" data-img >
                            </a>
                            <a href="" class="" data-link style="display: block;width: 118px;height: 118px;border: 1px solid rgba(255, 255, 255, 0);overflow: hidden;">
                                <img src="https://gd3.alicdn.com/imgextra/i1/2067408037/O1CN01mnfnTx29EzijYD7Vn_!!2067408037.jpg_120x120.jpg" alt="" data-img >
                            </a>
                        </li>
                        <li class="trigger-nav" data-nav style="float: left;margin-left: 10px;width: 120px;height: 120px;overflow: hidden;outline: none;">
                            <a href="" class="pannel-nav" data-link style="display: none;width: 118px;height: 118px;border: 1px solid red;overflow: hidden;">
                                <img src="https://gd3.alicdn.com/imgextra/i1/2067408037/O1CN01mnfnTx29EzijYD7Vn_!!2067408037.jpg_120x120.jpg" alt="" data-img >
                            </a>
                            <a href="" class="" data-link style="display: block;width: 118px;height: 118px;border: 1px solid rgba(255, 255, 255, 0);overflow: hidden;">
                                <img src="https://gd3.alicdn.com/imgextra/i1/2067408037/O1CN01mnfnTx29EzijYD7Vn_!!2067408037.jpg_120x120.jpg" alt="" data-img >
                            </a>
                        </li>
                    </ul>
                </div>`,
            widgetType: 'Carousel',
            category: '',
            space: {
                top: 20,
                right: 30,
            }, // 间隔
            widgetConfig: {
                effect: 'scrollx',
                easing: 'easeOutStrong',
                navCls: 'nav',
                contentCls: 'content',
                autoplay: true,
                circular: true,
                duration: 1,
                prevBtnCls: null,
                nextBtnCls: null,
                interval: 5,
            },
            // Carousel 才有 nav 配置
            nav: {
                triggerCls: 'trigger-nav',
                panelCls: 'pannel-nav',
            },
            isFullPage: false, // Carousel、Slide 才能够选择是否全屏
            // 配置每个产品信息, 存在字段则编辑器中会出现相应配置项, 不需要配置的字段需将其置为 null, 对应 dom 结构上需有 data-* 的属性
            // 例如：对于要填入 name 的 dom 结构，需要在其 dom 上存在 data-name 属性
            item: [{
                name: null, // 产品名称
                img: {
                    width: 460,
                    height: 460,
                    url: 'https://img.alicdn.com/imgextra/i3/2067408037/O1CN01t3FpAg29EzipxN1v8_!!2067408037.jpg',
                    navWidth: 120,
                    navHeight: 120,
                }, // 产品图片
                desc: null, // 产品描述
                detail: null, // 产品详情
                price: '234', // 产品价格
                originalPrice: null, // 市场价
                buyNow: '立即购买', // 立即购买按钮的文案
                link: '', // 产品链接
                linkTarget: '_blank',
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

const prefix = 'GaoDing';
const descTitle = '稿定设计在线代码生成工具';
const site = 'dianshang.gaoding.com/tool-editor';

export const defaultConfig = defaultCarouselConfig && defaultPopupConfig;

export const getRandomChar = (len = 5, count = 1) => {
    const CHAR = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-';
    const list = [];
    for (let i = 0; i < count; i++) { // eslint-disable-line no-plusplus
        const randomChars = [];
        for (let j = 0; j < len; j++) { // eslint-disable-line no-plusplus
            const index = Math.random() * CHAR.length >> 0; // eslint-disable-line no-bitwise
            randomChars.push(CHAR[index]);
        }
        list.push(randomChars.join(''));
    }
    return count === 1 ? list[0] : list;
};

/**
 * 生成 Popup 组件代码
 * @param {HTMLElement} div html dom 结构
 * @param {Object} config Popup 组件配置
 * @param {Object} item 产品信息
 */
const generatePopupCode = (div, config, item) => {
    config = JSON.parse(JSON.stringify(config));
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
    const maskStyle = item.mask.url ? `background-image: url(${item.mask.url});${item.mask.type === 'picture' ? `background-size: ${item.mask.width}px ${item.mask.height}px` : ''}` : '';
    return `${div.innerHTML}<div class='J_TWidget' data-widget-type='Popup' data-widget-config='${JSON.stringify(config)}' style="display: none;${item.mask.style};${maskStyle};">
                <a data-link href="" style="display: block;width: ${item.mask.width}px;height: ${item.mask.height}px;">${item.mask.dom}</a>
            </div>`;
};

/**
 * 生成 Carousel 导航选中态
 * @param {HTMLElement} div html dom 结构
 * @param {Object} config Carousel 组件配置
 */
const generateCarouselNavCode = (div, widgetConfig, navConfig) => {
    // const { widgetConfig } = config;
    const nav = div.querySelector(`.${widgetConfig.navCls}`);
    nav.classList.add('J_TWidget');
    nav.dataset.widgetType = 'Accordion';
    const {
        autoplay = true, triggerType = 'mouse', duration, interval,
    } = widgetConfig;
    // const [ newTriggerCls, newPanelCls ] = getRandomChar(5, 2);
    Object.keys(navConfig).forEach((prop) => {
        const cls = getRandomChar();
        nav.querySelectorAll(`.${navConfig[prop]}`).forEach((node) => {
            node.classList.add(cls);
            navConfig[prop] = cls;
        });
    });
    navConfig = {
        ...navConfig,
        autoplay,
        triggerType,
    };
    if (duration) navConfig.duration = duration;
    if (interval) navConfig.interval = interval;
    nav.dataset.widgetConfig = JSON.stringify(navConfig);
};

/**
 * 生成 Carousel 组件代码
 * @param {HTMLElement} div html dom 结构
 * @param {Object} config 配置项
 * @param {Object} item 产品信息
 */
const generateCarouselCode = (div, config, item) => {
    const widgetConfig = JSON.parse(JSON.stringify(config.widgetConfig));
    const {
        navCls, contentCls, prevBtnCls, nextBtnCls,
    } = widgetConfig;
    div.classList.add('J_TWidget');
    div.dataset.widgetType = 'Carousel';
    const clsObj = {
        navCls, contentCls, prevBtnCls, nextBtnCls,
    };
    Object.keys(clsObj).forEach((prop) => {
        if (clsObj[prop]) {
            const cls = getRandomChar();
            div.querySelectorAll(`.${clsObj[prop]}`).forEach((node) => {
                node.classList.add(cls);
                widgetConfig[prop] = cls;
            });
        }
    });
    // 为 Carousel 设置导航选中态
    if (config.nav && config.nav.triggerCls && config.nav.panelCls) {
        generateCarouselNavCode(div, widgetConfig, JSON.parse(JSON.stringify(config.nav)));
    }
    div.dataset.widgetConfig = JSON.stringify(widgetConfig);
    // 不知为何淘宝 widget 组件没有自己加上宽度, 导致水平滚动会出现空白页
    if (widgetConfig.effect === 'scrollx') {
        div.querySelector(`.${widgetConfig.contentCls}`).style.width = '99999px';
    }
    return div.outerHTML;
};

/**
 * 转换图片空间路径
 * @param {String} url 图片空间路径
 * @param {Number} width 转换出来的图片宽, 以整 10 的倍数或者 2 的幂次方
 * @param {Number} height 转换的图片高, 以整 10 的倍数或者 2 的幂次方
 */
const getImg = (url, width, height) => {
    if (!/^(https?:|\/\/)/.test(url)) return '';
    url = new URL(url);
    if (url.host === 'img.alicdn.com') {
        // 当前可用路径 'gd1.alicdn.com', 'gd2.alicdn.com'...'gd8.alicdn.com';
        const i = (Math.random() * 8 << 0) + 1;
        url.host = `gd${i}.alicdn.com`;
    }
    return `${url.href}_${width}x${height}.jpg`;
};

/**
 * 填充单个产品的信息
 * @param {HTMLElement} div 每个产品的 html dom 结构
 * @param {Object} item 每个产品的信息
 */
const addSingleText = (div, item, type, dataType) => {
    const ignoreProp = ['mask'];
    const imgWidth = dataType === 'count' ? item.img.width : item.img.navWidth;
    const imgHeight = dataType === 'count' ? item.img.height : item.img.navHeight;
    const href = type === 'editor' ? 'javascript:void(0);' : item.link;
    Object.keys(item).forEach((prop) => {
        if (!ignoreProp.includes(prop)) {
            div.querySelectorAll(`[data-${prop}]`).forEach((node) => {
                switch (prop) {
                case 'img':
                    node.src = getImg(item.img.url, imgWidth, imgHeight) || node.src;
                    break;
                case 'link':
                    node.href = href;
                    node.target = item.linkTarget;
                    break;
                default:
                    node.innerText = item[prop];
                    break;
                }
            });
        }
    });
};

/**
 * 填充每个子项各个产品数据
 * @param {HTMLElement} div html dom 结构
 * @param {Object[]} items 每个子项所带有的产品信息列表数据
 */
const addText = (div, items, type) => {
    // nav, count 顺序不能改变, 否则 Popup 内容图可能会出错
    ['nav', 'count'].forEach((i) => {
        const nodes = [...div.querySelectorAll(`[data-${i}]`)];
        // 不存在 data-count 证明此子项只包含一个产品信息, 当前 dom 即为需要填充数据的 dom
        if (!nodes.length) {
            nodes.push(div);
        }
        nodes.forEach((node, index) => {
            const item = JSON.parse(JSON.stringify(items[index % items.length]));
            items[index] = item;
            addSingleText(node, item, type, i);
        });
    });
    return div.innerHTML;
};

/**
 * 生成各个子项的代码
 * @param {Object} itemConfig 各个子项的配置
 * @param {String} style 各个子项最外层 dom 的样式, 主要为 margin-top margin-right
 */
export const generateItemCode = (itemConfig, style, type) => {
    const div = document.createElement('div');
    div.innerHTML = itemConfig.dom;
    let code;
    switch (itemConfig.widgetType) {
    case 'Popup':
        // code = generatePopupCode(div, itemConfig.widgetConfig, itemConfig.item);
        div.innerHTML = generatePopupCode(div, itemConfig.widgetConfig, itemConfig.item[0]);
        code = addText(div, itemConfig.item, type);
        break;
    case 'Carousel':
        div.innerHTML = generateCarouselCode(div, itemConfig, itemConfig.item);
        code = addText(div, itemConfig.item, type);
        break;
    default:
        code = '';
        break;
    }
    return `<li style="float: left;${style}">${code}</li>`;
};

/**
 * 汇总各个子项代码，生成核心代码
 * @param {Object} cfg 总配置
 */
export const generateCoreCode = (cfg, type) => {
    const { column, total, configs } = cfg;
    const config = configs[`_${column}`];
    const conLen = config.length;
    const codes = [];
    const newConfig = []; // 更新之后的配置项
    for (let i = 0; i < total; i++) { // eslint-disable-line no-plusplus
        // 配置项达不到总数时，开始循环使用配置项
        const itemConfig = JSON.parse(JSON.stringify(config[i % conLen]));
        let rightSpace = `margin-right: ${itemConfig.space.right}px;`;
        let topSpace = '';
        if (!((i + 1) % column)) rightSpace = '';
        if (i >= column) topSpace = `margin-top: ${itemConfig.space.top}px;`;
        const itemDom = generateItemCode(itemConfig, topSpace + rightSpace, type);
        newConfig[i] = itemConfig;
        codes.push(itemDom);
    }
    // configs[`_${column}`] = newConfig; // 修改后的配置项覆盖原配置项, 从设计记录编辑时用以还原数据
    newConfig.forEach((item, index) => {
        if (!config[index]) {
            config[index] = {};
        }
        Object.assign(config[index], item);
    });
    return codes.join('');
};

/**
 * 用于获取模板高度及顶部间隙
 * @param {String} dom html dom 结构字符串
 * @param {Number} space 顶部间隙
 */
const getStyle = (dom, space) => {
    const div = document.createElement('div');
    div.innerHTML = dom;
    document.body.appendChild(div);
    let { height } = div.getBoundingClientRect();
    let top = 0;
    document.body.removeChild(div);
    if (space && +space) {
        height -= space;
        top = -space;
    }
    return { height, top };
};

/**
 * 生成代码
 * @param {Object} config 生成模板的配置
 * @param {String} type 生成的代码类型, 取值 editor, preview, code 分别表示 编辑器内部使用, 预览使用, 店铺装修使用
 */
export const generateCode = (config = defaultConfig, type = 'editor') => {
    let title = '';
    // TODO 标题相关后续可独立以做更丰富的样式
    if (config.title) {
        title = `<div style="padding: 20px 0;text-align: center;">
                    <h3 style="margin: 0;font-size: 30px;">${config.title || 'HOT SELLING GOODS'}</h3>
                    <span style="font-size: 16px;">${config.subTitle || '热卖畅销精品'}</span>
                </div>`;
    }
    const core = generateCoreCode(config, type);
    const editorHtml = `<div class="${prefix}-content" ${type === 'editor' ? 'id="contents"' : ''} style="${type === 'editor' ? `position: relative;background: ${config.background};` : ''}margin: 0 auto;padding-bottom: 20px;width: 1200px;overflow: hidden;line-height: normal;">
                            ${title}
                            <ul ${type === 'editor' ? 'id="items"' : ''}>
                                ${core}
                            </ul>
                        </div>`;
    const { height, top } = getStyle(editorHtml, config.topSpace);
    const code = `<div class="J_TWidget ${prefix}" data-title="${descTitle}" data-site="${site}" data-widget-type="Tabs" data-widget-config="{'contentCls': '${prefix}-wrapper', 'effect': 'fade', 'navCls': 'hidden-nav'}" style="margin: 0 auto;width: 950px;">
                    <div class="J_TWidget ${prefix}-wrapper" data-widget-type="Tabs" data-widget-config="{'contentCls': '${prefix}-wrapper', 'effect': 'fade', 'navCls': 'hidden-nav'}" style="height: ${height}px">
                        <div class="${prefix}-wrapper footer-more-trigger" style="padding: 0;width: auto;border: none;line-height: normal;left: auto;top: auto;">
                            <div class="footer-more-trigger" style="top: ${top || '0'}px;left: -485px;padding: 0;width: 1920px;background: ${config.background};border: none;line-height: normal;">
                                ${editorHtml}
                            </div>
                        </div>
                        <ul class="hidden-nav" style="display: none;height: 0;overflow: hidden;"><li>1</li></ul>
                    </div>
                </div>`;
    return type === 'editor' ? editorHtml : code;
};
