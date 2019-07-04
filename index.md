---
layout: main
title: Mod 0 Curriculum
---

## Tech Setup

Complete the following steps before Mod 0 in order to get the tools you'll need on your machine.

If you'd like to watch a video overview, a Turing alum who is <strike>at least partially competent</strike> gainfully employed in the software development industry put this video together for you:

<iframe width="560" height="315" src="https://www.youtube.com/embed/7TTt1a8UHic" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
 

### 1) New to Mac? 

If this is your first time using a Mac instead of a PC or Linux, then watch [this video](https://www.youtube.com/watch?v=MN0FD8KW2V4) about the basics of using a Mac.

### 2) Install Atom as your Text Editor

Install [Atom](https://atom.io/). Atom is a program where we edit code - it is a text editor with many great features that makes editing code more enjoyable compared to a simple text editor. Atom is commonly used in the software development industry, and we will use it throughout your time at Turing.

### 3) Install Xcode

[Xcode](https://developer.apple.com/xcode/) is a suite of development tools published by Apple. If we wanted to develop software for the Apple Ecosystem (iPhone apps, macOS apps, etc), we would use Xcode as our editor. But even though we're not building iPhone apps, Xcode provides some system dependencies that we need.

Rather than download Xcode via the Apple Store, we can get a much smaller selection of necessary tools via our terminal. 

Open the Terminal by pressing the `Command + Space` keys at the same time, which opens Spotlight, and then type `Terminal` into the search. Press the enter key, and type the following into the application, but without the `$`: 

```
$ xcode-select --install
```
When prompted, enter your password. 

You can verify that the installation was successful by typing `xcode-select` in your terminal. You should see something like this:

```
$ xcode-select
xcode-select: error: no command option given
Usage: xcode-select [options]

Print or change the path to the active developer directory. This directory
controls which tools are used for the Xcode command line tools (for example,
xcodebuild) as well as the BSD development commands (such as cc and make).

Options:
  -h, --help                  print this help message and exit
.
.
.
```

#### A note on convention

when you see the `$` before a line, it means "enter what follows the dollar sign as a terminal command". Lines that don't have a `$` might be what is printed out as a _result_ of the command, or, if the line begins with `//`, it means it's a comment. A few `.` on lines means "omitted text here". For example:

```
$ xcode-select
// run the above command in your terminal. This is a note from me, an author of 
// this guide to you, the reader of this guide. Sometimes comments span several
// lines, in which case we just begin all of them with these slashes. 

// what follows is the text that will be printed to your terminal
xcode-select: error: no command option given
Usage: xcode-select [options]

Print or change the path to the active developer directory. This directory
controls which tools are used for the Xcode command line tools (for example,
xcodebuild) as well as the BSD development commands (such as cc and make).

Options:
  -h, --help                  print this help message and exit
// these three dots below means there's more output that we've skipped.
.
.
.
```
### 4) Install Homebrew

[Homebrew](https://brew.sh/) is a package management system that makes it easy to install hundreds of open source projects and compile them from source for maximum performance on your machine.

To install homebrew, open Terminal. Again, you can get to Terminal by pressing the `Command + Space` keys at the same time, then typing `Terminal` into the search. 

Once you have Terminal open, paste this line and hit enter. (remember, skip the `$`)

```
$ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

It will ask you for your password. This is the password to log in to your account on the computer. It needs this because it installs its packages in a place that all users of this computer can access.

When it has completed the installation run brew doctor and it should tell you that everything is fine:

```
$ brew doctor
Your system is ready to brew.
```

If you got a warning from Homebrew about your path, do the following:

```
$ echo 'export PATH="/usr/local/bin:$PATH"' >> ~/.bash_profile
$ source ~/.bash_profile
// Now run "brew doctor" again and the warning should be gone.
```

### 5) Install Git

[Git](https://git-scm.com/) is a Version Control System (VCS). It allows you to save work on your project, and reference previous states of a project if needed. Normally when we save something on our computer, the newer version overwrites the older version. This is problematic if we need to look back at an earlier version. Git solves this problem by providing you multiple save points. You can get the current version, and ANY previous version. Git’s philosophy: never lose anything.

To install Git, we will use Homebrew. In your Terminal, type this:

```
$ brew install git
```

You can do `git` in the terminal to verify that its working:

```
$ git
usage: git [--version] [--help] [-C <path>] [-c <name>=<value>]
           [--exec-path[=<path>]] [--html-path] [--man-path] [--info-path]
           [-p | --paginate | -P | --no-pager] [--no-replace-objects] [--bare]
           [--git-dir=<path>] [--work-tree=<path>] [--namespace=<name>]
           <command> [<args>]

These are common Git commands used in various situations:

start a working area (see also: git help tutorial)
   clone      Clone a repository into a new directory
   init       Create an empty Git repository or reinitialize an existing one
.
.
.
```

### 6) Configure Git

We'll want to configure git with some basic information about us.

We can tell git to configure itself using the git config command from our terminal. Additionally, we're setting "global" configurations for git, so we'll use the --global flag when we provide it with a new piece of configuration.

Open Terminal with Spotlight search (press the `Command + Space` keys like we did previously). Type the following, substituting your own name and email: 

```
git config --global user.name "Alan Turing"
git config --global user.email alanturing@example.com
```

You can verify that this is working:

```
$ git config --list
credential.helper=osxkeychain
user.name=Alan Turing
user.email=alanturing@example.com
```
If you get "stuck" in the screen showing the output of `git config --list`, don't panic! Just type `q`, and you should get back to your regular terminal.


### 7) Install Chrome

If you're not already using Chrome, install it from [here](https://www.google.com/chrome/). Chrome includes a set of developer tools that will come in handy down the road. Additionally, it is always on the cutting edge of being able to support new web technologies. 

### You're Done!

Give yourself a pat on the back. Of, click over to [session 1]({{ site.baseurl }}{% link session1/index.md %}) and start reading!