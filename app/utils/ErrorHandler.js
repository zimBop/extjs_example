Ext.define('Podyozhiki.utils.ErrorHandler', {
	singleton: true,
	checkResult: function(json) {
		var data = Ext.decode(json);
		if (!data.success) {
			console.log(data);
			if (data.errorCode == 1)
				window.location.replace('http://' + window.location.host.toString() + '/user/login');
			else
				Ext.Msg.show({
					title: 'Ошибка',
					msg: data.errorMessage,
					width: 300,
					buttons: Ext.MessageBox.OK,
					icon: Ext.MessageBox.ERROR
				});
			return false;
		}
		else {
			if (data.data)
				return data.data;
			else
				return true;
		}
	},
	checkResultStore: function(data) {
		;
		if (!data.success) {
			if (data.errorCode == 1)
				window.location.replace('http://' + window.location.host.toString() + '/user/login');
			else
				Ext.Msg.show({
					title: 'Ошибка',
					msg: data.errorMessage,
					width: 300,
					buttons: Ext.MessageBox.OK,
					icon: Ext.MessageBox.ERROR
				});
		}
	},
	serverError: function() {
		Ext.Msg.show({
			title: 'Ошибка',
			msg: 'Запрос не выполнен. Ошибка на стороне сервера.',
			width: 300,
			buttons: Ext.MessageBox.OK,
			icon: Ext.MessageBox.ERROR
		});
	}
});
