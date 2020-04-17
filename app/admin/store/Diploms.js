Ext.define('Podyozhiki.admin.store.Diploms', {
    extend: 'Ext.data.Store',
    model: 'Podyozhiki.admin.model.Diploms',
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
            read: './topUsersGame.php?diploms=1'
        },
        reader: {
            type: 'json',
            root: 'data',
            messageProperty: 'errorMessage',
            successProperty: 'success'
        }
    }
});