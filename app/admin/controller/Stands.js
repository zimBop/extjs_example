Ext.define('Podyozhiki.admin.controller.Stands', {
	extend: 'Ext.app.Controller',
	models: ['Podyozhiki.admin.model.Stands'],
	views: ['Podyozhiki.admin.view.Stands'],
	stores: ['Podyozhiki.admin.store.Stands'],
	init: function() {
		console.log('init controller Stands');
		this.control({
			'stands': {
				//hide: this.onHide
			},
			'stands #stands_grid': {
				selectionchange: this.onSelectionChange,
				itemdblclick: this.onClickEdit
			},
			'stands #stands_add': {
				click: this.onClickAdd
			},
			'stands #stands_del': {
				click: this.onClickDel
			},
			'stands #stands_edit': {
				click: this.onClickEdit
			}
		});
		this.getStore('Podyozhiki.admin.store.Stands').on('load', this.onLoadStore, this);
	},
	onSelectionChange: function(self, selected, eOpts) {
		if (selected[0]) {
			Ext.getCmp('stands_edit').enable();
			Ext.getCmp('stands_del').enable();
      Ext.getCmp('stand_grid').getStore('Podyozhiki.admin.store.Stand').proxy.extraParams['id']=selected[0].data.id;
      Ext.getCmp('stand_grid').getStore('Podyozhiki.admin.store.Stand').load();
			var stand_grid_title = selected[0].data.name+' ('+selected[0].data.region_name+')';
			Ext.getCmp('stand_grid').setTitle(stand_grid_title);
		}
    
	},
	onClickAdd: function(self, record, item, index, e, eOpts) {
		console.log('onClickAdd');
		var add = Ext.widget('stands_edit_form');
		add.center();
		add.show();
		add.setTitle('Добавление нового стенда');
		Ext.getCmp('stands_edit_send').setText('Создать');

	},
	onClickDel: function(self, record, item, index, e, eOpts) {
		console.log('onClickDel');
		var item = Ext.getCmp('stands_grid').getSelectionModel().getLastSelected();
		item.deleteItem(item.data.id);

	},
	onClickEdit: function(self, record, item, index, e, eOpts) {
		console.log('onClickEdit');
		var item = Ext.getCmp('stands_grid').getSelectionModel().getLastSelected();
        item.editItem(Ext.getCmp('stands_grid').getSelectionModel().getLastSelected().data);
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
		Ext.getCmp('stands_edit').disable();
		Ext.getCmp('stands_del').disable();
    Ext.getCmp('stands_grid').getSelectionModel().select(Ext.getCmp('stands_grid').getStore().data.items[0]);
	}
});