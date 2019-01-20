---
layout: page
title: Session 3 
subheading: Terminal, File/folder Structure, Git Basics
---

<div class="goals-agenda">
  <div>
    <h3>Goals</h3>

    <strong>By the end of this session, you will be able to:</strong>

    <ul>
      <li>notate file paths from diagrams</li>
      <li>navigate through directories from the command line</li>
      <li>make and remove files and directories from the command line</li>
      <li>explain the purpose of git</li>
      <li>initialize, add, and commit changes in a local repository  </li>
    </ul>
  </div>
  <div>
    <h3>Agenda</h3>
    <ul>
      <li><strong>10 min:</strong> Homework Review and Goals</li>
      <li><strong>10 min:</strong><a href="#filesdirectories">Files, Directories, and Paths</a></li>
      <li><strong>40 min:</strong><a href="#terminalcommandline">Terminal and Command Line</a></li>
      <li><strong>40 min:</strong><a href="#git">Git Basics</a></li>
      <li><strong>5 min:</strong><a href="#homework">Homework Preview</a></li>
    </ul>
  </div>
  <div>
    <h3>Materials</h3>
    <ul>
      <li>Notebook</li>
      <li>Writing instrument</li>
      <li>Laptop</li>
      <li>Headphones & mic</li>
    </ul>
  </div>

</div>

<a name="filesdirectories"></a>
## Files, Directories, and Paths

On your computer, you probably have many <span class="vocab">files</span> and <span class="vocab">directories</span>. Files are things like text documents, images, videos, PDFs, etc. Directories (or folders) are the structures we use to organize these files. 

In this diagram, we would say that there's a directory called `essays` that contains three files: `life_lessons.docx`, `book_report.docx`, and `literary_analysis.docx`: 

<hr>
<h4>Example #1</h4>
<div class="flex-container">
  <div>
    <img src="images/files_directories_1.png" alt="files and directories 1">
  </div>
  <div>
    A <span class="vocab">file path</span> is a way to notate where a file "lives" on your computer. This is the structure:
    <pre>directory_name/file_name.extension</pre>
    Using the diagram above, here are the paths for each of the files above:
    <pre>essays/life_lessons.docx</pre>
    <p>What is the path for book_report.docx?</p>
    <textarea rows="1" name="" style="width:100%;"></textarea>
    <p>What is the path for literary_analysis.docx?</p>
    <textarea rows="1" name="" style="width:100%;"></textarea>
  </div>
</div>
<div class="things-to-note">
  <h4>Things to Note</h4>
  <ol>
    <li>A file cannot be inside of another file. This means that every part of the path *before* the actual file is a directory. </li>
    <li>For now, we will follow two convention rules: </li>
    <ul>
      <li>Use lower case letters when naming directories and files</li>
      <li>Use underscores (_) instead of spaces when naming directories and files</li>
    </ul>
    <li>Folders do not have extensions (like <strong>.docx</strong> or <strong>.txt</strong> or <strong>.csv</strong>, etc.) but file names do have extensions.</li>
    <li>File extensions matter. A <strong>.md</strong> file will behave differently than a <strong>.docx</strong> file, which will also behave differently than a <strong>.txt</strong> file. </li>
  </ol>
</div>
<hr>
<h4>Example #2</h4>
<div class="flex-container">
  <div>
    <img src="images/files_directories_3.png" alt="files and directories 2">
  </div>
  <div>
    <p>The path for the grading.txt file is</p>
    <pre>to_do/work/grading.txt</pre>
    <p>What is the path for random.txt?</p>
    <textarea rows="1" name="" style="width:100%;"></textarea>

    <p>What is the path for recurring.txt?</p>
    <textarea rows="1" name="" style="width:100%;"></textarea>

    <p>What is the path for cleaning.txt?</p>
    <textarea rows="1" name="" style="width:100%;"></textarea>

    <p>What is the path for bills.txt?</p>
    <textarea rows="1" name="" style="width:100%;"></textarea>

    <p>What is the path for data_entry.csv?</p>
    <textarea rows="1" name="" style="width:100%;"></textarea>
  </div>
</div>

<div class="try-it">
  <h2>Try It: Files and Directories</h2>
  <p>In your notebook, draw a diagram that includes at least three directories and at least four files. Write out the paths for all four files. Be ready to share and explain!</p>
</div>

<hr>
<a name="terminalcommandline"></a>
## Terminal and Command Line

The <span class="vocab">terminal</span> is what we call a command line interface. Basically, that's a fancy way of saying that it's the program we use to give commands to the computer. The <span class="vocab">command line</span> is a text-based way to make files, make directories, and run applications, among other things. 

Your terminal will look something like this:

<img src="images/terminal.png" alt="">

<a name="profiledetour"></a>
The text `rwarbelow~$` is called the command prompt, and the `$` indicates that it's ready to accept input. Yours might look slightly different. Let's make the command prompt slightly more helpful by [taking a little detour](https://gist.github.com/rwarbelow/84200c0f2a6d256cf2c3b20150b64fbf). 

In this section on command prompts, we'll learn (or review) these comamnds: 

<ol>
  <li><a href="#pwd" title="">pwd</a></li>
  <li><a href="#mkdir" title="">mkdir</a></li>
  <li><a href="#ls" title="">ls</a></li>
  <li><a href="#cd" title="">cd</a></li>
  <li><a href="#cddot" title="">cd ..</a></li>
  <li><a href="#touch" title="">touch</a></li>
  <li><a href="#rm" title="">rm</a></li>
  <li><a href="#rmrecursive" title="">rm -r</a></li>
</ol>

<a name="pwd"></a>
### 1. Where am I? (pwd)

When you open the terminal, you will be in your home directory. Being in various directories will allow you to do different things, just like you can do different things at home vs. on vacation vs. at work. 

To figure out where you are in your computer's directories, type `pwd` after the command prompt. `pwd` stands for "print working directory"

<img src="images/pwd.png" alt="">

You'll see the path from the root of your computer to your current directory. 

<div class="try-it">
  <h2>Try It: pwd</h2>
  <p>Type pwd into your command prompt. Copy the path of your current directory and paste it into the chat.</p>
</div>

<a name="mkdir"></a>
### 2. Make a Directory (mkdir)

We can make new directories with the `mkdir` command. Unlike `pwd` where we didn't need to type anything else, we'll need to add a name for the directory. 

For example, if I wanted to make a directory called `work_spreadsheets`, I would type this:

```
mkdir work_spreadsheets
```

If I wanted a directory called lastest_projects, I would type this:

```
mkdir latest_projects
```

You won't get any confirmation that your directory was created -- you'll just see a new command prompt ready for your next comamnd.

<div class="things-to-note">
  <h4>Things to Note</h4>
  <ol>
    <li>Keep your directories lowercase with no spaces. If you need to use a space, use the underscore (_).</li>
  </ol>
</div>

<div class="try-it">
  <h2>Try It: mkdir</h2>
  <p>Make a directory called "terminal_practice".</p>
</div>

<a name="ls"></a>
### 3. Listing Contents of a Directory (ls)

To check what's inside of a directory, we use the `ls` command. As an example, let's assume that I have the directories and files from this diagram on my computer: 

<div class="flex-container">
  <div>
    <img src="images/files_directories_2.png" alt="files and directories 2">
  </div>
  <div>
    If I was in the essays directory and I typed ls, this is what I'd see:

    <pre>rwarbelow~/essays$ ls
    book_projects    life_lessons.docx    notes.docx</pre>
    If I was in the book_projects directory and I typed ls, this is what I'd see:

    <pre>rwarbelow~/essays/book_projects$ ls
      literary_analysis.docx    book_report.docx
    </pre>

    You will only see the directories and files that are directly inside of where you are. You will not see any directories or files that are nested down the path.
  </div>
</div>

<div class="try-it">
  <h2>Try It: ls</h2>
  <p>Type ls into your command prompt. You should see the "terminal_practice" directory you created earlier. Paste the output into the chat.</p>
</div>

<a name="cd"></a>
### 4. Go Into a Directory (cd)

You can move into a directory using the cd (or change directory) command, then giving it the name of the directory you want to go into.

For example, if I was in the essays directory and wanted to move into the book_projects directory to see my documents, I would type this: 

```
rwarbelow~/essays$ cd book_projects
rwarbelow~/essays/book_projects$ 
```

We see that the second command prompt now lists the path of new directory that we're in.

From there, if I used the `ls` command, I would be able to see the contents of my folder:

```
rwarbelow~/essays/book_projects$ ls
literary_analysis.docx    book_report.docx
```

<div class="things-to-note">
  <h4>Things to Note</h4>
  <ol>
    <li>You can't pick any random directory from your computer to give to the ls command. It has to be a directory inside wherever you currently are (or it has to be the path to get to that directory, which we won't talk about today).</li>
  </ol>
</div>

<div class="try-it">
  <h2>Try It: cd</h2>
  <p>Use the cd command to move into the terminal_practice directory that you just created. If you were to type "ls" right now, what would happen? Why?</p>
</div>

<a name="cddot"></a>
### 5. Get Out of a Directory (cd ..)

To get out of a directory you're in, we use `cd ..` (with a space between the d and the first dot). This means "go back up one level." 

If I'm in the `book_projects` directory and I want to get back to `essays`, this is what I'd type:

```
rwarbelow~/essays/book_projects$ cd ..
rwarbelow~/essays$
```

<div class="try-it">
  <h2>Try It: cd and cd ..</h2>
  <div class="flex-container">
    <div>
      <img src="images/files_directories_3.png" alt="files and directories 2">
    </div>
    <div>
      <p>If I'm in the work directory, what do I need to type to get to to_do?</p>
      <textarea name="" style="width:100%;"></textarea>
      <p>If I'm in the projects_to_delegate directory, what <strong>two commands</strong> do I need to type to get to to_do?</p>
      <p><small>(We'll learn how to combine these momentarily)</small></p>
      <textarea name="" style="width:100%;"></textarea>
      <p>I'm in the home directory. What <strong>three commands</strong> do I need to type to get to projects_to_delegate?</p>
      <p><small>(We'll learn how to combine these momentarily)</small></p>
      <textarea rows="3" name="" style="width:100%;"></textarea>
      <p>I'm in the projects_to_delegate directory. What <strong>three commands</strong> do I need to type to get to home?</p>
      <p><small>(We'll learn how to combine these momentarily)</small></p>
      <textarea rows="3" name="" style="width:100%;"></textarea>
    </div>
  </div>
</div>

<a name="touch"></a>
### 6. Make a File (touch)

We know how to make directories (or folders) using the `mkdir` command. In order to make files inside of those directories, we use `touch`:

```
rwarbelow~/essays$ touch chapter_1.txt
rwarbelow~/essays$
```

We don't see any confirmation that the file was created, but we can use `ls` to see what's inside the directory:

```
rwarbelow~/essays$ ls
chapter_1.txt
```

<div class="try-it">
  <h2>Try It: touch</h2>
  <p>Double check that you are inside the terminal_practice folder that you created earlier. Make three files (names are your choice). When you're done making the files, type "ls" and paste the output into the chat.</p>
</div>

<a name="rm"></a>
### 7. Remove a File (rm)

In the past, you've probably gotten rid of files by dragging them to the trash and then emptying it. We can remove files from the command line using the `rm` command, like this:


```
rwarbelow~/essays$ rm chapter_1.txt
```

Again, we don't get a confirmation, but if I were to `ls` right now, nothing would appear since the directory is now empty. 

<div class="try-it">
  <h2>Try It: rm</h2>
  <p>Remove the files you created using the "rm" command, one at a time. Between each removal, type "ls" to make sure that it's gone.</p>
</div>

<a name="rmrecursive"></a>
### 8. Remove a Directory and Its Contents (rm -r)

We can use `rm` to remove a file, but we use a different command when we're removing a directory. Since a directory could potentially contain other files and directories inside of it, we use `rm -r` which stands for remove recursively, or go inside this directory and remove everything inside of it as well. 

In order to remove a directory, you must be OUTSIDE of that directory. For example, if I'm inside the `book_projects` directory and I want to remove it, I first need to get out of it using `cd ..`, then use the `rm -r book_projects`:

```
rwarbelow~/essays/book_projects$ cd ..
rwarbelow~/essays$ rm -r book_projects
```

Now when I type `ls`, I will no longer see `book_projects` listed.

<div class="try-it">
  <h2>Try It: rm and rm -r</h2>
  <div class="flex-container">
    <div>
      <img src="images/files_directories_3.png" alt="files and directories 2">
    </div>
    <div>
      <strong>For this exercise, assume that each question is independent of the rest, and that the starting point is always the diagram to the left.</strong>
      <p>I'm in to_do. What do I type to remove random.txt?</p>
      <textarea rows="1" name="" style="width:100%;"></textarea>
      <p>I'm in to_do. What do I type to remove the home directory?</p>
      <textarea rows="1" name="" style="width:100%;"></textarea>
      <p>I'm in the work directory. What <strong>two commands</strong> do I type to remove the home directory?</p>
      <textarea rows="2" name="" style="width:100%;"></textarea>
      <p>I'm in the projects_to_delegate directory. What <strong>two commands</strong> do I type to remove the directory I'm currently in?</p>
      <textarea rows="2" name="" style="width:100%;"></textarea>
      <p>I'm in projects_to_delegate. What <strong>four commands</strong> do I need to type to remove the cleaning.txt file?</p>
      <textarea rows="4" name="" style="width:100%;"></textarea>
    </div>
  </div>
</div>

<div class="things-to-note">
  <h4>Things to Note: Terminal</h4>
  <ol>
    <li>You can press the <strong>up-arrow</strong> at the bottom right of your keyboard just below the shift button to populate the prompt with your previous command. You can then keep pressing the <strong>up-arrow</strong> to cycle through your recent commands.</li>
    <li>You can type <strong>history</strong> in your command prompt to see a list of your recent commands. Remember to press <strong>return</strong> to run the history command.</li>
    <li>By default, your mac has hidden directories that can only be accessed by your terminal, so they are not seen in your Finder view. How to change this and why you would access these files is beyond the scope of today's lesson. But, this is something to be aware of. We accessed one of these hidden files at this point in the lesson: <a href="#profiledetour" title="">Detour</a></li>
    <li>A way to enable <strong>Tab Complete</strong> and an example.</li>
  </ol>
  <h4>Terminal Shortcuts:</h4>
  <ul>
    <li>
      <strong>Clear Command Line</strong>
      <pre>control + u</pre>
    </li>
    <li>
      <strong>Clear Terminal Window</strong>
      <pre>command + k</pre>
    </li>
    <li>
      <strong>Goto Beginning of Line</strong>
      <pre>control + a</pre>
    </li>
    <li>
      <strong>Goto End of Line</strong>
      <pre>control + e</pre>
    </li>
    <li>
      <strong>Fast Moving Cursor Through Command Line Text</strong>
      <pre>Right: option + right-arrow</pre>
      <pre>Left: option + left-arrow</pre>
    </li>
  </ul>
</div>

<a name="git"></a>
## Git

<span class="vocab">Git</span> is a Version Control System (VCS). It allows you to save work on your project, and reference previous states of a project if needed. Normally when we save something on our computer, the newer version overwrites the older version. This is problematic if we need to look back at an earlier version. Git solves this problem by providing you multiple save points. You can get the current version, and ANY previous version. Git’s philosophy: never lose anything.

Git is similar to the way that Google Docs tracks changes across time:


<div class="flex-container">
  <div class="uneven">
    <img src="images/google_docs_1.png" alt="" style="border: 1px solid black">
    <p>When you click on "All Changes Saved In Drive" (or sometimes it will say the name and date of the last change), it will show you who made what change and when that change was made.</p>

    <p>You can also choose to revert to a previous version of a document by finding the version in history that you want and clicking on "Restore This Version".</p>
    <img src="images/google_docs_3.png" alt="" style="border: 1px solid black;">
  </div>
  <div>
    <img src="images/google_docs_2.png" alt="" style="border: 1px solid black; width: 50%; margin-left: 2em;">
  </div>
</div>

In this section on git, we'll learn (or review) these git comamnds: 

<ol>
  <li><a href="#init" title="">git init</a></li>
  <li><a href="#status" title="">git status</a></li>
  <li><a href="#add" title="">git add</a></li>
  <li><a href="#commit" title="">git commit</a></li>
  <li><a href="#log" title="">git log</a></li>
</ol>

<a name="init"></a>
### 1. Start Tracking a Directory With Git (git init)

By default, your changes will not be tracked. In order to tell git that we want to start tracking something, we need to initialize git in a directory. 

```
rwarbelow~/essays$ git init
Initialized empty Git repository in /Users/rwarbelow/essays/.git/
```

This means git will now be available to use to track changes in the `essays` directory.

<div class="things-to-note">
  <h4>Things to Note</h4>
  <div class="flex-container">
    <div>
      <img src="images/files_directories_2.png" alt="">
    </div>
    <div>
      <p>1. You only need to initialize a directory once in order to track everything else inside of it. </p>
      <p>For example, if I typed this while in the essays directory:</p>
      <pre>rwarbelow~essays$ git init</pre>
      <p>Then every file (life_lessons.docx, notes.docx, literary_analysis.docx, and book_report.docx) would be tracked by git.</p>
      <p>2. Empty directories are <strong>not</strong> tracked by git. Therefore, if you create a directory but there's nothing inside of it, git will ignore it. Git will only track it when there is a file inside of the directory.</p>
    </div>
  </div>
</div>

<div class="try-it">
  <h2>Try It: git init</h2>
  <p>Make sure that you are in the terminal_practice directory that you created earlier. Initialize this directory as a git repository using the init command. Paste the output into the chat box.</p>
</div>

Before we move onto the next section, we'll want a few files in our `terminal_practice` directory that we can track. Use what you know about `touch` to make two files (you can name them whatever you want).

<a name="status"></a>
### 2. Check the Status (git status)

When you want to see what git is tracking and the current status of files, you can use `git status`:

```
rwarbelow~/essays$ git status
On branch master

No commits yet

Untracked files:
  (use "git add <file>..." to include in what will be committed)

  life_lessons.docx
  notes.docx

nothing added to commit but untracked files present (use "git add" to track)
```

`No commits yet` means that we haven't asked git to save a version yet. You can think of a <span class="vocab">commit</span> as a snapshot of your work at a certain point in time. So far, we have none.

`Untracked files` refers to the fact that even though we initialized a git repository, we haven't started tracking anything yet. It lists the files that are available to track. (Also note "untracked files present" near the bottom).

<div class="things-to-note">
  <h4>Things to Note</h4>
  You can type "git status" as many times as you want, whenever, wherever. It it a safe command that will not change anything about your tracking.
</div>


<div class="try-it">
  <h2>Try It: git status</h2>
  <p>Type "git status" to see your status. Paste it into the chat.</p>
</div>

<a name="add"></a>
### 3. Add a File to Track (git add &lt;filename&gt;)

Let's add one of the files that we want to track.

```
rwarbelow~/essays$ git add life_lessons.docx
rwarbelow~/essays$ git status
On branch master

No commits yet

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)

  new file:   life_lessons.docx

Untracked files:
  (use "git add <file>..." to include in what will be committed)

  notes.docx

```

Notice the "changes to be committed" section: It tells us that we have a new file, `life_lessons.docx`, that is ready to be committed. We can say that the `life_lessons.docx` file is in the <span class="vocab">git staging area</span>. That means no changes are tracked yet, but we're ready to take a snapshot of it (we'll do this next).

<div class="try-it">
  <h2>Try It: git add</h2>
  <p>Add one of your untracked files (git add filename), then check the status (git status). Paste the output into the chat.</p>
</div>

<a name="commit"></a>
### 4. Take a Snapshot in Time (git commit -m &lt;message&gt;)

Now that our file is in the staging area, let's tell git that we're ready to take a snapshot of this moment to save:

```
rwarbelow~/essays$ git commit -m 'Initial commit'
[master (root-commit) 356aaea] Initial commit
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 life_lessons.docx
rwarbelow~/essays$ git status
On branch master
Untracked files:
  (use "git add <file>..." to include in what will be committed)

  notes.docx

nothing added to commit but untracked files present (use "git add" to track)
```

It's good practice to use "Initial Commit" for your very first commit in each repository. 

<div class="try-it">
  <h2>Try It: git commit</h2>
  <p>Use the example of the initial commit from above to commit your first file to git's history. Paste your output into the chat.</p>
</div>

<a name="log"></a>
### 5. Check the History of Commits (git log)

During the next session, we'll learn about GitHub which provides a nice interface to look at previous versions. However, from the command line, we can at least see when commits were made using `git log`:

```
rwarbelow~/essays$ git log
commit 356aaea48c68c38ac9562c921343b2ea958d6789 (HEAD -> master)
Author: Rachel Warbelow <rachelwarbelow@gmail.com>
Date:   Sat Jan 19 16:44:29 2019 -0800

    Initial commit
```

Four lines is a lot for one commit. You can also use `git log --oneline` if you want a smaller output:

```
rwarbelow~/essays$ git log --oneline
356aaea (HEAD -> master) Initial commit
```

<div class="try-it">
  <h2>Try It: git log</h2>
  <p>Try both "git log" and "git log --online".</p>
</div>

### Putting it All Together

The basic flow of commands that you would use as time goes on and you're making changes to your files is this:

```
git status
git add <filename>
git commit -m 'Message about your change'
git status
```

<div class="try-it">
  <h2>Try It: Git It Together</h2>
  <p>Use the flow above to add and commit your remaining file.</p>
  <p>When you're done, type "history" into your command prompt, copy-paste the commands that you used to accomplish this task, and paste those into the chat.</p>
</div>

<a name="homework"></a>

## Homework

[still working on this...]

* Review today's session and create own notes
* File/directory diagram to recreate using commands
* Set of instructions for basic git practice
* Typing.io
* Make a mod 0 directory, then add folders inside for session 1, session 2, session 3, session 4, session 5, and session 6
* Customize command prompt
* Read: <a href="https://chris.beams.io/posts/git-commit/">Git Commit Article</a>
* Quickly recognizing misspellings, missing characters, etc.
* More command line lerning: <a href="https://www.learnenough.com/command-line-tutorial/basics">Command Line Tutorial</a>
