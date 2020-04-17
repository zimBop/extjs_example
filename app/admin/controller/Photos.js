Ext.define('Podyozhiki.admin.controller.Photos', {
	extend: 'Ext.app.Controller',
	models: ['Podyozhiki.admin.model.Photos'],
	views: ['Podyozhiki.admin.view.Photos'],
	stores: ['Podyozhiki.admin.store.Photos'],
	init: function() {
		console.log('init controller Photos');
		this.control({
			'photos': {
				//hide: this.onHide
			},
			'photos #photos_grid': {
				selectionchange: this.onSelectionChange,
				itemdblclick: this.onClickEdit
			},
			'photos #photos_add': {
				click: this.onClickAdd
			},
			'photos #photos_del': {
				click: this.onClickDel
			},
			'photos #photos_edit': {
				click: this.onClickEdit
			}
		});
		this.getStore('Podyozhiki.admin.store.Photos').on('load', this.onLoadStore, this);
	},
	onSelectionChange: function(self, selected, eOpts) {
		if (selected[0]) {
			Ext.getCmp('photos_edit').enable();
			Ext.getCmp('photos_del').enable();
      Ext.getCmp('photo_grid').getStore('Podyozhiki.admin.store.Photo').proxy.extraParams['id']=selected[0].data.id;
      Ext.getCmp('photo_grid').getStore('Podyozhiki.admin.store.Photo').load();
			var photo_grid_title = selected[0].data.name+' ('+selected[0].data.region_name+')';
			Ext.getCmp('photo_grid').setTitle(photo_grid_title);
		}
    
	},
	onClickAdd: function(self, record, item, index, e, eOpts) {
		console.log('onClickAdd');
		var add = Ext.widget('photos_edit_form');
		add.center();
		add.show();
		add.setTitle('Добавление новой фотографии');
		Ext.getCmp('photos_edit_send').setText('Добавить');

	},
	onClickDel: function(self, record, item, index, e, eOpts) {
		console.log('onClickDel');
		var item = Ext.getCmp('photos_grid').getSelectionModel().getLastSelected();
		item.deleteItem(item.data.id);

	},
	onClickEdit: function(self, record, item, index, e, eOpts) {
		console.log('onClickEdit');
		var item = Ext.getCmp('photos_grid').getSelectionModel().getLastSelected();
        item.editItem(Ext.getCmp('photos_grid').getSelectionModel().getLastSelected().data);
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
		Ext.getCmp('photos_edit').disable();
		Ext.getCmp('photos_del').disable();
    Ext.getCmp('photos_grid').getSelectionModel().select(Ext.getCmp('photos_grid').getStore().data.items[0]);
	}
});