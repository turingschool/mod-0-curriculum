## How To Ask Questions That Lead to Answers
As you launch into your technical career, you are going to have questions. Tons of them! The challenge for new developers is learning WHEN and HOW to ask questions around technical content!

## When You Should Ask a Question
![When to ask questions](https://media.giphy.com/media/cMVgEhDeKzPwI/giphy.gif)

When learning any new skill, especially a technically challenging skill, it is crucial to give yourself time to explore, tinker, research, etc. before reaching out for help.

One of the most common patterns we see of students who struggle at Turing is asking for help before they've put in the time/effort to begin the process of learning what is confusing them in the first place. This typically involves a student who sees an error message and asks for help immediately. Remember, error messages are your friends! They can provide clues and ideas as to where to make changes to your code.

On the flip side, another common pitfall we see of new students is spending TOO MUCH time struggling on their own before reaching out for help. This could look like spending 20-30 minutes trying different approaches but still encountering the same error message.

So to recap:

- If you've been working for 20+ minutes and haven't made any progress (same error message, app still broken)... `TIME TO REACH OUT FOR HELP`
- If you've been working for 20 minutes and the app still isn't working BUT you are making some progress/seeing new error messages... `KEEP WORKING AT IT`

## Who Should I Reach Out to For Help?
![Who to ask question to?](https://media.giphy.com/media/cRNbYm7jLOjm9H8wcP/giphy.gif)

Turing (and most tech companies) use tools like Slack to foster strong, asynchronous communication. In the context of Mod 0/Mod 1, reaching out in your cohort specific channel is a great way to get a lot of visibility on your question. By posting in a public place, you are allowing multiple people - cohortmates, instructors, mentors, etc. - the opportunity to help you!

Feeling apprehensive about asking a questions publicly? Don't be! That's part of the learning process AND it's the fastest way to get feedback on your question(s). Chances are that SEVERAL people have the same questions/problems that you're encountering so it will benefit more than just you to ask!

## How to Ask a Questions That Lead to an Answers
![How to ask questions](https://media.giphy.com/media/fUqfaPVjiAQcfticZH/giphy.gif)

Asking technical questions effectively requires providing the appropriate amount of context to elict strong and speedy responses. Here is a formula for asking questions at Turing and beyond:

- What are you trying to accomplish?
- What have you tried so far?
- What specifically are you stuck on?
- Provide additional visual context such as inline code examples, code snippets, or screenshots:
  - Use `inline code examples` for short, single lines of code, such as error messages or warnings
  - When using a screenshot, make sure image is clear and includes clarifying info/captions if necessary
  - Need to show more than one line of code? Use a code block instead - be sure to chose the correct language for your snippet to get proper syntax highlighting + line numbers (in Slack)!
   
```js
   //This is an example of a code snippet
   var coolPhrase = 'Gooooood morning campers!';
   
   function sayGreeting(phrase) {
     console.log(phrase)
   }
   
   sayGreeting(coolPhrase)
```
  
If you are unable to provide the information above, it is usually a sign that you haven't spent enough time working on this problem on your own! Also, the process of writing out such a detailed request for help will often allow you to think of new things to try or experiment with and can often allow you to solve the problem on your own.

## Examples of Good and Bad Questions
### Bad Example
<img width="558" alt="Screen Shot 2020-12-18 at 11 26 55 AM" src="https://user-images.githubusercontent.com/20710327/102648023-fed58900-4123-11eb-852d-2ceedf9121c3.png">

Issues with this question:

- No context is given at to what the actual issue is
- Unclear what steps they have already tried or what resources they have consulted
- The way the question is phrased requires someone to ask what the issue is
- Chances are there is nothing wrong with the Javascript file, but was rather an issue the developer wrote in the code. Providing code block or `inline code` examples could help identify the issue.

### Good Example
<img width="576" alt="Screen Shot 2020-12-18 at 12 02 53 PM" src="https://user-images.githubusercontent.com/20710327/102651006-fc296280-4128-11eb-87e5-ff8434ae95e8.png">

This is a strong question because:

- Clear explanation of the problem
- Outlined the steps they have taken to research on their own
- Can identify specifically where or what they are stuck on
- Provided relevant error message using `inline code`
- Provided relevant code in a larger code block

By providing these examples and context, it allows other developers to try to recreate this problem on their own and find solutions! As often is the case, this specific problem was due to a very minor typo in their function call - this developer didn't spell their function name correctly! Specifically, they called their function using `saySomethin(...)` when the function name is `saySomething()`
