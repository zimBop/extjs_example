Ext.define('Podyozhiki.admin.model.Stands', {
	extend: 'Ext.data.Model',
	fields: [
		{
			name: 'id',
			type: 'int'
		},
		{
			name: 'name',
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
			name: 'region_name',
			type: 'string'
		},		
		{
			name: 'score',
			type: 'int'
		}
	],
	deleteItem: function(id) {
		Ext.Msg.confirm('Удаление', 'Вы действительно хотите удалить стенд?', function(btn, text) {
			if (btn == 'yes') {
				Ext.Ajax.request({
					url: './deleteEntity.php',
					method:'POST',
					params: {
						'id': id,
						'entity': 'stand'
					},
					success: function(result, request) {
						if(Podyozhiki.utils.ErrorHandler.checkResult(result.responseText)){
							Ext.getCmp('stands_grid').getStore('Stands').load();
							Ext.getCmp('stands_del').disable();
							Ext.getCmp('stands_edit').disable();
						}
					},
					failure: function(result, request) {
						Podyozhiki.utils.ErrorHandler.serverError();
						Ext.getCmp('stands_edit_form').close();
					}
				});
			}
		}, this);

	},
	editItem: function(data) {
		console.log('editItem');
		var edit = Ext.widget('stands_edit_form', {
			param: data
		});
		edit.center();
		edit.show();
	}
});