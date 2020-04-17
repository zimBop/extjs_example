Ext.define('Podyozhiki.admin.store.Encourages', {
    extend: 'Ext.data.Store',
    model: 'Podyozhiki.admin.model.Encourages',
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
            read: './getEntitys.php?entity=encourage'
        },
        reader: {
            type: 'json',
            root: 'data',
            messageProperty: 'errorMessage',
            successProperty: 'success'
        }
    }
});