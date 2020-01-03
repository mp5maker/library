# Already defined variables by P5

* width (Sketch Window)
* height (Sketch Window)
* frameCount (Number of frames processed)
* frameRate (Number of frames per second)
* windowWidth (Width of the entire screen)
* windowHeight (Height of the entire screen)
* key (Most recent key pressed in keyboard)
* keyCode (Numeric code for key pressed in keyboard)
* keyIsPressed (True / False)
* mouseIsPressed (True / False)
* mouseButton (LEFT, RIGHT, CENTER)
* mouseX
* mouseY

# Already defined functions
* random(paramOne, paramsTwo)
* noStroke()
* noFill()
* rect()
* triangle()
* ellipse()
* arc()
* line()
* quad()
* point()
* createCanvas();
* rectMode()
* background()
* beginShape()
* endShape()
* vertex()
* fill()
* color()
* red()
* green()
* blue()
* colorMode()
* noLoop()
* lerpColor()
* map()
* text()
* textAlign()
* randomBool()
* mousePressed()
* mouseClicked()
* mouseMove()
* keyTyped()
* translate()
* rotate()
* radians()
* degrees()
* angleMode()
* push()
* pop()
* sin()
* cos()
* curveVertex()
* floor()
* noise()
* strokeWeight()
* stroke()
* createVector()
* createCanvas()
* createDiv()
* createP()
* createButton()
* createImg()
* createSlider()
* createElement()
* textWidth()
* loadStrings()
* loadTable()
* loadJSON()

# Main Functions
* setup()
* draw()
* redraw()
* keyPressed()
* mousePressed()
* mouseOver()
* preload()
* dragOver()
* drop()
* drag()

# Constants
* CENTER (rectMode)
* CHORD (arc)
* PIE (arc)
* LINES (beginShape)
* CLOSE (endShape)
* HSB (colorMode)
* LEFT (text)
* RIGHT (text)
* key
* framesTillRefresh
* DEGREES (angleMode)
* RADIANS (angleMode)
* LINE_STRIP (beginShape)
* TWO_PI

# Color Concepts
* Triadic [Hue, Saturation, Brightness] (0, 100, 100), (135, 100, 100), (270, 0, 0)
* Complementary [Hue, Saturation, Brightness] (0, 100, 100), (360, 100, 100)
* Analogous [Hue, Saturation, Brightness] (75, 100, 100), (90, 100, 100), (120, 100, 100)
* Monochromatic (Same color with variations)

# Harmonic Concepts
> Repetition (% Modulos): Animation that repeats from the beginning

x | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8
-- | - | - | - | - | - | - | - | - | - | -
x  % 3| 0 | 1 | 2 | 0 | 1 | 2 | 0 | 1 | 2

> Oscillation (sin Theta): Animation that swings back and forth

x | 0 | 1/4 * PI | 1 / 2 * PI | 3 / 4 * PI | PI | 5 PI / 4| 3 PI / 4 | 7  PI / 4 |  2 PI
-- | - | - | - | - | - | - | - | - | - | -
sin(theta)| 0 | -0.5 | -1 | -0.5 | 0 | 0.5 | 1 | 0.5 | 0

# RiTa
* RiTa.tokenize()
* RiTa.getPhonemes()
* RiTa.getStresses()
* RiTa.posTags()
* RiTa.getWordCount()
* lexicon.randomWord()

# Ben Fry's Stages of visualizing data
* Acquire: Obtain the data, whether from a file on a disk or soruce over a network
* Parse: Provide some structure for the data's meaning, and order it into categories
* Filter: Remove all but the data of interest
* Mine: Apply methods from statistics or data mining as a way to discern patterns or place the data in mathematical process
* Represent: Choose a visual model, such as bar graph, list, or tree
* Refine: Improve the basic representation to make it clearer and more visually engaging
* Interact: Add methods for manipulating the data or controlling which features are available