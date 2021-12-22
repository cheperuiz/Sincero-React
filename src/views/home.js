import React from 'react'

import { Helmet } from 'react-helmet'

import NavigationLinks1 from '../components/navigation-links1'
import BtnGroup from '../components/btn-group'
import projectStyles from '../style.module.css'
import styles from './home.module.css'

const Home = () => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Sincero</title>
        <meta
          name="description"
          content="Sincero is an insurtech that simplifies access to quality healthcare for the middle class of Latin America, starting with Mexico."
        />
        <meta property="og:title" content="Sincero" />
        <meta
          property="og:description"
          content="Sincero is an insurtech that simplifies access to quality healthcare for the middle class of Latin America, starting with Mexico."
        />
      </Helmet>
      <header className={styles['Header']}>
        <img
          alt="logo"
          src="/playground_assets/1asset%207-1500h.png"
          className={styles['image']}
        />
        <div className={styles['Nav']}>
          <NavigationLinks1 rootClassName="rootClassName1"></NavigationLinks1>
        </div>
        <div className={styles['BtnGroup']}>
          <button
            className={` ${styles['button']} ${projectStyles['button']} `}
          >
            <span className={styles['text']}>Â¡RegÃ­strate ya!</span>
          </button>
        </div>
        <div
          className={` ${styles['MenuBurger']} ${projectStyles['teleport-menu-burger']} `}
        >
          <svg viewBox="0 0 1024 1024" className={styles['icon']}>
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div
          className={` ${projectStyles['teleport-menu-mobile']} ${styles['MenuMobile']} `}
        >
          <div className={styles['Nav1']}>
            <div className={styles['Container01']}>
              <img
                alt="image"
                src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
                className={styles['image01']}
              />
              <div className={projectStyles['teleport-menu-close']}>
                <svg viewBox="0 0 1024 1024" className={styles['icon02']}>
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <NavigationLinks1 rootClassName="rootClassName"></NavigationLinks1>
          </div>
          <div>
            <svg
              viewBox="0 0 950.8571428571428 1024"
              className={styles['icon04']}
            >
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <svg
              viewBox="0 0 877.7142857142857 1024"
              className={styles['icon06']}
            >
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
            <svg
              viewBox="0 0 602.2582857142856 1024"
              className={styles['icon08']}
            >
              <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
            </svg>
          </div>
        </div>
      </header>
      <div className={styles['Hero']}>
        <div className={styles['container02']}>
          <div className={styles['container03']}>
            <h1 className={styles['text01']}>
              <span>
                Olvida todo lo que sabes
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span>sobre cobertura mÃ©dica</span>
            </h1>
            <span className={styles['text04']}>
              Sincero es tecnologÃ­a que cuida tu salud honestamente.
            </span>
            <span className={styles['text05']}>
              <span></span>
              <span>
                Tenemos el plan de gastos mÃ©dicos ideal para ti, con las mejores
              </span>
              <br></br>
              <span>condiciones que se adaptan a tus necesidades.</span>
            </span>
            <BtnGroup></BtnGroup>
          </div>
        </div>
        <img
          alt="image"
          src="/playground_assets/3asset%2020-800w.png"
          className={styles['image02']}
        />
        <img
          alt="image"
          src="/playground_assets/2asset%201-800h.png"
          className={styles['image03']}
        />
      </div>
      <div className={styles['Banner']}>
        <h1 className={styles['text09']}>
          <span>
            El momento de tener un plan
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br></br>
          <span>verdaderamente bueno estÃ¡ por llegar</span>
        </h1>
        <span className={styles['text12']}>
          <span>
            Nos tomamos muy en serio cuidar de tu salud, por eso invertimos el
            tiempo necesario para desarrollar la tecnologÃ­a que te ofrecerÃ¡
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br></br>
          <span>un plan de gastos mÃ©dicos hecho a tu medida.</span>
          <br></br>
          <span></span>
        </span>
        <span className={styles['text17']}>
          Registrate ahora para conocer todo lo que Sincero harÃ¡ por ti.
        </span>
        <BtnGroup rootClassName="rootClassName"></BtnGroup>
      </div>
      <div className={styles['Hero1']}>
        <img
          alt="image"
          src="/playground_assets/2asset%206-600h.png"
          className={styles['image04']}
        />
        <div className={styles['container04']}>
          <h1 className={styles['text18']}>
            <span className={styles['text19']}>
              Cuidar de tu salud,
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span className={styles['text20']}>
              sin descuidar el resto
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span className={styles['text22']}>de las cosas.</span>
            <span className={styles['text23']}></span>
          </h1>
          <span className={styles['text24']}>
            <span>
              En Sincero queremos que todos tengan el poder de cuidar de su
              salud, dÃ©janos ofrecerte un plan que cuide exactamente lo que tÃº
              necesitas.
            </span>
            <br></br>
            <span></span>
          </span>
        </div>
        <img
          alt="image"
          src="/playground_assets/2asset%204-800h.png"
          className={styles['image05']}
        />
      </div>
      <div className={styles['Hero2']}>
        <div className={styles['container05']}>
          <h1 className={styles['text27']}>
            <span>Ser claro y sin letras chiquitas, es ser Sincero.</span>
            <br></br>
            <span></span>
          </h1>
          <span className={styles['text30']}>
            <span>
              Queremos que vivas tranquilo, por eso te ofrecemos planes que son
              claros, sin cuotas ocultas o condiciones dudosas. Deja el pasado
              de los seguros atrÃ¡s, conoce nuestra protecciÃ³n honesta ahora.
            </span>
            <br></br>
            <span></span>
          </span>
          <BtnGroup rootClassName="rootClassName1"></BtnGroup>
        </div>
        <img
          alt="image"
          src="/playground_assets/2asset%209-1200w.png"
          className={styles['image06']}
        />
      </div>
      <div className={styles['Hero3']}>
        <img
          alt="image"
          src="/playground_assets/2asset%2013-700w.png"
          className={styles['image07']}
        />
        <div className={styles['container06']}>
          <h1 className={styles['text33']}>
            <span className={styles['text34']}>Siempre estaremos para ti.</span>
          </h1>
          <span className={styles['text35']}>
            <span>
              Nuestros planes incluyen una extensa red de los mejores
              especialistas mÃ©dicos,
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span>
              con atenciÃ³n online y presencial cuando lo requieras, en Sincero
              estarÃ¡s siempre protegido.
            </span>
            <br></br>
            <span></span>
            <br></br>
            <span></span>
          </span>
        </div>
        <img
          alt="image"
          src="270569b0-672f-4ba8-a3bb-af75a64fcf2c"
          className={styles['image08']}
        />
      </div>
      <div className={styles['Hero4']}>
        <div className={styles['container07']}>
          <h1 className={styles['text40']}>Sin ataduras ni plazos forzosos.</h1>
          <span className={styles['text41']}>
            <span>
              Puedes pausar tu plan o cancelarlo sin penalizaciones; pagarlo
              mensual o anualmente, cualquiera que sea el mejor
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span>esquema para ti, nosotros te entendemos.</span>
            <br></br>
            <span></span>
            <span></span>
          </span>
        </div>
        <img
          alt="image"
          src="/playground_assets/2asset%2016-600h.png"
          className={styles['image09']}
        />
      </div>
      <div className={styles['Banner1']}>
        <h1 className={styles['text48']}>
          <span>
            Estamos casi listos para cuidar de ti y
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br></br>
          <span>
            de
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span>los que mÃ¡s quieres, regÃ­strate ya.</span>
          <br></br>
          <span></span>
        </h1>
        <BtnGroup rootClassName="rootClassName3"></BtnGroup>
      </div>
      <footer className={styles['Footer']}>
        <div className={styles['container08']}>
          <div className={styles['Logo']}>
            <img
              alt="logo"
              src="/playground_assets/3asset%2010-1500h.png"
              className={styles['image10']}
            />
          </div>
          <div className={styles['LinksContainer']}>
            <div className={styles['Container09']}></div>
            <div className={styles['container10']}>
              <div className={styles['Contact']}>
                <span className={styles['text54']}>
                  <span>Aviso de privacidad</span>
                  <br></br>
                  <span></span>
                </span>
                <span className={styles['text57']}>
                  <span>LibrerÃ­a de divulgaciones</span>
                  <br></br>
                  <span></span>
                </span>
              </div>
              <span className={styles['text60']}>
                <span>TÃ©rminos y condiciones</span>
                <span></span>
              </span>
            </div>
          </div>
        </div>
        <div className={styles['Separator']}></div>
        <span className={styles['text63']}>
          <span>Â© 2021 Sincero, Todos los derechos reservados</span>
          <span className={styles['text65']}></span>
          <span></span>
        </span>
      </footer>
    </div>
  )
}

export default Home
