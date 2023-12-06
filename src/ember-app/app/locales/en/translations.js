import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISKadriАнкетыLForm from './forms/i-i-s-kadri-анкеты-l';
import IISKadriДолжностиLForm from './forms/i-i-s-kadri-должности-l';
import IISKadriКонтроль_ТЗLForm from './forms/i-i-s-kadri-контроль-т-з-l';
import IISKadriОтделыLForm from './forms/i-i-s-kadri-отделы-l';
import IISKadriСотрудникиLForm from './forms/i-i-s-kadri-сотрудники-l';
import IISKadriАнкетыEForm from './forms/i-i-s-kadri-анкеты-e';
import IISKadriДолжностиEForm from './forms/i-i-s-kadri-должности-e';
import IISKadriКонтроль_ТЗEForm from './forms/i-i-s-kadri-контроль-т-з-e';
import IISKadriОтделыEForm from './forms/i-i-s-kadri-отделы-e';
import IISKadriСотрудникиEForm from './forms/i-i-s-kadri-сотрудники-e';
import IISKadriАнкетыModel from './models/i-i-s-kadri-анкеты';
import IISKadriДолжностиModel from './models/i-i-s-kadri-должности';
import IISKadriОтделыModel from './models/i-i-s-kadri-отделы';
import IISKadriПроверяемыеModel from './models/i-i-s-kadri-проверяемые';
import IISKadriСотрудникиModel from './models/i-i-s-kadri-сотрудники';
import Контроль ТЗModel from './models/контроль-т-з';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-kadri-анкеты': IISKadriАнкетыModel,
    'i-i-s-kadri-должности': IISKadriДолжностиModel,
    'i-i-s-kadri-отделы': IISKadriОтделыModel,
    'i-i-s-kadri-проверяемые': IISKadriПроверяемыеModel,
    'i-i-s-kadri-сотрудники': IISKadriСотрудникиModel,
    'контроль-т-з': Контроль ТЗModel
  },

  'application-name': 'Kadri',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Kadri',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Kadri',
          title: 'Kadri'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        'отдел-кадров': {
          caption: 'Отдел кадров',
          title: 'Отдел кадров',
          'i-i-s-kadri-контроль-т-з-l': {
            caption: 'Контроль_ ТЗ',
            title: ''
          },
          'i-i-s-kadri-анкеты-l': {
            caption: 'Анкеты',
            title: ''
          },
          'i-i-s-kadri-должности-l': {
            caption: 'Должности',
            title: ''
          },
          'i-i-s-kadri-отделы-l': {
            caption: 'Отделы',
            title: ''
          },
          'i-i-s-kadri-сотрудники-l': {
            caption: 'Сотрудники',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-kadri-анкеты-l': IISKadriАнкетыLForm,
    'i-i-s-kadri-должности-l': IISKadriДолжностиLForm,
    'i-i-s-kadri-контроль-т-з-l': IISKadriКонтроль_ТЗLForm,
    'i-i-s-kadri-отделы-l': IISKadriОтделыLForm,
    'i-i-s-kadri-сотрудники-l': IISKadriСотрудникиLForm,
    'i-i-s-kadri-анкеты-e': IISKadriАнкетыEForm,
    'i-i-s-kadri-должности-e': IISKadriДолжностиEForm,
    'i-i-s-kadri-контроль-т-з-e': IISKadriКонтроль_ТЗEForm,
    'i-i-s-kadri-отделы-e': IISKadriОтделыEForm,
    'i-i-s-kadri-сотрудники-e': IISKadriСотрудникиEForm
  },

});

export default translations;
