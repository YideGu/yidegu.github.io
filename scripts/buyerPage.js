$(document).ready(function() {
	// get the img source from the local storage
	var item_name = localStorage.getItem('item_name');
	var img_src = localStorage.getItem('img_src');
	var item_price = localStorage.getItem('item_price');
	var item_description = localStorage.getItem('item_description');
	var delivery_option = localStorage.getItem('delivery_option');
	
	console.log('item name:', item_name);
	console.log('item image source:',img_src);
	
	$('#item-img').attr('src', img_src);
	$('#item-name').text(item_name);
	$('#item-price').text(item_price);
	$('#item-description').text(item_description);
	$('#delivery-option').text(delivery_option);
})