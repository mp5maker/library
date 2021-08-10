#### Echo ####

```bash
echo $hello
```

#### Looping ####

```bash
for i in {1...50}
do
  ___YOUR_LOGIC___
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
```

#### If (String Condition) ####

```bash
x='hello'
y='hi'

if [[ $x == 'hello' && $y == 'hi' ]]
then
  echo 'YES'
fi
```

#### If (Mixed Condition) ####

```bash
x=2
y='hi'

if (( $x == 2 )) && [[ $y == 'hi' ]]
then
  echo 'YES'
fi
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
```

```bash
x=5
y=5
echo $(( $x + $y ))
```

####  Echo Integer ####

```bash
expression=3+5+(1/3)
echo $((expression))
```

####  Echo Float ####

```bash
expression=3+5+(1/3)
echo $expression | bc -l
```

####  Echo Float (Truncates Up to 2 decimal places) ####

```bash
expression=3+5+(1/3)
echo "scale = 2; $expression" | bc
```

####  Echo Float (Rounding Up to 2 decimal places) ####

```bash
expression=3+5+(1/3)
echo $expression | bc -l | xargs printf "%.2f"
```

#### Cut ####

-d => delimeter [How to split the string]
-f => which index after splitting the string
-c => which index of the string

```bash
echo '0000 192.168.1.100 192.168.100.1' | cut -d ' ' -f 2
# 192.168.1.100
echo '0000 192.168.1.100 192.168.100.1' | cut -d ' ' -f 2 |cut -d '.' -f 4
# 100
echo '0000 192.168.1.100 192.168.100.1' | cut -d ' ' -f 2 | cut -d '.' -f 4 | cut -c 1
# 1
```