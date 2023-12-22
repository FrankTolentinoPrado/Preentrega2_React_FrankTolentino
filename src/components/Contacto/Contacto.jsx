import { useForm } from "react-hook-form";
import "./Contacto.css";

const Contacto = () => {
  const { register, handleSubmit } = useForm();

  const enviar = (data) => {
    console.log(data);
  };

  return (
    <div className="seccion_contacto">
      <div className="container-form">
        <div className="info-form">
          <h2>FLEXVYNE WEB CONTÁCTANOS</h2>
          <p>
            ¿Tienes preguntas o comentarios? Estamos aquí para ayudarte. En
            Flexvyne, valoramos tu opinión y estamos listos para resolver tus
            inquietudes. No dudes en ponerte en contacto con nuestro equipo
            amigable. Estamos ansiosos por escuchar de ti y brindarte la mejor
            experiencia de compra. ¡Tu satisfacción es nuestra prioridad!
          </p>
          <a>
            <i></i>+51 975544817
          </a>
          <a>
            <i></i>flexvyne_shop@gmail.com
          </a>
          <a>
            <i></i>Nuevo Chimbote, Peru
          </a>
        </div>
        <form id="form" autoComplete="off" onSubmit={handleSubmit(enviar)}>
          <input
            type="text"
            placeholder="Tu Nombre"
            className="campo"
            {...register("nombre", { required: true })}
          />
          <input
            type="email"
            placeholder="Tu Email"
            className="campo"
            {...register("email", { required: true })}
          />
          <input
            type="tel"
            placeholder="Tu Telefono"
            className="campo"
            {...register("telefono", { required: true })}
          />

           <textarea
            name="mensaje" 
            placeholder="Tu Mensaje..."
            {...register("mensaje", { required: true })}>
           </textarea>

          <button type="submit" className="btn-enviar">
            Enviar Mensaje
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contacto;
