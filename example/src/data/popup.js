export default {
    datas: [{
        type: 'Popup',
        config: {
            trigger: '.mg-gong-trigger1',
            align: {
                node: '.mg-gong-trigger1',
                points: ['cc', 'cc'],
                offset: [0, 0],
            },
        },
        style: {
            width: '300px',
            height: '300px',
        },
        dataConfig: {
            imgUrl: '', // 以 imgURL 为主, 存在 imgURL 证明是切换图片
            background: 'mask0', // 图片蒙版
        },
    }],
};
