# Taxonomía de Marcos de Trabajo (Frameworks) para Calidad y Procesos de Software

> **Fuente primaria:** [BED] §2 (pp. 3-7)
> **Fuente secundaria:** [FITZ] §3 (referencias a ISO 9000, COCOMO)

## 1. Definición de marco de trabajo (framework)

Bedini define los marcos de trabajo (MT) de la siguiente manera [BED]:

> *"Los MT corresponden a estructuras escritas de una idea y/o conjunto de metas para facilitar a una organización la aplicación de las mismas. Es decir, mediante los MT se permite que todo el personal de una organización se dirija en la misma 'dirección'."*

---

## 2. Categorías de marcos de trabajo (Bedini)

Bedini clasifica los marcos de trabajo en **6 categorías** según el propósito que cumplen [BED]:

| Categoría | Propósito |
|-----------|-----------|
| **1. Estándares y Guías** | Proveen normas y directrices para el desarrollo y aseguramiento de la calidad. |
| **2. Modelos de mejoramiento de procesos y métodos internos de evaluación** | Establecen caminos estructurados para mejorar los procesos de software y evaluarlos internamente. |
| **3. Pautas de selección de 3° empresas o contratistas** | Ayudan a evaluar y seleccionar proveedores externos basándose en su capacidad de proceso. |
| **4. Premios de Calidad** | Reconocimientos a la excelencia en la gestión de la calidad (ej., Malcom Baldrige, EFQM). |
| **5. Modelos de ciclo de vida de software** | Describen las fases y actividades del desarrollo de software. |
| **6. Modelos de ingeniería de sistemas** | Extienden el enfoque de calidad más allá del software al sistema completo. |

**Aclaración de Bedini:** "más de una categoría puede corresponder a un MT" [BED].

---

## 3. Finalidad y objetivos de los marcos de trabajo

### 3.1. Finalidad explícita

Bedini enumera la finalidad de los marcos de trabajo [BED]:

> *"La finalidad de los marcos de trabajo es la de mejorar los procesos de software, brindar pautas para efectuar evaluaciones de la unidad informática, determinar la potencialidad y la performance de sus procesos, y la madurez de la organización."*

### 3.2. Objetivos generales

Bedini resume los objetivos que persiguen los MT [BED]:

- **Mejorar los procesos de software**
- **Aumentar la productividad y la calidad**
- **Disminuir el costo**

---

## 4. Conceptos fundamentales asociados a los marcos de trabajo

Bedini define explícitamente una serie de conceptos que son centrales para entender cualquier marco de trabajo [BED]:

### 4.1. Proceso de software

> *"Es un conjunto de actividades, métodos, prácticas y transformaciones que el personal usa para desarrollar y mantener el software, y los productos asociados (planificación del proyecto, diseño de documentos, código, casos de prueba, manuales de usuario, entre otros)."*

### 4.2. Capacidad / Potencialidad de un proceso de software (Process Capability)

> *"Describe el rango de resultados esperados que se pueden llevar a cabo siguiendo un proceso de software. Una capacidad o potencial del proceso de software de una organización es un modo de predecir el resultado más probable del siguiente proyecto de software que se emprenda."*

**Dimensión:** orientada al **futuro** (resultados esperados).

### 4.3. Performance de un proceso de software (Process Performance)

> *"Representa los resultados actuales logrados habiendo seguido un proceso de software. La performance de un proceso, por tanto, se enfoca en resultados logrados, mientras que el potencial de un proceso se centra en resultados esperados."*

**Dimensión:** orientada al **pasado** (resultados logrados).

### 4.4. Madurez de un proceso de software (Process Maturity)

> *"Se refiere a un proceso específico que está explícitamente definido, administrado, medido, controlado, y es efectivo."*

**Definición ampliada:**
> *"Madurez: Implica la potencialidad de poder crecer e indica tanto la riqueza de un proceso de software de una organización como la consistencia con que se aplica en proyectos toda la organización."* [BED]

### 4.5. Organización inmadura vs. madura

| Tipo de organización | Características (Bedini) |
|---------------------|--------------------------|
| **Inmadura** | "Los procesos de software generalmente se improvisan, esto incluye la posibilidad que, aún especificados los procesos, ellos no se desarrollen en forma rigurosa." |
| **Madura** | "Posee la habilidad en toda su organización para administrar tanto el desarrollo como la mantención de proyectos." |

---

## 5. Los principales marcos de trabajo (visión general)

Bedini proporciona una clasificación visual de los principales MT, organizados por color según su origen [BED]:

| Color | Significado | Ejemplos |
|-------|-------------|----------|
| **Rojo** | Modelo de capacidad de madurez | CMM®, CMMI |
| **Verde** | Documento gubernamental o militar de EE.UU. | DoD Standards, MIL-STD |
| **Lila** | Estándar internacional | ISO 9001, ISO 15504 (SPICE) |
| **Azul** | Desarrollado por una organización profesional (mayoritariamente de EE.UU.) | IEEE Standards |
| **Negro** | Otros | Modelos propietarios o de nicho |

---

## 6. Aspectos críticos a considerar al aplicar un marco de trabajo

Bedini enumera **14 aspectos** que deben considerarse antes de aplicar un MT, muchos de los cuales son críticas implícitas a los marcos existentes [BED]:

| Nº | Aspecto |
|----|---------|
| 1 | Los MT permiten determinar "dónde estamos" hacia "dónde queremos ir" y "cómo" podemos hacerlo. (En la mayoría de los casos, el "cómo" no es muy explícito y concreto; es un "cómo" muy difuso.) |
| 2 | Según un artículo de IEEE Computer, los MT describen "el recipiente, los utensilios y las técnicas de cocina, asumiendo que la torta sabrá bien". |
| 3 | El mismo artículo indica que la mayoría de los MT el grado de objetividad es puramente subjetivo en comparación con el grado ideal que es objetivo. |
| 4 | Los MT permiten (y de hecho se hace) adaptar los mismos de acuerdo a las características de la unidad informática (recursos, experiencias, objetivos). Lo que no se indica es **cómo** hacerlo y **cuáles puntos** hay que adaptar. |
| 5 | La etapa más difícil y traumática por la cual muchas organizaciones no se adhieren hacia un MT es el **inicio**. Es difícil justificar la relación costo-beneficio a los gerentes. |
| 6 | Incoherencia de los MT de proponer evaluaciones en los primeros niveles si la mayoría de las organizaciones inmaduras no existen algunos de los procesos o prácticas que indican los MT para evaluar en los niveles iniciales. |
| 7 | Algunos expertos critican a los MT que contienen evaluaciones porque estas son derivaciones artificiales. |
| 8 | La mayoría de los MT considera necesario un conjunto de equipos especiales (SQA, etc.), costo que muchas pequeñas empresas no pueden afrontar. |
| 9 | La mayoría de los MT asume que el personal posee un alto conocimiento y experiencia de ciertas prácticas propuestas. En la experiencia de Bedini, muchos profesionales tienen solo vagas nociones de ingeniería de software. |
| 10 | La mayoría de los MT considera el empleo de herramientas especiales, lo que implica alto costo para PyMEs. |
| 11 | La mayoría de los estudios sobre resultados de mejoramiento de procesos están basados en el análisis de unos pocos puntos de datos (data points). Los resultados positivos son "datos tentadores" más que hechos establecidos. |
| 12 | No olvidar que los procesos involucrados en los MT son **elementos que ayudan a las soluciones** más que una solución en sí misma. |
| 13 | La finalidad directa o indirecta de los MT es aumentar la calidad del software, pero la gran mayoría **no define en sus documentos qué es calidad de software**. |
| 14 | Debido a la alta exigencia y presión para el mejoramiento de procesos, es muy factible "padecer" lo que se denomina **"parálisis de procesos"** (término definido por Yourdon). |

---

## 7. La "parálisis de procesos" (Yourdon, citado por Bedini)

Bedini define explícitamente este fenómeno [BED]:

> *"Este término fue definido por Yourdon, y se refiere al efecto sobre el equipo del proyecto que es abrumado por la nueva tecnología y gradualmente terminan por perder todo el tiempo en:*
> 
> *a) Tratar de entender la nueva tecnología;*
> *b) Argumentar los méritos de la nueva tecnología, o*
> *c) Tratar que trabaje o funcione la nueva tecnología.*
> 
> *Esta parálisis puede causar a los equipos olvidar que se desarrolla software más que procesos. Parte de este problema se puede atribuir al no entender qué son procesos de software."* [BED]

**Aclaración de Bedini:** "El motivo de la sección no es mostrar aspectos negativos de los marcos de trabajo, sino exponer detalles a tomar en cuenta en el momento de aplicar un MT, sobre todo en el área de las unidades informáticas inmaduras/limitadas."

---

## 📝 Preguntas de integración (estudio activo)

1. ¿Cuáles son las **6 categorías** de marcos de trabajo según Bedini?
2. Define con tus palabras la diferencia entre **capacidad de un proceso** y **performance de un proceso**.
3. ¿Qué significa que una organización sea **"madura"** en términos de procesos de software?
4. ¿Cuál es el problema de los MT en relación con la definición de "calidad de software" (aspecto 13 de Bedini)?
5. ¿En qué consiste la **"parálisis de procesos"** de Yourdon y qué la causa?
6. ¿Por qué Bedini considera que los MT tienen un problema de **"subjetividad"** en las evaluaciones?
7. ¿Qué crítica se hace a los MT en relación con **equipos especiales** y las **PyMEs**?