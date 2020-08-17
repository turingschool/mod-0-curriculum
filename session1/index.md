---
layout: page
title: Session 1
subheading: The Stack, Keyboard Shortcuts, Googling, and Data Types
---

<div class="goals-agenda">
  <div>
    <h3>Goals</h3>
    <strong>By the end of this session, you will be able to:</strong>
    <ul>
      <li>understand the full stack of web development at a high level</li>
      <li>use keyboard shortcuts to navigate your computer and Chrome</li>
      <li>brainstorm classes for specific objects</li>
      <li>refine searching and filtering skills to Google programming questions</li>
      <li>define and identify use cases for basic data types</li>
    </ul>
  </div>
  <div>
    <h3>Agenda</h3>
    <ul>
      <li><strong>6:15</strong><a href="#the-stack">The Full Stack</a></li>
      <li><strong>6:45</strong><a href="#shortcuts">Keyboard Shortcuts</a></li>
      <li><strong>6:50</strong><a href="#classes">Classes</a></li>
      <li><strong>7:05</strong>Break</li>
      <li><strong>7:10</strong><a href="#findinganswers">Googling</a></li>
      <li><strong>7:35</strong><a href="#datatypes">Data Types</a></li>
      <li><strong>8:25</strong><a href="#homework">Homework Preview</a></li>
    </ul>
  </div>
  <div>
    <h3>Materials</h3>
    <ul>
      <li>Quiet Space</li>
      <li>Notebook</li>
      <li>Writing instrument</li>
      <li>Laptop</li>
      <li>Headphones & mic</li>
    </ul>
  </div>
</div>

<a name="intro"></a>
## Intro

* Instructor intros: David, Margo, and Alice
* Goals for session (see above)
* Follow along by clicking the lesson plan in slack

## Housekeeping and Follow-ups

* Change display name to first name, last initial, pronouns, program; ie - `Rachel W. (she/her, BE)`
* Sessions will be recorded and posted in Slack
* No computer yet? Don't fret for today. If you don't have a mac, please reach out to me! (David)

### Breakout Rooms

This is a feature in zoom that we'll use throughout the mod 0 sessions. They allow for small group discussion, where y'all can solidify concepts or work through challenges. You'll be kicked out into smaller group with 2 or 3 of your classmates. When they're finished you'll get a 60 second warning where you can rejoin the main session, or you'll automatically rejoin at the end of the 60 seconds. During these, we may broadcast messages or pop in to see how we are doing time-wise.

Some norms before heading in:
* Be aware and try not talk over others.
* Leave space and time for everyone to share.

Breakout groups can be a bit awkward at first, but try to embrace them and have fun!

<div class="try-it">
  <h3>Try It: Break out rooms</h3> 5 minutes (groups of 3 or 4)
  <p>1. Introduce yourself (name, pronouns, program)</p>
  <p>2. Where do you call home</p>
  <p>3. What were your takeaways from the orientation video that you watch in preparation for class?</p>
</div>

Other things to note as we go through Mod 0:

- <strong>Zoom</strong>: turn video on, turn mic off unless speaking
- <strong>You can raise your hand using zoom</strong>: go ahead and try it now!
- <strong>Problems or individual questions during the Zoom session?</strong> Send a message in the chat!

<a name="the-stack"></a>
## "The Stack"

People talk about being back-end, front-end, or full-stack devs, but what does that mean? What technologies are you working in? Where does your code run?

Let's break it down.

At Turing, we teach <span class="vocab">web development</span>. This means that we build applications that live on the internet.

If you're in the **Front-End Program**, you're going to be writing code that lives on the user's computer. For the sake web apps, it'll live within their web browser (ie. chrome). The Front-End is user facing, and can be thought of as the presentation layer. Fun frontend things include data visualization and interesting user interactions.

If you're in the **Back-End Program**, you're likely writing code that lives on a server somewhere. This may not interact with the end user directly. Instead, it's often the back-end's job to store and manipulate data that's sent from the front-end. Or search through data and present it to the front-end.

Front-End and Back-End technologies communicate via a protocol called <span class="vocab">http</span>. This stands for hypertext transfer protocol. Which in simple terms means that it is a standard for how data is sent back and forth over the internet.

#### The stack in practice

<div class="try-it">
  <h3>Try It: Break out rooms</h3> 7 minutes (groups of 3 or 4)
  <p>What happens when we go to airbnb.com, and fill out the form with a location and dates, and then click enter?</p>
  <p>What is happening on the client side?</p>
  <p>What is happening on the server side?</p>
  <p>In what order?</p>
</div>

#### Technologies

Front-End languages include:

* html
* JavaScript
* css

Does anyone know what front-end technologies are taught at Turing?

Back-End languages include:

* Ruby
* PHP
* Java

Does anyone know what back-end technologies are taught at Turing?




You won't be tested on any of the above, but it's nonetheless great context for what you're going to be learning over the next 7 plus months.
In mod 0, we'll focus on Ruby and JavaScript as they have the most similarities. And we try to keep things as program agnostic as we can in mod 0.

<a name="shortcuts"></a>
## Keyboard Shortcuts

Most computer users rely heavily on the mouse to open applications, interact with programs, etc. You might think that you're quick with a mouse, but just wait until you get good at <span class="vocab">keyboard shortcuts</span>.

Initially, your flow will be slower as you learn and memorize each of the shortcuts. However, if you force yourself to use these shortcuts, you'll become MUCH faster in the long run.

<div class="try-it">
  <h3>Try it: Shortcuts</h3>
  <div class="flex-container tips">
    <div>
      <h3>Mac Environment</h3>
      <p>Use these shortcuts to quickly move around within your environment.</p>
      <ul>
        <li>
          <strong>Open a program or search for a file:</strong>
          <pre>command + spacebar</pre>
          <p>Then start typing the name of the program or file to search for such as
            <i>"Terminal"</i> Or <i>"Chrome"</i>,
          then press return to open that program or file</p>
        </li>
        <li>
          <strong>Cycle through open programs:</strong>
          <pre>command + tab + tab ...</pre>
        </li>
        <li>
          <strong>Switch between separate open windows of the same program:</strong>
          <pre>command + `</pre>
        </li>
        <li>
          <strong>Quit an Open Program:</strong>
          <pre>command + Q</pre>
        </li>  
      </ul>
      <div>
      <h3>Rectangle</h3>
      <p>Start by making sure Rectangle is running with (command + spacebar) then type <strong>rectangle</strong> and then return. You should see a window icon at the top right of your menu bar. Click the icon to see a dropdown of your shortcuts. Click preferences to customize them.</p>
      <ul>
        <li>
          <strong>Full Screen Current Window:</strong>
          <pre>command + option + enter</pre>
        </li>
        <li>
          <strong>Left Half Current Window:</strong>
          <pre>command + option + left-arrow</pre>
        </li>
        <li>
          <strong>Right Half Current Window:</strong>
          <pre>command + option + right-arrow</pre>
        </li>
        <li>
          <strong>Top Half Current Window:</strong>
          <pre>command + option + up-arrow</pre>
        </li>
        <li>
          <strong>Bottom Half Current Window:</strong>
          <pre>command + option + down-arrow</pre>
        </li>
      </ul>
    </div>
    </div>
    <div>
      <h3>Chrome Browser</h3>
      <p>Start by opening Chrome with the shortcut (command + space) you already learned.</p>
      <ul>
        <li>
          <strong>Bookmark Page:</strong>
          <pre>command + D</pre>
        </li>
        <li>
          <strong>Open New Tab:</strong>
          <pre>command + T</pre>
        </li>
        <li>
          <strong>Open New Window:</strong>
          <pre>command + N</pre>
        </li>
        <li>
          <strong>Open New Incognito Window:</strong>
          <pre>command + shift + N</pre>
        </li>
        <li>
          <strong>Highlight Current URL:</strong>
          <pre>command + L</pre>
        </li>
        <li>
          <strong>Cycle Through Tabs:</strong>
          <pre>Right: control + tab</pre>
          <pre>Left: control + shift + tab</pre>
        </li>
        <li>
          <strong>Reload Page:</strong>
          <pre>command + shift + R</pre>
        </li>
        <li>
          <strong>Close Tab:</strong>
          <pre>command + W</pre>
        </li>
      </ul>
    </div>
  </div>
</div>

This [video](https://www.youtube.com/watch?v=I3PBZBX-Fig&list=PL1Y67f0xPzdMFq2S1bK7E7veT_BbK-zjt&index=2) from Technical Programs Instructor Amy Holt gives some great screen management tips.

<a name="classes"></a>
## Classes

### Defining and Identifying Classes

**Note**: This is a topic that we will revisit in bite-size chunks leading up to Session 4. We will not talk about the technical aspects of how classes play a part in programming today; instead, we will apply the terminology and concepts to real life.

Think of a <span class="vocab">class</span> as a category of thing. For example, deep dish, new york, and pan are all different versions or <span class="vocab">instances</span> of a **pizza** (class).

An Old Navy sweatshirt and an Eddie Bauer sweatshirt (instances) are different versions of a **sweatshirt** (class).

_Great Expectations_ by Charles Dickens and _Becoming_ by Michelle Obama (instances) are different versions of a **book** (class).

Class names are always singular and PascalCase: **Pizza** (instead of pizzas), **Sweatshirt** (instead of sweatshirts), and **Book** instead of books.

<div class="try-it">
  <h3>Try It: Classes</h3>
  <p>Post two sentences in the chat using this structure:</p>
  <p>______, ________, and _______ (instances) are different versions of a ________ (class).</p>
</div>

### Attributes of Classes

An <span class="vocab">attribute</span> of a class is a characteristic that every instance of that class has.

For example:

- Each instance of a **Pizza** (class) has a crust, sauce, and toppings (attributes).
- Each instance of a **Sweatshirt** (class) has a color, size, brand, and price (attributes).
- Each instance of a **Book** (class) has a title, author, publisher, published_date, and total_pages (attributes).

<div class="try-it">
  <h3>Try It: Attributes</h3>
  <p>Post two sentences in the chat about your two classes using this structure:</p>
  <p>Each instance of a _______ (class) has a _______, ________, and ________ (attributes).</p>
</div>


## BREAK

Turn off your mics and videos and walk away from the computer. Stand up, stretch, drink water. Do a few sit-ups, squats, push-ups, jumping jacks, arm circles, stress ball squeezes, or whatever else moves your body.

<a name="findinganswers"></a>
## Googling

Believe it or not, a good chunk of your time as a programmer will be spent Googling to find answers to your questions. In fact, a somewhat experienced programmer will Google at a much higher rate than a beginning programmer. Therefore, it's really important to get good at Googling.

For a frame of reference so that you know just how often we rely on Google (even the "easy" stuff), this is my most recent Chrome history as I've been building this curriculum 😂

<img style="width: 50%" src="images/rachel_history.png" alt="Rachel's search history">

When I Google programming questions, I _usually_ include three things (in varying orders):

<ol>
  <li>What I want to do (verb)</li>
  <li>to what thing (noun)</li>
  <li>using what language or tool</li>
</ol>

For example, if I wanted to add a thick green border to a heading on my webpage and I'm using plain CSS for styling, I might google this:

```
how to add border to heading css
```

or

```
make border on heading element css
```
<strong>SUPER IMPORTANT:</strong> You might not get the results you're looking for on the first go-around.

<div class="try-it">
  <h3>Try It: Writing Google-able Phrases</h3>
  <p>Write out Google-able search phrases for each of the following scenarios. Do not get hung up on being unfamiliar with the terminology for each scenario. We just want phrases to put into Google.</p>
  <p>1. I am using Git for version control and made a typo in a commit message. I need to change it before I push my changes to GitHub.</p>
  <textarea rows="2">
    Phrase 1:
    Phrase 2:
  </textarea>
  <p>2. I got this error message when I ran my Ruby program and I don't know what it means or how to fix it: <em>"unterminated string meets end of file"</em></p>
  <textarea rows="2">
    Phrase 1:
    Phrase 2:
  </textarea>
  <p>3. A Mod 0 homework assignment asks you to print out your git log in oneline (yes, oneline, not a spelling error) format and David definitely did not teach how to do this during class.</p>
  <textarea rows="2">
    Phrase 1:
    Phrase 2:
  </textarea>
</div>

### Sifting Through Results

Once you formulate a good Google search and receive your results, there are a few things you'll want to consider when determining which results to open.

<div class="try-it">
  <h3>Demo: Google Results</h3>
  <p>We'll look through some Google results for "how do you find out the length of a string in javascript?". Be ready to jot down tips for sifting through results.</p>
</div>

<a name="datatypes"></a>
## Basic Data Types

In most programming languages, you'll find the same basic <span class="vocab">data types</span>. A data type represents the kind of data that you can use in the programming language. In this section, we'll discuss five different basic data types that are applicable to both the front end and back end.

### Data Type Use Cases and Syntax

Luckily for us, the <span class="vocab">syntax</span> (the way we write) for these basic data types is almost identical in Ruby and JavaScript.

Imagine that we're making an application for grocery stores to use (intentionally vague description 😁). For each of the data types we researched, we'll brainstorm examples of how we might use that data type in a grocery store app.

<div class="try-it">
  <h3>Try It: Data Types in a Grocery Shopping App</h3>
  <p>What sorts of data would you use strings for?</p>
  <div>
    <p class="toggle-show">
      String Definition (click here)
    </p>
    <div class="toggle-content hidden">  
      <p>A <span class="vocab">string</span> is a data type used represent text. Strings can contain alphabet characters in addition to spaces, numbers, and special characters.</p>
      <p>Examples:</p>
      <li><code>"two roads diverged in a yellow wood"</code></li>
      <li><code>"(303) 731-3117"</code></li>
      <li><code>"Turing School of Software & Design"</code></li>
    </div>
  </div>
  <div class="flex-container">
    <div class="left">
    <textarea rows="2">manager name</textarea>
    </div>
    <div class="left">
    <textarea rows="2">store address</textarea>
    </div>
    <div>
    <textarea rows="2">product description</textarea>
    </div>
  </div>
  <div class="flex-container">
    <div class="left">
    <textarea rows="2"></textarea>
    </div>
    <div class="left">
    <textarea rows="2"></textarea>
    </div>
    <div>
    <textarea rows="2"></textarea>
    </div>
  </div>

  <p>What sorts of data in your shopping app would be integer data? What about float data?</p>
  <div>
    <p class="toggle-show">
      Integers and Floats Definition (click here)
    </p>
    <div class="toggle-content hidden">
      <p><strong><span class="vocab">Integer</span>:</strong> An integer is a whole number (not a fraction) that can be positive, negative, or zero. Unlike floating point numbers, integers cannot have decimal places.</p>
      <p>Examples:</p>
      <li><code>10</code></li>
      <li><code>0</code></li>
      <li><code>-25</code></li>
      <li><code>5148</code></li>
      <p><strong><span class="vocab">Float</span>:</strong> As the name implies, floating point numbers are numbers that contain floating decimal points. They can be positive or negative.</p>
      <p>Examples:</p>
      <li><code>-5.5</code></li>
      <li><code>0.0001</code></li>
      <li><code>98.2</code></li>
    </div>
  </div>
  <div class="flex-container">
    <div class="left">
    <textarea rows="2">number of items on shelf (int)</textarea>
    </div>
    <div class="left">
    <textarea rows="2">weight of meat at deli counter (float)</textarea>
    </div>
    <div>
    <textarea rows="2">number of employees clocked in (int)</textarea>
    </div>
  </div>
  <div class="flex-container">
    <div class="left">
    <textarea rows="2"></textarea>
    </div>
    <div class="left">
    <textarea rows="2"></textarea>
    </div>
    <div>
    <textarea rows="2"></textarea>
    </div>
  </div>

  <p>Why might you use a boolean in a shopping application?</p>
  <div>
    <p class="toggle-show">
      Boolean Definition (click here)
    </p>
    <div class="toggle-content hidden">
      <p>A <span class="vocab">boolean</span> value is either true or false. Boolean values are used in boolean logic, which is a subset of algebra used for creating true/false statements.</p>
      <p>Examples:</p>
      <li><code>true</code></li>
      <li><code>false</code></li>
      <li>Side note for later, can be used to check combinations: ie. if a password is over 8 characters and has both a letter and a number</li>
      <li><code>&& || ==</code> are all operators to help with boolean logic</li>
    </div>
  </div>
  <div class="flex-container">
    <div class="left">
    <textarea rows="2">is an item on sale?</textarea>
    </div>
    <div class="left">
    <textarea rows="2">is the employee clocked in?</textarea>
    </div>
    <div>
    <textarea rows="2">is the store open right now?</textarea>
    </div>
  </div>
  <div class="flex-container">
    <div class="left">
    <textarea rows="2"></textarea>
    </div>
    <div class="left">
    <textarea rows="2"></textarea>
    </div>
    <div>
    <textarea rows="2"></textarea>
    </div>
  </div>

  <p>What might you want to store in an array in your shopping app? Start all of your answers with "list of..." </p>
  <div>
    <p class="toggle-show">
      Array Definition (click here)
    </p>
    <div class="toggle-content hidden">
      <p>An <span class="vocab">array</span> is a data structure that represents a group of things.</p>
      <p>You can think of an array as a collection, box, or container. Instead of saying "I have a collection of shirts," you could say "I have an array of shirts." The phrase "a container of pencils" would become "an array of pencils."</p>
      <p>Typically, elements in an array are all of the same data type, such as an integer or string. Arrays are commonly used in computer programs to organize data so that a related set of values can be easily sorted or searched.</p>
      <p>Examples:</p>
      <li><code>[26, 24, 28, 25, 27, 27, 26, 27]</code></li>
      <li><code>["Mod 0", "Mod 1", "Mod 2", "Mod 3", "Mod 4"]</code></li>
      <li><code>[false, true, true, true, false, true, true]</code></li>
    </div>
  </div>
  <div class="flex-container">
    <div class="left">
    <textarea rows="2">list of checkout counters open</textarea>
    </div>
    <div class="left">
    <textarea rows="2">list of employee names</textarea>
    </div>
    <div>
    <textarea rows="2">list of items that need to be restocked</textarea>
    </div>
  </div>
  <div class="flex-container">
    <div class="left">
    <textarea rows="2"></textarea>
    </div>
    <div class="left">
    <textarea rows="2"></textarea>
    </div>
    <div>
    <textarea rows="2"></textarea>
    </div>
  </div>

  <p>What might you want to store as a hash/object (data in key-value format) in your shopping app?</p>
  <div>
    <p class="toggle-show">
      <strong>EXTENSION</strong> Hash/Object Definition (click here)
    </p>
    <div class="toggle-content hidden">
      <p>A <span class="vocab">hash</span> or <span class="vocab">object</span> is a collection of key-value pairs. It is similar to an array in that it is a collection of things, but in the case of hashes/objects, we are <strong>pairing</strong> data together.</p>
      <p>Sometimes, this data type is referred to as a dictionary because of the pairing of word -> definition.</p>
      <p>For example, you might have a hash/object where the keys are first names and the values are last names.</p>
      <p>When I think about whether or not I need to use a hash, I ask myself "Is this a collection of data where the pairing of items matters?"</p>
      <p>Examples:</p>
      <li><code>{ "9th grade": 110, "10th grade": 125, "11th grade": 66, "12th grade": 70}</code></li>
      <li><code>{ "Mod 0": "Tim and David", "Mod 1": "Mike and Sal", "Mod 2": "Brittany and Robbie" }</code></li>
    </div>
  </div>
  <div class="flex-container">
    <div class="left">
    <textarea rows="2">department (key) and employee count for that department (value)</textarea>
    </div>
    <div class="left">
    <textarea rows="2">manager (key) and employees for that manager (value)</textarea>
    </div>
  </div>
  <div class="flex-container">
    <div class="left">
    <textarea rows="2">item (key) and number of item on shelf (value)</textarea>
    </div>
    <div class="left">
    <textarea rows="2"></textarea>
    </div>
  </div>
  <div class="flex-container">
    <div class="left">
    <textarea rows="2"></textarea>
    </div>
    <div class="left">
    <textarea rows="2"></textarea>
    </div>
  </div>
</div>

### Program specific breakouts

We'll go into breakout rooms to briefly discuss the how to check correct syntax for datatypes in Ruby and JavaScript.

In addition to practicing writing out our data types, we'll also touch briefly on what it looks like to <span class="vocab">assign a variable</span>. This allows us to reference a word in our computer's memory that returns the data we've stored.



After watching a brief demo from an instructor on how to write variables on your computer in either ruby or javascript, try out the following:
* Assign a variable called `pizza` a value of 'the best food of all time'
* Assign a variable called `is_hungry` a value of true
* Assign a variable called `number` a value of 5
* Reassign that `number` variable so that is has a value of 4
* Assign a variable called `teachers` a value of an array with the names 'Ellen', 'Robert', and 'David'
* Try the following (these may take some googling):
  * Create another string variable and add combine it with your pizza variable
  * Create another integer variable and multiply it by your number variable
  * Remove the last item from your teachers array

Answer Keys:
* [Back-End](https://gist.github.com/damwhit/99e906bcfb3b39d34790e2a246029716)
* [Front-End](https://gist.github.com/damwhit/3656c48a09d5ab8bf85916b53fe6e760)

Videos on variable assignment:
* [Back-End](https://www.youtube.com/watch?v=S-IeM4xnCog&list=PL1Y67f0xPzdMFq2S1bK7E7veT_BbK-zjt&index=3)
* [Front-End](https://www.youtube.com/watch?v=sIGNox7OGD0&list=PL1Y67f0xPzdMFq2S1bK7E7veT_BbK-zjt&index=4)

## Close Out

Key takeaways from today:
* You should now understand what people mean when they talk about "the stack" at a high level
* You should understand how to google programming questions
* You should understand what data types are and how you can use them with variables

<a name="homework"></a>
## Homework

Find the homework in your Mod 0 Project Board. Contact your instructors if you're stuck (or better yet, post in the public slack channel as you're likely not the only one running in to that issue)

Also, if you haven't already, I would encourage you to start your mod 1 pre-work, as it'll help you work on your program specific skills.
