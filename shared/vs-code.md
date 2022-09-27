---
layout: lesson
title: VS Code
---

## Learning Goals

- Open a specific project in VS Code from thse Terminal
- Navigate the VS Code interface, using _some_ keyboard shortcuts
- Write valid Markdown files in VS Code

## Vocabulary

- <span class="vocab">VS Code</span>
- <span class="vocab">Code Editor</span>
- <span class="vocab">Keyboard shortcuts</span>

## VS Code

<span class="vocab">VS Code</span> is a <span class="vocab">code editor</span>. It is a desktop application where we write the code that powers our applications. It offers features like syntax highlighting and line numbers (and many more!) that make it easier for developers to write code efficiently. There are many other code editors - some similar to VS Code and some with even more built-in tools. We ask all incoming students to start with VS Code so the whole class is using the same set of tools while we focus on learning goals for foundational coding concepts. After Mod 1, students can choose to learn and use other editors.

>VS Code is the application we will write code in programming languages, such as Ruby and JavaScript. In the Terminal, we run commands to communicate with various programs on the computer.

We will open the VS Code application _from_ the Terminal. Since you'll have so many files and directories on your machine, you'll want to get into the habit of only opening the project you are currently working on.

To open VS Code from the Terminal, navigate to your Mod 0 directory, then run:

```bash
mkdir vs_code_practice
cd vs_code_practice
touch index.md
code .
```

**Practice this right now.** If VS Code does not open, make sure VS Code is in the Applications folder, not the Downloads folder. If it is still not working, share this in a message to your small group on Slack.

Inside the file you just made, type some text using markdown into VS Code using what you learned in the Markdown lesson.

<div class="s-card s-border-yellow-500">
  <h3>Pro Tip</h3>
  <p>It can sometimes be hard to tell if you are writing valid Markdown. Use a Markdown Preview Tool such as <a href="https://markdownlivepreview.com/" target="blank">Markdown Live Preview</a> to ensure your Markdown renders as expected. If you are writing Markdown in VS Code, you can use the Markdown Previewer which can be opened with the shortcut <code> ctrl + shift + m</code>.</p>
</div>
<br>

<div class="s-card">
  <h3>Install Auto-Save</h3>
  <p>Either through exploring the options in the menu or Googling, figure out to install auto-save in VS Code. Having this installed will save you a ton of headaches in the future!</p>
</div>
<br>

## VS Code Keyboard Shortcuts

To maximize your time as a developer, use of <span class="vocab">keyboard shortcuts</span> will be essential. If you are new to a Mac and/or a development environment, it can feel overwhelming at first. Don't try to learn them all at once. A list of commonly used shortcuts that we recommend starting with follows:

- `cmd + ,` - opens the Preferences Pane
- `cmd + \` - toggles the File Tree
- `cmd + a` - highlights the entire file
- `cmd + right arrow` - takes your cursor to end of the current line
- `cmd + left arrow` - takes your cursor to start of the current line
- `cmd + q` - quits the application

<div class="s-card">
  <h3>VS Code Keyboard Shortcuts</h3>
  <p>Practice each of the shortcuts above a few times to start building muscle memory.</p>
</div>
<br>

## Terminal & VS Code Practice

Complete the challenges below to continue to build fluency with using your Terminal and VS Code:

### Challenge #1

1. Run `cd` to get to your home directory (you’ll probably already be here, but do it just to be sure)
1. Make a new directory called `my_first_projects`
1. Make another new directory called `my_other_projects`
1. List the contents of your directory (you should see these two directories you just made in the list)
1. Remove the `my_other_projects` directory
1. Navigate into the `my_first_projects` directory
1. Make a file called `ruby.md`
1. Make a file called `javascript.md`
1. Open the project in VS Code
1. Add a list of things you already know about the language that is taught in the program you are enrolled in, in the appropriate file
1. List the contents of your directory (you should see the files you just created)
1. Demonstrate how to expand and collapse the file tree with a keyboard shortcut
1. Close VS Code with a keyboard shortcut
1. Delete the `javascript.md` file
1. Get back out of the `my_first_projects` directory
1. List the contents of your current directory (you should see `my_first_projects`)
1. Remove the `my_first_projects` directory

### Challenge #2

1. Run `cd` to get to your home directory (you’ll probably already be here, but do it just to be sure)
1. Make a new directory called `practice`
1. Move into the `practice` directory
1. Print the path to your current directory
1. Make a file called `terminal.md`
1. Open the project in VS Code
1. List the contents of your directory (you should see the `terminal.md` file you just created)
1. In the `terminal.md` file, write 1-3 sentences explaining what the Terminal is and does, in your own words. Add an appropriate title/header
1. Demonstrate how to highlight the entire file with a keyboard shortcut
1. Close VS Code with a keyboard shortcut
1. Get back out of the `practice` directory
1. Remove the `practice` directory
<br>
<br>

## Check For Understanding

To complete this assignment, record your screen while you complete Challenge #1 _or_ Challenge #2. Remember to talk through every step using technical vocabulary as you record. When you are finished: 
1. Share your video with your small group Slack channel. 
1. Submit the URL using your submission link.

<br><br>
