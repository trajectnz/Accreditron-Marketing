# Accreditron Marketing page

## technology
Accreditron's marketing website is build with the static site generator jekyll

For more details, read the [jekyll documentation](http://jekyllrb.com/)

## Hosting and Deployment
This marketing website is hosted on firebase and is deployed via firebase command line tools

```$ npm install -g firebase-tools```

navigate to folder root of accreditron-marketing

```$ firebase deploy```

Please contact accreditron team to be added as an authorised party to firebase to manage deployment


## Detailed Instructions
When setting this up on a fresh Mac, first you need to install the command-line tools, to install homebrew, to install ruby, to install jekyll. There's nice detailed instruction [here](https://jekyllrb.com/docs/installation/macos/). The terminal application is installed on all macs in Applications/Utilities. To use it, type in your command, then press enter.
 
Once that's done, you can test your setup by running `jekyll -v` in your terminal. You should get back a version number like `3.1.2` or something. 

Once that's done, you need to clone this repo to your computer. My personal favourite way to do that is to use github desktop https://desktop.github.com/. The current most up-to-date branch is `Site 3.0`

Once you've got your repo cloned to a location on your computer (I like cloning them to my desktop) you need to navigate to it in a terminal window. In github desktop you can right-click on a repo in the sidebar, then `Open in Terminal`. 

The other way to get to it is using the `cd` command (change directory). So the deafult terminal window opens to my home-folder, so I'd run `cd Desktop` then `cd Accreditron-Marketing` to get to the folder on my desktop. 

Other useful commands:
`cd ../` - go 'up' the file tree instead of down
`ls` list all files and folders in your current folder

Once I've got my terminal pointed at the repo, it's time to run it. Run `bundle exec jekyll serve`. This will start a local server for you to view the site. Any changes you make to the local files will be automatically reflected on this local server! Neat! Make some changes! Have a blast!

Now you've got some fly changes, time to deploy this bad boy. You need to install the [firebase commandline tools](https://github.com/firebase/firebase-tools), which will also involve installing `Node.js` and `NPM`.

The next step is giving your google account permission to access the firebase project, which is called `Accreditron`. Ask ashlyn or simon for access. Once you have access, run `firebase login`, and login! Now you should also be able to go to `console.firebase.google.com` and view more deets about the project.

In order to deploy, you first need to build the jekyll site. Run `jekyll serve`. Then run `firebase deploy` to deploy it. You can check at console.firebase.google.com to see if the new build came through (and roll back builds if something terrible happened). 

And that's that! Don't forget to commit any changes!

