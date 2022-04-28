<?php

// Use in the “Post-Receive URLs” section of your GitHub repo.

if ( $_POST['payload'] ) {
    try { 
        $output = null;
        $result_code = null;
        $response = exec( 'cd /home/njfletcher215_gmail_com/gcWebsite 2>&1 \
        && git fetch 2>&1 \
        && git reset --hard origin/master 2>&1 \
        && git pull 2>&1 \
        && cd /home/njfletcher215_gmail_com/gcWebsite/reactapp 2>&1 \
        && echo hello \
        && npm -v 2>&1', $output, $result_code );
        // npm run build 2>&1
        echo 'result_code: ', $result_code, "\n";
        print_r($output);
        if ($result_code != 0) {
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
