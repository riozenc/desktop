Ext.Loader.setConfig({
	enabled : true
});

Ext.application({
	name : 'app',
//	appFolder : 'app',
	
	extend: 'app.Application', 
	
	autoCreateViewport: 'main.Main',
	
	requires : [ 'app.desktop.DesktopApp' ],
	
	
	launch : function() {
		Ext.Msg.alert('Status', 'Changes saved successfully1.');
		// var app = new app.desktop.DesktopApp();
		// app.init();

	},
	init : function() {
		Ext.Msg.alert('Status', 'Changes saved successfully2.');

	}
});
