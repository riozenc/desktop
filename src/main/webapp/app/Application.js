/**
 * The main application class. An instance of this class is created by app.js
 * when it calls Ext.application(). This is the ideal place to handle
 * application launch and initialization details.
 */
Ext.define('app.Application', {
	extend : 'Ext.app.Application',

	name : 'app',
	views : [],// MVC用到的view
	controllers : [ ],// MVC控制器的名称，会自动到
										// /app/controller下去加载同名的js文件
										// 对于MainController,会去自动加载
										// /app/Controller/MainController.js
										// 这个文件
	stores : [
	// TODO: add global / shared stores here
	],

	launch : function() {
		// TODO - Launch the application
	},

	onAppUpdate : function() {
		Ext.Msg.confirm('Application Update',
				'This application has an update, reload?', function(choice) {
					if (choice === 'yes') {
						window.location.reload();
					}
				});
	}
});
