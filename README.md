TrekTribe

Welcome to TrekTribe, an innovative platform designed to connect people with nature, community, and purpose. TrekTribe is a web application that allows users to discover, search for, and join a wide range of outdoor events, from serene hikes to challenging marathons and impactful community projects. Our mission is to make outdoor adventure and environmental stewardship accessible to everyone, fostering a global community that connects with nature and each other.

![TrekTribe Homepage](https://raw.githubusercontent.com/firebase/firebase-studio/main/static/images/trektribe-screenshot.png)

## Features

- **Explore Events**: Browse a curated list of outdoor events, including hikes, marathons, cycling tours, and mountain climbs.
- **Advanced Filtering**: Users can filter events by activity type, date, difficulty, amenities (like snacks), and event type (community or corporate).
- **AI-Powered Search**: A natural language search powered by Google's Gemini Pro allows users to find their perfect adventure by describing what they're looking for (e.g., "Find a beginner-friendly hike this weekend near Nairobi").
- **Event Details**: Each event has a dedicated page with detailed information, including date, location, difficulty, and description.
- **Become a Partner**: Organizations can partner with TrekTribe to host their own events, reaching a dedicated audience of outdoor enthusiasts.
- **SDG Impact**: The platform highlights its commitment to the UN Sustainable Development Goals (SDGs) by associating events with causes like climate action and conservation.
- **Responsive Design**: A beautiful and intuitive user interface that works seamlessly across desktops, tablets, and mobile devices.

## Tech Stack

TrekTribe is built with a modern, robust, and scalable tech stack:

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **UI Components**: [ShadCN UI](https://ui.shadcn.com/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Generative AI**: [Genkit](https://firebase.google.com/docs/genkit) with Google's Gemini model
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Deployment**: [Firebase App Hosting](https://firebase.google.com/docs/app-hosting)

## Project Structure

The project follows a standard Next.js App Router structure. Here's a look at the key directories:

```
.
├── src
│   ├── app                 # Main application routes
│   │   ├── (pages)         # Route groups for each page
│   │   ├── layout.tsx      # Root layout
│   │   └── page.tsx        # Homepage
│   ├── components          # Reusable React components
│   │   ├── ai              # AI-related components
│   │   ├── shared          # Components shared across multiple pages
│   │   └── ui              # Base UI components from ShadCN
│   ├── lib                 # Helper functions, type definitions, and static data
│   ├── ai                  # Genkit flows and AI-related server logic
│   └── ...
├── public                  # Static assets (images, fonts)
└── tailwind.config.ts    # Tailwind CSS configuration
```

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

- Node.js (v18 or later)
- npm or yarn

### Installation & Running Locally

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/your-username/trektribe.git
    cd trektribe
    ```

2.  **Install NPM packages:**
    ```sh
    npm install
    ```

3.  **Set up environment variables:**
    Create a `.env.local` file in the root of the project and add your Google AI API key:
    ```
    GEMINI_API_KEY=your_google_ai_api_key
    ```

4.  **Run the development server:**
    ```sh
    npm run dev
    ```

The application will be available at `http://localhost:3000`.

## AI Integration

The AI-powered search is a core feature of TrekTribe. It is implemented using Genkit, a framework for building AI-powered applications.

- **The Flow**: The logic is defined in `src/ai/flows/ai-search-for-events.ts`.
- **The Prompt**: A carefully crafted prompt instructs the Gemini model to act as an "AI event search assistant" and return a list of event objects in a specific JSON format based on the user's natural language query.
- **The Component**: The UI for the AI search is located in `src/components/ai/AIDemoBox.tsx`, which uses a React Server Action (`src/app/actions.ts`) to securely call the Genkit flow on the server.
