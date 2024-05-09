---
layout: lesson
title: Intro to Testing
---

## Learning Goals

- Explain what a test is (in software development)
- Read an `rspec` test and explain what it is asking for
- Write simple Ruby classes that meet requirements of pre-written tests


## Vocabulary

- <span class="vocab">assertion</span>
- <span class="vocab">rspec</span>
- <span class="vocab">Test Driven Development</span>
- <span class="vocab">test</span>
- <span class="vocab">testing framework</span>


## Tests

In software, it is common to write automated <span class="vocab">tests</span> to verify that our code behaves the way we want it to and doesn't have any negative or unexpected side effects (bugs) on any other part of a project. These tests are usually written in the same language the code itself is in, with the help of a tool that is usually categorized as a <span class="vocab">testing framework</span>.

### File Structure

There are many ways a file structure can be designed when there are many files in a project. A common convention, and one you'll use in Mod 1 is illustrated:

```
project_name
|-lib
  |-name_of_class.rb
  |-name_of_class1.rb
|-spec
  |-name_of_class_spec.rb
  |-name_of_class1_spec.rb
```

(Note: The directory and file names do not start with `|-`; that is just a way to notate the structure.)

## `rspec`

<span class="vocab">rspec</span> is a tool, classified as a testing framework, that allows us to write automated tests that will test our Ruby code. Just like we must write Ruby exactly as it's intended to be used, we must carefully use the syntax and methods available within `rspec`. <a target="blank" href="https://rspec.info/documentation/3.9/rspec-core/RSpec/Core/Configuration">The official `rspec` documentation</a> may at first seem dense; it has much more than what you will even get into in Mod 1, but it's great to be aware of and start getting comfortable reading if you need a resource during or after this lesson.

### Setup `rspec`

While navigated to the project that is applicable, run this command in the Terminal to add the `rspec` framework to that project. This command only needs to be run once per project.

```bash
$ gem install rspec
```

The first two lines of every test (or spec) file should be:

```ruby
require 'rspec'
require './lib/<name_of_class>.rb'
```

To run a test, or spec, file, in the Terminal:

```bash
rspec <name_of_class_spec>.rb
```

<div class="s-card s-border-yellow-500">
  <h3>Documentation Reading</h3> 
  <p>There are times when you need to follow directions exactly, and times when you might need to adjust to add in custom information. In the previous examples, we can infer that <code>name_of_class_spec</code> is not actually a file name, but the documention is intending to show the reader that the last part of the file name should be <code>_spec</code>, preceded by the name of the class the test file will be testing.</p>
</div>
<br>

### Syntax and Anatomy of an `rspec` Test

>A series of code snippets is provided to show a progression of a test file being built. In Mod 0, you do not need to be proficient in writing tests; this progression is shown to help you focus on each piece with a paired explanation.

The code snippet that follows shows the skeleton of an `rspec` test. The class it is testing is named `Student`, and lives in a file with the same naming convention.

After requiring `rspec` and the code file, a `describe` block is opened up, where `rspec` expects the class name. The `do` and `end` open and close the block, similar to other Ruby structures. The code snippet that follows is not enough to _test_ any code; but it's the first step:

```ruby
# student_spec.rb
require 'rspec'
require './lib/student'

describe Student do

end
```

In the next code snippet, one test has been added inside of the `describe` block, to test a very small thing - this test verifies that when an object instance is created, it is actually an instance created from the class it should be created from.

This `describe` block contains:
- An `it` statement - a String that uses plain English to describe what _it_ (the test) tests
- Definition of a variable that stores a student object
- An assertion written with `rspec` 

```ruby
# student_spec.rb
require 'rspec'
require './lib/student'

describe Student do
  it 'is an instance of student' do
    student = Student.new('Penelope')
    expect(student).to be_a Student
  end
end
```

The final snippet adds a test (in a new `it` block) that checks if a student object instance has a name attribute that matches the value that was passed in upon creating the object instance:

```ruby
# student_spec.rb
require 'rspec'
require './lib/student'

describe Student do
  it 'is an instance of student' do
    student = Student.new('Penelope')
    expect(student).to be_a Student
  end

  it 'has a name' do
    student = Student.new('Penelope')
    expect(student.name).to eq 'Penelope'
  end
end
```

The following code snippet provides an annotation for each line of this same file:

```ruby
# ensures the rspec testing framework is available for use in this file
require 'rspec'
# allows the spec file to read the contents of the student file
require './lib/student'

# start of describe block; one per class/test file
describe Student do
  # start of it block for an individual test
  # the string should briefly describe in plain English what is being tested
  it 'is an instance of student' do
    # create a student object instance
    student = Student.new('Penelope')
    # assert that the student is from the Student class
    expect(student).to be_a Student
  end

  it 'has a name' do
    student = Student.new('Penelope')
    # assert that the student has a name property which matches what was passed in
    expect(student.name).to eq 'Penelope'
  end
end
```

The code that follows would allow the previous tests to pass (which should live in the `student.rb` file):

```ruby
class Student
  attr_reader :name

  def initialize(name)
    @name = name
  end
end
```

<div class="s-card">
  <h3>Explore <code>rspec</code></h3>
    <p>Follow the directions to set up a small project that uses <code>rspec</code>:</p>
  <ul>
    <li>Create a directory called <code>intro_testing</code></li>
    <li>Install the <code>rspec</code> gem using the command noted earlier in the lesson</li>
    <li>Create two directories: <code>lib</code> and <code>spec</code></li>
    <li>Create one file inside of each of the new directories: <code>student.rb</code> and <code>student_spec.rb</code> respectively</li>
    <li>Copy and paste the code for the Student class and the two tests that are provided above, into the appropriate files</li>
    <li>Run <code>rspec spec/student_spec.rb</code> in your Terminal</li>
    <li>Delete the <code>attr_reader</code> from the Student class and re-run the tests; observe what happens</li>
    <li>Delete the entire <code>initialize</code> method from the Student class and re-run the tests; observe what happens</li>
    <li>Delete the entire Student class and re-run the tests; observe what happens</li>
    <li>Bring back all the original code into the Student file and re-run the tests to ensure they now pass</li>
  </ul>
  <p>Challenge: Write a new test, that checks that the student has a dynamic age property. Write the code to make the test pass.</p>
</div>


## Test Driven Development

<span class="vocab">Test Driven Development</span> is a common process for writing software. It entails writing the tests before the code, then using the test to guide the developers while writing the actual code. This lesson will provide some _exposure_ to the process, and the Mod 1 curriculum will dive deep into it and require it of students.

When provided the test file that follows (the same one we've been looking at in previous examples), one can turn that code into directions that inform what should be written into the `Student` class.

```ruby
require 'rspec'
# write your code in a file named student
require './lib/student'

describe Student do
  it 'is an instance of student' do
    # since a student object is being created from a Student class,
    # write a class named Student

    # ALSO - since an argument is being passed to Student, the initialize method needs to accept one
    student = Student.new('Penelope')
    expect(student).to be_a Student
  end

  it 'has a name' do
    student = Student.new('Penelope')
    # since we need to call the name attribute and get back the string that was passed in,
    # we need an attr_reader for the name attribute
    expect(student.name).to eq 'Penelope'
  end
end
```

The comments in the file can help a developer write an even more accessible specification:
- Write a class named Student, in the `lib/student` file
- The class should have one dynamic attribute named `name`
- Use an `attr_reader` so the `name` can be read

With that, the following code can be written to satisfy the tests:

```ruby
class Student
  attr_reader :name

  def initialize(name)
    @name = name
  end
end
```
<div class="s-card">
  <h3>Practice Reading Tests</h3> 
  <p>Read the test in <a href="https://gist.github.com/ameseee/037a9d2f9bfcd7beee85b528785c0c1c" target="blank">this file</a> and write out a list of human-readable, clear directions you could read aloud to someone you are pairing with in order to pass the tests. One of the tests does push you to apply some learning that was not explicitly covered in this less - that was intentional! The goal is not to be perfect or perfectly correct; it's to push you to apply some other knowledge and start getting comfortable with unknown code.</p>
</div>

## Check For Understanding

Create a new directory with `lib` and `test` directories inside. Use the test file that was provided in the previous activity, and write a class that satisfies those tests. Use your Git Workflow, make a GitHub repository and push your completed work up.


## Mod 0 Extensions

Your Mod 1 instructors have created [this repository](https://github.com/turingschool-examples/mod-1-be-exercises/tree/main/ruby_exercises) to give you something to work on in between Mod 0 and Mod 1. Nothing is required; but students in the past have found it as helpful and aligned practice during the "down time" before Mod 1. Have fun!

<br>
<br>
<br>