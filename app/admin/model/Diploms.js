Ext.define('Podyozhiki.admin.model.Diploms', {
	extend: 'Ext.data.Model',
	fields: [
		{
			name: 'printed',
			type: 'int'
		},		
		{
			name: 'id',
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
			name: 'region_name',
			type: 'string'
		},
		{
			name: 'score',
			type: 'int'
		}
	],
	editItem: function(data) {
		console.log('editItem');
		var edit = Ext.widget('diploms_edit_form', {
			param: data
		});
		edit.center();
		edit.show();
	}
});