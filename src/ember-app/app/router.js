import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-kadri-анкеты-l');
  this.route('i-i-s-kadri-анкеты-e',
  { path: 'i-i-s-kadri-анкеты-e/:id' });
  this.route('i-i-s-kadri-анкеты-e.new',
  { path: 'i-i-s-kadri-анкеты-e/new' });
  this.route('i-i-s-kadri-должности-l');
  this.route('i-i-s-kadri-должности-e',
  { path: 'i-i-s-kadri-должности-e/:id' });
  this.route('i-i-s-kadri-должности-e.new',
  { path: 'i-i-s-kadri-должности-e/new' });
  this.route('i-i-s-kadri-контроль-т-з-l');
  this.route('i-i-s-kadri-контроль-т-з-e',
  { path: 'i-i-s-kadri-контроль-т-з-e/:id' });
  this.route('i-i-s-kadri-контроль-т-з-e.new',
  { path: 'i-i-s-kadri-контроль-т-з-e/new' });
  this.route('i-i-s-kadri-отделы-l');
  this.route('i-i-s-kadri-отделы-e',
  { path: 'i-i-s-kadri-отделы-e/:id' });
  this.route('i-i-s-kadri-отделы-e.new',
  { path: 'i-i-s-kadri-отделы-e/new' });
  this.route('i-i-s-kadri-сотрудники-l');
  this.route('i-i-s-kadri-сотрудники-e',
  { path: 'i-i-s-kadri-сотрудники-e/:id' });
  this.route('i-i-s-kadri-сотрудники-e.new',
  { path: 'i-i-s-kadri-сотрудники-e/new' });
});

export default Router;
