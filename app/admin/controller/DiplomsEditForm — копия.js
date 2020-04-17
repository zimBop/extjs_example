Ext.define(
		'Podyozhiki.admin.controller.DiplomsEditForm',
		{
			extend: 'Ext.app.Controller',
			views: ['Podyozhiki.admin.view.DiplomsEditForm'],
			models: ['Podyozhiki.admin.model.Region'],
			stores: ['Podyozhiki.admin.store.Region'],
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
				console.log('diploms controller onClickReset');
				Ext.getCmp('diploms_edit_form').close();
				//Ext.getCmp('diploms_grid').getStore('Podyozhiki.admin.store.Diploms').load();				

				var diploms = Ext.getCmp('diploms_grid').store.load();
				var diplomsToPrint = false;
				for (num in diploms.data.items) {
					if (!diploms.data.items[num].data.printed) {							
							diplomsToPrint = true;
							break;						
						}
				}				
				if (!diplomsToPrint) {
					console.log('nen');
					Ext.getCmp('item_diploms').removeCls('must_print');
				}
			}
		}
);




