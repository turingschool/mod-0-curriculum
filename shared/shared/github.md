---
layout: lesson
title: GitHub
---

## Preview

Before attending class, students should complete the <a href="./github-pw" target="blank">GitHub Preview</a> assignment.

## Learning Goals

- Create, fork, and clone repositories
- Connect a local repository to a remote repository
- Push and pull work between local and remote repositories
- Navigate the key information provided about a repository on the GitHub interface

## Vocabulary

- <span class="vocab">clone</span>
- <span class="vocab">fork</span>
- <span class="vocab">local</span>
- <span class="vocab">remote</span>
- <span class="vocab">pull</span>
- <span class="vocab">push</span>

## Warm Up

<div class="s-card">
  <h3>Discussion</h3>
  <p>What does it mean to <span class="vocab">clone</span> a repository?</p>
  <p>How does one clone a repository?</p>
  <p>What is the difference between HTTPS and SSH, and which should we use? Why?</p>
</div>
<br>

<div class="s-card">
  <h3>Waterfall</h3>
  <p>In the context of GitHub, what is a <span class="vocab">fork</span>?</p>
</div>
<br>

## Connecting a Local and Remote Repository

There are many ways to create and connect <span class="vocab">local</span> (on your machine) and <span class="vocab">remote</span> (in the cloud) repositories. We can't go through every combination of ways to do that, so we will focus on one. Once you are comfortable with this, if you find another way to achieve the same outcome, you can absolutely use that.

1. Create a local Git repository.
1. Create a GitHub repository (do NOT check the box to create a README).
1. Follow the directions under `...or push an existing repository from the command line`, by running the following commands:
  - `git remote add origin git@github.com:USERNAME/REPO_NAME.git` This command tells the local repository to set the remote repository to this address. We refer to it as the `origin`.
  - `git branch -M main` You may not need to do this if you have already configured Git to name the default branch `main`.
  - `git push -u origin main` This sends the current version of the project up to the remote repository, and sets the `main` branch as the default branch to send work up to.
1. Refresh the browser tab GitHub is in - you should now see your repository!

<br>
What follows is a diagram that breaks down the anatomy of the `git push -u origin main` command:
<img src="./assets/command-anatomy.png" alt="Anatomy of git push -u origin main command">

<div class="s-card">
  <h3>Practice</h3>
  <p>Follow the four steps listed above to connect a local Git repository with a GitHub repository.</p>
</div>
<br>

## Pushing and Pulling Changes

- <span class="vocab">Pushing</span> work up to a repository is the act of using Git commands to send the current version of a local repository up to the remote repository.
- <span class="vocab">Pulling</span> work down is the act of using Git commands to retrieve the work on the remote repository so that it's available in the local repository.

After making 1 or more commits on a local repository, we can push our work up using the following command:

```bash
git push origin main
```

Since we used the `-u` in our original push to connect the two repos, we can technically use the following command to get the exact same outcome:

```bash
git push
```

After running this command, Git will send the message up to GitHub (you must be connected to the internet), and you'll get many lines of output, finally telling you the work was successfully sent up. Refresh the browser tab that GitHub is in, and the changes will be available there.

>For the extent of our use of Git and GitHub workflows _during Mod 0_, you will primarily be pushing work up. If you ever need to pull work down, the command `git pull origin main` can be used.

<br>

### Common Issues

Occasionally, the command to push work up will not be successful. When this happens, the user will usually see a message similar to this:
<img src="./assets/cannot-push.png" alt="Anatomy of git push -u origin main command">

Almost always, the message tells the user what the problem is and **exactly** what to do.

<div class="s-card s-border-yellow-500">
  <h3>Reading Error Messages</h3>
  <p>Read the error message in the screenshot above and be ready to share what you would try if you ran into this error.</p>
</div>
<br>

## Key Information on a GitHub Repository

Let's take a tour of <a href="https://github.com/letakeane/emotican-app" target="_blank">a GitHub repository</a> to identify some key pieces of information.

<img src="./assets/leta-gh-repo.png" alt="Screen shot of Leta's GitHub repo">

<div class="s-card">
  <h3>Navigate a GitHub Repository</h3>
  <p><a href="https://github.com/ameseee/cover" target="blank">Visit this repository</a> and answer the following:</p>
  <ul>
    <li>What is the name of this project/repository?</li>
    <li>Who is the user that created and owns this repository?</li>
    <li>How many commits are on this repo?</li>
    <li>When was the last commit made?</li>
    <li>Find 2 commit messages that do not follow conventions - write them down, and write down a better commit message to replace each.</li>
    <li>How many times has this repository been forked?</li>
  </ul>
</div>
<br>

## Practice, Check For Understanding

Complete the following exercises to get practice and demonstrate your ability to use Git and GitHub:

<div class="s-card">
  <h3>Solo: Practice the Workflow</h3>
  <p>Student will work through this prompt independently, while on the call if time permits, to have the support and opportunities for feedback from each other:</p>
  <ul>
    <li>Create a local repository.</li>
    <li>Create a GitHub repository.</li>
    <li>Connect the two repositories.</li>
    <li>Make a few changes and commits.</li>
    <li>Push up your changes.</li>
    <li>View the commit history in the GitHub interface.</li>
  </ul>
  <p>When this work time is over, be prepared to screenshare to show your Terminal and/or GitHub and talk through your process, challenges, and questions you have.</p>
</div>
<br>

<div class="s-card">
  <h3>Class Driver/Navigator</h3>
  <p>One student will Drive while other students are randomly selected to Navigate for each bulleted task:</p>
  <ul>
    <li>Create a local repository.</li>
    <li>Create a GitHub repository.</li>
    <li>Connect the two repositories.</li>
    <li>Make a few changes and commits.</li>
    <li>Push up your changes.</li>
    <li>View the commit history in the GitHub interface.</li>
  </ul>
</div>
<br>

There is no submission for the Check For Understanding for this lesson. Based on the concepts presented and practice exercises, students should self-evaluate and determine if they need more practice time and/or support. 

<br>
<br>
<br>