# 🚀 Deployment Guide - Shobdo Kotha

This guide will help you deploy your Shobdo Kotha chatbot to various platforms.

## 🌐 Local Development

### Prerequisites
- Node.js 18+ installed
- DeepSeek API key

### Setup
1. **Clone and install**
   ```bash
   git clone <your-repo-url>
   cd shobdo-kotha
   npm install
   ```

2. **Set environment variables**
   ```bash
   # Create .env file
   echo "DEEPSEEK_API_KEY=your_api_key_here" > .env
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Access your chatbot**
   Open `http://localhost:3000` in your browser

## ☁️ Netlify Deployment (Recommended)

### Option 1: Deploy via Netlify UI

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Connect to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Choose your GitHub repository
   - Select the main branch

3. **Configure build settings**
   - Build command: Leave empty (not needed)
   - Publish directory: `.` (root directory)

4. **Set environment variables**
   - Go to Site settings → Environment variables
   - Add `DEEPSEEK_API_KEY` with your API key

5. **Deploy!**
   Click "Deploy site"

### Option 2: Deploy via Netlify CLI

1. **Install Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

2. **Login and deploy**
   ```bash
   netlify login
   netlify deploy
   netlify deploy --prod
   ```

## 🐳 Docker Deployment

### Create Dockerfile
```dockerfile
FROM node:18-alpine

WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

COPY . .
EXPOSE 3000

CMD ["npm", "start"]
```

### Build and run
```bash
docker build -t shobdo-kotha .
docker run -p 3000:3000 -e DEEPSEEK_API_KEY=your_key shobdo-kotha
```

## 🚢 Render Deployment

1. **Connect your GitHub repo**
2. **Create new Web Service**
3. **Configure:**
   - Name: `shobdo-kotha`
   - Environment: `Node`
   - Build Command: `npm install`
   - Start Command: `npm start`
4. **Add environment variable:**
   - `DEEPSEEK_API_KEY`: Your API key
5. **Deploy!**

## 🔧 Environment Variables

### Required
- `DEEPSEEK_API_KEY`: Your DeepSeek R1 API key

### Optional
- `PORT`: Server port (default: 3000)
- `NODE_ENV`: Environment (development/production)

## 📱 Testing Your Deployment

### Test the API
```bash
curl -X POST https://your-domain.com/api/chat \
  -H "Content-Type: application/json" \
  -d '{"message":"Hello","lang":"en"}'
```

### Test the frontend
- Open your deployed URL
- Try switching languages
- Test the dark/light theme
- Send a message

## 🚨 Troubleshooting

### Common Issues

1. **API Key Error**
   - Verify `DEEPSEEK_API_KEY` is set correctly
   - Check environment variable names

2. **CORS Issues**
   - The server includes CORS middleware
   - Check if your domain is allowed

3. **Port Conflicts**
   - Change `PORT` in environment variables
   - Ensure port is available

4. **Netlify Function Issues**
   - Check function logs in Netlify dashboard
   - Verify `netlify.toml` configuration

### Debug Mode
```bash
NODE_ENV=development npm run dev
```

## 🔒 Security Considerations

1. **API Key Protection**
   - Never commit API keys to Git
   - Use environment variables
   - Rotate keys regularly

2. **Rate Limiting**
   - Consider adding rate limiting for production
   - Monitor API usage

3. **HTTPS**
   - Enable HTTPS on all deployments
   - Use secure headers

## 📊 Monitoring

### Health Check Endpoint
```bash
curl https://your-domain.com/api/health
```

### Logs
- **Local**: Check terminal output
- **Netlify**: Function logs in dashboard
- **Render**: Logs in service dashboard

## 🎯 Next Steps

After deployment:
1. Test all functionality
2. Set up custom domain (optional)
3. Configure analytics (optional)
4. Set up monitoring (optional)

---

**Your Shobdo Kotha chatbot is now live! 🎉**

For support, check the main README or open an issue on GitHub.
