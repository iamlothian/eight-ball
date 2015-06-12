Router.route('/', function () {
  this.render('Home', {
  	data: function () { 
  		return {
  			user: Meteor.user(),
  			json_user: JSON.stringify(Meteor.user())
  		}
  	}
  });

});