var isVNode = require('./is-vnode');
var isVText = require('./is-vtext');
var isWidget = require('./is-widget');
var isThunk = require('./is-thunk');

module.exports = handleThunk;

// thunk 本身是类似 react 中的 function 组件
function handleThunk(a, b) {
    var renderedA = a;
    var renderedB = b;

    if (isThunk(b)) {
        renderedB = renderThunk(b, a);
    }

    if (isThunk(a)) {
        renderedA = renderThunk(a, null);
    }

    return {
        a: renderedA,
        b: renderedB,
    };
}

function renderThunk(thunk, previous) {
    var renderedThunk = thunk.vnode;

    if (!renderedThunk) {
        // thunk 的 render 返回的是 vnode
        renderedThunk = thunk.vnode = thunk.render(previous);
    }

    if (
        // 这三种是 virtual-dom 的类型
        !(
            isVNode(renderedThunk) ||
            isVText(renderedThunk) ||
            isWidget(renderedThunk)
        )
    ) {
        throw new Error('thunk did not return a valid node');
    }

    return renderedThunk;
}
