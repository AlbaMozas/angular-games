//tipamos nuestro array de allCards

export interface PlanetInterface{
    id: number,
    name: string,
    img: string,
    //si está seleccionado para que muestre el planeta 
    checked?: boolean,
    selected?: boolean
}