Ext.define('Podyozhiki.admin.view.PanelCenter', {	extend: 'Ext.Panel',	alias: 'widget.panelcenter',	id:'panelcenter',	region: 'center',	layout: 'border',	title: 'Пользователи',	width: 278,								items:[		{xtype:'users'},		{xtype:'stands'},		{xtype:'photos'},		{xtype:'encourages'},		{xtype:'results'},		{xtype:'diploms'}		   	],	initComponent: function () {		console.log('init view PanelCenter');		this.baseTitle = '';		this.callParent(arguments);	}});