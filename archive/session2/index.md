<!-- ---
layout: page
title: Session 2
subheading: Git
---

## Learning Goals

- Use the Driver-Navigator technique to collaborate
- Explain the purpose of Git
- Initialize, add, and commit changes in a local repository 

## Agenda

- Housekeeping, Feedback and Goals
- Calendars and Time Management
- Git Basics
- Closing and Announcements

## Housekeeping, Feedback, and Goals

You will be screensharing your Terminal today. If you have programs open that might be distracting (or you have confidential work open), close or minimize those programs now.

<div class="try-it">
  <h3>Intros and Review</h3>
  <ol>
    <li>Introduce yourself: name, pronouns</li>
    <li>What is one of your strengths and how can you apply that to Turing and your new career?</li>
    <li>What was your biggest takeaway from Session 1?</li>
    <li>What is a question you still have from Session 1?</li>
  </ol>
</div>

<div class="try-it">
  <h3>SSH Check</h3>
  <p>In your Terminal (use shortcuts if you can) check if your SSH keys are configured correctly by running the command below and seeing a success message:</p>
  <pre>$ ssh -T git@github.com
Hi ~~your_username~~! You've successfully authenticated, but GitHub does not provide shell access.</pre>
</div>

## Calendars and Time Management

In the Homework you did after Session 1, you created a calendar for how you will use your time in Mod 0. Not only is that it important to manage your time well during Mod 0, but the exercise supports your skill development in calendaring and time management as it will be essential while in Turing, and likely, on the job as a developer.

Because it is so important, some live time will be spent giving general feedback and guidance, as well as some work time for you to get feedback on and modify your calendars.

### Things To Look For

Strengths:
- Time dedicated to personal life _and_ school/professional life
- Time built in to reflect on calendar, adjust for upcoming week
- Use of color-coding to differentiate task/event types
- Benchmark goals set in calendar (i.e., 8 events are titled "Mod 0 Project", but each has an additional note saying which section will be worked on _and/or_ a separate calendar event titled something like, "GOAL: Have Section 2 of Mod 0 Project complete")

Pitfalls:
- Long blocks of time dedicated to a general task (i.e., "3 hours Studying" or "4 hours Errands")
- Context shifting too quickly (i.e., 30 minutes on a task directly followed by 30 minutes on a very different one)

<div class="try-it">
  <h3>Calendar Workshop</h3>
  <p>Open up your calendar and be ready to screenshare your calendar with your small group. The person with the largest number of siblings will go first. When it is your turn:</p>
  <ul>
    <li>Screenshare your calendar</li>
    <li>Ask for feedback - general notes and/or on any concerns you have</li>
    <li>Ask clarifying questions if necessary and write down notes from classmates</li>
  </ul>
</div>

<div class="things-to-note">
  <h3>Independent Reflection and Work Time</h3>
  <p>Spend a few minutes reflecting on the calendars you saw in your Breakout Room and the feedback discussed.</p>
  <ul>
    <li>What changes do you need to make to your calendar? When will you do that?</li>
    <li>How did it feel to exchange live feedback with your peers in the Breakout Room? It might have felt awkward or uncomfortable - both to give/receive feedback and to be put on the spot and share your work. We provide that experience so you get used to that environment as it is an every day reality at Turing and as a software developer. Use this as an opportunity to consider how you will engage in those sessions to make the most of your professional community!</li>
  </ul>
</div>

<br>

## Git

<span class="vocab">Git</span> is a Version Control System (VCS). It allows you to save work on your project, and reference previous states of a project if needed. Normally when we save something on our computer, the newer version overwrites the older version. This is problematic if we need to look back at an earlier version. Git solves this problem by providing you multiple save points. You can get the current version, and ANY previous version. Git’s philosophy: never lose anything.

Git works similarly to the way that Google Docs tracks changes across time. Let's take a brief detour to [this Google doc](https://docs.google.com/document/d/1GY5lg6kVY7JzD9qr0kcn_Ct7St-USf72JxTFQ6hu7KQ/edit?usp=sharing).

### Why Use Git?

There are numerous reasons to use git. Among them:

- The ability to "go back in time" to previous versions of your code if you break something
- The ability to "go back in time" to previous versions of your code if you change your mind about a feature
- The ability to chunk parts of your work so that you can choose from chunks to keep at a later time
- The ability to work collaboratively on the same project (even the same files!)
- The ability to use branches to separate features of a program
- The ability to track who made specific changes to specific files

In this section on git, we'll learn (or review) these git commands:

**Action Commands:**
<ul>
  <li><a href="#init" title="">git init</a></li>
  <li><a href="#add" title="">git add</a></li>
  <li><a href="#commit" title="">git commit</a></li>
</ul>

**Safe/Informative Commands:**
<ul>
  <li><a href="#status" title="">git status</a></li>
  <li><a href="#diff" title="">git diff</a></li>
</ul>

<div class="things-to-note">
  <h3>Things to Note</h3>
  <p>Git has a steep learning curve, and it can be confusing at the beginning. Tonight's session is not meant to make you a Git expert, but it will expose you to the basic Git commands and workflow. Most likely, you will not have the commands or workflow memorized after tonight.</p>
  <p>To get comfortable with Git (just like with anything else), you will need to put in hours of practice. It's an excellent idea to go back over this session (either in print or recording) multiple times.</p>
</div>

Watch and take notes during the demonstration of the Git workflow. After the demonstration, we'll move into breakout rooms where you'll get to practice.

## Git Workflow

We'll start with a directory called `notes` with a file inside called `things_to_remember.md`.

### 1. Start Tracking a Directory With Git (<span class="vocab">git init</span>)

By default, your changes will not be tracked. In order to tell git that we want to start tracking something, we need to initialize git in a directory.

```
timo@Tims-MacBook-Pro:~/notes$ git init
Initialized empty Git repository in /Users/timo/notes/.git/
```

This means Git now **HAS THE ABILITY** to track changes in the `notes` directory. This does **not** mean that Git _is_ tracking anything yet. Git is now prepared to track activity in the `notes` directory

*NOTE*: If you don't see this message when you run `git init`, it means you have not set up Git on your computer.

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
      <p>Then every file inside that directory, regardless of how deeply nested, would be available for Git tracking.</p>
      <p><strong>Do not run the <code>git init</code> command more than once in the same directory or in child directories of the directory you initially ran it from. It will never be the answer to the problem you are facing</strong></p>
      <p>2. Empty directories are <strong>not</strong> tracked by Git. Therefore, if you create a directory but there's nothing inside of it, git will ignore it. Git will only track it when there is a file inside of the directory.</p>
    </div>
  </div>
  <br>
  <p>3. What happens if you accidentally initialize Git in a directory where you didn't intend?</p>
  <p>When you run <code>git init</code>, a directory called <code>.git</code> is created inside of that folder. You can't see this folder using the <code>ls</code> command since it's a hidden folder. Everything that starts with "." is hidden. Instead, you can run <code>ls -a</code> which will display all hidden and visible files and directories.</p>
  <p>In a Git initialized directory, you'll see a <code>.git</code> directory. To remove git tracking, you would type:</p>
  <code>rm -rf .git</code>
  <p>This removes the Git directory, and you are no longer using Git to track your project. If you accidentally run <code>git init</code> in your home directory, and start tracking most of the files and directories on your entire computer, then remember to run <code>rm -rf .git</code> from your home directory. One way to tell if you've accidentally initialized Git in your home directory is to first go home by running:<code>cd ~</code> and then run: <code>git status</code>. If you see files being tracked but not staged for commit, then you need to remove the .git folder as layed out above. However, if your Terminal outputs:<code>fatal: Not a git repository (or any of the parent directories): .git</code>, then you are all good.</p>
</div>

### 2. Check the Status (<span class="vocab">git status</span>)

When you want to see what Git is tracking and the current status of files, you can use `git status`:

```
timo@Tims-MacBook-Pro:~/notes$ git status
On branch main

No commits yet

Untracked files:
  (use "git add <file>..." to include in what will be committed)

  things_to_remember.md

nothing added to commit but untracked files present (use "git add" to track)
```

`No commits yet` means that we haven't asked Git to save a version yet. You can think of a <span class="vocab">commit</span> as a snapshot of your work at a certain point in time. In the Google Doc, each save point was a commit. So far, we have no commits for our `notes` project.

`Untracked files` refers to the fact that even though we initialized a Git repository, we haven't started tracking anything yet. It lists the files that are available to track. (Also note "untracked files present" near the bottom).

<div class="things-to-note">
  <h4>Things to Note</h4>
  You can type <code>git status</code> as many times as you want, whenever, wherever. It it a safe command that will not change anything about your tracking.
</div>

Let's talk briefly about this diagram from the Git documentation. This diagram shows what you can do **after** you have initialized Git:

![git-diagram-light](https://user-images.githubusercontent.com/63985074/139125657-b581818f-e9c9-4efb-b441-28010c48b560.png)

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

Notice the "changes to be committed" section: It tells us that we have a new file, `things_to_remember.md`, that is ready to be committed. We can say that the `things_to_remember.md` file is in the <span class="vocab">Git staging area</span>. That means no changes are tracked yet, but we're ready to take a snapshot of it (we'll do this next).

This may seem silly right now, given that we only have one file -- why not just commit the file? Why do we have to add it first? Let's take a [small detour](https://gist.github.com/rwarbelow/e1340ca3eeb616851a1a48221f48b67b).


### 4. Take a Snapshot in Time (<span class="vocab">git commit -m &lt;message&gt;</span>)

Now that our file is in the staging area, let's tell Git that we're ready to commit (take a snapshot of this moment to save). It's good practice to use "Initial commit" for your very first commit in each repository.

```
timo@Tims-MacBook-Pro:~/notes$ git commit -m 'Initial commit'
[main (root-commit) b7654a6] Initial commit
 1 file changed, 1 insertion(+)
 create mode 100644 things_to_remember.md
```

Now if I check the status, this is the output I see:

```
timo@Tims-MacBook-Pro:~/notes$ git status
On branch main
nothing to commit, working tree clean
```

Let's figure out on the diagram what we just did:

![git-diagram-light](https://user-images.githubusercontent.com/63985074/139125657-b581818f-e9c9-4efb-b441-28010c48b560.png)

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

The basic Git workflow is as follows:

1. Make file changes in Atom
1. Check the `git status` to see what files are unstaged
1. Check the `git diff <filename>` to see what changes have happened since the last commit
1. `git add <whatever file you want to stage>`
1. Check the `git status` to make sure the correct files are in the staging area
1. `git commit -m 'Message about your changes'` to commit the changes

<a name="gitbreakout"></a>
<div class="try-it">
  <h3>Try It: Git Together</h3>
  <p>The person whose last name is first alphabetically will start by sharing their screen, <em>unless</em> this person already has significant Git experience. Whoever is sharing their screen will be called the <span class="vocab">driver</span>. The other person in the room will be a <span class="vocab">navigator</span>.</p>

  <p>The driver will be the person typing the commands, and the navigator should be the one who brainstorms what comes next or what to type. In addition to naming the steps, discuss <strong>why</strong> you are doing each step, or <strong>what</strong> exactly is taking place in each step.</p>

  <p>If you are already comfortable with Git, your challenge during the breakout is somewhat more difficult: your goal is to focus on your explanations, communication, and ability to gauge whether or not another person understands you.</p>
  <ol>
    <li>Navigate back to your home directory</li>
    <li>Create a new directory called <code>to_do</code>. Inside of that directory, create a file called <code>tasks.md</code>.</li>
    <li>Initialize Git inside of the <code>to_do</code> directory so that we have Git available to track changes.</li>
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
  <h4>Things to Note: Oh no, my Terminal is broken!</h4>
  <ol>
    <li>It is likely you will make mistakes in the Terminal. Do not fret, there are a few tools to save you when you inevitably receive unexpected feedback or behavior from the Terminal.</li>
    <li><code>control + C</code> shortcut will stop most Terminal tasks and bring you back to your current directory with no harm done. Try this first when you encounter unexpected behavior.</li>
    <li>At some point your Terminal will look like it does in the photo below. This is Vim land. Vim is a text editor within your Terminal that is beyond the scope of mod-0. When you find yourself here, you can run: <code>:q</code>, which stands for quit in Vim, and then hit enter to exit Vim. Sometimes, if you've already typed some characters, you need to run <code>ctrl + c</code>in order to get to a point within Vim where <code>:q</code> or <code>:qa!</code>, which is the command to quit and abandon changes, will successfully exit Vim.</li>
      <img src="images/vim_land.png" alt="">
  </ol>
</div>

### Mistakes in the Terminal

<a href="https://www.loom.com/share/f05362155f5f4e1c959e92c94776e98e">Terminal Mistakes Screencast</a>

<br>

## Closing and Announcements

Understanding Git and the workflow can be tricky at first; however, this pattern is one that you will come to memorize over time. As you are memorizing the steps, be sure that you know **what** each step does.

Today (and during Mod 0), we'll just be moving forward in time using Git. We won't learn how to go back in time, but it's important to understand and main making small commits before adding in new Git functionality.

We do not expect you to have these steps and reasons memorized right now. You can always reference back to this tutorial (or other tutorials that you find online). The more you practice, the easier it will become.

### Homework

Find the Homework in your Mod 0 Project Board. Post in the Mod 0 Slack channel if you have questions as you work through it (and don't be afraid to help each other out).

<br><br> -->