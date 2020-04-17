Ext.define('Podyozhiki.admin.view.DiplomsEditForm',
		{
			extend: 'Ext.window.Window',
			alias: 'widget.diploms_edit_form',
			id: 'diploms_edit_form',
			title: 'Данные для диплома',
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
							id: 'diploms_edit_form_form',
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
										name: 'name',
										id: 'diploms_edit_name',
										fieldLabel: 'Имя'
									},
									{
										xtype:'textfield',
										name: 'surname',
										id: 'diploms_edit_surname',
										fieldLabel: 'Фамилия'
									},
									{
										xtype:'textfield',
										name: 'region_name',
										id: 'diploms_edit_region_name',
										fieldLabel: 'Регион'
									},
									{
										xtype:'textfield',
										name: 'score',
										id: 'diploms_edit_score',
										fieldLabel: 'Набрано баллов'
									}

								]
							}
						},
						{
							xtype: 'button',
							id: 'diploms_edit_cancel_btn',
							width: 70,
							text: 'Закрыть',
							margin: '10 0 0 6'
						}


					]
				}],
			initComponent: function( ) {
				console.log('init view DiplomsForm');

				this.callParent(arguments);
			}
		}
);




