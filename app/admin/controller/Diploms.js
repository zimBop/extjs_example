Ext.define('Podyozhiki.admin.controller.Diploms', {
	extend: 'Ext.app.Controller',
	models: ['Podyozhiki.admin.model.Diploms'],
	views: ['Podyozhiki.admin.view.Diploms'],
	stores: ['Podyozhiki.admin.store.Diploms'],
	init: function() {
		console.log('init controller Diploms');
		this.control({
			'diploms #diploms_grid': {
				itemdblclick: this.onClickEdit
			}
		});
		this.getStore('Podyozhiki.admin.store.Diploms').on('load', this.onLoadStore, this);
	},	
	onClickEdit: function(self, record, item, index, e, eOpts) {
		console.log('onClickEdit');
		var item = Ext.getCmp('diploms_grid').getSelectionModel().getLastSelected();
        item.editItem(Ext.getCmp('diploms_grid').getSelectionModel().getLastSelected().data);				
				
		var par = {
					'id': record.data.id	
				};

			Ext.Ajax.request({
				url: './editDiplom.php',
				params: par,
				failure: function(result, request) {
					Podyozhiki.utils.ErrorHandler.serverError();
				}
			});
			
		Ext.getCmp('diploms_grid').getStore('Podyozhiki.admin.store.Diploms').load();
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