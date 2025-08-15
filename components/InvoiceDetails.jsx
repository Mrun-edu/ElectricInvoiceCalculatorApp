import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Receipt } from "lucide-react"
import { formatCurrency, formatNumber } from "../utils/calculations"
import TaxBreakdown from "./TaxBreakdown"
import ReactivePenalty from "./ReactivePenalty"

export default function InvoiceDetails({ fatura }) {
  if (!fatura) return null

  return (
    <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
      <CardHeader className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-t-lg">
        <CardTitle className="flex items-center gap-2 text-slate-700">
          <Receipt className="h-5 w-5 text-emerald-600" />
          Fatura Detayı
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 p-6">
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="bg-sky-50 rounded-lg p-3">
            <span className="text-slate-600">İlk Endeks:</span>
            <p className="font-semibold text-slate-800">{formatNumber(fatura.ilkEndeks)} kWh</p>
          </div>
          <div className="bg-blue-50 rounded-lg p-3">
            <span className="text-slate-600">Son Endeks:</span>
            <p className="font-semibold text-slate-800">{formatNumber(fatura.sonEndeks)} kWh</p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-sky-50 to-blue-50 rounded-lg p-4 border border-sky-100">
          <div className="flex justify-between items-center">
            <span className="text-slate-700">Toplam Tüketim:</span>
            <span className="font-bold text-lg text-sky-700">{formatNumber(fatura.tuketim)} kWh</span>
          </div>
          <div className="flex justify-between items-center mt-2">
            <span className="text-slate-600 text-sm">Birim Fiyat:</span>
            <span className="font-semibold text-slate-700">{formatCurrency(fatura.birimFiyat)}/kWh</span>
          </div>
        </div>

        <Separator className="bg-sky-100" />

        <TaxBreakdown fatura={fatura} />

        <ReactivePenalty fatura={fatura} />

        <Separator className="bg-sky-100" />

        <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-lg p-4 border border-emerald-200">
          <div className="flex justify-between text-xl font-bold text-emerald-700">
            <span>Toplam Tutar:</span>
            <span>{formatCurrency(fatura.toplamTutar)}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
