Ext.define('Podyozhiki.admin.view.UsersEditForm',
		{
			extend: 'Ext.window.Window',
			alias: 'widget.users_edit_form',
			id: 'users_edit_form',
			title: 'Редактирование пользователя',
			closable: true,
			constrain: true,
			maximizable: false,
			modal: true,
			width: 623,
			height: 550,
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
					width: 614,
					items: [
						{
							xtype: 'form',
							resizable: false,
							region: 'center',
							id: 'users_edit_form_form',
							frame: true,
							bodyPadding: 5,
							border: false,
							margin: '0',
							height: 450,
							fieldDefaults: {
									labelWidth: 150,
									inputWidth: 400
							},
							items: {
								xtype: 'panel',
								id: 'adminuser_edit_container',
								title: '',
								margin: '0',
								bodyPadding: 0,
								layout: 'accordion',
								width: 580,
								height: 400,
								items: [
									{
										title: 'Главное',										
										id: 'panel1',
										bodyPadding: 10,
										items:[
											{
											  xtype:'textfield',
											  name: 'id',
												id: 'users_edit_id',												
                        fieldLabel: 'ID'
											},
											{
											  xtype:'textfield',
											  name: 'number',
												id: 'users_edit_number',
                        fieldLabel: 'Порядок выступления'
											},
											{
											  xtype:'textfield',
											  name: 'name',
												id: 'users_edit_name',
                        fieldLabel: 'Имя'
											},
											{
											  xtype:'textfield',
											  name: 'surname',
												id: 'users_edit_surname',
												fieldLabel: 'Фамилия'
											},
											{
											  xtype:'textfield',
											  name: 'description',
												id: 'users_edit_description',
												fieldLabel: 'Описание'
											},										
											{
												xtype: 'combobox',
												fieldLabel: 'Название региона',
												name: 'region_id',
												id: 'users_edit_region_id',
												value: 27,
												displayField: 'name',
												valueField: 'id',
												store: 'Podyozhiki.admin.store.Region'
											}
										]
										
									},
									{
										title: 'Игра',
										id: 'panel2',
										bodyPadding: 10,
										items:[
											{
											  xtype:'textfield',
											  name: 'theme1_points',
												id: 'users_edit_theme1_points',
												inputWidth: 100,
                        fieldLabel: 'Тема 1'
											},
											{
											  xtype:'textfield',
											  name: 'theme2_points',
												id: 'users_edit_theme2_points',
												inputWidth: 100,
                        fieldLabel: 'Тема 2'
											},
											{
											  xtype:'textfield',
											  name: 'theme3_points',
												id: 'users_edit_theme3_points',
												inputWidth: 100,
                        fieldLabel: 'Тема 3'
											},
											{
											  xtype:'textfield',
											  name: 'theme4_points',
												id: 'users_edit_theme4_points',
												inputWidth: 100,
                        fieldLabel: 'Тема 4'
											},
											{
											  xtype:'textfield',
											  name: 'theme5_points',
												id: 'users_edit_theme5_points',
												inputWidth: 100,
                        fieldLabel: 'Тема 5'
											},
																						{
											  xtype:'textfield',
											  name: 'theme6_points',
												id: 'users_edit_theme6_points',
												inputWidth: 100,
                        fieldLabel: 'Тема 6'
											},
																						{
											  xtype:'textfield',
											  name: 'theme7_points',
												id: 'users_edit_theme7_points',
												inputWidth: 100,
                        fieldLabel: 'Тема 7'
											},
																						{
											  xtype:'textfield',
											  name: 'theme8_points',
												id: 'users_edit_theme8_points',
												inputWidth: 100,
                        fieldLabel: 'Тема 8'
											},
																						{
											  xtype:'textfield',
											  name: 'theme9_points',
												id: 'users_edit_theme9_points',
												inputWidth: 100,
                        fieldLabel: 'Тема 9'
											},
																						{
											  xtype:'textfield',
											  name: 'theme10_points',
												id: 'users_edit_theme10_points',
												inputWidth: 100,
                        fieldLabel: 'Тема 10'
											}											
										]
									}
								]
							}
						},
						{
							xtype: 'button',
							text: 'Сохранить',
							region: 'east',
							width: 70,
							id: 'users_edit_send',
							margin: '10 0 0 431'
						},
						{
							xtype: 'button',
							id: 'users_edit_cancel_btn',
							width: 70,
							text: 'Закрыть',
							margin: '10 0 0 6'
						}


					]
				}],
			initComponent: function( ) {
				console.log('init view UsersForm');
				if (Ext.ieVersion > 0) {
					this.items[0].items[0].items.items[0].padding = '0 0 2 0';
					this.items[0].items[0].items.items[1].padding = '1 0 1 0';
					this.items[0].items[0].items.items[2].padding = '1 0 1 0';
					this.items[0].items[0].items.items[3].padding = '1 0 1 0';
					this.items[0].items[0].items.items[4].padding = '1 0 1 0';
					this.items[0].items[0].items.items[5].padding = '1 0 1 0';
					this.items[0].items[0].items.padding = '4';
				}
				this.callParent(arguments);
			}
		}
);




