"use client"

import { useState, useEffect } from "react"
import { Zap } from "lucide-react"
import { hesaplaElektrikFaturasi } from "../utils/calculations"
import InputForm from "../components/InputForm"
import InvoiceDetails from "../components/InvoiceDetails"

export default function ElektrikFaturasi() {
  const [ilkEndeks, setIlkEndeks] = useState("")
  const [sonEndeks, setSonEndeks] = useState("")
  const [birimFiyat, setBirimFiyat] = useState("2.85")
  const [fatura, setFatura] = useState(null)

  useEffect(() => {
    if (ilkEndeks && sonEndeks && birimFiyat) {
      try {
        const faturaDetay = hesaplaElektrikFaturasi(ilkEndeks, sonEndeks, birimFiyat)
        setFatura(faturaDetay)
      } catch (error) {
        // Hata durumunda faturayı temizle
        setFatura(null)
      }
    } else {
      setFatura(null)
    }
  }, [ilkEndeks, sonEndeks, birimFiyat])

  const hesaplaFatura = () => {
    try {
      const faturaDetay = hesaplaElektrikFaturasi(ilkEndeks, sonEndeks, birimFiyat)
      setFatura(faturaDetay)
    } catch (error) {
      alert(error.message)
    }
  }

  const temizle = () => {
    setIlkEndeks("")
    setSonEndeks("")
    setBirimFiyat("2.85")
    setFatura(null)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-sky-50 to-blue-100">
      <div className="max-w-6xl mx-auto p-4 space-y-8">
        {/* Header */}
        <div className="text-center py-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="p-3 bg-gradient-to-r from-sky-500 to-blue-600 rounded-full shadow-lg">
              <Zap className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-slate-700 to-slate-900 bg-clip-text text-transparent">
              Elektrik Faturası Hesaplama
            </h1>
          </div>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Elektrik tüketiminizi girin, vergiler dahil detaylı faturanızı hesaplayın
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <InputForm
            ilkEndeks={ilkEndeks}
            setIlkEndeks={setIlkEndeks}
            sonEndeks={sonEndeks}
            setSonEndeks={setSonEndeks}
            birimFiyat={birimFiyat}
            setBirimFiyat={setBirimFiyat}
            onHesapla={hesaplaFatura}
            onTemizle={temizle}
          />

          <InvoiceDetails fatura={fatura} />
        </div>
      </div>
    </div>
  )
}
