Ext.define('Podyozhiki.admin.controller.PanelRightPhoto', {    extend: 'Ext.app.Controller',    views: 'Podyozhiki.admin.view.PanelRightPhoto',    models: ['Podyozhiki.admin.model.Photo'],		stores: ['Podyozhiki.admin.store.Photo'],    init: function() {      console.log('Admin PanelRightPhoto controller init');    }});