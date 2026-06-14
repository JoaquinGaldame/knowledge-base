# Métricas de Defectos

> **Fuente primaria:** [TIA] §2.3
> **Fuente secundaria:** [FITZ] §2.6, §3.1.2

## 1. La centralidad de los defectos en la medición de calidad

Tian adopta explícitamente un **enfoque centrado en la correctitud** para la medición de calidad [TIA]:

> *"Para la mayoría de las organizaciones de desarrollo de software, asegurar la calidad significa **tratar con defectos**."*

**Tres formas genéricas de tratar con defectos** (Tian) [TIA]:
1. **Prevención de defectos** (defect prevention)
2. **Detección y eliminación de defectos** (defect detection and removal)
3. **Contención de defectos** (defect containment)

---

## 2. Densidad de defectos

Tian menciona la **tasa de defectos** como una métrica fundamental [TIA]:

> *"La ausencia de defectos, este factor usualmente se expresa de dos maneras: tasa de defecto (número de defectos por KLOC, Puntos de Función, otra unidad) y confiabilidad (número de fallas por n horas de operación, tiempo medio entre fallas, otra probabilidad de libre de fallas por unidad de tiempo)."* [BED, parafraseando a Tian]

**Fórmula general:**

\[ \text{Densidad de defectos} = \frac{\text{Número de defectos}}{\text{Tamaño del software (KLOC o PF)}} \]

**Unidades comunes:**
- **Defectos/KLOC** (miles de líneas de código)
- **Defectos/Punto de Función**

**Interpretación:** Una densidad de defectos más baja indica, en principio, mayor calidad. Sin embargo, esta métrica debe usarse con cautela, ya que diferentes organizaciones pueden tener diferentes umbrales de tolerancia y diferentes rigor en la detección.

---

## 3. Tasa de fallas (Failure rate)

Tian distingue entre defectos (como entidades estáticas en el código) y fallas (como eventos observables durante la ejecución) [TIA].

**Métricas de tasa de fallas:**
- **Número de fallas por n horas de operación**
- **Tiempo medio entre fallas (MTBF)**
- **Probabilidad de funcionamiento sin fallas por unidad de tiempo** (confiabilidad)

**Relación entre densidad de defectos y tasa de fallas:** No es una correlación perfecta. Un software con alta densidad de defectos puede tener baja tasa de fallas si los defectos están en caminos de ejecución poco frecuentes (fallos latentes).

---

## 4. Perfil de calidad (Quality Profile)

Tian introduce el concepto de **perfil de calidad** (Humphrey, 1998) como un marco multidimensional para la medición de defectos [TIA]:

> *"En el proceso de tratar con defectos, se pueden tomar varias mediciones directas de defectos y otras mediciones indirectas de calidad (utilizadas como indicadores de calidad), formando a menudo un espacio de medición multidimensional al que se refiere como **perfil de calidad**."* [TIA]

**Componentes de un perfil de calidad (implícitos en Tian):**
- Densidad de defectos por componente
- Distribución de defectos por tipo
- Distribución de defectos por fase de inyección
- Distribución de defectos por fase de detección
- Tiempo medio para corregir defectos

---

## 5. Métricas relacionadas con procesos de mejora

### 5.1. Métricas para la evaluación de procesos (Bedini)

Bedini define conceptos que son medibles en el contexto de mejora de procesos [BED]:

| Concepto | Cómo se mide (implícito) |
|----------|--------------------------|
| **Capacidad de un proceso** | Rango de resultados esperados (predicción). Se mide mediante análisis histórico y modelos de predicción. |
| **Performance de un proceso** | Resultados actuales logrados (medición retrospectiva). Se mide mediante métricas de proyectos completados. |
| **Madurez de un proceso** | Grado en que un proceso está definido, administrado, medido, controlado y es efectivo. Se mide mediante evaluaciones de madurez (ej., SCAMPI para CMM). |

### 5.2. Métricas para la mejora continua

Basado en los **6 pasos para mejorar procesos** de Bedini [BED]:

| Paso | Métrica asociada |
|------|------------------|
| 1. Comprender el estado actual | Línea base de desempeño del proceso |
| 2. Desarrollar una visión de los procesos anhelados | Metas cuantitativas (ej., reducir densidad de defectos en X%) |
| 3. Establecer lista de acciones priorizadas | No es métrica, sino plan |
| 4. Producir un plan | No es métrica |
| 5. Asegurar recursos | No es métrica |
| 6. Comenzar otra vez | Medición de progreso vs. línea base |

---

## 6. Métricas para la estimación de costos de calidad (COCOMO)

Fitzpatrick señala que el modelo COCOMO de Boehm (1984) utiliza factores de calidad como entradas para la estimación [FITZ]. Las métricas de entrada incluyen:

**Factores de calidad en COCOMO (según Fitzpatrick, adaptado de Ghezzi et al.)** [FITZ]:

| Grupo | Atributos medibles |
|-------|---------------------|
| **Tamaño** | Instrucciones fuente, instrucciones objeto, número de rutinas, número de elementos de datos, número de formatos de salida, documentación, número de personal |
| **Atributos del programa** | Tipo, complejidad, lenguaje, reutilización, visualización requerida, requisitos de pantalla |
| **Atributos del ordenador** | Restricción de tiempo, restricción de almacenamiento, configuración del hardware, desarrollo concurrente de hardware, equipo/software de interfaz |
| **Atributos del personal** | Capacidad del personal, continuidad del personal, experiencia en hardware, experiencia en aplicaciones, experiencia en lenguaje |
| **Atributos del proyecto** | Herramientas y técnicas, interfaz con el cliente, definición de requisitos, volatilidad de requisitos, calendario, seguridad, acceso al ordenador, software de soporte |

---

## 7. Métricas para la evaluación de la satisfacción del usuario

Bedini menciona que **la satisfacción del usuario** es uno de los factores inherentes a la calidad de software, y se mide de manera específica [BED]:

> *"La satisfacción del usuario usualmente es medida por porcentaje de satisfacción o insatisfacción. Para evitar prejuicios se utiliza las técnicas de estudio o **encuesta ciega** (el entrevistador no sabe quién es el cliente, y el cliente no sabe a qué empresa representa el entrevistador)."*

---

## 8. Resumen de métricas documentadas

| Métrica | Fórmula / Método | Fuente |
|---------|------------------|--------|
| Densidad de defectos | Defectos / KLOC o PF | Tian, Bedini |
| MTBF | T_total / N (N = fallas) | Fitzpatrick |
| MTTR | Tiempo promedio de reparación | Fitzpatrick |
| Disponibilidad | MTBF / (MTBF + MTTR) | Inferido |
| Complejidad ciclomática | Número de caminos linealmente independientes (teoría de grafos) | Fitzpatrick (McCabe) |
| Satisfacción del usuario | Porcentaje (encuesta ciega) | Bedini |
| Madurez de proceso | Evaluación SCAMPI / niveles CMM | Bedini |

---

## Preguntas de integración (estudio activo)

1. ¿Cuáles son las **tres formas genéricas** de tratar con defectos según Tian?
2. ¿Cómo se calcula la **densidad de defectos** y en qué unidades se expresa?
3. ¿Cuál es la diferencia entre **densidad de defectos** y **tasa de fallas**?
4. ¿Qué es un **perfil de calidad** (quality profile) y qué componentes puede incluir?
5. Según Bedini, ¿cómo se mide la **satisfacción del usuario** evitando prejuicios?
6. ¿Qué factores de calidad utiliza el modelo **COCOMO** como entradas para la estimación de costos?