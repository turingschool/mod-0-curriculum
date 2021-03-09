---
layout: page
title: Session 4
subheading: Data Types, Variables + Modeling Real World Things
---
### Goals
**By the end of this session, you will be able to:**    

- learn syntax for objects in JS or hashes in Ruby
- pseudocode a technical word problem
- laern how to annotate code using code comments


### Agenda
**6:15** - Housekeeping, Feedback + Goals
**6:25** - Pseudocoding Practice
**6:55** - Break
**7:00** - Modeling Using Objects + Hashes
**7:45** - Break
**7:40** - Annotations
**8:25** - Wrap Up

### Materials
- Notebook
- Writing instrument
- Laptop
- Headphones & mic
- Zoom permission to share screen for breakout sessions

## Intros, Review, and Icebreaker

Note: Update your zoom display name to include your first name, last initial, pronouns, and "FE" or "BE"

<div class="try-it">
  <h3>Intros, Review, and Icebreaker (2-3 people, 5 min)</h3>
  <p>Person with the shortest first name goes first.</p>
  <p>1. Introduce yourself: name, pronouns</p>
  <p>2. What is a book, tv show, or movie that you've read/watched recently and really enjoyed? Why?</p>
  <p>3. Accountability review: what tangible progress have you made toward your mod 0 focus skills?</p>
  <p>Have extra time? Share what extra things you're doing to get ready to start school at Turing.</p>
</div>

### Psuedocode Practice: Data Normalization

A common task on code challenges is to change or adjust the data that you receive (input) into a specific format for the output. 

See example below (remember, it is OK if you don't understand exactly what is happening in the code!)


Given the following data:

```
[ "potter_harry", "weasley_ron", "granger_hermione" ]
```

Write pseudocode to explain how you would approach transforming the names you receive into what you'd want to display on your website. Please note that the format is currently `lastname_firstname` and the desired result would be `Firstname Lastname`. Remember, the smaller you can break up the "steps" the better!

#### 3 minutes - on your own
- How can you break this problem down into smaller chunks or sub-problems?
- What steps are needed to get from the initial data (input) to the desired end result (output)?
- Are there any "edge" cases you need to check?
#### 5 minutes - in groups
- In groups, take turns sharing your pseudocode
- As a group, come up with a Team Solution that can borrow parts from all the different group members!
#### 10 minutes - Share Outs + Walkthrough
- Share out as a whole group

## Modeling Data Using Objects/Hashes
Last session, we learned about basic data types and variables and how we can use these to begin the process of modeling real-world things using code.

Today we are going to take that a bit further as we learn how to use objects/hashes to organize related data together.

We will breakout in FE and BE specific groups to learn how to use these more advanced data structures!



<a name="annotations"></a>
## Annotating Code
Part of being a strong developer is not just writing code. Most of the job is actually reading others code and building on top of it. In order to do so, you'll need to build your skills around:
- Reading other people's code
- Annotation (adding your notes) to code other people have written
- Articulating (speaking about) code that isn't yours

Annotating code is a great way to start to understand how code works and dive into code that you yourself did not write. One strategy to annotating code is to write **comments** directly in the code you are trying to decipher.

Most text editors, like Atom, allow you to add comments in your code. You can highlight a selection and use `CMD + /` to turn your text into a comment. Conversely, you can start any line with `//` for Javascript or `#` in Ruby to indicate a comment. You should see your syntax highlighting change to a different color when code has been commented out!

### Code Annotation Tips
- Use code comments to add your annotations to code
- Use precise, technical vocabulary in your comments to build your articulation skills
- Add comments line by line to stay focused on specific functionality

### Code Annotation Example
Take a look at the following code example in Javascript and Ruby
##### Javascript Example
```js
function playWithCats(cat1, cat2, toy){
  var greeting = `Hello ${cat1} and ${cat2} - how are you both doing this fine morning!`
  var toyChest = [toy, 'piece of string', 'catnip mouse', 'another string']

  console.log(toyChest[2])
  toyChest[2] = 'shoelace'
  console.log(toyChest[2])
  toyChest[4] = 'Q tip'

  return greeting
}

playWithCats('Pumpernickel', 'Nigel', 'paperclip')
```
##### Ruby Example
```rb
def play_with_cats(cat1, cat2, toy)
  greeting = "Hello #{cat1} and #{cat2} - how are you both doing this fine morning!"
  toy_chest = [toy, "piece of string", "catnip mouse", "another string"]

  puts toy_chest[2]
  toy_chest[2] = "shoelace"
  puts toy_chest[2]
  toy_chest[4] = "Q tip"

  return greeting
end

play_with_cats("Pumpernickel", "Nigel", "paperclip")
```

As you can see, there are a lot of things happening in these few lines of code! As a new developer, looking at all this code can be very intimidating. Rather than get overwhelmed, I can go line by line and use comments to annotate what is happening to get a better understanding.
##### Javascript Example
```js
//this is a function with 3 parameters (cat1, cat2 and toy)
function playWithCats(cat1, cat2, toy){
  //declare a variable of greeting - value is a string with the cat1 and cat2 parameters interpolated in
  var greeting = `Hello ${cat1} and ${cat2} - how are you both doing this fine morning!`
  //declare a variable of toyChest - value is an array with 4 elements, including the toy parameter
  var toyChest = [toy, 'piece of string', 'catnip mouse', 'another string']

  //print the 3rd element from the toyChest array to console ('catnip mouse')
  console.log(toyChest[2])
  //reassign the 3 element in the toyChest array to 'shoelace'
  toyChest[2] = 'shoelace'
    //print the 3rd element from the toyChest array to console ('shoelace')
  console.log(toyChest[2])
  //add 'Q tip' as 4th element in the toyChest array
  toyChest[4] = 'Q tip'

  //When function is called, it will return the greeting string value
  return greeting
}
//invoke the playWithCats function with cat1 = 'Pumpernickel', cat2 = 'Nigel',
//and toy = 'paperclip'
playWithCats('Pumpernickel', 'Nigel', 'paperclip')
// this function will output the string - "Hello Pumpernickel and Nigel - how are you both doing this fine morning!"
```
#### Ruby Example
```rb
# this is a function with 3 parameters (cat1, cat2 and toy)
def play_with_cats(cat_1, cat_2, toy)
  # declare a variable of greeting - value is a string with the cat1 and cat2 parameters interpolated in
  greeting = "Hello #{cat_1} and #{cat_2} - how are you both doing this fine morning!"
  # declare a variable of toy_chest - value is an array with 4 elements, including the toy parameter
  toy_chest = [toy, "piece of string", "catnip mouse", "another string"]

  # print the 3rd element from the toy_chest array ("catnip mouse")
  puts toy_chest[2]
  # reassign the 3rd element from the toy_chest array to "shoelace"
  toy_chest[2] = "shoelace"
  # print the 3rd element from the toy_chest array ("shoelace")
  puts toy_chest[2]
  # add "Q tip" as 4th element in the toy_chest array
  toy_chest[4] = "Q tip"

  # When function is called, it will return the greeting string value
  return greeting
end
# invoke the play_with_cats function with cat_1 = "Pumpernickel", cat_2 = "Nigel"
# and toy = "paperclip"
play_with_cats('Pumpernickel', 'Nigel', 'paperclip')
# this function will output the string - "Hello Pumpernickel and Nigel - how are you both doing this fine morning!"
```

### Practice - 20 minutes
In program-specific groups of 2-3, work through the exercises in the [Annotations Practice repo](https://github.com/turingschool/annotation_practice).
- Carefully read the instructions in the `README` before starting
- Take turns being the driver and navigator, but all members of the group should have annotations for each file.
- You may need to reference your notes, Mod 1 Pre-work, and/or Google
- Be sure to use code comments (`CMD + /`) on each line of code

After the time is up, we will share our annotations in smaller groups!

### Close out

* This is your last Mod 0 session! 
* Remaining deliverables - complete the Mod 0 Assessment and turn in your Mod 1 Prework
* Check the calendar for Mod 1 Orientation
* Moving forward:
  * Keep up the hard work
  * Keep asking questions in your cohort channels

* Learning to code is much more like exercise than epiphanies - Think about MJ!

> Quote from Meg Stang (BE instructor) - "I've noticed that the students that do the bare minimum on their mod 1 pre-work are the ones that usually struggle for at least the first half of the mod."

> Quote from Tara Westover (author of the book Educated) - "In retrospect, I see that this was my education... the hours I spent sitting at a borrowed desk, struggling to parse narrow strands of Mormon doctrine... This skill I was learning was a crucial one, the patience to read things I could not yet understand."

When you're finished with your pre-work, work on the suggested exercises. Not sure what to work on at that point? Ask!
