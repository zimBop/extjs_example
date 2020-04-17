Ext.define('Podyozhiki.admin.view.PhotosEditForm',
		{
			extend: 'Ext.window.Window',
			alias: 'widget.photos_edit_form',
			id: 'photos_edit_form',
			title: 'Редактирование стенда',
			closable: true,
			constrain: true,
			maximizable: false,
			modal: true,
			width: 550,
			height: 240,
			layout: 'border',
			bodyPadding: 5,
			resizable: false,
			closeAction: 'destroy',
			items: [
				{
					xtype: 'container',
					id: 'adminuser_edit_container_scroll',
					autoScroll: true,
					margin: '0',
					width: 535,
					items: [
						{
							xtype: 'form',
							resizable: false,
							region: 'center',
							id: 'photos_edit_form_form',
							frame: true,
							bodyPadding: 5,
							border: false,
							margin: '0',
							height: 160,
							fieldDefaults: {
									labelWidth: 180,
									inputWidth: 300
							},
							items: {
								xtype: 'panel',
								id: 'adminuser_edit_container',
								title: '',
								margin: '0',
								bodyPadding: 10,
								width: 510,
								height: 140,
								items: [
									{
										xtype:'textfield',
										name: 'id',
										id: 'photos_edit_id',
										fieldLabel: 'ID'
									},
									{
										xtype:'textfield',
										name: 'name',
										id: 'photos_edit_name',
										fieldLabel: 'Название'
									},
									{
										xtype:'textfield',
										name: 'description',
										id: 'photos_edit_description',
										fieldLabel: 'Описание'
									},
									{
										xtype: 'combobox',
										fieldLabel: 'Название региона',
										name: 'region_id',
										id: 'photos_edit_region_id',
										value: 2,
										displayField: 'name',
										valueField: 'id',
										store: 'Podyozhiki.admin.store.Region'
									}
								]
							}
						},
						{
							xtype: 'button',
							text: 'Сохранить',
							region: 'east',
							width: 70,
							id: 'photos_edit_send',
							margin: '10 0 0 354'
						},
						{
							xtype: 'button',
							id: 'photos_edit_cancel_btn',
							width: 70,
							text: 'Закрыть',
							margin: '10 0 0 6'
						}


					]
				}],
			initComponent: function( ) {
				console.log('init view PhotosForm');

				this.callParent(arguments);
			}
		}
);




