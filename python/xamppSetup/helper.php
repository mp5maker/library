<?php
    /**
     * Create a shell command using escapesshellcmd
     */
    $my_command = escapeshellcmd('python C:/xampp/htdocs/library/python/w3school/types.py');
    /**
     * Executes the command
     */
    $command_output = shell_exec($my_command);
    /**
     * Prints out the details
     */
    var_dump($command_output);