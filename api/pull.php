<?php

// Use in the “Post-Receive URLs” section of your GitHub repo.

if ( $_POST['payload'] ) {
    try { 
        $output = null;
        $result_code = null;
        $response = exec( 'cd /home/njfletcher215_gmail_com/gcWebsite \
        && git fetch \
        && git reset --hard origin/master \
        && git pull \
        && cd /home/njfletcher215_gmail_com/gcWebsite/reactapp \
        && npm run build', $output, $result_code );
        echo 'result_code: ', $result_code, "\n";
        print_r($output);
        if ($response == false) {
            http_response_code(500);
        } else {
            http_response_code(200);
        }
    } catch (Exception $e) {
        echo 'Caught exception: ',  $e->getMessage(), "\n";
        http_response_code(500);
    }
}

?>

Go Away!
