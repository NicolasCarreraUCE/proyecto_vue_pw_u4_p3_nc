import axios from "axios";
// Metodos Fachada
export const obtenerPorCedulaFachada = async (cedula) => {
    return obtenerPorCedula(cedula);
}

export const insertarFachada = async (body) => {
    insertar(body)
}

export const actualizarFachada = (id, body) => {
    actualizar(id, body)
}

export const buscarTodosFachada = () => {
    return buscarTodos()
}

export const borrarPorIdFachada = (id) => {
    borrarPorId(id)
}

export const borrarPorCedulaFachada = (cedula) => {
    borrarPorCedula(cedula)
}

// Metodos de consumo CRUD
const obtenerPorCedula = async (cedula) => {
    const data = axios.get(`http://localhost:8090/api/facturacion/v1/clientes/cedula/${cedula}`).then(r => r.data)
    console.log(data.nombre)
    return data
}

const insertar = async (body) => {
    axios.put(`http://localhost:8090/api/facturacion/v1/clientes`, body).then(r => r.data)
}

const actualizar = async (id, body) => {
    axios.put(`http://localhost:8090/api/facturacion/v1/clientes/actualizar`, body).then(r => r.data)
}

const buscarTodos = () => {

}

const borrarPorId = (id) => {
    axios.delete(`http://localhost:8090/api/facturacion/v1/clientes/${id}`).then(r => r.data)
}

const borrarPorCedula = (cedula) => {

}

// Medodos que se van a exponer
// export default obtenerPorCedulaFachada; // Solo se puede exponer un solo metodo