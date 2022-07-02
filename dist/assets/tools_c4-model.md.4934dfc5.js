import{_ as e,c as o,o as t,b as a}from"./app.cccf0617.js";const f=JSON.parse('{"title":"C4 Model","description":"","frontmatter":{},"headers":[{"level":2,"title":"Notation","slug":"notation"},{"level":3,"title":"Notes","slug":"notes"}],"relativePath":"tools/c4-model.md","lastUpdated":1656144524000}'),n={name:"tools/c4-model.md"},i=a(`<h1 id="c4-model" tabindex="-1">C4 Model <a class="header-anchor" href="#c4-model" aria-hidden="true">#</a></h1><p>There are many different audiences for diagrams and documentation, all with different interests.</p><pre><code>When drawing software architecture diagrams, think like a software developer.
A common set of abstractions, is more important than common notation.
</code></pre><p>A <code>software system</code> is made up of one or more <code>Containers</code>, each of which contains one or more <code>components</code>, which in turn are implemented by one or more <code>code elements</code>.</p><p><strong>C4 model</strong></p><ol><li><p>Overview first</p><ul><li><code>System context</code></li><li><code>Containers</code></li></ul></li><li><p>zoom &amp; filter</p><ul><li><code>Components</code></li></ul></li><li><p>details on demband</p><ul><li><code>code</code> e.g. classes</li></ul></li></ol><h2 id="notation" tabindex="-1">Notation <a class="header-anchor" href="#notation" aria-hidden="true">#</a></h2><p><code>titles</code> sort and meaningful, include the <code>diagram type</code>, numberad if diagram order is important; for example:</p><blockquote><pre><code>**System context diagram** for Financial Risk system
</code></pre></blockquote><pre><code>**[system context]** financail risk system.
</code></pre><p><code>Layout</code> sticky notes and index cards (e.g. CRC cards). make a great substibute for hand-drawn boxes, especially if you don&#39;t have a whiteboard.</p><p><code>Visual consistency</code> try to be consistent with notation and element positioning across diagrams.</p><p><code>Acronyms</code> Be wary of using acronyms, especially those related to the business/domain that you wark in.</p><p><code>Elements</code> Start with simple boxes contains the element name, typed technology (if appropriate) and a description/responsibilities.</p><p><code>lines</code> favour uni-directional lines showing the most important dependencies or data flow, with an annotation to be explicit about the purpose ot the line and direction.</p><blockquote><pre><code>show both directions when the intents are different.
Beware of hiding the true story.
Add more words to make the intent explicit.
</code></pre></blockquote><p><code>key/legend</code> Explain shapes, line styles, colours, borders, acronyms, etc... event if your notation seems obvious!</p><p>Use shape, colour and size to complement a diagram that already makes sense.</p><p>Use icons to supplement text, not replace it.</p><p>Increase the <strong>readability</strong> of software architecture diagrams, so they can stand alone.</p><p>Any narrative should complement the diagram rather than explain it.</p><h3 id="notes" tabindex="-1">Notes <a class="header-anchor" href="#notes" aria-hidden="true">#</a></h3><p><strong>Abstractions first, notation second</strong> Ensure that your team has a ubiquitous language to describe software architecture.</p>`,23),s=[i];function r(d,c,l,p,m,h){return t(),o("div",null,s)}var y=e(n,[["render",r]]);export{f as __pageData,y as default};