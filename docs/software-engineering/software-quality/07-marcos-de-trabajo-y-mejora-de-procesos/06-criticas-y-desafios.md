# Críticas y Desafíos de los Marcos de Trabajo de Calidad

> **Fuente primaria:** [BED] §2 (pp. 6-7, "Aspectos a considerar de los MT")
> **Fuente secundaria:** [FITZ] §2.8, [BED] §2 (principios de evaluación)

## 1. Advertencia preliminar

Bedini aclara explícitamente el propósito de su sección de críticas [BED]:

> *"El motivo de la sección no es mostrar aspectos negativos de los marcos de trabajo, sino **exponer detalles a tomar en cuenta en el momento de aplicar un MT**, sobre todo en el área de las unidades informáticas inmaduras/limitadas."*

---

## 2. Los 14 aspectos críticos a considerar (Bedini)

Bedini enumera **14 aspectos** que deben considerarse antes de aplicar un marco de trabajo [BED]:

| Nº | Aspecto crítico |
|----|-----------------|
| 1 | Los MT permiten determinar "dónde estamos" hacia "dónde queremos ir" y "cómo" podemos hacerlo. **El 'cómo' no es muy explícito y concreto; es un 'cómo' muy difuso.** |
| 2 | Según un artículo de IEEE Computer, los MT describen **"el recipiente, los utensilios y las técnicas de cocina, asumiendo que la torta sabrá bien"** (la forma no garantiza el contenido). |
| 3 | La mayoría de los MT, **el grado de objetividad es puramente subjetivo** en comparación con el grado ideal que es objetivo. |
| 4 | Los MT permiten (y de hecho se hace) **adaptar los mismos** de acuerdo a las características de la unidad informática. **Lo que no se indica es cómo hacerlo y cuáles puntos hay que adaptar.** |
| 5 | **La etapa más difícil y traumática** por la cual muchas organizaciones no se adhieren hacia un MT es el inicio. Es difícil justificar la relación **costo-beneficio** a los gerentes para promover el uso de un MT. |
| 6 | **Incoherencia** de los MT de proponer evaluaciones en los primeros niveles si la mayoría de las organizaciones inmaduras no existen algunos de los procesos o prácticas que indican los MT para evaluar en los niveles iniciales. |
| 7 | Algunos expertos critican a los MT que contienen evaluaciones, el hecho de que estos son **derivaciones artificiales**. |
| 8 | La mayoría de los MT considera necesario un conjunto de **equipos especiales** (SQA, SEPG, etc.), costo que muchas empresas pequeñas normalmente no pueden afrontar. |
| 9 | La mayoría de los MT considera que el personal posee un **alto conocimiento y experiencia** de ciertas prácticas propuestas. En la experiencia de Bedini, "hay muchos profesionales que tienen solo vagas nociones de ingeniería de software". |
| 10 | La mayoría de los MT considera el empleo de **herramientas especiales**. Para PyMEs, esto implica alto costo (compra, entrenamiento, tiempo). |
| 11 | La mayoría de los estudios sobre resultados de mejoramiento de procesos están basados sobre el análisis de **unos pocos puntos de datos (data points)**. Los resultados positivos son "datos tentadores" más que hechos establecidos. |
| 12 | **No olvidar que los procesos involucrados en los MT son elementos que ayudan a las soluciones más que una solución en sí misma.** |
| 13 | La finalidad directa o indirecta de los MT es aumentar la calidad del software, pero la gran mayoría **no define en sus documentos qué es calidad de software.** |
| 14 | Debido a la alta exigencia y presión para el mejoramiento de procesos, es muy factible "padecer" lo que se denomina **"parálisis de procesos"** (Yourdon). |

---

## 3. La parálisis de procesos (Yourdon)

### 3.1. Definición explícita (Bedini)

> *"Este término fue definido por Yourdon, y se refiere al efecto sobre el equipo del proyecto que es abrumado por la nueva tecnología y gradualmente terminan por perder todo el tiempo en:*
>
> *a) Tratar de entender la nueva tecnología;*
> *b) Argumentar los méritos de la nueva tecnología, o*
> *c) Tratar que trabaje o funcione la nueva tecnología.*
>
> *Esta parálisis puede causar a los equipos **olvidar que se desarrolla software más que procesos**. Parte de este problema se puede atribuir al no entender qué son procesos de software."* [BED]

### 3.2. Implicación práctica

La parálisis de procesos es un riesgo real en organizaciones que adoptan marcos de trabajo sin la preparación adecuada. El equipo se enfoca en **el proceso como fin**, perdiendo de vista que el objetivo final es **desarrollar software** que funcione y entregue valor.

---

## 4. Críticas específicas de Fitzpatrick a los modelos de calidad

### 4.1. Obsolescencia tecnológica

Fitzpatrick formula una crítica explícita a los modelos de McCall y Boehm [FITZ §2.8]:

> *"Uno de los problemas con los modelos de calidad de software es que se publicaron en 1977/78 y en los años intermedios se han producido **enormes avances tecnológicos**. En este documento se han destacado algunos de ellos. Quizás sea necesario revisar más de ellos para reflejar mejor esos cambios. Quizás también se necesiten algunas adiciones nuevas."*

### 4.2. Falta de atención en estándares internacionales

> *"También es extraordinario que tan pocos de los factores de calidad reciban alguna mención en las normas internacionales y nacionales relacionadas con el aseguramiento de la calidad."* [FITZ §2.8]

### 4.3. Crítica a la definición de calidad de IEEE

Fitzpatrick critica la definición de calidad del IEEE por sus paradojas [FITZ §2.1]:

| Problema | Explicación |
|----------|-------------|
| **Expectativas nulas** | "Si la expectativa de un cliente es nula, ¿no significa eso que un producto con características nulas es un producto de calidad?" |
| **Percepción no informada** | "Si un usuario cliente no informado percibe un automóvil que se oxida, se desarma, se avería, no arranca, quema aceite en exceso, etc., como un automóvil de calidad, ¿lo es? Obviamente no." |

### 4.4. Crítica a la definición de usabilidad de ISO 9241

Fitzpatrick critica explícitamente la definición de usabilidad de ISO 9241 por cuatro razones [FITZ §2.3.4]:

1. **Demasiado vaga:** "el debate continuará sobre qué es exactamente la usabilidad porque la definición es demasiado vaga".
2. **Omite la confianza del usuario:** "omite el importantísimo concepto de confianza del usuario".
3. **Es circular:** "define la usabilidad como el grado en que un producto puede ser 'usado'. ¿Y qué entendemos por 'usado'? ¿No es eso lo que estamos tratando de definir?".
4. **Ignora diferentes niveles de habilidad:** "la definición parece ignorar la necesidad de que un producto de calidad apoye a todos los usuarios sin importar su nivel de habilidad".

---

## 5. Mitos sobre procesos de software (Bedini)

Bedini enumera **seis mitos o creencias erróneas** sobre los procesos de software que dificultan la mejora de la calidad [BED]:

| Mito | Realidad (según Bedini) |
|------|-------------------------|
| **"Comenzar cuando los requerimientos estén bien definidos o claros"** | "Es muy común pensar que los requerimientos son un trabajo del cliente y que el desarrollo no comienza hasta que estos no estén bien definidos." |
| **"Si pasa la etapa de testing, está todo bien"** | "Si los estudios existentes sobre esta errónea creencia no prueban esta falsedad, nada lo hará." |
| **"La calidad de software no se puede medir"** | "Actualmente existen muchas propuestas para medir la calidad de los procesos y de los productos." |
| **"Los problemas son técnicos"** | "A pesar de nuevos y mejores lenguajes, herramientas, y entornos, los problemas de costo, calendario y calidad permanecen." |
| **"Necesitamos el mejor personal"** | "Desde que los profesionales de software cometen algunos errores, ciertas personas sienten erróneamente que hay que culparlos y censurarlos." |
| **"La administración del software es diferente"** | "Los métodos tradicionales de administración pueden y deben ser usados." |

---

## 6. Desafíos específicos para organizaciones inmaduras (Bedini)

Bedini identifica desafíos particulares que enfrentan las **organizaciones inmaduras o PyMEs** al intentar adoptar marcos de trabajo [BED]:

| Desafío | Descripción |
|---------|-------------|
| **Costo de equipos especiales** | SQA, SEPG, SCM, MSG, TWG representan una carga financiera significativa. |
| **Falta de conocimiento previo** | "Muchos profesionales tienen solo vagas nociones de ingeniería de software." |
| **Herramientas especializadas** | El costo de compra, entrenamiento e implementación es prohibitivo. |
| **Evaluaciones en niveles iniciales** | "Incoherencia de los MT de proponer evaluaciones en los primeros niveles si la mayoría de las organizaciones inmaduras no existen algunos de los procesos." |
| **Justificación costo-beneficio** | Difícil de demostrar a los gerentes antes de comenzar. |

---

## 7. Principios para el cambio efectivo (Bedini)

Bedini propone **seis principios** que rigen los procesos de cambio de software, que deben considerarse al implementar cualquier marco de trabajo [BED]:

| Principio | Enunciado |
|-----------|-----------|
| I | "Los mayores cambios en la organización y a su vez en los procesos de software deben comenzar en la **jerarquía más alta**." |
| II | "**Todos deben estar involucrados**. La Ingeniería de Software es un esfuerzo de equipo, y todo aquel que no participe en el mejoramiento perderá los beneficios." |
| III | "Cambios efectivos requieren un **objetivo y conocimiento de los procesos actuales**. Para usar un mapa uno debe saber dónde está." |
| IV | "**Los cambios son continuos**. Los mejoramientos de los procesos de software no es un solo esfuerzo; involucra un continuo estudio y crecimiento." |
| V | "Los cambios de los procesos de software **no se retienen sin un concienzudo esfuerzo y refuerzo periódico**." |
| VI | "Los cambios en los procesos de software **requieren inversión**. Necesitan: un planteamiento, personal dedicado, administración del tiempo e inversión de capital." |

---

## 8. Resumen de conclusiones sobre marcos de trabajo (Bedini)

Bedini ofrece una conclusión equilibrada sobre los marcos de trabajo [BED]:

**Beneficios de aplicar un MT:**
- Disminución de costos y tiempo.
- Aumento de la productividad y de la calidad de los productos.
- Coordinar al personal hacia metas/objetivos con una misma "visión".

**Limitaciones actuales:**
- "¿Cuánto es esa disminución de costo, en qué porcentaje se puede expresar, cómo varía este valor por cada MT? Son preguntas que todavía no tienen una respuesta directa y formal."
- Los MT son relativamente "nuevos" (7-10 años de antigüedad promedio en el momento de Bedini).
- Muy pocas organizaciones publican resultados.
- La tecnología evoluciona más rápido que la actualización de los MT.
- "¿Será una carrera perdida? O ¿Será cierto que los MT son totalmente independientes a esta realidad?"

---

## Preguntas de integración (estudio activo)

1. ¿Cuál es el **propósito declarado** por Bedini al exponer los aspectos críticos de los MT? (No es mostrar aspectos negativos, sino...)
2. ¿Cuál es el problema con el **"cómo"** en la mayoría de los MT según el aspecto 1?
3. ¿Qué significa la metáfora **"el recipiente, los utensilios y las técnicas de cocina, asumiendo que la torta sabrá bien"** ?
4. ¿Por qué Bedini considera que hay una **incoherencia** en los MT que proponen evaluaciones en niveles iniciales (aspecto 6)?
5. ¿En qué consiste la **"parálisis de procesos"** de Yourdon y cuál es su consecuencia principal?
6. ¿Cuáles son las **cuatro críticas explícitas** de Fitzpatrick a la definición ISO 9241 de usabilidad?
7. ¿Cuál es el **mito sobre la calidad** que Bedini refuta con mayor énfasis?
8. Según el **principio VI** de Bedini, ¿qué se necesita para lograr cambios en los procesos de software?