import { Separator } from "@/components/ui/separator"
import { formatCurrency } from "../utils/calculations"

export default function TaxBreakdown({ fatura }) {
  return (
    <div className="space-y-3">
      <div className="flex justify-between text-slate-700">
        <span>Tüketim Bedeli:</span>
        <span className="font-semibold">{formatCurrency(fatura.tuketimBedeli)}</span>
      </div>

      <div className="flex justify-between text-sky-600">
        <span>Enerji Fonu (%2):</span>
        <span className="font-semibold">{formatCurrency(fatura.energiFonu)}</span>
      </div>

      <div className="flex justify-between text-blue-600">
        <span>KDV (%20):</span>
        <span className="font-semibold">{formatCurrency(fatura.kdv)}</span>
      </div>

      <div className="flex justify-between text-blue-600">
        <span>Dağıtım Bedeli:</span>
        <span className="font-semibold">{formatCurrency(fatura.dagitimBedeli)}</span>
      </div>

      <Separator className="bg-sky-100" />

      <div className="bg-gradient-to-r from-sky-50 to-blue-50 rounded-lg p-4 border border-sky-100">
        <h4 className="font-semibold text-sky-800 mb-2">Vergi Açıklaması:</h4>
        <ul className="text-sm text-sky-700 space-y-1">
          <li>• Enerji Fonu: Tüketim bedelinin %2'si</li>
          <li>• KDV: (Tüketim Bedeli + Enerji Fonu)'nun %20'si</li>
          <li>• Dağıtım Bedeli: Toplam tüketim * (0.78)</li>
        </ul>
      </div>
    </div>
  )
}
