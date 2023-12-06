import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as АнкетыMixin
} from '../mixins/regenerated/models/i-i-s-kadri-анкеты';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(АнкетыMixin, Validations, {
});

defineProjections(Model);

export default Model;
