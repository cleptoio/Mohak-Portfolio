"use client"

import { motion } from "framer-motion"
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps"
import { worldMapLocations } from "@/lib/data"
import { useState } from "react"

const geoUrl = "https://unpkg.com/world-atlas@2.0.2/countries-110m.json"

export default function WorldMap() {
  const [tooltipContent, setTooltipContent] = useState("")
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 })

  return (
    <section className="py-20 px-4 bg-muted/30" id="map">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Global Presence</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Working across continents to drive digital transformation
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative glass rounded-lg p-4 border border-border/50"
        >
          <ComposableMap
            projectionConfig={{
              scale: 147,
            }}
            style={{
              width: "100%",
              height: "auto",
            }}
          >
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill="hsl(var(--muted))"
                    stroke="hsl(var(--border))"
                    strokeWidth={0.5}
                    style={{
                      default: { outline: "none" },
                      hover: { fill: "hsl(var(--accent))", outline: "none" },
                      pressed: { outline: "none" },
                    }}
                  />
                ))
              }
            </Geographies>

            {worldMapLocations.map((location) => (
              <Marker key={location.name} coordinates={location.coordinates}>
                <g
                  onMouseEnter={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect()
                    setTooltipContent(`${location.name}, ${location.country}: ${location.description}`)
                    setTooltipPosition({ x: rect.left, y: rect.top })
                  }}
                  onMouseLeave={() => setTooltipContent("")}
                  className="cursor-pointer"
                >
                  <circle
                    r={8}
                    fill="transparent"
                    stroke="hsl(var(--primary))"
                    strokeWidth={2}
                    className="animate-pulse"
                  />
                  <circle r={4} fill="hsl(var(--primary))" />
                </g>
              </Marker>
            ))}
          </ComposableMap>

          {tooltipContent && (
            <div
              className="fixed z-50 px-3 py-2 text-sm bg-popover text-popover-foreground border border-border rounded-md shadow-lg max-w-xs"
              style={{
                left: tooltipPosition.x,
                top: tooltipPosition.y - 60,
              }}
            >
              {tooltipContent}
            </div>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {worldMapLocations.map((location, index) => (
            <motion.div
              key={location.name}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass rounded-lg p-4 border border-border/50"
            >
              <h3 className="font-semibold text-lg mb-1">
                {location.name}, {location.country}
              </h3>
              <p className="text-sm text-muted-foreground">{location.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
