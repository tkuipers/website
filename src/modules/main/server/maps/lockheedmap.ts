import { RpgMap, MapData } from '@rpgjs/server'
import { VillagerEvent } from '../events/villager'

@MapData({
    id: 'lockheedmap',
    file: require('./lockheed/lockheedmap.tmx'),
    name: 'Lockheed',
    events: [
        
    ]
})
export class LockheedMap extends RpgMap {}