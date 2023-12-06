import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ПроверяемыеMixin
} from '../mixins/regenerated/models/i-i-s-kadri-проверяемые';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ПроверяемыеMixin, Validations, {
});

defineProjections(Model);

export default Model;
