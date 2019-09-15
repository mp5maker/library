## Grid ##

**Initiating**

    display: grid;

**Columns [Equal]**
> Number of fractions/percentage defines how many columns

    grid-template-columns: 33.3% 33.3% 33.3%;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-columns: repeat(3, 1fr);

**Columns [Unequal]**

    grid-template-columns: 1fr 2fr 1fr;
    grid-template-columns: repeat(9, 1fr);


**Fixed Row Heights**
> Cuts of any content if it exceeds 200px

    grid-auto-rows: 200px;


**MinMax**
> Dynamically decides if there is content it will increase the height

    grid-auto-rows: minmax(200px, auto);

**Rows**

    grid-template-rows: repeat(3, minmax(200px, auto));

**Grid Column Gap**
> Spaces between the columns

    grid-column-gap: 10px;

**Grid Row Gap**
> Spaces between the rows

    grid-row-gap: 10px;

**Grid Gap**
> Applies gap in both columns and rows

    grid-gap: 10px;

**Lines**
> Applies the Mozaic Design

    grip-column-start: 1;
    grid-column-end: 3;
    grid-column: 1/3;

**Span**
> Alternative for the Mozaic Design

    grid-column: span 3;

**Justify and Align Items [Words on the Parent Element]**
> Align Items: Goes with the cross-axis

    align-items: start;
    align-items: end;
    align-items: stretch;

> Justify Items Goes with the main axis

    justify-items: start;
    justify-items: end;
    justify-items: stretch;


**Justify Self and Align Self [Works on the Child Element]**
> Justify self and align self

    justify-self: start;
    justify-self: center;
    justify-self: end;
    justify-self: stretch;

    align-self: start;
    justify-self: center;
    align-self: end;
    align-self: stretch;

**Grid Areas**
> Give names to the grid area

    grid-area: header;
    grid-area: section;
    grid-area: aside;
    grid-area: footer;
    grid-area: sidebar;
    grid-area: footer;

**Grid Template Area**
> Grid Template Area

    grid-template-areas:
    "header  header  header  header"
    ".    nav     nav     ."
    "aside   aside   main    main"
    "aside   aside   main    main"
    "section section section section"
    "footer  footer  footer  footer" 