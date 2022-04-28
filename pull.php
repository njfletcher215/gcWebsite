<?php

// Use in the “Post-Receive URLs” section of your GitHub repo.

if ( $_POST['payload'] ) {
    try { 
<<<<<<< HEAD
        echo 'trying... ', shell_exec( 'cd /home/njfletcher215_gmail_com/gcWebsite 2>&1 && git reset --hard HEAD 2>&1 && git pull 2>&1' );
        http_response_code(200);
    } catch (Exception $e) {
	echo 'Caught exception: ', $e->getMessage(), "\n";
=======
        shell_exec( 'cd /home/njfletcher215_gmail_com/gcWebsite && git reset -–hard HEAD && git pull' );
        http_response_code(200);
    } catch (Exception $e) {
        echo 'Caught exception: ',  $e->getMessage(), "\n";
>>>>>>> c75d2d27b29bf0c219a50ba8f90ebba1b01915fe
        http_response_code(500);
    }
}

?>

Go Away!
