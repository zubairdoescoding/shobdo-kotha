# 🌟 শব্দ কথা — Shobdo Kotha

> A bilingual AI chatbot that speaks both English and বাংলা (Bengali)

[![Deploy to Render](https://img.shields.io/badge/Deploy%20to-Render-00f2c3?style=for-the-badge&logo=render)](https://render.com/deploy)
[![Node.js](https://img.shields.io/badge/Node.js-18+-green?style=for-the-badge&logo=node.js)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-4.18+-blue?style=for-the-badge&logo=express)](https://expressjs.com/)
[![DeepSeek](https://img.shields.io/badge/DeepSeek-R1-orange?style=for-the-badge)](https://deepseek.com/)

## 🚀 Live Demo

**Coming soon!** Deploy to Render for a live demo.

## ✨ Features

- 🤖 **AI-Powered Chat**: Powered by DeepSeek R1 model
- 🌍 **Bilingual Support**: English and বাংলা (Bengali)
- 🎨 **Modern UI**: Clean, responsive design with dark/light themes
- 📱 **Mobile Friendly**: Works perfectly on all devices
- 🔄 **Real-time Chat**: Instant AI responses
- 🎯 **Context Aware**: Remembers conversation history
- 🕊️ **Special Responses**: Handles solidarity messages with care

## 🛠️ Tech Stack

- **Backend**: Node.js + Express.js
- **Frontend**: Vanilla JavaScript + HTML + CSS
- **AI Model**: DeepSeek R1 API
- **Deployment**: Render (free tier)
- **Languages**: English, বাংলা (Bengali)

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- DeepSeek API key

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/shobdo-kotha.git
   cd shobdo-kotha
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   # Create .env file
   echo "DEEPSEEK_API_KEY=your_api_key_here" > .env
   ```

4. **Start the server**
   ```bash
   npm start
   ```

5. **Open your browser**
   Navigate to `http://localhost:3000`

### Environment Variables

Create a `.env` file in the root directory:

```env
DEEPSEEK_API_KEY=your_deepseek_api_key_here
PORT=3000
```

## 🌐 Deployment

### Deploy to Render (Recommended - Free)

1. **Fork this repository** to your GitHub account
2. **Go to [render.com](https://render.com)** and sign up
3. **Click "New +" → "Web Service"**
4. **Connect your GitHub** and select the forked repo
5. **Configure:**
   - **Name**: `shobdo-kotha`
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Plan**: Free
6. **Add Environment Variables:**
   - `DEEPSEEK_API_KEY`: Your DeepSeek API key
7. **Click "Create Web Service"**

Your chatbot will be live in minutes! 🎉

## 📁 Project Structure

```
shobdo-kotha/
├── server.js              # Express server
├── index.html             # Frontend interface
├── package.json           # Dependencies
├── .env                   # Environment variables
├── .gitignore            # Git ignore rules
└── README.md             # This file
```

## 🔧 API Endpoints

### POST `/api/chat`
Send a message to the AI chatbot.

**Request Body:**
```json
{
  "message": "Hello, how are you?",
  "lang": "en",
  "sessionId": "optional_session_id"
}
```

**Response:**
```json
{
  "reply": "Hello! I'm doing great, thank you for asking. How can I help you today?"
}
```

## 🌍 Language Support

- **English**: Default language for general chat
- **বাংলা (Bengali)**: Full Bengali language support
- **Auto-switching**: Responds in the language you choose

## 🎨 UI Features

- **Theme Toggle**: Switch between light and dark modes
- **Language Toggle**: Switch between English and বাংলা
- **Responsive Design**: Works on desktop, tablet, and mobile
- **Typing Animation**: Realistic typing effect for AI responses
- **Modern Interface**: Clean, intuitive design

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

### How to Contribute

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **DeepSeek**: For providing the AI model
- **Express.js**: For the web framework
- **Render**: For free hosting
- **Open Source Community**: For inspiration and tools

## 📞 Support

If you have any questions or need help:

- 🐛 **Report bugs**: [Create an issue](https://github.com/yourusername/shobdo-kotha/issues)
- 💡 **Request features**: [Create an issue](https://github.com/yourusername/shobdo-kotha/issues)
- 📧 **Contact**: [Your email or social media]

---

**Made with ❤️ for the Bengali-speaking community and AI enthusiasts worldwide!**

[![GitHub stars](https://img.shields.io/github/stars/yourusername/shobdo-kotha?style=social)](https://github.com/yourusername/shobdo-kotha)
[![GitHub forks](https://img.shields.io/github/forks/yourusername/shobdo-kotha?style=social)](https://github.com/yourusername/shobdo-kotha)
[![GitHub issues](https://img.shields.io/github/issues/yourusername/shobdo-kotha)](https://github.com/yourusername/shobdo-kotha/issues)
