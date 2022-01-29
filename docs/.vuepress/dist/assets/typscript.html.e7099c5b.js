import{e as n}from"./app.808106a9.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="typescript-docs" tabindex="-1"><a class="header-anchor" href="#typescript-docs" aria-hidden="true">#</a> Typescript Docs</h1><h2 id="basics" tabindex="-1"><a class="header-anchor" href="#basics" aria-hidden="true">#</a> Basics</h2><h3 id="basic-types" tabindex="-1"><a class="header-anchor" href="#basic-types" aria-hidden="true">#</a> Basic types</h3><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>	<span class="token keyword">let</span> id<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>

	<span class="token keyword">let</span> company<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&quot;ABC&quot;</span><span class="token punctuation">;</span>

	<span class="token keyword">let</span> isOnline<span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>

	<span class="token keyword">let</span> x<span class="token operator">:</span> <span class="token builtin">any</span> <span class="token operator">=</span> <span class="token string">&#39;any value type&#39;</span><span class="token punctuation">;</span>

	<span class="token comment">// Array of number</span>
	<span class="token keyword">let</span> ids<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">]</span>

	<span class="token comment">// Array of any types</span>
	<span class="token keyword">let</span> arr<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token string">&#39;Ali&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h3 id="tuple" tabindex="-1"><a class="header-anchor" href="#tuple" aria-hidden="true">#</a> Tuple</h3><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>	<span class="token keyword">let</span> person<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token builtin">number</span><span class="token punctuation">,</span> <span class="token builtin">string</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">2000</span><span class="token punctuation">,</span> <span class="token string">&quot;Naif&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>


	<span class="token comment">// tuple array</span>
	<span class="token keyword">let</span> employee<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token builtin">number</span><span class="token punctuation">,</span> <span class="token builtin">boolean</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
			<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
			<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">]</span>
		<span class="token punctuation">]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="union" tabindex="-1"><a class="header-anchor" href="#union" aria-hidden="true">#</a> Union</h3><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>	<span class="token keyword">let</span> pId<span class="token operator">:</span> <span class="token builtin">number</span><span class="token operator">|</span><span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&#39;2&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="enum" tabindex="-1"><a class="header-anchor" href="#enum" aria-hidden="true">#</a> Enum</h3><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>	<span class="token keyword">enum</span> Direction <span class="token punctuation">{</span>
		Up<span class="token punctuation">,</span>
		Down<span class="token punctuation">,</span>
		Left<span class="token punctuation">,</span>
		Right
	<span class="token punctuation">}</span>

	<span class="token comment">// get values number</span>
	<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Direction<span class="token punctuation">.</span>Up<span class="token punctuation">)</span> <span class="token comment">// 0</span>

	<span class="token comment">// get key name</span>
	<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Direction<span class="token punctuation">[</span><span class="token string">&#39;Up&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// &#39;Up&#39;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h3 id="type-with-objects" tabindex="-1"><a class="header-anchor" href="#type-with-objects" aria-hidden="true">#</a> type with objects</h3><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>	<span class="token keyword">type</span> <span class="token class-name">User</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
		id<span class="token operator">:</span> <span class="token builtin">number</span>
		name<span class="token operator">:</span> <span class="token builtin">string</span>
	<span class="token punctuation">}</span>


	<span class="token keyword">const</span> user<span class="token operator">:</span> User <span class="token operator">=</span> <span class="token punctuation">{</span>
		id<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
		name<span class="token operator">:</span> <span class="token string">&quot;Jodo&quot;</span>
	<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h3 id="type-assertion" tabindex="-1"><a class="header-anchor" href="#type-assertion" aria-hidden="true">#</a> Type assertion</h3><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>	<span class="token keyword">let</span> cId<span class="token operator">:</span> <span class="token builtin">any</span> <span class="token operator">=</span> <span class="token number">123</span><span class="token punctuation">;</span>

	<span class="token comment">// first way</span>
	<span class="token keyword">let</span> customerId <span class="token operator">=</span> <span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">&gt;</span>cId<span class="token punctuation">;</span>

	<span class="token comment">// second way</span>
	<span class="token keyword">let</span> customerId <span class="token operator">=</span> cId <span class="token keyword">as</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="functions" tabindex="-1"><a class="header-anchor" href="#functions" aria-hidden="true">#</a> functions</h3><p>optional param <code>y?</code> should be the last parameters</p><p>you can add type to function return <code>number, string, boolean</code> | <code>void</code></p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>	<span class="token keyword">function</span> <span class="token function">addNumb</span><span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> y<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> x <span class="token operator">+</span> y<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// default value for params</span>
	<span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span>n1<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> n2<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="interfaces" tabindex="-1"><a class="header-anchor" href="#interfaces" aria-hidden="true">#</a> Interfaces</h3><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>	Interface User <span class="token punctuation">{</span>
		<span class="token keyword">readonly</span> id<span class="token operator">:</span> <span class="token builtin">number</span>
				 name<span class="token operator">:</span> <span class="token builtin">string</span>
				 age<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">const</span> user<span class="token operator">:</span> User <span class="token operator">=</span> <span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> name<span class="token operator">:</span> <span class="token string">&quot;Naif&quot;</span><span class="token punctuation">}</span><span class="token punctuation">;</span>


	<span class="token comment">// interface with function</span>
		Interface MathFunc <span class="token punctuation">{</span>
			<span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">const</span> add<span class="token operator">:</span> MathFunc <span class="token operator">=</span> <span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=&gt;</span> x<span class="token operator">+</span>y<span class="token punctuation">;</span>


		Interface Person <span class="token punctuation">{</span>
			fName<span class="token operator">:</span> <span class="token builtin">string</span>
			lName<span class="token operator">:</span> <span class="token builtin">string</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">function</span> <span class="token function">fullName</span><span class="token punctuation">(</span>person<span class="token operator">:</span> Person<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>


	<span class="token comment">// interface with classes</span>
		Interface IPrint <span class="token punctuation">{</span>
			<span class="token function">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		<span class="token punctuation">}</span>

		<span class="token comment">// you can inherit multiple interface \`Interface1, Interface2, ...\`</span>
		<span class="token keyword">class</span> <span class="token class-name">PrintMess</span> <span class="token keyword">implements</span> <span class="token class-name">IPrint</span> <span class="token punctuation">{</span>
			<span class="token function">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
		<span class="token punctuation">}</span>


	<span class="token comment">// Inheritance</span>
		<span class="token keyword">interface</span> <span class="token class-name">InterfaceBase</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
			id<span class="token operator">:</span> <span class="token builtin">number</span>
		<span class="token punctuation">}</span>

		<span class="token keyword">interface</span> <span class="token class-name">InterfaceUser</span> <span class="token keyword">extends</span> <span class="token class-name">InterfaceBase</span> <span class="token punctuation">{</span>
			name<span class="token operator">:</span> <span class="token builtin">string</span>
		<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br></div></div><h3 id="classes" tabindex="-1"><a class="header-anchor" href="#classes" aria-hidden="true">#</a> Classes</h3><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>	<span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
		id<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
		name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

		<span class="token function">constructor</span><span class="token punctuation">(</span>id<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">this</span><span class="token punctuation">.</span>id <span class="token operator">=</span> id<span class="token punctuation">;</span>
			<span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>

	<span class="token comment">// Class with readonly</span>
		<span class="token keyword">readonly</span> username<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

	<span class="token comment">// Access modifiers</span>
		<span class="token keyword">public</span> age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>

		<span class="token comment">// only access from the class</span>
		<span class="token class-name"><span class="token keyword">private</span></span> isOnline<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>

		<span class="token comment">// only from class and sup class</span>
		<span class="token keyword">protected</span> isLogin<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>


	<span class="token comment">// class get|set value</span>
		<span class="token keyword">private</span> _id<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
		<span class="token keyword">private</span> _name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

		<span class="token keyword">get</span> <span class="token function">name</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span><span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_name<span class="token punctuation">}</span>

		<span class="token keyword">set</span> <span class="token function">name</span><span class="token punctuation">(</span>newName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>_name <span class="token operator">=</span> newName <span class="token punctuation">}</span>


	<span class="token comment">// class static</span>
		<span class="token keyword">static</span> _skills<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
		<span class="token keyword">static</span> <span class="token function">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token comment">// only access static data</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// static class</span>
	<span class="token class-name">User</span><span class="token punctuation">.</span>_skills <span class="token operator">=</span> <span class="token string">&quot;Test static property&quot;</span><span class="token punctuation">;</span>


	<span class="token comment">// Sup Class</span>
		<span class="token keyword">class</span> <span class="token class-name">Employee</span> <span class="token keyword">extends</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
			position<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

			<span class="token function">constructor</span><span class="token punctuation">(</span>id<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> position<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token keyword">super</span><span class="token punctuation">(</span>id<span class="token punctuation">,</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span>

				<span class="token keyword">this</span><span class="token punctuation">.</span>position <span class="token operator">=</span> position<span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br></div></div><h3 id="generics" tabindex="-1"><a class="header-anchor" href="#generics" aria-hidden="true">#</a> Generics</h3><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>	<span class="token keyword">function</span> <span class="token generic-function"><span class="token function">getArray</span> <span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span></span> <span class="token punctuation">(</span>items<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token operator">...</span>items<span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">let</span> numArr <span class="token operator">=</span> <span class="token generic-function"><span class="token function">getArray</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token keyword">let</span> strArr <span class="token operator">=</span> <span class="token generic-function"><span class="token function">getArray</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;Mario&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Clonic&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="ts-config-json" tabindex="-1"><a class="header-anchor" href="#ts-config-json" aria-hidden="true">#</a> Ts config.json</h2><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>	<span class="token punctuation">{</span>
		<span class="token property">&quot;compilerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token property">&quot;target&quot;</span><span class="token operator">:</span> <span class="token string">&quot;es6&quot;</span><span class="token punctuation">,</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div>`,26);function t(e,o){return p}var r=s(a,[["render",t]]);export{r as default};
