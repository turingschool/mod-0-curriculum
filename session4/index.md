---
layout: page
title: Session 4
subheading: More Git and Intro to GitHub
---

<div class="goals-agenda">
  <div>
    <h3>Goals</h3>
    <strong>By the end of this session, you will be able to:</strong>
    <ul>
      <li>create a repository on GitHub</li>
      <li>add a remote to a local git repository</li>
      <li>push local changes to a remote</li>
      <li>fork an existing repository</li>
      <li>pull changes from an existing repo</li>
      <li>define purpose of and use a Github gist</li>
      <li>explore existing gists to discover markdown syntax</li>
    </ul>
  </div>
  <div>
    <h3>Agenda</h3>
    <ul>
      <li><strong>10 min: </strong>Intros, Housekeeping, and Goals</li>
      <li><strong>15 min: </strong><a href="#gitreview">Git Review</a></li>
      <li><strong>40 min: </strong><a href="#github">GitHub</a></li>
      <li><strong>5 min: </strong>Break</li>
      <li><strong>20 min: </strong><a href="#forkclone">Forking and Cloning</a></li>
      <li><strong>10 min: </strong><a href="#gists">Gists and Markdown</a></li>
      <li><strong>5 min: </strong><a href="#homework">Homework Preview</a></li>
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

<div class="try-it">
  <h3>Intros, Review, and Icebreaker</h3>
  <p>1. Introduce yourself: name, pronouns</p>
  <p>2. If you could have an unlimited supply of one thing for the rest of your life, what would it be?</p>
  <p>3. Accountability review: what were the skills/processes that you decided to focus on last week, and how are you progressing toward mastery of those skills?</p>
</div>

<a name="gitreview"></a>
## Git Review

We'll start by repeating the group git exercise from Tuesday's session. This may seem repetative, but each time you practice, you'll gain muscle memory and procedural understanding.

Today's driver will be the person who was born closest to Maine. Everyone else will be navigators. Driver: remember not to type anything that has not yet been brought up by a navigator and discussed in the group. 

**Remember:** If you feel comfortable with git, your job is to hone your explanation and communication skills. Many companies in the industry that place far more weight on these professional skills than on being a technical superstar. 

<div class="try-it">
  <h3>Try It: Git Review</h3>
  <p>As you and your group walk through the git review below, it might be a good idea to have <a href="/session3#init" title="">Session 3's Git Notes</a> open.</p>
  <ol>
    <li>Before we do this, make sure the driver is <strong>outside</strong> of any previous directories where they have practiced git.</li>
    <li>Create a new directory called <code>session_4_git_practice</code>. Inside of that directory, create a file called <code>coding_languages.txt</code>.</li>
    <li>Tell git to start watching the <code>session_4_git_practice</code> directory.</li>
    <li>Before you check the status, predict what it will say. Then, check the current status.</li>
    <li>Add <code>coding_languages.txt</code> to the staging area.</li>
    <li>Make your first commit in this directory.</li>
    <li>Before you check the status, predict what it will say. Then, check the current status.</li>
    <li>Use the echo command to add the names of two separate coding languages to <code>coding_languages.txt</code>. (You may Google to get ideas!)</li>
    <li>Before you check the status, predict what it will say. Then, check the current status.</li>
    <li>Before you check the difference between your last commit and what the file looks like now, predict what it will say. Then, check the diff.</li>
    <li>Add the changes to the staging area.</li>
    <li>Before you check the status, predict what it will say. Then, check the current status.</li>
    <li>Commit the changes using a properly formatted commit message.</li>
    <li>Before you check the status, predict what it will say. Then, check the current status.</li>
    <li>Repeat steps 8-14 again, adding the names of two new coding languages.</li>
    <li>Print out the git log in both formats (full and oneline).</li>
  </ol>
  <p><strong>Finished before time is up? Repeat, but choose a different driver this time.</strong></p>
</div>

<a name="github"></a>
## GitHub

Git is not the same as GitHub. They work together, but they are separate tools. Git allows us to track versions of our work on our local computers. <span class="vocab">GitHub</span> is an online git repository hosting service. Other alternatives to GitHub include GitLab and BitBucket, among others.

GitHub also makes it easy for teams that use git to collaborate on the same codebase. During Mod 0, we will not be exploring the collabortive functionality of GitHub. We're going to stick to learning the basic functionality of GitHub. 

Let's first discuss this diagram:

![Github Diagram](http://frontend.turing.io/assets/images/lessons/git/github-diagrams.002.jpeg)

<small><em>Source: http://frontend.turing.io/assets/images/lessons/git/github-diagrams.002.jpeg</em></small>

And this one, which shows how GitHub can be used as a collaboration tool:

![Collaborative Github Diagram](https://qph.fs.quoracdn.net/main-qimg-a161bdd97e4e0de40d999ac222fe2008.webp)

<small><em>Source: https://www.quora.com/What-is-git-and-repository</em></small>

A <span class="vocab">repo</span> is, at it's core, a place where your work is stored. On your local machine, that repo is the `.git` folder that we discussed last session.

Let's take a look at an example of a repo on GitHub: <a href="https://github.com/freeCodeCamp/freeCodeCamp" title="">FreeCodeCamp</a>

<div class="try-it">
  <h3>Try It: Exploring GitHub Repositories</h3>
  <p>In your breakout group, choose one of the repositories listed at the bottom of this "Try It" section. Take a few minutes to explore the following questions and be ready to report back to your group:</p>
  <ol>
    <li>How many commits have been made in the repository?</li>
    <li>When was the most recent commit made?</li>
    <li>About how often are changes made to this repository? How do you know?</li>
    <li>Who is the top contributor?</li>
    <li>How many people have contributed to the repository?</li>
    <li>How many people are watching the repository?</li>
    <li>How many issues are open? Can you decipher what any of the issues are reporting? </li>
    <li>How many open pull requests exist? What was the date of the most recent pull request?</li>
    <li>Is there active commenting on the pull requests? Can you decipher what people are discussing?</li>
    <li>What do you see on the page that we <strong>did not</strong> discuss? Can you google these things to find out what they are?</li>
    <li>Done before time is up? Pick a second repository to explore.</li>
  </ol>
  <p>Options:</p>
  <ul>  
    <li><a href="https://github.com/jwasham/coding-interview-university" title="">Coding Interview University</a></li>
    <li><a href="https://github.com/kamranahmedse/developer-roadmap" title="">Developer Roadmap</a></li>
    <li><a href="https://github.com/EbookFoundation/free-programming-books" title="">Free Programming Books</a></li>
    <li><a href="https://github.com/toddmotto/public-apis" title="">Public APIs</a></li>
    <li><a href="https://github.com/samaaron/sonic-pi" title="">Sonic Pi</a></li>
  </ul>
</div>

### Creating a Remote Repo on GitHub

Watch and take notes while we walk through how to add a remote to your local repository. 

1. Click the plus button in the upper right-hand corner of GitHub and select "New Repository". 
1. Give your repository a name, but keep all other settings the same for now.
1. Click "Create Repository"
1. Scroll to `…or push an existing repository from the command line`
1. Paste the lines listed, one at a time, in your terminal. 
1. Refresh Github. Tada! Your project is there. 

<div class="try-it">
  <h3>Try It: Adding a Remote</h3>
  <p>1. In your terminal, navigate to your <code>git_practice</code> directory from session 3's homework.</p>
  <p>2. Create a new repository on GitHub called <code>git_practice</code>.</p>
  <p>3. Add the remote to your local repository, then push your changes to GitHub.</p>
</div>

### Making Additional Changes and Pushing to GitHub

Open up either Sublime or Atom. Use the keyboard shortcut `command + o` to search for your `git_practice` project.

Watch and take notes while we walk through how to continue making changes and pushing those changes to GitHub.

<div class="try-it">
  <h3>Try It: Full Git Workflow</h3>
  <p>In your breakout rooms, <strong>everyone</strong> will complete the steps below synchronously, but on your own projects. Use each other as resources and sounding boards. Feel free to click "share screen" if there's something you want your team to look at.</p> 
  <p>If you get really stuck, you can click "ask for help" and we'll pop into your room.</p>
  <ul>
    <li>Add a few new quotes to your <code>quotes.txt</code> file.</li>
    <li>Save your file using the shortcut <code>command + s</code>.</li>
    <li>Go back to your terminal.</li>
    <li>Use commands to add and commit your new changes. Be sure to use <code>git status</code> to check your status, and make sure your commit message is properly formatted.</li>
    <li>Push your new changes to GitHub.</li>
    <li>Refresh the page to make sure the new changes appear.</li>
    <li>Repeat the above steps, but this time, remove one of the quotes from your <code>quotes.txt</code> document, then add, commit, and push your changes.</li>
  </ul>
  <p>Done? Paste the link to your GitHub repo into the chat, then check the commits in each other's GitHub repos.</p>
  <p>Done with that? Get to know your breakout room classmates better: where did they grow up? What was their first job?</p>
</div>

## BREAK

Turn off your mics and videos and walk away from the computer. Stand up, stretch, drink water. Do a few sit-ups, squats, push-ups, jumping jacks, arm circles, stress ball squeezes, or whatever else moves your body. 

<a name="forkclone"></a>
## Forking and Cloning

#### What is Cloning?


*NOTE*: If you clone a repo that does not belong to you, and you are not listed as a collaborator, you will not be able to push changes to the default remote. 

#### When might you use cloning?

- You are working with a team and everyone is added as a collaborator on the project repository. 
- Your instructor has an example repo that she is using for a code-along lesson. You will not need to turn anything in, and after the lesson, you will not need the codebase again. 
- Anytime you don't need an existing project to have a reference to the original project.

<div class="try-it">
  <h3>Try It: Cloning</h3>
  <p></p>
</div>

#### What is Forking?

Forking is a type of cloning on GitHub, but it will keep a reference to the original, existing project. To fork an existing project, you just click the `fork` button, which will make a copy of all of the code and directory structure to your own GitHub account. 

You can tell if something is a fork because 

*NOTE*: If you fork a repo and clone that repo, any changes that you add, commit, and push will go to **your** fork of the repo, not the original repo. 

#### When might you use forking?

- You are working on a project and your instructor has already created a "starter kit". Your job is to finish building out the project and submit it.
- You find a typo in the code for an external library you are using. You want to fix it and submit your changes for the library maintainer to review.
- You want to build off of an existing codebase. You do not intend to merge your changes back into the original codebase, but you do want to give credit to the original team.

<div class="try-it">
  <h3>Try It: Forking</h3>
  <p></p>
</div>


<a name="gists"></a>
## Gists and Markdown


<div class="try-it">
  <h3>Try It: Markdown</h3>
  <p>Fork the <a href="https://gist.github.com/rwarbelow/8d8a1492e87fc676905a4343fa5c43a6" title="">markdown practice</a> gist.</p>
  <p>In your breakout rooms, work together to find the markdown syntax for each of the elements listed.</p> 
  <p>Done? Use Google to find the syntax for embedding an image using markdown.</p>
</div>

<a name="homework"></a>
## Homework

Find the homework in your Mod 0 Project Board. Contact Rachel or Tim if you're stuck.
