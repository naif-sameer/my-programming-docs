import{e as n}from"./app.808106a9.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},t=n(`<h1 id="svelte-docs" tabindex="-1"><a class="header-anchor" href="#svelte-docs" aria-hidden="true">#</a> svelte docs</h1><blockquote><p>version:</p></blockquote><h2 id="basics" tabindex="-1"><a class="header-anchor" href="#basics" aria-hidden="true">#</a> basics</h2><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
		<span class="token keyword">let</span> mess <span class="token operator">=</span> <span class="token string">&#39;Hello World&#39;</span><span class="token punctuation">;</span>
		<span class="token keyword">let</span> imgSrc <span class="token operator">=</span> <span class="token string">&#39;https://images.com/cat.png&#39;</span><span class="token punctuation">;</span>
		<span class="token keyword">let</span> alt <span class="token operator">=</span> <span class="token string">&#39;image alt desc&#39;</span><span class="token punctuation">;</span>

		<span class="token comment">// import Component</span>
		<span class="token keyword">import</span> Card <span class="token keyword">from</span> <span class="token string">&#39;./Card&#39;</span><span class="token punctuation">;</span>
	</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

	<span class="token comment">&lt;!-- use your component --&gt;</span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Card</span> <span class="token punctuation">/&gt;</span></span>

	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span> {mess}	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>

	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>{imgSrc}</span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>

	<span class="token comment">&lt;!-- you can use attributes shorthand 

	 	&lt;img src={imgSrc} {alt}&gt;
	 --&gt;</span>


	 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>
	 	<span class="token comment">&lt;!-- if you want to render html code --&gt;</span>
	 	{@html &quot;<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b</span><span class="token punctuation">&gt;</span></span>Your html <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i</span><span class="token punctuation">&gt;</span></span>code<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>i</span><span class="token punctuation">&gt;</span></span> here<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b</span><span class="token punctuation">&gt;</span></span>&quot;}
	 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>


	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
		<span class="token comment">/* style by default scoped to the component */</span>

		<span class="token selector">h1</span> <span class="token punctuation">{</span>
			<span class="token property">color</span><span class="token punctuation">:</span>  red<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br></div></div><h2 id="style" tabindex="-1"><a class="header-anchor" href="#style" aria-hidden="true">#</a> style</h2><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">&gt;</span></span>Red color<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">&gt;</span></span>

	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">

		<span class="token comment">/* global style */</span>
		<span class="token selector">:global(h3)</span> <span class="token punctuation">{</span>
			<span class="token property">color</span><span class="token punctuation">:</span>  red<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="events" tabindex="-1"><a class="header-anchor" href="#events" aria-hidden="true">#</a> Events</h2><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>	<span class="token comment">&lt;!-- S btn.svelte --&gt;</span>

	<span class="token comment">&lt;!-- Event forwarding --&gt;</span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name"><span class="token namespace">on:</span>click</span><span class="token punctuation">&gt;</span></span>handle the event from the parent<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>	<span class="token comment">&lt;!-- Parent.svelte --&gt;</span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
		<span class="token keyword">import</span> SBtn <span class="token keyword">from</span> <span class="token string">&#39;./SBtn.svelte&#39;</span><span class="token punctuation">;</span>

		<span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

		<span class="token keyword">function</span> <span class="token function">incrementCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			count<span class="token operator">++</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>


		<span class="token comment">// Reactive Declaration</span>
		$<span class="token operator">:</span> doubled <span class="token operator">=</span> count <span class="token operator">*</span> <span class="token number">3</span><span class="token punctuation">;</span>

		<span class="token comment">// Reactive statement</span>
		$<span class="token operator">:</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>count<span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token comment">// group of statement</span>
		$<span class="token operator">:</span> <span class="token punctuation">{</span>
			console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>count<span class="token punctuation">)</span><span class="token punctuation">;</span>

			<span class="token keyword">if</span> <span class="token punctuation">(</span>count <span class="token operator">&gt;</span> <span class="token number">5</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;count is larger than 5&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">&gt;</span></span>{ count }<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">&gt;</span></span>

	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name"><span class="token namespace">on:</span>click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>{incrementCount}</span><span class="token punctuation">&gt;</span></span>Increment<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
	
	&lt;button on:mousemove={e =&gt; console.log(e)}&gt;mouse move event<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>

	&lt;button on:click|once={() =&gt; console.log(&#39;run event only once&#39;)}&gt;log<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>

	&lt;button on:click|preventDefault={(e) =&gt; console.log(&#39;run event only once&#39;)}&gt;
		Prevent Default
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>

	&lt;SBtn on:click={e =&gt; console.log(e)} /&gt;
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br></div></div><blockquote><p>Tip</p><ul><li><p>In Array and obj you need to return new reference to make them reactive</p></li><li><p>You can use inline function without any performance issue.</p></li></ul></blockquote><h2 id="props" tabindex="-1"><a class="header-anchor" href="#props" aria-hidden="true">#</a> props</h2><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>	<span class="token comment">&lt;!-- Card.svelte --&gt;</span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
		<span class="token keyword">export</span> <span class="token keyword">let</span> title <span class="token operator">=</span> <span class="token string">&#39;default prop value&#39;</span><span class="token punctuation">;</span>

		<span class="token comment">// working with html classes</span>
		<span class="token keyword">let</span> className <span class="token operator">=</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
		<span class="token keyword">export</span> <span class="token punctuation">{</span>className <span class="token keyword">as</span> <span class="token keyword">class</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
	</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>{className}</span><span class="token punctuation">&gt;</span></span>
		{title}
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">&gt;</span></span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>	<span class="token comment">&lt;!-- Parent.svelte --&gt;</span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
		<span class="token keyword">import</span> Card <span class="token keyword">from</span> <span class="token string">&#39;./Card.svelte&#39;</span><span class="token punctuation">;</span>
	</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Card</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>Card title<span class="token punctuation">&#39;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>card-title<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>

	<span class="token comment">&lt;!-- if you have an obj 

		&lt;Card {...obj} /&gt;
	--&gt;</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="binding" tabindex="-1"><a class="header-anchor" href="#binding" aria-hidden="true">#</a> Binding</h2><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
		<span class="token keyword">let</span> name <span class="token operator">=</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>

		<span class="token keyword">let</span> isOnline <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>

		<span class="token keyword">let</span> fast <span class="token operator">=</span> <span class="token string">&#39;40%&#39;</span><span class="token punctuation">;</span>

		<span class="token keyword">let</span> mess <span class="token operator">=</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>

		<span class="token keyword">let</span> iceKind <span class="token operator">=</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>

		<span class="token keyword">let</span> flavors <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">&gt;</span></span>{name}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">&gt;</span></span>

	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>username<span class="token punctuation">&quot;</span></span> <span class="token attr-name"><span class="token namespace">bind:</span>value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>{name}</span><span class="token punctuation">&gt;</span></span>
	<span class="token comment">&lt;!-- 
		when you use bind with input type (number | range)
		svelte will make the value numbers instead of string
	 --&gt;</span>


	 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>checkbox<span class="token punctuation">&quot;</span></span> <span class="token attr-name"><span class="token namespace">bind:</span>checked</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>{isOnline}</span><span class="token punctuation">&gt;</span></span>

	 <span class="token comment">&lt;!-- bind a group --&gt;</span>
	 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>radio<span class="token punctuation">&quot;</span></span> <span class="token attr-name"><span class="token namespace">bind:</span>group</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>{fast}</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>20%<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
	 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>radio<span class="token punctuation">&quot;</span></span> <span class="token attr-name"><span class="token namespace">bind:</span>group</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>{fast}</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>40%<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
	 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>radio<span class="token punctuation">&quot;</span></span> <span class="token attr-name"><span class="token namespace">bind:</span>group</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>{fast}</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>80%<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
	 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>radio<span class="token punctuation">&quot;</span></span> <span class="token attr-name"><span class="token namespace">bind:</span>group</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>{fast}</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>100%<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>


	 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>textarea</span> <span class="token attr-name"><span class="token namespace">bind:</span>value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>{mess}</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>textarea</span><span class="token punctuation">&gt;</span></span>

	 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span> <span class="token attr-name"><span class="token namespace">bind:</span>value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>{iceKind}</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>chocolate<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>chocolate<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>option</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>banana<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Banana<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>option</span><span class="token punctuation">&gt;</span></span>
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">&gt;</span></span>

     <span class="token comment">&lt;!-- select with multiple --&gt;</span>
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span> <span class="token attr-name">multiple</span> <span class="token attr-name"><span class="token namespace">bind:</span>value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>{flavors}</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>chocolate<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>chocolate<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>option</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>banana<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Banana<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>option</span><span class="token punctuation">&gt;</span></span>
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br></div></div><h3 id="class" tabindex="-1"><a class="header-anchor" href="#class" aria-hidden="true">#</a> class</h3><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>		
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
		<span class="token keyword">let</span> isDanger <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
	</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>		

	<span class="token comment">&lt;!-- shorthand for
		class={isDanger ? &#39;danger&#39; : &#39;&#39;}
	 --&gt;</span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span> <span class="token attr-name"><span class="token namespace">class:</span>danger</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>{isDanger}</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h3 id="bind-dimensions" tabindex="-1"><a class="header-anchor" href="#bind-dimensions" aria-hidden="true">#</a> bind Dimensions</h3><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>	
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span> <span class="token attr-name"><span class="token namespace">bind:</span>clientWidth</span><span class="token punctuation">&gt;</span></span>Dimensions<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span> <span class="token attr-name"><span class="token namespace">bind:</span>clientHeight</span><span class="token punctuation">&gt;</span></span>Dimensions<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span> <span class="token attr-name"><span class="token namespace">bind:</span>offsetWidth</span><span class="token punctuation">&gt;</span></span>Dimensions<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span> <span class="token attr-name"><span class="token namespace">bind:</span>offsetHeight</span><span class="token punctuation">&gt;</span></span>Dimensions<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="this-keyword" tabindex="-1"><a class="header-anchor" href="#this-keyword" aria-hidden="true">#</a> this keyword</h3><p>Allow you to option a reference to rendered elements.</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>	<span class="token comment">&lt;!-- Input.svelte --&gt;</span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
		<span class="token keyword">let</span> input<span class="token punctuation">;</span>
		<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">focus</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			input<span class="token punctuation">.</span><span class="token function">focus</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name"><span class="token namespace">bind:</span>this</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>{input}</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>	<span class="token comment">&lt;!-- Parent.svelte --&gt;</span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
		<span class="token keyword">import</span> Input <span class="token keyword">from</span> <span class="token string">&#39;./Input.svelte&#39;</span><span class="token punctuation">;</span>

		<span class="token keyword">let</span> inputField<span class="token punctuation">;</span>
	</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Input</span> <span class="token attr-name"><span class="token namespace">bind:</span>this</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>{inputField}</span><span class="token punctuation">&gt;</span></span>

	&lt;button on:click={() =&gt; inputField.focus()}&gt;Focus the input<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="logic" tabindex="-1"><a class="header-anchor" href="#logic" aria-hidden="true">#</a> Logic</h2><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">

		<span class="token keyword">let</span> age <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
	</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

	{#if age &lt; 20}
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">&gt;</span></span> You are under 20<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">&gt;</span></span>

	{#:else if age &gt; 20}
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">&gt;</span></span> You are above 20<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">&gt;</span></span>

	{#else}
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">&gt;</span></span> Unknown age<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">&gt;</span></span>

	{/if}

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h2 id="loops" tabindex="-1"><a class="header-anchor" href="#loops" aria-hidden="true">#</a> Loops</h2><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
		<span class="token keyword">let</span> cats<span class="token operator">=</span> <span class="token punctuation">[</span>
			<span class="token punctuation">{</span>
				id<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
				name<span class="token operator">:</span> <span class="token string">&#39;Aaaa&#39;</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token punctuation">{</span>
				id<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
				name<span class="token operator">:</span> <span class="token string">&#39;Bbbb&#39;</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token punctuation">{</span>
				id<span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
				name<span class="token operator">:</span> <span class="token string">&#39;Cccc&#39;</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token punctuation">]</span><span class="token punctuation">;</span>
	</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

	{#each cats as {id, name}, index }

		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>list index: {index} <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
		 	Id is: {id} and Name is: {name}
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">&gt;</span></span>
	{/each}


	<span class="token comment">&lt;!-- loop with key --&gt;</span>
	{#each cats as cat (cat.id) }

		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">&gt;</span></span> {cat.name} <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">&gt;</span></span>
	{/each}

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br></div></div><h2 id="promise" tabindex="-1"><a class="header-anchor" href="#promise" aria-hidden="true">#</a> promise</h2><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
		<span class="token keyword">let</span> apiData <span class="token operator">=</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">&#39;https://ex.com/data.json&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

	{#await apiData}
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">&gt;</span></span>Loading...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">&gt;</span></span>

	{:then data}
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">&gt;</span></span> {data} <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">&gt;</span></span>


	{:catch error}
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">&gt;</span></span> {error} <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">&gt;</span></span>
	{/await}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h2 id="dynamic-components" tabindex="-1"><a class="header-anchor" href="#dynamic-components" aria-hidden="true">#</a> Dynamic components</h2><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
		<span class="token keyword">import</span> TabA <span class="token keyword">from</span> <span class="token string">&#39;./TabA.svelte&#39;</span><span class="token punctuation">;</span>
		<span class="token keyword">import</span> TabB <span class="token keyword">from</span> <span class="token string">&#39;./TabB.svelte&#39;</span><span class="token punctuation">;</span>
		<span class="token keyword">import</span> TabC <span class="token keyword">from</span> <span class="token string">&#39;./TabC.svelte&#39;</span><span class="token punctuation">;</span>


		<span class="token keyword">let</span> activeTab <span class="token operator">=</span> TabA<span class="token punctuation">;</span>
	</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">svelte:</span>component</span> <span class="token attr-name">this</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>{activeTab}</span> <span class="token punctuation">/&gt;</span></span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="component-event" tabindex="-1"><a class="header-anchor" href="#component-event" aria-hidden="true">#</a> Component Event</h2><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>	<span class="token comment">&lt;!-- Child.svelte --&gt;</span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
		<span class="token keyword">import</span> <span class="token punctuation">{</span>createEventDispatcher<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;svelte&#39;</span><span class="token punctuation">;</span>

		<span class="token keyword">const</span> dispatch <span class="token operator">=</span> <span class="token function">createEventDispatcher</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

	<span class="token comment">&lt;!--
		- child 
			dispatch(&#39;event&#39;, &#39;data&#39;);
		
		-parent
			on:event={(e) =&gt; {
				// work with event data
				consol.log(e.detail);
			}}


	 --&gt;</span>
	&lt;button on:click={()=&gt; dispatch(&#39;close&#39;)}}&gt;
		Close
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>	<span class="token comment">&lt;!-- Parent.svelte --&gt;</span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
		<span class="token keyword">import</span> Child <span class="token keyword">from</span> <span class="token string">&#39;./Child.svelte&#39;</span><span class="token punctuation">;</span>

	</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

	&lt;Child on:close={()=&gt;{}} /&gt;
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="event-forwarding" tabindex="-1"><a class="header-anchor" href="#event-forwarding" aria-hidden="true">#</a> Event forwarding</h3><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>	<span class="token comment">&lt;!-- Button.svelte --&gt;</span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name"><span class="token namespace">on:</span>click</span><span class="token punctuation">&gt;</span></span>Close<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>	<span class="token comment">&lt;!-- Parent.svelte --&gt;</span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
		<span class="token keyword">import</span> Button <span class="token keyword">from</span> <span class="token string">&#39;./Button.svelte&#39;</span><span class="token punctuation">;</span>

	</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

	&lt;Button on:close={()=&gt;{}} /&gt;
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="component-slots" tabindex="-1"><a class="header-anchor" href="#component-slots" aria-hidden="true">#</a> Component slots</h2><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>	<span class="token comment">&lt;!-- Card.svelte --&gt;</span>

	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span> <span class="token punctuation">/&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

	<span class="token comment">&lt;!-- slot with default value --&gt;</span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span><span class="token punctuation">&gt;</span></span>Default value<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slot</span><span class="token punctuation">&gt;</span></span>
	&lt;/div
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>	<span class="token comment">&lt;!-- Parent.svelte --&gt;</span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
		<span class="token keyword">import</span> Card <span class="token keyword">from</span> <span class="token string">&#39;./Card.svelte&#39;</span><span class="token punctuation">;</span>

	</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Card</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>Card title<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Card</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h3 id="named-slots" tabindex="-1"><a class="header-anchor" href="#named-slots" aria-hidden="true">#</a> Named slots</h3><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>	<span class="token comment">&lt;!-- Card.svelte --&gt;</span>

	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>header<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Default value<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slot</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>content<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Default value<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slot</span><span class="token punctuation">&gt;</span></span>

		<span class="token comment">&lt;!-- check slots --&gt;</span>
		{#if ##slots.footer}
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>footer<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
		{/if}
	&lt;/div
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>	<span class="token comment">&lt;!-- Parent.svelte --&gt;</span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
		<span class="token keyword">import</span> Card <span class="token keyword">from</span> <span class="token string">&#39;./Card.svelte&#39;</span><span class="token punctuation">;</span>

	</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Card</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>header<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Card title<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>content<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Card content<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>footer<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Card footer<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>


	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Card</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h3 id="slot-param" tabindex="-1"><a class="header-anchor" href="#slot-param" aria-hidden="true">#</a> slot param</h3><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>	<span class="token comment">&lt;!-- Card.svelte --&gt;</span>

	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hero<span class="token punctuation">&quot;</span></span> <span class="token attr-name">first</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Ahmed<span class="token punctuation">&quot;</span></span> <span class="token attr-name">last</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Khalid<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Default value<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slot</span><span class="token punctuation">&gt;</span></span>
	&lt;/div
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>	<span class="token comment">&lt;!-- Parent.svelte --&gt;</span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
		<span class="token keyword">import</span> Card <span class="token keyword">from</span> <span class="token string">&#39;./Card.svelte&#39;</span><span class="token punctuation">;</span>

	</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Card</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>header<span class="token punctuation">&quot;</span></span> <span class="token attr-name"><span class="token namespace">let:</span>first</span> <span class="token attr-name"><span class="token namespace">let:</span>last</span><span class="token punctuation">&gt;</span></span>
			{first} - {last}
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Card</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="context" tabindex="-1"><a class="header-anchor" href="#context" aria-hidden="true">#</a> Context</h2><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>	<span class="token comment">&lt;!-- Child.svelte --&gt;</span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
		<span class="token keyword">import</span> <span class="token punctuation">{</span>setContext<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;svelte&#39;</span><span class="token punctuation">;</span>

		<span class="token comment">// it is recommend to use obj instead of string</span>
		<span class="token function">setContext</span><span class="token punctuation">(</span><span class="token string">&#39;username-context&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Ahmed&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>	<span class="token comment">&lt;!-- Parent.svelte --&gt;</span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
		<span class="token keyword">import</span> <span class="token punctuation">{</span>getContext<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;svelte&#39;</span><span class="token punctuation">;</span>

		<span class="token comment">// It is recommend to use obj instead of string</span>
		<span class="token keyword">let</span> name <span class="token operator">=</span> <span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">&#39;username-context&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">&gt;</span></span>{name}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="life-cycle" tabindex="-1"><a class="header-anchor" href="#life-cycle" aria-hidden="true">#</a> Life cycle</h2><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
		<span class="token keyword">import</span> <span class="token punctuation">{</span>
			onMount<span class="token punctuation">,</span>
		   onDestroy<span class="token punctuation">,</span>
		   beforeUpdate<span class="token punctuation">,</span>
		   afterUpdate<span class="token punctuation">,</span>
		   tick
		<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;svelte&#39;</span><span class="token punctuation">;</span>


		<span class="token doc-comment comment">/**
		 * if you return a function from the callback function, that function will be called when the components is unmounted
		 * 
		 * - onMount does not render inside a server-side component wheres onDestroy does
		 * */</span>
		<span class="token function">onMount</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
			console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;fetch api....&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token comment">// run before the component is unmounted</span>
		<span class="token function">onDestroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token function">beforeUpdate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token function">afterUpdate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token comment">// return a promise that resolve once any pending state changes have been applied</span>
		<span class="token function">tick</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">&gt;</span></span>data<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">&gt;</span></span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br></div></div><h2 id="store" tabindex="-1"><a class="header-anchor" href="#store" aria-hidden="true">#</a> Store</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>	<span class="token comment">// store/count.js</span>

	<span class="token keyword">import</span> <span class="token punctuation">{</span>writable<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;svelte/store&#39;</span><span class="token punctuation">;</span>

	<span class="token keyword">export</span> <span class="token keyword">const</span> count <span class="token operator">=</span> <span class="token function">writable</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
		
		<span class="token keyword">import</span> <span class="token punctuation">{</span>count<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./store/count&#39;</span><span class="token punctuation">;</span>

		<span class="token keyword">function</span> <span class="token function">increment</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			count<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span><span class="token parameter">value</span> <span class="token operator">=&gt;</span> value<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>

		<span class="token keyword">function</span> <span class="token function">reset</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			count<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>

		<span class="token keyword">let</span> count_value<span class="token punctuation">;</span>

		<span class="token keyword">const</span> unsubscribe <span class="token operator">=</span> count<span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span><span class="token parameter">value</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
			count_value <span class="token operator">=</span> value<span class="token punctuation">;</span>
		<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token function">onDestroy</span><span class="token punctuation">(</span>unsubscribe<span class="token punctuation">)</span><span class="token punctuation">;</span>

	</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">&gt;</span></span>{count_value}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">&gt;</span></span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><p>You can use <code>$</code> to subscribe the store without creating new variable</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
		<span class="token comment">// our store should be imported at the top level scope</span>
		<span class="token keyword">import</span> <span class="token punctuation">{</span>count<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./store/count&#39;</span><span class="token punctuation">;</span>
	</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">&gt;</span></span>{$count}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">&gt;</span></span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="readable" tabindex="-1"><a class="header-anchor" href="#readable" aria-hidden="true">#</a> readable</h3><p>change the store value Dynamically</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
	
		<span class="token keyword">import</span> <span class="token punctuation">{</span>readable<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;svelte/store&#39;</span><span class="token punctuation">;</span>

		<span class="token keyword">let</span> initialValue <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token keyword">const</span> time <span class="token operator">=</span> <span class="token function">readable</span><span class="token punctuation">(</span>initialValue <span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token function">start</span><span class="token punctuation">(</span><span class="token parameter"><span class="token keyword">set</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">const</span> interval <span class="token operator">=</span> <span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
				<span class="token function">set</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

			<span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token function">stop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token function">clearInterval</span><span class="token punctuation">(</span>interval<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>	
		<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>


	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span> {time} <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h3 id="derived" tabindex="-1"><a class="header-anchor" href="#derived" aria-hidden="true">#</a> derived</h3><p>make a store whose value based on other store value</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
		<span class="token keyword">import</span> <span class="token punctuation">{</span>derived<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;svelte/store&#39;</span>
		<span class="token keyword">import</span> count <span class="token keyword">from</span> <span class="token string">&#39;./store/count&#39;</span><span class="token punctuation">;</span>

		<span class="token keyword">export</span> <span class="token keyword">const</span> elapsed <span class="token operator">=</span> <span class="token function">derived</span><span class="token punctuation">(</span>time<span class="token punctuation">,</span> <span class="token parameter">$count</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span> time <span class="token operator">+</span> $count<span class="token punctuation">;</span>
		<span class="token punctuation">}</span><span class="token punctuation">)</span>
	</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">&gt;</span></span>data<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">&gt;</span></span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h3 id="custom-store" tabindex="-1"><a class="header-anchor" href="#custom-store" aria-hidden="true">#</a> Custom store</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>	<span class="token comment">// store/count.js</span>
		<span class="token keyword">import</span> <span class="token punctuation">{</span>writable<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;svelte/store&#39;</span>

		<span class="token keyword">function</span> <span class="token function">createCount</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">const</span> <span class="token punctuation">{</span>subscribe<span class="token punctuation">,</span> set<span class="token punctuation">,</span> update<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">writable</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

			<span class="token keyword">return</span> <span class="token punctuation">{</span>
				subscribe<span class="token punctuation">,</span> <span class="token comment">//required</span>
				<span class="token function-variable function">increment</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">update</span><span class="token punctuation">(</span><span class="token parameter">n</span> <span class="token operator">=&gt;</span> n<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
				<span class="token function-variable function">decrement</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">update</span><span class="token punctuation">(</span><span class="token parameter">n</span> <span class="token operator">=&gt;</span> n<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
				<span class="token function-variable function">reset</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">set</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>

		<span class="token keyword">export</span> <span class="token keyword">const</span> count <span class="token operator">=</span> <span class="token function">createCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div>`,64);function p(e,l){return t}var u=s(a,[["render",p]]);export{u as default};
