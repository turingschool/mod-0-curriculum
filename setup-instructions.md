---
layout:     page
title:      Turing Environment Setup Instructions
subheading: Getting Your Computer Ready For Programming
permalink:  setup-instructions
---


# Tech Setup

Complete the following steps before Mod 0 in order to get the tools you'll need on your machine.

If you'd like to watch a video overview, a Turing alum who is <strike>at least partially competent</strike> gainfully employed in the software development industry put this video together for you, which walks through most of this guide:

<iframe width="560" height="315" src="https://www.youtube.com/embed/7TTt1a8UHic" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

The above video has shortcuts to specific pieces of this guide. Click over to it and read the video description to jump to just the right sections.

Here's what we'll cover in this guide. Click a link to jump to that portion of the guide:

- [New to Mac?](#1-new-to-mac)
- [Install Atom as your Text Editor](#2-install-atom-as-your-text-editor)
- [Install Xcode-select](#3-install-xcode-select)
- [Install Homebrew](#4-install-homebrew)
- [Install Git](#5-install-git)
- [Configure Git](#6-configure-git)
- [Install Chrome](#7-install-chrome)
- [Set Up Terminal Access for Atom](#8-set-up-terminal-access-for-atom)
- [Add GitHub SSH Keys](#9-add-github-ssh-keys)

Lets get started:

## 1) New to Mac?

If this is your first time using a Mac instead of a PC or Linux, then watch [this video](https://www.youtube.com/watch?v=MN0FD8KW2V4) about the basics of using a Mac.

## 2) Install Atom as your Text Editor

Install [Atom](https://atom.io/). Atom is a program where we edit code - it is a text editor with many great features that makes editing code more enjoyable compared to a simple text editor. Atom is commonly used in the software development industry, and we will use it throughout your time at Turing.

## 3) Install Xcode-select

[Xcode](https://developer.apple.com/xcode/) is a suite of development tools published by Apple. If we wanted to develop software for the Apple Ecosystem (iPhone apps, macOS apps, etc), we would use Xcode as our editor. But even though we're not building iPhone apps, Xcode provides some system dependencies that we need.

Rather than download Xcode via the Apple Store, we can get a much smaller selection of necessary tools, called `xcode-select`, via our terminal.

Follow these steps to get Xcode-select installed on your machine:

1. Open the Terminal by pressing the `Command + Space` keys at the same time, which opens Spotlight, and then type `Terminal` into the search.
1. Press the enter key to open `Terminal`
1.  Once terminal is open, type the following **without the `$` symbol**: 
 ```
  $ xcode-select --install
 ```
1. When prompted, enter the password you use to login to your computer.
1. Check that installation was succesful by typing `xcode-select` in your terminal. You should see something like this:

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

<section class="call-to-action">

### A note on convention

When you see a `$` before a line, it means "enter what follows the dollar sign as a terminal command".

Lines that don't have a `$` are usually what is printed out as a _result_ of the command.

A `.` on adjacent lines means "omitted text here". For example:

```
$ xcode-select
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
</section>

## 4) Install Homebrew

[Homebrew](https://brew.sh/) is a package management system that makes it easy to install hundreds of open source projects and compile them from source for maximum performance on your machine.

Follow these steps to get Homebrew installed on your machine:

1. Open `Terminal`. Again, you can get to Terminal by pressing the `Command + Space` keys at the same time, then typing `Terminal` into the search.

1. Once you have Terminal open, paste this line and hit enter. (remember, skip the `$`)

```
$ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

1. When prompted, enter the password you use to login to your computer. It needs this because it installs its packages in a place that all users of this computer can access.

1. When it has completed the installation, type `brew doctor` in your terminal + press enter. It should tell you that everything is fine:

```
$ brew doctor
Your system is ready to brew.
```

If you got a warning from Homebrew about your path, do the following:

```
$ touch ~/.zshrc
$ echo 'export PATH="/usr/local/bin:$PATH"' >> ~/.zshrc
$ source ~/.zshrc
// Now run "brew doctor" again and the warning should be gone.
```

## 5) Install Git

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

## 6) Configure Git

We'll want to configure git with some basic information about us.

We can tell git to configure itself using the git config command from our terminal. Additionally, we're setting "global" configurations for git, so we'll use the --global flag when we provide it with a new piece of configuration.

Open Terminal with Spotlight search (press the `Command + Space` keys like we did previously). Type the following, substituting your own name and email:

```
git config --global user.name "Alan Turing"
git config --global user.email alanturing@example.com
git config --global init.defaultBranch main
git config --global core.editor "atom --wait"
git config --global pull.rebase false
```

You can verify that this is working:

```
$ git config --list
credential.helper=osxkeychain
user.name=Alan Turing
user.email=alanturing@example.com
init.defaultbranch=main
core.editor=atom --wait
pull.rebase=false

```
If you get "stuck" in the screen showing the output of `git config --list`, don't panic! Just type `q`, and you should get back to your regular terminal.


## 7) Install Chrome

If you're not already using Chrome, install it from [here](https://www.google.com/chrome/). Chrome includes a set of developer tools that will come in handy down the road. Additionally, it is always on the cutting edge of being able to support new web technologies.

--------------------

You've done a lot of environment setup! How about you take a break, go for a walk, drink some water.

We'll be here when you get back. :)

--------------------

## 8. Set Up Terminal Access for Atom

Install the shell commands for Atom. Open Atom, drop down the `Atom` menu in the top left corner of your screen, and click on `Install Shell Commands`. Atom should now be enabled from your command line.

![Install Shell Commands](/images/install_shell_commands.jpg)

To confirm that Atom is working from your command line, open a terminal with Spotlight search (`Command + Space`), type `terminal` and hit enter. Type `atom .` in your terminal. If it is setup correctly, the atom editor will automatically open.

If you get an error, make sure you've selected `Install Shell Commands` from the Atom menu.

If is _still_ not working, try entering this in the command line:

```
ln -s /Applications/Atom.app/Contents/Resources/app/atom.sh /usr/local/bin/atom

```
Try opening Atom from the command line again. If it's still not working, message one of the Turing staff, or mention this in your cohort channel. We'll get this squared away!

Atom also offers a number of different options and packages that you can customize to your liking. [This](https://www.youtube.com/watch?v=WWwBQQOGllo&list=PLYzJdSdNWNqwNWlxz7bvu-lOYR0CFWQ4I) series of videos will walk you through many of them if you'd like to dive deeper.

## 9. Add GitHub SSH Keys

SSH keys are a more secure and convenient way of authenticating than typing in our password every time we want to interact with Github.

This is getting fairly advanced, so if you want to stop the setup instructions here, and come back later once you're annoyed at entering your Github password regularly, that's totally fine.

This can be a bit tricky to do, so here's another quick walk-through, of _just_ adding Github SSH keys:

<iframe width="560" height="315" src="https://www.youtube.com/embed/YVBwSh-vlFY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


### 1. Generate a new key by running:

(You should use the email associated with your GitHub account)

```
$ ssh-keygen -t rsa -C "johndoe@example.com"
```

When you're prompted to "Enter a file in which to save the key," press Enter. This accepts the default file location, which is `~/ssh/id_rsa`

When asked to enter a password, hit enter, which means "no password".

You'll see a confirmation message that looks like:

```
Your identification has been saved in id_rsa.
Your public key has been saved in id_rsa.pub.
The key fingerprint is:
SHA256:C3AB8FF13720E8AD9047DD39466B3C8974E592C your@email_address.com
The key's randomart image is:
+---[RSA 2048]----+
| .       =   ..  |
|o . . o + = ..   |
| =.o o o o o  .  |
|+ +o. .  ..  . . |
|.+E  .  S   o o..|
|..     .  .o . .+|
|        o  oo .o+|
|       . o  ==o.=|
|        . .+=B=o |
+----[SHA256]-----+
```

### 2. Add this new key to your system by running:

```
$ ssh-add ~/.ssh/id_rsa
```

### 3. Copy the new _public_ key to your clipboard:

```
$ pbcopy < ~/.ssh/id_rsa.pub
```

### 4. Tell GitHub about this key.

1.  Go to [https://github.com/settings/keys](https://github.com/settings/keys)
1.  Click the green "New SSH key" button.
1.  Leave the "title" section empty
1.  Paste the key into the "key" section with `Command + v`.
1.  Hit the green "Add SSH key" button.


**To test that our key is configured, type the following into the command line:**

```
$ ssh -T git@github.com
```

**If you get a prompt similar to this:**

```
The authenticity of host 'github.com (192.30.252.153)'... can't be established.
RSA key fingerprint is 00:11:22:33:44:55:66:77:88:99:aa:bb:cc:dd:ee:ff.
Are you sure you want to continue connecting (yes/no)?
```

-   Type `yes`

**If everything's working, you'll see the the following:**

```
Hi <your_username>! You've successfully authenticated, but GitHub does not provide shell access.
```

Great work! You've connected your terminal to your Github profile. You can now interact with Github from your terminal _without_ entering your password all the time.

### You're Done!

Give yourself a pat on the back.
