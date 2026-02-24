# Abby Schneider Portfolio

Personal portfolio site with Crux decision-making tool.

## Local Development

```bash
npm install
npm run dev
```

## Deploy to Vercel

### Option 1: GitHub + Vercel (Recommended)

1. **Push to GitHub**
   - Create a new repo on GitHub
   - Push this folder to that repo:
     ```bash
     git init
     git add .
     git commit -m "Initial commit"
     git branch -M main
     git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
     git push -u origin main
     ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com) and sign in with GitHub
   - Click "Add New Project"
   - Import your GitHub repo
   - Vercel auto-detects Vite — just click Deploy
   - Done! You'll get a live URL like `your-project.vercel.app`

### Option 2: Vercel CLI

```bash
npm install -g vercel
vercel
```

Follow the prompts. Done.

## Customization

- **Update your info**: Edit `src/App.jsx` — the hero section, about text, and links
- **Add projects**: Add new project cards in the projects section
- **Change email**: Update the email in footer and about section
- **Add resume**: Drop a `resume.pdf` in the `public/` folder

## Note on Crux API

The Crux tool calls the Anthropic API. For it to work on your deployed site, you'll need to either:
1. Use it within Claude.ai artifacts (where API access is handled)
2. Set up your own API proxy with your Anthropic API key

For now, Crux works as a demo/showcase piece.
