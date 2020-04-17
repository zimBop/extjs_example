Ext.define('Podyozhiki.admin.store.Photo', {
    extend: 'Ext.data.Store',
    model: 'Podyozhiki.admin.model.Photo',
    autoLoad: true,
    autoSync: false,
    root: 'data',
    remoteSort: false,
    proxy: {
        type: 'ajax',
        actionMethods: {
            read: "POST"
        },
        api: {
            read: './getPhotoInfo.php'
        },
        reader: {
            type: 'json',
            root: 'data',
            messageProperty: 'errorMessage',
            successProperty: 'success'
        },
        extraParams: {
            id: 0
        }
    }

});