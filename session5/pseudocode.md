# Pseudocode and Breaking Apart A Problem

The ability to critically examine a problem and break it down into smaller pieces is an essential skill of a developer that can be improved with practice. Breaking large problems into several smaller problems can help you in every step of the development process:

- *Pseudocode*: Breaking apart coding challenges into steps is often referred to as <span class="vocab">pseudocode</span>. This is done by writing those steps in plain english (or whatever language you speak), and then those steps, can later be converted to code the computer understands.

Pseudocoding can help keep your thoughts in order, especially helpful for when you may need to put a little research into HOW to accomplish all the steps involved. Further, pseudocode is an excellent approach to explaining code to your team because it is code-language agnostic, allowing non-technical teammates, or teammates who work with different code/technology, to understand your ideas more easily.

## Pseudocode - An Algorithm

Pseudocode often reads like an algorithm. Algorithms often read like recipes:

![Recipe pseudocode](https://image.slidesharecdn.com/pseudocode-111128151539-phpapp02/95/introduction-to-pseudocode-15-638.jpg?cb=1393513763)

Here is an example of more technical pseudocode. Ultimately, how you write your own pseudocode depends on your personal preference and your audience (if it will be shared).

![More code-like pseudocode](https://cdn.lynda.com/video/90472-147-635182861185610073_338x600_thumb.jpg)

What do y'all notice about how the pseudocode is written in the technical example above?

### Task: Data Normalization

Given the following data:

```
[ "jokic_nikola", "murray_jamal", "harris_garry" ]
```

Write pseudocode to explain how you would approach transforming the names you receive into what you'd want to display on your website. Please note that the format is currently `lastname_firstname` and the desired result would be `Firstname Lastname`.
When possible, list ideas for specific methods you'd use. (Remember- Google is your friend)

#### 2 minutes - on your own
#### 5 minutes - in groups (finished? start converting to code)

Let's walk through the process together

#### 10 minutes - implement it! (finished? start on the extension's pseudocode)

Let's code it up together. Don't get too hung up on the syntax. **Focus on the process!**

* I will use JavaScript
* Everyone should read [This article](https://medium.com/@dannysmith/breaking-down-problems-its-hard-when-you-re-learning-to-code-f10269f4ccd5) at some point after class - note that it's written in Ruby, but again, **focus on the process**

### Extension - Hash/Object

Frequently, you will receive information from databases in the form of a hash (or 'object' in javascript). In the example below, we have data that represents that. Arrays of objects can be tricky to navigate, but trying, and researching how now won't hurt, even if this is a work in progress:

```
var customerNames = [
{ firstName: "nikola", lastName: "jokic" },
{ firstName: "william", lastName: "barton_iii" },
{ firstName: "jamal", lastName: "murray" }
];
```

Again, write pseudocode explaining how you would access this information and change it into a format to display.
When possible, list ideas for specific methods or notation of obtaining data.
