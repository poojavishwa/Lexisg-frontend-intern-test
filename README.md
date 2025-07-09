To Run this use - npm run dev

How Citation Linking Was Handled - 
When the user types a legal question and clicks Submit, the app simulates a response with:

A legal answer

A list of citations

Clicking a citation:

Opens a modal window.

Therefore, instead of showing the PDF inside the modal, the modal displays a message and provides a button to open the PDF in a new browser tab.

In a production system:

I integrate PDF.js or similar tools to render the PDF directly in-app.

Deploye Link - https://lexisg-frontend-intern-test-4rmae2ojf.vercel.app/
