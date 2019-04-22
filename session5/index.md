---
layout: page
title: Session 5
subheading: Top-down design, Breaking down a problem, Modeling OOP
---

<div class="goals-agenda">
  <div>
    <h3>Goals</h3>
    <strong>By the end of this session, you will be able to:</strong>
    <ul>
      <li>understand assessment expectations</li>
      <li>define top-down design and object oriented programming</li>
      <li>break down real-world tasks using top-down design strategies</li>
      <li>model real-world objects and apps by breaking down their attributes and behaviors</li>
    </ul>
  </div>
  <div>
    <h3>Agenda</h3>
    <ul>
      <li><strong>10 min: </strong>Follow-Ups and Goals</li>
      <li><strong>40 min: </strong><a href="#topdowndesign">Top Down Design</a></li>
      <li><strong>5 min: </strong>Break</li>
      <li><strong>65 min: </strong><a href="#oop">Object Oriented Programming</a></li>
      <li><strong>15 min: </strong><a href="#homework">Assessment Preview</a></li>
    </ul>
  </div>
  <div>
    <h3>Materials</h3>
    <ul>
      <li>Notebook</li>
      <li>Writing instrument</li>
      <li>Laptop</li>
      <li>Headphones & mic</li>
    </ul>
  </div>
</div>

## Follow-Ups and Goals
### Wins From Feedback

- Solid understanding of creating repository, pushing to repository, cloning repository, and forking repository (average mastery scores above 4)
- More breakout rooms.
- Lots of you are taking initiative to work through confusion on your own.

### Follow-Ups From Feedback

- We ran into a real bug! Let me explain my process a bit further...
- The session ran long because of this
- Part of the session was skipped over and did not make it to the recording - only the intro to Github but no core concepts.
- Keep asking and answering within the channel.
- Google for the extra help to solidify concepts

### Other Notes

- Initial commit for starting point (see commits from [mod0references](https://github.com/turingschool-examples/mod0resources/commits/master) repo as an example)
- Good commit message format: 

```
Add list of mod 0 resources
Remove reference to old blog post
Change data type of age field
Fix spelling mistake
```

- Not good commit message format: 

```
Rachel is adding her list of mod 0 resources
old blog post
changed data type for age field
Oops, I need to fix my spelling mistake
```

- Instead of simply absorbing information, practice and apply
- Today's Goals

<div class="try-it">
  <h3>Intros, Review, and Icebreaker</h3>
  <p>Person with the shortest first name goes first.</p>
  <p>1. Introduce yourself: name, pronouns</p>
  <p>2. What's something you're really good at? (Don't be humble!)</p>
  <p>3. Accountability review: what tangible progress have you made toward the focus skills you identified at the beginning of Mod 0?</p>
  <p>Have extra time? Share what extra things you're doing to get ready to start school at Turing.</p>
</div>

<a name="topdowndesign"></a>
## Top Down Design

> "Programing is hard because it requires us to solve ill-defined problems with unknown solutions. Our job is to invent the solutions. Coding is inherently creative." - [Danny Smith on Breaking Down Problems](https://medium.com/@dannysmith/breaking-down-problems-its-hard-when-you-re-learning-to-code-f10269f4ccd5)

<span class="vocab">Top Down Design</span> (or step-wise design) is an approach to breaking down a problem or system. In this approach, the designer lays out the problem or system's high-level overview, then breaking down the overview into sub-systems (or sub-steps), then repeating that process until the system has been broken down into the smallest pieces. 

**Why is this important?** A problem that is not broken down into its smallest components remains too complex and abstract to code. 


As humans, we memorize and practice the steps that it takes in order to do even the most basic tasks. If you tell a human to tie their shoe, you (generally) don't need to specify any further instructions. However, if you were to build a shoe-tying machine, you would need to break down the process into the most basic steps. 

<div class="try-it">
  <h3>Top Down Design: Independent</h3>
  <p>Watch <a href="https://www.youtube.com/watch?v=QsKkG9gWxF4" title="">Damian Gordon's Top Down Design video</a> where he talks through the process of breaking down the process of making a cup of tea.</p>

  <p>On your own, breakdown steps 6 and 7. Paste your answers in the chat box.</p>
</div>

Even though we're not going to write the code for making a cup of tea, imagining the process of breaking down everyday tasks is great practice for getting your brain ready for top down design. 

### Further Break Down

The video only demonstrates one layer deep of breaking down a problem. What would it look like if we broke down the sub-steps?

<div class="things-to-note">
  <h4>Things to Note</h4>
  <p>When breaking down subsequent layers of a problem, finish an entire layer before creating a new layer.</p>
  <p>What does this look like?</p>
  <p>Follow along with Pen and paper as we break down my process of getting ready for bed</p>
</div>

<div class="try-it">
  <h3>Try It (Break Out Rooms): Top Down Design</h3> 
  <p>The person whose first name starts closest to the letter F will pick a scenario below:</p>
  <ul>
    <li>Reheating a meal</li>
    <li>Mailing a package</li>
    <li>Walking a dog</li>
    <li>Putting children to bed</li>
    <li>Applying for a job</li>
    <li>Writing an essay</li>
    <li>Starting a campfire</li>
    <li>[Choose your own adventure]</li>
  </ul>
  <p>As a group, use a Top-Down Design approach to break down the scenario. Everyone should have their own diagram to share when we pair up afterward.</p>
  <p>Done? Review, revise, and choose another scenario.</p>
  <p>Be ready to share and explain.</p>
</div>

### Top Down Design and OOP

Breaking down problems using top down design lends itself nicely to the object-oriented design principles of <span class="vocab">abstraction</span> (where an object performs a task without other objects being concerned about how it is done) and <span class="vocab">encapsulation</span> (where an object handles its own internal states and behind-the-scenes work). 

<hr>
## BREAK

Turn off your mics and videos and walk away from the computer. Stand up, stretch, drink water. Do a few sit-ups, squats, push-ups, jumping jacks, arm circles, stress ball squeezes, or whatever else moves your body. 
<hr>

<a name="oop"></a>
## Object Oriented Programming

<span class="vocab">Object oriented programming</span>, or OOP for short, is an approach to programming (or a [programmming paradigm](https://en.wikipedia.org/wiki/Comparison_of_programming_paradigms)) where programs are organized as a series of objects. 

OOP is very similar to how the world actually works. Lets take an example of an app that millions of people interact with every day. The app <strong>Spotify</strong> will serve as our real world example. We will break it down into <span class="vocab">objects</span> (bullet points) of various <span class="vocab">classes</span> (bold):

<strong>Artist</strong>
- Dr. Dre
- Ariana Grande
- Grateful Dead
- Marvin Gaye
- Tom Petty
- Fleetwood Mac

<strong>Song</strong>
- US Blues
- The Next Episode
- Thank You, Next
- Living Over
- Free Falling
- Landslide

<strong>User</strong>
- Tim Tyrrell
- Rachel Warbelow
- Katie Scruggs
- Christopher Lane
- Leiya Kenney
- Sejin Kim

<strong>Playlist</strong>
- Uplifting Sound
- Good Love
- Tycho Selects
- Michelle Obama: Becoming Motown
- This is Rainbow Kitten Surprise
- Your Discover Weekly

<strong>Genre</strong>
- Dance
- Indie
- Bluegrass
- Hip Hop

We group these objects because they have similar attributes/states and behaviors/methods/abilities. 

<div class="try-it">
  <h3>Classes and Objects</h3>
  <p>In the chat, post an example of a class and objects of that class within an app that you interact with every day. Example:</p>
  <strong>Weather Underground</strong><br>
  <code>City: Denver, Vail, Steamboat</code><br>
  <code>Forecast: Rain, Snow, Sunny</code>
</div>

#### Classes and Objects

Think of a <span class="vocab">class</span> as a blueprint that can be used for creating lots of different versions of itself. For example, here are a few classes that we can organize the Zoom software into:

```
Participant
Session
Host
Breakout_Room
```

An <span class="vocab">object</span>, on the other hand, **is** a very specific instance of a class. An object is what is created from the blueprint. 

<table>
  <thead>
    <tr>
      <th>Class</th>
      <th>Objects of that class</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Participant</td>
      <td>Elyse, Djavan, Jessie</td>
    </tr>
    <tr>
      <td>Session</td>
      <td>Session 1, Session 2, Session 3, etc</td>
    </tr>
    <tr>
      <td>Host</td>
      <td>Katie, Tim, Rachel</td>
    </tr>
    <tr>
      <td>Breakout_Room</td>
      <td>Frontend Room, Backend Room</td>
    </tr>
  </tbody>
</table>

The objects are similar enough in attributes/states and behaviors/methods/abilities that they are part of the same class. 

Sidenote: Let's imagine that the hosts had different permission levels so they shared some functionality, but not all functionality. As an example, all hosts can mute participants and send a message to the chat, but maybe only Katie can create breakout rooms or end the session. How do we account for this within the same **Host** class? In addition, maybe certain levels of hosts are paid each time they participate in a zoom session, while other hosts only volunteer. Then you may need to create completely separate classes: **Paid_Host** and **Volunteer_Host**.

 **This is up to you as the developer to figure out how similar or different your objects are.**

<div class="things-to-note">
  <h4>Things to Note</h4>
  <p>One trick you can use when determining whether something is an object or a class is to say:</p>
  <p><strong>[Object] is a type of [Class]</strong></p>
  <p>- Tim is a type of Host</p>
  <p>- Backend Room is a type of Breakout Room</p>
  <p>- Ayla is a type of Participant</p>
</div>

<div class="try-it">
  <h3>Classes vs. Objects</h3>
  <p>Switching gears - Here you will categorize a few real-world examples that are not related to software. This is a chance to use what you've learned on something more abstract. On your own, categorize the following classes and objects.</p>
  <textarea name="">
car, poodle, Ford Mustang, scrabble, tent, chess, game, Nissan Juke, rose, dog, daisy, shelter, chihuahua, orchid, apartment, bulldog, monopoly, flower, Honda Civic
  </textarea>
  <br><br>
  <table class="objectclass">
  <thead>
    <tr>
      <th>Class</th>
      <th>Objects of that class</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><textarea name=""></textarea></td>
      <td><textarea name=""></textarea></td>
    </tr>
    <tr>
      <td><textarea name=""></textarea></td>
      <td><textarea name=""></textarea></td>
    </tr>
    <tr>
      <td><textarea name=""></textarea></td>
      <td><textarea name=""></textarea></td>
    </tr>
    <tr>
      <td><textarea name=""></textarea></td>
      <td><textarea name=""></textarea></td>
    </tr>
    <tr>
      <td><textarea name=""></textarea></td>
      <td><textarea name=""></textarea></td>
    </tr>
  </tbody>
</table>
</div>

#### Attributes and Methods

<span class="vocab">Attributes</span> contain information about the **state** of a specific object (or instance of a class). The information format should be one of the basic data types from Session 2 (string, integer, float, boolean, array, hash). 

> Attributes answer the question "What characteristics might distinguish this specific object from another object of the same class?". 

For example: "What characteristics might distinguish this specific playlist from another playlist?


As we're looking at the examples below, note that I am using capital letters and an underscore for the attribute names. This is not a rule; this is simply a convention I'm using for today's lesson. Lets return to our Spotify example:

```
Playlist

Attributes:
Name (string)
Created_On (datetime) -- this is not one of the data types we discussed, but it's valid
Recently_Played (boolean)
Songs (array)
```
Post two more attributes in the chat. 


All of these things would differentiate one playlist from another, but none of these attributes are **behaviors** or **actions**. For example, I didn't include `Add_Song_To_Playlist` as an attribute because that's an action, not a state.

```
Artist

Attributes:
Name (string)
Active (boolean)
Followed_By (array)
Albums (array)
```
Post two more attributes in the chat. 

Again, all of these attributes would differentiate one Artist from another. Notice that this last attribute, `Albums`, could be an array containing strings of song names, or an array of `Song` objects depending on how the program is set up. Again, none of these attributes are **behaviors** or **actions**. That's why I didn't include `Add_Album` or `Add_Song`.

```
User

Attributes:
Username (string)
Paid (boolean)
Active (boolean)
Playlists (array)
```
Post two more attributes in the chat. 

 Notice I didn't include `Follow_Artist` or `Follow_Playlist` because those are both **behaviors** or **actions**.

#### Methods

<span class="vocab">Methods</span> define **behavior/actions**. Methods are generally verbs (action words or very short action phrases). Methods generally answer the question "What things can objects of this specific class do?"

For example: "What things can Playlists do?" or "What things can Artists do?"

Let's look at a few examples: 

```
Playlist

Attributes:
Name (string)
Created_On (datetime)
Songs (array)
Created_By (string)
Followers (array)

Methods:
Add_Song
Rename
```
Post two more methods in the chat. 


Unlike attributes, methods do not necessarily differentiate one instance of the object from another. For example, the steps that two users would take to add songs might be identical. The steps they take to share their playlist with another user might also be identical. Often (but not always), a method will use or change an attribute. For example,`Rename` would change the `Name` attribute. The `Add_Song` method would change the `Songs` attribute by adding a `Song` instance to the array. And, the `Shuffle` method would access the `Songs` attribute and change the order. `Add_Song` would also lead to the method `Number_Of_Songs` returning a different result, because we can infer that this method returns the length or count of the `Songs` array.

Here's another example (intentionally vague):

```
Artist

Attributes: 
Name (string)
Genre (string)


Methods: 
Add_Album
```
Post two methods and two attributes in the chat


<div class="try-it">
  <h3>Try It: Attributes vs. Methods</h3>
  <p>Lets switch gears and use what we've learned to organize an object that is not related to an app. By yourself, categorize the following as either <strong>attributes</strong> of a car or <strong>methods</strong> of a car.</p>
  <textarea name="">
Model, Reverse, Color, Fill_Tank, Gas_Tank, Beep, Current_Speed, Start_Engine, Year, Change_Oil, Last_Oil_Change, Tire_Size, Turn, Stop
  </textarea>
  <br><br>
  <table class="objectclass">
  <thead>
    <tr>
      <th>Attributes</th>
      <th>Methods</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><textarea name=""></textarea></td>
      <td><textarea name=""></textarea></td>
    </tr>
  </tbody>
</table>
</div>

<div class="try-it">
  <h3>Big Breakout Rooms: Classes, Attributes, and Methods</h3>
  <p>1. The new driver is the person whose birthday happened most recently. Everyone else will be a navigator.</p>
  <p>2. Driver: Share your screen and open up a new blank file in your text editor (command + n). You do not need to save this file.</p>
  <p>3. Think back to your grocery shopping app from session 2. With your group, brainstorm at least three classes that might exist in a shopping app (keeping in mind that you're thinking <code>blueprint</code>, not specific items) and jot your ideas down in your text editor. Need an example? <code>Store</code> would be a good example of a class.</p>
  <p>4. Next, select three of the classes your team brainstormed. For those classes, jot down attributes for the four selected objects.<strong>Explain why they are not methods. Do they rely on other data or a calculation? Then they are not attributes.</strong> As an example, if I selected <code>Store</code> as one of my classes, I would write in my text editor:</p>
  <pre>
    Store

    Attributes:
    Name (string)
    ClosingHour (datetime)
  </pre>
  <p>5. Select two classes from your shopping app that lend themselves nicely to brainstorming methods. For example, <code>Product</code> might not have many easily brainstormed methods, but <code>Cashier</code> or <code>Customer</code> might.</p>
  <p>6. Brainstorm methods for the two selected classes. <strong>Explain why they are not attributes.</strong></p> 
  <p>7. Discuss whether your brainstormed methods would use/change any attributes. If so, which ones?</p>
</div>

### Individual Practice Round

<div class="try-it">
  <h3>Classes in an App</h3>
  <ol>
      <li>Choose one of these apps:</li>
      <ul>
        <li>Facebook</li>
        <li>Instagram</li>
        <li>Gmail</li>
        <li>Google Maps</li>
    </ul>
      <li>Brainstorm two classes in your chosen app.</li>
      <li>List the attributes for both classes.</li>
      <li>List the methods for both classes.</li>
  </ol>
  <p>Be ready to share with a group and give/receive feedback.</p>
</div>

### Share and Feedback

The person with the longest last name will share first.

1. What app did you choose? (Facebook, Instagram, Gmail, Google Maps)
1. What two classes did you identify for that system? How do you know they are classes? (Group: provide feedback to confirm or adjust)
1. What are the **attributes** for your first class? How do you know they are attributes and NOT methods? (Group: provide feedback to confirm or adjust)
1. What are the **attributes** for your second class? How do you know they are attributes and NOT methods? (Group: provide feedback to confirm or adjust)
1. What are the **methods** for your first class? How do you know they are methods and NOT attributes? (Group: provide feedback to confirm or adjust)
1. What are the **methods** for your second class? How do you know they are methods and NOT attributes? (Group: provide feedback to confirm or adjust)
1. Switch roles and repeat.

### Notating Classes, Objects, Attributes, and Methods for the Mod 0 Assessment

On your Mod 0 Assessment, you will be asked to identify classes, objects, attributes, and methods. We'll demonstrate the format we want you to use, then we'll give you some time to try it out with the class from your breakout room. 

<a name="assessmentprev"></a>
## Mod 0 Technical Assessment

This is our final Mod 0 technical session. Your assignment between now and Thursday is to find 80 minutes  to complete the [Mod 0 Technical Assessment](https://fierce-beyond-34376.herokuapp.com). 

<div class="instructions assessmentpreview">
  <h1>SAMPLE INSTRUCTIONS</h1>

  <p>This work portion assessment should take you approximately 70 minutes, but we recommend taking an additional 10 minutes to throughly read over the expectations outlined in this document. The timed nature is meant to get you used to working under pressure.</p>

  <p class="important"><strong>First,</strong> fork the assessment checklist. You will use this checklist to ensure that you have met the Mod 0 Technical Assessment expectations. (This checklist will be provided to you when you start the assessment).</p>

  <h4>Part I: Creating Directories and Files; Initializing Git and Pushing to GitHub (10 min)</h4>

  <ol>
    <li>Use your terminal to create a directory called <code>...</code></li>
    <li>Inside of that directory, make an empty text file called <code>...</code></li>
    <li>Initialize your directory as a git repository.</li>
    <li>Add your file and commit using the message "Initial commit"</li>
    <li>Create a public repo on Github with the same name.</li>
    <li>Add the remote and push your local repository to Github.</li>
  </ol>

  <h4>Part II: Top Down Design (25 min)</h4>

  <ol>
    <li>Open up your <code>...</code> file in your text editor.</li>
    <li>Break down the process of <code>...</code> <small>(We will leave the situation intentionally vague so that you can choose what angle you feel most comfortable with. Although we are not looking for a specific "answer" for how you break this down, you should be as detailed as possible. It is better to break things down too much than to oversimplify a process. Use the same process and notation that we used during Session 5 with a dash mark and one indent for every new layer.)</small></li>
    <li>Save your file.</li>
    <li>Add and commit your changes.</li>
    <li>Push your changes to Github.</li>
  </ol>

  <h4>Part III: Classes, Objects, Attributes, and Methods (35 min)</h4>

  <ol>
    <li>Inside of <code>...</code>, create a new directory called <code>...</code></li>
    <li>Inside of <code>...</code>, create four files: <code>...</code>, <code>...</code>, <code>...</code>, and <code>...</code><em>(If you're comfortable trying markdown at this point, feel free to use .md instead of .txt).</em> </li>
    <li>Open up <code>...</code> in your text editor.</li>
    <li>Brainstorm one class that might exist in a <code>...</code> and put this at the top of the file.</li>
    <li>List at least three attributes for that class. In parentheses, list the data type for that attribute (string, boolean, integer, float, hash/object, datetime).</li>
    <li>List at least three methods for that class. In parentheses, explain what the method does, including the names of the attributes that it uses or modifies.</li>
    <li>Save your file.</li>
    <li>Add and commit your changes for this class.</li>
    <li>Open up <code>...</code> in your text editor.</li>
    <li>At the top, type the name of an object that is an instance of your class.</li>
    <li>List the values for each attribute.</li>
    <li>List the results of the method being called for this specific object.</li>
    <li>Save your file.</li>
    <li>Add and commit your changes for this class.</li>
    <li>Repeat steps 3-8 with <code>...</code></li>
    <li>Repeat steps 9-14 with <code>...</code></li>
    <li>Push your changes to GitHub.</li>
  </ol>

  <h4 class="important">Done?</h4>
  <p>Check off all of the items on your forked checklist, then send the checklist to Tim and Rachel in a DM on Slack.</p>
</div>
