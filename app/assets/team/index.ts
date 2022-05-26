import * as adam_kovacs from './adam_kovacs.mdx'
import * as alexander_worm_olsen from './alexander_worm_olsen.mdx'
import * as andrei_mihai_nicolae from './andrei_mihai_nicolae.mdx'
import * as eray_tarhan from './eray_tarhan.mdx'
import * as kevin_reece from './kevin_reece.mdx'
import * as krystof_spiller from './krystof_spiller.mdx'
import * as marc_antoine_ferland from './marc-antoine_ferland.mdx'
import * as maria_muhandes from './maria_muhandes.mdx'
import * as mikkel_boje from './mikkel_boje.mdx'
import * as neva_stumberger from './neva_stumberger.mdx'
import * as pawel_wawreszuk from './pawel_wawreszuk.mdx'
import * as pete_radcliffe from './pete_radcliffe.mdx'
import * as rafael_caseiro_lemos from './rafael_caseiro_lemos.mdx'
import * as rosalba_giuffrida from './rosalba_giuffrida.mdx'
import * as sarolta_sebo from './sarolta_sebo.mdx'
import * as vincent_seguin from './vincent_seguin.mdx'
import * as marc_ruaix from './marc_ruaix.mdx'
import * as edney_pitta from './edney_pitta.mdx'
import * as pedro_vaz from './pedro_vaz.mdx'
import * as matteo_la_cognata from './matteo_la_cognata.mdx'

const members = [
  kevin_reece,
  adam_kovacs,
  andrei_mihai_nicolae,
  rosalba_giuffrida,
  mikkel_boje,
  sarolta_sebo,
  alexander_worm_olsen,
  neva_stumberger,
  krystof_spiller,
  marc_antoine_ferland,
  maria_muhandes,
  pete_radcliffe,
  vincent_seguin,
  pawel_wawreszuk,
  eray_tarhan,
  rafael_caseiro_lemos,
  marc_ruaix,
  edney_pitta,
  pedro_vaz,
  matteo_la_cognata,
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
