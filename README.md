# শব্দ কথা — Shobdo Kotha

A bilingual (Bengali/English) AI chatbot powered by DeepSeek R1 API.

## Features

- 🌐 **Bilingual Support**: Chat in both Bengali (বাংলা) and English
- 🎨 **Modern UI**: Clean, responsive design with dark/light theme toggle
- ✨ **Smooth Animations**: Typing effects and message animations
- 📱 **Mobile Responsive**: Works perfectly on all devices
- 🤖 **AI Powered**: Powered by DeepSeek R1 for intelligent responses
- 🕊️ **Special Features**: Special responses for solidarity messages

## Quick Start

### Local Development

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd shobdo-kotha
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   # Create a .env file (optional)
   echo "DEEPSEEK_API_KEY=your_api_key_here" > .env
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:3000`

### Production Deployment

#### Option 1: Traditional Hosting
```bash
npm start
```

#### Option 2: Netlify (Recommended)
1. Push your code to GitHub
2. Connect your repository to Netlify
3. Set environment variable `DEEPSEEK_API_KEY` in Netlify dashboard
4. Deploy!

## API Configuration

### DeepSeek R1 API
The chatbot uses DeepSeek R1 API for AI responses. You'll need to:

1. Get an API key from [DeepSeek](https://platform.deepseek.com/)
2. Set it as an environment variable:
   ```bash
   export DEEPSEEK_API_KEY=your_api_key_here
   ```
   Or create a `.env` file:
   ```
   DEEPSEEK_API_KEY=your_api_key_here
   ```

### API Endpoints

- `POST /api/chat` - Main chat endpoint
  - Body: `{ "message": "your message", "lang": "en|bn" }`
  - Response: `{ "reply": "AI response" }`

## Project Structure

```
shobdo-kotha/
├── index.html          # Frontend interface
├── server.js           # Express.js server
├── package.json        # Dependencies
├── netlify/            # Netlify deployment
│   └── functions/
│       └── chat.js     # Netlify function
└── README.md           # This file
```

## Customization

### Language Support
Add new languages by modifying the `setLang()` function in `index.html` and updating the system prompts in the backend.

### Styling
The design uses CSS custom properties for easy theming. Modify the `:root` variables in the CSS to change colors.

### AI Behavior
Adjust the system prompts in `server.js` and `netlify/functions/chat.js` to change how the AI responds.

## Development

### Scripts
- `npm start` - Start production server
- `npm run dev` - Start development server with auto-reload

### Adding Features
1. Frontend changes go in `index.html`
2. Backend logic goes in `server.js`
3. Netlify function updates go in `netlify/functions/chat.js`

## Troubleshooting

### Common Issues

1. **API Key Error**: Ensure `DEEPSEEK_API_KEY` is set correctly
2. **CORS Issues**: The server includes CORS middleware for development
3. **Port Conflicts**: Change `PORT` in `server.js` if needed

### Debug Mode
Enable detailed logging by setting `NODE_ENV=development`:
```bash
NODE_ENV=development npm run dev
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

MIT License - see [LICENSE](LICENSE) file for details.

## Support

For issues and questions:
- Check the troubleshooting section
- Review the code comments
- Open an issue on GitHub

---

**শব্দ কথা** - Where words come alive! 🚀
