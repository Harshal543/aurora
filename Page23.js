/*global $*/
$(function(){
	

    $(".element").typed({
        strings: ["Full Stack Engineer", "Front End Developer","Data Scientist","Back End Developer"],
        	attr: "placeholder", typeSpeed: 50, showCursor: false, loop: true
    });

    var domList = ["A","B","c", "Apple", "Mango", "Cherry", "Grape", "Litchi"];
    	var options = '';
        
        for(var i = 0; i < domList.length; i++)
        	options += '<option value="'+domList[i]+'" />';
		
		document.getElementById('DomainSelect').innerHTML = options;

	//$.material.init();



    });

