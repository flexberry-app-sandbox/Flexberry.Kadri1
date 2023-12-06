import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  iD: DS.attr('number'),
  дата_проверки: DS.attr('date'),
  проверяемые: DS.hasMany('i-i-s-kadri-проверяемые', { inverse: 'контроль_ТЗ', async: false })
});

export let ValidationRules = {
  iD: {
    descriptionKey: 'models.контроль-т-з.validations.iD.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, integer: true }),
    ],
  },
  дата_проверки: {
    descriptionKey: 'models.контроль-т-з.validations.дата_проверки.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
      validator('presence', true),
    ],
  },
  проверяемые: {
    descriptionKey: 'models.контроль-т-з.validations.проверяемые.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('Контроль_ТЗE', 'контроль-т-з', {
    iD: attr('ID', { index: 0 }),
    дата_проверки: attr('Дата_проверки', { index: 1 }),
    проверяемые: hasMany('i-i-s-kadri-проверяемые', 'Проверяемые', {
      результат: attr('Результат', { index: 0 }),
      сотрудник: belongsTo('i-i-s-kadri-сотрудники', 'Сотрудник', {
        фИО: attr('ФИО', { index: 2, hidden: true })
      }, { index: 1, displayMemberPath: 'фИО' })
    })
  });

  modelClass.defineProjection('Контроль_ТЗL', 'контроль-т-з', {
    iD: attr('ID', { index: 0 }),
    дата_проверки: attr('Дата_проверки', { index: 1 })
  });
};
