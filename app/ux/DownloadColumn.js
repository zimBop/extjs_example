/**
 * @author KolesnikovD
 * @class Podyozhiki.ux.DownloadColumn
 * @extends Ext.grid.column.Column
 * в процессе разработки
 */
Ext.define('Podyozhiki.ux.DownloadColumn', {
	extend: 'Ext.grid.column.Column',
	alias: 'widget.downloadcolumn',
	constructor: function() {

		if (!window.mbDownloadColumnGlobal) {
			window.mbDownloadColumnGlobal = {
				clickdowload: this._onClickDowload
			};
		}
		this.callParent(arguments);
	},
	renderer: function(value, metaData, record, rowIndex, colIndex) {

		if (value.length === 0) {
			return '';
		}
		console.log(value);
		if (value.access) {
			var result = '<div class="thumb"><table><tr><td><img data-objectId="' + value.objectId + '" data-type="' + value.objectType + '" onclick="mbDownloadColumnGlobal.clickdowload(event)" class="download_column_opacity_true" src="/images/icons/downloads_true.png" style="width:24px; height:24px;"></td></tr></table></div>';
		}
		else {
			var result = '<div class="thumb"><table><tr><td><img class="download_column_opacity_false" src="/images/icons/downloads_false.png" style="width:24px; height:24px;"></td></tr></table></div>';
		}
		return result;
	},
	_onClickDowload: function(event) {
		event = event || window.event;
		var a = event.target || event.srcElement;
		var type = a.getAttribute('data-type');
		var id = a.getAttribute('data-objectId');
		Ext.Ajax.request(
				{
					url: '/downloads/export',
					method: 'GET',
					params: {
						objectId: id,
						objectType: type,
						comment: '',
						onlyAllowed: 1
					},
					success: function(result, request) {
						var data = Podyozhiki.utils.ErrorHandler.checkResult(result.responseText);
						if (data) {
							if (data.link)
								window.location.replace(data.link);
							else
								Ext.MessageBox.alert('Ошибка получения объекта', 'Не достаточно прав для данной операции.');
						}
					},
					failure: function(result, request) {
						Podyozhiki.utils.ErrorHandler.serverError();
					}
				}
		);
	}
});