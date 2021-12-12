import React from 'react';
import footerStyles from "../styles/footer.modules.css";


export const Footer = () => {
  return (
    <div class="footerContainer" className={footerStyles.footer}>
      <div class="footerColumn">
        <h3 class="footerTitle">Sucursales</h3>
        <ul class="footerList">
          <li>Barranquilla: 
            <a href="https://www.google.com/search?q=carrera+10+%23+21+-+04+barranquilla&sxsrf=AOaemvJRXN_6-4uXyD72-WAw2Gga8XkfNg%3A1639191416131&ei=eBO0YbzBB4uFwbkPiMinsAU&ved=0ahUKEwi83c7w39r0AhWLQjABHQjkCVYQ4dUDCA8&uact=5&oq=carrera+10+%23+21+-+04+barranquilla&gs_lcp=Cgdnd3Mtd2l6EANKBAhBGABKBAhGGABQijhY9Dpgjj5oAnAAeACAAX6IAdoDkgEDMC40mAEAoAEBwAEB&sclient=gws-wiz#" target="_blank" rel="noopener noreferrer"> Carrera 10 # 21 - 04, Piso 4</a>
          </li>
          <li>Medellìn: 
            <a href="https://www.google.com/search?q=Calle+10+%23+32A+-+52+medellin&sxsrf=AOaemvJYe1Aa1695qORdkasK7UTnd09FCQ%3A1639191243190&ei=yxK0YfqVC-iTwbkP6Y69sA0&ved=0ahUKEwi6p5Oe39r0AhXoSTABHWlHD9YQ4dUDCA8&uact=5&oq=Calle+10+%23+32A+-+52+medellin&gs_lcp=Cgdnd3Mtd2l6EAMyAggmSgQIQRgBSgQIRhgAUP0FWOM8YNxSaAJwAHgAgAGbAYgBnw2SAQQwLjEzmAEAoAEBwAEB&sclient=gws-wiz#" target="_blank" rel="noopener noreferrer"> Calle 10 # 36 - 32</a>
          </li>
          <li>Cali: 
            <a href="https://www.google.com/search?q=Calle+34+%23+12+-+33+cali&sxsrf=AOaemvJ0huE0nVYLd9FmAVvbQro2a4l1qw%3A1639191285119&ei=9RK0Yc3fBtaTwbkP19myyAE&ved=0ahUKEwiNrpKy39r0AhXWSTABHdesDBkQ4dUDCA8&uact=5&oq=Calle+34+%23+12+-+33+cali&gs_lcp=Cgdnd3Mtd2l6EAMyAggmOgcIABBHELADSgQIQRgASgQIRhgAUI4GWOcKYJUMaANwAngAgAGCAYgB3AWSAQMwLjaYAQCgAQKgAQHIAQjAAQE&sclient=gws-wiz#" target="_blank" rel="noopener noreferrer"> Calle 34 # 12 - 33</a>
          </li>
          <li>Bogotá: 
            <a href="https://www.google.com/search?q=Calle+26+%23+54+-+23%2C+Bogot%C3%A1&oq=Calle+26+%23+54+-+23%2C+Bogot%C3%A1&aqs=chrome..69i57j33i22i29i30.393j0j7&sourceid=chrome&ie=UTF-8#" target="_blank" rel="noopener noreferrer"> Calle 26 # 54 - 23, Bogotá</a>
          </li>
        </ul>
      </div>
      <div class="footerColumn" className={footerStyles.footerColumn}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Banco_Agrario_de_Colombia_logo.svg/100px-Banco_Agrario_de_Colombia_logo.svg.png"
          alt="Logo Banco Agrario"
          class="bankLogoFooter"
        />
        <p>Todos los derechos reservados © 2021</p>
      </div>
      <div class="footerColumn">
        <h3 class="footerTitle">Información de Contacto</h3>
          <ul class="footerList">
            <li>Sede Principal: <a href="https://www.google.com/search?q=Calle+26+%23+54+-+23%2C+Bogot%C3%A1&oq=Calle+26+%23+54+-+23%2C+Bogot%C3%A1&aqs=chrome..69i57j33i22i29i30.393j0j7&sourceid=chrome&ie=UTF-8#" target="_blank" rel="noopener noreferrer">Calle 26 # 54 - 23, Bogotá</a></li>
            <li>Correo: <a href="mailto:contacto@banagrario.com.co">contacto@banagrario.com.co</a></li>
            <li>Teléfono:  
              <a href="tel:+57 601 233 - 4343"> +57 233 - 4343 </a> |    
              <a href="tel:+57 301 323 - 2323"> +57 301 323 - 2323</a></li>
          </ul>
      </div>
    </div>
  )
}