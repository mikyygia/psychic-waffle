const gen = [151, 251, 386, 493, 649, 721, 809, 905, 1025];

export const getGenId = (id) => {
    for (let i = 0; i < gen.length; i++) {
        if (id <= gen[i]) {
            return i + 1;
        }
    }
}