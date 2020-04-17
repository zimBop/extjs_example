Ext.define('Podyozhiki.admin.store.Results', {
    extend: 'Ext.data.Store',
    model: 'Podyozhiki.admin.model.Results',
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
            read: './topUsersVote.php'
        },
        reader: {
            type: 'json',
            root: 'data',
            messageProperty: 'errorMessage',
            successProperty: 'success'
        }
    }
});