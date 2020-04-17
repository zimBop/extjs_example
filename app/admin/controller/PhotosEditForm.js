Ext.define(
		'Podyozhiki.admin.controller.PhotosEditForm',
		{
			extend: 'Ext.app.Controller',
			views: ['Podyozhiki.admin.view.PhotosEditForm'],
			models: ['Podyozhiki.admin.model.Region'],
			stores: ['Podyozhiki.admin.store.Region'],
			init: function() {
				console.log('init controller PhotosEditForm');
				this.control({
					'photos_edit_form': {
						beforeshow: this.onBeforeShowEdit,
						show: this.onShow
					},
					'#photos_edit_send': {
						click: this.onClick
					},
					'#photos_edit_cancel_btn': {
						click: this.onClickReset
					}
				});
			},
			onBeforeShowEdit: function(self, eOpts) {
				console.log('onBeforeShow PhotosForm');
				var id = 0;
				if (self.param) {
					for (var key in self.param) {
						if (Ext.getCmp('photos_edit_' + key)) {
							if (key == 'region_id') { //костылик №1
								this.regionId = self.param['region_id'];
								Ext.getCmp('photos_edit_region_id').setValue(self.param['region_name']);
							} else Ext.getCmp('photos_edit_' + key).setValue(self.param[key]);
						}
					}
					id = self.param['id'];
				}
				this.oldId = id;
			},
			onShow: function(self, eOpts) {
				console.log('onShow PhotosForm');
			},
			onClick: function(self, e, eOpts) {
				console.log('onClick controller PhotosEditForm');
				var data_task = Ext.getCmp('photos_edit_form_form').getValues();
				
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
					'photo[id]': data_task.id,
					'photo[name]': data_task.name,
					'photo[description]': data_task.description,
					'photo[region_id]': data_task.region_id,
					'photo[region_name]': data_task.region_name,
					'photo[oldId]': this.oldId
					//'user[score]': data_task.score
				};

				Ext.Ajax.request({
					url: './editPhoto.php',
					params: par,
					success: function(result, request) {
						if(Podyozhiki.utils.ErrorHandler.checkResult(result.responseText)){
							Ext.getCmp('photos_edit_form').close();
							Ext.getCmp('photos_grid').getStore('Podyozhiki.admin.store.Photos').load();
							Ext.getCmp('photos_edit').disable();
							Ext.getCmp('photos_del').disable();

						}
					},
					failure: function(result, request) {
						Podyozhiki.utils.ErrorHandler.serverError();
					}
				});
			},
			onClickReset: function(self, e, eOpts) {
				console.log('photos controller onClickReset');
				Ext.getCmp('photos_edit_form').close();
			}
		}
);




