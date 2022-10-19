export function piss(mb) {
    if (typeof window === "undefined") {
        global.piss = new Uint8Array(Math.floor(mb * 1024 * 1024)).fill(69);
    } else {
        window.piss = new Uint8Array(Math.floor(mb * 1024 * 1024)).fill(69);
    }
}
