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

```bash
expression=(23+5)*2
echo $expression | tr "(" "[" | tr ")" "]"
# [23+5]*2

expression="How are you"
echo "$expression" | tr '[a-z]'  ' '
# H
```