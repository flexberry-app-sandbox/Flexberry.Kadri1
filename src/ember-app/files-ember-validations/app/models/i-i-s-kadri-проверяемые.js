import {
  defineNamespace,
  defineProjections,
  Model as ПроверяемыеMixin
} from '../mixins/regenerated/models/i-i-s-kadri-проверяемые';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ПроверяемыеMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
