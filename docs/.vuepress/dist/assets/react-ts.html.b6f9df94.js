import{e as n}from"./app.808106a9.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="react-with-typescript-docs" tabindex="-1"><a class="header-anchor" href="#react-with-typescript-docs" aria-hidden="true">#</a> React with Typescript docs</h1><h2 id="basics" tabindex="-1"><a class="header-anchor" href="#basics" aria-hidden="true">#</a> Basics</h2><h3 id="typing-props" tabindex="-1"><a class="header-anchor" href="#typing-props" aria-hidden="true">#</a> Typing props</h3><div class="language-tsx ext-tsx line-numbers-mode"><pre class="language-tsx"><code>	<span class="token keyword">type</span> <span class="token class-name">GreetProps</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
		name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
		lastName<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">function</span> <span class="token function">Greet</span><span class="token punctuation">(</span><span class="token parameter">props<span class="token operator">:</span> GreetProps</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>


	<span class="token comment">// props with object</span>
		<span class="token keyword">type</span> <span class="token class-name">PersonProps</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
			name<span class="token operator">:</span> <span class="token punctuation">{</span>
				first<span class="token operator">:</span> <span class="token builtin">string</span>
				last<span class="token operator">:</span> <span class="token builtin">string</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>

	<span class="token comment">// Array of objects</span>
		<span class="token keyword">type</span> <span class="token class-name">PersonListProps</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
			name<span class="token operator">:</span> <span class="token punctuation">{</span>
				first<span class="token operator">:</span> <span class="token builtin">string</span>
				last<span class="token operator">:</span> <span class="token builtin">string</span>
			<span class="token punctuation">}</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
		<span class="token punctuation">}</span>


	<span class="token comment">// specific the param value</span>
		<span class="token keyword">type</span> <span class="token class-name">StatusProps</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
			state<span class="token operator">:</span> <span class="token string">&#39;loading&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;success&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;error&#39;</span>
		<span class="token punctuation">}</span>


	<span class="token comment">// if the child is just a string </span>
		<span class="token keyword">type</span> <span class="token class-name">HeadingProps</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
			children<span class="token operator">:</span> <span class="token builtin">string</span>
		<span class="token punctuation">}</span>

	<span class="token comment">// if the child is a react element</span>
		<span class="token keyword">type</span> <span class="token class-name">ModuleProps</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
			children<span class="token operator">:</span> React<span class="token punctuation">.</span>ReactNode
		<span class="token punctuation">}</span>

	<span class="token comment">// handle change event</span>
		<span class="token keyword">type</span> <span class="token class-name">InputProps</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
			value<span class="token operator">:</span> <span class="token builtin">string</span>
			<span class="token function-variable function">handleChange</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">event<span class="token operator">:</span> React<span class="token punctuation">.</span>ChangesEvent<span class="token operator">&lt;</span>HTMLInputElement<span class="token operator">&gt;</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span>
		<span class="token punctuation">}</span>

	<span class="token comment">// Type button</span>
		<span class="token keyword">type</span> <span class="token class-name">ButtonProps</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
			<span class="token function-variable function">handleClick</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">event<span class="token operator">:</span> React<span class="token punctuation">.</span>ChangeEvent<span class="token operator">&lt;</span>HTMLInputElement<span class="token operator">&gt;</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span>
		<span class="token punctuation">}</span>

	<span class="token comment">// Css style</span>
		<span class="token keyword">type</span> <span class="token class-name">ContainerProps</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
			styles<span class="token operator">:</span> React<span class="token punctuation">.</span>CSSProperties
		<span class="token punctuation">}</span>


	<span class="token comment">//	setState</span>
		<span class="token keyword">type</span> <span class="token class-name">AuthUser</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
			name<span class="token operator">:</span> <span class="token builtin">string</span>
			email<span class="token operator">:</span> <span class="token builtin">string</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">const</span> <span class="token punctuation">[</span>user<span class="token punctuation">,</span> setUser<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token generic-function"><span class="token function">useState</span><span class="token generic class-name"><span class="token operator">&lt;</span>AuthUser<span class="token operator">|</span><span class="token keyword">null</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token comment">/*** or ***/</span>

		<span class="token comment">// using type assertion.</span>
			<span class="token generic-function"><span class="token function">useState</span><span class="token generic class-name"><span class="token operator">&lt;</span>AuthUser<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token keyword">as</span> AuthUser<span class="token punctuation">)</span>



	<span class="token comment">// useReduce</span>
		<span class="token keyword">type</span> <span class="token class-name">CounterState</span> <span class="token operator">=</span> <span class="token punctuation">{</span> count <span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">}</span>

		<span class="token keyword">type</span> <span class="token class-name">UpdateAction</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
			type<span class="token operator">:</span> <span class="token string">&#39;increment&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;decrement&#39;</span>
			payload<span class="token operator">:</span> <span class="token builtin">number</span>
		<span class="token punctuation">}</span>

		<span class="token keyword">type</span> <span class="token class-name">ResetAction</span> <span class="token operator">=</span> <span class="token punctuation">{</span> type<span class="token operator">:</span> <span class="token string">&#39;reset&#39;</span> <span class="token punctuation">}</span>

		<span class="token keyword">type</span> <span class="token class-name">CounterAction</span> <span class="token operator">=</span> UpdateAction <span class="token operator">|</span> ResetAction

		<span class="token keyword">function</span> <span class="token function">reducer</span><span class="token punctuation">(</span><span class="token parameter">state<span class="token operator">:</span> CounterState<span class="token punctuation">,</span> action<span class="token operator">:</span> CounterAction</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>


	<span class="token comment">// useRef</span>
		<span class="token keyword">const</span> inputRef <span class="token operator">=</span> <span class="token generic-function"><span class="token function">useRef</span><span class="token generic class-name"><span class="token operator">&lt;</span>HTMLInputElement<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


	
	<span class="token comment">//	Component</span>
		<span class="token keyword">type</span> <span class="token class-name">PrivateProps</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
			isLoggedIn<span class="token operator">:</span> <span class="token builtin">boolean</span>
			Component<span class="token operator">:</span> React<span class="token punctuation">.</span>ComponentType
		<span class="token punctuation">}</span>

	<span class="token comment">// type assentation</span>
		<span class="token keyword">type</span> <span class="token class-name">ListProps<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span> <span class="token punctuation">{</span>
			item<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
			<span class="token function-variable function">onClick</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">value<span class="token operator">:</span> <span class="token constant">T</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span>
		<span class="token punctuation">}</span>


		<span class="token keyword">const</span> list <span class="token operator">=</span> <span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token punctuation">{</span>id<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">{</span>item<span class="token punctuation">,</span> onClick<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token operator">:</span> ListProps<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br></div></div><h3 id="restricting-props" tabindex="-1"><a class="header-anchor" href="#restricting-props" aria-hidden="true">#</a> Restricting Props</h3><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>	<span class="token keyword">type</span> <span class="token class-name">RandomNumberType</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
		value<span class="token operator">:</span> <span class="token builtin">number</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">type</span> <span class="token class-name">PositiveNumber</span> <span class="token operator">=</span> RandomNumberType <span class="token operator">&amp;</span> <span class="token punctuation">{</span>
		isPositive<span class="token operator">:</span> <span class="token builtin">boolean</span>
		isNegative<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">never</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">type</span> <span class="token class-name">NegativeNumber</span> <span class="token operator">=</span> RandomNumberType <span class="token operator">&amp;</span> <span class="token punctuation">{</span>
		isNegative<span class="token operator">:</span> <span class="token builtin">boolean</span>
		isPositive<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">never</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">type</span> <span class="token class-name">RandomNumberProps</span> <span class="token operator">=</span> PositiveNumber <span class="token operator">|</span> NegativeNumber

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h3 id="template-literals-and-exclude" tabindex="-1"><a class="header-anchor" href="#template-literals-and-exclude" aria-hidden="true">#</a> Template Literals and exclude</h3><div class="language-tsx ext-tsx line-numbers-mode"><pre class="language-tsx"><code>	<span class="token keyword">type</span> <span class="token class-name">HorizontalPosition</span> <span class="token operator">=</span> <span class="token string">&#39;left&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;center&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;right&#39;</span><span class="token punctuation">;</span>
	<span class="token keyword">type</span> <span class="token class-name">VerticalPosition</span> <span class="token operator">=</span> <span class="token string">&#39;top&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;center&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;bottom&#39;</span>

	<span class="token keyword">type</span> <span class="token class-name">ToastProps</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
		position<span class="token operator">:</span> Exclude<span class="token operator">&lt;</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>HorizontalPosition<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> - </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>VerticalPosition<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
						<span class="token string">&#39;center-center&#39;</span><span class="token operator">&gt;</span> <span class="token operator">|</span> <span class="token string">&#39;center&#39;</span>
	<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="type-with-button" tabindex="-1"><a class="header-anchor" href="#type-with-button" aria-hidden="true">#</a> Type with button</h3><div class="language-tsx ext-tsx line-numbers-mode"><pre class="language-tsx"><code>	<span class="token keyword">type</span> <span class="token class-name">ButtonProps</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
		variant<span class="token operator">:</span> <span class="token string">&#39;primary&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;secondary&#39;</span>
		children<span class="token operator">:</span> <span class="token builtin">string</span>
	<span class="token punctuation">}</span> <span class="token operator">&amp;</span> Omit<span class="token operator">&lt;</span>React<span class="token punctuation">.</span>ComponentProps<span class="token operator">&lt;</span><span class="token string">&#39;button&#39;</span><span class="token operator">&gt;</span><span class="token punctuation">,</span> <span class="token string">&#39;children&#39;</span><span class="token operator">&gt;</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div>`,10);function t(e,o){return p}var r=s(a,[["render",t]]);export{r as default};
