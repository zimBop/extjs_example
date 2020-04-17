Ext.define(
	'Podyozhiki.admin.controller.DiplomsEditForm',
	{
		extend: 'Ext.app.Controller',
		views: ['Podyozhiki.admin.view.DiplomsEditForm'],
		models: ['Podyozhiki.admin.model.Diploms'],
		stores: ['Podyozhiki.admin.store.Diploms'],
		init: function() {
			console.log('init controller DiplomsEditForm');
			this.control({
				'diploms_edit_form': {
					beforeshow: this.onBeforeShowEdit,
					show: this.onShow
				},
				'#diploms_edit_cancel_btn': {
					click: this.onClickReset
				}
			});
			this.getStore('Podyozhiki.admin.store.Diploms').on('load', this.onLoadStore, this);
		},
		onBeforeShowEdit: function(self, eOpts) {
			console.log('onBeforeShow DiplomsForm');
			if (self.param) {
				for (var key in self.param) {
					if (Ext.getCmp('diploms_edit_' + key)) {
						Ext.getCmp('diploms_edit_' + key).setValue(self.param[key]);
					}
				}
			}
		},
		onShow: function(self, eOpts) {
			console.log('onShow DiplomsForm');
		},
		onClickReset: function(self, e, eOpts) {
			console.log('diplomsEditForm controller onClickReset');
			Ext.getCmp('diploms_edit_form').close();
			Ext.getStore('Podyozhiki.admin.store.Diploms');
		},
		onLoadStore: function(self, records, successful, operation, eOpts) {	
			console.log('diplomsEditForm controller onLoadStore');
			var diplomsToPrint = false;
			for (var i = 0; i <= records.length-1; i++) {
				if (!records[i].data.printed) {							
					diplomsToPrint = true;
					break;						
				}
			}				
			if (!diplomsToPrint) {
				Ext.getCmp('item_diploms').removeCls('must_print');
			}
		}
	}
);




