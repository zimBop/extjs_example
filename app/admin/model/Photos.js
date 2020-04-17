Ext.define('Podyozhiki.admin.model.Photos', {
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
		Ext.Msg.confirm('Удаление', 'Вы действительно хотите удалить фотографию?', function(btn, text) {
			if (btn == 'yes') {
				Ext.Ajax.request({
					url: './deleteEntity.php',
					method:'POST',
					params: {
						'id': id,
						'entity': 'photo'
					},
					success: function(result, request) {
						if(Podyozhiki.utils.ErrorHandler.checkResult(result.responseText)){
							Ext.getCmp('photos_grid').getStore('Photos').load();
							Ext.getCmp('photos_del').disable();
							Ext.getCmp('photos_edit').disable();
						}
					},
					failure: function(result, request) {
						Podyozhiki.utils.ErrorHandler.serverError();
						Ext.getCmp('photos_edit_form').close();
					}
				});
			}
		}, this);

	},
	editItem: function(data) {
		console.log('editItem');
		var edit = Ext.widget('photos_edit_form', {
			param: data
		});
		edit.center();
		edit.show();
	}
});