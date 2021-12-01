import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from "./../Styles/landing.module.css"

export const Landing = () => {
  return (
    <div className="row" className={styles.landingContainer}>
      <div className="col-12" className={styles.landingBanner}>
          <img 
            src="https://www.bancoagrario.gov.co/images/ig2015/logo-banco-agrario-colombia.png"
            alt="Logo Banco Agrario" 
            className={styles.bankLoogo}
          />
          <Link to="/login">
					<button class="btn btn-success my-2 my-sm-0" type="submit">
						Ingresar
					</button>
				</Link>
        </div>
    </div>
  )
}