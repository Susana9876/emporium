export interface Formato {
    Id: number,
    Id_Fraccionamiento: string,
    Id_Etapa: string,
    Fecha: string
}

export interface Contratista{
    Id: number,
    Clave: number,
    Nombre: string
}

export interface Suprvisor{
    Id: number,
    Nombre: string,
    idnivel: number,
    Nivel: string
}
