# Impacto de Métodos Ágiles e Híbridos en la Calidad del Software

> **Fuente primaria:** [ZEC] (SLR 2021)
> **Año de la revisión sistemática:** 2021
> **Cobertura:** Estudios publicados entre 2015 y 2021

## 1. Contexto y motivación de la revisión sistemática

Zekic y Stapic realizaron una **revisión sistemática de la literatura (SLR)** para responder a dos preguntas fundamentales sobre la relación entre métodos ágiles/híbridos y la calidad del software [ZEC].

**Contexto declarado por los autores:**
> *"Hoy en día, muchas organizaciones se declaran ágiles, pero es difícil encontrar desarrollo ágil puro en la práctica. Muchas de ellas utilizan un enfoque de desarrollo de software híbrido, que combina métodos ágiles y/o tradicionales."* [ZEC]

**Premisa fundamental:**
> *"El desarrollo ágil pone énfasis en la calidad sobre la cantidad, pero la práctica ha demostrado que es difícil lograr un alto nivel de calidad del producto en un entorno dinámico."* [ZEC]

**Alcance de la revisión:** más de **3900 estudios científicos originales** publicados en los últimos cinco años (desde 2015 hasta 2021), de los cuales **15 papers** abordaban directamente el tema y pasaron todos los criterios de inclusión y evaluación de calidad [ZEC].

---

## 2. Hallazgo RQ1: Combinaciones de métodos ágiles con impacto reportado en calidad

Zekic y Stapic identificaron **7 combinaciones de métodos ágiles** que aparecen en la literatura científica con reporte de impacto en la calidad del software [ZEC].

| Combinación / Enfoque | Estudio que lo reporta |
|-----------------------|------------------------|
| **Ágil con Control Dinámico de Calidad** | Tommy et al. (2015) |
| **Modelo ágil híbrido (Scrum + XP + Lean Software Development)** | Neelu y Kavitha (2021); Jain et al. (2018); Kasims et al. (2018); Arcos-Medina y Mauricio (2020) |
| **SDLC + Safe** | Pradhan y Nanniyur (2021) |
| **TDD (Test-Driven Development) + ITL (Iterative Test-Last Development)** | Santos et al. (2021) |
| **Q-Rapids (desarrollo rápido de software)** | Martínez-Fernández et al. (2018) |
| **Waterfall + Agile** | Pradhan y Nanniyur (2019); Pradhan et al. (2019); Bianchi et al. (2020) |
| **Parallel Agile (PA) + Incremental Commitment Spiral Model (ICSM)** | Boehm et al. (2019) |

---

## 3. Hallazgo RQ2: Prácticas ágiles que impactan atributos de calidad

Zekic y Stapic identificaron **22 prácticas ágiles** que tienen un impacto significativo en **26 atributos de calidad** del software [ZEC].

### 3.1. Tabla de impacto por práctica (extraída de ZEC)

| Práctica(s) ágil(es) | Atributos de calidad impactados | Estudio de referencia |
|----------------------|--------------------------------|----------------------|
| Testing, Daily defect review meetings | Testability, Efficiency | Tommy et al. (2015) |
| Specification Requirement, Design, Implementation, Testing, Integration, Release | Availability, Scalability, Flexibility, Performance, Usability, Understandability | Neelu y Kavitha (2021) |
| Total no. of user stories, User story Accepted, Review effectiveness, Total no. of Sprints | Functionality, Reliability, Maintainability, Scalability | Jain et al. (2018) |
| Iteration (Sprint), Release every sprint, Automating the tests | Functionality, Testability, Efficiency | Kasims et al. (2018) |
| Testing cycles, Release | Number of defects, Annual failure rate | Pradhan et al. (2021) |
| Sprint | Overall quality (atributos no especificados) | Bianchi et al. (2020) |
| Continuous integration, Pair programming, Stand-up meeting | Maintainability, Verifiability, Efficiency, Integrity, Usability, Testability, Flexibility, Interoperability | Subih et al. (2019) |
| Continuous integration | Time to develop, Introduced bugs, Time to deliver, Test quality, Documentation, Change management, Cost model | Hamdan y Alramouni (2015) |
| Iterative practice, Prototyping, User testing, Automated testing | Testability, Verifiability, Efficiency | Berg et al. (2020) |

---

## 4. Análisis de hallazgos por tipo de práctica

### 4.1. Prácticas relacionadas con pruebas (testing)

Zekic y Stapic destacan que varios estudios se centran en el proceso de pruebas como vía para mejorar la calidad [ZEC]:

> *"Tommy et al. (2015) afirma que el mayor desafío en las pruebas de software en métodos ágiles es el poco tiempo y enfoque para el proceso de pruebas, pero intentan demostrar que asignar más recursos hacia las pruebas podría influir en la mejora de la calidad del software sin perder otros beneficios de los métodos ágiles."*

**Enfoques específicos:**
- **Control Dinámico de Calidad** combinado con metodología ágil ayuda a descubrir defectos ocultos [ZEC].
- **Marco de Pradhan et al. (2019):** objetivo de encontrar más errores en los ciclos de prueba tempranos. Los resultados mostraron efectividad en la mejora de la calidad [ZEC].

### 4.2. Prácticas relacionadas con automatización

Zekic y Stapic señalan que la automatización de procesos tiene un gran impacto [ZEC]:

> *"Hamdan y Alramouni (2015) analizan el impacto de la Integración Continua en la calidad del software, y su estudio mostró que practicar la integración continua resulta en una mejora significativa de la calidad del software."*

**Beneficios de la automatización:**
- Tener una **release cada sprint** permite recibir retroalimentación más rápido.
- Para lograr releases regulares, los equipos necesitan identificar herramientas para mejorar y automatizar el proceso de despliegue [ZEC].

### 4.3. Prácticas relacionadas con la estructura del sprint

> *"Según Pradhan y V. Nanniyur (2021) la calidad es un factor importante en cada sprint en el que los equipos ágiles necesitan definir criterios de calidad. Estos criterios les ayudan a medir la mejora de la calidad sprint a sprint."* [ZEC]

**Énfasis:** encontrar defectos en cada iteración, especialmente en los ciclos de prueba internos, para que el equipo pueda corregirlos temprano y mejorar la calidad [ZEC].

---

## 5. El modelo híbrido Scrum-XP-Lean

Zekic y Stapic dedican una atención especial a esta combinación, reportada por múltiples autores [ZEC]:

> *"El modelo ágil híbrido (Neelu y Kavitha, 2021) es una combinación de Scrum, Programación Extrema (XP) y Desarrollo de Software Lean. Otros autores no usan el mismo nombre, pero se refieren a la misma combinación ágil (Jain et al., 2018; Kasims, 2018; Arcos-Medina y Mauricio, 2020)."*

**Ventaja reportada:**
> *"Es un método de desarrollo ágil impulsado por la calidad. La mayor ventaja de este modelo es la baja tasa de defectos, lo que resulta en productos de software de alta calidad."* [ZEC]

---

## 6. Definiciones de calidad utilizadas en los estudios analizados

Zekic y Stapic observan que los diferentes estudios analizados tienen distintas comprensiones de calidad [ZEC]:

| Estudio | Definición de calidad utilizada |
|---------|--------------------------------|
| Jain et al. (2018) | "La calidad mide qué tan bien está diseñado el software y qué tan bien funciona sin fallos." |
| Arcos-Medina y Mauricio (2020) | "Existen tres tipos de calidad de software: Calidad de diseño, calidad de rendimiento y calidad de adopción." |
| Otros | "Cumplir con las necesidades y expectativas del cliente." |

---

## 7. Limitaciones de la revisión y oportunidades de investigación futura

### 7.1. Limitación explícita de los autores

> *"Nuestra valoración general es que el tema de esta investigación es un tema bastante nuevo en la comunidad investigadora. La mayoría de los documentos identificados se publicaron durante los últimos tres años, y podemos ver que los autores adoptan enfoques bastante diferentes, pero mayoritariamente parciales, y puntos de vista."* [ZEC]

### 7.2. Oportunidad de investigación identificada

> *"No pudimos identificar una investigación innovadora que estableciera una piedra angular para la clasificación del impacto del uso de prácticas ágiles en los atributos de calidad. Por lo tanto, consideramos que se deberían emprender enfoques de investigación adicionales, más sistemáticos, y de clasificación de las prácticas mencionadas y su influencia en los atributos de calidad."* [ZEC]

### 7.3. Limitación del alcance

> *"Esta investigación se centró solo en la evidencia científica disponible, sin tener en cuenta otros tipos posibles de fuentes bibliográficas, como literatura 'gris', informes técnicos, tesis doctorales, apariciones en línea, etc."* [ZEC]

**Plan de los autores:** realizar otra SLR incluyendo estas fuentes como trabajo futuro.

---

## Preguntas de integración (estudio activo)

1. ¿Cuántos estudios científicos fueron analizados en la SLR de Zekic y Stapic y cuántos pasaron los criterios de inclusión?
2. ¿Cuáles son las **7 combinaciones** de métodos ágiles con impacto reportado en calidad?
3. ¿Qué **tres métodos** conforman el modelo ágil híbrido mencionado por Neelu y Kavitha?
4. Según Hamdan y Alramouni, ¿qué práctica de integración continua impacta positivamente en la calidad y qué atributos específicos mejora?
5. ¿Cuál es la **principal ventaja** reportada del modelo híbrido Scrum-XP-Lean?
6. ¿Qué **limitación importante** reconocen los autores sobre la novedad del tema?
7. ¿Por qué los autores consideran que no se ha establecido una "piedra angular" para clasificar el impacto de prácticas ágiles en atributos de calidad?
8. ¿Qué atributos de calidad son impactados por **Continuous Integration, Pair Programming y Stand-up meeting** según Subih et al. (2019)?