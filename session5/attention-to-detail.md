<a name="attention-to-detail"></a>
## Attention to Detail

After reflecting on and trying to find patterns for the people who are struggling in mod 1, we've identified that attention to detail is one of the main themes we've seen.

Attention to detail is something that constantly comes up when coding
* A missing or misplaced character can make your code behave in an entirely different way
* Documentation is super dense, you'll likely need to read it at least couple of times before you're able to understand and apply it
* Tutorials and directions for implementation are common place. If you miss one step, you won't get the same result

### Syntax and Style

<span class="vocab">Syntax</span> and <span class="vocab">Style</span> are both essential when it comes to writing code.

<span class="vocab">Syntax</span> refers to the structure of statements in a computer language. Are quotes surrounding both sides of a string? No, then the language will throw an error. If your code isn't working because of a placement of a character, it's a syntax issue.

<span class="vocab">Style</span> doesn't determine if a piece of code runs or not. Its purpose is to make code more readable. Ideally, when you're working on a team, you and your teammates are following similar patterns (conventions) when it comes to things like whitespace (including indentation) or double vs single quotes. What is one of those conventions you've already been using?

Let's take a look at what these two things might look like in action:

Difference in syntax

```
one doesn't work

animals = ['donkey', 'giraffe', 'elephant', 'chimpanzee']

animals = ['donkey', 'giraffe', 'elephant' 'chimpanzee']
```

Difference in style

```
both work below, but which reads better?

animals = ['donkey', 'giraffe', 'elephant', 'chimpanzee']

animals=["donkey",'giraffe','elephant',"chimpanzee"]
```

If you want to find code that is both syntactically correct and using good style the best place to look is going to be the docs (mdn for JavaScript and ruby-doc for Ruby). The code examples are a great place to look to see if you are writing your code in a similar way. Also, keep in mind that things like casing of variables is another good way to stay consistent and maintain good style.
