import{e as n}from"./app.808106a9.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},e=n(`<h1 id="npm-docs" tabindex="-1"><a class="header-anchor" href="#npm-docs" aria-hidden="true">#</a> Npm docs</h1><h2 id="basics" tabindex="-1"><a class="header-anchor" href="#basics" aria-hidden="true">#</a> Basics</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>	<span class="token function">npm</span> help-search update

	<span class="token function">npm</span> -v

	<span class="token function">npm</span> <span class="token builtin class-name">help</span>
	<span class="token function">npm</span> <span class="token builtin class-name">help</span> list

	<span class="token function">npm</span> list
	<span class="token function">npm</span> list --global <span class="token boolean">true</span> --depth <span class="token number">0</span>


	<span class="token comment"># remove unused package from node_modules</span>
	<span class="token function">npm</span> prune 
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>	<span class="token function">npm</span> init
	<span class="token function">npm</span> init -y
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>Edit default config init</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>	<span class="token function">npm</span> config <span class="token builtin class-name">set</span> init-author-name <span class="token string">&quot;Naif&quot;</span>
	<span class="token function">npm</span> <span class="token builtin class-name">set</span> init-license <span class="token string">&#39;MIT&#39;</span> 


	<span class="token comment"># reset init to default</span>
	<span class="token function">npm</span> config delete init-author-name
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>	<span class="token comment"># we use --save to add package to package.json</span>
	<span class="token function">npm</span> <span class="token function">install</span> lodash --save 

	<span class="token comment"># add to dependencies</span>
	<span class="token function">npm</span> <span class="token function">install</span> gulp --save-dev

	<span class="token comment"># install to global</span>
	<span class="token function">npm</span> <span class="token function">install</span> -g nodemon

	<span class="token comment"># Does&#39;t install devDependencies</span>
	<span class="token function">npm</span> <span class="token function">install</span> --production 

	<span class="token comment"># remove packages</span>
	<span class="token function">npm</span> uninstall gulp --save-dev
	<span class="token function">npm</span> remove gulp --save-dev
	<span class="token function">npm</span> <span class="token function">rm</span> gulp --save-dev


	<span class="token function">npm</span> <span class="token function">install</span> loadash@4.17.3 --save

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><p>Update packages</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>	<span class="token function">npm</span> update lodash 
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="package-json" tabindex="-1"><a class="header-anchor" href="#package-json" aria-hidden="true">#</a> Package.json</h2><p>working with packages version</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>	<span class="token punctuation">{</span>
		<span class="token property">&quot;dependencies&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token property">&quot;lodash&quot;</span><span class="token operator">:</span> <span class="token string">&quot;4.17.4&quot;</span><span class="token punctuation">,</span>
			<span class="token property">&quot;lodash&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^4.17.4&quot;</span><span class="token punctuation">,</span>
			<span class="token property">&quot;lodash&quot;</span><span class="token operator">:</span> <span class="token string">&quot;~4.17.4&quot;</span><span class="token punctuation">,</span>
			<span class="token property">&quot;lodash&quot;</span><span class="token operator">:</span> <span class="token string">&quot;*&quot;</span><span class="token punctuation">,</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span> 
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><ul><li><code>4.17.4</code> install exact version</li><li><code>^4.17.4</code> update only to minor</li><li><code>~4.17.4</code> update only patch</li><li><code>*</code> install last version <code>not recommend</code></li></ul><p>add new Script</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>	<span class="token punctuation">{</span>
		<span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token property">&quot;start&quot;</span><span class="token operator">:</span> <span class="token string">&quot;node app.js&quot;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span> 
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div>`,15);function p(t,l){return e}var i=s(a,[["render",p]]);export{i as default};
