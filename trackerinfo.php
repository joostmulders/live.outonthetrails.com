<?php
            $apiUrl = 'https://portal.mygpstracker.nl/webservice/tracker/860599001860923/details';
            $user = 'jjcamulders@gmail.com';
            $time = date('YmdHis', time());
            
            // Create authentication array            
            $authentication = array(
                'auth_email' => $user,
                'auth_time' => (string)$time,
                'auth_secure' => sha1($time . 'f51ccdf1f215365984fcec2cb70187a8')//md5($password))
            );

            // Create data array
            $postarray = array(
                'imei' => '860599001860923'
            );
            $postarray = array_merge($postarray, $authentication);
            
            $ch = curl_init( $apiUrl );
            curl_setopt( $ch, CURLOPT_POST, 1);
            curl_setopt( $ch, CURLOPT_POSTFIELDS, $postarray);
            curl_setopt( $ch, CURLOPT_RETURNTRANSFER, 1);

            $response = curl_exec( $ch );
     
            echo $response;
    ?>