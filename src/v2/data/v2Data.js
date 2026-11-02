import { companyInfo, tariffHistory, caseStudies } from '../../data/energreenData';

export const v2LearningTracks = [
  {
    id: 'hogar',
    title: 'Ahorro Solar Residencial',
    subtitle: 'Para casas y apartamentos en Montería y Córdoba',
    icon: 'Sun',
    color: 'from-amber-500 to-orange-500',
    lightBg: 'bg-amber-50',
    border: 'border-amber-200',
    textColor: 'text-amber-800',
    badge: 'Hogares',
    modulesCount: 4,
    readTime: '15 min de aprendizaje',
    desc: 'Aprende cómo dimensionar un sistema solar para tu tejado, leer tu factura de Afinia y reducir hasta el 70% de tus cobros mensuales.'
  },
  {
    id: 'agro',
    title: 'Bombeo & Agro Ganadero',
    subtitle: 'Soluciones hídricas y energéticas para fincas',
    icon: 'Wheat',
    color: 'from-emerald-500 to-teal-600',
    lightBg: 'bg-emerald-50',
    border: 'border-emerald-200',
    textColor: 'text-emerald-800',
    badge: 'Agro & Fincas',
    modulesCount: 5,
    readTime: '20 min de aprendizaje',
    desc: 'Cómo extraer agua de pozos profundos y represas con bombas solares sumergibles sin gastar un solo galón de ACPM o gasolina.'
  },
  {
    id: 'finanzas',
    title: 'Financiación Brilla & Ley 1715',
    subtitle: '0% cuota inicial y beneficios tributarios',
    icon: 'Coins',
    color: 'from-teal-500 to-cyan-600',
    lightBg: 'bg-teal-50',
    border: 'border-teal-200',
    textColor: 'text-teal-800',
    badge: 'Finanzas',
    modulesCount: 3,
    readTime: '12 min de aprendizaje',
    desc: 'Descubre cómo pagar tus paneles solares mes a mes a través de tu factura de gas domiciliario con Brilla y deducir hasta 50% de renta.'
  },
  {
    id: 'retie',
    title: 'Seguridad & Normativa RETIE',
    subtitle: 'Ingeniería certificada y protección de equipos',
    icon: 'ShieldCheck',
    color: 'from-blue-600 to-indigo-600',
    lightBg: 'bg-blue-50',
    border: 'border-blue-200',
    textColor: 'text-blue-800',
    badge: 'Normativa',
    modulesCount: 4,
    readTime: '18 min de aprendizaje',
    desc: 'Requisitos técnicos, puestas a tierra, fusibles fotovoltaicos y trámites de conexión de excedentes ante el operador de red CREG.'
  },
  {
    id: 'sena',
    title: 'Capacitación Técnica SENA',
    subtitle: 'Formación profesional en electrónica solar',
    icon: 'GraduationCap',
    color: 'from-purple-600 to-pink-600',
    lightBg: 'bg-purple-50',
    border: 'border-purple-200',
    textColor: 'text-purple-800',
    badge: 'SENA 2025',
    modulesCount: 6,
    readTime: 'Certificación Técnica',
    desc: 'Plan curricular del Técnico en Mantenimiento y Ensamble de Equipos Electrónicos (Ficha 3065832) - SENA Montería.'
  }
];

export const v2Articles = [
  {
    id: 'guia-hogar-2026',
    trackId: 'hogar',
    category: 'Ahorro en el Hogar',
    title: 'Guía Completa: Cómo pasar tu casa a energía solar en Montería y reducir 70% de luz',
    excerpt: 'En Córdoba la tarifa por kWh supera los $1.065 COP. Esta guía práctica te enseña paso a paso cuántos paneles caben en tu techo, cómo calcular tu consumo y cuánto dinero te ahorras desde el primer mes.',
    readTime: '5 min de lectura',
    level: 'Nivel Principiante',
    author: {
      name: 'Oscar David Vega',
      role: 'Técnico Electrónico SENA • EnerGreen',
      avatar: 'OV'
    },
    date: 'Actualizado Noviembre 2026',
    image: '/assets/hero_solar_house-BvvwMY1C.jpg',
    featured: true,
    tags: ['#Montería', '#AhorroLuz', '#TejadosSolares', '#Brilla'],
    keyTakeaways: [
      'Una familia promedio en estrato 3 en Montería consume ~450 kWh ($480.000 COP/mes).',
      'Con un sistema de 6 paneles solares de 550W produces ~410 kWh al mes.',
      'Tu factura de energía se reduce a solo cargos fijos mínimos (~$120.000 COP).',
      'Financiable con Brilla Gases de Córdoba sin fiador ni codeudor.'
    ],
    fullContent: `
### 1. ¿Por qué la energía solar es tan rentable en Montería y Córdoba?
El departamento de Córdoba goza de una de las irradiancias solares más privilegiadas del mundo, con un promedio de **5.2 kWh por metro cuadrado al día** y más de 2.200 horas de sol intenso al año. Mientras en ciudades frías se necesitan más paneles para generar la misma potencia, en el Sinú cada metro cuadrado de tejado produce energía al máximo rendimiento.

### 2. Cómo interpretar tu recibo de luz (Afinia)
En tu recibo de energía debes buscar dos datos esenciales:
- **Consumo en kWh del mes:** Generalmente ubicado en el histórico de barras.
- **Costo unitario del kWh (CU):** En Montería oscila entre $1.020 y $1.085 COP por kWh para estratos residenciales y comerciales.

### 3. ¿Cuántos paneles necesita una casa promedio?
- **Casa pequeña (Consumo 250 - 350 kWh):** Requiere un sistema de 1.8 a 2.4 kWp (4 a 5 paneles de 550W). Ahorro estimado: ~$260.000 COP/mes.
- **Casa familiar mediana (Consumo 450 - 650 kWh):** Requiere un sistema de 3.3 a 4.4 kWp (6 a 8 paneles de 550W). Ahorro estimado: ~$480.000 COP/mes.
- **Casa con varios aires acondicionados (Consumo 800 - 1.500 kWh):** Requiere de 6.0 a 10.0 kWp (11 a 18 paneles). Ahorro estimado: ~$900.000+ COP/mes.

### 4. Retorno de inversión garantizado
Un sistema fotovoltaico residencial en Montería se amortiza entre **3.0 y 3.8 años**. Como la vida útil garantizada de los paneles es de **25 a 30 años**, disfrutas de más de 20 años de electricidad prácticamente gratuita.
    `
  },
  {
    id: 'bombeo-solar-fincas',
    trackId: 'agro',
    category: 'Agro & Bombeo',
    title: 'Bombeo Solar en Córdoba: Agua para tu ganado las 24 horas sin gastar combustible diésel',
    excerpt: 'Las plantas a diésel consumen millones de pesos mensuales en ACPM y mantenimiento mecánico. Descubre cómo las bombas solares sumergibles extraen agua de pozos profundos de forma 100% automática.',
    readTime: '4 min de lectura',
    level: 'Nivel Intermedio',
    author: {
      name: 'Samir Padilla',
      role: 'Especialista en Agro-Energía • EnerGreen',
      avatar: 'SP'
    },
    date: 'Noviembre 2026',
    image: '/assets/solar_pumping_cattle-DNjtT6wk.jpg',
    featured: false,
    tags: ['#Cereté', '#Ganadería', '#BombeoSolar', '#SinDiésel'],
    keyTakeaways: [
      'Elimina el 100% del gasto mensual en galones de ACPM y cambios de aceite.',
      'Bombas sumergibles en acero inoxidable para pozos de 30 a 120 metros de profundidad.',
      'Operación automática con sensores de nivel en pozo y flotador en reservorio.',
      'Ideal para hatos lecheros y de ceba en Cereté, Sahagún, Lorica y San Carlos.'
    ],
    fullContent: `
### El problema del bombeo convencional con motobombas a combustible
En las sabanas de Córdoba y los valles del Sinú y San Jorge, el acceso continuo al agua para el ganado es la mayor prioridad de un productor. Tradicionalmente se utilizan motobombas diésel o a gasolina, las cuales presentan severas desventajas:
- Gasto continuo de $1.200.000 a $3.500.000 COP mensuales en ACPM y traslados.
- Daños mecánicos recurrentes por calentamiento y fallas en carburadores o inyectores.
- Contaminación por derrames de hidrocarburos cerca de las fuentes de agua.

### Cómo funciona el bombeo solar fotovoltaico directo
1. **Generador Fotovoltaico:** Módulos solares montados en estructura metálica fija orientada al sur.
2. **Controlador / Variador Solar MPPT:** Convierte la corriente directa de los paneles en la frecuencia exacta que necesita la bomba, adaptándose automáticamente a la radiación disponible.
3. **Bomba Sumergible Helicoidal o Centrífuga:** Fabricada en acero inoxidable grado AISI 304/316, instalada en el fondo del pozo profundo.
4. **Almacenamiento en Altura:** El agua se bombea durante el día a tanques elevados o represas, permitiendo distribución por gravedad las 24 horas sin requerir costosas baterías.
    `
  },
  {
    id: 'convenio-brilla-paso-a-paso',
    trackId: 'finanzas',
    category: 'Financiación',
    title: 'Convenio Brilla Gases de Córdoba: Financia tus paneles solares con tu recibo de gas',
    excerpt: '¿No tienes el dinero de contado? Gracias al cupo Brilla de Surtigas / Gases de Córdoba puedes pagar tu sistema fotovoltaico en cuotas mensuales cómodas sin trámites bancarios ni fiador.',
    readTime: '3 min de lectura',
    level: 'Nivel Principiante',
    author: {
      name: 'Cristian Ospina',
      role: 'Asesor Técnico y Financiero • EnerGreen',
      avatar: 'CO'
    },
    date: 'Noviembre 2026',
    image: '/assets/monteria_solar_architecture-BbAW3uVf.jpg',
    featured: false,
    tags: ['#Brilla', '#GasesDeCordoba', '#SinCuotaInicial', '#Financiacion'],
    keyTakeaways: [
      'Aprobación rápida según el cupo asignado en tu factura de gas natural.',
      'Plazos flexibles desde 12 hasta 60 meses.',
      'La matemática mágica: Tu ahorro en energía cubre el valor de la cuota Brilla.',
      'Aplica para estratos 2, 3, 4, 5 y 6 en Montería y municipios cordobeses.'
    ],
    fullContent: `
### ¿Qué es el programa Brilla y cómo financia la energía solar?
Brilla es un crédito no bancario otorgado a través de la factura de gas natural domiciliario. Si eres usuario puntual de gas en Córdoba, cuentas con un cupo preaprobado que puede ser utilizado para adquirir bienes de mejora para el hogar y proyectos solares.

### El principio de la autofinanciación solar
El mayor atractivo de financiar con Brilla es que **el sistema se paga con su propio ahorro**:
- Supongamos que pagas $550.000 COP al mes de luz.
- Con EnerGreen instalas paneles solares y tu factura de luz baja a $140.000 COP (ahorro de $410.000 COP/mes).
- Tu cuota de financiación Brilla queda en ~$320.000 COP/mes.
- **Resultado:** ¡Pagas la cuota del sistema solar y todavía te sobran $90.000 COP libres en tu bolsillo cada mes!
    `
  },
  {
    id: 'normativa-retie-seguridad',
    trackId: 'retie',
    category: 'Seguridad & RETIE',
    title: 'Por qué la certificación RETIE es obligatoria en instalaciones solares y cómo protege tu predio',
    excerpt: 'Instalar paneles sin normas técnicas puede causar incendios por arcos eléctricos de corriente continua o daños en aires acondicionados. Conoce las normas RETIE y CREG 174.',
    readTime: '4 min de lectura',
    level: 'Nivel Avanzado',
    author: {
      name: 'Jhonatan Javier Marmol',
      role: 'Ingeniero Instructor SENA • Especialista RETIE',
      avatar: 'JM'
    },
    date: 'Noviembre 2026',
    image: '/assets/solar_tech_installation-DCTx-Gbx.jpg',
    featured: false,
    tags: ['#RETIE', '#Seguridad', '#CREG', '#IngenieriaSENA'],
    keyTakeaways: [
      'Cumplimiento estricto del Reglamento Técnico de Instalaciones Eléctricas (RETIE).',
      'Protecciones contra sobretensiones transitorias (DPS) para rayos en el Caribe.',
      'Cálculo de mallas de puesta a tierra con telurómetro digital certificado.',
      'Legalización del trámite de venta de excedentes de energía ante Afinia / CREG.'
    ],
    fullContent: `
### La corriente continua (DC) en sistemas fotovoltaicos
Los paneles solares generan electricidad en Corriente Continua (DC) a voltajes que pueden superar los 400 a 800 Voltios. A diferencia de la corriente alterna doméstica, un arco eléctrico en DC no se extingue por sí solo al pasar por cero, lo que representa un riesgo crítico de fuego si no se usan:
- Cables solares con doble aislamiento resistente a rayos UV e intemperie (H1Z2Z2-K).
- Conectores MC4 originales debidamente crimpados con herramienta de torque calibrada.
- Seccionadores bajo carga e interruptores termomagnéticos exclusivos para corriente continua.

### El trámite de conexión y venta de excedentes (Resolución CREG 174)
Cuando tu tejado produce más energía de la que consumes al mediodía, esa energía limpia se inyecta a la red eléctrica de Afinia. Con el medidor bidireccional certificado por EnerGreen, el operador de red te descuenta esa energía en tu siguiente factura.
    `
  },
  {
    id: 'comercio-hoteles-caribe',
    trackId: 'hogar',
    category: 'Comercio & Hoteles',
    title: 'Caso de Estudio: Cómo un Hotel Boutique en San Antero redujo $5.800.000 mensuales en aire acondicionado',
    excerpt: 'Los hoteles y restaurantes en las costas de Córdoba sufren altísimos costos por climatización. Este proyecto de 35 kWp logró amortización en 3.1 años y cero quejas por bajones de luz.',
    readTime: '4 min de lectura',
    level: 'Nivel Intermedio',
    author: {
      name: 'Oscar David Vega',
      role: 'Co-Fundador EnerGreen',
      avatar: 'OV'
    },
    date: 'Octubre 2026',
    image: '/assets/commercial_solar_caribe-dMh8o74J.jpg',
    featured: false,
    tags: ['#SanAntero', '#Hoteles', '#Climatizacion', '#RetornoInversion'],
    keyTakeaways: [
      'Sistema On-Grid de 35 kWp con 64 paneles de alta eficiencia.',
      'Ahorro verificado de $5.800.000 COP al mes.',
      '41.5 toneladas de CO₂ evitadas cada año.',
      'Deducción de hasta el 50% de la inversión en el impuesto de renta (Ley 1715).'
    ],
    fullContent: `
### El reto en el sector hotelero costero
El Hotel Boutique Sol & Mar en San Antero enfrentaba recibos de energía que superaban los $8.000.000 COP al mes debido a 22 habitaciones con aire acondicionado inverter, zona húmeda de piscinas y cocina industrial.

### La solución de ingeniería ENERGREEN
- Diseño e instalación de 64 paneles monocristalinos de 550W en cubierta metálica.
- Inversor trifásico inteligente de 30 kW con monitoreo IoT en la nube.
- Banco de protección contra descargas atmosféricas y ambiente salino.
- Tramitación de certificación RETIE y registro UPME para acogerse a los beneficios de la Ley 1715 de 2014.
    `
  },
  {
    id: 'capacitacion-sena-monteria',
    trackId: 'sena',
    category: 'Educación & SENA',
    title: 'Proyecto Técnico SENA 2025: Innovación en electrónica solar desde el corazón de Córdoba',
    excerpt: 'Conoce los fundamentos pedagógicos y tecnológicos del programa Técnico en Mantenimiento y Ensamble de Equipos Electrónicos (Ficha 3065832) que dieron origen a EnerGreen.',
    readTime: '5 min de lectura',
    level: 'Nivel Formativo',
    author: {
      name: 'Equipo Técnico EnerGreen',
      role: 'SENA Regional Córdoba',
      avatar: 'SENA'
    },
    date: 'Noviembre 2026',
    image: '/assets/monteria_solar_architecture-BbAW3uVf.jpg',
    featured: false,
    tags: ['#SENA', '#Ficha3065832', '#Montería', '#TalentoLocal'],
    keyTakeaways: [
      'Desarrollado en el Centro de Comercio, Industria y Turismo de Córdoba - Montería.',
      'Más de 40 herramientas físicas y tecnológicas empleadas en el proyecto.',
      'Enfoque en Objetivos de Desarrollo Sostenible (ODS 7, 11 y 13).',
      'Formación integral orientada al mercado laboral de la transición energética.'
    ],
    fullContent: `
### El origen institucional de EnerGreen
EnerGreen nació en las aulas y laboratorios del SENA Regional Córdoba en Montería, bajo el programa de formación profesional **Técnico en Mantenimiento y Ensamble de Equipos Electrónicos (Ficha: 3065832)**.

Bajo la instrucción del docente **Jhonatan Javier Marmol**, los aprendices e investigadores **Oscar David Vega, Samir Padilla y Cristian Ospina** estructuraron un proyecto integral que combina:
- Diagnóstico técnico de pérdidas y curvas I-V en celdas solares.
- Ensamble de inversores y controladores con telemetría IoT.
- Viabilidad financiera y modelos de negocio inclusivos para estratos populares y ganaderos.
    `
  }
];

export const v2FaqList = [
  {
    q: '¿Qué pasa los días nublados o lluviosos en Montería?',
    a: 'Los paneles solares fotovoltaicos funcionan con radiación solar (luz visible e infrarroja), no con calor directo. En días nublados siguen generando entre un 25% y 40% de su potencia nominal gracias a la radiación difusa. Y si tienes sistema On-Grid, la red eléctrica convencional respalda instantáneamente sin que notes ningún parpadeo.'
  },
  {
    q: '¿Cuánto tiempo dura una instalación solar y qué mantenimiento requiere?',
    a: 'Los paneles solares Tier-1 tienen una vida útil garantizada de 25 a 30 años con degradación mínima (<0.5% anual). El mantenimiento principal es muy sencillo: lavar el polvo de los paneles con agua limpia cada 2 o 3 meses y una inspección eléctrica anual de apriete de bornes y revisión termográfica.'
  },
  {
    q: '¿Cómo funciona la venta de excedentes de energía con Afinia?',
    a: 'Bajo la regulación CREG 174, cuando tus paneles producen más energía de la que consumes (por ejemplo, entre 11:00 AM y 2:00 PM cuando no estás en casa), esa energía se inyecta a la red de Afinia. Tu medidor bidireccional la registra y Afinia te descuenta esos kilovatios de tu consumo nocturno.'
  },
  {
    q: '¿Puedo independizarme totalmente de la red eléctrica?',
    a: 'Sí, mediante un sistema Off-Grid (Aislado) o Híbrido con baterías de litio LiFePO4. Es la solución ideal para fincas en zonas rurales (ZNI) en Tierralta, San Carlos o Ayapel donde no llega el tendido eléctrico o los cortes son muy frecuentes.'
  }
];
