# Git docs

Version control system **VCS** or Source code manager **SCM**

- keeps track of every modification to the code in a special kind of database.
- if a mistake is made developers can turn back the clock and compare earlier versions of the code to help fix.

## Version Control systems types

### 1- local version contro system

- very common because it is so simple
- compy files into another directory

#### Advantages

- very common & simple

#### Disadvantages

- Incredibly error prone

### 2- centeralied verison

- Have a centeral server that contains all the versioned files.
- Have a number of clients that check out files from that central place.
- All users connect to a central, master repository.

#### Advantages

- Everyone knows what everyone else on the project is doing.
- Administrators have fine-grained control.

#### Disadvantages.

- Single point of failur.

### 3- Distributed version control systems.

- contain multiple **respositories**
- Each user has their own reposistory and working copy.
- Each user has the entire repository on thier computer.

#### Advantages.

- No central server.
- Fully mirror the repository, including its full history.
- Every clone is really a full backup of all the data.
  Ex. `Git, Mercurial`

## Git

- Distributed version control system.
- free and open source tool.
- for tracking changes in source code during software development.

### Git keywords.

**Repository** `repo`: A directory that contains your project work, as well as a few files, which are used to communicate with GIT. Repositories can exist either locally on your computer.

**Commit** `snapshot`: Git thinks of its data like as set of snapshots of a main file system. Every time you commit, or save the state of your project in GIt, it basically take a picture of what all your files look like at the monument and stores preference to thea snapshot.

**Working Directory** The files that you see in your computer file system.

**Staging area of index or index** A file in the git directory that stores information about next commit, you can think of the staging area as a prep table where HIT will take the next commit, files on the Staging index are poised to be added to the repository.

**SHA** A sha is basically an ID number for each commit, it is a 40-character string composed of charters and calculated base on the contents of a file or directory strutter in Git `SHA` is shorthand for SHA hash.

**Branch** A branch is when a new line of development is created that diverges from the main line of development. The alternative line of development can continue without alterning the main line.

## Git command

```bash
ls
ls -a # show hidden file

cd

#make a new file
touch index.html

rm

pwd
```

```bash
git help


git config --global user.name "Naif"
git config --global user.email "naif@gmail.com"

git config --get user.name


git init

git clone https://github.com/naif-sameer/profile-site

git log
git log --oneline
git log -p '4a60beb'
git log --stat


git reflog


git show


git add <file>
git add . # add all files

git restore --staged <file>  # to unstage file
git restore <file> # discard changes in working directory


git reset head <file> # reset (erase) commits

# default
git reset --mixed

# return to staging index
git reset --soft

# deleted
git reset --hard


# short cut for add and commit the files
# files should be tracked before.
git commit -a -m 'Update files'
# change the last commit message
git commit --amend -m ''

# revert files
git revert


# add a marker on a specific commit.
# tag does not move around as new commits are added
git tag
git tag -a v1.0.1 a87984 -m "Naif add tag"

#-------------------------------------
# create new branch repo to allows
#multiple lines of developments
git branch
git branch sidebar

# create and change the branch to newBranch
git branch -b newBranch

# create the branch from old commit
git branch alt-sidebar-loc 42a69f

git branch -d alt-sidebar-loc

#-------------------------------------

# switch between branches and tags
git checkout branchName

# combines changes on different branches
git merge branchName -m 'you can make a new branch'

```

## git ignore

Add `.gitignore` file to your project in the same directory that the hidden .git directory is located. all you have to do is list the names of files that you want Git to ingore 'not Tracked' and it will ignore the file.

## types of regular merge

1. Fast Forward.

2. Slow forward

# Github

- company providers hosting for software development version control.
- Subsidiary of Microsoft.

## github words

**Remote repository** A link of directory that contains your project work on github website that all team member use to exchange their changes.

**Clone** A local version of a repository , including all commits and branches from (local or remote) .

**Fork** A copy of a repository on Github owned by a different user.

**Pull** You download changes from remote repo to your local repo.

**Push** you upload changes from local to remote server.
