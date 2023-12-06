import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as Контроль_ТЗMixin
} from '../mixins/regenerated/models/контроль-т-з';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(Контроль_ТЗMixin, Validations, {
});

defineProjections(Model);

export default Model;
