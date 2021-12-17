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
- [Configure GitHub](#configure-github)
- [Install Node](#install-node)
- [Install rbenv](#install-rbenv)

### New to Mac?

If this is your first time using a Mac, it is recommended you spend some time learning about the basics of using a Mac and getting comfortable with it.

**Action Steps:**
- _(Optional) Watch [this video](https://www.youtube.com/watch?v=67keaaWOKzE&t=0s)_

<br>

### Install Rectangle

Rectangle is a screen management application that allows you to move and resize windows to maximize your screen space as well as your time.

Once you've installed Rectangle, open the application and it will run in the background. You should see a smaller version of the Rectangle icon in the top right corner of your screen.

**Action Steps:**
- Download and install [Rectangle](https://rectangleapp.com/)
- Take some time to play around with the commands to adjust the positioning and size of different windows on your screen using the Rectangle shortcuts

<br>

### Install Chrome

Chrome includes a set of Developer Tools that will come in handy down the road. Additionally, it is always on the cutting edge of being able to support new web technologies.

**Action Steps:**
- _If you haven't already,_ [download and install Chrome](https://www.google.com/chrome/)

<br>

### Install Slack

Slack is our main communication tool at Turing. If you are not familiar with it, it may seem overwhelming at first. There are a lot of tips and tricks you'll pick up along the way.

**Action Steps:**
- [Download and install the Slack desktop application](https://slack.com/downloads/mac)

<br>

### Install Zoom

Zoom is the primary tool for classroom time, study halls, and community building time at Turing.

**Action Steps:**
- [Download and install Zoom](https://zoom.us/download/) for _Macs with Apple Silicon chips_
- If you haven't already, create an account with Zoom
- [Update your name in your profile](https://support.zoom.us/hc/en-us/articles/201363203-My-Profile) following this pattern: First Name, Last Initial, pronouns, Program - `Kaitlyn V (she/her), FE`
- [Learn how to raise your hand](https://support.zoom.us/hc/en-us/articles/205566129-Raise-Hand-In-Webinar)
- Give your Zoom account screen sharing permission and microphone permission

<br>

### Enable Screen Sharing

Turing is a fully remote and highly collaborative program, which means you will be sharing your screen a lot. 

**Action Steps:**
- Enable screen sharing permissions by taking the following steps:
1. Open the System Preferences app by pressing the `command + space` keys at the same time, which opens Spotlight. Then, start typing "System Preferences"; it will auto-fill. Press `return` and the System Preferences appliaction will open
1. Click `Security and Privacy`
1. Click the `Privacy` tab
1. Scroll down to Screen Recording and click the small "plus sign" button. In the window that opens, navigate to the Applications, then click on "Zoom"

<br>

<div class="try-it">
  <h3>Running Commands in the Terminal</h3>
  <p>The remainder of the Computer Setup steps will be completed via the Terminal application. This may be very new and potentially overwhelming to you! Follow the directions closely to work through each section.</p>
  <p>The directions will use a phrase that may be new to you: "Run ____". When you are instructed to "run something", it means that you need to type those characters into the Terminal where you see the command prompt, then press <code>return</code>.</p>
</div>

### Install Xcode-select

[Xcode](https://developer.apple.com/xcode/) is a suite of development tools published by Apple. If we wanted to develop software for the Apple Ecosystem (iPhone apps, macOS apps, etc), we would use Xcode as our editor. Even though we're not building iPhone apps, Xcode provides some system dependencies that we need.

Rather than download Xcode via the Apple Store, we can get a much smaller selection of necessary tools, called `xcode-select`, via our Terminal.

**Action Steps:**
- Install `xcode-select` to your machine by taking the follwoing steps:
  1. Open the Terminal by pressing the `command + space` keys at the same time, which opens Spotlight. Then start typing "Terminal"; it will auto-fill. Press `return` and your Terminal application will open.

  1. Once terminal is open, run `xcode-select --install`. This download _may_ take up to several hours,
  1. When prompted, enter the password you use to login to your computer.
  1. Run `xcode-select`. If `xcode-select` was installed properly, you should see something like this:
  ```
  $ xcode-select
    xcode-select: error: no command option given
    .
    Usage: xcode-select [options]
    .
    Print or change the path to the active developer directory. This directory
    controls which tools are used for the Xcode command line tools (for 
    example, xcodebuild) as well as the BSD development commands (such as cc 
    and make).
    .
    Options:
    -h, --help                  print this help message and exit
    (... and many more lines similar to the one above)
  ```

<br>

### Install Homebrew

Homebrew is a package management system that allows us to install and run various programs on our machines - programming specific programs that we can only install via the Terminal.

**Action Steps:**
- Install Homebrew by taking the following steps (this may involve a couple big chunks of time where you just have to wait around):
  1. Open the Finder window by typing `cmd + space` and start typing `Finder`
  1. Click on the `Applications` folder on the left sidebar
  1. Click into the folder called `Utilities`
  1. Right click on the `Terminal` app and choose `Get Info`
  1. Check the box that says `Open using Rosetta`
  1. Open the `Terminal` app by either double clicking the icon or using a Spotlight search for `Terminal`
  1. Run the following command:
  ```
  /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
  ```
  1. When prompted, enter the password you use to log in to your computer. It needs this because it installs its packages in a place that all users of this computer can access. You will get a message that says, "Press RETURN to continue or any other key to abort." Press `return`.
  1. When it has completed the installation, which may take some time, quit the terminal using `cmd + q` then start a new Terminal session. Run `brew doctor`. The output should tell you that everything is fine:
  ```
  $ brew doctor
  Your system is ready to brew.
  ```
  1. If you get a warning message something like what follows, follow the first solution it provides by running `softwareupdate --all --install --force`:
  ```
  WARNING: A newer Command Line Tools release is available.
  Update them from Software Update in System Preferences or run:
  .
    softwareupdate --all --install --force
  .
  If that doesn't show you any updates, run:
    sudo rm -rf /Library/Developer/CommandLineTools
    sudo xcode-select --install
  .
  Alternatively, manually download them from:
    https://developer.apple.com/download/all/.
  .
  You should download the Command Line Tools for Xcode 13.1.
  ```
  1. If you had that warning and ran that additional command, when it has completed the installation, which may take some time, quit the terminal using `cmd + q` then start a new Terminal session. Run `brew doctor`. The output should tell you that everything is fine:
  ```
  $ brew doctor
  Your system is ready to brew.
  ```

<br>

### Install and Configure Atom

Atom is a code editor which is a program where we write and edit code. You've probably used Word or Google Documents in the past; this is similar, but a program specifically designed for code to be written in. There are many code editors available, and once you get a foundation you may choose to use others. We ask all students in Mod 0 and Mod 1 to use Atom so that staff can best support students and so that students can easily collaborate with one another.

**Action Steps:**
- [Download and install Atom](https://atom.io/)
- After downloading Atom, **ensure** that Atom appears in your Applications folder and is no longer in your Downloads folder!  

Atom is where we write the code that powers our applications, but we'll also do important work in the Terminal. We need our Terminal to be able to "talk to" Atom.

**Action Steps:**
- Open Atom (from your Applications folder), drop down the Atom menu in the top left corner of your screen, and click "Install Shell Commands".
- Confirm the Atom Shell Commands are installed properly by taking the following steps:
  1. Open Terminal with Spotlight search (`command + space`, start typing `Terminal` and press `return`.)
  1. Run `atom .` in your terminal. **Be sure to include a space between `atom` and the `.`** If it is setup correctly, Atom will automatically open.
  1. If you get an error, make sure Atom is in the Applications folder, not the Downloads folder.
  1. If you _still_  get an error, make sure you've selected `Install Shell Commands` from the Atom menu.
  1. If it is _still_ not working, type this in the command line, then press `enter`:

  ```
  ln -s /Applications/Atom.app/Contents/Resources/app/atom.sh /usr/local/bin/atom

  ```

<br>

### Install Git

Git is a Version Control System. It allows you to save work on your project and reference previous states of a project, if needed. Normally when we save something on our computer, the newer version overwrites the older version. This is problematic if we need to look back at an earlier version. Git solves this problem by providing you multiple save points. You can get the current version, and any previous version. Git’s philosophy: never lose anything.

Note: Git is not the same thing as GitHub. You'll learn more about how they interact as you work through Mod 0.

**Action Steps:**
- Install Git on your machine by taking the following steps:
  1. Open your Terminal, and run `brew install git`
  1. Check that it was successful by running `git` in the Terminal. It should output something like what follows:
  ```
  $ git
  usage: git [--version] [--help] [-C <path>] [-c <name>=<value>]
            [--exec-path[=<path>]] [--html-path] [--man-path] [--info-path]
            [-p | --paginate | -P | --no-pager] [--no-replace-objects] [--bare]
            [--git-dir=<path>] [--work-tree=<path>] [--namespace=<name>]
            <command> [<args>]
  .
  These are common Git commands used in various situations:
  start a working area (see also: git help tutorial)
    clone      Clone a repository into a new directory
    init       Create an empty Git repository or reinitialize an existing one
  .
  .
  .
  ```
- Configure Git by carefully taking the following steps:
  1. Open Terminal with Spotlight search (with`command + space`).
  1. Run the following commands, one at a time, **substituting your own info** for the first two commands:
  ```
  git config --global user.name "Eric Weissman"
  git config --global user.email eric@example.com
  git config --global init.defaultBranch main
  git config --global core.editor "atom --wait"
  git config --global pull.rebase false
  ```

<br>

### Configure GitHub

GitHub is a widely used platform that hosts code projects and allows for collaborative workflows. You will spend a lot of time on this site and become fluent in using it as a tool.

**Action Steps:**
- [Create an account on GitHub](https://github.com/)
- [Update your GitHub Profile](https://github.com/settings/profile) and be sure that you choose a username, status, profile info and picture that is appropriate for a professional setting; this is a professional platform where future/potential employers will be reviewing your work

SSH keys are a secure and convenient way of authenticating than typing in our password every time we want to interact with GitHub.

**Action Steps:**
- Set up your SSH key by taking the following steps:
  1. Open terminal and run the following command - **Use the email associated with your GitHub account**
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
  1. In your Terminal, run `ssh-add ~/.ssh/id_rsa`
  1. In your Terminal, run `pbcopy < ~/.ssh/id_rsa.pub`. This will add the SSH key to your clipboard
  1.  Go to [https://github.com/settings/keys](https://github.com/settings/keys) (You must be logged into your account!)
  1.  Click the green "New SSH key" button.
  1.  Leave the "title" section empty
  1.  Paste the key into the "key" section with `command + v`.
  1.  Click the green "Add SSH key" button.
  1. To test that our key is configured, run `ssh -T git@github.com` into the Terminal. You should see something similar to the following. When you do, run `yes`:
  ```
  The authenticity of host 'github.com (192.30.252.153)'... can't be established.
  RSA key fingerprint is 00:11:22:33:44:55:66:77:88:99:aa:bb:cc:dd:ee:ff.
  Are you sure you want to continue connecting (yes/no)?
  ```
  1. At this point, if everything is set up correctly, you should see the the following:
  ```
  Hi <your_username>! You've successfully authenticated, but GitHub does not provide shell access.
  ```

### Install Node

To write JavaScript in the command line and use essential "packages" while building apps, `node` and `npm` must be on the machine. This applies to both Front End and Back End students. 

**Action Items:**
- Install `node` and verify it was installed correctly by taking the following steps:
  1. In the Terminal, run `brew update`. This may take several minutes
  1. Run `brew install node`. This may also take several minutes
  1. Run `node -v`. The output should be _something_ like `v17.2.0`
  1. Run `npm -v`. The output should be _something_ like `8.1.4`

<br>

### Install rbenv (Back End students _only_)

**Action Items:**
- Install `rbenv` and verify it was installed correctly by taking the following steps:
  1. In the Terminal, run `brew update`. This may take several minutes
  1. Run `brew install rbenv`. This may also take several minutes
  1. Run `rbenv init`. The output should be _something_ like:
    ```
    # Load rbenv automatically by appending
    # the following to ~/.zshrb
    .
    eval "$(rbenv init -)"
    ```
  1. Run `atom ~/.zshrc`. Atom should open to a blank file, the `zshrc` file. Inside this file, type or copy-and-paste in: `eval "$(rbenv init -)"` 
  1. Close your Terminal using `cmd + q` - this is absolutely neccessary! Clicking the red dot in the corner is not a substitute
  1. Open the Terminal, and run `rbenv versions`. As long as you don't get an error message, `rbenv` has been installed correctly
- Use `rbenv` to change Ruby versions by taking the following steps:
  1. In the Terminal, run `rbenv install 2.7.2`. This may take several minutes, and will likely print a lot of output. Wait patiently until it finishes/the command prompt returns
  1. Run `rbenv versions`. You should now see `2.7.2` listed
  1. Run `rbenv local 2.7.2` 
  1. Run `ruby -v`. The output should be something like `ruby 2.7.2p105 (2018-10-18 revision 65156) [x86_64-darwin17]`. If the output does not include `ruby 2.7.2`, `cmd + q` out of the terminal and start this step over
  1. Run `rbenv global 2.7.2` then `rbenv rehash`. You should not expect any output from those commands
- If you've followed these steps and are having issues, please DM the Mod 0 Lead on Slack ASAP. It is essential `rbenv` is installed on your machine correctly.