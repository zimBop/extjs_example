Ext.Loader.setConfig(
	{ 
		enabled: true,
		paths: 
		{
			UsersApp: './js/app',
			'Ext.ux': './js/app/ux',
			'Ext.utils': './js/app/utils'
		}	
	}
	);
Ext.application(
{
	name: 'Podyozhiki',
	appFolder: './js/app',
	requires: [
	'Podyozhiki.utils.ErrorHandler',
	'Podyozhiki.admin.view.PanelLeft', 
	'Podyozhiki.admin.view.PanelCenter',
	'Podyozhiki.admin.view.Users',	
	'Podyozhiki.admin.view.UsersEditForm',
	'Podyozhiki.admin.view.Stands',	
	'Podyozhiki.admin.view.StandsEditForm',
	'Podyozhiki.admin.view.PanelRight',
	'Podyozhiki.admin.view.PanelRightPhoto',
	'Podyozhiki.admin.view.Photos',	
	'Podyozhiki.admin.view.PhotosEditForm',
	'Podyozhiki.admin.view.Encourages',	
	'Podyozhiki.admin.view.EncouragesEditForm',
	'Podyozhiki.admin.view.Results',
	'Podyozhiki.admin.view.Diploms',
	'Podyozhiki.admin.view.DiplomsEditForm',
	],
	controllers: 
	[
	//'layout',
	'Podyozhiki.admin.controller.PanelCenter',
	'Podyozhiki.admin.controller.PanelLeft',
	'Podyozhiki.admin.controller.Users',
	'Podyozhiki.admin.controller.UsersEditForm',
	'Podyozhiki.admin.controller.Stands',
	'Podyozhiki.admin.controller.StandsEditForm',
	'Podyozhiki.admin.controller.PanelRight',
	'Podyozhiki.admin.controller.PanelRightPhoto',
	'Podyozhiki.admin.controller.Photos',
	'Podyozhiki.admin.controller.PhotosEditForm',
	'Podyozhiki.admin.controller.Encourages',
	'Podyozhiki.admin.controller.EncouragesEditForm',
	'Podyozhiki.admin.controller.Results',
	'Podyozhiki.admin.controller.Diploms',
	'Podyozhiki.admin.controller.DiplomsEditForm',	
	],
		
	launch: function() 
	{
		Ext.create(
			'Ext.container.Viewport', 
			{
				layout: 'border',
				padding: 5,
				id: 'layout',
				items: [
					{
						xtype: 'panelleft'							
					},
					{
						xtype: 'panelcenter'	
					},
					{
						xtype: 'panelright'	
					},
					{
						xtype: 'panelrightphoto'	
					}						
				]
			}
			);
			Ext.getCmp('users').show();
			Ext.getCmp('panelcenter').setTitle(Ext.getCmp('item_users').text);
			Ext.getCmp('item_users').addCls('active_admin_menu');
			Ext.getCmp('users_grid').store.load();
	}
}
);