#! /usr/bin/bash

# ECHO COMMAND
echo "ECHO COMMAND"
echo Hello World without using \"\"
echo "Hello World using \"\""

# VARIABLES
# UPPERCASE BY CONVENTION
echo "VARIABLES"
NAME="Photon"
echo "My name is ${NAME} using \${}"
echo "My name is $NAME using $"

# USER INPUT
echo "USER INPUT"
read -p "Enter your name: " FULLNAME
echo "Welcome, ${FULLNAME}"

# SIMPLE IF-ELSE-IF STATEMENT
# DON'T FORGET TO PUT SPACES
echo "IF-ELSE-IF"
if [ "${FULLNAME}" == "Photon" ]
then
    echo "Thank you for using bash, ${NAME}"
elif [ "${FULLNAME}" == "Narnia" ]
then
    echo "Thanks, ${FULLNAME}"
else
    echo "You are not invited!"
fi

# COMPARISON
# -eq :: "="
# -ne :: "!="
# -gt :: ">"
# -ge :: ">="
# -lt :: "<"
# -le :: "<="
echo "COMPARISON"
NUM1=5
NUM2=16
if [ "${NUM1}" -gt "${NUM2}" ]
then
    echo "${NUM1} is greater than ${NUM2}"
else
    echo "${NUM2} is greater than ${NUM1}"
fi

# FILE CONDITIONS
# -f :: Checks file
# -d :: Checks directory
# -g :: Checks group id set
# -r :: Checks readable
# -u :: Checks user set
# -s :: Checks non-zero value
# -w :: Checks writable
# -x :: Checks Executable

echo "FILE CONDITIONS"
FILE="test.txt"
if [ -f "$FILE" ]
then
    echo "$FILE is a file"
else
    echo "$FILE is not a file"
fi

echo "DIRECTORY CONDITIONS"
DIR="random"
if [ -e "$DIR" ]
then
    echo "$DIR is a directory"
else
    echo "$DIR is not a directory"
fi

# CASE STATEMENT
echo "CASE STATEMENT"
read -p "Are you over 21 years old? Y/N " ANSWER
case "$ANSWER" in
    [Yy] | [yY][eE][sS])
        echo "You can have a beer :)"
        ;;
    [[nN]] | [Nn][Oo])
        echo "Sorry, no drinking"
        ;;
    =)
        echo "Please enter y/yes or n/no"
        ;;
esac

# SIMPLE FOR LOOP
echo "SIMPLE FOR LOOP"
NAMES="Mark Anthony Tim Cook"
for NAME in $NAMES
    do
        echo "Hello ${NAME}"
done

# FOR LOOP TO RENAME FILES
# USING MV TO RENAME
echo "LOOP TO RENAME THE FILES"
FILES=$(ls *.txt)
NEW="new"
for FILE in $FILES
    do
        echo "Renaming $FILE to {$NEW}-$FILE"
        mv $FILE $NEW-$FILE
done

# WHILE LOOP
# READ THROUGH A FILE LINE BY LINE
echo "WHILE LOOP TO READ THE FILE"
LINE=1
while read -r CURRENT_LINE
    do
        echo "$LINE: $CURRENT_LINE"
        ((LINE++))
done < "./random/random.txt"

# FUNCTION
echo "FUNCTION"
function sayHello() {
    echo "Hello World"
}
sayHello

# FUNCTION WITH PARAMS
echo "FUNCTION WITH PARAMS"
function greet() {
    echo "Hello, my name is $1 and I am $2 year old"
}
greet "Photon" "27"

# CREATE FOLDER AND WRITE TO A FILE
echo "CREATE FOLDER AND WRITE TO A FILE"
mkdir hello
touch "hello/world.txt"
echo "Hello World" >> "hello/world.txt"
echo "Created hello/world.txt"

