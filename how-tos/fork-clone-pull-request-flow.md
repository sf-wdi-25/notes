## Submitting Labwork
### Fork, Clone & Pull Request Flow

1. Create a fork of the labwork repository by clicking "Fork" on the top right. Labwork repositories will always live in the `sf-wdi-25` GitHub organization.

  ![screen-shot-2015-10-20-at-17 26 49](https://cloud.githubusercontent.com/assets/7833470/10625501/b15a2bee-7758-11e5-8b12-2c84b785801b.png)

2. You'll see a screen like this while GitHub is forking the repo. Forking creates a copy of the original repo on your own GitHub account.

  ![screen-shot-2015-10-20-at-17 21 15-1](https://cloud.githubusercontent.com/assets/7833470/10625502/b422f2e8-7758-11e5-8cf1-09ae4fd7d946.png)

3. Now you have your own copy of the repo! Copy the "clone URL" from the bottom right.

  ![screen-shot-2015-10-20-at-17 22 43](https://cloud.githubusercontent.com/assets/7833470/10625504/b7243f42-7758-11e5-870c-56fdbb5ddd14.png)

4. Use the "clone URL" to clone the repo onto your local machine. Make sure you're in your `~/develop` directory before you clone!

  ```zsh
  ➜  cd ~/develop
  ➜  git clone <clone-url>
  ```

5. Change directories into the repo you just cloned (in this example, `command-line-mystery`).

  ```zsh
  ➜  cd command-line-mystery
  ```

6. At this point, begin writing code to complete the assignment. Make sure you're committing frequently and pushing to GitHub. A typical workflow looks something like this:

  ```zsh
  # make changes using your text editor
  ➜  git status
  ➜  git add .
  ➜  git commit -m "message describing changes"
  ➜  git push origin master
  ```

7. Once you're done with the assignment and have committed and pushed ALL of your changes to GitHub, it's time to make a pull request back to the original labwork repo. Go to your forked copy of the repo on GitHub, and click the "Pull Request" button.

  ![screen-shot-2015-10-20-at-17 25 24](https://cloud.githubusercontent.com/assets/7833470/10625506/ba15d4cc-7758-11e5-8302-a9c412567cc0.png)

8. GitHub takes you to a new view and asks if you want to create the pull request. Click the green button, and that's it - you've now created a pull request to submit your labwork!

  ![screen-shot-2015-10-20-at-17 25 49](https://cloud.githubusercontent.com/assets/7833470/10625507/bc97d38a-7758-11e5-8fe9-e4846e06e454.png)

## Resources

* <a href="https://github.com/0nn0/terminal-mac-cheatsheet/wiki/Terminal-Cheatsheet-for-Mac-(-basics-)" target="_blank">Terminal Cheatsheet for Mac</a>
* <a href="https://training.github.com/kit/downloads/github-git-cheat-sheet.pdf" target="_blank">Git Cheat Sheet</a>
