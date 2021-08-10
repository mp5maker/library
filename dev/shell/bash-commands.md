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