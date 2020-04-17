Ext.define('Podyozhiki.admin.view.EncouragesEditForm',
		{
			extend: 'Ext.window.Window',
			alias: 'widget.encourages_edit_form',
			id: 'encourages_edit_form',
			title: 'Изменение &laquo;подбадривания&raquo;',
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
							id: 'encourages_edit_form_form',
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
										id: 'encourages_edit_id',
										fieldLabel: 'ID',
										hidden: true
									},
									{
										xtype: 'combobox',
										fieldLabel: 'Тип',
										name: 'type',
										id: 'encourages_edit_type',
										value: 'Игра',
										store:['Игра','Фотографии','Стенды']
									},
									{
										xtype:'textarea',
										name: 'item_text',
										id: 'encourages_edit_item_text',
										fieldLabel: 'Текст'
									}
								]
							}
						},
						{
							xtype: 'button',
							text: 'Сохранить',
							region: 'east',
							width: 70,
							id: 'encourages_edit_send',
							margin: '10 0 0 354'
						},
						{
							xtype: 'button',
							id: 'encourages_edit_cancel_btn',
							width: 70,
							text: 'Закрыть',
							margin: '10 0 0 6'
						}
					]
				}],
			initComponent: function( ) {
				console.log('init view EncouragesForm');

				this.callParent(arguments);
			}
		}
);




