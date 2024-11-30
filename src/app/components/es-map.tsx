'use client'

import { useState } from 'react'
import { ComposableMap, Geographies, Geography } from 'react-simple-maps'
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/app/components/ui/accordion"
import { Building2, Landmark, ShoppingCart, Users, Mountain, Droplets, TrendingUp, History, MapPin } from 'lucide-react'
import { geoUrl, getCityRegion, getRegionColor, getRegionInfo, filterGeographies } from '../data/es-map-data'
import { Feature, Geometry } from 'geojson'

export function ESMap() {
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null)

  const handleRegionClick = (name: string) => {
    const region = getCityRegion(name)
    if (region) {
      setSelectedRegion(region)
    }
  }

  const selectedRegionInfo = selectedRegion ? getRegionInfo(selectedRegion) : null

  return (
    <div className="flex flex-col md:flex-row gap-8">
      <div className="w-full md:w-2/3 bg-blue-50 rounded-lg p-4">
        <ComposableMap
          projection="geoMercator"
          projectionConfig={{
            scale: 8000,
            center: [-40.3, -19.6]
          }}
        >
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              filterGeographies(geographies).map((geo: Feature<Geometry, any>) => {
                const regionName = getCityRegion(geo.properties.name)
                const isSelected = selectedRegion === regionName
                return (
                  <Geography
                    key={geo.properties.name}
                    geography={geo}
                    fill={getRegionColor(regionName || '')}
                    stroke="#FFFFFF"
                    strokeWidth={0.5}
                    style={{
                      default: { outline: 'none' },
                      hover: { fill: '#93c5fd', outline: 'none' },
                      pressed: { outline: 'none' },
                    }}
                    onClick={() => handleRegionClick(geo.properties.name)}
                    opacity={isSelected ? 1 : 0.7}
                  />
                )
              })
            }
          </Geographies>
        </ComposableMap>
      </div>
      <div className="w-full md:w-1/3">
        {selectedRegionInfo ? (
          <Card>
            <CardHeader>
              <CardTitle>{selectedRegionInfo.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="cities">
                  <AccordionTrigger>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      Cidades Principais
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-5">
                      {selectedRegionInfo.cities.map((city, index) => (
                        <li key={index}>{city}</li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="economy">
                  <AccordionTrigger>
                    <div className="flex items-center">
                      <Building2 className="w-4 h-4 mr-2" />
                      Base da Economia
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    {selectedRegionInfo.info.economy}
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="tourism">
                  <AccordionTrigger>
                    <div className="flex items-center">
                      <Landmark className="w-4 h-4 mr-2" />
                      Principais Pontos Turísticos
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    {selectedRegionInfo.info.tourism}
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="activities">
                  <AccordionTrigger>
                    <div className="flex items-center">
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Atividades Econômicas
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    {selectedRegionInfo.info.activities}
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="urbanization">
                  <AccordionTrigger>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-2" />
                      Aspectos da Urbanização
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    {selectedRegionInfo.info.urbanization}
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="importance">
                  <AccordionTrigger>
                    <div className="flex items-center">
                      <TrendingUp className="w-4 h-4 mr-2" />
                      Importância para o ES
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    {selectedRegionInfo.info.importance}
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="history">
                  <AccordionTrigger>
                    <div className="flex items-center">
                      <History className="w-4 h-4 mr-2" />
                      História
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    {selectedRegionInfo.info.history}
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="demographics">
                  <AccordionTrigger>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-2" />
                      Aspectos Demográficos
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    {selectedRegionInfo.info.demographics}
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="relief">
                  <AccordionTrigger>
                    <div className="flex items-center">
                      <Mountain className="w-4 h-4 mr-2" />
                      Relevo
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    {selectedRegionInfo.info.relief}
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="hydrography">
                  <AccordionTrigger>
                    <div className="flex items-center">
                      <Droplets className="w-4 h-4 mr-2" />
                      Hidrografia
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    {selectedRegionInfo.info.hydrography}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        ) : (
          <p className="text-center text-gray-500">Selecione uma microrregião no mapa para ver mais informações.</p>
        )}
      </div>
    </div>
  )
}

