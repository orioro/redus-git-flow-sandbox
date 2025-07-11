## Repository structure

![Dependency graph](/docs/dependency-graph.png "Dependency graph")

# Git Commands: Quick Recap

## 🚀 Basic workflow
```bash
git status           # Show current changes and branch state
git add <file>       # Stage a file for commit
git add -p           # Add files interactively reviewing changes
git commit -m "msg"  # Commit staged changes
git log              # View commit history
git diff             # See unstaged changes
git diff --staged    # See staged changes
```

## ✅ Working with branches
```bash
git branch                     # List branches
git checkout <branch>          # Switch to existing branch
git checkout -b <branch>       # Create and switch to new branch
git pull origin <branch>       # Update local branch from remote
git push origin <branch>       # Push branch to remote
git fetch origin               # Fetch remote updates (but don’t merge)
```

## ✅ Rebasing
```bash
git rebase origin/next         # Replay commits on top of latest `next`
git rebase --continue          # After resolving conflicts, continue rebase
git rebase --abort             # Cancel rebase and return to starting point

## ✅ Merging
git merge <branch>             # Merge branch into current branch
git merge --no-ff <branch>     # Force merge commit (for tracking merges)
```

## ✅ Conflict resolution workflow
```bash
git status                     # See conflicted files
# Edit files manually to resolve
git add <resolved-files>       # Mark resolved
git rebase --continue          # If rebasing
git commit                     # If merging manually
```

## ✅ Cleaning up
```bash
git stash                      # Save local changes temporarily
git stash pop                  # Reapply stashed changes
git reset --hard HEAD          # Discard all local changes
```

## ✅ Remote management
```bash
git remote -v                  # Show remote URLs
git remote add origin <url>    # Add remote repo
```

## 📝 Summary tip for team
"When in doubt:
- `git status` to check what’s going on
- `git fetch origin` + `git rebase origin/next` to sync with upstream
- Always work on short-lived feature branches
- PR everything: no direct pushes to `next` or `main`."
