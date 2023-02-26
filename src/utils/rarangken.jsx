export const convertRarangken = (rarangken, aksara) => {
  let aksaraWithRarangken
  switch (rarangken) {
    case 'panghulu':
      aksaraWithRarangken = aksara.substring(0, 1) + 'i'
      break
    case 'pamepet':
      aksaraWithRarangken = aksara.substring(0, 1) + 'e'
      break
    case 'paneuleung':
      aksaraWithRarangken = aksara.substring(0, 1) + 'eu'
      break
    case 'panglayar':
      aksaraWithRarangken = aksara + 'r'
      break
    case 'panyecek':
      aksaraWithRarangken = aksara + 'ng'
      break
    case 'panyuku':
      aksaraWithRarangken = aksara.substring(0, 1) + 'u'
      break
    case 'panyakra':
      aksaraWithRarangken = aksara.substring(0, 1) + 'r' + aksara.substring(1)
      break
    case 'panyiku':
      aksaraWithRarangken = aksara.substring(0, 1) + 'l' + aksara.substring(1)
      break
    case 'panéléng':
      aksaraWithRarangken = aksara.substring(0, 1) + 'é'
      break
    case 'panolong':
      aksaraWithRarangken = aksara.substring(0, 1) + 'o'
      break
    case 'pamingkal':
      aksaraWithRarangken = aksara.substring(0, 1) + 'y' + aksara.substring(1)
      break
    case 'pangwisad':
      aksaraWithRarangken = aksara + 'h'
      break
    case 'pamaéh':
      aksaraWithRarangken = aksara.substring(0, 1)
      break
    default:
      aksaraWithRarangken = aksaraWithRarangken
      break
  }
  return aksaraWithRarangken
}
