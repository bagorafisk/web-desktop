// File: js/gameLoader.js

/**
 * Loads a game module dynamically and initializes it on the provided canvas.
 * @param {HTMLCanvasElement} canvas - The canvas element where the game will run.
 * @param {string} gameScriptPath - The path to the game module file.
 */
export async function loadGame(canvas, gameScriptPath) {
    // Check if the shared library is available.
    if (typeof balder === "undefined") {
        console.warn("balder.js is not loaded! Please ensure it is available before launching games.");
    }

    try {
        // Dynamically import the game module.
        const gameModule = await import(gameScriptPath);
        console.log(`Game module loaded from ${gameScriptPath}`);

        // If the module exports an initialization function, call it.
        if (gameModule.initGame && typeof gameModule.initGame === "function") {
            gameModule.initGame(canvas);
        } else {
            // If there is no explicit init function, assume the game code self-initializes.
            console.warn("The game module did not export an 'initGame' function. It may initialize itself automatically.");
        }
    } catch (error) {
        console.error("Failed to load the game module:", error);
    }
}
