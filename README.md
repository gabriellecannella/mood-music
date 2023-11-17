
# Mood Music
A website designed to evaluate user's mood through a mood wheel selection, photo capture, or image upload. It then generates a Spotify playlist matching the identified emotional state.

## Screenshots
![Home](https://github.com/gabriellecannella/mood-music/assets/61055337/9d4b2fc9-52c4-48bd-8833-1ce8de5afcb1)
![Mood Wheel](https://github.com/gabriellecannella/mood-music/assets/61055337/12014ed4-af02-4c2d-bc52-e6acbc04c75f)
![live Photo Capture](https://github.com/gabriellecannella/mood-music/assets/61055337/24ce0e99-aef7-48a4-883f-a6d828fd45b6)
![Image Upload](https://github.com/gabriellecannella/mood-music/assets/61055337/d837d0e5-6dd4-4053-9dde-92c26b95350c)
![Song List](https://github.com/gabriellecannella/mood-music/assets/61055337/9b4b30fd-acb1-4c9b-b3e0-dd2fdab08465)

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
