---
layout: main
title: Mod 0 Curriculum
---

## Tech Setup

Complete the following steps in order to get the tools you'll need on your machine. 

### New to Mac? 

If this is your first time using a Mac instead of a PC or Linux, then watch [this video](https://www.youtube.com/watch?v=MN0FD8KW2V4) about the basics of using a Mac.

### Install a Text Editor

If you will be a *front-end student*, install [Sublime](https://www.sublimetext.com/). Sublime Text is a program where we edit code - it is a free text editor with many great features that makes editing code more enjoyable compared to a simple text editor. Sublime Text is commonly used in the software development industry, and you will use it throughout your time at Turing. It is a free program, but it will ask you periodically to make a donation - you can just decline and keep using Sublime Text for free.

If you will be a *back-end student*, install [Atom](https://atom.io/). Atom is a program where we edit code - it is a text editor with many great features that makes editing code more enjoyable compared to a simple text editor. Atom is commonly used in the software development industry, and we use it throughout your time at Turing.

### Install Xcode

Download and install Xcode from the Apple App Store on your computer. This will probably take a little while to finish. Xcode is a huge suite of development tools published by Apple. If we wanted to develop software for the Apple Ecosystem (iPhone apps, macOS apps, etc), we would use Xcode as our editor. But even if we aren’t working in this ecosystem, Xcode provides some system dependencies that we’ll want to have available.

### Install Homebrew

Homebrew is a package management system that makes it easy to install hundreds of open source projects and compile them from source for maximum performance on your machine.

To install homebrew, open the application called Terminal. You can get to Terminal by pressing the `Command + Space` keys at the same time, then typing `Terminal` into the search. 

Once you have Terminal open, paste this line and hit enter:

```
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

It will ask you for your password. This is the password to log in to your account on the computer. It needs this because it installs its packages in a place that all users of this computer can access.

When it has completed the installation run brew doctor and it should tell you that everything is fine:

```
brew doctor
Your system is ready to brew.
```

If you got a warning from Homebrew about your path, do the following:

```
echo 'export PATH="/usr/local/bin:$PATH"' >> ~/.bash_profile
source ~/.bash_profile
Now run brew doctor again and the warning should be gone.
```

### Install Git

Git is a Version Control System (VCS). It allows you to save work on your project, and reference previous states of a project if needed. Normally when we save something on our computer, the newer version overwrites the older version. This is problematic if we need to look back at an earlier version. Git solves this problem by providing you multiple save points. You can get the current version, and ANY previous version. Git’s philosophy: never lose anything.

To install Git, we will use Homebrew. In your Terminal, type this:

```
brew install git
```

### Configure Git

We'll want to configure git with some basic information about us.

We can tell git to configure itself using the git config command from our terminal. Additionally, we're setting "global" configurations for git, so we'll use the --global flag when we provide it with a new piece of configuration.

Open Terminal with Spotlight search (press the `Command + Space` keys like we did previously). Type the following, substituting your own name and email: 

```
git config --global user.name "Alan Turing"
git config --global user.email alanturing@example.com
```
