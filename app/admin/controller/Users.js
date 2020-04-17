Ext.define('Podyozhiki.admin.controller.Users', {
	extend: 'Ext.app.Controller',
	models: ['Podyozhiki.admin.model.Users'],
	views: ['Podyozhiki.admin.view.Users'],
	stores: ['Podyozhiki.admin.store.Users'],
	init: function() {
		console.log('init controller Users');
		this.control({
			'users': {
				//hide: this.onHide
			},
			'users #users_grid': {
				selectionchange: this.onSelectionChange,
				itemdblclick: this.onClickEdit
			},
			'users #users_add': {
				click: this.onClickAdd
			},
			'users #users_del': {
				click: this.onClickDel
			},
			'users #users_edit': {
				click: this.onClickEdit
			}
		});
		this.getStore('Podyozhiki.admin.store.Users').on('load', this.onLoadStore, this);
	},
	onSelectionChange: function(self, selected, eOpts) {
		if (selected[0]) {
			Ext.getCmp('users_edit').enable();
			Ext.getCmp('users_del').enable();
		}

	},
	onClickAdd: function(self, record, item, index, e, eOpts) {
		console.log('onClickAdd');
		var add = Ext.widget('users_edit_form');
		add.center();
		add.show();
		add.setTitle('Создание нового пользователя');
		Ext.getCmp('users_edit_send').setText('Создать');
	},
	onClickDel: function(self, record, item, index, e, eOpts) {
		console.log('onClickDel');
		var item = Ext.getCmp('users_grid').getSelectionModel().getLastSelected();
		item.deleteItem(item.data.id);

	},
	onClickEdit: function(self, record, item, index, e, eOpts) {
		console.log('onClickEdit');
		var item = Ext.getCmp('users_grid').getSelectionModel().getLastSelected();
        item.editItem(Ext.getCmp('users_grid').getSelectionModel().getLastSelected().data);
	},

	onLoadStore: function(self, records, successful, operation, eOpts) {
		if (!successful) {
			var raw = self.getProxy().getReader().rawData;
			if (raw != undefined) {
				Podyozhiki.utils.ErrorHandler.checkResultStore(raw);
			}
			else
				Podyozhiki.utils.ErrorHandler.serverError();
		}
		Ext.getCmp('users_edit').disable();
		Ext.getCmp('users_del').disable();
	}
});