# Estrategia de Calidad desde la Perspectiva del Proveedor

> **Fuente primaria:** [FITZ] §3.1 (pp. 23-29)
> **Fuente secundaria:** [BED] §2 (mejora de procesos)

## 1. Las dos dimensiones estratégicas del proveedor

Fitzpatrick señala que los desarrolladores de software deben considerar la calidad desde **dos puntos de vista** distintos [FITZ]:

| Dimensión | Descripción |
|-----------|-------------|
| **Producto genérico (off-the-shelf)** | Desarrollo de productos para la venta en el mercado (High Street). Implica estrategias de marketing y posicionamiento. |
| **Producto a medida (bespoke)** | Desarrollo por contrato para un cliente específico. Implica gestión de calidad, certificación y estimación de costos. |

---

## 2. Marketing estratégico y posicionamiento de calidad

### 2.1. El modelo de estrategia genérica de Porter (1980)

Fitzpatrick introduce el modelo de **Porter** como marco para que los proveedores de software mapeen su estrategia de calidad [FITZ]:

| Estrategia | Descripción | Rol de la calidad |
|------------|-------------|-------------------|
| **Diferenciación de producto (Product Differentiation)** | "Ganar clientes ofreciendo productos o servicios **'mejores'** que los de la competencia." | La calidad es el principal diferenciador. |
| **Liderazgo general en costos (Overall Cost Leadership)** | "Ganar clientes sobre la base del costo, para un **nivel dado de calidad y servicio**." | La calidad es un umbral mínimo; la competencia es por precio. |
| **Enfoque/Nicho (Focus/Niche)** | "Atacar partes particulares del mercado (ciertos grupos de clientes o áreas regionales). Dentro del nicho, la competencia es por bajo costo o diferenciación." | La calidad se define específicamente para las necesidades del nicho. |

### 2.2. La centralidad de la calidad en la diferenciación

Fitzpatrick cita a **Hooley y Saunders (1993)** para enfatizar la importancia de la calidad como estrategia de diferenciación [FITZ]:

> *"Un factor primordial para diferenciar el producto o servicio del de los competidores es la calidad."*
>
> *"De importancia central es la **percepción del consumidor sobre la calidad**, que puede no ser la misma que la del fabricante."*

**Evidencia empírica (Buzzell y Gale, 1987, citado por Fitzpatrick):**

> *"La calidad percibida relativa (juicios del cliente sobre la calidad de la oferta del proveedor en relación con sus competidores) fue **el factor individual más importante** que afecta el rendimiento a largo plazo de un negocio. Se demostró que la calidad tiene un **mayor impacto en el ROI** y es más efectiva para **ganar participación de mercado** que los precios más bajos."*

### 2.3. Las tres preguntas estratégicas (Robson, 1994)

Fitzpatrick, citando a Robson, propone un proceso de tres pasos para implementar la estrategia genérica de Porter [FITZ]:

| Pregunta | Descripción | Alternativas |
|----------|-------------|--------------|
| **1. ¿Sobre qué base?** (What basis?) | Elegir la estrategia competitiva alternativa. | Diferenciación, liderazgo en costos, enfoque/niche. |
| **2. ¿En qué dirección?** (Which direction?) | Decidir el movimiento estratégico. | Do nothing, withdrawal, consolidation, market penetration, product development, market development, diversification. |
| **3. ¿Cómo?** (How?) | Determinar cómo se incorpora la calidad en los planes. | Para **consolidation** y **market penetration**, Robson indica que se logran "aumentando la calidad". |

### 2.4. Ejemplos concretos de estrategias de calidad en el mercado (Fitzpatrick)

| Estrategia | Ejemplo | Características de calidad |
|------------|---------|---------------------------|
| **Diferenciación** | Sistema de nóminas irlandés desarrollado para reflejar criterios específicos de Irlanda (seguro social, impuesto a la renta). | Factores de usabilidad que los productos competidores (desarrollados para otros países) no tenían. **Precio más alto** por diferenciación. |
| **Liderazgo en costos** | Sistema operativo para microcomputadoras vendido a bajo costo para ganar penetración de mercado. El mismo proveedor produce una gama completa de productos de automatización de oficina que se ejecutan en ese SO. | Calidad suficiente para el mercado masivo; la estrategia busca dominar el mercado a través del precio y luego vender productos complementarios. |
| **Enfoque/Nicho** | Producto estándar de la industria para edición de escritorio profesional en computadoras Apple. | "Proporciona funcionalidad completa para las tareas a realizar y es, con diferencia, el líder en el mercado." Riesgo: "tener solo un producto, los desarrolladores deben ser conscientes de su vulnerabilidad." |

**Otro ejemplo de liderazgo en costos (Fitzpatrick):**
> *"Proveedores de servicios de Internet están dispuestos a ofrecer software de navegación para Internet de forma gratuita a los suscriptores de pago de su servicio de Internet."*

**Ejemplos de enfoque/niche adicionales (Fitzpatrick):**
> *"Hay otras aplicaciones especializadas (las profesiones como ingeniería, medicina, subastas, etc.) que encajan en la categoría de enfoque/niche."*

---

## 3. Licencias, contratación y estimación de costos

### 3.1. ISO 9000 como requisito para licitaciones

Fitzpatrick señala la importancia estratégica de la certificación ISO 9000 para proveedores de software a medida [FITZ]:

> *"Si los desarrolladores están produciendo productos por encargo, la celebración de contratos será una parte importante de su negocio. Obviamente, estar **certificado ISO 9000** estará a favor de los desarrolladores cuando busquen consultas. Los requisitos actuales de la Unión Europea estipulan que aquellos que buscan presentar ofertas para proyectos dentro de la Comunidad Europea deben estar certificados ISO 9000."*

**Beneficio adicional:** "También se deduce que las organizaciones que están certificadas ISO 9000 para fines de licitación tendrán pocas dificultades para comercializar sus productos genéricos en la calle" [FITZ].

### 3.2. La premisa fundamental: la calidad cuesta dinero

Fitzpatrick establece una premisa que subyace a toda la estimación de costos de calidad [FITZ]:

> *"Es fácil aceptar que la calidad cuesta dinero. La mayoría de las personas pueden citar un ejemplo de un automóvil. Por lo tanto, deberíamos esperar que los factores de calidad del software desempeñen un papel prominente en la estimación y cálculo de costos del software. Y así es."*

### 3.3. El modelo COCOMO (Boehm, 1984)

Fitzpatrick introduce el modelo **COCOMO (Constructive Cost Model)** como herramienta de estimación que incorpora explícitamente factores de calidad [FITZ].

**Factores de calidad como entradas en COCOMO** (Fitzpatrick, adaptado de Ghezzi et al. a partir de Boehm, 1984):

| Grupo de factores | Atributos específicos con impacto en costo |
|-------------------|-------------------------------------------|
| **Tamaño (Size)** | Instrucciones fuente, instrucciones objeto, número de rutinas, número de elementos de datos, número de formatos de salida, documentación, número de personal. |
| **Atributos del programa (Program attributes)** | Tipo, complejidad, lenguaje, **reutilización (re-use)**, visualización requerida, requisitos de pantalla. |
| **Atributos del ordenador (Computer attributes)** | Restricción de tiempo, **restricción de almacenamiento**, configuración del hardware, desarrollo concurrente de hardware, equipo/software de interfaz. |
| **Atributos del personal (Personnel attributes)** | Capacidad del personal, continuidad del personal, experiencia en hardware, experiencia en aplicaciones, experiencia en lenguaje. |
| **Atributos del proyecto (Project attributes)** | Herramientas y técnicas, interfaz con el cliente, definición de requisitos, volatilidad de requisitos, calendario, seguridad, acceso al ordenador, software de soporte. |

**Factores de calidad específicos mencionados por Fitzpatrick:**
- **Reutilización (re-use)**
- **Confiabilidad (reliability)**
- **Conformidad con especificaciones de interfaz externa (interoperabilidad)**
- **Restricciones de almacenamiento**

### 3.4. El criterio general para estimadores

Fitzpatrick establece una directiva para los estimadores de costos [FITZ]:

> *"Los buenos estimadores querrán considerar **todos los factores de calidad** en sus cálculos, independientemente de si están declarados en la especificación de requisitos o no."*

---

## 4. Recursos humanos y calidad

### 4.1. La tesis central: la calidad se logra a través de personas

Fitzpatrick cita a **Brendan Lawlor**, Quality and Methods Manager en Kindle Banking Systems (Dublín), y a **Gillies (1992)** para establecer la centralidad de las personas en la calidad [FITZ]:

> *"Brendan Lawlor... cree que la calidad se logra a través de las personas. Gillies (1992) apoya esta opinión."*

**Argumentos de Gillies (según Fitzpatrick):**

| Nº | Afirmación |
|----|------------|
| 1 | "Son las personas y las organizaciones humanas quienes tienen problemas que deben ser abordados por el software informático." |
| 2 | "Son las personas quienes definen los problemas y especifican las soluciones." |
| 3 | "Son (actualmente) las personas quienes implementan los diseños y producen el código." |
| 4 | "Son (actualmente) las personas quienes prueban el código." |
| 5 | "Son las personas quienes utilizan los sistemas finales y quienes emitirán juicios sobre la calidad general de la solución." |

### 4.2. Políticas de recursos humanos para la calidad

Fitzpatrick propone que los proveedores de software "deben implementar políticas de recursos humanos como parte de sus planes estratégicos" [FITZ].

**Políticas sugeridas:**

| Política | Descripción |
|----------|-------------|
| **Seleccionar solo los mejores talentos** | Formar equipos de desarrollo con personal de alta capacidad. |
| **Emparejar habilidades con tareas** | Asignar al personal a tareas que se correspondan con sus habilidades. |
| **Comprender las necesidades de progresión profesional** | "Las necesidades especiales de progresión profesional de los informáticos no son necesariamente las mismas que las de otros empleados." |
| **Crear equipos equilibrados** | Equilibrar edad, experiencia y habilidades dentro de los equipos. |
| **Eliminar a los inadaptados** | "Eliminar a los que no encajan y que no están logrando resultados con el equipo." |

---

## 5. Productividad y calidad

### 5.1. Mecanismos por los cuales la calidad mejora la productividad

Fitzpatrick identifica varios mecanismos mediante los cuales el enfoque en factores de calidad mejora la productividad del proveedor [FITZ]:

| Factor de calidad | Impacto en productividad |
|-------------------|--------------------------|
| **Reusabilidad** | Reduce el tiempo de desarrollo (el código ya está escrito y probado). |
| **Portabilidad** | Reduce el tiempo de desarrollo (el software se adapta a nuevos entornos con mínimo esfuerzo). |
| **Mantenibilidad** | Reduce el tiempo y costo de mantenimiento de productos en su vida posterior. |
| **Técnicas orientadas a objetos** | Mejoran la productividad a través de "bibliotecas de clases bien organizadas y filosofías de reutilización". |

### 5.2. El impacto de ISO 9000 en la productividad

Fitzpatrick cita a **Macfarlane (sin fecha)** sobre la evidencia de productividad tras implementar ISO 9000 [FITZ]:

> *"La primera evidencia [de productividad] aparece cuando un ingeniero dice: **'Es realmente agradable poder obtener siempre una copia actualizada de la especificación funcional'**."*

**Conclusión de Fitzpatrick:**
> *"Obviamente, una política de calidad publicada y un plan de calidad, comprendidos por todos los empleados, harán que la fuerza laboral sea más eficiente. De ello se deriva una mejora de la productividad."*

---

## Preguntas de integración (estudio activo)

1. Según el modelo de Porter, ¿cuáles son las **tres estrategias genéricas** y qué papel juega la calidad en cada una?
2. ¿Qué evidencia empírica aportan Buzzell y Gale (1987) sobre el impacto de la **calidad percibida** en el ROI y la participación de mercado?
3. ¿Cuáles son los **tres pasos** del proceso estratégico de Robson y qué papel juega la calidad en los pasos 1 y 2?
4. ¿Qué **ejemplo concreto** de diferenciación por calidad proporciona Fitzpatrick y cuál fue su ventaja competitiva?
5. Según Fitzpatrick, ¿por qué la certificación **ISO 9000** es estratégicamente importante para proveedores que licitan proyectos en la UE?
6. ¿Qué **factores de calidad específicos** menciona Fitzpatrick como entradas en el modelo COCOMO de Boehm?
7. ¿Cuáles son las **cinco políticas de recursos humanos** que Fitzpatrick sugiere para mejorar la calidad?
8. ¿De qué manera la **reusabilidad** y la **portabilidad** mejoran la productividad del proveedor?