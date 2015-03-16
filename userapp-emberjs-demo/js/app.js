Ember.Application.initializer({
  name: 'userapp',
  initialize: function(container, application) {
  	Ember.UserApp.setup(application, { appId: '5500f2af7a616' });
  }
});

App = Ember.Application.create();

App.Router.map(function() {
  this.route('signup');
  this.route('login');
  this.route('articles');
});

App.ApplicationRoute = Ember.Route.extend(Ember.UserApp.ApplicationRouteMixin);
App.SignupController = Ember.Controller.extend(Ember.UserApp.FormControllerMixin);
App.LoginController = Ember.Controller.extend(Ember.UserApp.FormControllerMixin);
App.IndexRoute = Ember.Route.extend(Ember.UserApp.ProtectedRouteMixin);

App.articlesController = Ember.ArrayController.create();
App.ArticlesRoute = Ember.Route.extend(Ember.UserApp.ProtectedRouteMixin, {
	beforeModel: function() {
		$.get('articles', function(data) {
			App.articlesController.set('content', data);
		});
	}
});