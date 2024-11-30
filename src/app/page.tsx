import { ESMap } from './components/es-map'

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4 text-center">Mapa Interativo das Microrregiões do Espírito Santo</h1>
      <p className="text-center mb-8">Explore as microrregiões do Espírito Santo e descubra informações detalhadas sobre cada uma delas.</p>
      <ESMap />
    </div>
  )
}
