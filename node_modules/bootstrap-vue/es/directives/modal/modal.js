import target from '../../utils/target';

var listen_types = { click: true };

export default {
    // eslint-disable-next-line no-shadow-restricted-names
    bind: function bind(undefined, binding, vnode) {
        target(vnode, binding, listen_types, function (_ref) {
            var targets = _ref.targets,
                vnode = _ref.vnode;

            targets.forEach(function (target) {
                vnode.context.$root.$emit('bv::show::modal', target, vnode.elm);
            });
        });
    }
};