---
layout: page
title: Session 2
subheading: Terminal, File/folder Structure, Git Basics
---

### Goals
  - define and understand iteration at a high level
  - define psuedocoding and problem solving strategies
  - understand and practice Driver - Navigator pairing approach
  - write pseudocode and break problem into smaller steps
  - explain the purpose of git
  - initialize, add, and commit changes in a local repository 

### Agenda
**6:15** - Housekeeping, Feedback + Goals
**6:25** - Iteration in Programming
**6:55** - Break
**7:00** - Problem Solving + Pseudocode
**7:35** - Break
**7:40** - Git Basics
**8:25** - Wrap Up

### Materials
- Notebook
- Writing instrument
- Laptop
- Headphones & mic
- Zoom permission to share screen for breakout sessions

## Housekeeping, Feedback, and Goals

- In the warmup slack thread, post a keyboard shortcut that you practiced and now feel comfortable using.
- You will be screensharing your terminal today. If you have programs open that might be distracting (or you have confidential work open), close or minimize those programs now.

### Wins

- Ask questions or post struggles you have in the public Slack channel! This is a *win-win-win* for everybody.

### Follow-Ups

- For homework, we'll be leaving feedback on your practice tasks and also checking, but not leaving feedback on your readings and responses.

### Today's Goals

(See above)

<div class="try-it">
  <h3>Intros, Review, and Icebreaker (5 minutes)</h3> Groups of 2 or 3
  <p>1. Introduce yourself: name, pronouns</p>
  <p>2. What superpower is the most OVERRATED?</p>
  <p>3. What was your biggest takeaway from Session 1?</p>
</div>

<a name="iteration"></a>
## Iteration

Iteration (or looping for a specified number of times) is a process of repeating a task for each object in a collection. For each of the scenarios below, we'll walk through step by step to demonstrate the concept.

### Iteration in Real Life

These are examples that would be programmatically challenging because they would require a ton of steps, but are things that we do everyday.

<table>
  <thead>
    <tr>
      <th>Scenario</th>
      <th>Collection</th>
      <th>For each...</th>
      <th>Do this:</th>
      <th>Then:</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Grading papers</td>
      <td>papers</td>
      <td>paper</td>
      <td>
        <ol>
          <li>read through it</li>
          <li>mark the score on the top</li>
        </ol>
      </td>
      <td>repeat with next paper</td>
    </tr>
    <tr>
      <td>Feeding animals</td>
      <td>animals</td>
      <td>animal</td>
      <td>
        <ol>
          <li>bring the animal to the food bucket</li>
          <li>allow the animal to eat</li>
          <li>bring animal back to barn</li>
        </ol>
      </td>
      <td>repeat with next animal</td>
    </tr>
  </tbody>
</table>

### Iteration in Programming

By "in programming", we mean things that could be done, with relative ease, by a computer. Like crunching numbers.

<table>
  <thead>
    <tr>
      <th>Scenario</th>
      <th>Collection</th>
      <th>For each...</th>
      <th>Do this:</th>
      <th>Then:</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Calculating max heart rate</td>
      <td>birth years</td>
      <td>year</td>
      <td>
        <ol>
          <li>subtract birth year from the current year to get age</li>
          <li>subtract age from 220</li>
        </ol>
      </td>
      <td>repeat with next year</td>
    </tr>
    <tr>
      <td>Formatting names</td>
      <td>names</td>
      <td>name</td>
      <td>
        <ol>
          <li>capitalize the first letter</li>
          <li>lowercase all remaining letters</li>
        </ol>
      </td>
      <td>repeat with next name</td>
    </tr>
  </tbody>
</table>

<div class="try-it">
  <h3>Try It: Iteration in Real Life and Programming</h3>
  <p>Brainstorm a real life scenario that uses iteration. Fill out the table below and be ready to share.</p>
  <table>
    <thead>
      <tr>
        <th>Scenario</th>
        <th>Collection</th>
        <th>For each...</th>
        <th>Do this:</th>
        <th>Then:</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><textarea rows="4"></textarea></td>
        <td><textarea rows="4"></textarea></td>
        <td><textarea rows="4"></textarea></td>
        <td><textarea rows="4"></textarea></td>
        <td><textarea rows="4"></textarea></td>
      </tr>
    </tbody>
  </table>
</div>

## BREAK

Turn off your mics and videos and walk away from the computer. Stand up, stretch, drink water. Do a few sit-ups, squats, push-ups, jumping jacks, arm circles, stress ball squeezes, or whatever else moves your body.
<hr>

# Problem Solving + Pseudocode 

The ability to critically examine a problem and break it down into smaller pieces is an essential skill of a developer that can be improved with practice. Breaking large problems into several smaller problems can help you in every step of the development process:

- *Pseudocode*: Breaking apart coding challenges into steps is often referred to as <span class="vocab">pseudocode</span>. This is done by writing those steps in plain English (or whatever language you speak), and then those steps, can later be converted to code the computer understands.

Pseudocoding can help keep your thoughts in order, especially helpful for when you may need to put a little research into HOW to accomplish all the steps involved. Further, pseudocode is an excellent approach to explaining code to your team because it is programming language-agnostic, allowing non-technical teammates, or teammates who work with different code/technology, to understand your ideas more easily.

## Pseudocode - An Algorithm

Pseudocode often reads like an algorithm. Algorithms often read like recipes:

#### Psuedocode for Making a Cup of Coffee
```
- Organize all ingredients together
- Add water to electric kettle
- Turn electric kettle to ON
- Put coffee grounds in french press
- When water in electric kettle boils, turn to OFF
- Wait 30 seconds
- Add water to french press
- Put plunger over top of french press
- Wait 80 seconds
- Press plunger down
- Pour coffee into cat mug
```

Here is an example of more technical pseudocode. Ultimately, how you write your own pseudocode depends on your personal preference and your audience (if it will be shared).

#### Pseudocode Practice (2 mins)
On your own, write some pseudocode for how you would make a **Peanut Butter + Jelly sandwich** - remember, think about how you can break this "problem" up into the smallest parts possible to allow for the clearest instructions!

#### Pseudocode Breakout Demo (5 mins)
Watch as your TAs model how to engage in a discussion of technical content as they share their pseudocode for creating a sandwich!


#### Psuedocode for Technical Challenges
Take a look at the example of a code challenge you might receive as part of an interview.

**Challenge: Write some code that will determine the number of vowels in a given word/string.**

Below is an example of some pseudocode that could be written for the challenge. What are some things that stand out?

```
- Declare what letters are vowels - a, e, i, o, u
- Start vowelCount at 0 to track number of vowels in the word
- Look at first letter in the word
- Check if vowel
  - If letter is included in list of vowels, increase vowelCount by 1
  - If letter is NOT included in list of vowels, do nothing
- Move to next letter in word and repeat steps from Check if Vowel
- When there are no more letters left in word, return the final vowelCount number
```

#### "Good" Psuedocode

Before we go any futher, understand that it takes a long time to get proficient at writing strong psuedocode. However, here are some indicators of "good" psuedocode:
- Each "step" could be translated into a line/few lines of code
- Each "step" can translate into a Google search fairly easily, if necessary
- The code considers "happy" and "sad" paths
  - What should the code do if things go well?
  - What should the code do if things don't go as expected?

#### "When will I even use this?!"
Hopefully, A LOT! Psuedocoding can be a great process to employ any time you are "stuck" on what your program should be doing! Basically, if you can't explain WHAT you want your code to do in your native language, there is literally 0% chance you'll be able to write code to accomplish that task!

Additionally, psuedocoding comes in handy during technical interviews and code challenges for when you are applying for jobs. Interviewers want to see how you can break complex ideas down into language that everyone can understand - remember, as a developer you will often be working with non-technical colleagues in marketing, sales, etc. and hiring managers want to know that you can communicate with them!

### Practice: Problem Solving

Write your process for changing a flat tire on an automobile!

#### 3 minutes - on your own
- How can you break this problem down into smaller chunks or sub-problems?
- What steps are needed to get from the initial data (input) to the desired end result (output)?
#### 5 minutes - in groups 
- In groups, take turns sharing your psuedocode
- As a group, come up with a Team Pseudocdoe that can borrow parts from all the different group members!
#### 5 minutes - Share Outs + Walkthrough

Everyone should read [this article](https://medium.com/@dannysmith/breaking-down-problems-its-hard-when-you-re-learning-to-code-f10269f4ccd5) at some point after class - note that it's written in Ruby, but again, **focus on the process**

## BREAK

Turn off your mics and videos and walk away from the computer. Stand up, stretch, drink water. Do a few sit-ups, squats, push-ups, jumping jacks, arm circles, stress ball squeezes, or whatever else moves your body.
<hr>

<a name="git"></a>
## Git

<span class="vocab">Git</span> is a Version Control System (VCS). It allows you to save work on your project, and reference previous states of a project if needed. Normally when we save something on our computer, the newer version overwrites the older version. This is problematic if we need to look back at an earlier version. Git solves this problem by providing you multiple save points. You can get the current version, and ANY previous version. Git’s philosophy: never lose anything.

Git works similarly to the way that Google Docs tracks changes across time. Let's take a brief detour to [this Google doc](https://docs.google.com/document/d/1GY5lg6kVY7JzD9qr0kcn_Ct7St-USf72JxTFQ6hu7KQ/edit?usp=sharing).

#### Why Use Git?

There are numerous reasons to use git. Among them:

- The ability to "go back in time" to previous versions of your code if you break something
- The ability to "go back in time" to previous versions of your code if you change your mind about a feature
- The ability to chunk parts of your work so that you can choose from chunks to keep at a later time
- The ability to work collaboratively on the same project (even the same files!)
- The ability to use branches to separate features of a program
- The ability to track who made specific changes to specific files

In this section on git, we'll learn (or review) these git comamnds:

Action Commands
<ul>
  <li><a href="#init" title="">git init</a></li>
  <li><a href="#add" title="">git add</a></li>
  <li><a href="#commit" title="">git commit</a></li>
</ul>

Safe/Informative Commands
<ul>
  <li><a href="#status" title="">git status</a></li>
  <li><a href="#diff" title="">git diff</a></li>
</ul>

<div class="things-to-note">
  <h4>Things to Note</h4>
  <p>Git has a steep learning curve, and it can be super confusing at the beginning. Tonight's lesson is not meant to make you a git expert, but it will expose you to the basic git commands and workflow. Most likely, you will not have the commands or workflow memorized after tonight.</p>
  <p>To get comfortable with git (just like with anything else), you will need to put in hours of practice. It's an excellent idea to go back over this lesson (either in print or recording) multiple times.</p>
</div>

Watch and take notes during the demonstration of the git workflow. After the demonstration, we'll move into breakout rooms where you'll get to try with your group.

### Getting Set Up

We'll start with a directory called `notes` with a file inside called `things_to_remember.md`.

<a name="init"></a>
### 1. Start Tracking a Directory With Git (<span class="vocab">git init</span>)

By default, your changes will not be tracked. In order to tell git that we want to start tracking something, we need to initialize git in a directory.

```
timo@Tims-MacBook-Pro:~/notes$ git init
Initialized empty Git repository in /Users/timo/notes/.git/
```

This means git now **HAS THE ABILITY** to track changes in the `notes` directory. This does **not** mean that git is tracking anything yet. Git is now prepared to track activity in the `notes` directory

*NOTE*: If you don't see this message when you try `git init`, it means you have not set up git on your computer.

<div class="things-to-note">
  <h4>Things to Note</h4>
  <div class="flex-container">
    <div>
      <img src="images/files_directories_2.png" alt="">
    </div>
    <div>
      <p>1. You only need to initialize a directory <strong>once</strong> in order to track everything else inside of it. </p>
      <p>For example, if I typed this while in the essays directory:</p>
      <pre>timo@Tims-MacBook-Pro:~/essays$ git init</pre>
      <p>Then every file inside that directory, regardless of how deeply nested, would be available for git tracking.</p>
      <p><strong>Do not run the git init command more than once in the same directory or in child directories of the directory you initially ran it from. It will never be the answer to the problem you are facing</strong></p>
      <p>2. Empty directories are <strong>not</strong> tracked by git. Therefore, if you create a directory but there's nothing inside of it, git will ignore it. Git will only track it when there is a file inside of the directory.</p>
    </div>
  </div>
  <br>
  <p>3. What happens if you accidentally initialize git in a directory where you didn't intend?</p>
  <p>When you type <code>git init</code>, a directory called <code>.git</code> is created inside of that folder. You can't see this folder using the ls command since it's a hidden folder. Everything that starts with "." is hidden. Instead, you can type <code>ls -a</code> which will display all hidden and visible files and directories.</p>
  <p>In an git initialized directory, you'll see a <code>.git</code> directory. To remove git tracking, you would type:</p>
  <code>rm -rf .git</code>
  <p>This removes the git directory, and you are no longer using git to track your project. If you accidentally run <code>git init</code> in your home directory, and start tracking most of the files and directories on your entire computer, then remember to run <code>rm -rf .git</code> from your home directory. One way to tell if you've accidentally initialize git in your home directory is to first go home by running:<code>cd ~</code> and then run: <code>git status</code>. If you see files being tracked but not staged for commit, then you need to remove the .git folder as layed out above.However, if your terminal returns:<code>fatal: Not a git repository (or any of the parent directories): .git</code>, then you are all good.</p>
</div>

<a name="status"></a>
### 2. Check the Status (<span class="vocab">git status</span>)

When you want to see what git is tracking and the current status of files, you can use `git status`:

```
timo@Tims-MacBook-Pro:~/notes$ git status
On branch main

No commits yet

Untracked files:
  (use "git add <file>..." to include in what will be committed)

  things_to_remember.md

nothing added to commit but untracked files present (use "git add" to track)
```

`No commits yet` means that we haven't asked git to save a version yet. You can think of a <span class="vocab">commit</span> as a snapshot of your work at a certain point in time. In the Google Doc, each save point was a commit. So far, we have no commits for our `notes` project.

`Untracked files` refers to the fact that even though we initialized a git repository, we haven't started tracking anything yet. It lists the files that are available to track. (Also note "untracked files present" near the bottom).

<div class="things-to-note">
  <h4>Things to Note</h4>
  You can type <code>git status</code> as many times as you want, whenever, wherever. It it a safe command that will not change anything about your tracking.
</div>

Let's talk briefly about this diagram from the git documentation. This diagram shows what you can do **after** you have initialized git:

![Git Workflow Diagram](https://git-scm.com/book/en/v2/images/lifecycle.png)

<small><em>Source: https://git-scm.com/book/en/v2/Git-Basics-Recording-Changes-to-the-Repository</em></small>

<a name="add"></a>
### 3. Add a File to Track (<span class="vocab">git add &lt;filename&gt;</span>)

Let's add one of the files that we want to track to the <span class="vocab">staging area</span>. Google's dictionary defines "staging area" as "a stopping place or assembly point en route to a destination". If you've ever run a race, you know that the staging area is the place where all of the runners gather before the race begins. It's a place to make sure everything is good to go before continuing on.

We will add our file to the staging area.

```
timo@Tims-MacBook-Pro:~/notes$ git add things_to_remember.md
timo@Tims-MacBook-Pro:~/notes$ git status
On branch main

No commits yet

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)

  new file:   things_to_remember.md

```

Notice the "changes to be committed" section: It tells us that we have a new file, `things_to_remember.md`, that is ready to be committed. We can say that the `things_to_remember.md` file is in the <span class="vocab">git staging area</span>. That means no changes are tracked yet, but we're ready to take a snapshot of it (we'll do this next).

This may seem silly right now, given that we only have one file -- why not just commit the file? Why do we have to add it first? Let's take a [small detour](https://gist.github.com/rwarbelow/e1340ca3eeb616851a1a48221f48b67b).


<a name="commit"></a>
### 4. Take a Snapshot in Time (<span class="vocab">git commit -m &lt;message&gt;</span>)

Now that our file is in the staging area, let's tell git that we're ready to commit (take a snapshot of this moment to save). It's good practice to use "Initial commit" for your very first commit in each repository.

```
timo@Tims-MacBook-Pro:~/notes$ git commit -m 'Initial commit'
[main (root-commit) b7654a6] Initial commit
 1 file changed, 1 insertion(+)
 create mode 100644 things_to_remember.md
```

Now if I look at my git status, this is what I see:

```
timo@Tims-MacBook-Pro:~/notes$ git status
On branch main
nothing to commit, working tree clean
```

Let's figure out on the diagram what we just did:

![Git Workflow Diagram](https://git-scm.com/book/en/v2/images/lifecycle.png)

<a name="diff"></a>
### 5. Making File Changes, Adding New Commits, and Viewing Those Changes By Using (<span class="vocab">git diff &lt;filename&gt;</span>)
Now that we have our initial commit (or snapshot in time), let's make a change to one of our files.

We'll open up Atom to make these changes - Do you have auto-save enabled?

Your working directory now has changes that differ from what our file looked like the last time we committed (or took a snapshot).

```
timo@Tims-MacBook-Pro:~/notes$ git diff things_to_remember.md
diff --git a/things_to_remember.md b/things_to_remember.md
index e69de29..9ffd068 100644
--- a/things_to_remember.md
+++ b/things_to_remember.md
@@ -0,0 +1,2 @@
+Be kind
+Work hard
```

Then add your changes and commit them using an imperative verb that starts with a capital letter and a short commit message explaining what you did.

The basic git workflow is this:

1. Make file changes - we'll do this in Atom
1. Check the `git status` to see what files are unstaged
1. Check the `git diff <filename>` to see what changes have happened since the last commit
1. `git add <whatever file you want to stage>`
1. Check the `git status` to make sure the correct files are in the staging area
1. `git commit -m 'Message about your changes'` to commit the changes

<a name="gitbreakout"></a>
<div class="try-it">
  <h3>Try It: Git Together</h3>
  <p>Groups of 2 or 3 (10 minutes)</p>
  <p>At this point, we'll split into breakout rooms. The person whose name is first alphabetically will start by sharing their screen, <strong>unless</strong> this person already has significant git experience. Whoever is sharing their screen will be called the <span class="vocab">driver</span>. Every other person in the room will be a <span class="vocab">navigator</span>.</p>

  <p>The driver will be the person typing the commands, but the navigators should be the ones who brainstorm what comes next or what to type. In addition to naming the steps, discuss <strong>why</strong> you are doing each step, or <strong>what</strong> exactly is taking place in each step.</p>

  <p>If you are already comfortable with git, your challenge during the breakout is somewhat more difficult: your goal is to focus on your explanations, communication, and ability to gauge whether or not another person understands you.</p>
  <ol>
    <li>Get back to your home directory</li>
    <li>Create a new directory called <code>to_do</code>. Inside of that directory, create a file called <code>tasks.md</code>.</li>
    <li>Initialize git inside of the <code>to_do</code> directory so that we have git available to track changes.</li>
    <li>Before you check the status, predict what it will say. Then, check the current status.</li>
    <li>Add <code>tasks.md</code> to the staging area.</li>
    <li>Make your first commit in this directory.</li>
    <li>Before you check the status, predict what it will say. Then, check the current status.</li>
    <li>Use Atom to add three separate tasks to <code>tasks.md</code>.</li>
    <li>Before you check the status, predict what it will say. Then, check the current status.</li>
    <li>Before you check the difference between your last commit and what the file looks like now, predict what it will say. Then, check the diff.</li>
    <li>Add the changes to the staging area.</li>
    <li>Before you check the status, predict what it will say. Then, check the current status.</li>
    <li>Commit the changes using a properly formatted commit message.</li>
    <li>Before you check the status, predict what it will say. Then, check the current status.</li>
  </ol>
  <p><strong>Done?</strong> Switch drivers and try the process again!</p>
</div>

<a name="troubleshooting"></a>
<div class="things-to-note">
  <h4>Things to Note: Oh no, my terminal is broken!</h4>
  <ol>
    <li> It is highly likely you will make mistakes in the terminal. Do not fret, there are a few tools to save you when you inevitably receive unexpected feedback or behavior from the terminal.</li>
    <li><code>control + C</code> shortcut will stop most terminal tasks and bring you back to your current directory with no harm done. Try this first when you encounter unexpected behavior.</li>
    <li>At some point your terminal will look like it does in the photo below. This is Vim land. Vim is a text editor within your terminal that is beyond the scope of mod-0. When you find yourself here, you can type: <code>:q</code>, which stands for quit in Vim, and then hit enter to exit Vim. Sometimes, if you've already typed some characters, you need to use <code>control + C</code>in order to get to a point within Vim where <code>:q</code> or <code>:qa!</code>, which is the command to quit and abandon changes, will successfully exit Vim.</li>
      <img src="images/vim_land.png" alt="">
  </ol>
</div>

## Mistakes in the terminal

<a href="https://www.loom.com/share/f05362155f5f4e1c959e92c94776e98e">Terminal Mistakes Screencast</a>

## Close Out

Understanding git and the workflow can be tricky at first; however, this pattern is one that you will come to memorize over time. As you are memorizing the steps, be sure that you know **what** each step does.

Today (and during Mod 0), we'll just be moving forward in time using git. We won't learn how to go back in time, but it's important to understand and main making small commits before adding in new git functionality.

We do not expect you to have these steps and reasons memorized right now. You can always reference back to this tutorial (or other tutorials that you find online). The more you practice, the easier it will become.

Check out this great resource from built by Turing instructor Amy Holt: https://learn-terminal.turing.io/

## Homework

Find the homework in your Mod 0 Project Board. Post in the Mod 0 Slack channel if you're stuck (and don't be afraid to help each other out).


### Asking questions

Now that we're working on some more technical subjects, be sure to provide as much context as possible in your slack questions. They'll help you get an answer faster and that answer will be more accurate. Use [this guide](https://gist.github.com/ericweissman/fb0241e226227867b6bc70a4d49227f5) to ask good questions!
