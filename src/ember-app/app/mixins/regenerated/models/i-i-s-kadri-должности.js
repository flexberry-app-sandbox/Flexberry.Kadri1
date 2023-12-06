import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  iD: DS.attr('number'),
  название: DS.attr('string'),
  оклад: DS.attr('number')
});

export let ValidationRules = {
  iD: {
    descriptionKey: 'models.i-i-s-kadri-должности.validations.iD.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, integer: true }),
    ],
  },
  название: {
    descriptionKey: 'models.i-i-s-kadri-должности.validations.название.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  оклад: {
    descriptionKey: 'models.i-i-s-kadri-должности.validations.оклад.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ДолжностиE', 'i-i-s-kadri-должности', {
    iD: attr('ID', { index: 0 }),
    название: attr('Название', { index: 1 }),
    оклад: attr('Оклад', { index: 2 })
  });

  modelClass.defineProjection('ДолжностиL', 'i-i-s-kadri-должности', {
    iD: attr('ID', { index: 0 }),
    название: attr('Название', { index: 1 }),
    оклад: attr('Оклад', { index: 2 })
  });
};
