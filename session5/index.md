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
      <li>define top-down design and object oriented programming</li>
      <li>break down real-world tasks using top-down design strategies</li>
      <li>model real-world objects and apps by breaking down their attributes and behaviors</li>
    </ul>
  </div>
  <div>
    <h3>Agenda</h3>
    <ul>
      <li><strong>10 min: </strong>Housekeeping and Goals</li>
      <li><strong>35 min: </strong><a href="#topdowndesign">Top Down Design</a></li>
      <li><strong>5 min: </strong>Break</li>
      <li><strong>55 min: </strong><a href="#oop">Object Oriented Programming</a></li>
      <li><strong>10 min: </strong><a href="#homework">Assessment Preview</a></li>
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

## Housekeeping and Goals
### Wins From Feedback

- Solid understanding of creating repository, pushing to repository, cloning repository, and forking repository (average mastery scores above 4)
- More breakout rooms!

### Follow-Ups From Feedback

- Time allotted for breakout rooms
- Reading over the lesson beforehand
- Sessions move fast
- Esc button will exit full screen in Zoom

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
    <div>
  <textarea rows="12" name="">
1 Get a cup
      1.1 Open the cupboard
      1.2 Select a mug
      1.3 Put the mug on the counter
2 Get tea bags
  -
3 Get sugar
4 Get milk
5 Get spoon/fork
</textarea>
  
</div>
</div>

<div class="try-it">
  <h3>Top Down Design: Mailing a Package</h3>
  <p>Back in your breakout groups, the person whose birthday is next will share their screen and be the driver. Happy birthday! Everyone else in the room will be a navigator.</p>
  <p>Birthday person: Pull up your text editor and open a new blank file (command + n). You do not need to save this file.</p>
  <p>Break down the process of <strong>mailing a package at the post office</strong> into steps (and break down those steps as substeps, and so on as needed).</p>
  <p>Finished? Switch drivers and break down the steps of ordering shoes on Amazon</p>
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
- Antonio Fry
- Vinton Te'o
- Taylor Jordan

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
      <td>Kayla, Jev, Evan</td>
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

Sidenote: Let's imagine that the hosts had different permission levels so they shared some functionality, but not all functionality. As an example, all hosts can mute participants and send a message to the chat, but maybe only Rachel can create breakout rooms or end the session. How do we account for this within the same **Host** class? In addition, maybe certain levels of hosts are paid each time they participate in a zoom session, while other hosts only volunteer. Then you may need to create completely separate classes: **Paid_Host** and **Volunteer_Host**.

 **This is up to you as the developer to figure out how similar or different your objects are.**

<div class="things-to-note">
  <h4>Things to Note</h4>
  <p>One trick you can use when determining whether something is an object or a class is to say:</p>
  <p><strong>[Object] is a type of [Class]</strong></p>
  <p>- Tim is a type of Host</p>
  <p>- Backend Room is a type of Breakout Room</p>
  <p>- Emily is a type of Participant</p>
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

#### Attributes

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

All of these things would differentiate one playlist from another, but none of these attributes are **behaviors** or **actions**. For example, I didn't include `Add_Song_To_Playlist` as an attribute because that's an action, not a state.

```
Artist

Attributes:
Name (string)
Songs (array)
Genre (string)
Active (boolean)
Followed_By (array)
Albums (array)
```

Again, all of these attributes would differentiate one Artist from another. Notice that this last attribute, `Albums`, could be an array containing strings of song names, or an array of `Song` objects depending on how the program is set up. Again, none of these attributes are **behaviors** or **actions**. That's why I didn't include `Add_Album` or `Add_Song`.

```
User

Attributes:
Username (string)
Current_Song (Song)
Hours_Listened (float)
Paid (boolean)
Active (boolean)
Playlists (array)
```
Notice that the `Current_Song` attribute for a User is of type `Song`. Objects sometimes hold objects or instances of other classes as their attributes. Notice I didn't include `Follow_Artist` or `Follow_Playlist` because those are both **behaviors** or **actions**.

<div class="try-it">
  <h3>Try It: Attributes</h3> 
  <p>In the chat, post the attributes (with data types) of a <code>Song</code> class.</p>
</div>

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
Number_Of_Songs
Delete_Song
Play
Shuffle
Repeat
Queue_Next_Song
Share
```

Unlike attributes, methods do not necessarily differentiate one instance of the object from another. For example, the steps that two users would take to add songs might be identical. The steps they take to share their playlist with another user might also be identical. Often (but not always), a method will use or change an attribute. For example,`Rename` would change the `Name` attribute. The `Add_Song` method would change the `Songs` attribute by adding a `Song` instance to the array. And, the `Shuffle` method would access the `Songs` attribute and change the order. `Add_Song` would also lead to the method `Number_Of_Songs` returning a different result, because we can infer that this method returns the length or count of the `Songs` array.

Here's another example:

```
Artist

Attributes: 
Name (string)
Genre (string)
Songs (array)
Active (boolean)
Followed_By (array)
Following (array)
Albums (array)

Methods: 
Add_Album
Add_Single
Total_Song_Plays
Follow_Artist
Create_Playlist
```

In this case, the `Add_Album` method would change both the `Albums` array and the `Songs` array.

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
  <h3>Breakout Rooms: Classes, Attributes, and Methods</h3>
  <p>1. The new driver is the person whose birthday happened most recently. Everyone else will be a navigator.</p>
  <p>2. Driver: Share your screen and open up a new blank file in your text editor (command + n). You do not need to save this file.</p>
  <p>3. Think back to your grocery shopping app from session 2. With your group, brainstorm as many classes as you can that might exist in a shopping app (keeping in mind that you're thinking <code>blueprint</code>, not specific items) and jot your ideas down in your text editor. Need an example? <code>Store</code> would be a good example of a class.</p>
  <p>4. Next, select four of the classes your team brainstormed. For those classes, jot down attributes for the four selected objects. As an example, if I selected <code>Store</code> as one of my classes, I would write in my text editor:</p>
  <pre>
Store

Attributes:
Name (string)
Location (string)
SquareFeet (integer)
OpeningHour (datetime)
ClosingHour (datetime)
  </pre>
  <p>5. Select two classes from your shopping app that lend themselves nicely to brainstorming methods. For example, <code>Product</code> might not have many easily brainstormed methods, but <code>Cashier</code> or <code>Customer</code> might.</p>
  <p>6. Brainstorm methods for the two selected classes.</p> 
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
  <p>Be ready to share with a partner and give/receive feedback.</p>
</div>

### Share and Feedback

In just a minute, you'll be randomly paired with another student. The person with the longest last name will share first.

1. What app did you choose? (Facebook, Instagram, Gmail, Google Maps)
1. What two classes did you identify for that system? How do you know they are classes? (Partner: provide feedback to confirm or adjust)
1. What are the **attributes** for your first class? How do you know they are attributes and NOT methods? (Partner: provide feedback to confirm or adjust)
1. What are the **attributes** for your second class? How do you know they are attributes and NOT methods? (Partner: provide feedback to confirm or adjust)
1. What are the **methods** for your first class? How do you know they are methods and NOT attributes? (Partner: provide feedback to confirm or adjust)
1. What are the **methods** for your second class? How do you know they are methods and NOT attributes? (Partner: provide feedback to confirm or adjust)
1. Switch roles and repeat with second person.

<a name="homework"></a>
## Homework

This is our final Mod 0 technical session. Your assignment between now and Thursday is to find 70 minutes to complete the [Mod 0 Technical Assessment](https://fierce-beyond-34376.herokuapp.com). 
