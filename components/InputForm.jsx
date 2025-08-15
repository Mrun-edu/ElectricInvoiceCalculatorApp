"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Calculator, Zap, AlertTriangle } from "lucide-react"

export default function InputForm({
  ilkEndeks,
  setIlkEndeks,
  sonEndeks,
  setSonEndeks,
  birimFiyat,
  setBirimFiyat,
  onHesapla,
  onTemizle,
}) {
  const tuketim = sonEndeks && ilkEndeks ? Number.parseFloat(sonEndeks) - Number.parseFloat(ilkEndeks) : 0
  const hataliEndeks = sonEndeks && ilkEndeks && Number.parseFloat(sonEndeks) < Number.parseFloat(ilkEndeks)

  return (
    <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
      <CardHeader className="bg-gradient-to-r from-sky-50 to-blue-50 rounded-t-lg">
        <CardTitle className="flex items-center gap-2 text-slate-700">
          <Calculator className="h-5 w-5 text-sky-600" />
          Fatura Bilgileri
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 p-6">
        <div className="space-y-2">
          <Label htmlFor="ilkEndeks" className="text-slate-600 font-medium">
            İlk Endeks (kWh)
          </Label>
          <Input
            id="ilkEndeks"
            type="number"
            placeholder="Örn: 1250"
            value={ilkEndeks}
            onChange={(e) => setIlkEndeks(e.target.value)}
            className="border-sky-200 focus:border-sky-400 focus:ring-sky-200"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="sonEndeks" className="text-slate-600 font-medium">
            Son Endeks (kWh)
          </Label>
          <Input
            id="sonEndeks"
            type="number"
            placeholder="Örn: 1450"
            value={sonEndeks}
            onChange={(e) => setSonEndeks(e.target.value)}
            className={`border-sky-200 focus:border-sky-400 focus:ring-sky-200 ${
              hataliEndeks ? "border-red-300 focus:border-red-400 focus:ring-red-200" : ""
            }`}
          />
        </div>

        {hataliEndeks && (
          <div className="bg-red-50 border border-red-200 p-3 rounded-lg">
            <div className="flex items-center gap-2 text-red-700">
              <AlertTriangle className="h-4 w-4" />
              <span className="font-medium">Son endeks ilk endeksten büyük olmalıdır!</span>
            </div>
          </div>
        )}

        {tuketim > 0 && !hataliEndeks && (
          <div className="bg-gradient-to-r from-sky-50 to-blue-50 p-3 rounded-lg border border-sky-100">
            <div className="flex items-center gap-2 text-sky-700">
              <Zap className="h-4 w-4" />
              <span className="font-medium">Tüketim: {tuketim} kWh</span>
            </div>
          </div>
        )}

        <div className="space-y-2">
          <Label htmlFor="birimFiyat" className="text-slate-600 font-medium">
            Birim Fiyat (₺/kWh)
          </Label>
          <Input
            id="birimFiyat"
            type="number"
            step="0.01"
            placeholder="Örn: 2.85"
            value={birimFiyat}
            onChange={(e) => setBirimFiyat(e.target.value)}
            className="border-sky-200 focus:border-sky-400 focus:ring-sky-200"
          />
        </div>

        <div className="flex gap-3 pt-4">
          <Button
            onClick={onHesapla}
            className="flex-1 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white shadow-md"
            disabled={hataliEndeks}
          >
            Hesapla
          </Button>
          <Button
            onClick={onTemizle}
            variant="outline"
            className="border-sky-200 text-sky-700 hover:bg-sky-50 bg-transparent"
          >
            Temizle
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
