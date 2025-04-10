import { useEffect, useState } from 'react'

const LightModeToggleButton = () => {
  const [isLight, setIsLight] = useState<boolean>(false)

  useEffect(() => {
    // Kontrollera om vi är på klientsidan innan vi använder localStorage
    if (typeof window !== 'undefined') {
      // Läs från localStorage om temat redan är satt
      const savedTheme = localStorage.getItem('theme')
      if (savedTheme) {
        setIsLight(savedTheme === 'light')
      }
    }
  }, [])

  useEffect(() => {
    // Uppdatera body-klassen och localStorage när temat ändras
    if (typeof window !== 'undefined') {
      document.body.classList.toggle('light', isLight)
      localStorage.setItem('theme', isLight ? 'light' : 'dark')
    }
  }, [isLight])

  const toggleTheme = () => {
    setIsLight((prev) => !prev)
  }

  return (
    <button onClick={toggleTheme}>
      {isLight ? '🌙' : ' ☀️'}
    </button>
  )
}

export default LightModeToggleButton