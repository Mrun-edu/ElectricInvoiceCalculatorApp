"use client"

import { useState } from "react"
import { Info, X, Calculator, Zap, AlertTriangle, FileText } from "lucide-react"

const InfoBubble = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedTopic, setSelectedTopic] = useState(null)

  const infoTopics = [
    {
      id: "hesaplama",
      title: "Nasıl Hesaplanır?",
      icon: Calculator,
      content:
        "Elektrik faturası hesaplaması: (Son Endeks - İlk Endeks) × Birim Fiyat + Vergiler şeklinde yapılır. Enerji Fonu %2, KDV %20 oranında uygulanır.",
    },
    {
      id: "tuketim",
      title: "Tüketim Dilimleri",
      icon: Zap,
      content:
        "Elektrik tüketimi kWh (kilowatt-saat) cinsinden ölçülür. Aylık ortalama ev tüketimi 150-300 kWh arasındadır. Yüksek tüketimde ek ücretler uygulanabilir.",
    },
    {
      id: "reaktif",
      title: "Reaktif Ceza",
      icon: AlertTriangle,
      content:
        "300 kWh üzeri tüketimde %15 reaktif ceza uygulanır. Bu ceza, elektrik şebekesinin verimli kullanımını teşvik etmek için konulmuştur.",
    },
    {
      id: "vergiler",
      title: "Vergi Kalemleri",
      icon: FileText,
      content:
        "Elektrik faturasında Enerji Fonu (%2) ve KDV (%20) olmak üzere iki ana vergi kalemi bulunur. Bu vergiler tüketim tutarı üzerinden hesaplanır.",
    },
  ]

  return (
    <div className="fixed left-4 top-1/2 transform -translate-y-1/2 z-50">
      {/* Info Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-sky-500 hover:bg-sky-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        aria-label="Bilgilendirme"
      >
        <Info className="h-6 w-6" />
      </button>

      {/* Info Panel */}
      {isOpen && (
        <div className="absolute left-16 top-0 bg-white rounded-lg shadow-xl border border-sky-200 w-80 max-h-96 overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-sky-500 to-blue-600 text-white p-4 flex items-center justify-between">
            <h3 className="font-semibold">Bilgilendirme</h3>
            <button
              onClick={() => {
                setIsOpen(false)
                setSelectedTopic(null)
              }}
              className="hover:bg-white/20 p-1 rounded"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Content */}
          <div className="p-4">
            {!selectedTopic ? (
              // Topic List
              <div className="space-y-2">
                <p className="text-sm text-slate-600 mb-3">Bilgi almak istediğiniz konuyu seçin:</p>
                {infoTopics.map((topic) => {
                  const IconComponent = topic.icon
                  return (
                    <button
                      key={topic.id}
                      onClick={() => setSelectedTopic(topic)}
                      className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-sky-50 transition-colors text-left"
                    >
                      <IconComponent className="h-5 w-5 text-sky-600" />
                      <span className="text-slate-700 font-medium">{topic.title}</span>
                    </button>
                  )
                })}
              </div>
            ) : (
              // Selected Topic Content
              <div>
                <button
                  onClick={() => setSelectedTopic(null)}
                  className="text-sky-600 hover:text-sky-700 text-sm mb-3 flex items-center gap-1"
                >
                  ← Geri dön
                </button>
                <div className="flex items-center gap-2 mb-3">
                  <selectedTopic.icon className="h-5 w-5 text-sky-600" />
                  <h4 className="font-semibold text-slate-800">{selectedTopic.title}</h4>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">{selectedTopic.content}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default InfoBubble
