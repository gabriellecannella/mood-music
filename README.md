
# Mood Music

## Setup Instructions

### Step 1: Install Miniconda
Miniconda is a minimal installer for Conda, a package and environment management system. Download and install Miniconda from the official site:

- [Miniconda Installation Guide](https://docs.conda.io/projects/miniconda/en/latest/)

### Step 2: Create a Virtual Python Environment

1. Open your terminal.
2. Navigate to root directory
   ```
   mood-music/
   ```
3. Create a virtual environment:
   ```
   python -m venv venv
   ```
4. Activate the virtual environment:
   - **Windows:**
     ```
     venv\Scripts\activate
     ```
        **Note for Windows Users:** If you encounter a "running scripts is disabled" error when activating the virtual environment, run PowerShell as Administrator and execute:
           ```
           Set-ExecutionPolicy Unrestricted -Scope CurrentUser
           ```
   - **macOS and Linux:**
     ```
     source venv/bin/activate
     ```
5. Install required Python packages:
   ```
   pip install -r requirements.txt
   ```

### Step 3: Install Node.js
Download and install Node.js from the official website:

- [Node.js Downloads](https://nodejs.org/en/download/)

### Step 4: Restart Your Computer
This ensures that Node.js is properly initialized.

### Step 5: Install Node Modules
Navigate to project's root directory in terminal and run:
```
npm install
```

### Step 6: Running the Application

1. Activate the virtual environment:
   - **Windows:**
     ```
     .venv\Scripts\activate
     ```
   - **macOS and Linux:**
     ```
     source venv/bin/activate
     ```
2. Start the server:
   ```
   python run.py
   ```

The application will run in development mode. Open [http://localhost:3000](http://localhost:3000) in your browser to view it.

![alt text]([https://github.com/[username]/[reponame]/blob/[branch]/image.jpg](https://github.com/gabriellecannella/mood-music/blob/main/backend/pics/annotated_snapshot.jpg)https://github.com/gabriellecannella/mood-music/blob/main/backend/pics/annotated_snapshot.jpg?raw=true)
