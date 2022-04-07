import { RpgServer, RpgModule } from '@rpgjs/server'
import { LockheedMap } from './maps/lockheedmap'
import { SampleMap } from './maps/samplemap'
import { player } from './player'

@RpgModule<RpgServer>({ 
    player,
    maps: [
        SampleMap,
        LockheedMap
    ]
})
export default class RpgServerEngine {}