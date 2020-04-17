Ext.define('Podyozhiki.admin.model.Results', {
	extend: 'Ext.data.Model',
	fields: [
		{
			name: 'position',
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
			name: 'region_name',
			type: 'string'
		},
		{
			name: 'score',
			type: 'int'
		}
	]
});