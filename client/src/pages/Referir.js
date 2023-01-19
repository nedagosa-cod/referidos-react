import { Formik, Form } from 'formik'
import { createRefer } from '../api/refer.api.js'

function Referir() {
  return (
    <div>
        <Formik
          initialValues={{
            name_e: '',
            documento_e: '',
            telefono_e: '',
            antiguedad_e: '',
            campana_e: '',
            sede_e: '',
            nombre_r: '',
            documento_r: '',
            telefono_r: '',
            telefono_rii: '',
            campana_r_1: '',
            sede_r_1: '',
          }}
          onSubmit = {async (values) =>{
            try {
              const response = await createRefer(values)
              console.log(response)
            } catch (error){
              console.log(error)
            }
          }}
        >
          {({handleChange, handleSubmit})=> (
            <Form onSubmit={handleSubmit}>
              <div>
                <h1>Datos de quien refiere</h1>
                <label>Nombre Completo</label>
                <input type="text" name="name_e" onChange={handleChange} />
                <label>Número de Documento</label>
                <input type="text" name="documento_e" onChange={handleChange} />
                <label>Número de Teléfono</label>
                <input type="text" name="telefono_e" onChange={handleChange} />
                <select className="form__select" name="antiguedad_e" onChange={handleChange}>
                    <option value="">Seleccionar Antigüedad</option>
                    <option value="Nuevo - En formación inicial">Nuevo - En formación inicial</option>
                    <option value="Antiguo - En operación">Antiguo - En operación</option>
                </select>
                <select className="form__select" name="campana_e" onChange={handleChange}>
                    <option value="">Campaña a la que perteneces</option>
                    <option value="Claro Colombia">Claro Colombia</option>
                    <option value="Telefonica Colombia">Telefonica Colombia</option>
                    <option value="Telefónica Ventas">Telefónica Ventas</option>
                    <option value="Telefónica Chile">Telefónica Chile</option>
                    <option value="Telefónica México">Telefónica México</option>
                    <option value="Ventas Multisector">Ventas Multisector</option>
                    <option value="Servicio Multisector">Servicio Multisector</option>
                </select>
                <select className="form__select" name="sede_e" onChange={handleChange}>
                    <option value="">Sede Actual</option>
                    <option value="Bogotá Sede Royal">Bogotá Sede Royal</option>
                    <option value="Bogotá Sede Dorado">Bogotá Sede Dorado</option>
                    <option value="Bogotá Sede Telares">Bogotá Sede Telares</option>
                    <option value="Bogotá Sede Floresta">Bogotá Sede Floresta</option>
                    <option value="Bogotá Sede Elemento">Bogotá Sede Elemento</option>
                    <option value="Pereira Tres nevados">Pereira Tres nevados</option>
                    <option value="Pereira Olaya">Pereira Olaya</option>
                    <option value="Medellín Guayabal">Medellín Guayabal</option>
                </select>                                                
              </div>
              <div>
                <h1>Datos de Referido</h1>
                <label>Nombre Completo</label>
                <input type="text" name="nombre_r" onChange={handleChange} />
                <label>Número de Documento</label>
                <input type="text" name="documento_r" onChange={handleChange} />
                <label>Número de Teléfono 1</label>
                <input type="text" name="telefono_r" onChange={handleChange} />
                <label>Número de Teléfono 2</label>
                <input type="text" name="telefono_rii" onChange={handleChange} />
                <div className="field form-refer__checkboxs">
                    <span>Tipos de ofertas / Campañas de interés</span>
                    <label htmlFor="campana_r_1">
                        Campañas Comerciales - Ventas
                        <input type="checkbox" name="campana_r_1" value="Campañas Comerciales - Ventas " onChange={handleChange}/>
                    </label>
                    <label htmlFor="campana_r_2">
                        Campañas Servicio al cliente
                        <input type="checkbox" name="campana_r_2" value="Campañas Servicio al cliente "/>
                    </label>
                </div>
                <div className="field form-refer__checkboxs">
                    <span>Sedes que se le facilitaria trasladarse</span>
                    <label htmlFor='sede_r_1'>
                        Bogotá Sede Royal - Calle 67 #12-35
                        <input type="checkbox" name="sede_r_1" value="Bogotá Sede Royal - Calle 67 #12-35" onChange={handleChange}/>
                    </label>
                    <label htmlFor="sede_r_2">
                        Bogotá Sede Telares - Carrera 54 # 5C-66
                        <input type="checkbox" name="sede_r_2" value="Bogotá Sede Telares - Carrera 54 # 5C-66 "/>
                    </label>
                </div>
              </div>
              <button type="submit">Enviar</button>
          </Form>
          )}
        </Formik>
    </div>
  )
}

export default Referir