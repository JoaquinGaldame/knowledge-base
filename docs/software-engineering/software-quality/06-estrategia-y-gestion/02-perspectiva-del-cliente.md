# Estrategia de Calidad desde la Perspectiva del Comprador/Cliente

> **Fuente primaria:** [FITZ] §3.2 (pp. 30-31)
> **Fuente secundaria:** [TIA] §2.1 (expectativas de calidad del consumidor)

## 1. El rol del comprador en la calidad

Fitzpatrick señala que "temas de calidad similares son de interés para el comprador del sistema, pero desde una **perspectiva diferente**" [FITZ].

**Las dos actividades principales del comprador en relación con la calidad:**

| Actividad | Descripción |
|-----------|-------------|
| **Evaluación y selección de productos genéricos** | Cuando el comprador adquiere productos ya existentes en el mercado (off-the-shelf). |
| **Especificación de requisitos para productos a medida** | Cuando el comprador contrata el desarrollo de un producto específico (bespoke). |

**En ambos casos, el comprador debe:**
- Gestionar los requisitos de calidad desde una perspectiva de usuario.
- Verificar durante el desarrollo que los requisitos de calidad se están cumpliendo.
- Probar que los requisitos de calidad se han incorporado (acceptance testing).

---

## 2. Evaluación y selección de productos de software

### 2.1. El enfoque general

Fitzpatrick afirma que "quienes tienen la responsabilidad de adquirir aplicaciones de software para una organización ciertamente querrán centrarse mucho en **todos los factores de calidad**" [FITZ].

Para evaluar y seleccionar productos candidatos, "Robson (1994) sugiere que debe utilizarse alguna forma de **puntuación y clasificación (pesado y calificación)**" [FITZ].

### 2.2. Principios generales de la matriz de selección (Robson)

Fitzpatrick enumera los **5 principios generales** de Robson para la selección de software [FITZ]:

| Paso | Acción |
|------|--------|
| **1** | Seleccionar los criterios de evaluación. |
| **2** | Asociar **pesos de importancia (%)** a cada criterio. |
| **3** | Puntuar cada sistema candidato en función de cómo satisface cada criterio (generalmente en una escala, ej., 1-5 o 1-10). |
| **4** | Calcular la calificación de cada candidato (sumatoria de puntuaciones × peso). |
| **5** | Seleccionar el candidato con la **puntuación más alta**. |

### 2.3. Ejemplo concreto: árbol de selección ponderada de Robson

Fitzpatrick presenta un ejemplo parcial de Robson para un **proyecto de automatización de oficina pequeña** [FITZ]. Los criterios se organizan en un árbol de categorías:

| Categoría | Peso (%) | Criterios incluidos (parcial) |
|-----------|----------|-------------------------------|
| **Hardware** | 20% | Procesadores, Costo (20%), Tamaño (20%), Velocidad (10%), Modularidad (25%), Compatibilidad (25%) |
| **Software** | 40% | Dispositivos de comunicación, Dispositivos de salida, **Confiabilidad**, **Modularidad y expandibilidad**, **Usabilidad**, **Flexibilidad**, **Mantenimiento** |
| **Calidad** | 50% | Facilidad de cambio, Facilidad de mejora, **Portabilidad**, Facilidad de uso, Rendimiento |
| **Vendedor** | 10% | Investigación y actualizaciones, Precio, Implementación, Alternativas de financiación |
| **Tiempo** | 25% | Tiempo para ejecutar tarea estándar, Tiempo para transmisión estándar, Tiempo para hacer respaldo |
| **Costos operativos** | 25% | - |

**Observación crítica de Fitzpatrick:**
> *"Bajo el encabezado de software, los criterios son reconocibles como **factores de calidad**. Sería apropiado ampliar esta lista para incluir una gama completa de factores de calidad."* [FITZ]

### 2.4. Aplicación a productos a medida

Para productos desarrollados a medida, Fitzpatrick señala que los profesionales de sistemas también "necesitan poder especificar los requisitos de calidad para productos hechos a medida" [FITZ].

**Procedimiento recomendado:**
> *"En esta situación, deben considerarse **todos los factores de calidad**, incluirse los apropiados, y definirse los criterios para su medición y aceptación."* [FITZ]

---

## 3. Expectativas de calidad del consumidor (Tian)

Tian complementa la perspectiva de Fitzpatrick describiendo las expectativas de calidad desde el lado del consumidor [TIA].

### 3.1. Expectativas básicas del usuario

> *"La expectativa básica de calidad de un usuario es que un sistema de software **realice funciones útiles según lo especificado**."* [TIA]

**Dos elementos de esta expectativa:**

| Elemento | Descripción | Relación con aseguramiento de calidad |
|----------|-------------|--------------------------------------|
| **Validación** | Realiza las funciones correctas según lo especificado, que idealmente se ajustan a las necesidades del usuario (fit for use). | Se relaciona con la validación (¿estamos construyendo el producto correcto?). |
| **Verificación** | Realiza estas funciones correctamente durante el uso repetido o durante un largo período de tiempo (confiabilidad). | Se relaciona con la verificación (¿estamos construyendo el producto correctamente?). |

### 3.2. Expectativas avanzadas y deleite del cliente

Tian, citando a Denning (1992), propone ir más allá de las expectativas básicas [TIA]:

> *"Mirando hacia el futuro, podemos trabajar para cumplir con esta expectativa básica y más allá para **deleitar a los clientes y usuarios** previniendo impactos negativos imprevistos y produciendo efectos positivos inesperados."* [TIA]

### 3.3. Usabilidad como expectativa prioritaria para usuarios masivos

Tian señala que, para muchos usuarios de software ubicuo, la **usabilidad** puede ser una expectativa de calidad más importante que la confiabilidad [TIA]:

> *"Para muchos usuarios del software y sistemas omnipresentes de hoy en día, la facilidad de uso, o **usabilidad**, puede ser una expectativa de calidad más importante que la confiabilidad u otras preocupaciones."*

**Ejemplo concreto (Tian):**
> *"La adopción de interfaces gráficas de usuario (GUI) en computadoras personales para reemplazar los intérpretes de comandos basados en texto utilizados a menudo en mainframes está impulsada principalmente por las preocupaciones de usabilidad para su enorme población de usuarios."*

**Otro ejemplo:**
> *"Del mismo modo, la facilidad de instalación es otra tendencia importante para el software destinado a la misma población, para permitir una instalación y operación sin dolor (y casi sin esfuerzo), o el llamado 'plug-and-play'."*

### 3.4. Diferentes usuarios, diferentes prioridades

Tian señala que "diferentes usuarios del mismo sistema pueden tener diferentes opiniones y prioridades" [TIA]:

| Tipo de usuario | Prioridad de calidad |
|----------------|---------------------|
| **Usuarios novatos** | La usabilidad es más importante. |
| **Usuarios sofisticados de la web** | La confiabilidad es más importante (Vatanasombut et al., 2004). |

### 3.5. Expectativas para "usuarios no humanos"

Tian extiende la definición de usuario para incluir entidades no humanas [TIA]:

> *"Podemos extender el concepto de usuarios para incluir usuarios no humanos o 'invisibles', como otros software, hardware embebido y el entorno operativo general en el que el software opera e interactúa (Whittaker, 2001)."*

**Expectativas de calidad para estos casos:**
- **Mejor interoperabilidad**
- **Adaptabilidad** para que el software pueda trabajar bien con otros y dentro de su entorno circundante.

### 3.6. Expectativas básicas del cliente (adicionales a las del usuario)

Tian añade que los clientes (quienes adquieren el software) tienen las mismas expectativas que los usuarios, más una adicional [TIA]:

> *"Las expectativas básicas de calidad de un cliente son similares a las de un usuario, con la preocupación adicional por el **costo del software o servicio**."*

Esta preocupación adicional se refleja en la llamada **visión de calidad basada en el valor** (value-based view):
> *"Es decir, si un cliente está dispuesto a pagar por ello."* [TIA]

---

## 4. Productividad del usuario y calidad

Fitzpatrick dedica una subsección específica a la **productividad del usuario** como un tema de interés estratégico para el comprador [FITZ].

### 4.1. La tesis central

> *"La **usabilidad** es una preocupación importante para una organización que invierte en sistemas de información."* [FITZ]

### 4.2. Consecuencias de una mala usabilidad

Fitzpatrick enumera las consecuencias de un software que no es utilizable [FITZ]:

| Consecuencia | Impacto en la organización |
|--------------|---------------------------|
| **Rechazo por parte del personal usuario** | "Rechazarán el software que no sea adecuado para el propósito previsto, que sea difícil de usar, difícil de aprender o que no pueda adaptarse a las preferencias y habilidades de los usuarios." |
| **Impacto directo en la productividad** | Para sistemas grandes con "quizás miles de usuarios, las ganancias de productividad pueden ser sustanciales." |
| **Insatisfacción del personal** | "Además del costo perdido del sistema inutilizable, el personal se volverá insatisfecho, lo que podría resultar en una alta rotación de personal y el costo adicional de ello." |

### 4.3. El objetivo: un sistema transparente

> *"El objetivo debería ser una **interfaz humano-computadora de calidad** que haga que el sistema sea transparente para los usuarios, con las consiguientes ganancias de productividad."* [FITZ]

---

## 5. Resumen de responsabilidades del comprador

| Actividad | Acciones clave | Fuente |
|-----------|----------------|--------|
| **Adquisición de productos genéricos** | Seleccionar criterios de calidad, asignar pesos, puntuar candidatos, calcular calificaciones, seleccionar el de mayor puntuación. | Fitzpatrick (Robson) |
| **Especificación de productos a medida** | Considerar todos los factores de calidad, incluir los apropiados, definir criterios de medición y aceptación. | Fitzpatrick |
| **Verificación de requisitos de calidad** | Gestionar los requisitos de calidad desde la perspectiva del usuario durante el desarrollo. | Fitzpatrick |
| **Prueba de aceptación (acceptance testing)** | El cliente ejecuta el sistema para garantizar que cumple con las especificaciones originales. También se denomina prueba alfa. | Fitzpatrick (ISO 9000-3) |
| **Gestión de expectativas** | Distinguir entre usuarios (usabilidad, confiabilidad) y clientes (costo adicional). | Tian |

---

## Preguntas de integración (estudio activo)

1. ¿Cuáles son las **dos actividades principales** del comprador en relación con la calidad según Fitzpatrick?
2. Enumera los **5 principios generales** de Robson para la selección de software mediante matriz de ponderación.
3. En el ejemplo de Robson para automatización de oficina, ¿qué **categorías** se incluyen y con qué pesos aproximados?
4. Según Tian, ¿cuál es la **expectativa básica de calidad** de un usuario y cuáles son sus dos elementos?
5. ¿Por qué Tian afirma que la **usabilidad** puede ser más importante que la confiabilidad para usuarios de software masivo?
6. ¿Qué significa que un sistema sea **"transparente"** para el usuario y por qué es un objetivo de calidad?
7. ¿Cuáles son las **consecuencias organizacionales** de una mala usabilidad según Fitzpatrick?
8. ¿Qué expectativa adicional tiene un **cliente** (comprador) que no tiene necesariamente un **usuario** final?