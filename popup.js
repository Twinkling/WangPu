((global) => {
    const Popup = () => {
        document.querySelectorAll('[data-widget-type=Popup]').forEach(popupNode => {
            const wrap = document.body;
            const { trigger, align } = JSON.parse(popupNode.dataset.widgetConfig.replace(/'/g, '"'));
            const { node, offset, points } = align;
            const nodeDom = wrap.querySelector(node);
            const {top, left} = getPositionParent({ dom: nodeDom, top: 0, left: 0 }, popupNode);
            const pos = getOffsetPos(nodeDom, popupNode, { top: top + offset[1], left: left + offset[0] }, points);
            const triggerDom = wrap.querySelector(trigger);
            console.log(pos);
            /*
            popupNode.style.position = 'absolute';
            popupNode.style.top = `${pos.top}px`;
            popupNode.style.left = `${pos.left}px`;
            popupNode.style.zIndex = 99999;
            popupNode.style.visibility = 'hidden';
            triggerDom.addEventListener('mouseenter', () => {
                popupNode.style.visibility = 'visible';
            });
            triggerDom.addEventListener('mouseleave', () => {
                popupNode.style.visibility = 'hidden';
            });
            popupNode.addEventListener('mouseenter', () => {
                popupNode.style.visibility = 'visible';
            });
            popupNode.addEventListener('mouseleave', () => {
                popupNode.style.visibility = 'hidden';
            });
            */
        });
    }
    const getPositionParent = ({ dom: node1, top, left }, node2) => {
        let dom;
        const style = window.getComputedStyle(node1);
        if (node1.contains(node2)) {
            dom = node1;
        } else {
            top = top + node1.offsetTop + parseInt(style.borderTopWidth, 10);
            left = left + node1.offsetLeft + parseInt(style.borderLeftWidth, 10);
            node1 = node1.offsetParent;
        }
        return dom ? { dom, top, left } : getPositionParent({ dom: node1, top, left }, node2);
    }
    const getOffsetPos = (node, popupNode, {top, left}, [nodePos, popupPos]) => {
        const { top: nodeTop, left: nodeLeft } = getNodePos(node, nodePos, 1);
        const { top: popTop, left: popLeft } = getNodePos(popupNode, popupPos, 0);
        console.log(top, left, nodeTop, nodeLeft, popTop, popLeft);
        return { top: top + nodeTop + popTop, left: left + nodeLeft + popLeft };
    };
    const getNodePos = (node, nodePos, type) => {
        const {clientWidth, clientHeight} = node;
        let top = 0;
        switch(nodePos[0]) {
            case 'c':
                top = type ? top + clientHeight / 2 : top - clientHeight / 2;
                break;
            case 'b':
                top = type ? top + clientHeight : top - clientHeight;
            case 't':
            default: 
                top = 0;
                break;
        }
        let left = 0;
        switch(nodePos[1]) {
            case 'c':
                left = type ? left + clientWidth / 2 : left - clientWidth / 2;
                break;
            case 'r':
                left = type ? left + clientWidth : left - clientWidth;
                break;
            case 'l':
            default: 
                left = 0;
                break;
        }
        return {top, left};
    }
    global.Popup = Popup;
})(window);