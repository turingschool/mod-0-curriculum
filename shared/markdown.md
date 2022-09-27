---
layout: lesson
title: Markdown
---

## Learning Goals

- Create new gists on GitHub to document information
- Demonstrate understanding of Markdown syntax to create elements

## Vocabulary

- <span class="vocab">Gist</span>
- <span class="vocab">Markdown</span>

## Gists on GitHub

Gists are an easy way to share code with others and they are often used to document technical processes and information. We usually write code in our Gists using a user-friendly language called Markdown.

## Markdown

<span class="vocab">Markdown</span> is a lightweight markup language that converts to HTML and can be displayed on the web. It is used widely in the tech industry for documentation. You'll use it in various ways at Turing. Most frequently, you'll use it to document and showcase your projects!

## Markdown Practice

Your task is to create a "Mod 0 Plan" <strong>documenting your plan for success in Mod 0</strong>, using Markdown. Use the tips and guidance that follows to ensure your complete it successfully.

1. Log into your GitHub account.
1. In the upper right corner, select the `+` sign and select `New gist`.
1. For the filename, follow this format: `firstName_lastName_mod_0_plan.md`.
1. Notice that after you added the file extension for markdown (`.md`), you now have an `Edit new file` tab and a `Preview` tab. As you are working, you can use the `Preview` tab to see what your final product looks like! Note that a `.md` file extension is required at the end of your `Gist`'s filename. Otherwise it will not register as markdown.
1. Include all of the elements listed in the Markdown Practice section below using [this Markdown cheat sheet](https://www.markdownguide.org/cheat-sheet/) as a guide.


<div class="s-card">
  <h3>Markdown Practice - Mod 0 Plan</h3>
  <p>In addition to documenting your plan for success in Mod 0, incorporate each of the following Markdown elements into your Gist:</p>
  <ul>
    <li>two headings of different sizes</li>
    <li>one ordered list (numbers)</li>
    <li>one unordered list (bullet points)</li>
    <li>bold text</li>
    <li>italicized text</li>
    <li>one image (it's easiest to grab one from the internet!)</li>
    <li>one link to a resource (technical or not) that you've used or plan to use</li>
  </ul>
  <p>Images from your computer can be a little tricky in Gists. Check out this <a href="https://www.loom.com/share/8f7ce8e2e58f42fbbcbe215288ed1386" target="blank">drag-n-drop shortcut</a> to quickly insert an image from your computer into a Gist!</p>
</div>

You created your first gist in GitHub using Markdown! Let's build on that understanding by adding some code to our Mod 0 Plan gist. We often use gists to share snippets of code. There are two ways to do this in Markdown. If it's a short phrase or word, we use an `inline code block`, but for longer blocks of code we use a `fenced code block`. 

A fenced code block with JavaScript code might look something like this:
```javascript
var name = "Kaitlyn";
var affirmation = "You are smart and capable! You can do anything you put your mind to.";
console.log(`Dear ${name} -- ${affirmation}`);
```

A fenced code block with Ruby code might look something like this:
```ruby
name = "Kaitlyn"
affirmation = "You are smart and capable! You can do anything you put your mind to."
puts "Dear #{name} -- #{affirmation}"
```

To create the `fenced code block`, we use three backtics (the character to the left of the 1 on your keyboard) on the top and bottom of our code block.

<div class="s-card">
  <h3>Markdown Practice - Round 2</h3>
  <p>Update your gist with both types of code blocks.</p>
  <ul>
    <li>at least one inline code block</li>
    <li>one fenced code block in either Ruby or JavaScript</li>
  </ul>
  <p>Note: To get the fancy colors on your fenced code block include the name of the language you're using <em>right after</em> the three opening backtics (```javascript).</p>
</div>

When you are finished editing your Mod 0 Plan, click the green `Create secret gist` button.

## Check For Understanding

We will share our Mod 0 Plan gists during the kickoff session for Mod 0. You can always find this assignment again by going to your GitHub account, clicking your profile image in the upper right corner, and selecting `Your gists`.

<br>
<br>