import * as adam_kovacs from './adam_kovacs.mdx'
import * as alexander_laghouila from './alexander_laghouila.mdx'
import * as andrei_mihai_nicolae from './andrei_mihai_nicolae.mdx'
import * as eray_tarhan from './eray_tarhan.mdx'
import * as krystof_spiller from './krystof_spiller.mdx'
import * as marc_antoine_ferland from './marc-antoine_ferland.mdx'
import * as mikkel_boje from './mikkel_boje.mdx'
import * as pawel_wawreszuk from './pawel_wawreszuk.mdx'
import * as pawel_duda from './pawel_duda.mdx'
import * as pete_radcliffe from './pete_radcliffe.mdx'
import * as rafael_caseiro_lemos from './rafael_caseiro_lemos.mdx'
import * as sarolta_sebo from './sarolta_sebo.mdx'
import * as vincent_seguin from './vincent_seguin.mdx'
import * as marc_ruaix from './marc_ruaix.mdx'
import * as edney_pitta from './edney_pitta.mdx'
import * as pedro_vaz from './pedro_vaz.mdx'
import * as sally_hansen from './sally_hansen.mdx'
import * as uliana_musikhina from './uliana_musikhina.mdx'
import * as emmanuel_erommonsele from './emmanuel_erommonsele.mdx'
import * as lasse_ustrup from './lasse_ustrup.mdx'
import * as luiz_pericolo from './luiz_pericolo.mdx'
import * as felipe_galvao from './felipe_galvao.mdx'
import * as luca_cantini from './luca_cantini.mdx'
import * as eric_fleury from './eric_fleury.mdx'

const members = [
  adam_kovacs,
  andrei_mihai_nicolae,
  mikkel_boje,
  sarolta_sebo,
  alexander_laghouila,
  krystof_spiller,
  marc_antoine_ferland,
  pete_radcliffe,
  vincent_seguin,
  pawel_wawreszuk,
  pawel_duda,
  eray_tarhan,
  rafael_caseiro_lemos,
  marc_ruaix,
  edney_pitta,
  pedro_vaz,
  sally_hansen,
  uliana_musikhina,
  emmanuel_erommonsele,
  lasse_ustrup,
  luiz_pericolo,
  felipe_galvao,
  luca_cantini,
  eric_fleury,
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
