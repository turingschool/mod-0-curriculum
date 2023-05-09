---
layout: lesson
title: GitHub
---

GitHub is a cloud-based Git repository where developers can store and manage their code. Up until this point, we've been tracking changes on our local machines using Git. This is a great start, but what if you accidentally spill water all over your machine? All of that progress would be lost... unless you stored a copy of it somewhere else. That's where GitHub can support our work!

## Learning Goals

- Identify the key information on a GitHub repository
- Create repositories in GitHub
- Connect a local repository to a remote repository
- Push work from a local repository to a remote repository
- Fork and clone GitHub repositories
- Describe the difference between forking and cloning a repository

## Vocabulary

- <span class="vocab">repository</span>
- <span class="vocab">local</span>
- <span class="vocab">remote</span>
- <span class="vocab">push</span>
- <span class="vocab">fork</span>
- <span class="vocab">clone</span>

## Warm-Up

Before we dive into creating GitHub repositories, let's take a moment to get comfortable looking at the key information provided to us on a GitHub repository. Open up <a href="https://github.com/letakeane/emotican-app" target="_blank">this GitHub repository</a> to identify some key pieces of information.

<img src="./assets/leta-gh-repo.png" alt="Screen shot of Leta's GitHub repo">

<div class="s-card s-border-yellow-500">
  <h3>Key Information on a GitHub Repository</h3>
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

## Connecting a Local and Remote Repository

There are many ways to create and connect <span class="vocab">local</span> (on your machine) and <span class="vocab">remote</span> (in the cloud) repositories. We can't go through every combination of ways to do that, so we will focus on one. Once you are comfortable with this way, if you find another way to achieve the same outcome, you can absolutely use that.

1. Create a directory called `github_practice` and add a file in that directory with the title of your program: `ruby.md` or `javascript.md`.
1. Initialize a Git repository in your `github_practice` repository.
1. Add your file and commit your work.
1. Create a GitHub repository (do NOT check the box to create a README).
1. **Before completing the next steps, make sure that you have the `SSH` button selected at the top.** Then, follow the directions under `...or push an existing repository from the command line`, by running the following commands:
  - `git remote add origin git@github.com:USERNAME/REPO_NAME.git` This command tells the local repository to set the remote repository to this address. We refer to it as the `origin`.
  - _`git branch -M main` You do not need to do this if you have already configured Git to name the default branch `main`._
  - `git push -u origin main` This sends the current version of the project up to the remote repository, and sets the `main` branch as the default branch to send work up to.
1. Refresh your GitHub browser tab. You should now see your repository!

<br>
What follows is a diagram that breaks down the anatomy of the `git push -u origin main` command:
<img src="./assets/command-anatomy.png" alt="Anatomy of git push -u origin main command">

<div class="s-card">
  <h3>Practice</h3>
  <p>Follow the steps listed above to connect a local Git repository with a GitHub repository.</p>
</div>
<br>

## Git & GitHub Workflow

Now that we have our local repository connected to a remote repository, we can see our files along with any commits that we've made on GitHub. This means we can continue to work on our local machine, adding and committing our work as necessary. Then, when we push to GitHub, a record of those new changes will also be added to our remote repository! After making 1 or more commits on a local repository, we can push our work up using the following command:

```bash
git push
```

Since we used the `-u origin main` in our original push to connect the two repos, we already established main as the upstream branch. For subsequent pushes, we can take out that part of the command and simply use <code>git push</code>.

After running this command, Git will send your work up to GitHub (you must be connected to the internet), and you'll get many lines of output, finally telling you the work was successfully sent up. Refresh your GitHub browser tab, and the changes will be available there. <span class="vocab">Pushing</span> work up to a repository is the act of using Git commands to send the most recent commits on a local repository up to the remote repository.

>For the extent of our work with Git and GitHub workflows _during Mod 0_, you will primarily be pushing work up. It is definitely possible to also pull down changes from a remote repository to your local repository, but you will only need to do this if you make changes in the remote repository by mistake. <strong>Please remember to always make edits to files on your local machine and then push them up!</strong> This will avoid any merge conflicts.

<br>
<div class="s-card">
  <h3>Practice</h3>
  <p>In your previous repository, make two rounds of changes in the file you created, adding and committing those changes each time. When you're finished, push those changes to GitHub.</p> 
  <p><em>Note: All of these changes should be made in VS Code, not directly in GitHub!</em></p>
</div>

## A Common Issue

The most common issue on that first round of practice is that students connect to the remote repository using the <code>HTTPS</code> code instead of the <code>SSH</code> code. If this happens, when you attempt to push your work, your terminal will prompt you to enter your username and password every time. To avoid this annoyance, you can remove the remote connection and establish a new connection with the <code>SSH</code>.

1. Check your current git remote origin connection using `git remote -v`.
1. If you are connected to a remote origin that you do not have access to, remove your connection using `git remote remove origin`.
1. Check that the git remote origin was removed using `git remote -v`. If you don't get anything in response, you know you aren't connected to a remote repository!
1. Then you can create a new empty repository on **your** GitHub and connect it to that remote repository. Use the command `git remote add origin [insert SSH code here]` to establish that connection.
1. Check your remote origin is correct now using `git remote -v`.
1. Now that you're connected to the correct remote repository, you can run those two commands to establish the main branch and push your work: `git branch -M main` and `git push -u origin main`.

<br>
<div class="s-card">
  <h3>More Practice: Git & GitHub Workflow</h3>
  <p>Follow the steps below to practice connecting a local repository to a remote repository.</p>
  <ul>
    <li>Create a local repository.</li>
    <li>Create a GitHub repository.</li>
    <li>Connect the two repositories.</li>
    <li>Make a few changes and commits.</li>
    <li>Push up your changes.</li>
    <li>Make a few more changes and commits.</li>
    <li>Push up your new changes.</li>
    <li>View the commit history in the GitHub interface.</li>
  </ul>
  <p>When this work time is over, be prepared to screen share to show your Terminal and/or GitHub and talk through your process, challenges, and questions you have.</p>
</div>
<br>

## Forking and Cloning Repositories

Often, you won't be creating a project from scratch. What if you want to create a copy of an already-existing GitHub repository and work from that repository? We can <span class="vocab">fork</span> a GitHub repository to make a copy of it on our own GitHub account. Or what if the company you're working for already has an application and you need to make changes to it? We can <span class="vocab">clone</span> a GitHub repository to our local machine, so that we can continue making changes from that already existing repository.

The diagram below visually shows the difference between forking and cloning a repository. In some cases, you may want to both fork and clone a repository. Forking allows you to create your own copy of a remote repository on your GitHub account and then cloning lets you edit and push changes up to your copy of the original repository.
<br>
<br>
<img src="./assets/fork-and-clone.png" alt="Diagram showing the difference between forking and cloning a repository">

To fork and clone a pre-existing GitHub repository, follow the steps below. 

1. Fork the [repository](https://github.com/turingschool/m0_github_practice). You will find the fork button in the top right corner.
1. On your local machine, navigate to where you want to clone down the repo.
1. Clone your copy of the repository to your local machine using the command <code>git clone [insert SSH code here]</code>.
1. Move into that new directory and open the project in VS Code.
1. Make some changes to the files by answering the questions in the <code>github_notes.md</code> file.
1. Add and commit your changes. Note: This is not the "Initial commit" on this repo.
1. Push your changes to GitHub using `git push` and refresh your browser to see those changes reflected in the remote repository.

<div class="s-card s-border-yellow-500">
  <h3>Things to Note</h3>
  <p>A few things are a little different when you are cloning down a repository compared to creating your own repo from scratch.</p>
  <ol>
    <li>You don't need to create an empty directory on your local machine when you clone down a repository. When you clone, that directory is created for you.</li>
    <li>You also don't need to initialize git with <code>git init</code> if you cloned down the repository. Git is already initialized in a repository that you clone to your local machine.</li>
    <li>Your first commit message on the repo will not be <code>Initial commit</code>. This is because the other commits on the repository are following the repo. If you run the command <code>git log --oneline</code> in that repository, you will see an <code>Initial commit</code> already! Instead, use present imperative form to describe the change you made with that commit.</li>
  </ol>
</div>

<br>
<div class="s-card">
  <h3>More Practice: Forking & Cloning</h3>
  <p>Work through this prompt independently.</p>
  <ul>
    <li>Fork <a target="blank" href="https://github.com/turingschool/m0_github_challenge">this repository</a>.</li>
    <li>Navigate to where you want to clone down the repo.</li>
    <li>Clone your copy to your local machine.</li>
    <li>Make a few changes and commits.</li>
    <li>Push up your changes.</li>
    <li>Make a few more changes and commits.</li>
    <li>Push up your new changes.</li>
    <li>View the commit history in the GitHub interface.</li>
  </ul>
</div>
<br>

## Other Common Issues

Occasionally, the command to push work up will result in a different error. When this happens, <strong>don't panic</strong>. Carefully read the message and see if you can figure out what the problem might be. Take a look at this message below and make a guess about what the problem might be. 

<img src="./assets/permission-denied.png" alt="Permission denied error message">

The error message describes the issue clearly. This user does not have access to this GitHub repository. This can happen if you forget to `fork` a repository before `cloning` it to your local machine. The good news is that you can remove a connection and reconnect to another remote repository on **your** account!

You can use the same process described earlier in the lesson to remove the remote connection and connect to a new remote repo instead. You can see an example of what that process might look like below.

<img src="./assets/permission-fix.png" alt="Using git commands to remove a remote origin and add a new one">

Other common issues we've seen with students include: 
- Trying to `push` before adding and committing changes
- Creating a git repo inside of another git repo
- Initializing git in your home directory instead of the specific directory where you want to track changes

All of these issues can be corrected. The important thing is to reach out for help sooner rather than later. 

<div class="s-card s-border-yellow-500">
  <h3>Quick Tip</h3>
  <p>To see if you initialized git in a repository, use <code>ls -a</code> to show hidden files. If you see a hidden <code>.git</code> directory, that means that you have initialized git in that directory. If you don't want to have git tracking in that repository, you can remove it with <code>rm -rf .git</code>.</p>
</div>

## Check For Understanding

Follow the steps below to demonstrate your understanding of the Git & GitHub workflow. Record your screen and talk through the steps as you go. Submit your video using your submission form.

1. Use keyboard shortcuts to move this browser window to the left side of your screen and your terminal in the top right corner. 
1. Fork this [repository](https://github.com/turingschool/m0_github_cfu).
1. Clone your copy of the repository to your local machine and move into that new directory.
1. Open the repository in VS Code. Use a keyboard shortcut to move VS Code to the bottom right corner of your screen.
1. Create a new file in that directory called `github_cfu.md`. Add a list of a few git commands you know in that file. 
1. Add and commit your work, and then push those changes to GitHub.
1. Now, show how you would remove the remote origin. Hint: Do a quick search of this lesson using `cmd` + `f` for the keyword `remove` to quickly find some guidance.
1. Create a new remote repository in GitHub and connect your existing local repository to that one. Hint: All of this can be done in GitHub and the terminal. You do not need to create a new local repository.

If you have any questions about GitHub as you're working through this challenge, drop them in Slack along with any relevant screenshots!

<br><br><br><br><br>