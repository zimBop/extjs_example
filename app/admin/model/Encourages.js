Ext.define('Podyozhiki.admin.model.Encourages', {
	extend: 'Ext.data.Model',
	fields: [
		{
			name: 'id',
			type: 'int'
		},
		{
			name: 'type',
			type: 'string'
		},
		{
			name: 'item_text',
			type: 'string'
		}
	],
	deleteItem: function(id) {
		Ext.Msg.confirm('Удаление', 'Вы действительно хотите удалить &laquo;подбадривание&raquo;?', function(btn, text) {
			if (btn == 'yes') {
				Ext.Ajax.request({
					url: './deleteEntity.php',
					method:'POST',
					params: {
						'id': id,
						'entity': 'encourage'
					},
					success: function(result, request) {
						if(Podyozhiki.utils.ErrorHandler.checkResult(result.responseText)){
							Ext.getCmp('encourages_grid').getStore('Encourages').load();
							Ext.getCmp('encourages_del').disable();
							Ext.getCmp('encourages_edit').disable();
						}
					},
					failure: function(result, request) {
						Podyozhiki.utils.ErrorHandler.serverError();
						Ext.getCmp('encourages_edit_form').close();
					}
				});
			}
		}, this);

	},
	editItem: function(data) {
		console.log('editItem');
		var edit = Ext.widget('encourages_edit_form', {
			param: data
		});
		edit.center();
		edit.show();
	}
});