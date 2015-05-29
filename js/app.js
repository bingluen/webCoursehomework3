var listItem = [];

$(document).ready(function(){
	$('#RecordButton').click(function() {
		var date = new Date()
		var newItem = {
			date : date.getFullYear() + '年' + date.getMonth() + '月' + date.getDate() + '日 ' + date.toLocaleTimeString(),
			water : $('#water').val()
		}
		if(newItem.water > 0)
		{
			listItem.push(newItem);
			refreshList();
			saving();
		}
	});

	if ( window.localStorage == undefined )
	{
		console.log('can not use local storage');
	}
	else
	{
		listItem = JSON.parse(localStorage.getItem('item'));
		if(listItem != undefined)
			refreshList();
		else
			listItem = [];

	}
});

var refreshList = function() {
	/* 清空 */
	$('#record').html('');
	var list = listItem.map(function(obj) {
		return '<li>我在' + obj.date + '喝了' + obj.water + 'CC的水</li>';
	});
	for (item in list)
		$('#record').append(list[item]);
}

var saving = function()
{
	try{
		localStorage.removeItem('item')
		localStorage.setItem('item', JSON.stringify(listItem));	
	} catch (err) {
		console.log('error!');
	}
}