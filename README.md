WIP!
Below is a comprehensive explanation of the various logics implemented in your application. The system is built around a gamified flashcard mechanism using JavaScript, combining state persistence, spaced-repetition elements, text-to-speech (TTS), and a rich set of interactive controls. Each component of the code is designed to work together to provide an engaging learning experience. Here’s a breakdown of the overall architecture and individual components:

1. Data Initialization and Persistence
Local Storage & Default Deck:

Purpose:
The app persists the deck and state variables (like XP, current card index, review history, etc.) to the browser’s localStorage.

How It Works:

The code first attempts to load a deck from localStorage using a key such as "devdeck-cards".

If nothing is stored or if the loaded data isn’t a valid array, it falls back to a predefined defaultDeck (which you defined as an array of card objects).

Each card has properties like front, back, tag, level, lastReviewed, and reviewCount, which are essential for tracking mastery and scheduling reviews.

Logic:
Using this mechanism, the app ensures that even first-time users have content to work with while also saving progress between sessions.

State Variables:

What’s Stored:
Variables such as ttsEnabled, ttsMode, currentCardIndex, xp, and others are read from or written back to localStorage.

Why:
This not only allows seamless resumption but also personalizes the experience (for instance, dark mode settings and TTS preferences).

2. The Flashcard Deck and Spaced Repetition Logic
Flashcard Object Structure:

Properties:
Each flashcard (or “card”) includes:

Front and Back: The question (or prompt) and answer.

Tag: To allow filtering (e.g., “js”, “dom”, “async”).

Level: Initially set at 1 and incremented when the card is answered correctly. This acts as a proxy for how well the learner knows the card, directly influencing the review interval.

lastReviewed & reviewCount: For tracking review history and managing spaced repetition.

Spaced Repetition Mechanism:

How It Works:

The filteredDeck() function not only filters cards by tag but also uses a set of intervals (e.g., day 1, day 3, day 7, etc., based on the current level) to decide whether a card is due for review.

When a card is reviewed correctly, its level increases (up to a maximum), thereby lengthening the review interval.

Why This Logic:
It’s a simplified spaced repetition model that adapts to the user’s mastery, ensuring that cards are revisited at optimal intervals, which helps in long-term memory retention.

3. User Interface and Rendering Logic
Rendering Views:

Flashcard and Begin Card Views:

Begin Card: Until a study session starts, the application shows a “Begin” placeholder. Clicking this card sets a flag (started = true) and resets the card index.

Flashcard View: Once the session starts, the app calls renderCard() to display the current card. This function dynamically builds the HTML for the card (showing the front side, with a hidden back) along with input fields for answer submission.

Progress and XP Bars:

The renderProgressBar() function calculates progress based on the current card index relative to the filtered deck length.

The renderXPBar() function visually represents the user's XP progress (with changing colors based on thresholds) to gamify the learning experience.

Deck Browser:

An alternate view (toggled via a button) shows a grid of all cards with options to edit or delete individual cards. This allows users to manage the content actively.

4. Interaction Controls and Event Handling
Button and Keyboard Shortcuts:

Core Buttons:
Buttons such as flip, next, previous, shuffle, reset, export/import, and session-related actions are wired with event listeners. When clicked, these buttons trigger functions that update the state (e.g., flipping the card, moving to the next card, shuffling the deck).

Keyboard Navigation:
The document listens for keydown events (like arrow keys or specific letter keys) to provide a faster and more interactive way to navigate the deck.

Begin Card Click:
The placeholder “Begin” card comes with an event listener that transitions to the active study session. This separation ensures that the session doesn’t inadvertently start until the user is ready.

Card Answering and Feedback:

Answer Submission:

Users type their answer into an input field and click the “Submit Answer” button.

The entered answer is compared to the correct answer using a fuzzy matching algorithm.

Fuzzy Comparison (Levenshtein Distance):

The helper function getLevenshteinDistance() computes how many single-character edits are required to change one string into another.

The similarity() function then converts this distance into a similarity score (ranging from 0 to 1). A threshold (≥ 0.7) is used to decide if the answer is sufficiently correct.

Outcome Processing:

A correct answer increments the card’s level, increases XP, and advances review statistics.

An incorrect answer resets the card’s level and may decrease XP.

Immediate textual feedback is provided and the card is flipped to reveal the answer.

5. Session Management and Timers
Session Timer:

Logic:
When a custom session starts, a countdown timer is initiated (set to 600 seconds).

The timer continuously updates the display.

When the timer runs out, it stops the session, alerts the user with their accuracy, and resets for the next session.

Why:
Timing sessions adds a gamified element and encourages focused study sessions.

Daily Challenge:

Mechanism:
A function selects a subset (e.g., the three lowest-level cards) to create a challenge.

Intent:
This provides variety and a test of progress, encouraging users to tackle cards that may need more review.

6. Text-to-Speech (TTS) Integration
Voice Setup and Control:

Voice Population:
The code dynamically populates a drop-down with available voices from the browser’s speech synthesis API. This allows the user to choose a voice for TTS.

TTS Modes:

Users can select modes like “both”, “front only”, “back only”, or “none” to control when TTS is triggered.

When a card is clicked or flipped, the speak() function checks the mode and calls the Web Speech API accordingly.

Adjustable Speed:
A range input enables the user to adjust the speech speed, making the TTS experience more customizable.

7. Utility Functions and Additional Controls
Auto-Tag Suggestion:

Logic:
When adding a card, the app analyzes the text content (both front and back) for keywords.

It suggests a tag (like "js" or "dom") based on a simple keyword mapping.

Why:
This helps maintain consistency in tagging and aids in filtering cards.

Import/Export Functionality:

Purpose:
Users can export their deck as a JSON file or import a new deck, which is useful for sharing or preserving progress.

How It Works:
The export button converts the deck to a JSON blob for download, while the import functionality reads a file, parses it as JSON, and (after confirming with the user) replaces the current deck.

Dark Mode and Visual Enhancements:

Toggle Dark Mode:
The code listens for clicks on the dark mode button, toggling a CSS class on the body element.

Visual Feedback:
Changes in the XP bar’s color, progress bar updates, and dynamic feedback on card submission all contribute to an engaging user interface.

Overall System Flow
Initialization:

The app loads saved data or falls back to defaults.

The UI is set up (e.g., deck browser hidden, progress bars at initial state).

Various event listeners are registered.

Starting a Session:

The user is initially presented with a “Begin” card.

Once the user clicks “Begin,” the session starts, the first flashcard is rendered, and the session timer begins.

Studying/Reviewing:

Each card is displayed, the user types an answer, and upon submission, the system computes correctness using fuzzy matching.

Based on the answer, the card’s level is updated and XP is modified.

The system advances to the next card or offers the deck browser view as desired.

State Updates and Persistence:

After every significant action (e.g., answer submission, card navigation), the current state is saved to localStorage.

Statistics (like review count and accuracy) are updated in real time.

Additional Features:

TTS integration allows auditory reinforcement.

Extra functions (shuffle, export/import, daily challenge) offer variety and deeper engagement.

Conclusion
This carefully structured logic creates a robust learning environment that combines spaced repetition, interactive feedback, and audio reinforcement. Every function—from managing persistent state to comparing user input with fuzzy matching and managing UI transitions—is designed to contribute to a seamless, gamified study session in JavaScript. The integration of real-time statistics, XP progress, and session timing further enhances the gamification aspect, making the review process engaging and effective.
