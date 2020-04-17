Ext.define('Podyozhiki.admin.store.Region', {
    extend: 'Ext.data.Store',
    model: 'Podyozhiki.admin.model.Region',
    autoLoad: true,
    autoSync: false,
    root: 'data',
    remoteSort: false,
    proxy: {
        type: 'ajax',
        actionMethods: {
            read: "GET"
        },
        api: {
            read: './getEntitys.php?entity=region'
        },
        reader: {
            type: 'json',
            root: 'data',
            messageProperty: 'errorMessage',
            successProperty: 'success'
        }
    }

});