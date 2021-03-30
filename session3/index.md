---
layout: page
title: Session 3
subheading: More Git and Intro to GitHub
---
### Goals
**By the end of this session, you will be able to:**    
- practice pseudocoding approach and implementation
- create your own repository on GitHub
- push local changes to a remote
- fork and clone an existing repository

### Agenda
**6:15** - Housekeeping, Feedback + Goals
**6:25** - Psuedocoding Practice
**6:55** - Break
**7:00** - GitHub 
**8:25** - Wrap Up

### Materials
- Notebook
- Writing instrument
- Laptop
- Headphones & mic
- Zoom permission to share screen for breakout sessions

## Housekeeping, Wins/Follow-Ups, and Goals

### Wins

- Most common answer to git question from survey: "I can name the steps of the git workflow and can put them in practice (using a reference)."
- This is expected, and we use references as programmers on the job all the time, at some point it'll be muscle memory
- Great job asking and answering each others questions in the slack channel!

### Follow-Ups

- We're in the process of leaving feedback on everyone's homework, be sure to check your gists!
  - Suggestions and feedback are there for your benefit
- Make sure that you're checking Slack at least once a day
- Be sure to stay at your home (root) directory or below

### Warm Up

<a name="ssh-check"></a>

#### SSH Check

In your terminal (use shortcuts if you can) check if your ssh keys are configured correctly by running the command below and seeing a success message:

```
$ ssh -T git@github.com
Hi <your_username>! You've successfully authenticated, but GitHub does not provide shell access.
```

In the Slack thread, reply with your output after running the `$ ssh -T git@github.com` command!

<div class="try-it">
  <h3>Intros, Review, and Icebreaker</h3> groups of 2 or 3 (5 minutes)
  <p>Person with the lightest color shirt speaks first.</p>
  <p>1. Introduce yourself: name, pronouns</p>
  <p>2. Share: What is your favorite cold weather activity? When's the last time you did it?</p>
  <p>3. What metaphor would you use to describe the git staging area?</p>
  <p>Have extra time? Share helpful resources you've come across.</p>
</div>

### Psuedocode Practice: Counting Sheep

Look at this collection of data...

`[false, false, true, false, false, true, true, false, false, false]`

Each `true` represents a piglet.

Each `false` represents a sheep.

Write a function that can count the number of sheep in the collection.

See example below (remember, it is OK if you don't understand exactly what is happening in the code!)

```
[false, false, false] >>> returns "Oink! Oink! Only little piglets here!"
[true, false, false] >>> returns "There is 1 sheep in the barn."
[true, true, false] >>> returns "There are 2 sheep in the barn."
```

Write pseudocode to explain how you would approach finding the number of sheep in the barn - remember, the smaller you can break up the "steps" the better!

#### 3 minutes - on your own
- How can you break this problem down into smaller chunks or sub-problems?
- What steps are needed to get from the initial data (input) to the desired end result (output)?
- Are there any "edge" cases you need to check?
#### 5 minutes - in groups 
- In groups, take turns sharing your psuedocode
- As a group, come up with a Team Solution that can borrow parts from all the different group members!
#### 10 minutes - Share Outs + Walkthrough

<a name="gitreview"></a>
## Git Review - groups of 2 or 3 (10 minutes)

Let's talk once more about this Git diagram.

![Git Workflow Diagram](https://git-scm.com/book/en/v2/images/lifecycle.png)
<small><em>Source: https://git-scm.com/book/en/v2/Git-Basics-Recording-Changes-to-the-Repository</em></small>

We'll start by repeating the group git exercise from the last session. This may seem repetitive, but each time you practice, you'll gain muscle memory and procedural understanding.

Today's <span class="vocab">driver</span> will be the person who was born closest to the state of Indiana. Everyone else will be <span class="vocab">navigators</span>. **Driver**: remember not to type anything that has not yet been brought up by a navigator and discussed in the group.

The <span class="vocab">driver</span> will be the person typing the commands, but the <span class="vocab">navigators</span> should be the ones who brainstorm what comes next or what to type. In addition to naming the steps, discuss **why** you are doing each step, or **what** exactly is taking place in each step.

**Remember:** If you feel comfortable with git, your job is to hone your explanation and communication skills. Many companies in the industry place far more weight on these professional skills than on being a technical superstar.

<div class="try-it">
  <h3>Try It: Git Review</h3>
  <p>As you and your group walk through the git review below, it might be a good idea to have Session 2's Git notes open.</p>
  <ol>
    <li>Before we do this, make sure the driver is in the home directory by typing <code>cd</code></li>
    <li>Create a new directory called <code>session_3_git_practice</code>. Inside of that directory, create three files called <code>coding_languages.md</code>,<code>programming_terms.md</code>, and<code>git_terms.md</code>.</li>
    <li>Initialize git in the <code>session_3_git_practice</code> directory.</li>
    <li>Before you check the status, predict what the output will be. Then, run the command to check the current status.</li>
    <li>Add <code>coding_languages.md</code> to the staging area.</li>
    <li>Make your first commit in this directory. What should the commit message here be?</li>
    <li>Before you check the status, predict what the output will be. Then, check the current status.</li>
    <li>Add <code>programming_terms.md</code> and<code>git_terms.md</code> to the staging area.</li>
    <li>Make your second commit in this directory. This commit should include both files from the previous step. What should the commit message here be? Why? What conventions have we talked about?</li>
    <li>Use atom to add the names of two separate coding languages to <code>coding_languages.md</code>. You may Google "programming languages" if you can't think of any.</li>
    <li>Before you check the status, predict what the output will be. Then, check the current status.</li>
    <li>Before you check the difference between your last commit and what the file looks like now, predict what the output will be. Then, check the diff.</li>
    <li>Add the changes to the staging area.</li>
    <li>Before you check the status, predict what the output will be. Then, check the current status.</li>
    <li>Commit the changes using a properly formatted commit message.</li>
    <li>Before you check the status, predict what the output will be. Then, check the current status.</li>
    <li>Repeat steps 10-16 again, adding the names of some programming terms and some git terms to the respective files.</li>
    <li>Add and commit the changes to these two files <strong>together</strong> with a properly formatted commit message.</li>
  </ol>
  <p><strong>Finished before time is up? Repeat, but choose a different driver this time.</strong></p>
</div>

<a name="github"></a>
## GitHub

Git is not the same as GitHub. They work together, but they are separate tools. Git allows us to track versions of our work on our local computers. <span class="vocab">GitHub</span> is an online git repository hosting service. A <span class="vocab">repository</span> (or <span class="vocab">repo</span>) is at its core, a place where your work and commits are stored.

Other alternatives to GitHub include GitLab and BitBucket, among others. GitHub (and these other services) also makes it easy for teams that use git to collaborate on the same codebase.

During Mod 0, we will not be exploring the collaborative functionality of GitHub. We're going to stick to learning the basic functionality of GitHub.

Let's first discuss this diagram:

![Github Diagram](http://frontend.turing.io/assets/images/lessons/git/github-diagrams.002.jpeg)

<p><small><em>Source: http://frontend.turing.io/assets/images/lessons/git/github-diagrams.002.jpeg</em></small></p>

<span class="vocab">origin</span>: refers to the URL where the code is hosted on GitHub. Each repository has its own origin (own URL).

<span class="vocab">git pull</span>: means download all of the changes and updates on the remote GitHub repo that I don't currently have on my local repo. You would use git pull after a teammate makes a change to the code, and you want to bring those changes into your own code.

<span class="vocab">git push</span>: this is how you share/upload the changes you made to your local repository on GitHub.

This diagram shows how GitHub can be used as a collaboration tool:

![Collaborative Github Diagram](https://qph.fs.quoracdn.net/main-qimg-a161bdd97e4e0de40d999ac222fe2008.webp)

<small><em>Source: https://www.quora.com/What-is-git-and-repository</em></small>

Let's take a look at an example of a repo on GitHub: <a href="https://github.com/freeCodeCamp/freeCodeCamp" title="">FreeCodeCamp</a>


## BREAK

Turn off your mics and videos and walk away from the computer. Stand up, stretch, drink water. Do a few sit-ups, squats, push-ups, jumping jacks, arm circles, stress ball squeezes, or whatever else moves your body.
<hr>

### Creating a Remote Repo on GitHub

Watch and take notes while we walk through how to add a remote to your local repository. This assumes we already have a repository initialized with git locally.

1. Visit <code>github.com/your_username</code>
1. Click the plus button in the upper-right corner of GitHub and select "New Repository" from the dropdown.
1. Give your repository a name, and don't worry about adjusting any of the other settings for now.
1. Scroll down and click "Create Repository"
1. Scroll to `…or push an existing repository from the command line`
1. Paste the lines listed, one at a time, in your terminal. <strong>Make sure to follow instructions for SSH</strong>
1. Refresh Github. Tada! Your project is there.

<div class="try-it"> groups of 3 or 4 (8 minutes)
  <h3>Try It: Adding a Remote</h3>
  <p>1. Create a new repository on GitHub called <code>git_homework</code>.</p>
  <p>2. In your terminal, navigate to your <code>git_homework</code> directory from session 2's homework.</p>
  <p>If for some reason you don't have this directory then use the <code>mkdir</code> command to create <code>git_homework</code>. Then use <code>touch</code> to create a file called<code>sample_file.md</code>. Then run <code>git init</code>. <b>Only do this if you don't already have a <code>git_homework</code> repo.</b></p>
  <p>3. Add the remote to your local repository, then push your changes to GitHub.</p>
</div>

### Making Additional Changes and Pushing to GitHub

Watch and take notes while we walk through how to continue making changes and pushing those changes to GitHub.

<div class="try-it">
  <h3>Try It: Full Git Workflow</h3> groups of 3 or 4 (10 minutes)
  <p>In your breakout rooms, <strong>everyone</strong> will complete the steps below synchronously, but on your own projects. Use each other as resources and sounding boards. Don't hesitate to click "share screen" if there's something you want your team to look at!</p>
  <p>If you get really stuck, you can click "ask for help" and we'll pop into your room.</p>
  <ul>
    <li>Add a few new thoughts to your <code>thoughts.md</code> file.</li>
    <li>Save your file using the shortcut <code>command + s</code>.</li>
    <li>Go back to your terminal.</li>
    <li>Use commands to add and commit your new changes. Be sure to use <code>git status</code> to check your status, and make sure your commit message is properly formatted.</li>
    <li>Push your new changes to GitHub.</li>
    <li>Refresh the page to make sure the new changes appear.</li>
    <li>Repeat the above steps, but this time, remove one of the thoughts from your <code>thoughts.md</code> document, then add, commit, and push your changes.</li>
  </ul>
  <p>Finished? Get to know your breakout room classmates better: What are they trying to get better at in life? What book would the recommend that everyone read at least once in life?</p>
</div>

<a name="forkclone"></a>
## Forking

#### What is Forking?

<span class="vocab">Forking</span> allows you to copy someone else's project while still keeping a reference to the original. To fork an existing project, you just click the `fork` button, which will make a copy of all of the code and directory structure to your own GitHub account.

You can tell if something is a fork because it will say "forked from [original repo name]" underneath the title.

Once you've forked a repo, click the green "Clone" button to get the URL to clone.

```
git clone <insert URL here>
```

If you fork, clone, make changes, and push to origin, it will work because it's pushing to **your forked origin** (YOUR account), not the original repository (ORIGINAL CREATOR's account). To push those changes:

```
git push
```

OR

```
git push origin main
```

(In our case today, both commands will do the same thing)

<div class="things-to-note">  
  <h4>Things to Note: Cloning with Git</h4>
  <ul>
    <li><strong>Never</strong> clone a remote repository within a preexisting <span class="vocab">Git</span> repository. If you watched the video for modifying your <code>.zshrc</code>, then you will see [main] if you're already in a git repository.</li>
    <li>After cloning a repository, remember to <code>cd</code> into the directory you just cloned to your machine before running commands. If you cannot remember what the directory is called then run<code>ls</code> after cloning to see the contents of your current directory.</li>
    <li>There is no need to run <code>git init</code> within a repository that you cloned down to your local machine. Remote repositories that you clone to your local machine have already been initialized by git. You only ever need to run <code>git init</code> when you've created a repository locally from scratch. If you mess this one up, it's not going to cause any problems; it's just unnecessary.</li>
    <li><strong>Don't</strong> use "Initial commit" as your commit message for a cloned repository. Whoever made the repository already did that. You only need "Initial commit" when you make a new repository for yourself.</li>
  </ul>
</div>

<div class="try-it">
  <h3>Try It: Forking</h3> groups of 3 or 4 (8 minutes)
  <ol>
    <li>Fork the <a href="https://github.com/turingschool/best_animals" title="Best Animals">Best Animals</a> repository.</li>
    <li>Clone <strong>your</strong> fork using your terminal.</li>
    <li>Open up the project in your text editor (atom).</li>
    <li>Add a few animals to the mammals.md file.</li>
    <li>Add and commit your changes.</li>
    <li>Push your changes to the origin (which is your fork).</li>
    <p>Done? Repeat steps 4-6 with another animal file.</p>
  </ol>
</div>


## Remote Collaboration Using GitHub: A Primer
The workflows we outlined above are common patterns you will follow when working on projects for yourself. However, the real "magic" of using GitHub is it allows you to work collaboratively with teammates on the same repository/project.

### Branching
When working on collaborative projects, it is best for each group member to be working on their own `branch`. Think of a branch as a part of the overall project (tree), but a branch can go in it's own direction. Developers will often use a separate branch to work on a particular piece of functionality, usually referred to as a `feature`. This allows multiple developers to be working on separate pieces of an application simultaneously!

### Pull Requests + Code Reviews
When a developer has finished their feature, they will push their feature branch up to GitHub for their teammates to review. This process is known as making a `pull request` - essentially asking the other developers on the team to "pull down" the new code from GitHub, test it's functionality, and leave any feedback or requests for changes. Typically, teammates should review:
- Does the code meet the quality standards as outlined by the team/organization?
- Does the code "play nice" with the other features of the application? Or does it cause bugs?
- Are there places that can be refactored or the code improved to make it easier for other developers to build on top of it?

Pull requests are essentially requests to merge the new changes from the feature branch to the project's `main` branch. Once everyone from the team has had a chance to review the code, request adjustments, and fix any merge conflicts (issues that the new code causes with older code) - they can either approve or reject the request.
- Approving the request will allow the new feature to be merged into the `main` branch of the project
- Rejecting the request will prevent the new feature from being merged into the `main` branch of the project

Typically, you do not want to merge your own pull request - this would prevent anyone else from reviewing it and giving valuable feedback!

### Why Does This Matter?
- The pull request process allows for all team members to view, test, and provide feedback on anyone's code
- Hiring managers will often look at your code review comments and pull requests on your projects to gauge your ability to collaborate in a remote environment
- This is the one of the first tools you will learn to use that will help you prevent "shipping" (approving) unstable code in your production environemnt (the "public" version of your app)

<a name="homework"></a>
## Homework

Business as usual. Reach out on slack if you're stuck!
