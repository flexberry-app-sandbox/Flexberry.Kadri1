import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  iD: DS.attr('number'),
  дата_приема: DS.attr('date'),
  контакты: DS.attr('string'),
  образование: DS.attr('string'),
  опыт_работы: DS.attr('string'),
  фИО: DS.attr('string'),
  должность: DS.belongsTo('i-i-s-kadri-должности', { inverse: null, async: false }),
  отдел: DS.belongsTo('i-i-s-kadri-отделы', { inverse: null, async: false })
});

export let ValidationRules = {
  iD: {
    descriptionKey: 'models.i-i-s-kadri-сотрудники.validations.iD.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, integer: true }),
    ],
  },
  дата_приема: {
    descriptionKey: 'models.i-i-s-kadri-сотрудники.validations.дата_приема.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
      validator('presence', true),
    ],
  },
  контакты: {
    descriptionKey: 'models.i-i-s-kadri-сотрудники.validations.контакты.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  образование: {
    descriptionKey: 'models.i-i-s-kadri-сотрудники.validations.образование.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  опыт_работы: {
    descriptionKey: 'models.i-i-s-kadri-сотрудники.validations.опыт_работы.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  фИО: {
    descriptionKey: 'models.i-i-s-kadri-сотрудники.validations.фИО.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  должность: {
    descriptionKey: 'models.i-i-s-kadri-сотрудники.validations.должность.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  отдел: {
    descriptionKey: 'models.i-i-s-kadri-сотрудники.validations.отдел.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СотрудникиE', 'i-i-s-kadri-сотрудники', {
    iD: attr('ID', { index: 0 }),
    фИО: attr('ФИО', { index: 1 }),
    контакты: attr('Контакты', { index: 2 }),
    образование: attr('Образование', { index: 3 }),
    опыт_работы: attr('Опыт_работы', { index: 4 }),
    дата_приема: attr('Дата_приема', { index: 5 }),
    отдел: belongsTo('i-i-s-kadri-отделы', 'Отдел', {
      название: attr('Название', { index: 7, hidden: true })
    }, { index: 6, displayMemberPath: 'название' }),
    должность: belongsTo('i-i-s-kadri-должности', 'Должность', {
      название: attr('Название', { index: 9, hidden: true })
    }, { index: 8, displayMemberPath: 'название' })
  });

  modelClass.defineProjection('СотрудникиL', 'i-i-s-kadri-сотрудники', {
    iD: attr('ID', { index: 0 }),
    фИО: attr('ФИО', { index: 1 }),
    контакты: attr('Контакты', { index: 2 }),
    образование: attr('Образование', { index: 3 }),
    опыт_работы: attr('Опыт_работы', { index: 4 }),
    дата_приема: attr('Дата_приема', { index: 5 }),
    отдел: belongsTo('i-i-s-kadri-отделы', 'Название', {
      название: attr('Название', { index: 6 })
    }, { index: -1, hidden: true }),
    должность: belongsTo('i-i-s-kadri-должности', 'Название', {
      название: attr('Название', { index: 7 })
    }, { index: -1, hidden: true })
  });
};
