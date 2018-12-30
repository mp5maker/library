## GitHub ##

> It is a distributed version control

* Store Revision sin a project history in just one directory
* Rewind to any revision
* Easily Collaborate
* Repositories (Repo): 
    * Locally Stored
    * Container for a project track with git
    * Git tracks the contents for us
* Modify --> Staging --> Comitted
---
Starting
---
    git --version 
    git config --global user.name photon
    git config --global user.name khan.photon@gmail.com
    git config user.name
    git help -a
    git help -g
---
Creating a Repository
---
    git init
    git clone repository-link
    git remote
    git remote add repository-link
    git remote -v
---
Checkout
---
    git checkout c34bb9a  {Going back in time Commit}
    git checkout master {Checkout master}
    git checkout -b "Create-a-new-branch" {Checkout to the new branch and createa a new branch}
---
Staging
---
    git add . | git add filename.txt {Add files to the staging}
    git rm --cached . | git rm --cached filename.txt {Remove files from the staging}
    git status {Check the status of the staging files}
---
Commit
----    
    git commit -m "Some Text" {Commit}
    git commit --amend -m "Git Hub Starting {Change the name of the commit}
---
Revert
---
    git revert c34bb9a {Undoes one particular commit, also adds a commit} [shift + ':' => wq] => enter
---
Branch
---
    git branch "Create-a-new-branch" {Creates a new branch from the current branch}
    git branch  {Shows all the branch}  
    git branch -a  {Shows all the branch including the remote one}  
    git branch -m "Change-the-branch-name" {Change the name of the branch}
    git branch -d "Remove-the-branch" {Deletes the branch if it is merged}
    git branch -D "Remove-the-branch" {Deletes the branch}
---
Pull
---
    git pull upstream experimental | git pull origin master {Pulls the updated version of the branch}
---
Push
---    
    git push origin HEAD | git push origin master {Push the branch to remote}
    git push --force origin HEAD {Push branch after rebase or reset}
---
Reset
---    
    git reset --soft HEAD~1 {Reset to the last commit}
    git reset c34bb9a {Removes the commit and shows the changes}
    git reset c34bb9a --hard {Removes the commit and dissappears}
---
Rebase
---
    git rebase experimental {Rebasing with the experimental branch}
---
Log
---
    git log {Log of all the commits}
    git log --oneline {Log in oneline}
    git log --pretty=online {Pretty log in oneline}
    git log --pretty=format:"%ar %an %s %h" {Custom log in oneline}
---
Stash
---
    git stash {Stash the working directory and moved to a new branch without comitting}
    git stash pop {Open up the stash}
    git stash drop {Drop the stash}
---
Cherry Pick
---
    git cherry-pick c34bb9a
---
Merging
---
    git merge "feature-a" {Merging the branch with the master}
---
