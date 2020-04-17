Ext.define('Podyozhiki.admin.controller.Results', {
	extend: 'Ext.app.Controller',
	models: ['Podyozhiki.admin.model.Results'],
	views: ['Podyozhiki.admin.view.Results'],
	stores: ['Podyozhiki.admin.store.Results'],
	init: function() {
		console.log('init controller Results');
		this.getStore('Podyozhiki.admin.store.Results').on('load', this.onLoadStore, this);
	},
	onLoadStore: function(self, records, successful, operation, eOpts) {
		if (!successful) {
			var raw = self.getProxy().getReader().rawData;
			if (raw != undefined) {
				Podyozhiki.utils.ErrorHandler.checkResultStore(raw);
			}
			else
				Podyozhiki.utils.ErrorHandler.serverError();
		}
	}
});