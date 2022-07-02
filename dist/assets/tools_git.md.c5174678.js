import{_ as s,c as a,o as n,b as e}from"./app.1e894563.js";const u=JSON.parse('{"title":"Git docs","description":"","frontmatter":{},"headers":[{"level":2,"title":"Version Control systems types","slug":"version-control-systems-types"},{"level":3,"title":"1- local version contro system","slug":"_1-local-version-contro-system"},{"level":3,"title":"2- centeralied verison","slug":"_2-centeralied-verison"},{"level":3,"title":"3- Distributed version control systems.","slug":"_3-distributed-version-control-systems"},{"level":2,"title":"Git","slug":"git"},{"level":3,"title":"Git keywords.","slug":"git-keywords"},{"level":2,"title":"Git command","slug":"git-command"},{"level":2,"title":"git ignore","slug":"git-ignore"},{"level":2,"title":"types of regular merge","slug":"types-of-regular-merge"},{"level":2,"title":"github words","slug":"github-words"}],"relativePath":"tools/git.md","lastUpdated":1656144524000}'),l={name:"tools/git.md"},t=e(`<h1 id="git-docs" tabindex="-1">Git docs <a class="header-anchor" href="#git-docs" aria-hidden="true">#</a></h1><p>Version control system <strong>VCS</strong> or Source code manager <strong>SCM</strong></p><ul><li>keeps track of every modification to the code in a special kind of database.</li><li>if a mistake is made developers can turn back the clock and compare earlier versions of the code to help fix.</li></ul><h2 id="version-control-systems-types" tabindex="-1">Version Control systems types <a class="header-anchor" href="#version-control-systems-types" aria-hidden="true">#</a></h2><h3 id="_1-local-version-contro-system" tabindex="-1">1- local version contro system <a class="header-anchor" href="#_1-local-version-contro-system" aria-hidden="true">#</a></h3><ul><li>very common because it is so simple</li><li>compy files into another directory</li></ul><h4 id="advantages" tabindex="-1">Advantages <a class="header-anchor" href="#advantages" aria-hidden="true">#</a></h4><ul><li>very common &amp; simple</li></ul><h4 id="disadvantages" tabindex="-1">Disadvantages <a class="header-anchor" href="#disadvantages" aria-hidden="true">#</a></h4><ul><li>Incredibly error prone</li></ul><h3 id="_2-centeralied-verison" tabindex="-1">2- centeralied verison <a class="header-anchor" href="#_2-centeralied-verison" aria-hidden="true">#</a></h3><ul><li>Have a centeral server that contains all the versioned files.</li><li>Have a number of clients that check out files from that central place.</li><li>All users connect to a central, master repository.</li></ul><h4 id="advantages-1" tabindex="-1">Advantages <a class="header-anchor" href="#advantages-1" aria-hidden="true">#</a></h4><ul><li>Everyone knows what everyone else on the project is doing.</li><li>Administrators have fine-grained control.</li></ul><h4 id="disadvantages-1" tabindex="-1">Disadvantages. <a class="header-anchor" href="#disadvantages-1" aria-hidden="true">#</a></h4><ul><li>Single point of failur.</li></ul><h3 id="_3-distributed-version-control-systems" tabindex="-1">3- Distributed version control systems. <a class="header-anchor" href="#_3-distributed-version-control-systems" aria-hidden="true">#</a></h3><ul><li>contain multiple <strong>respositories</strong></li><li>Each user has their own reposistory and working copy.</li><li>Each user has the entire repository on thier computer.</li></ul><h4 id="advantages-2" tabindex="-1">Advantages. <a class="header-anchor" href="#advantages-2" aria-hidden="true">#</a></h4><ul><li>No central server.</li><li>Fully mirror the repository, including its full history.</li><li>Every clone is really a full backup of all the data. Ex. <code>Git, Mercurial</code></li></ul><h2 id="git" tabindex="-1">Git <a class="header-anchor" href="#git" aria-hidden="true">#</a></h2><ul><li>Distributed version control system.</li><li>free and open source tool.</li><li>for tracking changes in source code during software development.</li></ul><h3 id="git-keywords" tabindex="-1">Git keywords. <a class="header-anchor" href="#git-keywords" aria-hidden="true">#</a></h3><p><strong>Repository</strong> <code>repo</code>: A directory that contains your project work, as well as a few files, which are used to communicate with GIT. Repositories can exist either locally on your computer.</p><p><strong>Commit</strong> <code>snapshot</code>: Git thinks of its data like as set of snapshots of a main file system. Every time you commit, or save the state of your project in GIt, it basically take a picture of what all your files look like at the monument and stores preference to thea snapshot.</p><p><strong>Working Directory</strong> The files that you see in your computer file system.</p><p><strong>Staging area of index or index</strong> A file in the git directory that stores information about next commit, you can think of the staging area as a prep table where HIT will take the next commit, files on the Staging index are poised to be added to the repository.</p><p><strong>SHA</strong> A sha is basically an ID number for each commit, it is a 40-character string composed of charters and calculated base on the contents of a file or directory strutter in Git <code>SHA</code> is shorthand for SHA hash.</p><p><strong>Branch</strong> A branch is when a new line of development is created that diverges from the main line of development. The alternative line of development can continue without alterning the main line.</p><h2 id="git-command" tabindex="-1">Git command <a class="header-anchor" href="#git-command" aria-hidden="true">#</a></h2><div class="language-bash"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">ls</span></span>
<span class="line"><span style="color:#A6ACCD;">ls -a </span><span style="color:#676E95;font-style:italic;"># show hidden file</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">cd</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#make a new file</span></span>
<span class="line"><span style="color:#A6ACCD;">touch index.html</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">rm</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">pwd</span></span>
<span class="line"></span></code></pre></div><div class="language-bash"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">git </span><span style="color:#82AAFF;">help</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">git config --global user.name </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Naif</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">git config --global user.email </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">naif@gmail.com</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">git config --get user.name</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">git init</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">git clone https://github.com/naif-sameer/profile-site</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">git log</span></span>
<span class="line"><span style="color:#A6ACCD;">git log --oneline</span></span>
<span class="line"><span style="color:#A6ACCD;">git log -p </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">4a60beb</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">git log --stat</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">git reflog</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">git show</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">git add </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">file</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">git add </span><span style="color:#82AAFF;">.</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># add all files</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">git restore --staged </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">file</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;"># to unstage file</span></span>
<span class="line"><span style="color:#A6ACCD;">git restore </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">file</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># discard changes in working directory</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">git reset head </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">file</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># reset (erase) commits</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># default</span></span>
<span class="line"><span style="color:#A6ACCD;">git reset --mixed</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># return to staging index</span></span>
<span class="line"><span style="color:#A6ACCD;">git reset --soft</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># deleted</span></span>
<span class="line"><span style="color:#A6ACCD;">git reset --hard</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># short cut for add and commit the files</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># files should be tracked before.</span></span>
<span class="line"><span style="color:#A6ACCD;">git commit -a -m </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Update files</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># change the last commit message</span></span>
<span class="line"><span style="color:#A6ACCD;">git commit --amend -m </span><span style="color:#89DDFF;">&#39;&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># revert files</span></span>
<span class="line"><span style="color:#A6ACCD;">git revert</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># add a marker on a specific commit.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># tag does not move around as new commits are added</span></span>
<span class="line"><span style="color:#A6ACCD;">git tag</span></span>
<span class="line"><span style="color:#A6ACCD;">git tag -a v1.0.1 a87984 -m </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Naif add tag</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#-------------------------------------</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># create new branch repo to allows</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#multiple lines of developments</span></span>
<span class="line"><span style="color:#A6ACCD;">git branch</span></span>
<span class="line"><span style="color:#A6ACCD;">git branch sidebar</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># create and change the branch to newBranch</span></span>
<span class="line"><span style="color:#A6ACCD;">git branch -b newBranch</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># create the branch from old commit</span></span>
<span class="line"><span style="color:#A6ACCD;">git branch alt-sidebar-loc 42a69f</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">git branch -d alt-sidebar-loc</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#-------------------------------------</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># switch between branches and tags</span></span>
<span class="line"><span style="color:#A6ACCD;">git checkout branchName</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># combines changes on different branches</span></span>
<span class="line"><span style="color:#A6ACCD;">git merge branchName -m </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">you can make a new branch</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><h2 id="git-ignore" tabindex="-1">git ignore <a class="header-anchor" href="#git-ignore" aria-hidden="true">#</a></h2><p>Add <code>.gitignore</code> file to your project in the same directory that the hidden .git directory is located. all you have to do is list the names of files that you want Git to ingore &#39;not Tracked&#39; and it will ignore the file.</p><h2 id="types-of-regular-merge" tabindex="-1">types of regular merge <a class="header-anchor" href="#types-of-regular-merge" aria-hidden="true">#</a></h2><ol><li><p>Fast Forward.</p></li><li><p>Slow forward</p></li></ol><h1 id="github" tabindex="-1">Github <a class="header-anchor" href="#github" aria-hidden="true">#</a></h1><ul><li>company providers hosting for software development version control.</li><li>Subsidiary of Microsoft.</li></ul><h2 id="github-words" tabindex="-1">github words <a class="header-anchor" href="#github-words" aria-hidden="true">#</a></h2><p><strong>Remote repository</strong> A link of directory that contains your project work on github website that all team member use to exchange their changes.</p><p><strong>Clone</strong> A local version of a repository , including all commits and branches from (local or remote) .</p><p><strong>Fork</strong> A copy of a repository on Github owned by a different user.</p><p><strong>Pull</strong> You download changes from remote repo to your local repo.</p><p><strong>Push</strong> you upload changes from local to remote server.</p>`,44),o=[t];function i(r,p,c,d,h,y){return n(),a("div",null,o)}var m=s(l,[["render",i]]);export{u as __pageData,m as default};
