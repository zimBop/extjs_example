Ext.define('Podyozhiki.admin.view.Encourages', {	extend: 'Ext.form.Panel',	alias: 'widget.encourages',	id: 'encourages',	region: 'center',	layout: 'border',	border: false,	hideMode: 'visibility',	hidden: true,	items: [		{			xtype: 'toolbar',			margin: 0,			region: 'north',			id: 'encourages_btn_toolbar',			items: [				{					xtype: 'button',					text: 'Добавить',					id: 'encourages_add',					iconCls: 'icon-nav_add',					cls: 'x-btn-default-small-over',					margin: 5,					style: {						borderWidth: '1px',						borderColor: '#81A4D0'					}				},				{					xtype: 'button',					text: 'Удалить',					id: 'encourages_del',					iconCls: 'icon-deny_all',					cls: 'x-btn-default-small-over',					margin: 5,					style: {						borderWidth: '1px',						borderColor: '#81A4D0'					},					disabled: true				},				{					xtype: 'button',					text: 'Изменить',					id: 'encourages_edit',					iconCls: 'icon-edit',					cls: 'x-btn-default-small-over',					margin: 5,					style: {						borderWidth: '1px',						borderColor: '#81A4D0'					},					disabled: true				}			]		},		{			xtype: 'gridpanel',			id: 'encourages_grid',			store: 'Podyozhiki.admin.store.Encourages',			margin: 1,			region: 'center',			autoHeight: true,			autoScroll: true,			border: false,			sortableColumns: true,			viewConfig: {				loadingText: 'Загрузка...'			},			columns: [												{					header: 'ID',					dataIndex: 'id',					hidden: true,					flex: 0.2				},				{					header: 'Тип',					dataIndex: 'type',					flex: 0.2				},										{					header: 'Текст',					dataIndex: 'item_text',					flex: 1				}			]		}	],	initComponent: function() {		console.log('init view Encourages');		this.callParent(arguments);	}});