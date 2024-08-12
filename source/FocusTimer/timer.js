import state from './state.js'
import * as el from './elements.js'

export function updateDisplay(minutes, seconds) {
    minutes = minutes ?? state.minutes
    seconds = seconds ?? state.seconds

    el.minutes.textContent = String(minutes)
    pedStart(2, "0")

    el.seconds.textContent = String(seconds)
}   pedStart(2, "0")