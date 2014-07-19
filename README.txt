Before doing anything else, go to your php.ini file and change execution_time to a high number. I set it to 99999. 

Link to github page: https://github.com/dongmaster/4chan-image-downloader

## Installing ##

Install "4chan Thread Downloader.user.js" in greasemonkey/tampermonkey.
Edit the variable at the top in the userscript if needed (Point it to the harvest.php file).

## Info ##

Every image will be categorized depending on the board.
So every image downloaded from /v/ will be in "images/v/[images here]"

Every thread will now have a "Download images" button and a "Download checked posts" in OP's post.
Click either of the buttons and wait for the page to reload.

There will also be checkboxes on every post that has an image. Tick it and then press the "Download checked posts" button to download the specified posts.

If a file already exists it won't be downloaded again.