import { AlertTriangle } from "lucide-react"
import { formatCurrency } from "../utils/calculations"

export default function ReactivePenalty({ fatura }) {
  if (fatura.reaktifCeza <= 0) return null

  return (
    <div className="space-y-4">
      <div className="flex justify-between text-red-600">
        <span className="flex items-center gap-1">
          <AlertTriangle className="h-4 w-4" />
          Reaktif Ceza (%15):
        </span>
        <span className="font-semibold">{formatCurrency(fatura.reaktifCeza)}</span>
      </div>

      <div className="bg-gradient-to-r from-red-50 to-rose-50 border border-red-200 rounded-lg p-4">
        <div className="flex items-center gap-2 text-red-700 mb-2">
          <AlertTriangle className="h-4 w-4" />
          <span className="font-semibold">Reaktif Ceza Uygulandı!</span>
        </div>
        <p className="text-sm text-red-600">300 kWh üzeri tüketim nedeniyle %15 reaktif ceza uygulanmıştır.</p>
      </div>
    </div>
  )
}
