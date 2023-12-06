import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  результат: DS.attr('string'),
  сотрудник: DS.belongsTo('i-i-s-kadri-сотрудники', { inverse: null, async: false }),
  контроль_ТЗ: DS.belongsTo('контроль-т-з', { inverse: 'проверяемые', async: false })
});

export let ValidationRules = {
  результат: {
    descriptionKey: 'models.i-i-s-kadri-проверяемые.validations.результат.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  сотрудник: {
    descriptionKey: 'models.i-i-s-kadri-проверяемые.validations.сотрудник.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  контроль_ТЗ: {
    descriptionKey: 'models.i-i-s-kadri-проверяемые.validations.контроль_ТЗ.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПроверяемыеE', 'i-i-s-kadri-проверяемые', {
    результат: attr('Результат', { index: 0 }),
    сотрудник: belongsTo('i-i-s-kadri-сотрудники', 'Сотрудник', {
      фИО: attr('ФИО', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'фИО' })
  });
};
