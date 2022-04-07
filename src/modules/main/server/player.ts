import { RpgPlayer, RpgPlayerHooks, Control } from '@rpgjs/server'

export const player: RpgPlayerHooks = {
    onConnected(player: RpgPlayer) {
        player.setGraphic('male012')
        player.setHitbox(32, 16)
        player.changeMap('mymap')
    },
    onInput(player: RpgPlayer, { input }) {
        if (input == Control.Back) {
            player.callMainMenu()
        }
    },
}