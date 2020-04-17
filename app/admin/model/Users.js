Ext.define('Podyozhiki.admin.model.Users', {
	extend: 'Ext.data.Model',
	fields: [
		{
			name: 'id',
			type: 'int'
		},
		{
			name: 'number',
			type: 'int'
		},
		{
			name: 'name',
			type: 'string'
		},		
		{
			name: 'surname',
			type: 'string'
		},
		{
			name: 'description',
			type: 'string'
		},
		{
			name: 'region_id',
			type: 'string'
		},
		{
			name: 'theme1_points',
			type: 'string'
		},
		{
			name: 'theme2_points',
			type: 'string'
		},
		{
			name: 'theme3_points',
			type: 'string'
		},
		{
			name: 'theme4_points',
			type: 'string'
		},
		{
			name: 'theme5_points',
			type: 'string'
		},
		{
			name: 'theme6_points',
			type: 'string'
		},
		{
			name: 'theme7_points',
			type: 'string'
		},
		{
			name: 'theme8_points',
			type: 'string'
		},
		{
			name: 'theme9_points',
			type: 'string'
		},
		{
			name: 'theme10_points',
			type: 'string'
		},
		{
			name: 'region_name',
			type: 'string'
		},		
		{
			name: 'points_left',
			type: 'int'
		},
		{
			name: 'voted_for_photo',
			type: 'string'
		},
		{
			name: 'voted_for_person',
			type: 'string'
		},
		{
			name: 'score',
			type: 'int'
		}
	],
	deleteItem: function(id) {
		Ext.Msg.confirm('Удаление', 'Вы действительно хотите удалить пользователя?', function(btn, text) {
			if (btn == 'yes') {
				Ext.Ajax.request({
					url: './deleteEntity.php',
					method:'POST',
					params: {
						'id': id,
						'entity': 'person'
					},
					success: function(result, request) {
						if(Podyozhiki.utils.ErrorHandler.checkResult(result.responseText)){
							Ext.getCmp('users_grid').getStore('Users').load();
							Ext.getCmp('users_del').disable();
							Ext.getCmp('users_edit').disable();
						}
					},
					failure: function(result, request) {
						Podyozhiki.utils.ErrorHandler.serverError();
						Ext.getCmp('users_edit_form').close();
					}
				});
			}
		}, this);

	},
	editItem: function(data) {
		console.log('editItem');
		var edit = Ext.widget('users_edit_form', {
			param: data
		});
		edit.center();
		edit.show();
	}
});