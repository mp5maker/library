<?php
function config($type) {
    return parse_ini_file('../db.ini')[$type];
}