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