export const hesaplaElektrikFaturasi = (ilkEndeks, sonEndeks, birimFiyat) => {
  const ilk = Number.parseFloat(ilkEndeks) || 0
  const son = Number.parseFloat(sonEndeks) || 0
  const fiyat = Number.parseFloat(birimFiyat) || 0

  if (son <= ilk) {
    throw new Error("Son endeks, ilk endeksten büyük olmalıdır!")
  }

  const tuketim = son - ilk
  const tuketimBedeli = tuketim * fiyat

  // Enerji Fonu (%2)
  const energiFonu = tuketimBedeli * 0.02

  // KDV (%20)
  const kdvMatrahi = tuketimBedeli + energiFonu
  const kdv = kdvMatrahi * 0.2

  // Reaktif Ceza (300 kWh üzeri için %15 ek ücret)
  let reaktifCeza = 0
  if (tuketim > 300) {
    reaktifCeza = tuketimBedeli * 0.15
  }

  //Dağıtım bedeli (vergisiz tüketim bedeli * 0.78)
  const dagitimBedeli = tuketimBedeli * 0.78

  const toplamTutar = tuketimBedeli + energiFonu + kdv + dagitimBedeli + reaktifCeza

  return {
    ilkEndeks: ilk,
    sonEndeks: son,
    tuketim,
    birimFiyat: fiyat,
    tuketimBedeli,
    energiFonu,
    kdv,
    reaktifCeza,
    dagitimBedeli,
    toplamTutar,
  }
}

export const formatCurrency = (amount) => {
  return `${amount.toFixed(2)} ₺`
}

export const formatNumber = (number) => {
  return number.toLocaleString("tr-TR")
}
