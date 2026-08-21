export const companyInfo = {
  name: "ENERGREEN",
  slogan: "Energía limpia para un futuro brillante",
  institution: "SERVICIO NACIONAL DE APRENDIZAJE - SENA",
  program: "Técnico en Mantenimiento y Ensamble de Equipos Electrónicos",
  ficha: "3065832",
  city: "Montería, Córdoba",
  region: "Región Caribe, Colombia",
  year: "2025",
  instructor: "Jhonatan Javier Marmol",
  founders: [
    { name: "Oscar David Vega", role: "Co-Fundador & Especialista Técnico" },
    { name: "Samir Padilla", role: "Co-Fundador & Especialista Técnico" },
    { name: "Cristian Ospina", role: "Co-Fundador & Especialista Técnico" },
  ],
  contact: {
    phone: "+57 300 123 4567",
    whatsapp: "573001234567",
    email: "contacto@energreen.com.co",
    address: "Calle 29 # 4-50, Montería, Córdoba - Colombia",
    hours: "Lunes a Sábado: 7:30 AM - 6:00 PM"
  },
  mission: "Brindar soluciones solares sostenibles mediante la instalación y mantenimiento de sistemas fotovoltaicos en Montería, Córdoba y la región Caribe, contribuyendo a reducir costos energéticos, proteger el medio ambiente y fomentar el desarrollo local.",
  vision: "Consolidarse para el año 2030 como la empresa líder en soluciones fotovoltaicas en Montería, Córdoba y la región Caribe, reconocida por su innovación, compromiso ambiental y aporte al desarrollo sostenible.",
  values: [
    {
      title: "Compromiso Ambiental",
      icon: "Leaf",
      desc: "Promovemos el ecodiseño, reducción de la huella de carbono y transición hacia energías renovables no contaminantes."
    },
    {
      title: "Innovación Tecnológica",
      icon: "Cpu",
      desc: "Implementamos software solar (PVsyst, Helioscope), monitoreo IoT en tiempo real y componentes de última generación certificados."
    },
    {
      title: "Transparencia y Honestidad",
      icon: "ShieldCheck",
      desc: "Presupuestos claros, contratos sin letra pequeña, cumplimiento normativo RETIE/RETILAP y garantía posventa real."
    },
    {
      title: "Inclusión Social y Equidad",
      icon: "Users",
      desc: "Energía solar accesible para estratos 2 al 6, electrificación en zonas no interconectadas (ZNI) y esquemas flexibles como el programa Brilla."
    },
    {
      title: "Calidad y Excelencia",
      icon: "Award",
      desc: "Equipos con certificaciones internacionales (IEC 61215/61730), protocolos rigurosos de seguridad SST y personal altamente cualificado."
    },
    {
      title: "Orientación al Cliente",
      icon: "HeartHandshake",
      desc: "Modelo mixto de atención presencial en Córdoba y soporte digital ágil 24/7 con atención personalizada de principio a fin."
    }
  ],
  ods: [
    { number: 7, name: "Energía Asequible y No Contaminante", desc: "Democratizamos el acceso a sistemas fotovoltaicos eficientes en toda la costa." },
    { number: 11, name: "Ciudades y Comunidades Sostenibles", desc: "Desarrollamos infraestructura energética limpia urbana y rural en Córdoba." },
    { number: 13, name: "Acción por el Clima", desc: "Mitigamos toneladas de emisiones de CO2 sustituyendo combustibles fósiles." }
  ]
};

// Histórico de Tarifas Costa Caribe & Montería (Extraído del estudio de mercado del proyecto)
export const tariffHistory = [
  { year: 2019, monteria: 540, caribe: 520 },
  { year: 2020, monteria: 565, caribe: 545 },
  { year: 2021, monteria: 590, caribe: 570 },
  { year: 2022, monteria: 620, caribe: 605 },
  { year: 2023, monteria: 660, caribe: 640 },
  { year: 2024, monteria: 1065, caribe: 993 }
];

// Precios de referencia oficiales del proyecto
export const referencePricing = [
  {
    type: "Residencial (Estratos 2-6)",
    capacity: "3 a 5 kWp",
    approxCost: "$10 - $25 Millones COP",
    savings: "Hasta 70% en factura",
    idealFor: "Casas urbanas, conjuntos residenciales, fincas de descanso",
    roi: "3.2 a 4.5 años",
    popular: true
  },
  {
    type: "Comercial & Servicios",
    capacity: "15 a 30 kWp",
    approxCost: "$50 - $120 Millones COP",
    savings: "Hasta 75% en costo operativo",
    idealFor: "Hoteles, clínicas, colegios privados, restaurantes, locales",
    roi: "2.8 a 3.8 años",
    popular: false
  },
  {
    type: "Industrial & Agropecuario",
    capacity: "50 a 100+ kWp",
    approxCost: "$150 - $300+ Millones COP",
    savings: "Hasta 80% + Beneficios Ley 1715",
    idealFor: "Hatos ganaderos, arroceras en Lorica, palma en Valencia, procesadoras",
    roi: "2.5 a 3.5 años",
    popular: false
  }
];

// Portafolio de Productos
export const productsCatalog = [
  {
    id: "paneles-solares",
    title: "Paneles Solares Fotovoltaicos",
    category: "Equipos Principales",
    tag: "Alta Eficiencia 18% - 23%",
    description: "Módulos monocristalinos y policristalinos Tier-1 de última generación con recubrimiento anti-reflectivo y protección UV para el clima cálido del Caribe.",
    specs: ["Certificaciones IEC 61215 e IEC 61730", "Garantía de potencia de hasta 25 años", "Tolerancia positiva de potencia", "Resistencia a vientos y ambiente costero"],
    image: "solar-panels"
  },
  {
    id: "inversores-solares",
    title: "Inversores Solares Inteligentes",
    category: "Equipos Principales",
    tag: "On-Grid / Off-Grid / Híbridos",
    description: "Convertidores de alta eficiencia con tecnología MPPT avanzada, conectividad Wi-Fi/4G integrada y compatibilidad para inyección a red o baterías.",
    specs: ["Eficiencia de conversión > 98.4%", "Monitoreo remoto mediante app móvil", "Protección contra sobretensiones y aislamiento", "Soporte para sistemas híbridos con acumulación"],
    image: "inverters"
  },
  {
    id: "baterias-almacenamiento",
    title: "Baterías de Almacenamiento",
    category: "Equipos Principales",
    tag: "Litio LiFePO4 & Ciclo Profundo",
    description: "Sistemas de almacenamiento para continuidad energética ininterrumpida ante apagones de red o proyectos autónomos en zonas rurales.",
    specs: ["Baterías de Litio con más de 6,000 ciclos", "Baterías de Plomo-Ácido económicas", "Gestión inteligente BMS incorporada", "Descarga profunda hasta 90% DOD"],
    image: "batteries"
  },
  {
    id: "estructuras-soporte",
    title: "Estructuras de Montaje Anticorrosión",
    category: "Equipos Principales",
    tag: "Aluminio Anodizado & Acero Galvanizado",
    description: "Soportes certificados para techos inclinados, cubiertas planas o suelo, diseñados para resistir la alta humedad y vientos de la Costa Caribe.",
    specs: ["Aluminio estructural AL6005-T5", "Tornillería en acero inoxidable SUS304", "Inclinación optimizada según latitud de Córdoba", "Fácil anclaje sin comprometer impermeabilización"],
    image: "structures"
  },
  {
    id: "bombeo-solar",
    title: "Sistemas de Bombeo Solar para Riego y Ganadería",
    category: "Soluciones Agropecuarias",
    tag: "Ideal para Campo Cordobés",
    description: "Solución definitiva para suministro hídrico en hatos ganaderos, cultivos de arroz, palma y pastos sin depender de combustible ni red eléctrica.",
    specs: ["Bombas sumergibles y de superficie solares", "Controlador con variador de frecuencia solar", "Cero consumo de combustible diésel", "Operación automática con sensor de pozo y tanque"],
    image: "pumping"
  },
  {
    id: "kits-rurales-portatiles",
    title: "Kits Solares Portátiles & ZNI",
    category: "Soluciones Rurales",
    tag: "Zonas No Interconectadas",
    description: "Kits compactos para electrificación rápida de viviendas rurales, campamentos y fincas en Tierralta, Planeta Rica y zonas apartadas.",
    specs: ["Generación plug & play con salidas AC/DC y USB", "Iluminación LED incluida", "Carga para electrodomésticos esenciales y refrigeración", "Portátil y de fácil instalación comunitaria"],
    image: "rural-kits"
  },
  {
    id: "iluminacion-led-solar",
    title: "Luminarias Solares Autónomas",
    category: "Accesorios",
    tag: "Alumbrado Eficiente",
    description: "Farolas y reflectores solares todo-en-uno con sensor de movimiento, panel integrado y batería para parques, parqueaderos y perímetros.",
    specs: ["Autonomía de 2 a 3 noches continuas", "Protección IP65/IP67 intemperie", "Normativa RETILAP en Colombia", "Encendido crepuscular automático"],
    image: "lighting"
  }
];

// Portafolio de Servicios
export const servicesCatalog = [
  {
    id: "diseno-e-instalacion",
    title: "Ingeniería, Diseño & Instalación Certificada",
    type: "Servicio Principal",
    icon: "Wrench",
    desc: "Proyectos llave en mano con estudios técnicos detallados (PVsyst, Helioscope), planos RETIE en AutoCAD, montaje con técnicos certificados y puesta en marcha garantizada.",
    highlights: ["Diagnóstico inicial de consumo sin costo", "Dimensionamiento según irradiancia de Montería", "Instalación bajo normas RETIE y RETILAP", "Trámite de conexión ante operadores de red"]
  },
  {
    id: "mantenimiento-limpieza",
    title: "Mantenimiento Preventivo & Correctivo",
    type: "Servicio Principal",
    icon: "ShieldAlert",
    desc: "Limpieza profesional de paneles con kits especializados para remover polvo y arena de la región Caribe, termografía con drones, reapriete y diagnóstico de curvas I-V.",
    highlights: ["Inspección termográfica para puntos calientes", "Kits de microfibra y agua desmineralizada a presión", "Verificación de aislamiento y puesta a tierra", "Recuperación de hasta un 25% de eficiencia perdida"]
  },
  {
    id: "reparacion-electronica",
    title: "Reparación Especializada de Componentes",
    type: "Servicio Técnico SENA",
    icon: "Settings",
    desc: "Diagnóstico a nivel de tarjeta electrónica y reparación de inversores, controladores de carga MPPT y sistemas de respaldo con técnicos electrónicos del SENA.",
    highlights: ["Soporte multimarca en inversores", "Revisión de etapas de potencia y rectificación", "Pruebas de carga en laboratorio local", "Disponibilidad rápida de repuestos"]
  },
  {
    id: "monitoreo-remoto-iot",
    title: "Monitoreo Remoto Inteligente (IoT 24/7)",
    type: "Valor Agregado",
    icon: "Activity",
    desc: "Supervisión en tiempo real de la producción solar, consumos del inmueble, estado de baterías y alertas automáticas de anomalías desde tu smartphone.",
    highlights: ["Dashboard en vivo accesible desde cualquier lugar", "Detección temprana de sombreados o fallas", "Métricas de ahorro monetario acumulado", "Reportes mensuales automáticos de rendimiento"]
  },
  {
    id: "asesoria-financiera",
    title: "Asesoría Financiera & Gestión de Incentivos",
    type: "Valor Agregado",
    icon: "Coins",
    desc: "Estructuración de opciones de pago a la medida con aliados locales (Programa Brilla, Bancolombia, Banco Agrario) y gestión de beneficios de la Ley 1715.",
    highlights: ["Cuotas diferidas a través de la factura de gas (Brilla)", "Tasas preferenciales de créditos verdes", "Deducción del 50% de renta (Ley 1715)", "Cero IVA y aranceles en equipos importados"]
  }
];

// Casos de éxito y proyectos demostrativos en Córdoba
export const caseStudies = [
  {
    title: "Finca Ganadera 'El Edén' - Cereté, Córdoba",
    category: "Bombeo Solar & Ordeño",
    capacity: "12 kWp Bombeo + Respaldo",
    results: {
      savingsPercent: "100% de gasto en diésel",
      monthlySaved: "$3.400.000 COP",
      panelsCount: 24,
      co2Reduced: "14.2 Ton/año"
    },
    quote: "Pasamos de gastar millones en ACPM y mantenimiento de plantas a tener agua constante para el ganado las 24 horas y enfriamiento de leche sin cortes.",
    client: "Carlos Méndez - Productor Ganadero"
  },
  {
    title: "Vivienda Familiar Estrato 4 - Barrio La Castellana, Montería",
    category: "Residencial On-Grid",
    capacity: "5.5 kWp Interconectado",
    results: {
      savingsPercent: "72% en factura Afinia",
      monthlySaved: "$850.000 COP",
      panelsCount: 10,
      co2Reduced: "6.8 Ton/año"
    },
    quote: "La factura nos llegaba por más de 1.1 millones por los aires acondicionados. Hoy pagamos solo el cargo mínimo y la inversión se paga sola con el crédito Brilla.",
    client: "Familia Ospina Ramos"
  },
  {
    title: "Hotel Boutique Caribe - San Antero / Lorica",
    category: "Comercial Híbrido",
    capacity: "35 kWp con Banco de Litio",
    results: {
      savingsPercent: "68% consumo global",
      monthlySaved: "$5.800.000 COP",
      panelsCount: 68,
      co2Reduced: "41.5 Ton/año"
    },
    quote: "Los turistas valoran enormemente el sello ecológico y nosotros nos olvidamos de las fallas de energía que tanto afectaban el servicio de habitaciones.",
    client: "Gerencia Hotelera San Antero"
  }
];

// 20 Recursos Físicos del proyecto SENA
export const physicalResources = [
  "Multímetro digital profesional",
  "Pinza amperimétrica de precisión",
  "Telurímetro para puesta a tierra (RETIE)",
  "Detector de tensión sin contacto",
  "Juego de llaves combinadas y ajustables",
  "Taladro percutor eléctrico con baterías",
  "Atornillador eléctrico inalámbrico",
  "Escalera extensible de aluminio anticorrosivo",
  "Arnés de seguridad y líneas de vida en altura",
  "Cascos, guantes dieléctricos y botas de seguridad",
  "Kit de herramientas aisladas para trabajos con tensión",
  "Prensa terminales y crimpeadora para conectores MC4",
  "Juego de destornilladores de precisión electrónica",
  "Sierra circular y esmeril angular para corte",
  "Malacate manual y polipasto portátil para izado",
  "Generador eléctrico portátil para zonas rurales ZNI",
  "Equipo de soldadura inverter para estructuras",
  "Computador portátil de ingeniería de campo",
  "Kit de limpieza profesional para paneles solares (agua a presión y microfibra)",
  "Vehículo utilitario tipo furgoneta para logística regional"
];

// 20 Recursos Tecnológicos del proyecto SENA
export const techResources = [
  "Software de simulación solar (PVsyst / Helioscope)",
  "Software de diseño eléctrico (AutoCAD Electrical - RETIE)",
  "Plataforma de monitoreo remoto IoT en tiempo real",
  "ERP para gestión de inventarios y contabilidad",
  "CRM de relación y seguimiento a clientes",
  "Plataforma de facturación electrónica DIAN",
  "Aplicación móvil de soporte y gestión al cliente",
  "Infraestructura de almacenamiento Cloud Computing",
  "Herramientas de comunicación digital (Teams, Zoom, Meet)",
  "Software de diseño gráfico institucional (Illustrator)",
  "Modelos de análisis financiero y retorno de inversión en Power BI",
  "Sistemas de ciberseguridad y protección de datos",
  "Portal web corporativo optimizado con cotizador online",
  "Plataformas de pauta digital (Google Ads & Meta Suite)",
  "Sistemas de georreferenciación y rutas satelitales (GIS)",
  "Gestores de proyectos y flujos de trabajo (Trello/Asana)",
  "Plataforma virtual de capacitación continua técnica",
  "Drones con cámara termográfica para inspección de módulos",
  "Sensores inteligentes de radiación solar e irradiancia",
  "Sistemas de respaldo UPS para continuidad de servidores"
];

// Organigrama del talento humano (13 colaboradores)
export const teamStructure = [
  { area: "Dirección General", role: "Gerente General", qty: 1, profile: "Profesional en ingeniería/administración con visión de sostenibilidad" },
  { area: "Administrativa y Financiera", role: "Administrador & Auxiliar Contable", qty: 2, profile: "Especialistas en compras, finanzas y convenios de crédito" },
  { area: "Técnica y Operativa", role: "Ing. Eléctrico, Ing. Electrónico y 4 Técnicos", qty: 6, profile: "Instalación certificada RETIE, diseño y mantenimiento fotovoltaico" },
  { area: "Comercial y Mercadeo", role: "Coordinador de Mercadeo & 2 Asesores", qty: 3, profile: "Captación de clientes, asesoría técnica y relacionamiento regional" },
  { area: "Soporte y Sostenibilidad", role: "Responsable de Soporte & Gestión Ambiental", qty: 1, profile: "Atención posventa, capacitación y seguimiento de huella ecológica" }
];
