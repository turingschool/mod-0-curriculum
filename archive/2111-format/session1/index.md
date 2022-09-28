---
layout: page
title: Session 1
subheading: Success at Turing, Terminal
---

## Learning Goals

- Use the Driver-Navigator technique to collaborate
- Screenshare work in a Breakout Room
- Navigate through directories from the command line
- Make and remove files and directories from the command line

## Agenda

- Introductions
- Housekeeping
- Files, Directories, and Paths
- Terminal, Command Line
- Closing and Announcements

## Materials

- Quiet Space
- Notebook
- Writing instrument
- Laptop
- Headphones & mic

## Introductions

- Instructor Instroductions
- Follow along by clicking the lesson plan in Slack

## Housekeeping

### Zoom Display Names

* Change display name in Zoom by clicking the **Participants** menu and choosing **Rename**. Make sure to match the following format:
  - Program (FE or BE)
  - First name
  - Last initial
  - Pronouns
  _- Example: FE - Kaitlyn V (she/her)_
* Sessions will be recorded and posted in Slack

Other things to note as we go through Mod 0:

- <strong>Zoom</strong>: turn video on, turn mic off unless speaking
- <strong>You can raise your hand using Zoom</strong>: go ahead and try it now!
- <strong>Problems or individual questions during the Zoom session?</strong> Send a message in the chat!

### Breakout Rooms

Breakout Rooms are a feature in Zoom that we'll use throughout the Mod 0 sessions. They allow for small group discussion, where you will work collaboratively through challenges. You'll be sent out into smaller group with 2 or 3 of your classmates. When they're finished, you'll get a 30 second warning where you can rejoin the main session, or you'll automatically rejoin at the end of the 30 seconds. During these, instructors may broadcast messages or join to see how we are doing time-wise.

Some norms for Breakout Rooms:
* Be aware and try not talk over others
* Leave space and time for everyone to share

Breakout groups may be a bit awkward at first, but will be a regular and essential part of being a Turing student.

<div class="try-it">
  <h3>Try It: Breakout Rooms (3/group)</h3>
  <p>1. Introduce yourself (name, pronouns, program)</p>
  <p>2. Where do you call home?</p>
  <p>3. Why Turing?</p>
</div>
 
### Time Management at Turing

Turing is a full-time, immersive program. You are going to learn the technical and professional skills needed to succeed in demanding, yet high-paying technical careers inless than a year.

Most students estimate they work an **average of 65-75 hours per week** at Turing; some weeks with fewer hours, some weeks with more hours. While at Turing, **time** is your most valuable commodity. How you use your time will be a determining factor in your overall success in the program.

One strategy we've seen our most successful students employ is using some type of calendar system to track, manage and plan their time while in the program. A few key notes:
- **Calendaring is a very difficult skill to master** - you will need to commit to practicing it in order to improve!
- **Find a calendar tool and stick with it** - Everyone's system, calendar tool, etc. might be a little different, but those who DON'T use any tool typically struggle with time management while at Turing. We **STRONGLY RECOMMEND** you use Google Calendars because a) we use that at Turing and b) it is a very popular tool in the field so it is good to practice using it now!
- **Calendars are meant to be living documents that can change** - You can't plan for everything, and sometimes we don't accurately estimate how long something will take. Being able to make adjustments to calendars as things change is a very important skill to start practicing

#### Time Management and Calendar Tips from Successful Students

- **Purposefully build in scheduled time for health, wellness and whatever else you need to be your best self** - If you don't plan for it - chances are it won't happen. Turing moves fast, but it is still a marathon. How can you make sure you are creating a sustainable schedule/routine?
- **Break down time blocks as much as possible** - Anything over an hour will usually be unproductive and give too much time to procrastinate
- **Avoid context shifting too frequently** - On the flip side, don't break down your blocks too much. For example, trying to cram 4-5 different tasks into a single hour is also not productive and can be extremely exhausting
- **Treat your blocks of time as appointments that shouldn't be missed** - You woudln't miss an appointment with a mentor; treat your other blocks the same way, even for independent work or study time.
- **When you think of something you need to do, put it on your calendar immediately** - For example, if after a lesson, you think to yourself "I really want to go back and finish that activity we started in the lesson..." you should immediately pull up your calendar, find a 15-30 minute block of time in the next couple of days and make an event for working on that particular exercise (and add the link to the lesson and/or exercise to that event)
- **Reflect on your time management each week** - Build in time each week to reflect on how well you stuck to your schedule. Be gracious to yourself and adjust the upcoming week
- **Time management becomes more important throughout the program** - As the program progresses, you will find yourself balancing more responsibilities, such as attacking the technical curriculum while simultaneously searching for your first software developer job

<br>

## Files, Directories, and Paths

On your computer, you probably have many <span class="vocab">files</span> and <span class="vocab">directories</span>. Files are things like text documents, images, videos, PDFs, etc. Directories (or folders) are the structures we use to organize these files.

In the diagram below, we would say that there's a directory called `essays` that contains three files: `life_lessons.docx`, `book_report.docx`, and `literary_analysis.docx`:

<hr>
<h4>Example #1</h4>
<div class="flex-container">
  <div>
    <img src="images/files_directories_1.png" alt="files and directories 1">
  </div>
  <div>
    A <span class="vocab">file path</span> is a way to notate where a file "lives" on your computer. This is the structure:
    <pre>directory_name/file_name.extension</pre>
    The file path for the first file in the diagram would be:
    <pre>essays/life_lessons.docx</pre>
    <p>What is the path for <code>book_report.docx</code>?</p>
    <textarea rows="1" name="" style="width:100%;"></textarea>
    <p>What is the path for <code>literary_analysis.docx</code>?</p>
    <textarea rows="1" name="" style="width:100%;"></textarea>
  </div>
</div>
<div class="things-to-note">
  <h4>Things to Note</h4>
  <ol>
    <li>A file cannot be inside of another file. This means that every part of the path <strong>before</strong> the actual file is a directory. </li>
    <li>For now, we will follow two convention rules: </li>
    <ul>
      <li>Use lower case letters when naming directories and files</li>
      <li>Use underscores (_) or hyphens (-) instead of spaces when naming directories and files. However, keep in mind that different languages and frameworks have different conventions. Rather than arguing over which approach is "correct" (you'll find a lot of this on the internet), it is more important to pick an approach and be consistent. For today's lesson, we'll use the underscore (_) approach.</li>
    </ul>
    <li>Folders do not have extensions (like <strong>.docx</strong> or <strong>.md</strong> or <strong>.csv</strong>, etc.) but file names do have extensions.</li>
    <li>File extensions matter. A <strong>.md</strong> file will behave differently than a <strong>.docx</strong> file, which will also behave differently than a <strong>.md</strong> file because the extensions help the operating system figure out which application can open the file. </li>
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
    <p>What is the path for cleaning.txt?</p>
    <textarea rows="1" name="" style="width:100%;"></textarea>
    <p>What is the path for recurring.txt?</p>
    <textarea rows="1" name="" style="width:100%;"></textarea>
    <p>What is the path for data_entry.csv?</p>
    <textarea rows="1" name="" style="width:100%;"></textarea>
  </div>
</div>

<div class="things-to-note">
  <h4>Things to Note</h4>
  <p>We commonly refer to directories with an analogy of <span class="vocab">parent</span> and <span class="vocab">child</span>. In the above example <code>to_do</code> is the <span class="vocab">parent</span> directory of the <code>personal</code> and <code>work</code> directories. <code>projects_to_delegate</code> is a <span class="vocab">child</span> directory of the <code>work</code> directory.</p>
</div>

<hr>

## Terminal and Command Line

The <span class="vocab">Terminal</span> is what we call a command line interface. It's the program we use to give commands to the computer. We use the command line because it is a faster and more precise way to navigate our file systems, and certain tools can only be downloaded and accessed via the command line.

Your Terminal will look something like this:

<img src="images/david_terminal.png" alt="">

### Terminal Commands

<div class="try-it">
  <h3>Research, Breakout Room Roles</h3>
  <p>In your Breakout Room, each team member should select one command from <code>pwd</code>, <code>touch</code>, and <code>cd ..</code>. (This should take no longer than 30 seconds).</p>
  <ul>
    <li>Assign a timekeeper</li>
    <li>Take 2 minutes to independently Google the designated command, take notes, and be ready to share what you've learned or what you are confused about with your group</li>
    <li>Take 1 minute to share what you learned with your teammates</li>
  </ul>
  <p>When we come back together as a whole group, you will have a chance to reflect on how this time was spent and then provided with some direct instruction on these commands.</p>
</div>

<div class="things-to-note">
  <h3>Independent Reflection</h3>
  <ul>
    <li>How did it feel being in the Breakout Room?</li>
    <li>Did your team follow the protocol?</li>
    <li>Did everyone get about equal floor time?</li>
  </ul>
</div>

#### Action Commands
<ul>
  <li>mkdir</li>
  <li>cd</li>
  <li>cd ..</li>
  <li>touch</li>
  <li>clear</li>
</ul>

#### Safe/Informative Commands
<ul>
  <li>pwd</li>
  <li>ls</li>
</ul>

#### Destructive Commands
<ul>
  <li>rm</li>
  <li>rm -rf</li>
</ul>

### 1. Where am I? (`pwd`)

When you open the terminal, you will be in your home directory. Being in various directories will allow you to do different things, just like you can do different things at home vs. on vacation vs. at work.

To figure out where you are in your computer's directory structure, run `pwd`. `pwd` stands for "print working directory"

```
timo@Tims-MacBook-Pro:~$ pwd
/Users/timo
```

You'll see the path from the root of your computer to your current directory.

### 2. Make a Directory (`mkdir`)

To make a folder using the visual interface of Finder, this is what you might do:

<img src="images/mkdir.gif" alt="making a folder using finder" style="height: 250px">

We can make new directories with the `mkdir` command. Unlike `pwd` where we didn't need to type anything else, we'll need to add a name for the directory. Keep your directories lowercase with no spaces. If you need to use a space, use the underscore (\_).

For example, the following two commands will create two directories called `work_spreadsheets` and `latest_projects`:

```
timo@Tims-MacBook-Pro:~$ mkdir work_spreadsheets
timo@Tims-MacBook-Pro:~$ mkdir latest_projects
```

You won't get any confirmation that your directory was created -- you'll just see a new command prompt ready for your next command.

### 3. Listing Contents of a Directory (`ls`)

With a visual interface (as shown in the gif above), you can easily see the contents of a directory. On the command line, it's a little different.

To see what is inside of a directory, we use the `ls` command which stands for list. As an example, let's assume that we have the directories and files from this diagram on a computer:

<div class="flex-container">
  <div>
    <img src="images/files_directories_2.png" alt="files and directories 2">
  </div>
  <div>
    If I was in the essays directory and I ran <code>ls</code>, this is what I'd see:

  <pre>timo@Tims-MacBook-Pro:~/essays$ ls
  book_projects    life_lessons.docx    notes.docx</pre>

  <p>You will only see the directories and files that are directly inside of where you are. You will not see any directories or files that are nested down the path. This is why we do not see the contents of book_projects listed.</p>

  <p>Now assume we're in the book_projects directory. If I run <code>ls</code>, I'll see this:</p>

  <pre>timo@Tims-MacBook-Pro:~/essays/book_projects$ ls
  literary_analysis.docx    book_report.docx</pre>

  </div>
</div>

### 4. Go Into a Directory (cd)

You can move into a directory using the `cd` command, which stands for "change directory". After `cd`, type the name of the directory you want to go into.

<div class="flex-container">
  <div>
    <img src="images/files_directories_2.png" alt="files and directories 2">
  </div>
  <div>
    For example, if I was in the <code>essays</code> directory and wanted to move into the <code>book_projects</code> directory to see my documents, I would type this:
<pre>
timo@Tims-MacBook-Pro:~/essays$ cd book_projects
timo@Tims-MacBook-Pro:~/essays/book_projects$
</pre>

We see that the second command prompt now lists the path of new directory that we're in.

From there, if I used the <code>ls</code> command, I would be able to see the contents of my folder:

<pre>
timo@Tims-MacBook-Pro:~/essays/book_projects$ ls
literary_analysis.docx    book_report.docx
</pre>
  </div>
</div>

<div class="things-to-note">
  <h4>Things to Note</h4>
  <p>You can't pick any random directory from your computer to give to the cd command. It has to be a directory inside wherever you currently are (or you need to use the full path to get to that directory, which we won't talk about today).</p>
</div>

### 5. Get Out of a Directory (cd ..)

To get out of a directory you're in, we use `cd ..` (with a space between the d and the first dot). This means "go back up one level."

If I'm in the `book_projects` directory and I want to get back to `essays`, this is what I'd run:

```
timo@Tims-MacBook-Pro:~/essays/book_projects$ cd ..
timo@Tims-MacBook-Pro:~/essays$
```

Notice that my path no longer includes `book_projects` because I'm outside of that folder now.

**Note** You never want to `cd` into a directory above your home directory. This area requires admin permissions, and there is no practical use case for being there.

<div class="try-it">
  <h3>Try It: cd and cd ..</h3>
  <p>Let's try to figure out the following scenarios together.</p>
  <div class="flex-container">
    <div>
      <img src="images/files_directories_3.png" alt="files and directories 2">
    </div>
    <div>
      <p>If I'm in the <code>work</code> directory, what do I need to type to get to <code>to_do</code>?</p>
      <textarea name="" style="width:100%;"></textarea>
      <p>If I'm in the <code>projects_to_delegate</code> directory, what <strong>two commands</strong> do I need to type to get to <code>to_do</code>?</p>
      <p><small>(We'll learn how to combine these momentarily)</small></p>
      <textarea name="" style="width:100%;"></textarea>
      <p>I'm in the <code>personal</code> directory. What <strong>three commands</strong> do I need to type to get to <code>projects_to_delegate</code>?</p>
      <p><small>(We'll learn how to combine these momentarily)</small></p>
      <textarea rows="3" name="" style="width:100%;"></textarea>
      <p>I'm in the <code>projects_to_delegate</code> directory. What <strong>three commands</strong> do I need to type to get to <code>personal</code>?</p>
      <p><small>(We'll learn how to combine these momentarily)</small></p>
      <textarea rows="3" name="" style="width:100%;"></textarea>
    </div>
  </div>
</div>

<div class="things-to-note">
  <h4>Things to Note</h4>
  <ul>
    <li>One can combine commands to navigate multiple levels through your directory structure. </li>
    <li>For the third example in the previous <strong>Try It</strong> section, one could navigate to the <code>projects_to_delegate</code> directory as long as one knows the path:</li>
    <code>cd ../work/projects_to_delegate</code>
    <li>For the fourth and final example above:</li>
    <code>cd ../../personal</code>   
    <li>Each level in the path is spearated by a <code>/</code></li>
  </ul>
</div>

### 6. Make a File (touch)

We know how to make directories (or folders) using the `mkdir` command. In order to make files inside of those directories, we use `touch`. The following two commands show how I would make two new files, `chapter_1.md` and `chapter_2.md`:

```
timo@Tims-MacBook-Pro:~/latest_projects$ touch chapter_1.md
timo@Tims-MacBook-Pro:~/latest_projects$ touch chapter_2.md
```

We don't see any confirmation that the file was created, but we can use `ls` to see what's inside the directory:

```
timo@Tims-MacBook-Pro:~/latest_projects $ ls
chapter_1.md    chapter_2.md
```

### 6. Clear your Terminal (clear)

Sometimes when you've entered a lot of Terminal commands, your terimal can get pretty cluttered. You can always use `clear` to "clean up" your Terminal workspace! 

### 7. Remove a File (rm)

In the past, you've probably gotten rid of files by using the `Move to trash` button or dragging them into the trash, like this:

<img src="images/filetotrash.gif" alt="file to trash" style="height: 250px;">

We can remove files from the command line by running the `rm` command, like this:

```
timo@Tims-MacBook-Pro:~/latest_projects $ rm chapter_1.md
```

Again, we don't get a confirmation, but if I were to run `ls` right now, nothing would appear since the directory is now empty.

```
timo@Tims-MacBook-Pro:~/latest_projects $ ls
chapter_2.md
```

<div class="things-to-note">
  <h4>Things to Note</h4>
  <ul>
    <li>A file removed using the <code>rm</code> command <strong>does not</strong> go into your trash where you could restore it later</li>
    <li>Although it may be possible to recover files deleted with <code>rm</code>, it is a difficult process requiring special tools and time. For now, assume that any file you remove using the <code>rm</code> command is gone for good</li>
  </ul>
</div>

### 9. Remove a Directory and Its Contents (rm -rf)

We can use `rm` to remove a file, but we use a different command when we're removing a directory. Since a directory could potentially contain other files and directories inside of it, we use `rm -rf` which stands for remove _recursively_, or go inside this directory and remove everything inside of it as well.

In order to remove a directory, you must be OUTSIDE of that directory. For example, if I'm inside a `books` directory and I want to remove it, I first need to get out of it using `cd ..`, then use the `rm -rf books`:

```
timo@Tims-MacBook-Pro:~/latest_projects/books$ cd ..
timo@Tims-MacBook-Pro:~/latest_projects$ rm -rf books
```

Now when I type `ls`, I will no longer see `books` listed.

  <div class="try-it">
    <h3>Try It: Removing files (rm) and directories (rm -rf)</h3>
    <div class="flex-container">
      <div>
        <img src="images/files_directories_3.png" alt="files and directories 2">
      </div>
      <div>
        <p>We'll work through these exercises together.</p>
        <strong>For this scenario, assume that each question is independent of the rest, and that the starting point is always the diagram to the left.</strong>
        <p>I'm in <code>to_do</code>. What do I type to remove <code>random.md</code>?</p>
        <textarea rows="1" name="" style="width:100%;"></textarea>
        <p>I'm in <code>to_do</code>. What do I type to remove the <code>personal</code> directory?</p>
        <textarea rows="1" name="" style="width:100%;"></textarea>
        <p>I'm in the <code>work</code> directory. What <strong>two commands</strong> do I type to remove the <code>personal</code> directory?</p>
        <textarea rows="2" name="" style="width:100%;"></textarea>
        <p>I'm in the <code>projects_to_delegate</code> directory. What <strong>two commands</strong> do I type to remove the directory I'm currently in?</p>
        <textarea rows="2" name="" style="width:100%;"></textarea>
        <p>I'm in <code>projects_to_delegate</code>. What <strong>four commands</strong> do I need to type to remove the <code>cleaning.md</code> file?</p>
        <textarea rows="4" name="" style="width:100%;"></textarea>
      </div>
    </div>
  </div>

<br>

## Putting It All Together

### Demo: Driver-Navigator Format

1. Run `cd` to get to your home directory (you'll probably already be here, but do it just to be sure)
1. Make a new directory called `terminal_practice`
1. Move into that directory
1. Print your current directory
1. Make a file called `favorite_foods.md`
1. List the contents of your directory (you should see just your `favorite_foods.md` file appear)
1. Use VS Code add your #1 favorite food to the file
1. Delete the `favorite_foods.md` file
1. Get back out of the `terminal_practice` directory
1. Remove the `terminal_practice` directory

<div class="try-it">
  <h3>Driver-Navigator Practice</h3>
  <p>For Challenge #1, the person whose first name starts with the letter closest to "T" will share their screen. This person will be the <em>driver</em>, the person who types the commands. The other person will be the <em>navigator</em>, the person who brainstorms and articulates what the drier should type.</p>
  <p>In addition to the roles of typing and artiuclating the commands, both teammates have a responsibility to listen and gauge whether the other understands what is going on and ask if clarification is needed. This is not a race. Your ability to communicate and work collaboratively through this is just as, if not more important, than your ability to use these commands correctly.</p>
</div>

### Challenge #1

1. Run `cd` to get to your home directory (you'll probably already be here, but do it just to be sure)
1. Make a new directory called `my_first_projects`
1. Make another new directory called `my_other_projects`
1. List the contents of your directory (you should see these two directories you just made in the list)
1. Remove the `my_other_projects` directory
1. Move into the `my_first_projects` directory
1. Make a file called `ruby.md`
1. Make a file called `javascript.md`
1. Make a file called `python.md`
1. List the contents of your directory (you should see the three files you just created)
1. Delete the `ruby.md` file but leave the others
1. Get back out of the `my_first_projects` directory
1. List the contents of your directory (you should see `my_first_projects`)
1. Remove the `my_first_projects` directory

### Challenge #2

Switch driver/navigator roles.

1. Run `cd` to get to your home directory (you'll probably already be here, but do it just to be sure)
1. Make a new directory called `session3_practice`
1. Move into the `session3_practice` directory
1. Print the path to your current directory
1. Make a file called `terminal.md`
1. List the contents of your directory (you should see the `terminal.md` file you just created)
1. Add the text "The Terminal is an interface to give commands to the computer" to the `terminal.md` file
1. Get back out of the `session3_practice` directory
1. Remove the `session3_practice` directory

<br>

## Closing and Announcements

<div class="things-to-note">
  <h3>Independent Reflection</h3>
  <ul>
    <li>What was difficult about working on these challenges collaboratively?</li>
    <li>What were the benefits of working on these challenges collaboratively?</li>
    <li>Do you feel that you and your partner left the breakout room with similar levels of understanding/fluency of the Terminal commands?</li>
  </ul>
</div>

Key takeaways from this Session:
* You should understand that your Turing experience will be collaborative and how we leverage technology to collaborate remotely
* You should have a better understanding of the skills and mindsets necessary to succeed at Turing
* You should understand how to navigate files/directories using your terminal

## Homework

Find the Homework in your Mod 0 Trello Board. If you have any clarifying questions about expectations for Homework, post them in the Mod 0 Slack channel.

Note that the Mod 0 Project takes about 35 hours total to complete. Part of your homework this week is to create a calendar for Mod 0 where you can plan how to spend your time on classes, homework, and the Mod 0 Project! 

**If you find yourself falling behind, it is your responsibility to reach out to your TAs early!**

<br><br>

<!-- ## Keyboard Shortcuts

Most computer users rely heavily on the mouse to open applications, interact with programs, etc. You might think that you're quick with a mouse, but just wait until you get good at <span class="vocab">keyboard shortcuts</span>.

Initially, your flow will be slower as you learn and memorize each of the shortcuts. However, if you force yourself to use these shortcuts, you'll become much faster in the long run.

<div class="try-it">
  <h3>Try it: Shortcuts</h3>
  <div class="flex-container tips">
    <div>
      <h3>Mac Environment</h3>
      <p>Use these shortcuts to quickly move around within your environment.</p>
      <ul>
        <li>
          <strong>Open a program or search for a file:</strong>
          <pre>command + spacebar</pre>
          <p>Then start typing the name of the program or file to search for such as
            <i>"Terminal"</i> Or <i>"Chrome"</i>,
          then press return to open that program or file</p>
        </li>
        <li>
          <strong>Cycle through open programs:</strong>
          <pre>command + tab + tab ...</pre>
        </li>
        <li>
          <strong>Switch between separate open windows of the same program:</strong>
          <pre>command + `</pre>
        </li>
        <li>
          <strong>Quit an Open Program:</strong>
          <pre>command + Q</pre>
        </li>  
      </ul>
      <div>
      <h3>Rectangle</h3>
      <p>Start by making sure Rectangle is running with (command + spacebar) then type <strong>Rectangle</strong> and then return. You should see a window icon at the top right of your menu bar. Click the icon to see a dropdown of your shortcuts. Click preferences to customize them.</p>
      <ul>
        <li>
          <strong>Full Screen Current Window:</strong>
          <pre>command + option + enter</pre>
        </li>
        <li>
          <strong>Left Half Current Window:</strong>
          <pre>command + option + left-arrow</pre>
        </li>
        <li>
          <strong>Right Half Current Window:</strong>
          <pre>command + option + right-arrow</pre>
        </li>
        <li>
          <strong>Top Half Current Window:</strong>
          <pre>command + option + up-arrow</pre>
        </li>
        <li>
          <strong>Bottom Half Current Window:</strong>
          <pre>command + option + down-arrow</pre>
        </li>
      </ul>
    </div>
    </div>
    <div>
      <h3>Chrome Browser</h3>
      <p>Start by opening Chrome with the shortcut (command + space) you already learned.</p>
      <ul>
        <li>
          <strong>Bookmark Page:</strong>
          <pre>command + D</pre>
        </li>
        <li>
          <strong>Open New Tab:</strong>
          <pre>command + T</pre>
        </li>
        <li>
          <strong>Open New Window:</strong>
          <pre>command + N</pre>
        </li>
        <li>
          <strong>Open New Incognito Window:</strong>
          <pre>command + shift + N</pre>
        </li>
        <li>
          <strong>Highlight Current URL:</strong>
          <pre>command + L</pre>
        </li>
        <li>
          <strong>Cycle Through Tabs:</strong>
          <pre>Right: control + tab</pre>
          <pre>Left: control + shift + tab</pre>
        </li>
        <li>
          <strong>Reload Page:</strong>
          <pre>command + shift + R</pre>
        </li>
        <li>
          <strong>Close Tab:</strong>
          <pre>command + W</pre>
        </li>
      </ul>
    </div>
  </div>
</div> -->