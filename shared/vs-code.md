---
layout: lesson
title: Visual Studio Code
---

## Learning Goals

- Open a specific project in VS Code from the Terminal
- Navigate the VS Code interface, using _some_ keyboard shortcuts
- Write valid Markdown files in VS Code

## Vocabulary

- <span class="vocab">VS Code</span>
- <span class="vocab">Code Editor</span>
- <span class="vocab">Keyboard shortcuts</span>

## VS Code

<span class="vocab">Visual Studio Code</span> or VS Code is a <span class="vocab">code editor</span>. It is a desktop application where we write the code that powers our applications. It offers features like syntax highlighting and line numbers (and many more!) that make it easier for developers to write code efficiently. There are many other code editors - some similar to VS Code and some with even more built-in tools. We ask all incoming students to start with VS Code, so the whole class is using the same set of tools while we focus on learning foundational coding tools and concepts. After Mod 1, students can choose to learn and use other editors.

>VS Code is the application we will use to write code in programming languages, such as Ruby and JavaScript. In the Terminal, we run commands to communicate with various programs on the computer.

We will open the VS Code application _from_ the Terminal. Since you'll have so many files and directories on your machine, you'll want to get into the habit of only opening the project you are currently working on.

To open VS Code from the Terminal, navigate to your Mod 0 directory, then:
1. Create a directory called `vs_code_practice`.
2. Move into that directory.
3. Create a file called `index.md`.
4. Use `code .` to open that directory in VS Code.

Altogether, those steps should look something like this:

```bash
mkdir vs_code_practice
cd vs_code_practice
touch index.md
code .
```

From now on, any code you write in a file will almost always be written in VS Code. So when you get to a challenge and it says something like, "Add a few lines of markdown to that file" - (you guessed it!) - that means open that project in VS Code and write your code there.

Inside the `index.md` file you just made, type some text using markdown into VS Code using what you learned in the Markdown lesson. Include at least 3 headings (all the same size), with text after each heading. Include at least one set of bullet points. This markdown file can be about any topic you like - choose something that makes you smile!

## VS Code Keyboard Shortcuts

To maximize your time as a developer, the use of <span class="vocab">keyboard shortcuts</span> will be essential. If you are new to a Mac and/or a development environment, it can feel overwhelming at first. 

<div class="s-card">
  <h3>VS Code Keyboard Shortcuts</h3>
  <p>With that current <code>index.md</code> open in VS Code, follow the steps below to practice using some of the most common keyboard shortcuts in VS Code.</p>
  <ol>
    <li>Toggle the sidebar (file tree) using <code>cmd + b</code>.</li>
    <li>Open the markdown preview with <code>shift + cmd + v</code>.</li>
    <li>Select the markdown preview tab and drag it to the right of the window to view your <code>index.md</code> file side-by-side with the preview.</li>
    <li>Highlight the hashtags on your first heading in the <code>index.md</code> file. Use <code>cmd + d</code> to select all of the matching headings and then change the size of all headings. Observe the changes in your preview.</li>
    <li>Choose one heading to comment out using <code>cmd + /</code>. Observe the changes in your preview.</li>
    <li>Move your cursor to your last bullet point in the <code>index.md</code> file. Use <code>option + shift + down arrow</code> to copy that line below.</li>
    <li>Use <code>cmd + s</code> to save the changes. </li>
  </ol>
</div>

You may need to practice these shortcuts quite a few times before you start to build some muscle memory. Don't try to learn them all at once. A list of commonly used shortcuts that we recommend starting with follows:

- `cmd + b` - toggles the sidebar
- `cmd + a` - highlights the entire file
- `cmd + right arrow` - takes your cursor to end of the current line
- `cmd + left arrow` - takes your cursor to start of the current line
- `cmd + d` - multi-select cursor 
- `shift + cmd + v` - markdown preview
- `opt + shift + down arrow` - copy a line
- `cmd + /` - comment out a line
- `cmd + s` - save a file
- `cmd + q` - quits the application

<div class="s-card">
  <h3>Turn on Auto Save</h3>
  <p>To quickly save any file, you can use <code>cmd + s</code>. However, if you prefer to have your files auto-save when you switch to another application, go to `File` at the top of your VS Code window and select <code>Auto Save</code>.</p>
</div>

## Terminal & VS Code Practice

Complete the challenges below to continue building fluency with using your Terminal and VS Code. It's probably a good idea to go ahead and quit (`cmd + q`) your current session in the Terminal and your VS Code application before jumping into this practice.

### Challenge #1

1. Run `cd` to get to your root directory (you’ll probably already be here, but do it just to be sure).
1. Make a new directory in your Mod 0 directory called `my_first_projects`.
1. Make another new directory called `my_other_projects`.
1. List the contents of your directory (you should see these two directories you just made in the list).
1. Remove the `my_other_projects` directory.
1. Navigate into the `my_first_projects` directory.
1. Make a file called `ruby.md`.
1. Make a file called `javascript.md`.
1. Open the project in VS Code.
1. Show how to organize your screen using Rectangle shortcuts. Both the Terminal and VS Code windows should be visible at the same time.
1. Add a list of things you already know about the language that is taught in your program (in the appropriate file). You can use Google here - we know you don't know much yet!
1. Print the path to your current directory.
1. List the contents of your directory (you should see the files you created).
1. Demonstrate how to expand and collapse the sidebar with a keyboard shortcut.
1. Save the file with a keyboard shortcut.
1. Quit VS Code with a keyboard shortcut.
1. Delete the file for the opposite program (the one you didn't write code in).
1. Get back out of the `my_first_projects` directory.
1. List the contents of your current directory (you should see `my_first_projects`).
1. Remove the `my_first_projects` directory.

### Challenge #2

1. Run `cd` to get to your home directory.
1. Make a new directory called `practice` in your Mod 0 directory.
1. Move into the `practice` directory.
1. Print the path to your current directory.
1. Make a file called `terminal.md`.
1. Open the project in VS Code.
1. Show how to organize your screen using Rectangle shortcuts. Both the Terminal and VS Code windows should be visible at the same time.
1. List the contents of your directory (you should see the `terminal.md` file you just created).
1. In the `terminal.md` file, write 1-3 sentences explaining what the Terminal is and does, in your own words. Again, it's ok to use Google for this!
1. Show how to copy a line using a keyboard shortcut.
1. Demonstrate how to comment out that extra line of code using a keyboard shortcut.
1. Add an appropriate heading.
1. Demonstrate how to select every instance of the word `Terminal` in your file using a keyboard shortcut.
1. Show how to move your cursor to the end or beginning of a line of code using keyboard shortcuts. 
1. Demonstrate how to highlight the entire file with a keyboard shortcut.
1. Show how to open the markdown preview with a keyboard shortcut.
1. Close VS Code with a keyboard shortcut. (Don't forget to save your file first if you're not using Auto Save!)
1. List the contents of your directory (you should see the `terminal.md` file you created).
1. Get back out of the `practice` directory.
1. Remove the `practice` directory.
<br>
<br>

## Check For Understanding

To complete this assignment, record your screen using Loom while you complete Challenge #1 _or_ Challenge #2, but not both. Remember to talk through every step using technical vocabulary as you record. Aim for your video to be under 5 minutes in length. When you are finished: 
1. Share your video with your small group Slack channel. 
1. Submit the Loom URL using your submission link.

<br><br>
