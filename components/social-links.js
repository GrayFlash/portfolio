import { useTheme } from 'next-themes'
import React, { useState, useEffect } from 'react'
export default function Index() {
    const [mounted, setMounted] = useState(false)
    const { theme } = useTheme()

    useEffect(() => setMounted(true), [])

    if (!mounted) return null

    var linkList = [
        'https://www.linkedin.com/in/gaurav-kumar-404280194/',
        'https://github.com/GrayFlash',
        'https://twitter.com/kumar_gaurav_10',
        'https://www.instagram.com/g.r.a.y.stack/',
    ]
    var iconList = [
        'linkedin',
        'github',
        'twitter',
        'instagram',
    ]

    function iconLinkGenerator(name, theme, link) {
        return (
        <a href={link} target="_blank" rel="noreferrer noopener">
            <img
            src={`https://s2.svgbox.net/social.svg?ic=${name}&color=${
                '000'
            }`}
            className="social-icons"
            />
        </a>
        )
    }
    return (
        <div className="socials">
        {linkList.map((link, index) =>
            iconLinkGenerator(iconList[index], theme, link),
        )}
        </div>
    )
}