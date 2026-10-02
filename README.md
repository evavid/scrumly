# Scrumly

**A web app for running software projects the Scrum way: projects, user stories, sprints, tasks and time tracking in one place.**

A team of four built Scrumly for the *Modern Software Development Methods* course in the Master's programme at the Faculty of Computer and Information Science, University of Ljubljana (2022). We worked on it the way the app is meant to be used: in sprints, from a product backlog of user stories.

## Features

- **Projects and roles:** each project has a product owner, a Scrum master and developers.
- **Product backlog:** user stories with priority, business value and acceptance tests. Stories can be rejected with a comment.
- **Sprints:** plan sprints with dates and velocity. The app checks that dates are valid and that sprints don't overlap.
- **Tasks:** break stories into tasks, assign them, and accept or decline assigned work.
- **Time tracking:** a built-in timer and a time log per task, with totals rolled up to stories and sprints.
- **Project wall and documentation:** a shared discussion board and documentation page for each project.
- **Users and security:** admin user management, password strength rules, and sessions based on JSON Web Tokens.

## My part

I worked mostly on **sprints, tasks and time tracking**:

- creating and naming sprints, validating their dates, and preventing overlapping sprints
- the task acceptance and rejection flow, including showing rejection comments
- the task timer and time log, with correct totals for stories and sprints
- the "My tasks" view, which shows work assigned to the signed-in user
- keeping user sessions with cookies, plus password validation and a show-password toggle

## Tech

Node.js · Express · Handlebars · MongoDB and Mongoose · Passport and JSON Web Tokens · Bootstrap

## Run it locally

You need Node.js and a MongoDB database, either local or a free MongoDB Atlas cluster.

```bash
git clone https://github.com/evavid/scrumly.git
cd scrumly
npm install
cp .env.example .env   # then set MONGODB_URI and JWT_GESLO
npm start
```

Then open http://localhost:3000.

## Team

[@tmlakar](https://github.com/tmlakar) · [@anjabrelih](https://github.com/anjabrelih) · [@AnaKna](https://github.com/AnaKna) · Eva Vidmar

---

*University project (2022), not actively maintained.*
