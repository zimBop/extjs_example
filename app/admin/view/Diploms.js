Ext.define('Podyozhiki.admin.view.Diploms', {	extend: 'Ext.form.Panel',	alias: 'widget.diploms',	id: 'diploms',	region: 'center',	layout: 'border',	border: false,	hideMode: 'visibility',	hidden: true,	items:			[								{					xtype: 'gridpanel',					id: 'diploms_grid',					store: 'Podyozhiki.admin.store.Diploms',					margin: 1,					region: 'center',					autoHeight: true,					autoScroll: true,					border: false,					sortableColumns: true,					viewConfig: {						loadingText: 'Загрузка...',						//enableTextSelection: true						stripeRows: false,						getRowClass: function(record) { 							return record.get('printed') ? '' : 'red'; 						} 					},					columns:							[								{									header: 'ID',									dataIndex: 'id',									hidden: true,									sortable: false,									flex: 1								},								{									header: 'Напечатан',									dataIndex: 'printed',									hidden: true,									flex: 1								},								{									header: 'Имя',									dataIndex: 'name',									sortable: false,									flex: 1								},								{									header: 'Фамилия',									dataIndex: 'surname',									sortable: false,									flex: 1																},																{									header: 'Регион',									dataIndex: 'region_name',									sortable: false,									flex: 1																},								{									header: 'Набрано баллов',									dataIndex: 'score',									sortable: false,									flex: 0.5								}							]				}],	initComponent: function() {		console.log('init view Diploms');		this.callParent(arguments);	}});