License: Public Domain

Before doing anything else, go to your php.ini file and change execution_time to a high number. I set it to 99999. 

## Installing ##

Install "4chan Thread Downloader.user.js" in greasemonkey/tampermonkey.
Edit the variable at the top in the userscript if needed (Point it to the harvest.php file).

## Info ##

Every image will be categorized depending on the board.
So every image downloaded from /v/ will be in "images/v/[images here]"

Every thread will now have a "Download images" button in OP's post.
Click it and wait for the page to reload (I don't know why it reloads).

If a file already exists it won't be downloaded again.