<!-- ---
layout: page
title: Session 3
subheading: GitHub
---

## Learning Goals

- Use the Driver-Navigator technique to collaborate 
- Collaborate synchronously with fellow students
- Create your own repository on GitHub
- Push local changes to a remote

## Agenda

- Housekeeping
- Git Warm Up/Review
- GitHub
- Closing and Announcements

## Housekeeping

<div class="try-it">
  <h3>Intros and Review</h3>
  <p>Person with their birthday coming up next starts.</p>
  <ol>
    <li>Introduce yourself: name, pronouns</li>
    <li>What metaphor would you use to describe the Git staging area?</li>
    <li>Review the following Git commands. What is the purpose of each one?</li>
      <ul>
        <li>git init</li>
        <li>git add</li>
        <li>git commit -m</li>
        <li>git status</li>
        <li>git diff</li>
      </ul>
  </ol>
  <p>Have extra time? Share helpful resources you've come across.</p>
</div>

## Git Review

Let's talk once more about this Git diagram.

![git-diagram-light](https://user-images.githubusercontent.com/63985074/139125657-b581818f-e9c9-4efb-b441-28010c48b560.png)

We'll start by repeating the group Git exercise from the last session. This may seem repetitive, but each time you practice, you'll gain muscle memory and procedural understanding.

Today's <span class="vocab">driver</span> will be the person who was born closest to the state of Indiana. Everyone else will be <span class="vocab">navigators</span>. **Driver**: remember not to type anything that has not yet been brought up by a navigator and discussed in the group.

The <span class="vocab">driver</span> will be the person typing the commands, but the <span class="vocab">navigators</span> should be the ones who brainstorm what comes next or what to type. In addition to naming the steps, discuss **why** you are doing each step, or **what** exactly is taking place in each step.

**Remember:** If you feel comfortable with Git, your job is to hone your explanation and communication skills. Many companies in the industry place far more weight on these professional skills than on being a technical superstar.

<div class="try-it">
  <h3>Try It: Git Review</h3>
  <p>As you and your partner work through the Git review below, it might be a good idea to have Session 2's Git notes open.</p>
  <ol>
    <li>Before you start, make sure the driver is in the home directory by running <code>cd</code></li>
    <li>Create a new directory called <code>session_3_git_practice</code>. Inside of that directory, create three files called <code>coding_languages.md</code>,<code>programming_terms.md</code>, and<code>git_terms.md</code></li>
    <li>Initialize Git in the <code>session_3_git_practice</code> directory.</li>
    <li>Before you check the status, predict what the output will be. Then, run the command to check the current status</li>
    <li>Add <code>coding_languages.md</code> to the staging area</li>
    <li>Make your first commit in this directory. What should the commit message here be?</li>
    <li>Before you check the status, predict what the output will be. Then, check the current status</li>
    <li>Add <code>programming_terms.md</code> and<code>git_terms.md</code> to the staging area</li>
    <li>Make your second commit in this directory. This commit should include both files from the previous step. What should the commit message here be? Why? What conventions have we talked about?</li>
    <li>Use Atom to add the names of two separate coding languages to <code>coding_languages.md</code>. You may Google "programming languages" if you can't think of any</li>
    <li>Before you check the status, predict what the output will be. Then, check the current status</li>
    <li>Before you check the difference between your last commit and what the file looks like now, predict what the output will be. Then, check the difference</li>
    <li>Add the changes to the staging area</li>
    <li>Before you check the status, predict what the output will be. Then, check the current status</li>
    <li>Commit the changes using a properly formatted commit message</li>
    <li>Before you check the status, predict what the output will be. Then, check the current status</li>
    <li>Repeat steps 10-16 again, adding the names of some programming terms and some Git terms to the respective files</li>
    <li>Add and commit the changes to these two files <strong>together</strong> with a properly formatted commit message</li>
  </ol>
  <p><strong>Finished Early? Switch driver and navigator roles, and work through this again.</strong></p>
</div>

## GitHub

> Note: throughout this session, your instructors may use the terms "repository" and "repo" interchangeably; "repo" is short for "repository".

**Git is not the same as GitHub.** They work together, but they are separate tools. Git allows us to track versions of our work on our local computers. <span class="vocab">GitHub</span> is an online Git repository hosting service. A <span class="vocab">repository</span> (or <span class="vocab">repo</span>) is at its core, a place where your work and commits are stored.

Other alternatives to GitHub include GitLab and BitBucket, among others. GitHub (and these other services) also makes it easy for teams that use Git to collaborate on the same codebase.

During Mod 0, we will not be exploring the collaborative functionality of GitHub. We're going to focus on learning the basic functionality of GitHub.

Let's first discuss this diagram:

![git-github-light](https://user-images.githubusercontent.com/63985074/139126293-3ba6d640-da5d-4c6d-9dcb-5d5ef52ff684.png)

<p><small><em>Source: http://frontend.turing.io/assets/images/lessons/git/github-diagrams.002.jpeg</em></small></p>

<span class="vocab">origin</span>: refers to the URL where the code is hosted on GitHub. Each repository has its own origin (own URL).

<span class="vocab">git pull</span>: means download all of the changes and updates on the remote GitHub repository that I don't currently have on my local repository. You would use `git pull` after a teammate makes a change to the code, and you want to bring those changes into your own code.

<span class="vocab">git push</span>: this is how you share/upload the changes you made to your local repository on GitHub.

This diagram shows how GitHub can be used as a collaboration tool:

![github-collab-light](https://user-images.githubusercontent.com/63985074/139126462-33c7c8f1-b18e-4003-bf35-32b6d4cfad1f.png)

<small><em>Source: https://www.quora.com/What-is-git-and-repository</em></small>

Let's take a look at an example of a repository on GitHub: <a href="https://github.com/freeCodeCamp/freeCodeCamp" title="">FreeCodeCamp</a>

<hr>

### Creating a Remote Repository on GitHub

Watch and take notes while we walk through how to add a remote to your local repository. This assumes we already have a repository initialized with Git locally.

1. Visit <code>github.com/your_username</code>
1. Click the plus button in the upper-right corner of GitHub and select "New Repository" from the dropdown.
1. Give your repository a name, and don't worry about adjusting any of the other settings for now.
1. Scroll down and click "Create Repository"
1. Scroll to `…or push an existing repository from the command line`
1. Paste the lines listed, one at a time, in your terminal. <strong>Make sure to follow instructions for SSH</strong>
1. Refresh GitHub. Tada! Your project is there.

<div class="try-it">
  <h3>Try It: Adding a Remote</h3>
  <p>Determine who will be the driver and who will be the navigator(s). The driver should be screen shaing.</p> 
  <ol>
    <li>Create a new repository on GitHub called <code>git_homework</code>.</li>
    <li>In your Terminal, navigate to your <code>git_homework</code> directory from session 2's homework. <em>If for some reason you don't have this directory then use the <code>mkdir</code> command to create <code>git_homework</code>. Then use <code>touch</code> to create a file called<code>sample_file.md</code>. Then run <code>git init</code>. <b>Only do this if you don't already have a <code>git_homework</code> repository.</b></em></li>
    <li>Add the remote to your local repository, then push your changes to GitHub.</li>
  </ol>
  <p>Switch roles and work through the exercise again. It is essential that all students have this activity completed in order to start the next one.</p>
</div>

### Making Additional Changes and Pushing to GitHub

Watch and take notes while we walk through how to continue making changes and pushing those changes to GitHub.

<div class="try-it">
  <h3>Try It: Full Git Workflow</h3>
  <p>In your breakout rooms, <strong>everyone</strong> will complete the steps below synchronously, but on your own projects. Use each other as resources and sounding boards. Don't hesitate to click "share screen" if there's something you want your team to look at!</p>
  <p>If you get really stuck, you can click "ask for help" and we'll pop into your room.</p>
  <ul>
    <li>Add a few new thoughts to your <code>thoughts.md</code> file.</li>
    <li>Save your file using the shortcut <code>command + s</code>.</li>
    <li>Go back to your terminal.</li>
    <li>Use commands to <b>add</b> and <b>commit</b> your new changes. Be sure to use <code>git status</code> to check your status, and make sure your commit message is properly formatted.</li>
    <li>Push your new changes to GitHub.</li>
    <li>Refresh the page to make sure the new changes appear.</li>
    <li>Repeat the above steps, but this time, remove one of the thoughts from your <code>thoughts.md</code> document, then add, commit, and push your changes.</li>
  </ul>
  <p>Finished? Get to know your breakout room classmates better: What are they trying to get better at in life? What book would the recommend that everyone read at least once in life?</p>
</div>

### Forking

<span class="vocab">Forking</span> allows you to copy someone else's project while still keeping a reference to the original. To fork an existing project, you just click the `fork` button, which will make a copy of all of the code and directory structure to your own GitHub account.

You can tell if something is a fork because it will say "forked from [original repository name]" underneath the title.

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
    <li><strong>Never</strong> clone a remote repository within a preexisting <span class="vocab">Git</span> repository. If you watched the video for modifying your <code>.zshrc</code>, then you will see <code>main</code> if you're already in a Git repository.</li>
    <li>After cloning a repository, remember to <code>cd</code> into the directory you just cloned to your machine before running commands. If you cannot remember what the directory is called then run<code>ls</code> after cloning to see the contents of your current directory.</li>
    <li>There is no need to run <code>git init</code> within a repository that you cloned down to your local machine. Remote repositories that you clone to your local machine have already been initialized by Git. You only ever need to run <code>git init</code> when you've created a repository locally from scratch. If you mess this one up, it's not going to cause any problems; it's just unnecessary.</li>
    <li><strong>Don't</strong> use "Initial commit" as your commit message for a cloned repository. Whoever made the repository already did that. You only need "Initial commit" when you make a new repository for yourself.</li>
  </ul>
</div>

<div class="try-it">
  <h3>Try It: Forking</h3>
  <p>Each student should complete this exercise on their own machine. Before starting, the members of each Breakout Room should establish if they want to go at their own pace, or do each step together. If a team decides to work at different paces, ensure you check in with each other throughout and after the exercise.</p>
  <ol>
    <li>Fork the <a href="https://github.com/turingschool/best_animals" title="Best Animals">Best Animals</a> repository.</li>
    <li>Clone <strong>your</strong> fork using your Terminal</li>
    <li>Open up the project in your text editor (Atom)</li>
    <li>Add a few animals to the mammals.md file</li>
    <li>Add and commit your changes</li>
    <li>Push your changes to the origin (which is your fork)</li>
  </ol>
  <p>Done? Check in on your peers. Then, repeat steps 4-6 with another animal file.</p>
</div>

## Closing and Announcements

Reminders:
- The Homework for Session 3 will follow the same patterns as established in Homeworks 1 and 2. Please post a message in the Mod 0 Slack channel if you need any support!
- It is recommended that you complete _at least_ Sections 0 and 1 of the Mod 0 Project by the time you attend Session 4. It is your responsibility to manage your time towards this deadline.

<br><br> -->