const categories = [
    { 
        id: 1, 
        name: "NIVEL 1: Fundamentos Básicos", 
        icon: "fa-solid fa-book-open",
        content: {
            identificacion: `
                <h3>Identificación de Artificios Cat. III</h3>
                <img src="area_de_destruccion.jpeg" style="width:100%; height:auto; border-radius:12px; margin-bottom:15px; border:1px solid var(--border);" alt="Área de Destrucción">
                <p>Se identifican visualmente tres tipos principales de artificios:</p>
                <ul>
                    <li><b>Bombas de Mortero (Crisantemos):</b> Forma esférica o semiesférica de cartón laminado (2-4 mm de espesor). Tienen una costura ecuatorial visible y mecha en la parte superior. Generan las presiones más altas (25-40 atmósferas) y fragmentación letal (radio >70m para 8").</li>
                    <li><b>Castillos, Toritos y Coronas:</b> Arquitectura basada en múltiples tubos unidos a un bastidor. Complejidad operativa muy alta por la sincronización de múltiples puntos. El riesgo principal es la reacción en cadena desincronizada.</li>
                    <li><b>Cohetones:</b> Cilíndricos para propulsión aérea vertical, estabilizados con una larga varilla de madera de 1.5 a 2 veces el largo del tubo. Divididos en sección de efectos (superior), separador, y propulsión inferior (50-60% del dispositivo).</li>
                </ul>
                <div class="placeholder-box" style="height:auto; padding:15px; margin-top:20px; font-size:0.9rem; text-align:left;">
                    <h4 style="margin-bottom:10px;"><i class="fa-solid fa-list-check"></i> Protocolo de Inspección en Campo</h4>
                    <ol style="margin-left: 20px;">
                        <li><b>Forma:</b> Esférica (bomba), ramificada (castillo), cilíndrica con varilla (cohetón).</li>
                        <li><b>Costura:</b> Buscar línea horizontal visible (confirma crisantemo).</li>
                        <li><b>Medición y Peso:</b> Medir diámetros (4", 6", 8") y comprobar el peso con cuidado, sin fricción.</li>
                        <li><b>Mecha:</b> Verificar integridad de pólvora negra trenzada expuesta en la parte superior (1-2 cm es lo normal).</li>
                        <li><b>Olor:</b> Un ligero olor a pólvora es normal; químicos a amoníaco o azufre intenso indican inestabilidad inminente.</li>
                    </ol>
                </div>
            `,
            destruccion: `
                <h3>Procedimientos de Destrucción y Riesgos</h3>
                <p>Las características estructurales determinan los riesgos específicos durante su destrucción o inutilización en campo:</p>
                <ul>
                    <li><b>Reacción en Cadena Desincronizada (Castillos):</b> El encendido en un tubo propaga onda térmica a tubos adyacentes prematuramente. <strong>Prevención:</strong> Separación mínima de 50 cm entre componentes durante la destrucción y proveer confinamiento con barreras de arena.</li>
                    <li><b>Proyección Lateral:</b> Particular de los tubos y cohetones. A diferencia de las bombas que expanden omnidireccionalmente, los cilindros proyectan fuego lateralmente si se detonan en tierra. Requiere ampliación de distancias de seguridad.</li>
                    <li><b>Efecto Acústico y Onda de Choque:</b> Las explosiones confinadas superan los 140 decibelios (pérdida auditiva permanente sin equipo). La onda de presión en morteros alcanza velocidades transónicas (>340 m/s).</li>
                </ul>
                <p>Para su inutilización segura, se debe priorizar siempre la inmersión en agua abundante en lugar de detonación, salvo que las directrices de comando o el riesgo térmico inminente soliciten detonación <i>in situ</i>.</p>
            `,
            seguridad: `
                <h3>Medidas y Equipo de Seguridad</h3>
                <img src="torito2.jpeg" style="width:100%; height:auto; border-radius:12px; margin-bottom:15px; border:1px solid var(--border);" alt="Medidas de seguridad Torito">
                <p>La evaluación constante del envase de cartón o polímero es obligatoria. Cualquier signo de deterioro cambia de inmediato los protocolos manuales a evacuación.</p>
                <div class="badges" style="margin-bottom:15px;">
                    <span class="badge"><i class="fa-solid fa-triangle-exclamation"></i> Cero Sintéticos</span>
                    <span class="badge"><i class="fa-solid fa-wind"></i> Ventilación Constante</span>
                    <span class="badge"><i class="fa-solid fa-temperature-arrow-down"></i> Sombra &lt; 20°C</span>
                </div>
                <h4>Señales de Integridad Comprometida</h4>
                <ul>
                    <li><strong>Grietas visibles en el cartón:</strong> Riesgo <span style="color:#ff4d4d; font-weight:bold;">CRÍTICO</span>. Hay compromiso de presión interna; destruya utilizando métodos acuosos sin demora.</li>
                    <li><strong>Humedad o Decoloración:</strong> Absorción pasada de agua. Indica que los químicos internos pudieron haber comenzado a reaccionar y separarse. No manipule de más y aplique inmersión pura.</li>
                    <li><strong>Olor a Químicos Fuerte:</strong> Una reacción de <i>auto-ignición</i> puede haberse auto-sostenido en el interior. Riesgo inminente de explosión.</li>
                    <li><strong>Alta Temperatura al Tacto:</strong> ¡NUNCA ESPERE! Si al acercarse la temperatura se siente por contacto de radiación, la ignición térmica tomará solo segundos. Evacúe de inmediato a 50 metros.</li>
                </ul>
            `,
            residuos: `
                <h3>Manejo de Residuos Operativos</h3>
                <img src="img_residuos.png" style="width:100%; max-height:220px; object-fit:cover; border-radius:12px; margin-bottom:15px; border:1px solid var(--border);" alt="Manejo acuoso de residuos">
                <p>La observación de polvos y cenizas dejados atrás es vital. La colorimetría pirotécnica es reveladora:</p>
                <ul>
                    <li><strong>Residuos Rojizos o Rosas (Estroncio):</strong> El riesgo residual de estos nitratos o percloratos es <b>BAJO</b> y se disuelven de forma segura con agua simple.</li>
                    <li><strong>Residuos Verdes (Bario):</strong> Riesgo físico bajo, pero si incluyeron Clorato de Potasio la sensibilidad por fricción residual puede ser extrema. Tienen toxicidad moderada si se inhalan.</li>
                    <li><strong>Residuos Azules (Óxido de Cobre + PVC):</strong> Combustión frecuentemente asistida por PVC que al quemarse emite ácido clorhídrico tóxico en humo. Usar protección respiratoria.</li>
                    <li><strong>Polvo Blanco o Plateado Brillante (Magnesio/Aluminio):</strong> Riesgo <strong>ALTO</strong>. Las partículas finas de magnesio son súper reactivas. Este material es la base para lograr temperaturas operativas exorbitantes (>2000°C - 2800°C). Incluso un pequeño residuo sometido a fricción al recogerlo levantará llama blanca ciega con rapidez espantosa.</li>
                </ul>
            `
        }
    },
    { 
        id: 2, 
        name: "NIVEL 2: Características Técnicas", 
        icon: "fa-solid fa-gears",
        content: {
            identificacion: `
                <h3>Mecanismos Reaccionales y Colorimetría</h3>
                <img src="img_identificacion_2.png" style="width:100%; max-height:220px; object-fit:cover; border-radius:12px; margin-bottom:15px; border:1px solid var(--border);" alt="Estructura Cilíndrica">
                <p>Las mezclas de nivel III dependen de 4 pilares: un combustible (Carbón/Madera, Azufre o Metales reactivos), un oxidante (Nitratos, Percloratos, Cloratos), energía de iniciación térmica y sostén de reacción en cadena.</p>
                <ul>
                    <li><b>Combustión Controlada:</b> Subsónica, sin excesiva presión (<10 atm).</li>
                    <li><b>Deflagración:</b> Ocurre en tubos de 10 a 50 atm de presión de confinamiento (300 a 1000 m/s de avance reaccional).</li>
                    <li><b>Detonación Transónica:</b> Estructura bajo enorme estrés se rompe abruptamente superando la barrera del sonido (>340 m/s) disparando letales componentes o polvo incandescente.</li>
                </ul>
                <p><strong>Colorimetría Térmica Sensible:</strong> A mayor temperatura de combustión, mayores riesgos. Mezclas amarillas o rojas alcanzan ~1500°C. Las mezclas ricas en magnesio para efectos blancos queman a <strong>2800°C</strong>. Estas altísimas temperaturas bajan enormemente el umbral para reacciones exotérmicas descontroladas frente a cualquier error humano en manipulación o almacenamiento expuesto al sol.</p>
            `,
            destruccion: `
                <h3>Los 6 Modos de Iniciación Activa</h3>
                <p>La neutralización o accidente con sustancias volátiles pueden originarse de 6 formas precisas. Las labores de descarte deben asegurar la inhabilitación del material previniendo su excitación a todo evento:</p>
                <ul>
                    <li><b>Modo 1 y 2 (Térmico directo e indirecto):</b> Flama directa, o por absorción de rayo solar en almacenamiento confinado que acumula calor. Mantenga elementos SIEMPRE por debajo de 20°C.</li>
                    <li><b>Modo 3 (Fricción):</b> Extremadamente fatal en mezclas de Cloratos con azufre o aluminio. La iniciación ocurre si la herramienta levanta el punto local por encima de 50°C en microsegundos.</li>
                    <li><b>Modo 4 (Impacto Compresivo):</b> Caída o golpe agudo. Genera compresión térmica que detona el envase casi sin retardo (<1 segundo). Utilice plataformas por debajo de 50cm y NUNCA las lance o deje caer libremente en los tachos de destrucción.</li>
                    <li><b>Modo 5 y 6 (Químico por Agua y por Ácidos):</b> Desencadenados durante el intento de limpiezas, que involucran reacciones REDOX altamente furiosas con ácidos clorhidricos/sulfúricos o liberación de hidrógeno por inmersión acuosa deficiente.</li>
                </ul>
            `,
            seguridad: `
                <h3>Control de Riesgos de Fricción e Impacto</h3>
                <img src="img_seguridad.png" style="width:100%; max-height:220px; object-fit:cover; border-radius:12px; margin-bottom:15px; border:1px solid var(--border);" alt="Medidas de Seguridad">
                <p>Las mezclas con químicos de alta sensibilidad como el <strong>Clorato de Potasio</strong> imponen medidas estrictas a nivel crítico.</p>
                <div class="badges" style="margin-bottom:15px;">
                    <span class="badge"><i class="fa-solid fa-ban"></i> Metal Prohibido</span>
                    <span class="badge"><i class="fa-solid fa-tree"></i> Útil de Madera / Cerámica</span>
                    <span class="badge"><i class="fa-solid fa-hand-holding-hand"></i> Mover Lento con Dos Manos</span>
                </div>
                <ul>
                    <li><strong>Prohibición de Herramienta Metálica:</strong> El uso de cuchillas, destornilladores o incluso plástico opaco rígidio es una negligencia letal por su probabilidad de chispas y fricciones micrométricas. Solamente se usarán espátulas, morteros e instrumental que sea estrictamente de madera, cerámica blanca, goma suave o vidrio.</li>
                    <li><strong>Aislamiento de Superficies:</strong> Para labores de extracción o corte, la superficie bajo el explosivo debe ser madera blanda cubierta con tela antiestática (algodón). Nunca trabajar ni apoyar en mesas de hormigón pulido o metálicas pesadas. Jamás arrastre material, tómelo con ambas manos.</li>
                </ul>
            `,
            residuos: `
                <h3>Desactivación Acuosa y Reactividad Química</h3>
                <img src="img_inactivacion_2.png" style="width:100%; max-height:220px; object-fit:cover; border-radius:12px; margin-bottom:15px; border:1px solid var(--border);" alt="Tratamiento acuoso y reactivos">
                <p>Uno asume que el agua apaga incendios pirotécnicos, pero a este nivel, representa reacciones químicas mortales:</p>
                <ul>
                    <li><b>Deterioro de Aglutinantes (Gomas vs Plásticos):</b> Si el polvo aglutinante interno es Goma Arábiga o Dextrina, remojar el artefacto lo disolverá a salvo en 30 a 60 minutos. PERO si usan resinas plásticas industriales como el Polivinilo C. o Lacas sintéticas, el envoltorio repelerá parcialmente la inmersión por largo lapso de horas.</li>
                    <li><strong>Prohibido el uso de Ácidos:</strong> Jamás use detergentes que contentan bases nítricas o clorhídricas sobre las bandejas residuales, porque el clorato entra en desintegración violenta instantánea originando detonaciones residuales.</li>
                </ul>
                <div class="placeholder-box warning" style="height:auto; padding:15px; text-align:left; font-size:0.9rem; margin-top:20px;">
                    <i class="fa-solid fa-triangle-exclamation" style="display:block; font-size:2rem; margin-bottom:10px; text-align:center;"></i>
                    <strong style="display:block; margin-bottom:5px;">EL PELIGRO DEL MAGNESIO Y EL AGUA: </strong>
                    Si el artefacto a limpiar contiene aleaciones de polvo de aluminio fino o magnesio y entra en contacto con cantidades pequeñas de agua a temperatura, ocurre un desastre RedOx donde el magnesio roba oxígeno del H2O, generando calor extremo y expulsando <b>Gas Hidrógeno</b> (H2 altamente inflamable). Si va a tratar en líquido estas baterías, OBLIGATORIAMENTE hágalo con una cubeta honda que sea más de 10 veces el volumen total, con agua extremadamente fría sumergiéndola despacio y no dejando pedazos del cartón expuesto.
                </div>
            `
        }
    },
    { 
        id: 3, 
        name: "Método de Destrucción de Artificios Categoría III", 
        icon: "fa-solid fa-fire-burner",
        content: {
            destruccion: `
                <h3>Método de Destrucción de Artificios Categoría III</h3>
                <img src="torito.jpeg" style="width:100%; height:auto; border-radius:12px; margin-bottom:15px; border:1px solid var(--border);" alt="Torito">
                <p>La destrucción de material de alto riesgo no es solo un trámite administrativo; es una operación de precisión donde la seguridad del personal del <strong>Servicio de Materiales de Guerra</strong> es la prioridad absoluta. A continuación, se detalla el método paso a paso:</p>
                
                <h4>I. Preparación y seguridad del Entorno</h4>
                <p>Antes de iniciar, debemos asegurar que el ambiente sea favorable. La destrucción se programará en horas de <strong>baja intensidad solar</strong> (mañana o tarde) para evitar que el calor ambiental sensibilice el material.</p>
                <ul>
                    <li><strong>El Cinturón de Seguridad:</strong> El equipo de vigilancia establecerá un perímetro infranqueable de <strong>200 metros</strong>, marcado con banderolas rojas. Nadie, absolutamente nadie ajeno a la operación, debe cruzar esta línea.</li>
                    <li><strong>La Cuna de Destrucción:</strong> En el foso seleccionado, el equipo de maniobras preparará una base uniforme de madera, cartón y trapos. Esta "cama" servirá como el combustible inicial que garantice una combustión estable.</li>
                </ul>

                <h4>II. Manejo y Desorganización (El Paso Crítico)</h4>
                <p>Dado que los artificios de <strong>Categoría III</strong> son de alto riesgo o venta controlada, no pueden quemarse "tal cual".</p>
                <ul>
                    <li><strong>Inmersión en Diesel:</strong> Cada pieza debe ser sumergida en una cubeta con diesel. Dentro del líquido, el personal procederá a desorganizarlas (desarmarlas o neutralizarlas mecánicamente). El diesel actúa aquí como un agente que reduce la sensibilidad del material durante su manipulación.</li>
                    <li><strong>La Regla de Cinco:</strong> Para mantener el control total sobre la energía liberada, solo se permiten <strong>5 piezas como máximo</strong> por cada tendido en el foso. El material se extiende sobre la cama de destrucción en una capa que nunca debe superar los <strong>10 cm</strong> de espesor.</li>
                </ul>

                <h4>III. Iniciación y Resguardo</h4>
                <p>Una vez que el equipo de maniobras ha impregnado todo el material con suficiente diesel para asegurar una propagación total:</p>
                <ul>
                    <li><strong>La Línea de Vida:</strong> Se instalará una mecha lenta o un camino de pólvora de al menos <strong>5 metros</strong>. Si se prenden varias camas simultáneamente, añadiremos <strong>1 metro extra</strong> de mecha por cada cama adicional, dándonos un margen de seguridad más amplio.</li>
                    <li><strong>Retirada al Parapeto:</strong> Tras encender la mecha, el jefe de grupo y su equipo deben trasladarse de inmediato al <strong>parapeto de resguardo</strong>.</li>
                    <li><strong>Disciplina de Espera:</strong> Iniciada la deflagración, queda estrictamente prohibido acercarse al foso. Se debe permitir que el fuego consuma el material por completo y que el sitio se enfríe naturalmente.</li>
                </ul>

                <h4>IV. Control Final y Trámite informativo</h4>
                <p>Nuestra labor no termina cuando se apaga el fuego. La fase de cierre es igual de importante para la seguridad y la legalidad:</p>
                <ul>
                    <li><strong>Barrido de Seguridad:</strong> Se inspeccionarán los alrededores del foso para recoger cualquier resto que haya sido proyectado hacia afuera o que no se haya quemado totalmente, procediendo a su incineración inmediata.</li>
                    <li><strong>El Deber de Informar:</strong> Finalmente, se levantará el acta administrativa correspondiente. Este documento, acompañado de un informe gráfico (fotografías) y escrito, es el respaldo legal que certifica que el material fue destruido siguiendo los más altos estándares de seguridad y transparencia.</li>
                </ul>

                <div class="placeholder-box warning" style="height:auto; padding:15px; margin-top:20px; font-size:0.9rem; text-align:left;">
                    <i class="fa-solid fa-triangle-exclamation" style="display:block; font-size:2rem; margin-bottom:10px; text-align:center;"></i>
                    <strong style="display:block; margin-bottom:5px;">Reflexión de Seguridad:</strong>
                    En la destrucción de Categoría III, la paciencia es nuestra mejor herramienta. No fuerces los tiempos; deja que el fuego y el enfriamiento hagan su trabajo antes de iniciar el siguiente tendido.
                </div>
            `
        }
    },
    { 
        id: 4, 
        name: "Precauciones Crisantemos y Cohetones", 
        icon: "fa-solid fa-rocket",
        content: {
            seguridad: `
                <h3>Precauciones para Crisantemos</h3>
                <ul>
                    <li><strong>Inmersión profunda y prolongada:</strong> Debido a su grueso recubrimiento de cartón, asegúrate de que el diesel penetre totalmente hasta la carga central antes de intentar desorganizarlo.</li>
                    <li><strong>Cuidado con el núcleo expansivo:</strong> Al desarmarlo dentro de la cubeta, manipula con extrema suavidad el centro; la carga de apertura (burst charge) es mucho más sensible que las estrellas exteriores.</li>
                    <li><strong>Aseguramiento contra rodamiento:</strong> Por su forma esférica, colócalo en el foso de modo que quede perfectamente calzado en la cama de destrucción; un crisantemo que rueda puede proyectar fuego fuera del área de seguridad.</li>
                    <li><strong>Respeto estricto al límite de piezas:</strong> Nunca excedas las 5 unidades por tendido; la potencia de expansión de un solo crisantemo es masiva y multiplicar esa fuerza aumenta el riesgo de proyecciones a larga distancia.</li>
                    <li><strong>Vigilancia de estrellas remanentes:</strong> Tras la quema, verifica minuciosamente que no hayan quedado estrellas sin consumir ocultas en las cenizas, ya que pueden encenderse por fricción al recoger los escombros.</li>
                </ul>

                <h3>Precauciones para Cohetones</h3>
                <ul>
                    <li><strong>Retirada obligatoria de la vara:</strong> Antes de colocarlo en el foso, se debe separar la vara de madera del cuerpo del cohete para evitar que el artificio recupere estabilidad aerodinámica y salga proyectado si el motor se enciende.</li>
                    <li><strong>Desorganización del motor y el trueno:</strong> Al sumergirlo en diesel, es vital separar la sección del propulsor (pólvora negra) de la sección del "golpe" (pólvora blanca), ya que ambas reaccionan de forma distinta al fuego.</li>
                    <li><strong>Cuidado con la tobera de arcilla:</strong> No intentes perforar o golpear la base de arcilla del cuetón para vaciarlo; la fricción con el cartón seco puede generar suficiente calor para una ignición espontánea.</li>
                    <li><strong>Orientación en el tendido:</strong> Al colocar los cuerpos de los cuetones sobre la cama de destrucción, oriéntalos de modo que, en caso de activarse, apunten hacia las paredes del foso y no hacia la zona de los operarios o el parapeto.</li>
                    <li><strong>Control de la mecha externa:</strong> Asegúrate de que la mecha de encendido original del cohete quede impregnada de diesel o sea retirada, para evitar que una chispa errática inicie el ciclo de vuelo normal del artificio.</li>
                </ul>

                <h4 style="margin-top: 20px; margin-bottom: 10px;"><i class="fa-solid fa-cubes"></i> Modelos 3D Interactivos</h4>
                <div style="display: flex; flex-direction: column; gap: 15px; margin-bottom: 20px;">
                    <model-viewer 
                        src="crisantemo_chi.glb" 
                        alt="Modelo 3D de Crisantemo" 
                        auto-rotate 
                        camera-controls 
                        autoplay 
                        style="width: 100%; height: 250px; background-color: #1a1a1a; border-radius: 12px; border: 1px solid var(--border);">
                    </model-viewer>
                    
                    <model-viewer 
                        src="crisantemo_seccionado.glb" 
                        alt="Modelo 3D de Crisantemo Seccionado" 
                        auto-rotate 
                        camera-controls 
                        autoplay 
                        style="width: 100%; height: 250px; background-color: #1a1a1a; border-radius: 12px; border: 1px solid var(--border);">
                    </model-viewer>
                </div>
            `
        }
    },
    {
        id: 5,
        name: "Vestuario y Equipo de Protección",
        icon: "fa-solid fa-helmet-safety",
        content: {
            seguridad: `
                <div style="text-align: center;">
                    <h3>Vestuario y Equipo de Protección Personal</h3>
                    <p style="text-align: center;">Para la destrucción del material pirotécnico, se utilizará el siguiente vestuario como equipo de protección personal:</p>
                    
                    <h4>A. Vestuario</h4>
                    <ul style="list-style-type: none; padding: 0; text-align: center;">
                        <li style="margin-bottom: 10px;">• Por cada persona que intervenga en el manejo del material en la zona de destrucción, le corresponde un uniforme el cual consta de 2 piezas (pantalón y camisola sin bolsas), 100% de algodón con tratamiento retardante a la flama.</li>
                        <li>• Botas de seguridad sin elementos metálicos.</li>
                    </ul>

                    <h4>B. Equipo de Protección Personal (EPP)</h4>
                    <ul style="list-style-type: none; padding: 0; text-align: center;">
                        <li>• Casco tipo industrial con visera.</li>
                        <li>• Careta de policarbonato.</li>
                        <li>• Protectores auditivos (tapones desechables).</li>
                        <li>• Mascarilla antigases.</li>
                        <li>• Lentes de seguridad antiflama de policarbonato.</li>
                    </ul>

                    <h4 style="margin-top: 20px; margin-bottom: 10px;"><i class="fa-solid fa-images"></i> Galería de Equipo de Seguridad</h4>
                </div>
                <div class="image-carousel" style="margin-bottom: 20px;">
                    <figure class="carousel-item">
                        <img src="Camisola.jpeg" alt="Camisola">
                        <figcaption>Camisola</figcaption>
                    </figure>
                    <figure class="carousel-item">
                        <img src="Careta.jpeg" alt="Careta">
                        <figcaption>Careta</figcaption>
                    </figure>
                    <figure class="carousel-item">
                        <img src="Extintor.jpeg" alt="Extintor">
                        <figcaption>Extintor</figcaption>
                    </figure>
                    <figure class="carousel-item">
                        <img src="Gafas.jpeg" alt="Gafas">
                        <figcaption>Gafas</figcaption>
                    </figure>
                    <figure class="carousel-item">
                        <img src="Mascarilla.jpeg" alt="Mascarilla">
                        <figcaption>Mascarilla</figcaption>
                    </figure>
                    <figure class="carousel-item">
                        <img src="Tapones.jpeg" alt="Tapones">
                        <figcaption>Tapones</figcaption>
                    </figure>
                </div>
            `
        }
    }
];

document.addEventListener("DOMContentLoaded", () => {
    // 1. Inyectar categorías en la pantalla principal
    const grid = document.getElementById("categories-grid");
    
    categories.forEach(cat => {
        const item = document.createElement("div");
        item.className = "menu-item";
        item.innerHTML = `
            <i class="menu-item-icon ${cat.icon}"></i>
            <span>${cat.name}</span>
        `;
        
        item.addEventListener("click", () => openCategory(cat));
        grid.appendChild(item);
    });

    // 2. Navegación Principal
    const homeView = document.getElementById("home-view");
    const catView = document.getElementById("category-view");
    const evalView = document.getElementById("evaluacion-view");
    const recView = document.getElementById("recursos-view");
    
    const views = [homeView, catView, evalView, recView];
    
    const headerTitle = document.getElementById("header-title");
    const backBtn = document.getElementById("back-btn");

    function showView(viewToShow, title, showBack = true) {
        views.forEach(v => v.classList.remove("active-view"));
        viewToShow.classList.add("active-view");
        
        headerTitle.textContent = title;
        
        if(showBack) {
            backBtn.classList.remove("hidden");
        } else {
            backBtn.classList.add("hidden");
        }
    }

    backBtn.addEventListener("click", () => {
        showView(homeView, "Inicio", false);
    });

    document.getElementById("btn-evaluacion").addEventListener("click", () => {
        showView(evalView, "Evaluación", true);
    });

    document.getElementById("btn-recursos").addEventListener("click", () => {
        showView(recView, "Recursos Adicionales", true);
    });

    function openCategory(categoryObj) {
        // Actualizar título y placeholder
        document.getElementById("cat-title").textContent = categoryObj.name;
        document.getElementById("cat-img").innerHTML = `<i class="${categoryObj.icon}"></i>`;
        
        // Inyectar contenido dinámicamente si existe, ocultar pestañas vacías
        const tabIds = ["identificacion", "destruccion", "seguridad", "residuos"];
        let firstAvailableTab = null;
        let availableCount = 0;

        tabIds.forEach(tab => {
            const container = document.getElementById("tab-" + tab);
            const tabBtn = document.querySelector(`.tab-btn[data-target='tab-${tab}']`);
            
            if(categoryObj.content && categoryObj.content[tab]) {
                container.innerHTML = categoryObj.content[tab];
                if (tabBtn) tabBtn.style.display = "inline-block";
                if (!firstAvailableTab) firstAvailableTab = tab;
                availableCount++;
            } else {
                if (tabBtn) tabBtn.style.display = "none";
                container.innerHTML = "";
            }
        });
        
        // Ocultar el contenedor de pestañas si hay 1 o 0 opciones
        const tabsContainer = document.querySelector(".tabs-container");
        if (tabsContainer) {
            tabsContainer.style.display = availableCount <= 1 ? "none" : "flex";
        }
        
        // Si no hay ningún tab con contenido
        if (!firstAvailableTab) firstAvailableTab = "identificacion";
        
        // Reset tabs al primero disponible
        document.querySelectorAll(".tab-btn").forEach(btn => btn.classList.remove("active"));
        const activeBtn = document.querySelector(`.tab-btn[data-target='tab-${firstAvailableTab}']`);
        if (activeBtn) activeBtn.classList.add("active");
        
        document.querySelectorAll(".tab-pane").forEach(pane => pane.classList.remove("active"));
        const activePane = document.getElementById(`tab-${firstAvailableTab}`);
        if (activePane) activePane.classList.add("active");

        showView(catView, "Detalle", true);
    }

    // 3. Lógica de Pestañas (Tabs) dentro de Categoría
    const tabBtns = document.querySelectorAll(".tab-btn");
    tabBtns.forEach(btn => {
        btn.addEventListener("click", (e) => {
            // Quitar active de todos los btns
            tabBtns.forEach(b => b.classList.remove("active"));
            // Poner active al actual
            e.target.classList.add("active");

            // Ocultar todos los paneles
            document.querySelectorAll(".tab-pane").forEach(pane => pane.classList.remove("active"));
            
            // Mostrar panel target
            const targetId = e.target.getAttribute("data-target");
            document.getElementById(targetId).classList.add("active");
        });
    });
    // 4. Lógica de Instalación PWA
    let deferredPrompt;
    const installBtn = document.getElementById("install-btn");

    window.addEventListener('beforeinstallprompt', (e) => {
        // Prevenir que el navegador muestre automáticamente el prompt
        e.preventDefault();
        // Guardar el evento para dispararlo luego
        deferredPrompt = e;
        // Mostrar el botón de instalación
        if (installBtn) {
            installBtn.classList.remove("hidden");
        }
    });

    if (installBtn) {
        installBtn.addEventListener('click', async () => {
            if (deferredPrompt) {
                // Mostrar el prompt de instalación
                deferredPrompt.prompt();
                // Esperar a que el usuario responda
                const { outcome } = await deferredPrompt.userChoice;
                console.log(`User response to the install prompt: ${outcome}`);
                // Limpiar el prompt diferido
                deferredPrompt = null;
                // Ocultar el botón
                installBtn.classList.add("hidden");
            }
        });
    }

    window.addEventListener('appinstalled', () => {
        // Ocultar el botón si ya se instaló
        if (installBtn) {
            installBtn.classList.add("hidden");
        }
        console.log('PWA instalada correctamente');
    });
});
