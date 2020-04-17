Ext.define('Podyozhiki.admin.controller.Encourages', {
	extend: 'Ext.app.Controller',
	models: ['Podyozhiki.admin.model.Encourages'],
	views: ['Podyozhiki.admin.view.Encourages'],
	stores: ['Podyozhiki.admin.store.Encourages'],
	init: function() {
		console.log('init controller Encourages');
		this.control({
			'encourages': {
				//hide: this.onHide
			},
			'encourages #encourages_grid': {
				selectionchange: this.onSelectionChange,
				itemdblclick: this.onClickEdit
			},
			'encourages #encourages_add': {
				click: this.onClickAdd
			},
			'encourages #encourages_del': {
				click: this.onClickDel
			},
			'encourages #encourages_edit': {
				click: this.onClickEdit
			}
		});
		this.getStore('Podyozhiki.admin.store.Encourages').on('load', this.onLoadStore, this);
	},
	onSelectionChange: function(self, selected, eOpts) {
		if (selected[0]) {
			Ext.getCmp('encourages_edit').enable();
			Ext.getCmp('encourages_del').enable();
		}

	},
	onClickAdd: function(self, record, item, index, e, eOpts) {
		console.log('onClickAdd');
		var add = Ext.widget('encourages_edit_form');
		add.center();
		add.show();
		add.setTitle('Создать новое &laquo;подбадривание&raquo;');
		Ext.getCmp('encourages_edit_send').setText('Создать');
	},
	onClickDel: function(self, record, item, index, e, eOpts) {
		console.log('onClickDel');
		var item = Ext.getCmp('encourages_grid').getSelectionModel().getLastSelected();
		item.deleteItem(item.data.id);

	},
	onClickEdit: function(self, record, item, index, e, eOpts) {
		console.log('onClickEdit');
		var item = Ext.getCmp('encourages_grid').getSelectionModel().getLastSelected();
        item.editItem(Ext.getCmp('encourages_grid').getSelectionModel().getLastSelected().data);
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
		Ext.getCmp('encourages_edit').disable();
		Ext.getCmp('encourages_del').disable();
	}
});