<?php

// Use in the “Post-Receive URLs” section of your GitHub repo.

if ( $_POST['payload'] ) {
    try { 
        echo 'trying...', shell_exec( 'cd /home/njfletcher215_gmail_com/gcWebsite 2>&1 && git reset -–hard origin/master 2>&1 && git pull 2>&1' );
        http_response_code(200);
    } catch (Exception $e) {
        echo 'Caught exception: ',  $e->getMessage(), "\n";
        http_response_code(500);
    }
}

?>

Go Away!
