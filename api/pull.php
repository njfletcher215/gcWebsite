<?php

// Use in the “Post-Receive URLs” section of your GitHub repo.

if ( $_POST['payload'] ) {
    try { 
        $response = exec( 'cd /home/njfletcher215_gmail_com/gcWebsite \
        && git reset --hard origin/master \
        && git pull \
        && cd /home/njfletcher215_gmail_com/gcWebsite/reactapp \
        && npm run build' );
        http_response_code(200);
        if ($response == 0) {
            echo 'response: ', $response
            http_response_code(500);
        }
    } catch (Exception $e) {
        echo 'Caught exception: ',  $e->getMessage(), "\n";
        http_response_code(500);
    }
}

?>

Go Away!
