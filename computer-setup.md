---
layout:     page
title:      Computer Setup
permalink:  computer-setup
---

Complete the following steps before your first Mod 0 session in order to get the tools you'll need on your machine. Plan to spend 3-5 hours on this.

Here's what we'll cover in this guide. Click a link to jump to that portion of the guide:

- [New to Mac?](#new-to-mac)
- [Install Rectangle](#install-rectangle)
- [Install Chrome](#install-chrome)
- [Install Zoom](#install-zoom)
- [Enable Screen Sharing](#enable-screen-sharing)
- [Install Xcode-select](#install-xcode-select)
- [Install Homebrew](#install-homebrew)
- [Install and Configure Atom](#install-and-configure-atom)
- [Install and Configure Git](#install-and-configure-git)
- [Configure GitHub]($configure-github)
- [Install Node](#install-node)
- [Install rbenv](#install-rbenv)

### New to Mac?

If this is your first time using a Mac, it is recommended you do spend some time learning about the basics of using a Mac and getting comfortable with it.

**Action Steps:**
- 📌 _(Optional) Watch [this video](https://www.youtube.com/watch?v=67keaaWOKzE&t=0s)_

<br>

### Install Rectangle

Rectangle is a screen management app that allows you to move and resize windows so you can watch the Zoom call and work in the terminal for your technical sessions.

Once you've installed Rectangle, open the app and it will run in the background. You should see a smaller version of the Rectangle icon in the top right corner of your screen.

**Action Steps:**
- 📌 Install the screen management app [Rectangle](https://rectangleapp.com/)
- 📌 Take some time to play around with the commands to adjust the positioning and size of different windows on your screen using the Rectangle shortcuts!

<br>

### Install Chrome

Chrome includes a set of developer tools that will come in handy down the road. Additionally, it is always on the cutting edge of being able to support new web technologies.

**Action Steps:**
- 📌 If you haven't already, [install Chrome](https://www.google.com/chrome/)

<br>

### Install Zoom

Zoom is the primary tool for classroom time, study halls, and community building time at Turing.

**Action Steps:**
- 📌 If you haven't already, [install Zoom](https://zoom.us/download/) for Macs with Apple Silicon chips

<br>

### Enable Screen Sharing

Turing is a fully remote and highly collaborative program, which means you will be sharing your screen a lot. 

**Action Steps:**
- 📌 Enable screen sharing permissions by taking the following steps:
1. Open the System Preferences app by pressing the `command + space` keys at the same time, which opens Spotlight. Then, start typing "System Preferences"; it will auto-fill. Press `return` and the System Preferences appliaction will open.
1. Click `Security and Privacy`
1. Click the `Privacy` tab
1. Scroll down to Screen Recording and click the small "plus sign" button. In the window that opens, navigate to the Applications, then click on "Zoom".

<br>

### Install Xcode-select

[Xcode](https://developer.apple.com/xcode/) is a suite of development tools published by Apple. If we wanted to develop software for the Apple Ecosystem (iPhone apps, macOS apps, etc), we would use Xcode as our editor. But even though we're not building iPhone apps, Xcode provides some system dependencies that we need.

Rather than download Xcode via the Apple Store, we can get a much smaller selection of necessary tools, called `xcode-select`, via our terminal.

**Action Steps:**
- 📌 Install `xcode-select` to your machine by taking the follwoing steps:
  1. Open the Terminal by pressing the `command + space` keys at the same time, which opens Spotlight. Then start typing "Terminal"; it will auto-fill. Press `return` and your Terminal application will open.

  1. Once terminal is open, type the following **do not type the `$` symbol**, the press `return`: 
  ```
    $ xcode-select --install
  ```
  1. The download _may_ take several hours
  1. When prompted, enter the password you use to login to your computer.
  1. Type `xcode-select` in your terminal, then press `return`. If `xcode-select` was installed properly, you should see something like this:
  ```
  $ xcode-select
    xcode-select: error: no command option given
    Usage: xcode-select [options]
    Print or change the path to the active developer directory. This directory
    controls which tools are used for the Xcode command line tools (for 
    example, xcodebuild) as well as the BSD development commands (such as cc 
    and make).
    Options:
      -h, --help                  print this help message and exit
    .
    .
    .
  ```

<br>

### Install Homebrew

Homebrew is a package management system that allows us to install and run various programs on our machines - programming specific programs that we can only install via the Terminal.

**Action Steps:**
- 📌 Install Homebrew by taking the following steps (this may involve a couple big chunks of time where you just have to wait around):
  1. Open the Finder window by typing `cmd + space` and start typing `Finder`
  1. Click on the `Applications` folder on the left sidebar
  1. Click into the folder called `Utilities`
  1. Right click on the `Terminal` app and choose `Get Info`
  1. Check the box that says `Open using Rosetta`
  1. Open the `Terminal` app by either double clicking the icon or using a Spotlight search for `Terminal`
  1. Run
  ```
  /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
  ```
  1. When prompted, enter the password you use to login to your computer. It needs this because it installs its packages in a place that all users of this computer can access. You will get a message that says, "Press RETURN to continue or any other key to abort." Press `return`.
  1. When it has completed the installation, which may take some time, quit the terminal using `cmd + q` then start a new Terminal session. Type `brew doctor` in your terminal and press `return`. It should tell you that everything is fine:
  ```
  $ brew doctor
  Your system is ready to brew.
  ```
  1. If you get a warning message something like what follows, follow the first solution it provides by typing `softwareupdate --all --install --force` then press `return`:
  ```
  WARNING: A newer Command Line Tools release is available.
  Update them from Software Update in System Preferences or run:
    softwareupdate --all --install --force
  If that doesn't show you any updates, run:
    sudo rm -rf /Library/Developer/CommandLineTools
    sudo xcode-select --install
  Alternatively, manually download them from:
    https://developer.apple.com/download/all/.
  You should download the Command Line Tools for Xcode 13.1.
  ```
  1. When it has completed the installation, which may take some time, quit the terminal using `cmd + q` then start a new Terminal session. Type `brew doctor` in your terminal and press `return`. It should tell you that everything is fine:
  ```
  $ brew doctor
  Your system is ready to brew.
  ```

<br>

### Install and Configure Atom

Atom is a code editor, a program where we write and edit code. You've probably used Word or Google Documents in the past; this is similar, but a program specifically designed for code to be written in it. There are many code editors available, and once you get a foundation you may choose to use others. We ask all students in Mod 0 and Mod 1 to use Atom so that staff can best support students and so that students can easily collaborate.

**Action Steps:**
- 📌 Install [Atom](https://atom.io/). 
- 📌 After downloading Atom, **ensure** that Atom appears in your Applications folder and is no longer in your Downloads folder!  

Atom is where we write the code that powers our applications, but we'll also do important work in the Terminal. We need our Terminal to be able to "talk to" Atom.

**Action Steps:**
- 📌 Open Atom (from your Applications folder), drop down the Atom menu in the top left corner of your screen, and click "Install Shell Commands". Atom should now be enabled from your command line.
- 📌 Confirm the Atom Shell Commands are installed properly by taking the following steps:
  1. Open Terminal with Spotlight search (`command + space`, start typing `Terminal` and press `return`.)
  1. Type `atom .` in your terminal. **Be sure to include a space between `atom` and the `.`** If it is setup correctly, Atom will automatically open.
  1. If you get an error, make sure Atom is in the Applications folder, not the Downloads folder.
  1. If you _still_  get an error, make sure you've selected `Install Shell Commands` from the Atom menu.
  1. If it is _still_ not working, type this in the command line, then press `enter`:

  ```
  ln -s /Applications/Atom.app/Contents/Resources/app/atom.sh /usr/local/bin/atom

  ```
<br>

### Install Git

Git is a Version Control System (VCS). It allows you to save work on your project and reference previous states of a project, if needed. Normally when we save something on our computer, the newer version overwrites the older version. This is problematic if we need to look back at an earlier version. Git solves this problem by providing you multiple save points. You can get the current version, and any previous version. Git’s philosophy: never lose anything.

One thing we'd like to be clear on: Git is not the same thing as GitHub. You'll learn more about how they interact as you work through Mod 0.

**Action Steps:**
- 📌 Install Git (we will use Homebrew to do so) on your machine by taking the following steps:
  1. Open your Terminal, and type `brew install git`, then press `return`
  1. Check that it was successful by typing `git` in the Terminal. It should output something like what follows:
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
- 📌 Configure Git by carefully taking the following steps:
  1. Open Terminal with Spotlight search (press the `command + space` keys like we did previously).
  1. Type the following, one at a time, **substituting your own info** for the first two commands:
  ```
  git config --global user.name "Eric Weissman"
  git config --global user.email eric@example.com
  git config --global init.defaultBranch main
  git config --global core.editor "atom --wait"
  git config --global pull.rebase false
  ```

<br>

### Configure GitHub

GitHub is a widely used platform to host code projects and engage in a collaborative workflow. You will spend a lot of time on this site and become fluent in using it as a tool.

**Action Steps:**
- 📌 Create an account on [GitHub](https://github.com/)
- 📌 Update your [GitHub Profile](https://github.com/settings/profile) and be sure that you choose a username, status, profile info and picture that is appropriate for a professional setting; this is a professional platform where future/potential employers will be reviewing your work

SSH keys are a secure and convenient way of authenticating than typing in our password every time we want to interact with GitHub.

**Action Steps:**
- 📌 Set up your SSH key by taking the following steps:
  1. Open terminal and enter the following command - **Use the email associated with your GitHub account**
  ```
  $ ssh-keygen -t rsa -C "johndoe@example.com"
  ```
  1. When you're prompted to "Enter a file in which to save the key," press `return`. This accepts the default file location, which is `~/ssh/id_rsa`
  1. When asked to enter a password, press `enter`, which means "no password". You'll see a confirmation message that looks like what follows:
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
  1. In your Terminal, type `ssh-add ~/.ssh/id_rsa` and press `return`
  1. In your Terminal, run `pbcopy < ~/.ssh/id_rsa.pub` and press `return`. This will add the SSH key to your clipboard
  1.  Go to [https://github.com/settings/keys](https://github.com/settings/keys) (You must be logged into your account!)
  1.  Click the green "New SSH key" button.
  1.  Leave the "title" section empty
  1.  Paste the key into the "key" section with `command + v`.
  1.  Click the green "Add SSH key" button.
  1. To test that our key is configured, type `ssh -T git@github.com` into the Terminal, then press `return`. You should see something similar to the following. When you do, type `yes`, the press `return`:
  ```
  The authenticity of host 'github.com (192.30.252.153)'... can't be established.
  RSA key fingerprint is 00:11:22:33:44:55:66:77:88:99:aa:bb:cc:dd:ee:ff.
  Are you sure you want to continue connecting (yes/no)?
  ```
  1. At this point, if everything is set up correctly, you should see the the following:
  ```
  Hi <your_username>! You've successfully authenticated, but GitHub does not provide shell access.
  ```
