# How to Deploy to Render (render.com)

This project is fully configured and ready for 1-click or manual deployment to **[Render](https://render.com/)**.

---

## ⚡ Method 1: Static Site (Recommended — 100% Free & Fast)

Because this is a high-performance modern React (Vite + Tailwind CSS) single-page application, deploying as a **Static Site** on Render provides:
- **Instant load times** via Render's Global CDN
- **Zero cold-starts** (unlike free web services which sleep after inactivity)
- **Unlimited free bandwidth & requests** within standard free tier

### Step-by-Step Instructions:

1. **Push your code to GitHub or GitLab**:
   ```bash
   git add .
   git commit -m "Configure Render deployment"
   git push origin main
   ```

2. **Log into Render**:
   - Go to [dashboard.render.com](https://dashboard.render.com/)
   - Sign up or log in (with your GitHub/GitLab account).

3. **Create a New Static Site**:
   - Click the **"New +"** button in the top right.
   - Select **"Static Site"**.
   - Connect your GitHub repository.

4. **Configure Settings**:
   | Setting | Value |
   | :--- | :--- |
   | **Name** | `smart-waste-management` (or any name you like) |
   | **Branch** | `main` |
   | **Build Command** | `npm run build` *(or `bun run build`)* |
   | **Publish Directory** | `dist` |

   > 💡 **Notice about "Publish directory dist does not exist!"**:
   > If Render showed this message, Render only executed the install step (`bun install`) because the Build Command field was blank or default. We have added `"postinstall": "vite build"` in `package.json`, which ensures `dist` is created automatically, and set the Build Command to `npm run build`.

5. **Set the Single-Page Application (SPA) Rewrite Rule**:
   - Scroll down to **"Redirects/Rewrites"** in the settings.
   - Click **Add Rule**:
     - **Type**: `Rewrite`
     - **Source**: `/*`
     - **Destination**: `/index.html`
   *(This ensures that refreshing or deep linking on any sub-page loads correctly).*

6. **Click "Create Static Site"**:
   - Render will run `npm install && npm run build` and deploy your app in ~60 seconds.
   - You will get a live URL: `https://smart-waste-management.onrender.com`.

---

## 🚀 Method 2: Node.js Web Service (Express Server)

If you prefer to run it as a Node.js web server with backend capabilities, the included `server.js` and `npm start` script are ready.

### Step-by-Step Instructions:

1. In Render Dashboard, click **"New +"** -> **"Web Service"**.
2. Connect your repository.
3. Fill in the fields:
   | Setting | Value |
   | :--- | :--- |
   | **Name** | `smart-waste-management-service` |
   | **Runtime** | `Node` |
   | **Build Command** | `npm install && npm run build` |
   | **Start Command** | `npm start` |
   | **Plan** | Free |
4. *(Optional)* Under **Advanced**:
   - **Health Check Path**: `/healthz`
5. Click **"Create Web Service"**.

---

## 🛠️ Method 3: Render Blueprint (Infrastructure-as-Code)

This repository includes a `render.yaml` file ready to go!

1. Go to [dashboard.render.com](https://dashboard.render.com/).
2. Click **"Blueprints"** in the left sidebar.
3. Click **"New Blueprint Instance"**.
4. Select your repository. Render will automatically read `render.yaml` and configure everything automatically!
5. Click **"Apply"** to deploy.

---

## 📋 Summary of Key Settings

| Configuration Key | Value |
| :--- | :--- |
| **Node Version** | Node 18 or Node 20 (Render defaults to 20) |
| **Build Command** | `npm install && npm run build` |
| **Publish Directory (Static)** | `dist` |
| **Start Command (Web Service)** | `npm start` (runs `node server.js`) |
| **SPA Fallback Route** | `/*` -> `/index.html` |
| **Health Check Endpoint** | `/healthz` |

---

## ❓ Frequently Asked Questions

### 1. What about the PDF download feature on Render?
The PDF generation runs entirely client-side using `html2pdf.js` and `jspdf` and pre-compiled documents in `public/`. It works seamlessly on Render with zero server dependencies!

### 2. Can I use a Custom Domain?
Yes! In Render's dashboard for your service or static site, go to **Settings** -> **Custom Domains**, add your domain (e.g., `waste.myuniversity.edu`), and add the CNAME record Render provides to your DNS provider. SSL certificates are issued automatically and free.
