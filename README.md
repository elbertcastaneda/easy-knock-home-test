# Questions

1. What do you like about being a programmer or software engineer? What aspects do you not like?
    - I love to be a `Software Engineer` because in my opinion is a very exigent career. Thanks to that you are growing all-time in all aspects of your life (Personal and Professional). Because once that you adquire a new skill you can start to implementing it also in you personal life, so that is beatiful (A kind of super power).
    - I also love to be a `Software Engineer` because we can create `something` from scratch and this is not easy to found in other kind of jobs.
    - I think that I hate to myself when I spend more time than established to work because I am working with something that is challeging me, sometimes I have trouble to sleep when I am on this state in my mind.
    - Sometimes when I have a mistake I am very cruel with myself because as a `Software Engineer` you know you can't justify your errors if you want to keep on the improvements way.
1. What aspects of the working environment (e.g. company culture, team structure,
etc...) allow you to do your best work?
    - Company culture
    - Continuous Growth
    - Work with professionals (To learn from them)
    - Sharing Knowledge enviroment
    - Obiously compensations are very important to me (Salary, Benefits) 
1. What is your favorite programming language/stack and why?
    - `Node.js`
    - `React.js`
    - `Express`/`Nest.js`
    - `Next.js`
    - `Jest`
    - `Webpack`, `Prettier` + `ESLint` + `Husky` + `lint-staged`
    - Database is depending of the scope and requirements (Usually I would like to use: `MongoDB`, `Postgres`, or `MariaDB`)
    - For Caching/Settings I prefer use `Redis`
    - Why this stack?, as we noticed my favorite stack is around `JS/TS` (Yes, I love JS/TS) but let try to give more convincent reasons:
        - Universal domain language.
        - Avoid the fatigue to be switching your brain between languages.
        - In fact with React we are achieving use JS/TS instead of any views template language like Angular/Vue/Svelte, or Handlebars, Pug, or EJS in the server side.
        - A maximum threshold of source code reuse (Even between BE/FE).
        - The tools that I mentioned has a great and big open source community (Including a great documentation).
        - JS/TS are easy to learn.
        - We have a lot of posibilities, when we need to scalate and application developed over this stack (`Next.js` and `SSR` is a great example of this).
        - Find `Software Engineers` with the most of this skills is very easy.
        - CI/CD easier to configure than others, because all is based on `Node.js`.
1. Starting a new project, how do you decide which database engine to use for your primary database? What factors go into considering a relational database like PostgreSql vs a NoSQL document storage database like MongoDB?
    - I choose relational DBs:
        - When is a mandatory requirement from customer side.
        - When we need to ensure high transactionality.
        - When you need to provide a lot of reports.
        - When we have a structure and relations complex between the system semantic entities.
    - I choose NoSql (MongoDB):
        - When the bullets mentioned to choose relational DBs are not present.
        - When we have a simple use cases for app, or the product has a very specific audience (Niche scope).
        - If the stack is around Node.js, it is a another perfect sign to use MongoDB, because is based on JSON/JS structure and syntax.
        - When we have a very fickle project regarding it's requirements or projections, sometimes when the project is compenting with a lot of similar project NoSql database is a good option to win agility to scale and maintain much more easier.

1. How do you feel about automated testing? How do you know when you have a sufficient amount of automated tests?
    - I am sure that automation testing increase a lot the people confidence in an application.
    - In my opinion automation is the kind of things which a company doesn't know how much the company need it only until the company starts to produce automation code to ensure you a high quality in his products.
    - Based on my experience the best way to put a limit to how much automatition code the teams generate, is sync the test cases with scrum project management, you need to create only the necessary automation code to cover the Acceptance Criteria declared on the user stories.
    - The percentage of automation code (e2e, and integration) should be increase if you dont have a good coverage of unit testing.
1. Please share a link to a public repository or a bit of code you are most proud of, why are you proud of this piece of code or project?
    - The most code that I am proud of is on private repositories that I don't have access on this moment. But let me share a couple of basic squeletons that I was/am working on it during my free time:
        - A great project that I developed to mentoring people in Node.js - Backend: https://github.com/elbertcastaneda/nodejs-epam-hw-tasks
            - I am proud of this project because I think that it is a great project to immerse people in the Node.js backend world step by step (Branch per step)
        - Fullstach Node.js skeleton that I am creating using TS + Nest.js + TypeORM + Jest + Next.js + React.js + styledcomponens + Prettier + ESlint + Husky + lint-stage + Docker: https://github.com/elbertcastaneda/fullstack.js.
            - I am proud of this project because it is a great standalone skeleton to start working on a full-stack project from scratch, with all the mentioned tools completly configured.
            - As I mentioned I am working on it yet, my idea is create a cli application to create new apps from this skeleton.
---

# Coding Challenge:

We use a list of rules to qualify potential clients in order to buy their homes. Sometimes we do not have enough information to execute a rule, for example if the year built is not available. As part of our evaluation process we want to figure out if at least one rule had both failed and executed.

Suppose you’re given a list of failed rules and another list of executed rules, the rules all being alphanumeric strings. For example `failedRules = ['propertyType', 'homeCondition']` and `executedRules = ['yearBuilt', 'homeCondition']`. Please write a function, in whatever language you want, that takes in a list of failed rules and a list of executed rules, and returns whether or not there are any rules in both. What can you tell us about the efficiency of your function, in big-O notation.

---

# Steps to test code

1. Open a terminal on this folder
1. Run: `yarn install` or `npm install`
1. Run: `npx jest`
