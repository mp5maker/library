#### Echo ####

```bash
hello="hello"
echo $hello
# hello
```

#### Looping ####

```bash
for i in {1...5}
do
  echo $i #1,2,3,4,5
done
```

#### If (Numerical Condition) ####

```bash
x=2
y=2

if (( $x == 2 && $y == 2 ))
then
  echo 'YES'
elif (( $x == 1 && $y == 1 ))
then
  echo 'NO'
else
  echo 'NONE'
fi
# YES
```

#### If (String Condition) ####

```bash
x='hello'
y='hi'

if [[ $x == 'hello' && $y == 'hi' ]]
then
  echo 'YES'
fi
# YES

sentence="nope"
if [[ $sentence != *"A"* && $sentence != *"a"* ]] # Works like wildcard
then
  echo 'YES'
else
 echo 'NO'
fi
# YES
```

#### If (Mixed Condition) ####

```bash
x=2
y='hi'

if (( $x == 2 )) && [[ $y == 'hi' ]]
then
  echo 'YES'
fi
#YES
```


#### Read ####

```bash
read name
echo $name
```

#### Echo Again ####

$ => means passing the variable
() => running command in separate shell

```bash
name='John'
echo "My name is ${name}"
# My name is John
```

```bash
x=5
y=5
echo $(( $x + $y ))
# 10
```

####  Echo Integer ####

```bash
expression=3+5+(1/3)
echo $((expression))
# 8
```

####  Echo Float ####

```bash
expression=3+5+(1/3)
echo $expression | bc -l
# 8.33333333333333
```

####  Echo Float (Truncates Up to 2 decimal places) ####

```bash
expression=3+5+(1/3)
echo "scale = 2; $expression" | bc
# 8.33
```

####  Echo Float (Rounding Up to 2 decimal places) ####

```bash
expression=3+5+(1/3)
echo $expression | bc -l | xargs printf "%.2f"
# 8.33
```

#### Cut ####

Indexing starts from 1
-d => delimeter [How to split the string]
-f => which index after splitting the string
-c => which index of the string

```bash
echo '0000 192.168.1.100 192.168.100.1' | cut -d '  ' -f 2
# 192.168.1.100
echo '0000 192.168.1.100 192.168.100.1' | cut -d '  ' -f 2 |cut -d '.' -f 4
# 100
echo '0000 192.168.1.100 192.168.100.1' | cut -d '  ' -f 2 | cut -d '.' -f 4 | cut -c 1
# 1
echo 'how are you' | cut -c2,7
# oe
echo 'how are you' | cut -c2-7
# ow are
echo 'how are you' | cut -c2-
# ow are you
```

#### Head ####
-n => number of lines
-c => number of characters

```bash
head -n 20 $file # Shows first 20 lines
head -c 20 $file # Shows first 20 characters
head -n 22 $file | tail -n 11 # Shows lines between 12 to 22
```

#### Tail ####
-n => number of lines
-c => number of characters

```bash
tail -n 20 $file # Shows last 20 lines
tail -c 20 $file # Show last 20 characters
```

#### Replace ####
-d => delimeter
-s => squash duplicates

```bash
expression=(23+5)*2
echo $expression | tr "(" "[" | tr ")" "]"
# [23+5]*2

expression="How are you"
echo "$expression" | tr -d '[a-z]'  ' '
# H

expression="How  are"
echo "$expression" | tr -s '   '
#How are
```

#### Sort ####
-r => reverses the sorting order
-n => sorts on the basis of numerical fields, first available column
-k => specify column of the csv or the file
-t => delimeter

```bash
sort $file # Organizes the lines in lexicographical order
sort -r $file # Organizes the lines in reverse order
sort -n $file # Organizes the lines on the basis of numerical fields
sort -rn $file # Organizes the lines on the basis of numerical fields and reverse
sort -t '|' -k2 -rn $data # Organizes the lines using the 2nd column which is a number and reverse order and the delimeter is '|'
```

#### Uniq ####
-c => counts the number of duplicates [It also creates a space on the left hand side]
-i => case insensitive
-u => succeeded and preceded by different lines

```bash
uniq $file # Removes duplicates
uniq -c $file | tr -s '  ' | cut -d '  ' -f2- # Counts the number of duplicates
uniq $file -c -i | tr -s ' ' | cut -d ' ' -f2- # Counts the number of duplicates and it is case insensitive
uniq -u $file # Prints only thos lines which are succeeded ar preceded by different lines
```

#### Paste ####
-s => Show in horizontal manner
-d => Delimeter for joining by

```bash
paste -s -d';' $file # Join the lines in horizontal manner with ';' joining
paste - - - -d';' # Three columns per line with ';' joining
```

#### Array ####
Indexing starts from 1

> Create an array and retrieve all elements
```bash
arr=(4 5 7)
echo ${arr[@]} # Loop through array
# 4 5 7
```

> Append Value
```bash
arr=(4 5 7)
arr+=(12) # push data to array
echo ${arr[@]}

arr=(4 5 7)
arr=("${arr[@]}" 12) # push data to array
echo ${arr[@]}
# 4 5 7 12
```

> Retrieve 2nd element
```bash
arr=(4 5 7)
echo ${arr[2]}
# 7
```

> Index
```bash
arr=(4 5 7)
echo ${arr[2]}
# 7
```
> Update

```bash
arr=(4 5 7)
index=1
arr[$index]=42
# 42 5 7
```

> Delete Using Value (Not absolutely true, if all the items are completely unique)

```bash
arr=(4 5 7)
value=5
echo ${arr[@]/$value}
# 4 7
```

> Delete Using Index

```bash
arr=(4 5 7)
unset "arr[2]"
echo ${arr[@]}
# 4 7
```


> Length
```bash
arr=(4 5 7)
echo ${#arr[@]}
# 3
```

> Slice
```bash
arr=(4 5 7)
echo ${arr[@]:2:3} # Starting index 2, Ending index 3
# 7
```

> Filter
```bash
arr=(naru paru nope pope)
echo ${arr[@]/*[a]*/} # Filters the words which do not contain the character 'a'
# nope pope
```

> Remove first character of the first word
```bash
arr=(naru paru nope pope)
echo ${arr[1]:1}
# aru aru ope ope
```

#### Looping Using Arrays ####

```bash
arr=(Namibia Nauru Nepal Netherlands NewZealand Nicaragua Niger Nigeria NorthKorea Norway)
for (( i=0 ; i < ${#arr[@]} ; i++))
    do
        arr[$i]=".${arr[$i]:1}"
    done
echo ${arr[@]}

for item in ${arr[@]}
    do
        echo $item
    done
```

### Read Files ###

```bash
file=$(cat ./sample.csv)
echo $file
```

#### Sed And Grep ####
Both of them uses regular expression

Sed: It is similar to find and replace
Grep: It is similar to find

#### Grep ####
-n => line number
-i => case insensitive
-v => show not matching line

```bash
grep 'work\s' < ./sample.txt # It returns the line that contains the word "work"
grep -iv 'work\s' < ./sample.txt # It returns the line that do not match "work"
grep -i "\(the\|that\|then\|those\)\s" < ./sample.txt # For regular expression use escape the characters
grep -i -E "(the|that|then|those)\s" < ./sample.txt # Escaping not needed
```

#### Sed ####

> Search And Replace
s => denoting it will be search and replace

```bash
sed "s/the\s/this /" $lines # Replacing the first occurance of "the " to "this "
sed -E "s/(thy)\s/your /gi" # Replacing all occurance of "thy " to "your " and it is case insensitive
sed -E "s/(thy)/{\1}/gi" # Replace all occurance of "thy" to "{thy} and it is case insensitive
sed -E "s/[0-9]{4}([ ])[0-9]{4}([ ])[0-9]{4}/**** **** ****/"
# 1234 5678 9101 1234   to  **** **** **** 1234
sed -E "s/([0-9]{4})[ ]([0-9]{4})[ ]([0-9]{4})[ ]([0-9]{4})/\4 \3 \2 \1/" # Reverse the order
# 1234 5678 9101 1234 to 1234 9101 5678 1234
```

#### Awk ####

awk needs to be written in **single quotes**
ORS special variable, it is set to "\n" by defeault
NR counts the number of lines, starting from index 1

```bash
awk  '{ print }' ./sample3.txt
# Prints all the lines of a text file
awk  '{ print $1,$2}' ./sample3.txt
# Prints column one and two
awk '/salmon/ { print }' ./random.csv
# Prints the row which contains salmon
awk '{ if($1 ~ /horse/) print }' ./random.csv
# Prints the row which contains horse
awk '{ if($4 !~ /[0-9]+/) print "Not all scores are available for "$1 }'
# A 25 27 50
# B 35 75
# C 75 78
# D 99 88 76

# Not all scores are available for B
# Not all scores are available for C

awk '{
    if($2 >= 50 && $3 >= 50 && $4 >= 50)
        print $1" : Pass"
    else
        print $1" : Fail"
}'
# Writing if else with spacing

awk '
{
    avg=($2 + $3 + $4) / 3
    if (avg >= 80) print $1" "$2" "$3" "$4" : A"
    else if (avg >= 60 && avg < 80) print $1" "$2" "$3" "$4" : B"
    else if (avg >= 50 && avg < 60) print $1" "$2" "$3" "$4" : C"
    else if (avg < 50) print $1" "$2" "$3" "$4" : FAIL"
}'
# Print with complex conditions

awk '{
    if (NR % 2 == 0) print $1" "$2" "$3" "$4
    else printf $1" "$2" "$3" "$4";"
}'
# A 25 27 50
# B 35 37 75
# C 75 78 80
# D 99 88 76

# A 25 27 50;B 35 37 75
# C 75 78 80;D 99 88 76
```

#### Copy ####

```bash
cp -R "Vaccination Cards" ./new-one # Copies all the files in the folder including the folder and creates a new one
```