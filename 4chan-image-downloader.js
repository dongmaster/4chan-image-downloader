// ==UserScript==
// @name       4chan Thread Downloader
// @namespace  4chan.thread.downloader
// @version    3
// @description  You need a server for this userscript. Downloads every image/webm in a 4chan thread
// @match      *://boards.4chan.org/*
// @include    *://boards.4chan.org/*
// @copyright  public domain
// ==/UserScript==

// Change this so it points to the harvest.php file.
var php_script = "http://localhost/4chan/harvest.php";

function send_data() {
	var xmlhttp;

	if(window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp=new XMLHttpRequest();
	} else {// code for IE6, IE5
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}

    var images = document.getElementsByClassName('fileThumb');
    
    /*
	xmlhttp.onreadystatechange=function() {
		if(xmlhttp.readyState==4 && xmlhttp.status==200) {
			//document.getElementById("txtHint").innerHTML=xmlhttp.responseText;
			
		}
	}
    */
    
    var array = [];
    for(var i = 0; i < images.length; i++) {
        array.push(images[i].getAttribute('href'));
    }
    array = JSON.stringify(array);
    
    xmlhttp.open("GET", php_script+"?images="+array+"&board="+document.URL, false);
    xmlhttp.send();
    //}
	
    
}

function send_data_post() {
    var xmlhttp;
    
    if(window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp = new XMLHttpRequest();
	} else {// code for IE6, IE5
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
    

    var checked_posts = [];
    var checkboxes = document.getElementsByClassName('script_checkbox');
    var posts = document.getElementsByClassName('post');
    
    
    for(var i = 0; i < checkboxes.length; i++) {
        if(checkboxes[i].checked === true) {
            checked_posts.push(posts[i].getElementsByClassName('fileThumb')[0].getAttribute('href'));
        }
    }
    
	checked_posts = JSON.stringify(checked_posts); 
    console.log(checked_posts);
    /*
	xmlhttp.onreadystatechange=function() {
		if(xmlhttp.readyState==4 && xmlhttp.status==200) {
			//document.getElementById("txtHint").innerHTML=xmlhttp.responseText;
			
		}
	}
    */
    
    /*
    var array = [];
    for(var i = 0; i < images.length; i++) {
        array.push(images[i].getAttribute('href'));
    }
    array = JSON.stringify(array);
    */
    
    
    
    xmlhttp.open("GET", php_script + "?images=" + checked_posts + "&board=" + document.URL, false);
    xmlhttp.send();
}

var op = document.getElementsByClassName('op')[0];
var posts = document.getElementsByClassName('postInfo');
var selected_checkbox;
var phrase;

function create_text(name, text) {
	var name = document.createElement('SPAN');
    var name_text = document.createTextNode(text);
    
    name.appendChild(name_text);
    
    return name;
}

function create_checkbox() {
	var name = document.createElement('INPUT');
    name.setAttribute('type', 'checkbox');
    
    return name;
}

for(var j = 0; j < posts.length; j++) {
    if(posts[j].parentNode.getElementsByClassName('file').length > 0) {
    	selected_checkbox = create_checkbox();
    	phrase = create_text('ayy', ' Download: ');
    	
    	selected_checkbox.setAttribute('class', 'script_checkbox');
    	
    	posts[j].appendChild(phrase);
    	posts[j].appendChild(selected_checkbox);
    }
}



function create_button(name, button_text, click_function) {
    var name = document.createElement('BUTTON');
    var name_text = document.createTextNode(button_text);
    
    name.appendChild(name_text);
    
    name.addEventListener('click', click_function, false);
    
    op.appendChild(name);
}

create_button('buttonlol', 'Download images', send_data);
create_button('button2', 'Download checked posts', send_data_post);



