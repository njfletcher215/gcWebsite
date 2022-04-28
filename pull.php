<?php

// Use in the “Post-Receive URLs” section of your GitHub repo.

if ( $_POST['payload'] ) {
    try { 
        shell_exec( 'cd /home/njfletcher215_gmail_com/gcWebsite && git reset -–hard HEAD && git pull' );
        http_response_code(200);
    } catch (Exception $e) {
        echo 'Caught exception: ',  $e->getMessage(), "\n";
        http_response_code(500);
    }
}

?>

Go Away!
