### Setup for Xampp ###

1. location to xampp (eg: C:\xampp\apache\conf\httpd.conf)

    AddHandler cgi-script .py
    ScriptInterpreterSource Registry-Strict


2. This step is optional (it acts as index.php, index.html, index.py)

    <IfModule dir_module>
        DirectoryIndex index.php index.pl index.cgi index.asp index.shtml index.html index.htm \
        default.php default.pl default.cgi default.asp default.shtml default.html default.htm \
        home.php home.pl home.cgi home.asp home.shtml home.html home.htm index.py
    </IfModule>

