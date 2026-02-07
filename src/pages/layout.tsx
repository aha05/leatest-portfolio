import React, { useEffect } from "react"
import "./globals.css"

type RootLayoutProps = {
  children: React.ReactNode
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  useEffect(() => {
    // Metadata replacement
    document.title = "Developer Portfolio | Full Stack Developer"

    const metaDescription =
      document.querySelector<HTMLMetaElement>('meta[name="description"]')

    if (metaDescription) {
      metaDescription.content =
        "Modern developer portfolio showcasing projects, skills, and experience"
    } else {
      const meta = document.createElement("meta")
      meta.name = "description"
      meta.content =
        "Modern developer portfolio showcasing projects, skills, and experience"
      document.head.appendChild(meta)
    }

    // Viewport (safe fallback)
    const viewport =
      document.querySelector<HTMLMetaElement>('meta[name="viewport"]')

    if (!viewport) {
      const meta = document.createElement("meta")
      meta.name = "viewport"
      meta.content =
        "width=device-width, initial-scale=1, maximum-scale=1"
      document.head.appendChild(meta)
    }
  }, [])

  return (
    <div className="min-h-screen font-sans antialiased dark">
      {children}
    </div>
  )
}

export default RootLayout
