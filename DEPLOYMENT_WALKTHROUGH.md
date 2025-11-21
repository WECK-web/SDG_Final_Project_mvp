# Deployment Walkthrough 🚀

Since I cannot access your personal accounts, I have prepared everything you need to deploy **FarmConnect** yourself. Follow these steps to get your app live!

## 1. Prerequisites

-   **GitHub Account**: Ensure your code is pushed to GitHub (we did this in the previous step).
-   **Vercel Account**: For deploying the Frontend (Free).
-   **Render Account**: For deploying the Backend (Free).

---

## 2. Deploy Backend (Render)

We will deploy the backend first so we can get the live API URL.

1.  Log in to [Render.com](https://render.com/).
2.  Click **"New +"** -> **"Web Service"**.
3.  Connect your GitHub repository (`farmconnect`).
4.  **Configure the Service:**
    -   **Name:** `farmconnect-api` (or similar)
    -   **Root Directory:** `backend` (Important!)
    -   **Environment:** `Node`
    -   **Build Command:** `npm install`
    -   **Start Command:** `npm start`
    -   **Plan:** Free
5.  **Environment Variables:**
    -   Scroll down to "Environment Variables" and add:
        -   `MONGODB_URI`: Your MongoDB connection string (from MongoDB Atlas).
        -   `CLERK_API_KEY`: Your Clerk Secret Key.
        -   `CLERK_PUBLISHABLE_KEY`: Your Clerk Publishable Key.
        -   `FRONTEND_URL`: (We will add this later after deploying frontend, or set to `*` for now).
6.  Click **"Create Web Service"**.
7.  **Wait for it to go live.** Copy the **Service URL** (e.g., `https://farmconnect-api.onrender.com`).

---

## 3. Deploy Frontend (Vercel)

Now we deploy the React frontend and connect it to your live backend.

1.  Log in to [Vercel.com](https://vercel.com/).
2.  Click **"Add New..."** -> **"Project"**.
3.  Import your `farmconnect` GitHub repository.
4.  **Configure the Project:**
    -   **Framework Preset:** Vite (should be auto-detected).
    -   **Root Directory:** Click "Edit" and select `frontend`.
5.  **Environment Variables:**
    -   Expand "Environment Variables".
    -   Add `VITE_API_URL` and set the value to your **Backend Service URL** from step 2 (e.g., `https://farmconnect-api.onrender.com/api`).
    -   Add `VITE_CLERK_PUBLISHABLE_KEY` with your Clerk key.
6.  Click **"Deploy"**.
7.  **Success!** Vercel will build and deploy your site. You will get a live URL (e.g., `https://farmconnect.vercel.app`).

---

## 4. Final Connection

1.  Go back to your **Render Dashboard** (Backend).
2.  Update the `FRONTEND_URL` environment variable to your new **Vercel URL** (e.g., `https://farmconnect.vercel.app`).
3.  Go to your **Clerk Dashboard**.
4.  Add your **Vercel URL** to the "Allowed Origins" or "Production" settings in Clerk to allow authentication to work on the live site.

## 🎉 You're Live!

Your FarmConnect application is now running in the cloud.
-   **Frontend:** `https://your-project.vercel.app`
-   **Backend:** `https://your-project.onrender.com`
