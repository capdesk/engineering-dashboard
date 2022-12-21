import * as adam_kovacs from './adam_kovacs.mdx'
import * as alexander_laghouila from './alexander_laghouila.mdx'
import * as andrei_mihai_nicolae from './andrei_mihai_nicolae.mdx'
import * as eray_tarhan from './eray_tarhan.mdx'
import * as kevin_reece from './kevin_reece.mdx'
import * as krystof_spiller from './krystof_spiller.mdx'
import * as maria_muhandes from './maria_muhandes.mdx'
import * as mikkel_boje from './mikkel_boje.mdx'
import * as pawel_wawreszuk from './pawel_wawreszuk.mdx'
import * as pawel_duda from './pawel_duda.mdx'
import * as pete_radcliffe from './pete_radcliffe.mdx'
import * as rafael_caseiro_lemos from './rafael_caseiro_lemos.mdx'
import * as rosalba_giuffrida from './rosalba_giuffrida.mdx'
import * as sarolta_sebo from './sarolta_sebo.mdx'
import * as vincent_seguin from './vincent_seguin.mdx'
import * as marc_ruaix from './marc_ruaix.mdx'
import * as edney_pitta from './edney_pitta.mdx'
import * as pedro_vaz from './pedro_vaz.mdx'
import * as matteo_la_cognata from './matteo_la_cognata.mdx'
import * as sally_hansen from './sally_hansen.mdx'
import * as uliana_musikhina from './uliana_musikhina.mdx'
import * as emmanuel_erommonsele from './emmanuel_erommonsele.mdx'
import * as lasse_ustrup from './lasse_ustrup.mdx'
import * as mayur_virendra from './mayur_virendra.mdx'
import * as jessica_joaquim_da_silva from './jessica_joaquim_da_silva.mdx'
import * as luiz_pericolo from './luiz_pericolo.mdx'
import * as vinay_verghese from './vinay_verghese.mdx'
import * as eakta_bhardwaj from './eakta_bhardwaj.mdx'
import * as felipe_galvao from './felipe_galvao.mdx'

const members = [
  kevin_reece,
  adam_kovacs,
  andrei_mihai_nicolae,
  rosalba_giuffrida,
  mikkel_boje,
  sarolta_sebo,
  alexander_laghouila,
  krystof_spiller,
  maria_muhandes,
  pete_radcliffe,
  vincent_seguin,
  pawel_wawreszuk,
  pawel_duda,
  eray_tarhan,
  rafael_caseiro_lemos,
  marc_ruaix,
  edney_pitta,
  pedro_vaz,
  matteo_la_cognata,
  sally_hansen,
  uliana_musikhina,
  emmanuel_erommonsele,
  lasse_ustrup,
  mayur_virendra,
  jessica_joaquim_da_silva,
  luiz_pericolo,
  vinay_verghese,
  eakta_bhardwaj,
  felipe_galvao,
]

const membersCount = members.length

const perCountry = (members as unknown as Array<{ attributes: { country: string } }>).reduce<Map<string, number>>(
  (acc, { attributes: { country } }) => {
    const currentCount = acc.get(country) ?? 0
    acc.set(country, currentCount + 1)
    return acc
  },
  new Map()
)

export default members
export { perCountry, membersCount }
