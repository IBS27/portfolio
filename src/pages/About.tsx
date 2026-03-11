function About() {
  return (
    <section>
      <h1 className="terminal-copy section-command">
        <span className="terminal-prompt">&gt; user@portfolio:~$</span> cat about.ts
      </h1>
      <div className="code-card">
        <pre className="terminal-copy" aria-label="About code snippet">
          <code>
            <span className="token-keyword">const</span>{' '}
            <span className="token-variable">alex</span>{' '}
            <span className="token-punctuation">= {'{'}</span>
            {'\n'}  <span className="token-property">role</span>
            <span className="token-punctuation">:</span>{' '}
            <span className="token-string">'Full-Stack Dev'</span>
            <span className="token-punctuation">,</span>
            {'\n'}  <span className="token-property">location</span>
            <span className="token-punctuation">:</span>{' '}
            <span className="token-string">'San Francisco'</span>
            <span className="token-punctuation">,</span>
            {'\n'}  <span className="token-property">skills</span>
            <span className="token-punctuation">:</span>{' '}
            <span className="token-punctuation">[</span>
            <span className="token-string">'JavaScript'</span>
            <span className="token-punctuation">,</span>{' '}
            <span className="token-string">'React'</span>
            <span className="token-punctuation">,</span>{' '}
            <span className="token-string">'Python'</span>
            <span className="token-punctuation">,</span>{' '}
            <span className="token-string">'Django'</span>
            <span className="token-punctuation">]</span>
            <span className="token-punctuation">,</span>
            {'\n'}  <span className="token-property">hobbies</span>
            <span className="token-punctuation">:</span>{' '}
            <span className="token-punctuation">[</span>
            <span className="token-string">'Photography'</span>
            <span className="token-punctuation">,</span>{' '}
            <span className="token-string">'Hiking'</span>
            <span className="token-punctuation">]</span>
            {'\n'}
            <span className="token-punctuation">{'}'};</span>
          </code>
        </pre>
      </div>
    </section>
  )
}

export default About
