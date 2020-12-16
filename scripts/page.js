const maximumDescriptionLength = 140;

var email = "Anonynous email address";
var myPostedData = [];



$(document).ready( function() {
	// startTime();
    var title = $("#title");
    var price = $("#price");
    var description = $("#description");
	var delivery = $("#delivery");
	var contactInformation = $("#contactInformation");
    var addButton = $("#addButton");
    var PublishButton = $("#PublishButton");
    var CancelButton = $("#CancelButton");
    var DeleteButton = $("#DeleteButton");
    var removeButton = $("#removeButton");
	var operationZone = $("#flexbox");
	var removeNumber = $("#removeNumber");
	var imagestring = $("#image");
	var toggle = $("#toggle");
	var itemIndex = 9;
	var itemButton;

	if(localStorage.getItem('myData') != null) myData = JSON.parse(localStorage.getItem('myData'));
	if(localStorage.getItem('myPostedData') != null) myPostedData = JSON.parse(localStorage.getItem('myPostedData'));


	title.hide();
	price.hide();
	description.hide();
	DeleteButton.hide();
	delivery.hide();
	contactInformation.hide();
	imagestring.hide();
	removeNumber.hide();
	PublishButton.hide();
	CancelButton.hide();

	var clock = setInterval(function(){
		var date = new Date();
		var offset = date.getTimezoneOffset();
		$("#demo1").text("Eastern Time: " + date.toLocaleTimeString());
	}, 16);



	$("#sortRadio1").click(function (){
		$("#flexbox").empty();
		$("#myTemplate").tmpl(myData).appendTo("#flexbox");
		$('.descriptionClass').each(function(){
			// console("runned");
			this.innerText = truncateText(this, maximumDescriptionLength);
		})
		$(document).on('click','.imgContainer', imgContainerFunctionality);
	})

	$("#sortRadio2").click(function (){
		$("#flexbox").empty();
		$("#myTemplate").tmpl(myData.reverse()).appendTo("#flexbox");
		$('.descriptionClass').each(function(){
			// console("runned");
			this.innerText = truncateText(this, maximumDescriptionLength);
		})
		myData.reverse();
		$(document).on('click','.imgContainer', imgContainerFunctionality);
	})

	// Use the template
	$("#myTemplate").tmpl(myData).appendTo("#flexbox");

	$('.imgContainer').click(function() {
		if ($("#addWindow").css("display") == "none") {
			alert("Please sign in to see more information!");
		}

		else {
			// redirect to the buyer page
			window.location.href='buyerPage.html';

			// store the item info in local storage
			var img_src = $(this).find('img').attr('src');
			localStorage.setItem('img_src', img_src);

			var item_name = $(this).find('h1').text();
			localStorage.setItem('item_name', item_name);

			var item_price = $(this).find('.priceClass').eq(0).text();
			localStorage.setItem('item_price', item_price);
			console.log(item_price);

			var item_description = $(this).find('.longDescription').text();
			localStorage.setItem('item_description', item_description);
			console.log(item_description);

			var delivery_option = $(this).find('.deliveryClass').text();
			localStorage.setItem('delivery_option', delivery_option);
			console.log(delivery_option);

			var seller_information = $(this).find('.sellerClass').text();
			localStorage.setItem('seller_information', seller_information);
			console.log(seller_information);

			localStorage.setItem('myData', JSON.stringify(myData));
			localStorage.setItem('myPostedData', JSON.stringify(myPostedData));
		}
	})


	addButton.click(function(){
		PublishButton.show();
		CancelButton.show();
		DeleteButton.hide();
		imagestring.show();
		addButton.hide();
		removeButton.hide();

		title.show();
		price.show();
		description.show();
		delivery.show();
		contactInformation.show();
	});

	removeButton.click(function(){
		PublishButton.hide();
		CancelButton.show();
		DeleteButton.show();
		addButton.hide();
		removeButton.hide();

		removeNumber.show();
	});

	CancelButton.click(function(){
		PublishButton.hide();
		CancelButton.hide();
		DeleteButton.hide();
		imagestring.hide();
		addButton.show();
		removeButton.show();


		title.hide();
		price.hide();
		description.hide();
		delivery.hide();
		contactInformation.hide();
		removeNumber.hide();
	});

	DeleteButton.click(function(){
		PublishButton.hide();
		CancelButton.hide();
		DeleteButton.hide();
		imagestring.hide();
		addButton.show();
		removeButton.show();

		temp= "#item-" + removeNumber.val();
		temp = $("#item-" + removeNumber.val());
		temp.remove();

		title.hide();
		price.hide();
		description.hide();
		delivery.hide();
		contactInformation.hide();
		removeNumber.hide();
	});

	PublishButton.click(function(){
		if(title.val() == ""){
			alert("You must not leave title blank.");
		}
		else if(!$.isNumeric(price.val())){
			alert("You must enter a numeric value other than 0 for price");
		}
		else
		{
			
			PublishButton.hide();
			CancelButton.hide();
			DeleteButton.hide();
			imagestring.hide();
			addButton.show();
			removeButton.show()

			title.hide();
			price.hide();
			description.hide();
			delivery.hide();
			contactInformation.hide();
			createItemDivString1(itemIndex, $("#imageString").val(),title.val(),price.val(),description.val(),delivery.val());
			location.reload(true);
			// operationZone.append(result);
			// $("#item-"+itemIndex).append(createItemDivString1(itemIndex++, $("#imageString").val(),title.val(),price.val(),description.val(),delivery.val()));
		}
	});

	$('#rm').click(function(){
		$(this).parent().remove();
	})

    console.log("Ready!");
    $('#SearchButton').click(()=> {
        console.log("clicked!")
        filterItems();
    });

    $('.descriptionClass').each(function(){
        // console("runned");
        this.innerText = truncateText(this, maximumDescriptionLength);
	})


    $('#Search').keydown(function(event){
          if(event.which == 13) filterItems();
	})


	// if (localStorage.getItem("reload") === null) {}
  //   else {
	//   $(".signinWindow").css("display", "none");
	// //   $("#signInBtn2").css("display", "none");
  //     // $(".event").css("display", "block");
  //     $("#addWindow").css("display", "block");
  //     // $(".searchBox").css("display", "block");
	//   $(".btn-danger").css("visibility", "visible");
	//   $(".signOutWindow").css("display", "block");
  //     var reload = JSON.parse(localStorage.getItem("reload"));
  //     //var greeting_exsit = JSON.parse(localStorage.getItem("greeting_exsit"));
  //       if (reload && (document.getElementById("name-info") === null)) {
  //         email = localStorage.getItem("email");
  //         var name = localStorage.getItem("User_name");
  //         var greeting = "<h id='name-info'>Hi " + name + "!</h>";
  //         $(".greeting-msg").append(greeting);
  //         //localStorage.setItem("greeting_exsit", JSON.stringify(true));
  //       }
	// }

	$('.close').click(function(){
		var result = confirm("Are you sure to delete this item?");
		if (result) {
			$(this).parent().remove();
		}
	})


	$("#myPageButton").click(function(){
		$("#itemText").text("My items");
		$("#myPageSection").css("display", "none");
		$("#homePageSection").css("display", "block");
		$("#flexbox").empty();
		$("#myTemplate").tmpl(myPostedData).appendTo("#flexbox");
		$('.descriptionClass').each(function(){
			// console("runned");
			this.innerText = truncateText(this, maximumDescriptionLength);
		})
		$(".imgContainer").each(function(){
			$("#buttonTemplate").tmpl().appendTo(this);
		})


		$(document).on('click','.close',function() {
			var result = confirm("Are you sure to delete this item?");
			if (result) {
				$(this).parent().remove();
				myPostedData.shift();
				myData.shift();
				localStorage.setItem('myData', JSON.stringify(myData));
				localStorage.setItem('myPostedData', JSON.stringify(myPostedData));
			}
		})
	})

	$("#homePageButton").click(function(){
		location.reload(true);
		// $("#itemText").text("On sale items");
		// $("#homePageSection").css("display", "none");
		// $("#myPageSection").css("display", "block");
		// $("#flexbox").empty();
		// $("#myTemplate").tmpl(myData).appendTo("#flexbox");
		// $('.descriptionClass').each(function(){
		// 	// console("runned");
		// 	this.innerText = truncateText(this, maximumDescriptionLength);
		// })

		// $(document).on('click','.imgContainer',function() {
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

		// 		var item_price = $(this).find('.priceClass').eq(0).text();
		// 		localStorage.setItem('item_price', item_price);
		// 		console.log(item_price);

		// 		var item_description = $(this).find('.longDescription').text();
		// 		localStorage.setItem('item_description', item_description);
		// 		console.log(item_description);

		// 		var delivery_option = $(this).find('.deliveryClass').text();
		// 		localStorage.setItem('delivery_option', delivery_option);
		// 		console.log(delivery_option);

		// 		var seller_information = $(this).find('.sellerClass').text();
		// 		localStorage.setItem('seller_information', seller_information);
		// 		console.log(seller_information);

		// 		localStorage.setItem('myData', JSON.stringify(myData));
		// 		localStorage.setItem('myPostedData', JSON.stringify(myPostedData));
		// 	}
		// });
	})


	if (localStorage.getItem("reload") === null) {}
    else {
	  $(".signinWindow").css("display", "none");
	//   $("#signInBtn2").css("display", "none");
      // $(".event").css("display", "block");
      $("#addWindow").css("display", "block");
      // $(".searchBox").css("display", "block");
	  $(".btn-danger").css("visibility", "visible");
	  $(".signOutWindow").css("display", "block");
      var reload = JSON.parse(localStorage.getItem("reload"));
      //var greeting_exsit = JSON.parse(localStorage.getItem("greeting_exsit"));
        if (reload && (document.getElementById("name-info") === null)) {
          email = localStorage.getItem("email");
          var name = localStorage.getItem("User_name");
          var greeting = "<h id='name-info'>Hi " + name + "!</h>";
          $(".greeting-msg").append(greeting);
          // localStorage.setItem("greeting_exsit", JSON.stringify(true));
        }
    }
});


  setInterval(function(){
    
  }, 1000);


function createItemDivString(itemIndex, imageString, header, p1, p2, p3){
  imageString = imageString.split("\\").pop();
  return "";

}

function createItemDivString1(itemIndex, imageString, header, p1, p2, p3){
	if($("#contactInformation").val() != "") email = $("#contactInformation").val();
	imageString = imageString.split("\\").pop();
	var newData = [
		{
			Thumbnail: "images\\" + imageString,
			itemTitle: header, price: p1,
			description: p2,
			delivery: p3,
			seller: email
		}]
	// $("#myTemplate").tmpl(newData).appendTo("#flexbox");
	$("#flexbox").prepend($("#myTemplate").tmpl(newData));
	myData.unshift(newData[0]);
	myPostedData.unshift(newData[0]);

	localStorage.setItem('myData', JSON.stringify(myData));
	localStorage.setItem('myPostedData', JSON.stringify(myPostedData));

	$(document).on('click','.imgContainer',function() {
		if ($("#addWindow").css("display") == "none") {
			alert("Please sign in to see more information!");
		}

		else {
			// redirect to the buyer page
			window.location.href='buyerPage.html';

			// store the item info in local storage
			var img_src = $(this).find('img').attr('src');
			localStorage.setItem('img_src', img_src);

			var item_name = $(this).find('h1').text();
			localStorage.setItem('item_name', item_name);

			var item_price = $(this).find('.priceClass').eq(0).text();
			localStorage.setItem('item_price', item_price);
			console.log(item_price);

			var item_description = $(this).find('.longDescription').text();
			localStorage.setItem('item_description', item_description);
			console.log(item_description);

			var delivery_option = $(this).find('.deliveryClass').text();
			localStorage.setItem('delivery_option', delivery_option);
			console.log(delivery_option);

			var seller_information = $(this).find('.sellerClass').text();
			localStorage.setItem('seller_information', seller_information);
			console.log(seller_information);

			localStorage.setItem('myData', JSON.stringify(myData));
			localStorage.setItem('myPostedData', JSON.stringify(myPostedData));
		}
	});
	// myData = Object.assign({}, myData, newData);
  	return "";

}

function filterItems() {
    var input = document.getElementById("Search");
    var filter = input.value.toLowerCase();
	var nodes = document.getElementsByClassName('imgContainer');
	if($("#exampleRadios1").is(":checked")){
		var nodes = document.getElementsByClassName('itemTitleClass');
		for (i = 0; i < nodes.length; i++) {
			if (nodes[i].innerText.toLowerCase().includes(filter)) {
			  nodes[i].parentElement.parentElement.style.display = "inline-block";
			} else {
			  nodes[i].parentElement.parentElement.style.display = "none";
			}
		  }
	}
	if($("#exampleRadios2").is(":checked")){
		var nodes = document.getElementsByClassName('descriptionClass');
		for (i = 0; i < nodes.length; i++) {
			if (nodes[i].innerText.toLowerCase().includes(filter)) {
			  nodes[i].parentElement.parentElement.style.display = "inline-block";
			} else {
			  nodes[i].parentElement.parentElement.style.display = "none";
			}
		  }
	}
	if($("#exampleRadios3").is(":checked")){
		var nodes = document.getElementsByClassName('imgContainer');
		for (i = 0; i < nodes.length; i++) {
			if (nodes[i].innerText.toLowerCase().includes(filter)) {
			  nodes[i].parentElement.style.display = "inline-block";
			} else {
			  nodes[i].parentElement.style.display = "none";
			}
		  }
	}

}

function truncateText(item, maxLength) {
    var truncated = item.innerText;
    if (truncated.length > maxLength) {
        truncated = truncated.substr(0,maxLength) + '...';
    }
    return truncated;
}
function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  $('clock').val()=h + ":" + m + ":" + s;
  var t = setTimeout(startTime, 500);
}
function checkTime(i) {
  if (i < 10) {i = "0" + i};
  return i;
}


// function onSignIn(googleUser){
// 	var profile = googleUser.getBasicProfile();
// 	var name = profile.getGivenName();
// 	email = profile.getEmail();
//
// 	// $(".signinWindow").css("display", "none");
// 	// // $(".event").css("display", "block");
// 	// $("#addWindow").css("display", "block");
// 	// // $(".searchBox").css("display", "block");
// 	// $(".btn-danger").css("visibility", "visible");
//   window.location.href='index.html';
// }

function signIn() {
  // $(".signinWindow").css("display", "none");
  // // $(".event").css("display", "block");
  // $("#addWindow").css("display", "block");
  // // $(".searchBox").css("display", "block");
  // $(".btn-danger").css("visibility", "visible");
  window.location.href='loginPage.html';
}

function signOut() {
	// var auth2 = gapi.auth2.getAuthInstance();
	// auth2.signOut().then(function(){
  //
	// 	alert("You have been successfully signed out");
	// 	// $(".event").css("display", "none");
	// 	$("#addWindow").css("display", "none");
	// 	// $(".searchBox").css("display", "none");
	// 	$(".btn-danger").css("visibility", "hidden");
	// 	$(".signinWindow").css("display", "block");
	// 	$("h").remove();
  //   localStorage.removeItem("greeting_exsit");
  //   localStorage.removeItem("reload");
	// })
  alert("You have been successfully signed out");
	// $(".event").css("display", "none");
	$("#addWindow").css("display", "none");
	// $(".searchBox").css("display", "none");
	$(".btn-danger").css("visibility", "hidden");
	$(".signOutWindow").css("display", "none");
	$(".signinWindow").css("display", "block");
	// $("#signInBtn2").css("display", "block");
	$("#name-info").remove();
  //localStorage.removeItem("greeting_exsit");
  localStorage.removeItem("reload");
//  window.location.href='index.html';

}


function imgContainerFunctionality() {
	if ($("#addWindow").css("display") == "none") {
		alert("Please sign in to see more information!");
	}

	else {
		// redirect to the buyer page
		window.location.href='buyerPage.html';

		// store the item info in local storage
		var img_src = $(this).find('img').attr('src');
		localStorage.setItem('img_src', img_src);

		var item_name = $(this).find('h1').text();
		localStorage.setItem('item_name', item_name);

		var item_price = $(this).find('.priceClass').eq(0).text();
		localStorage.setItem('item_price', item_price);
		console.log(item_price);

		var item_description = $(this).find('.longDescription').text();
		localStorage.setItem('item_description', item_description);
		console.log(item_description);

		var delivery_option = $(this).find('.deliveryClass').text();
		localStorage.setItem('delivery_option', delivery_option);
		console.log(delivery_option);

		var seller_information = $(this).find('.sellerClass').text();
		localStorage.setItem('seller_information', seller_information);
		console.log(seller_information);

		localStorage.setItem('myData', JSON.stringify(myData));
		localStorage.setItem('myPostedData', JSON.stringify(myPostedData));
	}
}
