import { keys } from '../utils/object';
var all_listen_types = { hover: true, click: true, focus: true };

export default function targets(vnode, binding, listen_types, fn) {

    var targets = keys(binding.modifiers || {}).filter(function (t) {
        return !all_listen_types[t];
    });

    if (binding.value) {
        targets.push(binding.value);
    }

    var listener = function listener() {
        fn({ targets: targets, vnode: vnode });
    };

    keys(all_listen_types).forEach(function (type) {
        if (listen_types[type] || binding.modifiers[type]) {
            vnode.elm.addEventListener(type, listener);
        }
    });

    // Return the list of targets
    return targets;
}