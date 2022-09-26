# [Code Review Best Practices](https://www.youtube.com/watch?v=a9_0UUUNt-Y)


`Having Opinions on code is an occupational Requirement`


Are we harder on other people's code than our own?


## What to look for in a code review ?

read `what to look for in a code review` book

[codepreview book](http://jb.gg/book/codereview) 

## Different workflows
- Gateway reviews 
- Knowledge sharing 
- Early design feedback

## What should you look for when reviewing code?

**It Depends** 
- you job is to find problems in code

**Anti-Pattern** 
- whitespace, code formatting
- Design changes when the code works (should be durring implementation not at the of implementation inconsistent)
- The ghost reviewer
- Ping pong reviews


> Developers hate code reviews :)
> 
> code reviews are a massive waste of time
> developers's say :)




## Why code review

- Ensuer code meets standards
- Find bugs
- Share knowledge
- Check code is understandable
- Ensure code does what it's supposed to
- Collaborate on design
- Evolve application code

## When

- During implementation?
- When it's ready to merge?
- After it's been merged?


## When is the review complete?

- When everyone agress?
- When a gatekeeper agrees?
- When all comments are addressed?

## Who Reviews the code?


## Who signs it off?

## Where ?
- Showing code to a colleague at a computer.
- Mob reviewing in a conference room
- Remote screen-sharing
- Using code review software


## What to look for ?
- Fit with the overall architecture 
- SOLID principles, Domain dreven design, Design patterns or other paradigms of choice
- New code follow team's current practices
- Code is in the right place
- Code reuse
- Over-engineering
- Readable code and tests 
- Testing the right things 
- Exception error messages 
- Subtle bugs 
- Security
- Regulatory requirements
- Performance
- Documentation and/or help files been updated
- Spelling, punctuation & grammar on user messages


**Human reviewers should be doing what can't be automated** 

`Understand the constraints`


Why: knowledge sharing
- Purpose isn't to reject the code
- Focus is on how easy it is to understand the code
- Should have specific checks


## How
- Automate Everything you can

**Submitting for review** 
- reviews should be small
- Annotate your code

**Reviewing** 
- should be clear who is reviewing
- Respond in a timely fashion
- checklist of what to look for

**Comments** 
- bear in mind why, when and what
- be constructive
- be specific [bug, performance]


**Accept or Raise concern** 
- next steps should be clear

**Making changes** 
- respond to comments
- Respond in a timely fashion

**Resolving** 
- the goal is to accept the review
- should be clear who signs it off
- and when

## Have clear objectives

### Clarity comes from undertanding
1. why
2. when 
3. who
4. where
5. what
6. how


`The goal is to ship the code. Not to prove how clever you are`