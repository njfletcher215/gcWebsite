<?php

// Use in the “Post-Receive URLs” section of your GitHub repo.

if ( $_POST['payload'] ) {
shell_exec( 'cd /home/njfletcher215_gmail_com/gcWebsite && git reset -–hard HEAD && git pull' );
}

?>

Go Away!
