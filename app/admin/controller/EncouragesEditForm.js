Ext.define(
		'Podyozhiki.admin.controller.EncouragesEditForm',
		{
			extend: 'Ext.app.Controller',
			views: ['Podyozhiki.admin.view.EncouragesEditForm'],
			models: ['Podyozhiki.admin.model.Region'],
			stores: ['Podyozhiki.admin.store.Region'],
			init: function() {
				console.log('init controller EncouragesEditForm');
				this.control({
					'encourages_edit_form': {
						beforeshow: this.onBeforeShowEdit,
						show: this.onShow
					},
					'#encourages_edit_send': {
						click: this.onClick
					},
					'#encourages_edit_cancel_btn': {
						click: this.onClickReset
					}


				});
			},
			onBeforeShowEdit: function(self, eOpts) {
				console.log('onBeforeShow EncouragesForm');
				var id = 0;
				if (self.param) {
					for (var key in self.param) {
						if (Ext.getCmp('encourages_edit_' + key)) {
							Ext.getCmp('encourages_edit_' + key).setValue(self.param[key]);							
						}
					}
					id = self.param['id'];
				}

			},
			onShow: function(self, eOpts) {
				console.log('onShow EncouragesForm');
			},
			onClick: function(self, e, eOpts) {
				console.log('onClick controller EncouragesEditForm');
				var data_task = Ext.getCmp('encourages_edit_form_form').getValues();
				
				var par = {
					'encourage[id]': data_task.id,
					'encourage[type]': data_task.type,
					'encourage[item_text]': data_task.item_text
				};

				Ext.Ajax.request({
					url: '/editEncourage.php',
					params: par,
					success: function(result, request) {
						if(Podyozhiki.utils.ErrorHandler.checkResult(result.responseText)){
							Ext.getCmp('encourages_edit_form').close();
							Ext.getCmp('encourages_grid').getStore('Podyozhiki.admin.store.Encourages').load();
							Ext.getCmp('encourages_edit').disable();
							Ext.getCmp('encourages_del').disable();
						}
					},
					failure: function(result, request) {
						Podyozhiki.utils.ErrorHandler.serverError();
					}
				});
			},
			onClickReset: function(self, e, eOpts) {
				console.log('Encourages controller onClickReset');
				Ext.getCmp('encourages_edit_form').close();
			}
		}
);




