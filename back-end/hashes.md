---
layout: lesson
title: Hashes
---

## Learning Goals

- Use Ruby syntax to declare variables that store Hashes
- Access data from Ruby Hashes
- Iterate over Hashes with `each`

## Vocabulary

- <span class="vocab">Hash</span>
- <span class="vocab">hash rocket</span>
- <span class="vocab">key</span>
- <span class="vocab">key-value pair</span>
- <span class="vocab">value</span>

## Warm-Up

Look at the following array and take a moment to consider: What is problematic about it? How would you prefer to structure a list of students and such information?

```ruby
students = ["Cristie Soto", "A+", "B", "in progress", true, "Oscar Smith", "A-", "D", "dropped", true]
```
<br>

## Hashes

Hashes allow us to structure data in a different way than Arrays. It's not better; it's just different. Like an Array, a Hash is a data structure used for representing a collection of things. But where an Array generally represents a list of ordered, indexed values, **a <span class="vocab">Hash</span> represents a collection of _named_ values**. These names are called <span class="vocab">keys</span>, and each key has a corresponding <span class="vocab">value</span>. In a Hash, we can insert data by assigning it to a name and later retrieving it using the same name.

Some languages call their Hashes _dictionaries_ for this reason – you look up a word (the label) to retrieve its definition (the data or value with which the label was associated).

## Hash Syntax

- A hash is enclosed in curly braces `{ }`, <span class="vocab">key-value</span> pairs are separated by commas, and keys and values are separated by either a hash rocket (`=>`) (or a colon if the key is a symbol).
- Each key in a hash must be unique
  - If you attempt to have duplicate keys when you first create a hash, you will get a warning: `key :key_name is duplicated and overwritten on line X error`
  - If you try to add a new key-value pair using a key that already exists, that new key-value pair will overwrite the previous one - _dangerous_.
- Keys and values can be any datatype:
```ruby  
student1 = {
    "name" => "Christie Soto",
    "grades" => ["A+", "B", "in progress"],
    "active_student" => true
}
```
- Values can be accessed with bracket notation where we call the variable holding the hash and then bracket the key that corresponds to the data we're wanting.
  - `student1["name"]` returns `"Christie Soto"`

<div class="s-card">
  <h3>Hash or Array?</h3> 
  <p>For each example, determine if a Hash or Array would be more appropriate, and explain why.</p>
  <ul>
    <li>A store's inventory</li>
    <li>The contents of a dishwasher</li>
    <li>List of all the places you've traveled to</li>
    <li>List of birthdays of all students</li>
    <li>Names of all dogs at doggie daycare</li>
    <li>Virtual address book</li>
    <li>Items of clothing in a dresser</li>
  </ul>
</div>
<br>

### Symbols as Keys

In Ruby, symbols are basically Strings that can’t change. You can recognize a symbol because it starts with a colon `:`. All of the following are symbols:

```ruby
:name   
:symbols_can_have_underscores
:"symbols can be in quotes"
```

You'll learn more about Symbols in Mod 1, but for now, let's see how a hash would look using Symbols as the keys instead of Strings.

```ruby  
student1 = {
    :name => "Christie Soto",
    :grades => ["A+", "B", "in progress"],
    :active_student => true
}
```

Since it's quite common to use symbols as keys in hashes, Ruby gives us a handy shortcut for creating a hash with symbol keys:

```ruby  
student1 = {
    name: "Christie Soto",
    grades: ["A+", "B", "in progress"],
    active_student: true
}
```

These two definitions for our `student1` hash produce the exact same hash, however the second is the *preferred* syntax. Please note: The colon must immediately follow the name of the key without any spaces in between.

<div class="s-card">
  <h3>Hash Syntax Practice</h3> 
  <p>Complete the following work in an <code>irb</code> session or a new Ruby file, working in VS Code:</p>
  <ol>
    <li>For one of the examples in the previous activity that you selected would be best suited for a Hash, declare a variable that stores a Hash with some (possibly fake) data.</li>
    <li>Declare a variable that stores a Hash that represents <a href="https://twitter.com/MechEngSanchez/status/1485947286396014593" target="blank">this tweet</a>.</li>
  </ol>
</div>

## Accessing a Hash

We use bracket notation (`[]`) to access values stored in a Hash just like Arrays, only we don’t reference the index position, we instead reference _keys_.

The examples below explore the `suitcase` Hash. You can follow along by entering the following code into `irb`.

```ruby
suitcase = { 
  "socks" => 4, 
  "jeans" => 1
}
```

Did we put any jackets on our list? Let’s check:
```ruby
suitcase["jackets"]
#=> nil
```

We can create a new key-value pair:
```ruby
suitcase["shirts"] = 3
suitcase["swimsuit"] = true
```

We can remove the socks:
```ruby
suitcase["socks"] = nil
```

or

```ruby
suitcase.delete("socks")
```

Check on the shirts:
```ruby
suitcase["shirts"]
#=> 3
```

Let's check what keys are in our Hash:
```ruby
suitcase.keys
#=> ["jeans", "shirts", "swimsuit"]
```

Let's check what values are in our Hash:
```ruby
suitcase.values
#=> [1, 3, true]
```

Note that when we use the `.keys` and `.values` Hash methods, the return value of each is an Array!
<br>

<div class="s-card">
  <h3>Hash Syntax and Access Practice</h3> 
  <p>Use the following <code>zoo</code> variable to complete each prompt:</p>
  <pre>
  zoo = {
    giraffes: 3,
    zebras: 12,
    hippos: 2
  }
  </pre>
  <ol>
    <li>Print all of the keys of the zoo Hash.</li>
    <li>Print all of the values of the zoo Hash.</li>
    <li>Add an animal to the zoo.</li>
    <li>Check how many hippos are in the zoo.</li>
    <li>Add another animal to the zoo.</li>
  </ol>
</div>
<br>


## Additional Practice

Complete the work <a href="https://github.com/turingschool/hashes_cfu_am0" target="_blank">in the CFU repository</a> and submit your work using the submission form.

<br>
<br>
<br>