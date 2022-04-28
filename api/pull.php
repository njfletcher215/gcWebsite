<?php

// Use in the “Post-Receive URLs” section of your GitHub repo.

if ( $_POST['payload'] ) {
    try { 
        $output = array();
        $result_code = 0;
        $response = exec( 'cd /home/njfletcher215_gmail_com/gcWebsite \
        && git reset --hard origin/master \
        && git pull \
        && cd /home/njfletcher215_gmail_com/gcWebsite/reactapp \
        && npm run build', $output, $result_code );
        http_response_code(200);
        if ($response == false) {
            echo 'result_code: ', $result_code, "\n";
            for (int $i = 0; $i < count($output); $i++) {
                echo $output[$i], "\n";
            }
            http_response_code(500);
        }
    } catch (Exception $e) {
        echo 'Caught exception: ',  $e->getMessage(), "\n";
        http_response_code(500);
    }
}

?>

Go Away!
