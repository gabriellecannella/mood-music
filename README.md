
# Mood Music
A website designed to evaluate user's mood through a mood wheel selection, photo capture, or image upload. It then generates a Spotify playlist matching the identified emotional state.

## Home Page
![Home](https://github.com/gabriellecannella/mood-music/assets/61055337/53109480-3373-4e09-999c-feeeeb888a14)
## Mood Wheel Page
![MoodWheel](https://github.com/gabriellecannella/mood-music/assets/61055337/40db03b4-abfb-4b5c-92ea-7153ac9ad7da)
## Live Photo Capture Page
![Face Recognition](https://github.com/gabriellecannella/mood-music/assets/61055337/6581c74e-bf71-49a5-88d2-e78cfc664e0e)
## Image Upload Page
![Image Upload](https://github.com/gabriellecannella/mood-music/assets/61055337/b135ca0f-132c-420c-8dcf-4f7dcfed7319)
## Song List
![Song List](https://github.com/gabriellecannella/mood-music/assets/61055337/a5d5069c-90af-401a-812d-b1f0a30cfc68)

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
