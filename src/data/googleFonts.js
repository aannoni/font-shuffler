const apiKey = import.meta.env.VITE_GOOGLE_FONTS_API_KEY

export const fetchGoogleFonts = async () => {
  try {
    const response = await fetch(`https://www.googleapis.com/webfonts/v1/webfonts?key=${apiKey}`)
    const data = await response.json()
    return data.items.map(font => font.family)
  } catch (error) {
    console.log("Error fetching fonts:", error)
  }
}
