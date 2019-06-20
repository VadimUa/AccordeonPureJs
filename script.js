console.log("hello");
var div_none = document.querySelectorAll('div')
 for ( var i= 1; i < div_none.length; i++){
 	div_none[i].style.display = 'none'
 }

 var Parag = document.querySelectorAll('h3');
	for (var i = 0; i < Parag.length; i++) {
	Parag[i].addEventListener('click',function(event){
	let parent = event.target.parentElement;
	parent_child = parent.querySelector('div')
	var div_none = document.querySelectorAll('div')
	
 		for ( var i= 0; i < div_none.length; i++){
 			div_none[i].style.display = 'none'
 	}

  parent_child.style.display = 'block'
  });
  	}
 
