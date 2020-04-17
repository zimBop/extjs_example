Ext.define('Podyozhiki.admin.store.Stand', {
    extend: 'Ext.data.Store',
    model: 'Podyozhiki.admin.model.Stand',
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
            read: './getStandInfo.php'
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