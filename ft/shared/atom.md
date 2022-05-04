---
layout: page
title: Atom & Markdown
---

## Learning Goals

- Open a specific project in Atom from thse Terminal
- Navigate the Atom interface, using _some_ keyboard shortcuts
- Write valid Markdown files in Atom

## Vocabulary

- <span class="vocab">Atom</span>
- <span class="vocab">Code Editor</span>
- <span class="vocab">Markdown</span>
- <span class="vocab">Keyboard shortcuts</span>


## Markdown Files

<span class="vocab">Markdown</span> is a lightweight markup language that converts to HTML and can be displayed on the web. It is used widely in the tech industry for documentation. You'll use it in various ways at Turing. Most frequently, you'll use it to document and showcase your projects.

<div class="s-card">
  <h3>Markdown Practice - Mod 0 Game Plan</h3>
  <p><a href="https://docs.github.com/en/get-started/writing-on-github/editing-and-sharing-content-with-gists/creating-gists" target="blank">Create a new Gist on GitHub</a></p>
  <p>Using <a href="https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet" target="blank">this markdown cheatsheet</a> as a resource, your task is to create a "Plan for Mod 0" <strong>documenting your game plan for success in Mod 0</strong>, using Markdown. Use the tips and guidance that follows to ensure your complete it successfully.</p>
</div>

- In the filename box, follow this format: `firstName_lastName_mod_0_plan.md`.
- You can create your Gist, see how it looks, and then continue editing it.
- Note that a `.md` file extension is required at the end of your Gist's filename. Otherwise it will not register as markdown.
- Images can be a little tricky in gists and GitHub - be sure to check out the <a href="https://stackoverflow.com/a/53560172" target="_blank">drag-n-drop shortcut from this Stack Overflow answer</a>!

**In addition to documenting your game plan for success in Mod 0, incorporate each of the following Markdown features into your Gist:**

- at least two headings of different sizes
- at least one numbered list
- at least one bullet point list
- at least one bold word/phrase
- at least one italic word/phrase
- at least one Ruby code block
- at least one inline code block (greyed text)
- at least one image
- at least one link to a resource (technical or not) that you've used or plan to use

<div class="s-card s-border-yellow-500">
  <h3>Pro Tip</h3>
  <p>It can sometimes be hard to tell if you are writing valid Markdown. Use a Markdown Preview Tool such as <a href="https://markdownlivepreview.com/" target="blank">Markdown Live Preview</a> to ensure your Markdown renders as expected. If you are writing Markdown in Atom, you can use the Markdown Previewer which can be opened with the shortcut <code> ctrl + shft + m</code>.</p>
</div>
<br>

## Atom

<span class="vocab">Atom</span> is a <span class="vocab">code editor</span>. It is a desktop application where we write the code that powers our applications. It offers features like syntax highlighting and line numbers (and many more!) that make it easier for developers to write code efficiently. There are many other code editors - some similar to Atom and some with even more built-in tools. We ask all incoming students to start with Atom so the whole class is using the same set of tools while we focus on learning goals for foundational coding concepts. After Mod 1, students can choose to learn and use other editors.

>Atom is the application we will write code in programming languages, such as Ruby and JavaScript. In the Terminal, we run commands to communicate with various programs on the computer.

We will open the Atom application _from_ the Terminal. Since you'll have so many files and directories on your machine, you'll want to get into the habit of only opening the project you are currently working on.

To open Atom from the Terminal, navigate to your Mod 0 directory, then run:

```bash
mkdir atom_practice
cd atom_practice
touch index.md
atom .
```

**Practice this right now.** If Atom does not open, make sure Atom is in the Applications folder, not the Downloads folder. If it is still not working, share this in a message to your small group on Slack.

Inside the file you just made, type some Markdown into Atom using what you used in the previous section.

<div class="s-card">
  <h3>Install Auto-Save</h3>
  <p>Either through exploring the options in the menu or Googling, figure out to install auto-save in Atom. Having this installed will save you a ton of headaches in the future!</p>
</div>
<br>

## Atom Keyboard Shortcuts

To maximize your time as a developer, use of <span class="vocab">keyboard shortcuts</span> will be essential. If you are new to a Mac and/or a development environment, it can feel overwhelming at first. Don't try to learn them all at once. A list of commonly used shortcuts that we recommend starting with follows:

- `cmd + ,` - opens the Preferences Pane
- `cmd + \` - toggles the File Tree
- `cmd + a` - highlights the entire file
- `cmd + right arrow` - takes your cursor to end of the current line
- `cmd + left arrow` - takes your cursor to start of the current line

<div class="s-card">
  <h3>Atom Keyboard Shortcuts</h3>
  <p>Practice each of the shortcuts above a few times to start building muscle memory.</p>
  <p>If you are feeling confident with those and want more, use <a href="https://github.com/nwinkler/atom-keyboard-shortcuts" target="blank">this guide</a> to learn how to: duplicate a line, move a line up/down, toggle a comment, and select the same word. <em>(Note - the guide provided is just a resource we link to so you don't spend too much time on this; there are likely many other great resources out there!)</em></p>
</div>
<br>

## Terminal & Atom Practice

Complete the challenges below to continue to build fluency with using your Terminal and Atom:

### Challenge #1

1. Run `cd` to get to your home directory (you’ll probably already be here, but do it just to be sure)
1. Make a new directory called `my_first_projects`
1. Make another new directory called `my_other_projects`
1. List the contents of your directory (you should see these two directories you just made in the list)
1. Remove the `my_other_projects` directory
1. Navigate into the `my_first_projects` directory
1. Make a file called `ruby.md`
1. Make a file called `javascript.md`
1. Open the project in Atom
1. Add a list of things you already know about Ruby in the `ruby.md` file
1. List the contents of your directory (you should see the files you just created)
1. Demonstrate how to expand and collapse the file tree with a keyboard shortcut
1. Close Atom with a keyboard shortcut
1. Delete the `javascript.md` file
1. Get back out of the `my_first_projects` directory
1. List the contents of your directory (you should see `my_first_projects`)
1. Remove the `my_first_projects` directory

### Challenge #2

1. Run `cd` to get to your home directory (you’ll probably already be here, but do it just to be sure)
1. Make a new directory called `practice`
1. Move into the `practice` directory
1. Print the path to your current directory
1. Make a file called `terminal.md`
1. Open the project in Atom
1. List the contents of your directory (you should see the `terminal.md` file you just created)
1. In the `terminal.md` file, write 1-3 sentences explaining what the Terminal is and does, in your own words. Add an appropriate title/header
1. Demonstrate how to highlight the entire file with a keyboard shortcut
1. Close Atom with a keyboard shortcut
1. Get back out of the `practice` directory
1. Remove the `practice` directory
<br>
<br>

## Check For Understanding

[Follow the directions in this Gist](https://gist.github.com/ameseee/9dce3499a045f8bc5f00508ef1ccf0c3) and submit your fork of it in the submission Form.

<br><br>
