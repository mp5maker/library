## Flex Box ##

To make it start

        <div class="flex-container">
            <div>1</div>
            <div>2</div>
            <div>3</div>
        <div>

.flex container(parent) needs to have **display: flex**

**Parent Container Property**

    display: flex;
    flex-wrap: wrap;
    flex-direction: row | column | row-reverse | columne-reverse
    flex-flow: row wrap; | Short hand property for flex-wrap and flex-direction
    justify-content: center | flex-start | flex-end | space-between | space-around
    align-items: center | flex-start | flex-end | baseline | stretch
    align-content: center | flex-start | flex-end

**Child Property**

    align-self: center | flex-start | flex-end
    order: (any integer number) eg: 1
    flex-grow: 0 | 1 or above
    flex-shrink: 0 | 1 or above
    flex-basis: length eg: 200px
    flex: 0 0 200px | shorthand property for flex-shrink and flex-grow

**Justify Content**
* It is the main axis (x-axis)

**Align Items**
* It is the cross axis (y-axis)