Ext.Loader.setConfig({
			enabled : true
		});

Ext.application({
			name : 'app',
			requires: [
			           'app.desktop.DesktopApp'
			       ],
			launch : function() {

				var app = new app.desktop.DesktopApp();
				app.init();

			}
		});
