Ext.define(
		'Podyozhiki.admin.controller.StandsEditForm',
		{
			extend: 'Ext.app.Controller',
			views: ['Podyozhiki.admin.view.StandsEditForm'],
			models: ['Podyozhiki.admin.model.Region'],
			stores: ['Podyozhiki.admin.store.Region'],
			init: function() {
				console.log('init controller StandsEditForm');
				this.control({
					'stands_edit_form': {
						beforeshow: this.onBeforeShowEdit,
						show: this.onShow
					},
					'#stands_edit_send': {
						click: this.onClick
					},
					'#stands_edit_cancel_btn': {
						click: this.onClickReset
					}
				});
			},
			onBeforeShowEdit: function(self, eOpts) {
				console.log('onBeforeShow StandsForm');
				var id = 0;
				if (self.param) {
					for (var key in self.param) {
						if (Ext.getCmp('stands_edit_' + key)) {
							if (key == 'region_id') { //костылик №1
								this.regionId = self.param['region_id'];
								Ext.getCmp('stands_edit_region_id').setValue(self.param['region_name']);
							} else Ext.getCmp('stands_edit_' + key).setValue(self.param[key]);
						}
					}
					id = self.param['id'];
				}
				this.oldId = id;
			},
			onShow: function(self, eOpts) {
				console.log('onShow StandsForm');
			},
			onClick: function(self, e, eOpts) {
				console.log('onClick controller StandsEditForm');
				var data_task = Ext.getCmp('stands_edit_form_form').getValues();
				
				var number_reg = /^[0-9]*$/;
				
				if (!number_reg.test(data_task.id)) {
					Ext.MessageBox.alert('Ошибка', 'Значение поля «ID»  должно быть числом.');
					return false;
				}

				if (data_task.id <= '0') {
					Ext.MessageBox.alert('Ошибка', 'Значение поля «ID»  должно быть больше нуля.');
					return false;
				}
				
				if ((typeof data_task.region_id) != 'number') data_task.region_id = this.regionId;
				
				var par = {
					'stand[id]': data_task.id,
					'stand[name]': data_task.name,
					'stand[description]': data_task.description,
					'stand[region_id]': data_task.region_id,
					'stand[region_name]': data_task.region_name,
					'stand[oldId]': this.oldId
					//'user[score]': data_task.score
				};

				Ext.Ajax.request({
					url: './editStand.php',
					params: par,
					success: function(result, request) {
						if(Podyozhiki.utils.ErrorHandler.checkResult(result.responseText)){
							Ext.getCmp('stands_edit_form').close();
							Ext.getCmp('stands_grid').getStore('Podyozhiki.admin.store.Stands').load();
							Ext.getCmp('stands_edit').disable();
							Ext.getCmp('stands_del').disable();

						}
					},
					failure: function(result, request) {
						Podyozhiki.utils.ErrorHandler.serverError();
					}
				});
			},
			onClickReset: function(self, e, eOpts) {
				console.log('stands controller onClickReset');
				Ext.getCmp('stands_edit_form').close();
			}
		}
);




