---
layout: page
title: Session 5 - BE
subheading: Intro to Arrays in Ruby
---

## Learning Goals

- Make decisions about how to best use time when self-teaching
- Develop and practice strategies for reviewing a lesson
- Use syntax to declare variables that store Arrays in Ruby
- Use basic Array methods to manipulate data in Arrays

## Vocabulary

- Array
- bracket notation
- element
- index position
- method
- square brackets `[]`
- variable

## Why We Need Arrays

Let's consider a list of students in a class, using the programming tools we've learned thus far:

```ruby
student1 = "Josiah"
student2 = "Cindy"
student3 = "Violet"
student4 = "Jhun"
# on and on.
```

As the list of students inevitably changes and grows, this is difficult to maintain programmatically. If we wanted to send an email to every student or perform any other task for every student, we would have to write code for each, individual student, which defeats the purpose of having a computer program automate tasks.

An **Array** is a Ruby Data Type that allows us to store multiple pieces of data in _one_ variable. They can be compared to lists. The Array is an incredibly powerful and necessary Data Type for building web applications.

Thinking back to the Populi platform that helped you enroll at Turing, many Arrays are used to power its functionality:

- **student roster** - list of *all names* in a given cohort
- **course catalog** - list of *all courses* we offer

Notice that in the previous examples, the items in a given list are all of the _same type_.

<div class="try-it">
  <h3>Waterfall</h3> 
  <ul>
    <li>Think of an app you use, and a place where it probably uses an Array</li>
    <li>Draft a message in the Zoom chat that includes the name of the app and use-case for Array</li>
    <li>Only send the message once the instructor directs you to!</li>
  </ul>
</div>

## Array Syntax

- An Array is declared with the **square brackets** (they can be typed with the keys to the right of the `p` character on your keyboard)
- Each piece of data in an Array is referred to as an **element**
- Elements should be separated with a comma and space
- An Array can hold any number of elements

```ruby
students = ["Cindy", "Josiah", "Rigo"]
```

>To describe what the previous line of code does, one might say, "The `students` variable stores an array of Strings. This array has 3 elements"

<br>
Notes on best practices for Arrays:
- The name of a variable that stores an Array should usually be plural to indicate that it has the potential to hold _many_ elements of that type
- While Ruby technically allows an Array to hold multiple Data Types, it is not best practice and in any real-world application, will usually be unhelpful anyways

### Accessing Elements

If we just want to access one element from an array, we can use **bracket notation** and a number that corresponds with that element. As weird as it may seem, [counting starts with 0 in most programming languages](https://skillcrush.com/blog/why-programmers-start-counting-at-zero/). That number is referred to as an **index position**.

Through reading the code snippets below, one can infer that the first element is in index position 0, and counting increments by 1.

```ruby
# in irb
students = ["Cindy", "Josiah", "Rigo"]

students[0]
# --> "Cindy"

students[2]
# --> "Rigo"
```

```ruby
# in Atom, when running the file in the command line
students = ["Cindy", "Josiah", "Rigo"]

puts students[0]
# --> "Cindy"

puts students[2]
# --> "Rigo"
```

<div class="try-it">
  <h3>Storing Arrays, Accessing Elements (Pairs)</h3> 
  <p>The partner with the largest number of characters in their full name is the driver; the other partner is the navigator. The driver should screenshare. Complete the following work in an irb session:</p>
  <ul>
    <li>Declare a variable named <code>friends</code> that stores an Array of 5 Strings with friends names.</li>
    <li>Access the third element</li>
    <li>Access the last element</li>
    <li>Access the first element</li>
    <li>If time permits: switch roles, and start over</li>
  </ul>
  <p>By default, we won't debrief this as a group. But, your instructor will open it up for questions. When you see the countdown for breakout rooms to end, decide if you are going to take that time to ask your instructor a question, or if you feel good to move on without doing so.</p>
</div>

## Array Methods

In most cases, we will want to modify data in an Array at one point or another. Today, we will learn a number of ways to do that. They will probably not satisfy your every question of "How does X app do Y?" but this will lay an important foundation for the concept of Array methods, and some strategies to get that information you are craving!

An **Array method** is a piece of functionality that is built into the Ruby language, intended to be used on Arrays specifically. Each method has a specific job to perform; we can use it if we want, but we can't modify a built-in method. There are many Array methods - like anything else in programming, you will memorize a handful that you regularly use, then look to documentation for those you don't use as regularly!

### Array Methods - Syntax

To use an Array method in Ruby, we first must tell Ruby which Array we want to perform the method on. After that, a dot/period, then the name of the method followed by parentheses.

```ruby
students = ["Cindy", "Josiah", "Rigo"]
students.pop

students
```

>To describe what the previous line of code does, one might say, "This line of code calls the `pop` method on the `students` array"

## Learning From Reading Code You Don't Know

As a developer, an important skillset is researching and documentation reading (and to note, in many cases, documentation is not always current, rarely perfect, and usually quite dense).

Since researching and documentation reading can sometimes be time-consuming, another skill is to be able to make the decision about when it's time to go to Google. In this activity, you will be provided with some structure to teach yourself a few technical concepts. The main goal is **not** to learn the technical concepts, it's to practice and explore _strategies to learn_ in an environment such as this, and how to make the decision about what to do when you need to learn something.

<div class="try-it">
  <h3>Data Types & Breakout Room Roles (Pairs):</h3> 
  <p>You've seen the syntax for the <code>pop</code> method but its utility was not explained. Before going down a potential rabbit hole in Google, open up your browser Dev Tools. Declare an Array with 3 elements. Use the <code>pop</code> method with the syntax you learned earlier. Call the Array and observe the change that has been made since you initially declared it. Go through this process again, with the same Array. What can you infer the <code>pop</code> method does? Check Google (remember, ruby-docs has the most reliable documentation) to confirm your inference. Write this down; you'll be asked to share out and expected to use this learning in the next activity.</p>
  <p>Check in on how you've been collaborating - is one partner screensharing? Do both partners have the same info written down (it doesn't have to be the <em>exact</em> same, but you should generally have the same level of understanding and similar notes). Decide if you want to switch drivers, or change anything else for the next section.</p>
  <p>Your next task is to learn what the <code>push</code>, <code>shift</code> and <code>unshift</code> Array methods do. Discuss with your partner - how easy or hard did the work you did for <code>pop</code> feel? Do you want to follow the same steps to learn about the other methods, or go straight to MDN documentation to learn about the other 3? Act on whatever you decide, and be sure to write down your learnings about these methods.</p>
  <p>Your instructor will be calling random pairs to share out on each of the 4 methods you've discussed. Who will answer if you are called on?</p>
</div>

<br>

<!-- Regroup from BOs and call on groups to share out

- Reflect: What % of the time did you talk, did your partner talk? What % of the time were you screensharing, your partner screensharing? -->

## Practice Reviewing a Lesson

We are going to stop here and spend the remaining minutes of the session working independently. At Turing, there are going to be times where you might feel a lesson went too fast, or you don't feel confident in your ability to apply the concepts, or maybe the class didn't even make it all the way through the content. 

One of your responsibilities as a student will be to preview and review each lesson. Previewing will give you some exposure to concepts and vocabulary, so you can come in a class ready to engage and ask great questions. Reviewing should help you solidify concepts in whatever way you need.

The more actively you engage in previewing and reviewing, the more effective you will be. A passive way to engage would be to skim through the lesson document. An active way to engage would be to open up to Console and re-do all the You Do/Breakout room activities, taking notes on what you get stuck on, have questions, and ah-ha moments you have. (That is just *one* example of way to actively review a lesson).

If you don't have a strategy or a plan for how you'll review, it will be easy to slip into the habit of passively reviewing lessons once you are in Mod 1 - or - skipping a review session all together.

So, time has been built **into** this session to let you explore what works for you. Your instructor will let you know how much time to spend in independent review time - for this Array lesson specifically. When the time is over, you will be asked to share a reflection on how you used the time, and how effective you felt it was. This will be a great opportunity to get feedback and learn strategies from others, as well.

<div class="try-it">
  <h3>Review This Lesson</h3>
  <p><strong>How can you use this time to actively engage in reviewing this lesson?</strong></p>
  <p>Consider: What felt easiest and hardest for you? What was confusing to you? What resources can you leverage to clarify those areas?</p>
  <p>Be prepared to quickly share out what your strategy was for this time, and how effective it was. Also, be prepared to learn from your classmates on their strategies!</p>
</div>

<br><br>