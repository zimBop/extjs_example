Ext.define('Podyozhiki.admin.store.Photos', {
    extend: 'Ext.data.Store',
    model: 'Podyozhiki.admin.model.Photos',
    autoLoad: false,
    autoSync: false,
    root: 'data',
    remoteSort: false,
    proxy: {
        type: 'ajax',
        actionMethods: {
            read: "GET"
        },
        api: {
            read: './getEntitys.php?entity=photo'
        },
        reader: {
            type: 'json',
            root: 'data',
            messageProperty: 'errorMessage',
            successProperty: 'success'
        }
    }
});