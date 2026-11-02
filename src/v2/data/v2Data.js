import { companyInfo, tariffHistory, caseStudies } from '../../data/energreenData';

// Rutas de Cursos Formativos al estilo Aprende.org / Capacítate para el Empleo
export const v2Courses = [
  {
    id: 'curso-residencial',
    title: 'Instalador Fotovoltaico Residencial',
    category: 'Oficios Solares',
    level: 'Inicial a Intermedio',
    duration: '16 Lecciones • 20 Horas',
    iconColor: 'bg-amber-500',
    badgeColor: 'bg-amber-100 text-amber-900 border-amber-200',
    coverImage: 'https://images.unsplash.com/photo-1508873696983-2df5293cb395?auto=format&fit=crop&w=800&q=80',
    shortDesc: 'Aprende a diagnosticar techos en Montería, calcular paneles necesarios y ensamblar sistemas conectados a la red.',
    instructor: 'Oscar David Vega (Técnico Electrónico SENA)',
    modules: [
      {
        title: 'Módulo 1: Fundamentos de Energía Solar y Radiación en Córdoba',
        lessons: [
          { title: '1.1 Qué son las Horas Sol Pico (HSP) en el Caribe colombiano (5.3 HSP)', type: 'video', duration: '8 min' },
          { title: '1.2 Anatomía de un módulo monocristalino de alta eficiencia (550W+)', type: 'reading', duration: '6 min' },
          { title: '1.3 Cómo leer y auditar el historial de kWh en la factura de Afinia', type: 'practice', duration: '12 min' }
        ]
      },
      {
        title: 'Módulo 2: Inversores, Protecciones y Seguridad Eléctrica',
        lessons: [
          { title: '2.1 Inversores On-Grid vs Microinversores vs Sistemas Híbridos', type: 'video', duration: '10 min' },
          { title: '2.2 Cajas de protecciones DC/AC y descargadores de sobretensión (DPS)', type: 'reading', duration: '8 min' },
          { title: '2.3 Normas de seguridad en alturas y anclajes en techos de teja y losa', type: 'practice', duration: '15 min' }
        ]
      },
      {
        title: 'Módulo 3: Trámites CREG 174 y Conexión a la Red',
        lessons: [
          { title: '3.1 Requisitos para legalización ante Afinia como autogenerador AGPE', type: 'reading', duration: '10 min' },
          { title: '3.2 Instalación del medidor bidireccional y venta de excedentes', type: 'practice', duration: '14 min' }
        ]
      }
    ]
  },
  {
    id: 'curso-bombeo-agro',
    title: 'Sistemas de Bombeo Solar para el Campo y Ganadería',
    category: 'Agropecuario & Fincas',
    level: 'Técnico Especializado',
    duration: '12 Lecciones • 15 Horas',
    iconColor: 'bg-emerald-600',
    badgeColor: 'bg-emerald-100 text-emerald-900 border-emerald-200',
    coverImage: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80',
    shortDesc: 'Diseño e instalación de motobombas solares sumergibles para pozos profundos, represas y bebederos de ganado.',
    instructor: 'Samir Padilla (Especialista Agro-Solar EnerGreen)',
    modules: [
      {
        title: 'Módulo 1: Requerimientos Hídricos y Aforo de Pozos',
        lessons: [
          { title: '1.1 Cálculo de consumo diario en cabezas de ganado bovino (40-60 L/día)', type: 'video', duration: '7 min' },
          { title: '1.2 Medición de altura manométrica dinámica y distancia al reservorio', type: 'reading', duration: '9 min' }
        ]
      },
      {
        title: 'Módulo 2: Bombas Sumergibles Helicoidales vs Centrífugas',
        lessons: [
          { title: '2.1 Controladores MPPT para arranque suave sin picos de arranque', type: 'practice', duration: '12 min' },
          { title: '2.2 Comparativa de costos: Paneles Solares vs Planta Diésel a 5 años', type: 'reading', duration: '8 min' }
        ]
      }
    ]
  },
  {
    id: 'curso-retie',
    title: 'Normativa RETIE y Mantenimiento Electrónico',
    category: 'Certificación Técnica',
    level: 'Avanzado',
    duration: '14 Lecciones • 18 Horas',
    iconColor: 'bg-blue-600',
    badgeColor: 'bg-blue-100 text-blue-900 border-blue-200',
    coverImage: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
    shortDesc: 'Protocolos de certificación RETIE, medición de puesta a tierra, curvas I-V y mantenimiento preventivo.',
    instructor: 'Cristian Ospina (Técnico de Campo SENA)',
    modules: [
      {
        title: 'Módulo 1: Puesta a Tierra y Conexiones Equipotenciales',
        lessons: [
          { title: '1.1 Medición de resistividad con telurómetro en suelos de Córdoba', type: 'video', duration: '11 min' },
          { title: '1.2 Conexión de varillas de cobre y soldadura exotérmica', type: 'practice', duration: '14 min' }
        ]
      },
      {
        title: 'Módulo 2: Inspección y Diagnóstico con Cámaras Termográficas',
        lessons: [
          { title: '2.1 Detección de puntos calientes (hotspots) y diodos de bypass', type: 'reading', duration: '9 min' },
          { title: '2.2 Protocolo de limpieza sin daño a la capa antirreflectiva', type: 'practice', duration: '10 min' }
        ]
      }
    ]
  },
  {
    id: 'curso-finanzas',
    title: 'Financiación Brilla, Ley 1715 y Retorno de Inversión',
    category: 'Finanzas & Proyectos',
    level: 'General & Empresarial',
    duration: '8 Lecciones • 10 Horas',
    iconColor: 'bg-teal-600',
    badgeColor: 'bg-teal-100 text-teal-900 border-teal-200',
    coverImage: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80',
    shortDesc: 'Aprende a formular el proyecto financiero para financiar hasta el 100% del sistema solar en el recibo de gas.',
    instructor: 'Oscar David Vega (Gestor de Proyectos)',
    modules: [
      {
        title: 'Módulo 1: Mecanismo de Crédito Brilla de Surtigas',
        lessons: [
          { title: '1.1 Requisitos del titular de la factura de gas y montos disponibles', type: 'video', duration: '6 min' },
          { title: '1.2 Cómo la cuota mensual se paga con el ahorro de Afinia', type: 'practice', duration: '10 min' }
        ]
      },
      {
        title: 'Módulo 2: Beneficios Tributarios de la Ley 1715',
        lessons: [
          { title: '2.1 Deducción especial de hasta el 50% en el Impuesto de Renta', type: 'reading', duration: '8 min' },
          { title: '2.2 Exención de IVA (0%) y aranceles en equipos importados', type: 'reading', duration: '7 min' }
        ]
      }
    ]
  }
];

// Artículos de Revista / Blog tipo Tiendanube
export const v2Articles = [
  {
    id: 'guia-hogar-2026',
    title: 'Cómo reducir el 70% de tu recibo de luz en Montería con energía solar',
    category: 'Hogar & Ahorro',
    excerpt: 'En el Caribe el kWh supera los $1.065 COP. Descubre cuántos paneles caben en tu techo, cómo calcular tu consumo exacto y financiar con Brilla.',
    author: {
      name: 'Oscar David Vega',
      role: 'Técnico Electrónico SENA • Ficha 3065832',
      avatar: 'OV'
    },
    date: '28 Octubre 2026',
    readTime: '6 min de lectura',
    featured: true,
    views: '2.8k vistas',
    tags: ['Montería', 'Factura Afinia', 'Brilla Surtigas', 'Paneles Monocristalinos'],
    image: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=900&q=80',
    content: `
# Cómo reducir el 70% de tu recibo de luz en Montería con energía solar

En el departamento de Córdoba y gran parte del Caribe colombiano, las tarifas eléctricas han sido un dolor de cabeza permanente. Con valores que superan los **$1.065 COP por kilovatio-hora (kWh)** en estratos 3 a 5, un hogar promedio en Montería con 2 o 3 aires acondicionados tipo Split puede recibir facturas mensuales entre **$450.000 y $1.200.000 COP**.

### 1. La radiación solar en Córdoba: Nuestro mayor tesoro
Montería cuenta con un promedio de **5.3 Horas Sol Pico (HSP)** al día. Esto significa que cada metro cuadrado de tejado recibe suficiente energía fotónica para producir más de 1.450 kWh por kilovatio pico instalado al año.

### 2. ¿Cuántos paneles necesitas según tu factura mensual?
* **Factura de $350.000 COP/mes (aprox 320 kWh):** Requiere un sistema de **2.5 kWp** (unos 4 a 5 paneles monocristalinos de 550W). Ocupa 12 m² de techo.
* **Factura de $600.000 COP/mes (aprox 560 kWh):** Requiere un sistema de **4.4 kWp** (unos 8 paneles). Ocupa 20 m² de techo.
* **Factura de $1.200.000 COP/mes (aprox 1.100 kWh):** Requiere un sistema de **8.8 kWp** (unos 16 paneles). Ocupa 40 m² de techo.

### 3. Financiación inteligente con el programa Brilla
El mayor obstáculo solía ser la inversión inicial. Sin embargo, en Montería EnerGreen permite financiar el 100% de la instalación a través de tu cupo **Brilla de Surtigas**. La cuota mensual se amortiza automáticamente con lo que dejas de pagarle a Afinia cada mes.
    `
  },
  {
    id: 'bombeo-solar-ganaderia',
    title: 'Bombeo Solar en Fincas de Córdoba: Adiós al gasto en plantas de gasolina',
    category: 'Agro & Bombeo',
    excerpt: 'Guía práctica para extraer hasta 40.000 litros diarios de agua de pozos profundos usando motobombas sumergibles fotovoltaicas.',
    author: {
      name: 'Samir Padilla',
      role: 'Especialista en Sistemas Rurales',
      avatar: 'SP'
    },
    date: '25 Octubre 2026',
    readTime: '7 min de lectura',
    featured: false,
    views: '1.9k vistas',
    tags: ['Ganadería Córdoba', 'Pozos Profundos', 'Bomba Sumergible', 'Cero Diésel'],
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=900&q=80',
    content: `
# Bombeo Solar en Fincas de Córdoba: Cero ACPM y Agua Continua

Durante la temporada seca en el Valle del Sinú y las sabanas de Córdoba, mantener el agua para el ganado bovino es vital. El costo de operar una motobomba a diésel supera los $25.000 a $40.000 COP diarios en combustible.

### Ventajas del Bombeo Fotovoltaico Directo:
1. **Sin baterías costosas**: El sistema bombea directamente mientras hay luz solar hacia un reservorio elevado.
2. **Vida útil superior a 20 años**: Los paneles solares no tienen piezas móviles y resisten las altas temperaturas del trópico.
3. **Arranque suave MPPT**: Los controladores solares modernos regulan las RPM de la bomba para aprovechar incluso días con nubosidad leve.
    `
  },
  {
    id: 'guia-brilla-paso-a-paso',
    title: 'Crédito Brilla para Paneles Solares: Requisitos y cómo solicitarlo sin cuota inicial',
    category: 'Finanzas & Ahorro',
    excerpt: 'Paso a paso para usar tu recibo del gas como medio de pago para instalar energía solar en tu casa o negocio sin endeudarte con bancos.',
    author: {
      name: 'Oscar David Vega',
      role: 'Técnico Electrónico SENA • Ficha 3065832',
      avatar: 'OV'
    },
    date: '21 Octubre 2026',
    readTime: '5 min de lectura',
    featured: false,
    views: '3.1k vistas',
    tags: ['Crédito Brilla', 'Surtigas', 'Sin Cuota Inicial', 'Financiación'],
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=900&q=80',
    content: `
# Crédito Brilla para Paneles Solares: Guía Práctica

El crédito Brilla de Surtigas se ha convertido en el aliado financiero más accesible de las familias cordobesas. 

### ¿Quién puede aplicar?
* Titulares de la factura de gas con al menos 2 pagos puntuales consecutivos.
* No se requieren extractos bancarios ni codeudores con finca raíz.
* Plazos flexibles de hasta 60 meses.
    `
  },
  {
    id: 'retie-seguridad-instalacion',
    title: '¿Por qué la certificación RETIE es obligatoria en proyectos solares?',
    category: 'Normativa & RETIE',
    excerpt: 'Riesgos de contratar instaladores informales. Descubre qué protecciones DC/AC exige la ley colombiana para evitar incendios y daños.',
    author: {
      name: 'Cristian Ospina',
      role: 'Técnico de Campo SENA',
      avatar: 'CO'
    },
    date: '17 Octubre 2026',
    readTime: '6 min de lectura',
    featured: false,
    views: '1.4k vistas',
    tags: ['Seguridad Eléctrica', 'RETIE', 'Puesta a Tierra', 'CREG 174'],
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=900&q=80',
    content: `
# Normativa RETIE en Energía Solar: La Garantía de tu Inversión

Una instalación solar no es simplemente colocar paneles sobre un techo. Maneja voltajes en corriente continua (DC) que pueden superar los 600V a 1000V.

### Aspectos no negociables en EnerGreen:
* Sistema de puesta a tierra con resistencia inferior a 10 Ohmios.
* Supresores de sobretensión tipo DPS para proteger contra descargas atmosféricas.
* Microinversores o inversores certificados con apagado rápido anti-isla.
    `
  },
  {
    id: 'sena-innovacion-electronica',
    title: 'Proyecto Formativo SENA Montería: De la teoría a la empresa real',
    category: 'Capacitación & SENA',
    excerpt: 'Cómo la Ficha 3065832 dio origen a EnerGreen S.A.S. integrando mantenimiento electrónico y diseño de sistemas solares.',
    author: {
      name: 'Oscar David Vega',
      role: 'Técnico Electrónico SENA • Ficha 3065832',
      avatar: 'OV'
    },
    date: '10 Octubre 2026',
    readTime: '4 min de lectura',
    featured: false,
    views: '2.2k vistas',
    tags: ['SENA Montería', 'Ficha 3065832', 'Electrónica', 'Emprendimiento'],
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=80',
    content: `
# Innovación desde el SENA Regional Córdoba

EnerGreen nació como el proyecto formativo de la **Ficha 3065832** en Mantenimiento y Ensamble de Equipos Electrónicos.

Guiados por el instructor Jhonatan Marmol, el equipo integrado por Oscar David Vega, Samir Padilla y Cristian Ospina diseñó una solución integral que hoy ayuda a cientos de familias y productores agrícolas a tener autonomía energética.
    `
  },
  {
    id: 'ley-1715-tributaria',
    title: 'Ley 1715 y Ley 2099: Cómo descontar el 50% de tu instalación solar en la Renta',
    category: 'Finanzas & Ahorro',
    excerpt: 'Los incentivos tributarios en Colombia que convierten a la energía solar en la inversión más rentable para personas naturales y empresas.',
    author: {
      name: 'Oscar David Vega',
      role: 'Técnico Electrónico SENA',
      avatar: 'OV'
    },
    date: '05 Octubre 2026',
    readTime: '5 min de lectura',
    featured: false,
    views: '1.8k vistas',
    tags: ['Beneficios DIAN', 'Ley 1715', 'Cero Aranceles', 'Exención IVA'],
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80',
    content: `
# Beneficios Tributarios de la Ley 1715 en Colombia

El gobierno nacional otorga beneficios tributarios sin precedentes a quienes invierten en fuentes no convencionales de energía renovable (FNCER).

### Los 4 Grandes Beneficios:
1. **Deducción de Renta**: Puedes deducir hasta el 50% del valor total de la inversión en tu declaración de renta durante 15 años.
2. **Depreciación Acelerada**: Amortización contable de hasta el 33% anual.
3. **Exención de IVA**: Paneles solares, inversores y controladores están exentos de IVA (0%).
4. **Exención Arancelaria**: Equipos importados para energía solar no pagan aranceles de importación.
    `
  }
];

// Glosario Interactivo para el Laboratorio Virtual
export const v2Glossary = [
  { term: 'kWh (Kilovatio-Hora)', def: 'Unidad de medida con la que Afinia cobra la energía consumida durante el mes. En Montería supera los $1.065 COP.' },
  { term: 'HSP (Horas Sol Pico)', def: 'Cantidad equivalente de horas al día en que la radiación solar alcanza los 1.000 W/m². Córdoba goza de un excelente promedio de 5.3 HSP.' },
  { term: 'Inversor On-Grid', def: 'Equipo electrónico que convierte la corriente continua (DC) de los paneles en corriente alterna (AC) sincronizada con la red eléctrica.' },
  { term: 'Medidor Bidireccional', def: 'Contador digital que registra tanto la energía que consumes de la red como los excedentes que tus paneles le inyectan a Afinia.' },
  { term: 'Controlador MPPT', def: 'Algoritmo de seguimiento del punto de máxima potencia que optimiza el rendimiento del panel solar ante variaciones de temperatura y radiación.' },
  { term: 'RETIE', def: 'Reglamento Técnico de Instalaciones Eléctricas de Colombia, normatividad legal que garantiza la seguridad y previene incendios o choques eléctricos.' }
];


// Preguntas frecuentes sobre energía solar en Montería y Córdoba
export const v2FaqList = [
  {
    q: '¿Los paneles solares funcionan en días nublados o lluviosos en Montería?',
    a: 'Sí. Los paneles fotovoltaicos monocristalinos captan la radiación difusa incluso con cielo nublado, generando entre el 25% y 40% de su capacidad nominal. Además, la lluvia limpia naturalmente el polvo acumulado sobre el vidrio templado.'
  },
  {
    q: '¿Cómo funciona la financiación con Crédito Brilla de Surtigas?',
    a: 'Financiamos el 100% de los paneles, inversores y montaje a través del cupo de tu recibo del gas natural. No necesitas codeudores ni hipotecas; la cuota mensual se cobra en el mismo recibo de gas y se paga sola con el ahorro de energía que dejas de pagarle a Afinia.'
  },
  {
    q: '¿Afinia me descuenta los excedentes de energía que produzco?',
    a: 'Sí, bajo la regulación CREG 174 y Ley 1715. Al instalar un medidor bidireccional certificado por EnerGreen, toda la energía solar que no consumas durante el día se inyecta a la red de Afinia y se te acredita como saldo a favor en tus facturas siguientes.'
  },
  {
    q: '¿Qué mantenimiento requieren los paneles y cuál es su vida útil?',
    a: 'El mantenimiento es mínimo: lavado con agua y cepillo suave cada 2 a 3 meses para remover polvo. Los paneles solares tienen una garantía de rendimiento de 25 a 30 años con degradación inferior al 0.5% anual.'
  },
  {
    q: '¿Qué diferencia hay entre un técnico empírico y un egresado SENA certificado RETIE?',
    a: 'El cumplimiento estricto del RETIE (Reglamento Técnico de Instalaciones Eléctricas). Una instalación informal puede generar sobretensiones, incendios por arco eléctrico o el rechazo de conexión por parte del operador de red. En EnerGreen entregamos planos visados y memorias de cálculo avaladas por técnicos SENA de la Ficha 3065832.'
  }
];
