## Annotating Code
Part of being a strong developer is not just writing code. Most of the job is actually reading others code and building on top of it. In order to do so, you'll need to build your skills around:
- Reading other people's code
- Annotation (adding your notes) to code other people have written
- Articulating (speaking about) code that isn't yours

Annotating code is a great way to start to understand how code works and dive into code that you yourself did not write. One strategy to annotating code is to write **comments** directly in the code you are trying to deciper.

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

As you can see, there is a lot of things happening in these few lines of code! As a new developer, looking at all this code can be very intimidating. Rather than get overwhelmed, I can go line by line and use comments to annotate what is happening to get a better understanding.
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
```

### Practice - 20 minutes
In program-specific groups of 2-3, work through the exercises in the [Annotations Practice repo](https://github.com/turingschool/annotation_practice).
- Carefully read the instructions in the `README` before starting
- Take turns being the driver and navigator, but all members of the group should have annotations for each file. 
- You may need to reference your notes, Mod 1 Prework, and/or Google
- Be sure to use code comments (`CMD + /`) on each line of code

After the time is up, we will share our annotations in smaller groups! 