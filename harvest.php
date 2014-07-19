<?php
	header('content-type: application/json; charset=utf-8');
	header("access-control-allow-origin: http://boards.4chan.org/ https://boards.4chan.org/");
	
	// Options and shit here
	$dir = 'images/';
	
	if(!is_dir($dir)) {
		mkdir($dir);
	}

	// Get the JSON encoded array
	$images = $_GET['images'];
	// Decodes the JSON encoded array
	$images = json_decode($images);
	$board_url = $_GET['board'];
	
	// Get the first / behind the board letter(s)
	$boardpos1 = strpos($board_url, '/', 8);
	// Makes the URL = [board]/thread/blahblahblah
	$board_url = substr($board_url, $boardpos1+1);
	// Finds the / after the board letter(s)
	$boardpos2 = strpos($board_url, '/');
	
	// Board
	$board_url = substr($board_url, 0, $boardpos2);
	
	// Creates a directory if needed
	if(!is_dir($dir . $board_url)) {
		mkdir($dir . $board_url);
	}
	
	// Modifies the $dir variable so that the board url is in the filepath
	$dir = $dir . $board_url . '/';
	
	foreach($images as $image) {
		// Get the position for the last /
		$namepos1 = strripos($image, '/');
		// Get the position for the last .
		$namepos2 = strripos($image, '.');
		
		// Get the filename from the URL
		$name = substr($image, $namepos1+1, $namepos2);
		
		if(!file_exists($dir . $name)) {
			// Makes the image downloadable
			$image = 'http:' . $image;
			
			// Opens the URL for reading
			$source = fopen($image, 'r');
			// Creates the image/webm
			$destination = fopen($dir . $name, 'w');
			
			// Streams the image/webm into a file
			stream_copy_to_stream($source, $destination);
			
			// Closing file handlers
			fclose($destination);
			fclose($image);
		}
	}
?>