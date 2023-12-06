import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Kadri',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Kadri',
          title: 'Kadri'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
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
