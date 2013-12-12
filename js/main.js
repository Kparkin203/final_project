// JavaScript Document

$(document).ready(function(){
    var total = 0;
    if (localStorage.getItem('total') !== null){
        total= parseFloat(localStorage.getItem('total'));
        var formattedTotal = formatDollar(total);
        $('#deposit').val(formattedTotal);
     }
  	
  	//clones and set the moneys as a draggable object
  	$( ".money" ).draggable({ helper: "clone" });
	
	
	$( ".piggyBank" ).droppable({ 
	    accept: ".money",
	    drop: function(event, ui) {
               // do something with the dock
               //$(this).doSomething();

               // do something with the draggable item
               console.log ($(ui.draggable));
              var amount = $(ui.draggable).attr('data-dollar-amount');
              console.log(amount);
              
              total += parseFloat(amount);
              localStorage.setItem('total', JSON.stringify(total));

              //total = parseInt(amount) + total;
              $('#deposit').val(total);
              //$('#deposit').val(formatDollar(total));
              
             var formattedTotal = formatDollar(total);
             $('#deposit').val(formattedTotal);
           }
    });

	
	
	
	
	
	
	
});

function formatDollar(num) {
    var p = num.toFixed(2).split(".");
    return "$" + p[0].split("").reverse().reduce(function(acc, num, i, orig) {
        return  num + (i && !(i % 3) ? "," : "") + acc;
    }, "") + "." + p[1];
}

