# 🚀 Render Deployment Guide - Shobdo Kotha

This guide will walk you through deploying your Shobdo Kotha chatbot to Render step by step.

## 📋 Prerequisites

- ✅ GitHub repository with your code (already done!)
- ✅ DeepSeek R1 API key
- ✅ Render account (free tier available)

## 🌐 Step-by-Step Deployment

### 1. **Create Render Account**
- Go to [render.com](https://render.com)
- Sign up with GitHub (recommended) or email
- Verify your email address

### 2. **Create New Web Service**
1. **Click "New +"** in your Render dashboard
2. **Select "Web Service"**
3. **Connect GitHub** (if not already connected)
4. **Select Repository**: `zubairdoescoding/shobdo-kotha`
5. **Click "Connect"**

### 3. **Configure Your Service**

#### **Basic Settings**
- **Name**: `shobdo-kotha` (or any name you prefer)
- **Environment**: `Node`
- **Region**: Choose closest to your users
- **Branch**: `main`
- **Root Directory**: Leave empty (default)

#### **Build & Deploy Settings**
- **Build Command**: `npm install`
- **Start Command**: `npm start`
- **Plan**: `Free` (or choose paid if needed)

### 4. **Set Environment Variables**

Click **"Advanced"** → **"Add Environment Variable"**

#### **Required Variables**
| Key | Value | Description |
|-----|-------|-------------|
| `DEEPSEEK_API_KEY` | `your_api_key_here` | Your DeepSeek R1 API key |
| `NODE_ENV` | `production` | Environment setting |

#### **Optional Variables**
| Key | Value | Description |
|-----|-------|-------------|
| `PORT` | `10000` | Render uses port 10000 by default |

### 5. **Deploy!**
- Click **"Create Web Service"**
- Render will automatically:
  - Clone your repository
  - Install dependencies
  - Build your application
  - Deploy to their infrastructure

## ⏱️ Deployment Timeline

- **Build Time**: 2-5 minutes
- **Deploy Time**: 1-2 minutes
- **Total**: Usually 3-7 minutes

## 🔍 Monitor Deployment

### **Build Logs**
- Watch the build process in real-time
- Check for any errors or warnings
- Ensure all dependencies install correctly

### **Deploy Status**
- Green checkmark = Success
- Red X = Failed (check logs for errors)

## 🌍 After Deployment

### **Your Live URL**
Your chatbot will be available at:
```
https://your-service-name.onrender.com
```

### **Test Your Deployment**
1. **Visit your URL**
2. **Test language switching** (English/বাংলা)
3. **Test theme toggle** (Dark/Light)
4. **Send a test message**
5. **Verify AI responses**

## 🚨 Troubleshooting Common Issues

### **Build Failures**
- **Dependency Issues**: Check `package.json` and `package-lock.json`
- **Node Version**: Ensure compatibility (Node 18+)
- **Build Commands**: Verify build and start commands

### **Runtime Errors**
- **Port Issues**: Render uses port 10000, not 3000
- **Environment Variables**: Double-check API key
- **API Limits**: Monitor DeepSeek API usage

### **Health Check Failures**
- **Endpoint**: `/health` should return 200 status
- **Response Time**: Keep health checks under 30 seconds

## 🔧 Advanced Configuration

### **Custom Domain** (Optional)
1. Go to your service settings
2. Click **"Custom Domains"**
3. Add your domain
4. Update DNS records

### **Auto-Deploy**
- **Enabled by default** for GitHub integration
- **Manual deploys** available via dashboard
- **Rollback** to previous versions if needed

### **Environment-Specific Deployments**
- **Production**: `main` branch
- **Staging**: Create `staging` branch for testing
- **Preview**: Automatic preview deployments for PRs

## 📊 Monitoring & Analytics

### **Built-in Monitoring**
- **Response times**
- **Error rates**
- **Request volume**
- **Uptime statistics**

### **Logs**
- **Build logs**: Available during deployment
- **Runtime logs**: Access via dashboard
- **Error tracking**: Monitor for issues

## 💰 Cost Management

### **Free Tier Limits**
- **750 hours/month** (usually sufficient for personal projects)
- **512 MB RAM**
- **Shared CPU**
- **Sleep after 15 minutes** of inactivity

### **Upgrading** (Optional)
- **Paid plans** start at $7/month
- **More resources** and **no sleep mode**
- **Custom domains** included

## 🔄 Updating Your Deployment

### **Automatic Updates**
- **Push to GitHub** = Automatic deployment
- **No manual intervention** needed
- **Zero downtime** deployments

### **Manual Updates**
1. **Go to your service dashboard**
2. **Click "Manual Deploy"**
3. **Choose branch/commit**
4. **Deploy**

## 🎯 Next Steps After Deployment

1. **Test thoroughly** - Ensure all features work
2. **Share your URL** - Let others try your chatbot
3. **Monitor performance** - Check Render dashboard
4. **Set up alerts** - Get notified of issues
5. **Custom domain** - Make it your own (optional)

## 📞 Support

### **Render Support**
- **Documentation**: [docs.render.com](https://docs.render.com)
- **Community**: [community.render.com](https://community.render.com)
- **Email**: support@render.com

### **Project Support**
- **GitHub Issues**: Report bugs or request features
- **Documentation**: Check README.md and DEPLOYMENT.md

---

## 🎉 **Congratulations!**

Your Shobdo Kotha chatbot is now live on Render! 

**Live URL**: `https://your-service-name.onrender.com`

**Next**: Test it out and share with the world! 🌍✨
