# 🎵 daaaaaniel - Music Player

<p align="center"> 
  <img src="https://media1.tenor.com/m/UWbcRXV6DmcAAAAC/cardano-lounge.gif" width="300"/> 
</p>

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
  <img src="https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge" alt="MIT License">
</p>

---

## 📝 Project Description

This project implements a modern and interactive web music player with advanced features that rival professional applications like Spotify and Apple Music. Developed with HTML5, CSS3, and JavaScript ES6+, the application offers a premium user experience with synchronized lyrics, audio effects, visual themes, and advanced controls.

### ✨ Main Features

- **🎵 Audio Playback**: Complete support for MP3 files with advanced controls
- **📝 Synchronized Lyrics**: Real-time lyrics display with perfect synchronization
- **🎬 Background Videos**: Dynamic background videos that change with each song
- **🎨 Visual Themes**: 4 different themes (Default, Dark, Neon, Sunset)
- **🎛️ Audio Effects**: Real-time Reverb, Bass Boost, and Treble
- **✨ Visual Effects**: Animated particles and audio waveform
- **⌨️ Keyboard Shortcuts**: Complete control from the keyboard
- **📱 Responsive Design**: Adaptable to all devices

---

## 🚀 Implemented Features

### Core Features
- ✅ Multi-format audio playback
- ✅ Perfect lyrics synchronization with timestamps
- ✅ Dynamic background videos per song
- ✅ Advanced playback controls (play, pause, next, prev)
- ✅ Volume and playback speed control
- ✅ Repeat modes (none, one, all) and shuffle

### Advanced Features
- ✅ **Theme System**: 4 completely customizable visual themes
- ✅ **Professional Audio Effects**: Web Audio API for real-time effects
- ✅ **Particle System**: Animated visual effects
- ✅ **Real-time Waveform**: Audio visualization that moves with the music
- ✅ **Keyboard Shortcuts**: Complete control from the keyboard
- ✅ **Configuration Persistence**: Settings are automatically saved
- ✅ **Epic Settings Modal**: Complete customization interface

---

## 🔧 Technologies Used

### Frontend
- **HTML5**: Modern semantic structure
- **CSS3**: 
  - Grid and Flexbox for complex layouts
  - CSS Variables (Custom Properties)
  - Advanced animations and transitions
  - Responsive design with media queries
  - Visual effects and gradients
- **JavaScript ES6+**:
  - Web Audio API for audio effects
  - Canvas API for visualizations
  - LocalStorage for persistence
  - Advanced event handling
  - Modern DOM manipulation

### Development Tools
- **Git and GitHub**: Version control and deployment
- **Font Awesome**: Modern iconography
- **Google Fonts**: Poppins typography

---

## 🗂️ Project Structure

```
arutia-music/
│
├── 📄 index.html          # Main HTML file
├── 📁 style.css           # Modern and responsive CSS styles
├── 📁 script.js           # Complete JavaScript logic
├── 📁 audio/              # MP3 audio files
├── 📁 videos/             # MP4 background videos
├── 📄 README.md           # Spanish documentation
├── 📄 README_EN.md        # English documentation
└── 📄 LICENSE             # MIT License
```

---

## 🎮 How to Use the Application

### Basic Playback
1. Click "Enter Music World" to start
2. Select a song from the library
3. Use playback controls (play, pause, next, prev)
4. Adjust volume and speed as preferred

### Advanced Functions
- **📝 Lyrics**: Toggle the eye button to show/hide lyrics
- **🎨 Themes**: Open settings to change visual theme
- **🎛️ Effects**: Adjust reverb, bass, and treble in real-time
- **✨ Visuals**: Activate particles and waveform for epic effects

### Keyboard Shortcuts
- **Space**: Play/Pause
- **←/→**: Previous/Next song
- **↑/↓**: Volume up/down
- **L**: Show/Hide lyrics
- **M**: Mute/Unmute

---

## 🎨 Design and UX

### Color Palette
- **Primary**: #e94560 (Vibrant pink)
- **Secondary**: #533483 (Purple)
- **Accent**: #16213e (Dark blue)
- **Background**: Dynamic gradients by theme

### Design Features
- **🎯 Glassmorphism**: Glass effects and transparencies
- **🎨 Smooth Animations**: 0.3s transitions on all elements
- **📱 Responsive Design**: Adaptive layout with CSS Grid and Flexbox
- **🎭 Advanced Hover Effects**: Advanced visual interactions
- **♿ Accessibility**: Adequate contrast and keyboard navigation

---

## 💻 Code Architecture

### Main Structure
```javascript
// App State Management
let currentSongIndex = 0;
let isPlaying = false;
let settings = {
    theme: 'default',
    audioEffects: { reverb: 0, bass: 0, treble: 50 },
    visualEffects: { particles: false, waveform: false, blur: true },
    playback: { autoplay: true, crossfade: false, lyricsAuto: true }
};

// Core Functions
- init()                    // Complete initialization
- loadSong()               // Song loading
- playTrack()              // Playback
- renderLyrics()           // Lyrics rendering
- applySettings()          // Settings application
```

### Code Characteristics
- **🔧 Modular**: Code organized in specific functions
- **🛡️ Robust**: Complete error and state handling
- **⚡ Efficient**: Optimized for performance
- **📖 Readable**: Detailed comments and descriptive names
- **🔄 Maintainable**: Clear and extensible structure

---

## 🎵 Song Library

The player includes a diverse collection of songs with synchronized lyrics:

1. **Bandida** - C.R.O (Bardero)
2. **Perfect** - Ed Sheeran (÷ Divide)
3. **One of the Girls** - The Weeknd (The Highlights)
4. **SleepMode** - Bones (TSoftwareUpdate1.0)
5. **Let Go** - Ark Patrol (Soundcloud EPs)
6. **I Wanna Be Yours** - Arctic Monkeys (AM)
7. **Coffee for Your Head** - Powfu feat. beabadoobee
8. **Ginseng Strip 2002** - Yung Lean

---

## 👨‍💻 Project Author

| Name           | Info                                |
|----------------|-------------------------------------|
| 🧑 Daniel Santiago | Campuslands Student |
| 🎓 Education       | Full Stack Web Development |
| 💻 Focus           | JavaScript, React, Node.js |
| 📍 Location        | Piedecuesta, Santander - Colombia |

---

## 🧪 HIGHLIGHTED CODE

### Modern CSS with Variables
```css
:root {
    --primary-color: #e94560;
    --secondary-color: #533483;
    --accent-color: #16213e;
    --shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    --transition: all 0.3s ease;
}

.music-player-box {
    background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
    border-radius: 20px;
    box-shadow: var(--shadow);
    backdrop-filter: blur(10px);
}
```

### Advanced JavaScript
```javascript
function applyAudioEffects() {
    if (!audioContext || !reverbNode || !bassNode || !trebleNode) {
        return;
    }
    
    try {
        reverbNode.gain.value = settings.audioEffects.reverb / 100;
        bassNode.frequency.value = 100 + (settings.audioEffects.bass * 2);
        trebleNode.frequency.value = 2000 + (settings.audioEffects.treble * 20);
    } catch (error) {
        console.log('Error applying audio effects:', error);
    }
}
```

---

## 💬 Conclusion

This project represents the evolution of frontend web development towards professional-level applications. The implementation of a music player with advanced features such as synchronized lyrics, real-time audio effects, and dynamic visualizations demonstrates the potential of modern web technologies to create premium user experiences.

### Technical Achievements
- ✅ **Solid Architecture**: Well-structured and maintainable code
- ✅ **Premium UX**: Professional and visually attractive interface
- ✅ **Optimized Performance**: Smooth playback and real-time effects
- ✅ **Responsive Design**: Works perfectly on all devices
- ✅ **Advanced Features**: Audio effects, visualizations, and themes

### Key Learnings
- Web Audio API for professional audio effects
- Canvas API for real-time visualizations
- Advanced state management in web applications
- Implementation of complex visual effects
- Multimedia content synchronization
- Data persistence with LocalStorage

The project not only meets the functional requirements of a music player but also establishes a quality standard in terms of design, usability, and user experience, rivaling commercial applications in the market.

---

## 🎯 Final Deliverable

Repository: [GitHub – Arutia Music Player](https://github.com/DanielSantiagoV/arutia-music.git)  
Deployment: [GitHub Pages – Arutia Music](https://danielsantiagov.github.io/arutia-music/)

---

## 📞 Contact and Networks

### 📱 Direct Contact
- 📧 Email: [vinascodaniel9@gmail.com](mailto:vinascodaniel9@gmail.com)
- 📱 Phone: 315 6990555

### 🌐 Social Networks
- 🐙 [GitHub](https://github.com/DanielSantiagoV)
- 🎵 [Spotify - My Programming Playlist](https://open.spotify.com/playlist/6a3d9qWLg1cOyMRWoqwr16)

---

### 🎵 Work Environment
- 🎧 [My Programming Playlist](https://open.spotify.com/playlist/6a3d9qWLg1cOyMRWoqwr16)

---

## 💭 Personal Philosophy

> "Music and code are the same universal language. Both create experiences that connect with human emotions and transform the way we interact with technology." - Daniel Santiago

---

## ✨ Project Highlighted Features

✔️ 🎵 **Professional Playback**: Advanced controls and audio effects  
✔️ 📝 **Synchronized Lyrics**: Perfect visualization with timestamps  
✔️ 🎬 **Dynamic Videos**: Background that changes with each song  
✔️ 🎨 **4 Visual Themes**: Complete interface customization  
✔️ 🎛️ **Audio Effects**: Real-time Reverb, Bass, and Treble  
✔️ ✨ **Visual Effects**: Animated particles and waveform  
✔️ ⌨️ **Keyboard Shortcuts**: Complete control from keyboard  
✔️ 💾 **Persistence**: Settings automatically saved  
✔️ 📱 **100% Responsive**: Optimized for all devices  
✔️ 🚀 **Performance**: Optimized code and smooth playback  

---

## 📄 License

MIT License

Copyright (c) 2024 Daniel Santiago Vinasco

**PRIVATE PROJECT - COPYRIGHT PROTECTED**

This project is private and its use is prohibited by copyright law. All rights reserved.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

**IMPORTANT NOTICE**: This project contains copyrighted music and video content. The use, distribution, or reproduction of this content is strictly prohibited without explicit permission from the copyright holders. This software is provided for educational and demonstration purposes only.

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

---

## 🌍 Documentation in Other Languages

- 🇪🇸 [Spanish Documentation](README.md)

---

<p align="center">
  Developed with ❤️ by Daniel Santiago Vinasco<br>
  🔥 <b><a href="https://github.com/DanielSantiagoV">Visit my GitHub</a></b> 🚀
</p> 