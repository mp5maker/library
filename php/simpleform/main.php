<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST'):
    var_dump($_POST['email']);
    var_dump($_POST['password']);
endif;