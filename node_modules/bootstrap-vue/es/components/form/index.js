import bForm from './form';
import bFormRow from './form-row';
import bFormText from './form-text';
import bFormFeedback from './form-feedback';
import { registerComponents, vueUse } from '../../utils';

/* eslint-disable no-var, no-undef, guard-for-in, object-shorthand */

var components = {
  bForm: bForm,
  bFormRow: bFormRow,
  bFormText: bFormText,
  bFormFeedback: bFormFeedback
};

var VuePlugin = {
  install: function install(Vue) {
    registerComponents(Vue, components);
  }
};

vueUse(VuePlugin);

export default VuePlugin;