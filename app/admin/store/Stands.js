Ext.define('Podyozhiki.admin.store.Stands', {
    extend: 'Ext.data.Store',
    model: 'Podyozhiki.admin.model.Stands',
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
            read: './getEntitys.php?entity=stand'
        },
        reader: {
            type: 'json',
            root: 'data',
            messageProperty: 'errorMessage',
            successProperty: 'success'
        }

    }
});