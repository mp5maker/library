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
---
Creating a Reposition
---
    git init
    git clone "Repository Link"
    git remote
    git remote -v
    
    git checkout -b "Create a new branch"
    git add . | git add filename.txt
    git rm --cached . | git rm --cached filename.txt
    git status
    git commit -m "Some Text"
    git ammend -m "Change Commit"
    git branch -m "Change the branch name"
    git push origin HEAD
    
    git reset --soft HEAD~1 
    git push --force origin HEAD
    git rebase experimental
    git push --force origin HEAD



