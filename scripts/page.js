const maximumDescriptionLength = 180;


$(document).ready( function() {
    var title = $("#title");
    var price = $("#price");
    var description = $("#description");
    var delivery = $("#delivery");
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

	
	title.hide();
	price.hide();
	description.hide();
	DeleteButton.hide();
	delivery.hide();
	imagestring.hide();
	removeNumber.hide();
	PublishButton.hide();
	CancelButton.hide();
	
	
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
		removeNumber.hide();
	});
	
	PublishButton.click(function(){
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
		var result = createItemDivString(itemIndex, imagestring.val(),title.val(),price.val(),description.val(),delivery.val());
		operationZone.append(result);
		$("#item-"+itemIndex).append(createItemDivString1(itemIndex++, imagestring.val(),title.val(),price.val(),description.val(),delivery.val()));
	});
	
	$('#rm').click(function(){
		$(this).parent().remove();
	})
	
    console.log("Ready!");
    $('#SearchButton').click(()=> {
        console.log("clicked!")
        filterItems();
    });

    $('.Description').each(function(){
        // console("runned");
        this.innerText = truncateText(this, maximumDescriptionLength);
    })  


    $('#Search').keydown(function(event){
          if(event.which == 13) filterItems();
    })
});

  setInterval( function() {
	  
	$('.close').click(function(){
    $(this).parent().remove();
})
  }, 50);

function createItemDivString(itemIndex, imageString, header, p1, p2, p3){
  imageString = imageString.split("\\").pop();
  return "<div id='item-" + itemIndex + "'><button class='close top'>X</button></div>";

}

function createItemDivString1(itemIndex, imageString, header, p1, p2, p3){
	
  return "<div class='imgContainer'><img src='images/" + imageString + "'/><h1>" + itemIndex + ". "
			+ header + "</h1><p> Price:" + p1 + "</p><p class = 'Description'> Description:" + p2 + "</p><p> Deliver option:" + p3 + "</p></div>";
			
}

function filterItems() {
    var input = document.getElementById("Search");
    var filter = input.value.toLowerCase();
    var nodes = document.getElementsByClassName('imgContainer');
  
    for (i = 0; i < nodes.length; i++) {
      if (nodes[i].innerText.toLowerCase().includes(filter)) {
        nodes[i].parentElement.style.display = "inline-block";
      } else {
        nodes[i].parentElement.style.display = "none";
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
//You can then call the function with something like what i have below.
// document.querySelector('p').innerText = truncateText('p', 107);

