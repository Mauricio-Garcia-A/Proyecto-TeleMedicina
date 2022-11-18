import React from 'react';
import Logo from '../../basics/Logo/Logo';
import appStare from '../../../images/app-store.png'
import googlePlay from '../../../images/google-play.png'

import './Footer.scss'

const SvgIconTwitter = (props) => (
    <div className='icon-RS'>
        <svg viewBox="0 0 50 50"   {...props}>
            <path d="M50.063 10.438a20.57 20.57 0 0 1-5.91 1.62 10.309 10.309 0 0 0 4.523-5.687 20.648 20.648 0 0 1-6.531 2.492 10.258 10.258 0 0 0-7.504-3.246c-5.68 0-10.286 4.602-10.286 10.281 0 .805.094 1.59.27 2.344-8.547-.43-16.121-4.523-21.195-10.746a10.243 10.243 0 0 0-1.39 5.172c0 3.566 1.812 6.715 4.573 8.562a10.274 10.274 0 0 1-4.66-1.289v.13c0 4.984 3.547 9.136 8.246 10.085a10.29 10.29 0 0 1-4.644.172c1.312 4.082 5.11 7.063 9.605 7.145A20.613 20.613 0 0 1 2.39 41.87c-.831 0-1.648-.047-2.449-.144a29.053 29.053 0 0 0 15.762 4.62c18.914 0 29.258-15.667 29.258-29.253 0-.446-.012-.895-.027-1.332a20.904 20.904 0 0 0 5.129-5.325Z" />
        </svg>

    </div>
)
const SvgIconFacebook = (props) => (
    <div className='icon-RS'>
        <svg viewBox="0 0 50 50" {...props}>
            <path d="M32 11h5a1 1 0 0 0 1-1V3.263a.997.997 0 0 0-.925-.997C35.484 2.153 32.376 2 30.141 2 24 2 20 5.68 20 12.368V19h-7a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7v19a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V28h7.222a1 1 0 0 0 .994-.89l.778-7A1 1 0 0 0 37 19h-8v-5a3 3 0 0 1 3-3z" />
        </svg>
    </div>
)

export default function Footer(props) {
    return (
        <div className='container-footer'>
            <div className='container-sections-footer'>
                <section className='section-01-footter'>
                    <Logo />
                    <article>
                        <p>Cital<b>doc</b> Conecta con tu salud.</p>
                        <p>Esta plataforma no reemplaza la relación médico-paciente, busca complementarla y fortalecerla. Ofreciendo un canal de comunicación seguro de telemedicina. </p>
                        <p>Cital<b>doc</b> nO es un servicio para asistencia médica de casos de urgencias o emergencias</p>
                    </article>
                </section>
                <section className='section-02-footter'>
                    <article>
                        <h5>CONOCÉ CITALDOC </h5>
                        <span href='#'>Quiénes somos</span>
                    </article>
                    <article>
                        <h5>CÓMO FUNCIONA </h5>
                        <span href='#'>Profesionales</span>
                        <span href='#'>Pacientes</span>
                    </article>
                    <article>
                        <h5>INFORMACIÓn ADICIONAL</h5>
                        <span href='#'>FAQs</span>
                        <span href='#'>Términos y condiciones</span>
                        <span href='#'>Políticas de privacidad</span>
                        <span href='#'>Blog</span>
                        <span href='#'>Contactar</span>
                    </article>
                </section>
                <section className='section-03-footter'>
                    <p>¡Seguimos en la redes sociales!</p>
                    <div className='container-icons'>
                        <SvgIconFacebook width="20px" />
                        <SvgIconTwitter width="20px" />
                    </div>
                    <div className='container-icons-stores'>
                        <img src={appStare} alt="appStare" />
                        <img src={googlePlay} alt="googlePlay" />
                    </div>


                </section>
            </div>
            <p className='Copyright'>citaldoc Copyright 2022 / Todos los derechos reservados</p>
        </div>
    );
}

