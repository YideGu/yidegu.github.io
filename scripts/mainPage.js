
// $('.imgContainer').click(function() {
// 	if ($("#addWindow").css("display") == "none") {
// 		alert("Please sign in to see more information!");
// 	}

// 	else {
// 		// redirect to the buyer page
// 		window.location.href='buyerPage.html';

// 		// store the item info in local storage
// 		var img_src = $(this).find('img').attr('src');
// 		localStorage.setItem('img_src', img_src);

// 		var item_name = $(this).find('h1').text();
// 		localStorage.setItem('item_name', item_name);

// 		var item_price = $(this).find('p').eq(0).text();
// 		localStorage.setItem('item_price', item_price);
// 		console.log(item_price);

// 		var item_description = $(this).find('p').eq(1).text();
// 		localStorage.setItem('item_description', item_description);
// 		console.log(item_description);

// 		var delivery_option = $(this).find('p').eq(2).text();
// 		localStorage.setItem('delivery_option', delivery_option);
// 		console.log(delivery_option);
// 	}
// })



$('.close').click(function(){
    $(this).parent().remove();
})


