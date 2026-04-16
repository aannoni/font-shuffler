// src/data/fontCombinations.js
export const fontCombinations = [
  {
    id: 1,
    h1Text: "CONTEMPORARY DANCE EVENING",
    h2Text: "A study of motion and light",
    h1Styles: {
      fontFamily: "Instrument Serif", // No quotes or fallbacks here
      fontSize: '80px',
      lineHeight: '90%',
      fontWeight: '400',
      color: '#0B44FF'
    },
    h2Styles: {
       fontFamily: "Rethink Sans",
       fontSize: '20px'
    }
  },
  {
    id: 2,
    h1Text: "RADICAL ARCHITECTURE", // Different text for Combo 2
    h2Text: "Building the future of urban spaces",
    h1Styles: {
      fontFamily: "'Montserrat', sans-serif",
      fontSize: '75px',
      color: '#FF3B30'
    },
    h2Styles: {
       fontFamily: "'Lora', serif",
       fontSize: '18px'
    }
  }
]