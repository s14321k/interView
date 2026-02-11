// Git - Content Data
const gitContentData = `<ul>
<li><a href="#git--github-qa-and-commands">Git &amp; GitHub Q\&amp;A and Commands</a></li>
</ul>
<hr>
<h1 id="git-github-qa-and-commands">Git &amp; GitHub Q\&amp;A and Commands</h1>
<hr>
<details open>
<summary><strong>1. Git vs GitHub</strong></summary>
<ul>
<li><strong>Git:</strong> A distributed version control system to track changes in source code during software development.</li>
<li><strong>GitHub:</strong> A web-based hosting service for Git repositories, providing collaboration tools, issue tracking, and more.</li>
<li>You <strong>can use Git without GitHub</strong>, but GitHub requires Git to manage repositories.</li>
</ul>
</details>
<hr>
<details>
<summary><strong>2. Create a New Repository on the Command Line</strong></summary>
<pre><code class="language-bash">
echo &quot;# Sarath69Kumar.github.io&quot; &gt;&gt; README.md

git init
git add README.md        # Add single file
git add .                # Add all files (new and existing)
git commit -m &quot;first commit&quot;
git remote add origin git@github.com:s14321k/SbMsDocKub.git
git branch -M main       # Rename current branch to main
git push -u origin main  # Push to remote repository
</code></pre>
<hr>
<p>If push or commit fails due to index.lock file:</p>
<pre><code class="language-bash">
rm -f .git/index.lock
</code></pre>
</details>
<hr>
<details>
<summary><strong>3. Push Contents to an Existing Repo</strong></summary>
<pre><code class="language-bash">
cd /path/to/repo
git add .
git commit -m &quot;commit message&quot;
git branch -M branchName
git push -u origin main
</code></pre>
<hr>
<p><strong>Common Git commands</strong></p>
<ul>
<li>Check local changes: <code>git status</code></li>
<li>Fetch remote changes (without merge): <code>git fetch</code></li>
<li>Pull remote changes and merge: <code>git pull</code></li>
</ul>
</details>
<hr>
<details>
<summary><strong>4. Navigate Directories in Git Bash</strong></summary>
<ul>
<li>Go home directory: <code>cd</code> or <code>cd ~</code></li>
<li>Go up one directory: <code>cd ..</code></li>
<li>Go back to previous directory: <code>cd -</code></li>
<li>Go to root: <code>cd /</code></li>
<li>Navigate multiple levels: <code>cd ~/folder/subfolder/</code></li>
</ul>
<p>Example:</p>
<pre><code class="language-bash">
cd ~/Desktop
</code></pre>
</details>
<hr>
<details>
<summary><strong>5. Remove Files/Folders</strong></summary>
<pre><code class="language-bash">
git checkout branch_name     # Ensure on correct branch
git rm -r folder-name        # Remove folder recursively
git commit -m &quot;Remove folder&quot;
git push origin branch_name
</code></pre>
<hr>
<p>Rename files:</p>
<pre><code class="language-bash">
git mv oldfilename newfilename
git commit -m &quot;Renamed file&quot;
</code></pre>
</details>
<hr>
<details>
<summary><strong>6. Rollback Commit</strong></summary>
<ul>
<li>Rollback last commit but keep changes staged:</li>
</ul>
<pre><code class="language-bash">
git reset --soft HEAD~1
</code></pre>
<ul>
<li>Rollback last commit and discard changes:</li>
</ul>
<pre><code class="language-bash">
git reset --hard HEAD~1
</code></pre>
<ul>
<li>Undo merge:</li>
</ul>
<pre><code class="language-bash">
git reset --hard ORIG_HEAD
</code></pre>
</details>
<hr>
<details>
<summary><strong>7. Branch Management</strong></summary>
<ul>
<li>Create a new branch:</li>
</ul>
<pre><code class="language-bash">
git branch new-branch-name
</code></pre>
<ul>
<li>Create and switch to new branch:</li>
</ul>
<pre><code class="language-bash">
git checkout -b new_branch_name
# or
git switch -c new_branch_name
</code></pre>
<ul>
<li>Check branch origin:</li>
</ul>
<pre><code class="language-bash">
git reflog
</code></pre>
<ul>
<li>Compare two branches:</li>
</ul>
<pre><code class="language-bash">
git merge-base current_branch comparing_branch
</code></pre>
</details>
<hr>
<details>
<summary><strong>8. SSH Key Generation for GitHub</strong></summary>
<p>Generate SSH key:</p>
<pre><code class="language-bash">
ssh-keygen -t ed25519 -C &quot;your-email@example.com&quot;
</code></pre>
<ul>
<li>Press enter to accept default file location.</li>
<li>Enter a passphrase or leave blank.</li>
<li>Add generated public key (<code>id_ed25519.pub</code>) to GitHub at <a href="https://github.com/settings/ssh/new">https://github.com/settings/ssh/new</a>.</li>
</ul>
<p>List <code>.ssh</code> folder:</p>
<pre><code class="language-bash">
ls -al ~/.ssh
</code></pre>
</details>
<hr>
<details>
<summary><strong>9. Pushing to Codeberg (or other Git hosting)</strong></summary>
<pre><code class="language-bash">
touch README.md
git init
git checkout -b main
git add README.md
git commit -m &quot;first commit&quot;
git remote add origin https://codeberg.org/username/repository.git
git push -u origin main
</code></pre>
<hr>
<p>Push existing repo:</p>
<pre><code class="language-bash">
git remote add origin https://codeberg.org/username/repository.git
git push -u origin main
</code></pre>
</details>
<hr>
<details>
<summary><strong>10. Using Git in IDE (e.g., IntelliJ)</strong></summary>
<ul>
<li>Clone repository via VCS &gt; Git &gt; paste clone URL &gt; Clone.</li>
<li>Switch branches via bottom-right corner branch icon.</li>
<li>Use <code>Ctrl+Shift+R</code> to find/replace in project.</li>
<li>Use commit tab to select files, commit and push.</li>
</ul>
</details>
<hr>
<details>
<summary><strong>11. NPM Commands</strong></summary>
<ul>
<li>Install packages with offline mode and no audit:</li>
</ul>
<pre><code class="language-bash">
npm install --prefer-offline --no-audit
</code></pre>
<ul>
<li>Show npm config:</li>
</ul>
<pre><code class="language-bash">
npm config list
</code></pre>
<ul>
<li>Update npm globally:</li>
</ul>
<pre><code class="language-bash">
npm install npm -g
</code></pre>
<ul>
<li>List globally installed packages:</li>
</ul>
<pre><code class="language-bash">
npm list -g --depth=0
</code></pre>
<ul>
<li>Show outdated packages:</li>
</ul>
<pre><code class="language-bash">
npm outdated
</code></pre>
</details>
<hr>
<details>
<summary><strong>12. Git Pull vs Fetch</strong></summary>
<table>
<thead><tr>
<th>Command</th>
<th>Description</th>
<th>Use case</th>
</tr></thead><tbody>
<tr>
<td><code>git fetch</code></td>
<td>Downloads changes from remote but <strong>does not merge</strong> into your working branch.</td>
<td>Review changes before merging. Safer.</td>
</tr>
<tr>
<td><code>git pull</code></td>
<td>Downloads changes and <strong>immediately merges</strong> into your current branch.</td>
<td>Quick update and merge. More convenient.</td>
</tr>
</tbody></table>
<hr>
<p><strong>Summary:</strong></p>
<ul>
<li>Fetch = get changes only</li>
<li>Pull = get + merge changes</li>
</ul>
<p>Use fetch to review first, pull to update fast.</p>
</details>
<hr>
<p>Sure! Here’s a <strong>step-by-step Git beginner tutorial</strong> in a clear, friendly way:</p>
<details>
<summary><strong>Step 1: Install Git</strong></summary>
<ul>
<li>Download Git from <a href="https://git-scm.com/downloads">git-scm.com</a> and install it on your computer.</li>
<li>After installation, you can use Git via command line (Git Bash on Windows) or GUI tools like GitHub Desktop.</li>
</ul>
</details>
<details>
<summary><strong>Step 2: Configure Git</strong></summary>
<p>Open your terminal or Git Bash and set your identity so Git knows who you are:</p>
<pre><code class="language-bash">
git config --global user.name &quot;Your Name&quot;
git config --global user.email &quot;youremail@example.com&quot;
</code></pre>
<p>This info will appear in your commits.</p>
</details>
<details>
<summary><strong>Step 3: Create a New Repository</strong></summary>
<p>To create a new Git repository in an existing folder:</p>
<pre><code class="language-bash">
cd your-project-folder
git init
</code></pre>
<p>This starts tracking files in that folder.</p>
</details>
<details>
<summary><strong>Step 4: Stage and Commit Changes</strong></summary>
<ul>
<li>Add files to the staging area (preparing them for commit):</li>
</ul>
<pre><code class="language-bash">
git add filename.txt          # add a single file
git add .                    # add all new and changed files
</code></pre>
<ul>
<li>Commit your changes with a message:</li>
</ul>
<pre><code class="language-bash">
git commit -m &quot;Add initial project files&quot;
</code></pre>
<p>Each commit is like a snapshot of your project.</p>
</details>
<details>
<summary><strong>Step 5: Connect to a Remote Repository</strong></summary>
<p>If you want to push your code to GitHub or any Git server:</p>
<pre><code class="language-bash">
git remote add origin git@github.com:username/repo.git
</code></pre>
<p>Replace the URL with your repo URL.</p>
</details>
<details>
<summary><strong>Step 6: Push Changes to Remote</strong></summary>
<p>Send your commits to the remote server:</p>
<pre><code class="language-bash">
git push -u origin main
</code></pre>
<p>The <code>-u</code> sets the upstream branch so next pushes can be done simply by <code>git push</code>.</p>
</details>
<details>
<summary><strong>Step 7: Pull Latest Changes</strong></summary>
<p>To update your local repo with changes from remote:</p>
<pre><code class="language-bash">
git pull
</code></pre>
<p>This fetches and merges remote changes.</p>
</details>
<hr>
<p>Great! Here’s a clear, friendly explanation of <strong>branching and merging in Git</strong> with collapsible sections:</p>
<details>
<summary><strong>What is a Branch?</strong></summary>
<ul>
<li>A <strong>branch</strong> is a separate line of development in your project.</li>
<li>Think of it like a parallel universe where you can try new features or fixes without affecting the main code.</li>
<li>The default branch is usually called <code>main</code> or <code>master</code>.</li>
</ul>
</details>
<details>
<summary><strong>Why Use Branches?</strong></summary>
<ul>
<li>To work on new features independently.</li>
<li>To fix bugs safely.</li>
<li>To experiment without breaking the stable code.</li>
<li>To collaborate with others without conflict.</li>
</ul>
</details>
<details>
<summary><strong>How to Create and Switch Branches</strong></summary>
<ul>
<li><strong>Create a new branch:</strong></li>
</ul>
<pre><code class="language-bash">
git branch feature-branch
</code></pre>
<ul>
<li><strong>Switch to the new branch:</strong></li>
</ul>
<pre><code class="language-bash">
git checkout feature-branch
</code></pre>
<p>Or combine both in one command:</p>
<pre><code class="language-bash">
git checkout -b feature-branch
</code></pre>
<p>From Git 2.23+, you can also use:</p>
<pre><code class="language-bash">
git switch -c feature-branch
</code></pre>
</details>
<details>
<summary><strong>Check Which Branch You Are On</strong></summary>
<pre><code class="language-bash">
git branch
</code></pre>
<p>The current branch will be highlighted with a <code>*</code>.</p>
</details>
<details>
<summary><strong>Make Changes and Commit on Your Branch</strong></summary>
<p>Just like usual:</p>
<pre><code class="language-bash">
git add .
git commit -m &quot;Add new feature&quot;
</code></pre>
<p>These commits stay isolated on your branch.</p>
</details>
<details>
<summary><strong>Merging Branches</strong></summary>
<p>When your feature or fix is ready, merge your branch into another branch (usually <code>main</code>):</p>
<ul>
<li>Switch to the branch you want to merge into:</li>
</ul>
<pre><code class="language-bash">
git checkout main
</code></pre>
<ul>
<li>Merge the feature branch:</li>
</ul>
<pre><code class="language-bash">
git merge feature-branch
</code></pre>
<p>This will bring all the commits from <code>feature-branch</code> into <code>main</code>.</p>
</details>
<details>
<summary><strong>Resolving Merge Conflicts</strong></summary>
<ul>
<li>Sometimes Git can’t automatically merge files because of conflicting changes.</li>
<li>You will see conflict markers like <code>&lt;&lt;&lt;&lt;&lt;&lt;</code>, <code>======</code>, <code>&gt;&gt;&gt;&gt;&gt;&gt;</code>.</li>
<li>You need to manually edit the files to resolve conflicts.</li>
<li>After fixing, add and commit:</li>
</ul>
<pre><code class="language-bash">
git add conflicted-file.txt
git commit -m &quot;Resolve merge conflict&quot;
</code></pre>
</details>
<details>
<summary><strong>Deleting a Branch After Merge</strong></summary>
<p>If you no longer need the feature branch:</p>
<pre><code class="language-bash">
git branch -d feature-branch
</code></pre>
<p>If the branch is not merged and you want to force delete:</p>
<pre><code class="language-bash">
git branch -D feature-branch
</code></pre>
</details>
<hr>
<p>Awesome! Here’s a clear and friendly explanation of <strong>Git Rebase</strong> with collapsible markdown:</p>
<details>
<summary><strong>What is Git Rebase?</strong></summary>
<ul>
<li>Git rebase is a way to <strong>reapply commits from one branch onto another base commit</strong>.</li>
<li>Instead of merging branches with a merge commit, rebase <strong>rewrites history</strong> by moving your branch’s commits on top of another branch.</li>
<li>It helps keep a <strong>clean, linear commit history</strong>.</li>
</ul>
</details>
<details>
<summary><strong>Why Use Rebase?</strong></summary>
<ul>
<li>To keep commit history simple and linear.</li>
<li>To avoid unnecessary merge commits.</li>
<li>To update your feature branch with the latest changes from the main branch before merging.</li>
<li>Makes reviewing history easier.</li>
</ul>
</details>
<details>
<summary><strong>How to Use Rebase</strong></summary>
<p>Suppose you’re working on <code>feature-branch</code> and want to update it with the latest <code>main</code> branch changes:</p>
<ul>
<li>Checkout your feature branch:</li>
</ul>
<pre><code class="language-bash">
git checkout feature-branch
</code></pre>
<ul>
<li>Rebase on top of <code>main</code>:</li>
</ul>
<pre><code class="language-bash">
git rebase main
</code></pre>
<p>This takes your feature commits and reapplies them after the latest commits from <code>main</code>.</p>
</details>
<details>
<summary><strong>What Happens During Rebase?</strong></summary>
<ul>
<li>Git <strong>temporarily saves</strong> your commits.</li>
<li>Resets your branch to point at the target branch (<code>main</code>).</li>
<li>Reapplies your commits one by one on top of <code>main</code>.</li>
<li>If there are conflicts, Git pauses and asks you to resolve them.</li>
</ul>
</details>
<details>
<summary><strong>Resolving Conflicts During Rebase</strong></summary>
<ul>
<li>Git will stop on a conflicted commit and show which files have conflicts.</li>
<li>Fix the conflicts manually.</li>
<li>Stage the resolved files:</li>
</ul>
<pre><code class="language-bash">
git add conflicted-file.txt
</code></pre>
<ul>
<li>Continue the rebase:</li>
</ul>
<pre><code class="language-bash">
git rebase --continue
</code></pre>
<ul>
<li>To abort the rebase and go back to the original state:</li>
</ul>
<pre><code class="language-bash">
git rebase --abort
</code></pre>
</details>
<details>
<summary><strong>Rebase vs Merge</strong></summary>
<table>
<thead><tr>
<th>Feature</th>
<th>Merge</th>
<th>Rebase</th>
</tr></thead><tbody>
<tr>
<td>History</td>
<td>Creates a merge commit, keeps branch structure</td>
<td>Rewrites commits to create linear history</td>
</tr>
<tr>
<td>Commit Graph</td>
<td>Branching and merging shown</td>
<td>Linear commit history</td>
</tr>
<tr>
<td>Conflict Handling</td>
<td>Conflicts handled once during merge</td>
<td>Conflicts may need to be resolved multiple times during rebase</td>
</tr>
<tr>
<td>Use Case</td>
<td>Good for preserving full history</td>
<td>Good for clean history before merging feature branches</td>
</tr>
</tbody></table>
</details>
<details>
<summary><strong>When NOT to Rebase</strong></summary>
<ul>
<li>Don’t rebase commits that have already been pushed to a shared/public repository — it rewrites history and can cause problems for others.</li>
<li>Safe to rebase only your <strong>local</strong> branches or branches that nobody else is using yet.</li>
</ul>
</details>
<hr>`;

if (document.getElementById('content')) {
    document.getElementById('content').innerHTML = gitContentData;
}
