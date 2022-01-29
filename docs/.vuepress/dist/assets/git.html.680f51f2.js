import{e as n}from"./app.808106a9.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},e=n(`<h1 id="git-docs" tabindex="-1"><a class="header-anchor" href="#git-docs" aria-hidden="true">#</a> Git docs</h1><p>Version control system <strong>VCS</strong> or Source code manager <strong>SCM</strong></p><ul><li>keeps track of every modification to the code in a special kind of database.</li><li>if a mistake is made developers can turn back the clock and compare earlier versions of the code to help fix.</li></ul><h2 id="version-control-systems-types" tabindex="-1"><a class="header-anchor" href="#version-control-systems-types" aria-hidden="true">#</a> Version Control systems types</h2><h3 id="_1-local-version-control-system" tabindex="-1"><a class="header-anchor" href="#_1-local-version-control-system" aria-hidden="true">#</a> 1- local version control system</h3><ul><li>very common because it is so simple</li><li>copy files into another directory</li></ul><h4 id="advantages" tabindex="-1"><a class="header-anchor" href="#advantages" aria-hidden="true">#</a> Advantages</h4><ul><li>very common &amp; simple</li></ul><h4 id="disadvantages" tabindex="-1"><a class="header-anchor" href="#disadvantages" aria-hidden="true">#</a> Disadvantages</h4><ul><li>Incredibly error prone</li></ul><h3 id="_2-centralized-version" tabindex="-1"><a class="header-anchor" href="#_2-centralized-version" aria-hidden="true">#</a> 2- centralized version</h3><ul><li>Have a central server that contains all the versioned files.</li><li>Have a number of clients that check out files from that central place.</li><li>All users connect to a central, master repository.</li></ul><h4 id="advantages-1" tabindex="-1"><a class="header-anchor" href="#advantages-1" aria-hidden="true">#</a> Advantages</h4><ul><li>Everyone knows what everyone else on the project is doing.</li><li>Administrators have fine-grained control.</li></ul><h4 id="disadvantages-1" tabindex="-1"><a class="header-anchor" href="#disadvantages-1" aria-hidden="true">#</a> Disadvantages.</h4><ul><li>Single point of failure.</li></ul><h3 id="_3-distributed-version-control-systems" tabindex="-1"><a class="header-anchor" href="#_3-distributed-version-control-systems" aria-hidden="true">#</a> 3- Distributed version control systems.</h3><ul><li>contain multiple <strong>repositories</strong></li><li>Each user has their own repository and working copy.</li><li>Each user has the entire repository on their computer.</li></ul><h4 id="advantages-2" tabindex="-1"><a class="header-anchor" href="#advantages-2" aria-hidden="true">#</a> Advantages.</h4><ul><li>No central server.</li><li>Fully mirror the repository, including its full history.</li><li>Every clone is really a full backup of all the data. Ex. <code>Git, Mercurial</code></li></ul><h2 id="git" tabindex="-1"><a class="header-anchor" href="#git" aria-hidden="true">#</a> Git</h2><ul><li>Distributed version control system.</li><li>free and open source tool.</li><li>for tracking changes in source code during software development.</li></ul><h3 id="git-keywords" tabindex="-1"><a class="header-anchor" href="#git-keywords" aria-hidden="true">#</a> Git keywords.</h3><p><strong>Repository</strong> <code>repo</code>: A directory that contains your project work, as well as a few files, which are used to communicate with GIT. Repositories can exist either locally on your computer.</p><p><strong>Commit</strong> <code>snapshot</code>: Git thinks of its data like as set of snapshots of a main file system. Every time you commit, or save the state of your project in GIt, it basically take a picture of what all your files look like at the monument and stores preference to thea snapshot.</p><p><strong>Working Directory</strong> The files that you see in your computer file system.</p><p><strong>Staging area of index or index</strong> A file in the git directory that stores information about next commit, you can think of the staging area as a prep table where HIT will take the next commit, files on the Staging index are poised to be added to the repository.</p><p><strong>SHA</strong> A sha is basically an ID number for each commit, it is a 40-character string composed of charters and calculated base on the contents of a file or directory strutter in Git <code>SHA</code> is shorthand for SHA hash.</p><p><strong>Branch</strong> A branch is when a new line of development is created that diverges from the main line of development. The alternative line of development can continue without altering the main line.</p><h2 id="git-command" tabindex="-1"><a class="header-anchor" href="#git-command" aria-hidden="true">#</a> Git command</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">ls</span> 
<span class="token function">ls</span> -a <span class="token comment"># show hidden file</span>

<span class="token builtin class-name">cd</span> 

<span class="token comment">#make a new file</span>
<span class="token function">touch</span> index.html

<span class="token function">rm</span>

<span class="token builtin class-name">pwd</span> 
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> <span class="token builtin class-name">help</span>


<span class="token function">git</span> config --global user.name <span class="token string">&quot;Naif&quot;</span>
<span class="token function">git</span> config --global user.email <span class="token string">&quot;naif@gmail.com&quot;</span>

<span class="token function">git</span> config --get user.name


<span class="token function">git</span> init

<span class="token function">git</span> clone https://github.com/naif-sameer/profile-site

<span class="token function">git</span> log
<span class="token function">git</span> log --oneline
<span class="token function">git</span> log -p <span class="token string">&#39;4a60beb&#39;</span>
<span class="token function">git</span> log --stat


<span class="token function">git</span> reflog


<span class="token function">git</span> show


<span class="token function">git</span> <span class="token function">add</span> <span class="token operator">&lt;</span>file<span class="token operator">&gt;</span>
<span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span> <span class="token comment"># add all files</span>

<span class="token function">git</span> restore --staged <span class="token operator">&lt;</span>file<span class="token operator">&gt;</span>  <span class="token comment"># to upstage file </span>
<span class="token function">git</span> restore <span class="token operator">&lt;</span>file<span class="token operator">&gt;</span> <span class="token comment"># discard changes in working directory</span>


<span class="token function">git</span> reset <span class="token function">head</span> <span class="token operator">&lt;</span>file<span class="token operator">&gt;</span> <span class="token comment"># reset (erase) commits</span>

<span class="token comment"># default </span>
<span class="token function">git</span> reset --mixed 

<span class="token comment"># return to staging index</span>
<span class="token function">git</span> reset --soft 

<span class="token comment"># deleted</span>
<span class="token function">git</span> reset --hard


<span class="token comment"># short cut for add and commit the files </span>
<span class="token comment"># files should be tracked before.</span>
<span class="token function">git</span> commit -a -m <span class="token string">&#39;Update files&#39;</span>
<span class="token comment"># change the last commit message</span>
<span class="token function">git</span> commit --amend -m <span class="token string">&#39;&#39;</span>

<span class="token comment"># revert files</span>
<span class="token function">git</span> revert


<span class="token comment"># add a marker on a specific commit.</span>
<span class="token comment"># tag does not move around as new commits are added</span>
<span class="token function">git</span> tag
<span class="token function">git</span> tag -a v1.0.1 a87984 -m <span class="token string">&quot;Naif add tag&quot;</span>

<span class="token comment">#-------------------------------------</span>
<span class="token comment"># create new branch repo to allows</span>
<span class="token comment">#multiple lines of developments</span>
<span class="token function">git</span> branch
<span class="token function">git</span> branch sidebar

<span class="token comment"># create and change the branch to newBranch</span>
<span class="token function">git</span> branch -b newBranch

<span class="token comment"># create the branch from old commit</span>
<span class="token function">git</span> branch alt-sidebar-loc 42a69f

<span class="token function">git</span> branch -d alt-sidebar-loc

<span class="token comment">#-------------------------------------</span>

<span class="token comment"># switch between branches and tags</span>
<span class="token function">git</span> checkout branchName

<span class="token comment"># combines changes on different branches</span>
<span class="token function">git</span> merge branchName -m <span class="token string">&#39;you can make a new branch&#39;</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br></div></div><h2 id="git-ignore" tabindex="-1"><a class="header-anchor" href="#git-ignore" aria-hidden="true">#</a> git ignore</h2><p>Add <code>.gitignore</code> file to your project in the same directory that the hidden .git directory is located. all you have to do is list the names of files that you want Git to ignore &#39;not Tracked&#39; and it will ignore the file.</p><h2 id="types-of-regular-merge" tabindex="-1"><a class="header-anchor" href="#types-of-regular-merge" aria-hidden="true">#</a> types of regular merge</h2><ol><li><p>Fast Forward.</p></li><li><p>Slow forward</p></li></ol><h1 id="github" tabindex="-1"><a class="header-anchor" href="#github" aria-hidden="true">#</a> Github</h1><ul><li>company providers hosting for software development version control.</li><li>Subsidiary of Microsoft.</li></ul><h2 id="github-words" tabindex="-1"><a class="header-anchor" href="#github-words" aria-hidden="true">#</a> github words</h2><p><strong>Remote repository</strong> A link of directory that contains your project work on github website that all team member use to exchange their changes.</p><p><strong>Clone</strong> A local version of a repository , including all commits and branches from (local or remote) .</p><p><strong>Fork</strong> A copy of a repository on Github owned by a different user.</p><p><strong>Pull</strong> You download changes from remote repo to your local repo.</p><p><strong>Push</strong> you upload changes from local to remote server.</p>`,44);function r(t,i){return e}var c=s(a,[["render",r]]);export{c as default};
