Ext.define('Podyozhiki.admin.store.Users', {
    extend: 'Ext.data.Store',
    model: 'Podyozhiki.admin.model.Users',
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
            read: './getEntitys.php?entity=user'
        },
        reader: {
            type: 'json',
            root: 'data',
            messageProperty: 'errorMessage',
            successProperty: 'success'
        }
    }
});