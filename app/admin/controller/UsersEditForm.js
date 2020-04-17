Ext.define(
		'Podyozhiki.admin.controller.UsersEditForm',
		{
			extend: 'Ext.app.Controller',
			views: ['Podyozhiki.admin.view.UsersEditForm'],
			models: ['Podyozhiki.admin.model.Region'],
			stores: ['Podyozhiki.admin.store.Region'],
			init: function() {
				console.log('init controller UsersEditForm');
				this.control({
					'users_edit_form': {
						beforeshow: this.onBeforeShowEdit,
						show: this.onShow
					},
					'#users_edit_send': {
						click: this.onClick
					},
					'#users_edit_cancel_btn': {
						click: this.onClickReset
					}
				});
			},
			onBeforeShowEdit: function(self, eOpts) {
				console.log('onBeforeShow UsersForm');
				var id = 0;
				if (self.param) {
					for (var key in self.param) {
						if (Ext.getCmp('users_edit_' + key)) {
							
							if (key == 'region_id') { //костылик №1
								this.regionId = self.param['region_id'];
								Ext.getCmp('users_edit_region_id').setValue(self.param['region_name']);
							} else Ext.getCmp('users_edit_' + key).setValue(self.param[key]);
							
						}
					}
					id = self.param['id'];
				}
				this.oldId = id;
			},
			onShow: function(self, eOpts) {
				console.log('onShow UsersForm');
			},
			onClick: function(self, e, eOpts) {
				console.log('onClick controller UsersEditForm');
				var data_task = Ext.getCmp('users_edit_form_form').getValues();
				
				var number_reg = /^[0-9]*$/;
				
				if (!number_reg.test(data_task.id)) {
					Ext.MessageBox.alert('Ошибка', 'Значение поля «ID»  должно быть числом.');
					return false;
				}

				if (data_task.id <= '0') {
					Ext.MessageBox.alert('Ошибка', 'Значение поля «ID»  должно быть больше нуля.');
					return false;
				}
				
				if (data_task.number != '') {
					if (data_task.number < '0') {
						Ext.MessageBox.alert('Ошибка', 'Значение поля «Порядок выступления» не должно быть отрицательным.');
						return false;
					}					
							
					if (!number_reg.test(data_task.number)) {
						Ext.MessageBox.alert('Ошибка', 'Значение поля «Порядок выступления»  должно быть числом.');
						return false;
					}
				}
			
				if ((typeof data_task.region_id) != 'number') data_task.region_id = this.regionId; //костылик №1
				
				var par = {
					'user[id]': data_task.id,
					'user[number]': data_task.number,
					'user[name]': data_task.name,
					'user[surname]': data_task.surname,
					'user[description]': data_task.description,
					//'user[max_points]': data_task.max_points,
					'user[region_id]': data_task.region_id,
					'user[theme1_points]': data_task.theme1_points,
					'user[theme2_points]': data_task.theme2_points,
					'user[theme3_points]': data_task.theme3_points,
					'user[theme4_points]': data_task.theme4_points,
					'user[theme5_points]': data_task.theme5_points,
					'user[theme6_points]': data_task.theme6_points,
					'user[theme7_points]': data_task.theme7_points,
					'user[theme8_points]': data_task.theme8_points,
					'user[theme9_points]': data_task.theme9_points,
					'user[theme10_points]': data_task.theme10_points,
					'user[region_name]': data_task.region_name,
					'user[points_left]': data_task.points_left,
					'user[voted_for_photo]': data_task.voted_for_photo,
					'user[score]': data_task.score,
					'user[oldId]': this.oldId			
				};

				Ext.Ajax.request({
					url: './editUser.php',
					params: par,
					success: function(result, request) {
						if(Podyozhiki.utils.ErrorHandler.checkResult(result.responseText)){
							Ext.getCmp('users_edit_form').close();
							Ext.getCmp('users_grid').getStore('Podyozhiki.admin.store.Users').load();
							Ext.getCmp('users_edit').disable();
							Ext.getCmp('users_del').disable();

						}
					},
					failure: function(result, request) {
						Podyozhiki.utils.ErrorHandler.serverError();
					}
				});
			},
			onClickReset: function(self, e, eOpts) {
				console.log('Users controller onClickReset');
				Ext.getCmp('users_edit_form').close();
			}
		}
);




