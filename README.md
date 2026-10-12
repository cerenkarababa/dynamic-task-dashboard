# Assignment 4 - Dynamic Task Dashboard

## Files

- `index.html` contains the page structure and loads the JavaScript module.
- `styles.css` adds basic styling and a visible style for completed tasks.
- `taskManager.js` contains the `Task` and `TaskManager` classes. The task ID is read-only, and task lists are updated by creating new arrays.
- `api.js` simulates a server request with a Promise and a 1500 ms `setTimeout`.
- `main.js` loads the data, handles JSON conversion, creates task elements, and adds the Toggle and Delete event listeners.

## How to run

Open the `assignment4` folder in a code editor and run `index.html` using a local development server (for example, the Live Server extension in VS Code). Since the JavaScript files use ES modules, running through a local server is recommended.

Click **Load Tasks** to load the sample tasks. Use **Toggle** to change a task's completion status and **Delete** to remove a task.

## Challenges

One challenge was keeping the task list immutable. Instead of changing the existing array, I used methods such as `map`, `filter`, and the spread operator to create updated arrays. Another part was connecting the asynchronous loading process to the DOM and showing a loading or error message when needed.

## Suggested Git commit progress

Make commits as you complete and test each part, using meaningful messages such as:

1. `Create assignment folder and HTML structure`
2. `Add basic dashboard styles`
3. `Create Task class with immutable id`
4. `Add immutable TaskManager methods`
5. `Simulate asynchronous task loading`
6. `Render tasks and add toggle and delete events`
7. `Add JSON handling and error messages`
8. `Write README and test dashboard`

Only commit changes that you have actually made at each stage. Do not create all commits at once just to reach a number; the assignment says commit history may be checked for progress.

## Features

- Loads tasks asynchronously using Promises and async/await.
- Creates task elements dynamically with DOM methods.
- Toggles task completion status.
- Removes tasks from the dashboard.
- Uses immutable updates to manage task data.
- Converts task data with JSON.stringify() and JSON.parse().
- Displays loading and error messages.
