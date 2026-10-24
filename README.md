# Quizzy — Interactive Quiz Web App

A responsive frontend-only quiz app built with React, JavaScript, and CSS for DevCamp 2.0 Task 2.

## Features
- Welcome/start screen with quiz instructions
- 10 multiple-choice web development questions
- One question at a time with four answer options
- Answer selection and immediate feedback
- Countdown timer for each question
- Progress bar and question counter
- Score, percentage, correct/incorrect counts, and performance message
- Review answers after submitting
- Restart quiz
- Responsive design for desktop and mobile
- Reusable React components and question data passed through props

## Tech stack
- React
- Vite
- JavaScript
- CSS

No backend or database is required.

## Run locally
1. Install Node.js (LTS) from https://nodejs.org/
2. Extract the ZIP file.
3. Open the `interactive-quiz` folder in VS Code.
4. Open Terminal in VS Code and run:

   ```bash
   npm install
   npm run dev
   ```

5. Open the local URL printed in the terminal (usually http://localhost:5173).

## Create a production build
```bash
npm run build
npm run preview
```

## Deploy to Vercel
1. Push this project to a GitHub repository.
2. Go to https://vercel.com/ and import the repository.
3. Vercel should detect Vite automatically.
4. Use `npm run build` as the build command and `dist` as the output directory.
5. Click Deploy and copy the live URL.

## Submit
Submit two separate links as requested by the assignment:
1. GitHub repository URL
2. Live deployed website URL

Remember to replace any placeholder repository details with your own account and verify the deployed app before submitting.
