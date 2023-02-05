const FormatPrice = ({price}) => {
    return Intl.NumberFormat("en-BD", {
        style: 'currency',
        currency: "BDT",
        minimumFractionDigits:2
  }).format(price/100)
}

export default FormatPrice