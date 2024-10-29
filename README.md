# Eisenhower Matrix To-Do List with Daily Facts

This project is a React-based To-Do List application that helps users manage their tasks by organizing them according to the **Eisenhower Matrix** (Urgent & Important, Not Urgent but Important, Urgent but Not Important, Neither Urgent nor Important). To make it easier for users to remember to check their task lists, the application also fetches a **Random Useless Fact** daily, displayed at the top of the page. This fun feature encourages users to return to the app regularly, ensuring they keep track of their to-dos while enjoying a new fact each day.

## Goal of the App

This app addresses a common problem: writing down tasks but forgetting to check the list regularly. By adding a fun, random fact that changes daily, users are incentivized to visit the app often, helping them stay on top of their to-dos in a fun and engaging way.

## Features

- **Eisenhower Matrix Categorization**: Organize tasks into four categories based on urgency and importance.
- **Daily Random Fact**: Fetches and displays a random fact each day to motivate users to open the app daily.
- **Task Management**:
  - Add tasks with due dates.
  - Mark tasks as completed.
  - Remove tasks using a small "X" button.
- **Responsive Design**: Styled with CSS for a clean and modern look.

## Technologies Used

- **React**: Frontend framework for building the user interface.
- **CSS**: Styling for the layout and components.
- **Random Facts API**: External API used to fetch a daily fact.

## Installation

To set up and run this project on your local machine, follow these steps:

### Prerequisites

- **Node.js** and **npm** should be installed on your machine.

### Steps

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/your-username/eisenhower-todo-facts.git
   cd eisenhower-todo-facts
   ```


2. **Install Dependencies**

```bash
npm install
```

3. **Start the Application**

```bash
npm start
```

This will run the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Usage

### Add Task:
- Type the task name in the input box.
- Select a due date.
- Choose a category based on urgency and importance.
- Click **Add Task** to add the task to the appropriate category.

### Mark Task as Completed:
- Use the checkbox next to each task to mark it as completed.
- Completed tasks will have a strikethrough effect.

### Remove Task:
- Click the small red "X" button to remove a task.

### View Daily Fact:
- A random useless fact is displayed at the top of the page, updated daily.
- This fun feature encourages users to return to the app frequently, so they can enjoy a new fact each day while checking in on their tasks.

## API Information

The Random Useless Fact feature is powered by the **Useless Facts API**, which provides fun and random facts.

### Example API Request

```http
GET https://uselessfacts.jsph.pl/api/v2/facts/random?language=en
```

### API Usage in Code

The `fetchRandomFact` function in `RandomFact.js` fetches a random fact from the API and displays it on the app.

