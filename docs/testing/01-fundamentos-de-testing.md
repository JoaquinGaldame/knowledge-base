# Fundamentos de Testing

> Documento 01 de la Biblioteca Personal de Testing
>
> Objetivo: Comprender los principios fundamentales del testing de software antes de estudiar herramientas, frameworks o estrategias específicas.

---

# Índice

* Introducción
* ¿Qué es el Testing?
* ¿Por qué existe el Testing?
* Calidad de Software
* Defecto, Error y Falla
* Objetivos del Testing
* ¿Qué puede demostrar el Testing?
* ¿Qué NO puede demostrar el Testing?
* Coste de los Defectos
* Regresiones
* Riesgo y Testing
* Cobertura de Código
* Testing Manual vs Automatizado
* Verificación vs Validación
* Testing vs Debugging
* Los 7 Principios del Testing (ISTQB)
* Conceptos Fundamentales para Desarrolladores
* Mitos Comunes sobre Testing
* Cómo Piensa un Ingeniero Senior sobre Testing
* Resumen Ejecutivo
* Glosario
* Referencias

---

# Introducción

## Objetivo del documento
<div class="vp-doc">
El propósito de este documento es poder comprender y entender por completo para que se utilza el Testing en el proceso de Desarrollo de Software. 
Es necesario comprender desde cero cada fundamento para construir un aprendizaje que permita mejorar como programador y software engineer, este documento intentará tapar las lagunas de conocimientos que se presentan en el día. Servirá como respaldo a futuro para recordar y reconocer fundamentos de testing.
Este documento no es una capacitación ni una guía de uso, sirve solo para leer y entender los conceptos, logrando mantener la importancia de aplicar testing en el proceso de desarrollo de software que permiten mejorar las capacidades profesionales de un desarrollador y la calidad de software entregable.
</div>

## Público objetivo

Este documento esta destinado a Desarrolladores de software, programadores, informáticos y todo lo relacionado con la ingeniería de software.

## Conocimientos previos requeridos

Es necesario tener conocimientos previos de:
- Fundamentos de Programción
- Desarrollo Web Full Stack
- Integración de sistemas
- Bases de Datos
- Fundamentos de Ingeniería de Software.

---

# ¿Qué es el Testing?

## Definición

El testing es el proceso de evaluar un sistema de software mediante actividades de verificación y validación con el objetivo de descubrir defectos, reducir riesgos y generar confianza sobre el comportamiento del producto.

El testing no consiste únicamente en ejecutar pruebas automáticas o manuales. Su propósito principal es obtener información objetiva acerca de la calidad del software para facilitar la toma de decisiones durante el desarrollo, despliegue y mantenimiento del sistema.

En términos prácticos, testear significa buscar evidencia de que el software funciona correctamente bajo determinadas condiciones y detectar situaciones donde pueda fallar antes de que dichas fallas impacten a los usuarios o al negocio.

El Software Testing evalúa la calidad del software y ayudan a reducir el riesgo de que este falle durante su funcionamiento. Son un conjunto de actividades destinadas a detectar defectos y evaluar la calidad de los productos de trabajo de software.

## Definición según ISTQB

El `Testing` es el proceso dentro del ciclo de vida del desarrollo de software que evalúa la calidad de un componente o sistema y los productos de trabajo relacionados.

## Explicación práctica

Cuando un desarrollador implementa una nueva funcionalidad, existe el riesgo de introducir defectos que afecten partes ya existentes del sistema.

El testing permite reducir ese riesgo mediante la ejecución de verificaciones repetibles que validan comportamientos esperados y detectan comportamientos inesperados.

Por ejemplo, si un sistema permite crear reservas hoteleras, una prueba puede verificar que una reserva válida sea aceptada y almacenada correctamente. Otra prueba puede verificar que una reserva duplicada sea rechazada.


## Ejemplo real

Supongamos que un desarrollador modifica la lógica de autenticación de una API.

Sin testing:

- El cambio se despliega.
- Un error impide iniciar sesión a todos los usuarios.
- El problema es descubierto en producción.

Con testing:

- Los tests detectan inmediatamente que el login dejó de funcionar.
- El error se corrige antes del despliegue.

En este caso, el testing actuó como un mecanismo de protección frente a una regresión.

---

# ¿Por qué existe el Testing?

## Problema que intenta resolver

Todo software es desarrollado por seres humanos. Los seres humanos cometen errores al interpretar requisitos, diseñar soluciones, escribir código, configurar infraestructura y operar sistemas. Como consecuencia, los sistemas contienen defectos. El testing existe porque no es posible asumir que un software funciona correctamente únicamente porque compila, se despliega o parece funcionar durante una demostración.

El testing como forma de control de calidad, contribuye a alcanzar los objetivos de test acordados dentro de los límites establecidos acodados en cuanto a alcance, plazos, calidad y presupuesto. La contribución del Testing al éxito no debe limitarse a las actividades del equipo de test. Cualquier parte interesada puede utilizar sus habilidades en materia de pruebas para llevar el proyecto al éxito. La realización de Testing de los componentes de sistemas y los productos de trabajo asociados (como la documentación) ayudan a identificar los defectos del software.

### Contribuciones de los Testing al Éxito
Las pruebas proporcionan un medio rentable para detectar defectos. Estos defectos pueden luego eliminarse (mediante la depuración – una actividad que no es prueba), por lo que las pruebas contribuyen indirectamente a una mayor calidad de los objetos de prueba.
Las pruebas proporcionan un medio para evaluar directamente la calidad de un objeto de prueba en varias fases del SDLC.
Estas medidas se utilizan como parte de una actividad de gestión de proyectos más amplia, contribuyendo a las decisiones para avanzar a la siguiente fase del SDLC, como la decisión de lanzamiento.
Las pruebas proporcionan a los usuarios una representación indirecta en el proyecto de desarrollo. Los testers se aseguran de que su comprensión de las necesidades de los usuarios se considere a lo largo del ciclo de vida del desarrollo. La alternativa es involucrar a un conjunto representativo de usuarios como parte del proyecto de desarrollo, lo que generalmente no es posible debido a los altos costos y la falta de disponibilidad de usuarios adecuados.

### Pruebas y Aseguramiento de la Calidad (QA)
Aunque las personas a menudo usan los términos "pruebas" y "aseguramiento de la calidad" (QA) como sinónimos, las pruebas y el QA no son lo mismo.
Las pruebas son un enfoque correctivo orientado al producto que se centra en aquellas actividades que apoyan el logro de niveles apropiados de calidad. Las pruebas son una forma importante de control de calidad, mientras que otras incluyen métodos formales (verificación de modelos y prueba de corrección), simulación y prototipado.
El QA es un enfoque preventivo orientado al proceso que se centra en la implementación y mejora de los procesos. Se basa en la premisa de que si se sigue correctamente un buen proceso, entonces generará un buen producto. El QA se aplica tanto a los procesos de desarrollo como de pruebas, y es responsabilidad de todos en un proyecto.
Los resultados de las pruebas son utilizados por el QA y por las pruebas mismas. En las pruebas se utilizan para corregir defectos, mientras que en el QA proporcionan retroalimentación sobre qué tan bien se están desempeñando los procesos de desarrollo y de pruebas.

### Errores, Defectos, Fallas y Causas Raíz

Los seres humanos cometen errores, los cuales producen defectos (fallos, bugs), que a su vez pueden resultar en fallas. Los humanos cometen errores por varias razones, como la presión del tiempo, la complejidad de los productos de trabajo, los procesos, la infraestructura o las interacciones, o simplemente porque están cansados o carecen de la formación adecuada.
Los defectos se pueden encontrar en la documentación, como una especificación de requisitos o un script de prueba, en el código fuente, o en un producto de trabajo de soporte, como un archivo de construcción (build). Los defectos en los productos de trabajo producidos al principio del SDLC, si no se detectan, a menudo conducen a productos de trabajo defectuosos más adelante en el ciclo de vida. Si se ejecuta un defecto en el código, el sistema puede fallar al hacer lo que debería hacer, o hacer algo que no debería, causando una falla.
Algunos defectos siempre resultarán en una falla si se ejecutan, mientras que otros solo resultarán en una falla en circunstancias específicas, y algunos pueden nunca resultar en una falla.
Los errores y defectos no son la única causa de fallas. Las fallas también pueden ser causadas por condiciones ambientales, como cuando la radiación o los campos electromagnéticos causan defectos en el firmware.
Una causa raíz es una razón fundamental para la ocurrencia de un problema (por ejemplo, una situación que conduce a un error). Las causas raíz se identifican mediante el análisis de causa raíz, que típicamente se realiza cuando ocurre una falla o se identifica un defecto. Se cree que se pueden prevenir más fallas o defectos similares, o reducir su frecuencia, abordando la causa raíz, por ejemplo, eliminándola.


## Principios de Testing
A lo largo de los años se han sugerido varios principios de pruebas que ofrecen pautas generales aplicables a todas las pruebas. A continuación se describen siete de esos principios:

1. **Las pruebas muestran la presencia**, no la ausencia de defectos. Las pruebas pueden mostrar que hay defectos presentes en el objeto de prueba, pero no pueden probar que no hay defectos (Buxton 1970). Las pruebas reducen la probabilidad de que queden defectos sin descubrir en el objeto de prueba, pero incluso si no se encuentran defectos, las pruebas no pueden probar la corrección del objeto de prueba.

2. **Las pruebas exhaustivas son imposibles**. Probar todo no es factible excepto en casos triviales (Manna 1978). En lugar de intentar probar de manera exhaustiva, se deben utilizar técnicas de prueba, priorización de casos de prueba y pruebas basadas en riesgos para enfocar los esfuerzos de prueba.

3. **Las pruebas tempranas ahorran tiempo y dinero**. Los defectos que se eliminan al principio del proceso no causarán defectos posteriores en los productos de trabajo derivados. El costo de la calidad se reducirá, ya que ocurrirán menos fallas más adelante en el SDLC (Boehm 1981). Para encontrar defectos temprano, tanto las pruebas estáticas como las pruebas dinámicas deben comenzar lo antes posible.

4. **Los defectos se agrupan**. Un pequeño número de componentes del sistema generalmente contiene la mayoría de los defectos descubiertos o es responsable de la mayoría de las fallas operativas (Enders 1975). Este fenómeno es una ilustración del principio de Pareto. Los grupos de defectos predichos y los grupos de defectos reales observados durante las pruebas o en operación son una entrada importante para las pruebas basadas en riesgos.

5. **Las pruebas se desgastan**. Si las mismas pruebas se repiten muchas veces, se vuelven cada vez menos efectivas para detectar nuevos defectos (Beizer 1990). Para superar este efecto, es posible que sea necesario modificar las pruebas y los datos de prueba existentes, y que sea necesario escribir nuevas pruebas. Sin embargo, en algunos casos, repetir las mismas pruebas puede tener un resultado beneficioso, por ejemplo, en las pruebas de regresión automatizadas.

6. **Las pruebas dependen del contexto**. No existe un único enfoque universalmente aplicable para las pruebas. Las pruebas se realizan de manera diferente en diferentes contextos (Kaner 2011).

7. **Falacia de la ausencia de defectos**. Es una falacia (es decir, una concepción errónea) esperar que la verificación del software asegure el éxito de un sistema. Probar a fondo todos los requisitos especificados y corregir todos los defectos encontrados podría seguir produciendo un sistema que no cumpla con las necesidades y expectativas de los usuarios, que no ayude a lograr los objetivos comerciales del cliente y que sea inferior en comparación con otros sistemas competidores. Además de la verificación, también se debe llevar a cabo la validación (Boehm 1981).

## Riesgos de no realizar testing

El software que no funciona correctamente puede provocar muchos problemas, incluyendo pérdida de dinero, tiempo o reputación empresarial y, en casos extremos, incluso lesiones o muerte. Los riesgos de producto asociados a una calidad inadecuada incluyen la insatisfacción del usuario, la pérdida de ingresos, confianza y reputación, daños a terceros, altos costes de mantenimiento, saturación del servicio de soporte, sanciones penales y, en casos extremos, daños físicos, lesiones o incluso la muerte. No realizar actividades de testing implica asumir estos riesgos sin control, lo que puede comprometer gravemente el éxito del proyecto.

## Beneficios del testing
El testing presenta los siguientes beneficios:

- Detección efectiva de defectos: Proporciona un medio efectivo para detectar defectos, que luego pueden eliminarse (mediante depuración), contribuyendo indirectamente a una mayor calidad.
- Evaluación directa de la calidad: Permite evaluar la calidad de un objeto de prueba en varias fases.
- Soporte a la gestión del proyecto: Las métricas de testing ayudan en decisiones como pasar a la siguiente fase o liberar el producto.
- Representación indirecta de los usuarios: Los testers aseguran que las necesidades de los usuarios se consideren durante todo el ciclo de vida, algo que normalmente no es posible hacer directamente por los altos costes y la falta de disponibilidad de usuarios reales.

---

# Calidad de Software

## ¿Qué es la calidad?

La calidad del software puede evaluarse mediante actividades de verificación y validación, las cuales permiten obtener evidencia sobre el cumplimiento de requisitos y necesidades de los usuarios.
- La verificación está principalmente orientada a comprobar que el sistema fue construido correctamente según las especificaciones, mientras que la validación está orientada a comprobar que se construyó el sistema correcto para las necesidades del usuario y del negocio.
- La validación consiste en comprobar si el sistema satisface las necesidades de los usuarios y otras partes interesadas en su entorno operativo. 

El aseguramiento de la calidad es un enfoque preventivo orientado a procesos que se basa en la premisa de que si se sigue correctamente un buen proceso, entonces generará un buen producto. El testing, por su parte, es una forma de control de calidad, orientada al producto y de enfoque correctivo.

### Verificación y Validación

La verificación y la validación son conceptos fundamentales dentro del aseguramiento de la calidad del software. Aunque suelen mencionarse juntas, responden a preguntas diferentes y persiguen objetivos distintos.

La verificación tiene como propósito comprobar que el software ha sido construido correctamente de acuerdo con las especificaciones definidas. Su foco principal se encuentra en los requisitos, diseños, normas y criterios técnicos establecidos durante el desarrollo. Cuando se realiza una actividad de verificación, se intenta responder a la siguiente pregunta:

    ¿Estamos construyendo el producto correctamente?

Las actividades de verificación incluyen revisiones de requisitos, inspecciones de diseño, revisiones de código, análisis estático y diferentes tipos de pruebas técnicas. Todas ellas buscan detectar inconsistencias, errores o desviaciones respecto de lo que fue especificado.

La validación, en cambio, se centra en determinar si el sistema construido realmente satisface las necesidades de los usuarios y del negocio. Su foco principal no está en las especificaciones técnicas sino en el valor que el sistema aporta una vez que es utilizado en condiciones reales. Cuando se realiza una actividad de validación, se intenta responder a la siguiente pregunta:

    ¿Estamos construyendo el producto correcto?

Las actividades de validación incluyen pruebas de aceptación, pruebas realizadas por usuarios, evaluaciones funcionales y cualquier mecanismo que permita comprobar que el producto resuelve efectivamente el problema para el cual fue desarrollado.

Esta distinción es extremadamente importante porque un sistema puede superar todas las actividades de verificación y aun así fracasar desde el punto de vista de la validación. Un software puede cumplir perfectamente cada requisito documentado y no contener defectos relevantes, pero seguir siendo un fracaso porque los requisitos originales eran incorrectos, incompletos o no representaban las necesidades reales del negocio.

Por esta razón, la calidad del software no puede medirse únicamente a través del cumplimiento de requisitos técnicos. También debe evaluarse desde la perspectiva del usuario y de los objetivos organizacionales.

## Calidad según ISO/IEC 25010
La calidad del software es un concepto multidimensional. Para evitar interpretaciones ambiguas, la norma internacional ISO/IEC 25010 propone un modelo que define las principales características mediante las cuales puede evaluarse la calidad de un producto software.

Según este modelo, la calidad no depende únicamente de que el sistema funcione correctamente. También debe analizarse considerando aspectos como la adecuación funcional, el rendimiento, la seguridad, la usabilidad, la mantenibilidad y la portabilidad.

La adecuación funcional evalúa si las funcionalidades implementadas permiten resolver correctamente las necesidades del usuario. La eficiencia de desempeño analiza cómo se comporta el sistema respecto al consumo de recursos y tiempos de respuesta. La compatibilidad estudia la capacidad del software para interactuar con otros sistemas. La usabilidad se enfoca en la facilidad con la que los usuarios pueden comprender y utilizar la aplicación.

Por su parte, la fiabilidad mide la capacidad del sistema para mantener un funcionamiento estable a lo largo del tiempo. La seguridad evalúa la protección de la información y de los recursos frente a amenazas internas y externas. La mantenibilidad analiza la facilidad con la que el sistema puede ser corregido, mejorado o adaptado. Finalmente, la portabilidad estudia la capacidad de ejecutar el software en distintos entornos tecnológicos.

Este modelo resulta especialmente valioso porque obliga a comprender que la calidad es mucho más amplia que la ausencia de defectos. Un sistema puede funcionar correctamente desde el punto de vista funcional y seguir presentando problemas graves de rendimiento, seguridad o mantenibilidad.

## Calidad percibida vs calidad técnica

Uno de los errores más frecuentes en proyectos de software consiste en asumir que la calidad técnica garantiza automáticamente el éxito de un producto. La experiencia de la industria demuestra que esto no siempre ocurre.

La `calidad técnica` hace referencia a las características internas del sistema. Incluye aspectos como la arquitectura, la mantenibilidad, la escalabilidad, la seguridad, la confiabilidad y el cumplimiento de requisitos funcionales. Estas características suelen ser evaluadas por desarrolladores, arquitectos y especialistas técnicos mediante actividades de verificación.

La calidad percibida, en cambio, representa la experiencia real que tienen los usuarios y el negocio al utilizar el producto. Está relacionada con factores como la facilidad de uso, la satisfacción del usuario, la utilidad práctica del sistema y la capacidad de resolver problemas reales.

Aunque ambas perspectivas se encuentran relacionadas, no son equivalentes. Es perfectamente posible construir una aplicación técnicamente impecable que fracase comercialmente porque resulta compleja de utilizar o porque no responde adecuadamente a las necesidades del mercado. Del mismo modo, algunos productos técnicamente imperfectos pueden alcanzar un gran éxito debido a que generan valor significativo para sus usuarios.

## Características de calidad
La norma ISO/IEC 25010 define un modelo de calidad ampliamente utilizado en ingeniería de software. Según este modelo, la calidad de un sistema puede analizarse mediante distintas características:

- **Adecuación funcional**: Capacidad del sistema para proporcionar funciones que satisfagan las necesidades especificadas.

- **Rendimiento**: Capacidad del sistema para mantener niveles adecuados de rendimiento utilizando los recursos disponibles.

- **Compatibilidad:**: Capacidad para coexistir e interoperar con otros sistemas.

- **Usabilidad**: Capacidad del sistema para ser comprendido, aprendido y utilizado eficazmente por los usuarios.

- **Fiabilidad**: Capacidad del sistema para mantener un funcionamiento correcto durante un periodo determinado. Característica de calidad no funcional que se refiere a la capacidad del software de mantener su nivel de rendimiento bajo condiciones establecidas durante un período de tiempo.

- **Seguridad**: Capacidad para proteger información y recursos frente a accesos no autorizados. Las vulnerabilidades de seguridad pueden detectarse mediante análisis estático.

- **Mantenibilidad**: Característica de calidad no funcional que puede evaluarse mediante testing estático y análisis de código, permitiendo medir la facilidad con la que el software puede ser modificado para corregir defectos, añadir nuevas funcionalidades o adaptarse a entornos cambiantes. Capacidad para modificar, corregir, mejorar o adaptar el sistema con un esfuerzo razonable.

- **Portabilidad**: Capacidad para ser transferido y ejecutado en diferentes entornos.

---

# Defecto, Error y Falla

## Error (Human Error)

Un error es una acción humana incorrecta que produce un resultado equivocado.

Ocurre durante actividades como:
- Análisis
- Diseño
- Programación
- Configuración
- Operación

Ejemplo
Un desarrollador interpreta incorrectamente un requisito y considera que la edad mínima para registrarse es 16 años cuando el negocio exige 18.

Ese mal entendimiento constituye un error.

## Defecto (Bug)

Un defecto es una imperfección introducida en un artefacto de software debido a uno o más errores humanos.

Puede existir en:
- Código fuente
- Requisitos
- Diagramas
- Scripts SQL
- Configuraciones
- Infraestructura

Ejemplo
El desarrollador implementa: if (age >= 16)

cuando debería ser: if (age >= 18)

Ese código contiene un defecto.

## Falla (Failure)

Una falla ocurre cuando un defecto se ejecuta y provoca un comportamiento incorrecto observable.

Ejemplo
Un usuario de 17 años logra registrarse en el sistema.

El sistema se comportó incorrectamente.

Esa manifestación observable es una falla.

## Relación entre los tres conceptos
Error Humano
      ↓
Defecto (Bug)
      ↓
Falla observable

No todos los defectos producen fallas. Un defecto puede permanecer oculto durante años si nunca se ejecuta la condición que lo activa.

## Diferencias

| Concepto | Definición | Ejemplo |
| -------- | ---------- | ------- |
| Error    |            |         |
| Defecto  |            |         |
| Falla    |            |         |

---

# Objetivos del Testing

## Detección de defectos

[Completar]

## Reducción de riesgo

El testing evalúa la calidad del software y ayuda a reducir el riesgo de fallo del software en operación. El enfoque de testing en el cual las actividades de testing son seleccionadas, priorizadas y gestionadas basándose en el análisis y control de riesgos se denomina testing basado en riesgos. El nivel de riesgo se determina mediante dos factores: la probabilidad de ocurrencia del riesgo y el impacto (daño) de esa ocurrencia. Cuanto mayor es el nivel de riesgo, más importante es su tratamiento. El testing puede mitigar los riesgos de producto seleccionando los testers con el nivel adecuado de experiencia y habilidades, aplicando un nivel apropiado de independencia del testing, realizando revisiones y análisis estático, aplicando las técnicas de prueba y niveles de cobertura apropiados, aplicando los tipos de prueba adecuados que aborden las características de calidad afectadas, y realizando pruebas dinámicas, incluyendo pruebas de regresión.

## Incremento de confianza

El testing construye confianza en la calidad del objeto de prueba. El testing proporciona un medio para evaluar directamente la calidad de un objeto de prueba en diversas fases del ciclo de vida del desarrollo del software. Las pruebas de caja blanca proporcionan una medición objetiva de la cobertura y la información necesaria para permitir que se generen pruebas adicionales para aumentar esta cobertura, y posteriormente aumentar la confianza en el código. El testing estático proporciona la capacidad de evaluar la calidad de los productos de trabajo y de construir confianza en ellos. Al verificar los requisitos documentados, las partes interesadas también pueden asegurarse de que estos requisitos describen sus necesidades reales.

## Soporte para decisiones

Las medidas obtenidas del testing se utilizan como parte de una actividad de gestión de proyectos más amplia, contribuyendo a las decisiones para avanzar a la siguiente fase del ciclo de vida del desarrollo del software, tales como la decisión de lanzamiento. La información proporcionada por el testing a las partes interesadas les permite tomar decisiones informadas. La trazabilidad precisa entre los elementos de la base de pruebas y los artefactos de prueba permite determinar el impacto de los cambios, facilita las auditorías, ayuda a cumplir los criterios de gobierno de TI, y proporciona información para evaluar la calidad del producto, la capacidad del proceso y el progreso del proyecto en relación con los objetivos de negocio.

---

# ¿Qué puede demostrar el Testing?

[Completar]

---

# ¿Qué NO puede demostrar el Testing?

[Completar]

---

# Coste de los Defectos

## Curva del coste del bug

[Completar]

## Coste en desarrollo

[Completar]

## Coste en producción

[Completar]

## Casos reales conocidos

[Completar]

---

# Regresiones

## Definición

[Completar]

## Ejemplos

[Completar]

## Prevención

[Completar]

---

# Riesgo y Testing

## ¿Qué es un riesgo?

[Completar]

## Riesgo técnico

[Completar]

## Riesgo de negocio

[Completar]

## Priorización de pruebas

[Completar]

---

# Cobertura de Código

## Definición

[Completar]

## Tipos de cobertura

### Statement Coverage

[Completar]

### Branch Coverage

[Completar]

### Path Coverage

[Completar]

## Limitaciones

[Completar]

## Por qué 100% de cobertura no garantiza calidad

[Completar]

---

# Testing Manual vs Automatizado

## Testing Manual

### Ventajas

[Completar]

### Desventajas

[Completar]

## Testing Automatizado

### Ventajas

[Completar]

### Desventajas

[Completar]

## Comparación

| Aspecto       | Manual | Automatizado |
| ------------- | ------ | ------------ |
| Velocidad     |        |              |
| Coste inicial |        |              |
| Repetibilidad |        |              |
| Exploración   |        |              |

---

# Verificación vs Validación

## Verificación

[Completar]

## Validación

[Completar]

## Diferencias

[Completar]

---

# Testing vs Debugging

## Testing

[Completar]

## Debugging

[Completar]

## Relación entre ambos

[Completar]

---

# Los 7 Principios del Testing (ISTQB)

## 1. El testing muestra la presencia de defectos, no su ausencia

[Completar]

## 2. El testing exhaustivo es imposible

[Completar]

## 3. Testing temprano

[Completar]

## 4. Agrupamiento de defectos

[Completar]

## 5. Paradoja del pesticida

[Completar]

## 6. El testing depende del contexto

[Completar]

## 7. Ausencia de errores no implica éxito

[Completar]

---

# Conceptos Fundamentales para Desarrolladores

## Confiabilidad

[Completar]

## Observabilidad

[Completar]

## Reproducibilidad

[Completar]

## Determinismo

[Completar]

## Mantenibilidad

[Completar]

---

# Mitos Comunes sobre Testing

## "Los tests garantizan que el software no tiene bugs"

[Completar]

## "100% de cobertura significa calidad"

[Completar]

## "Solo QA debe testear"

[Completar]

## "Testing ralentiza el desarrollo"

[Completar]

---

# Cómo Piensa un Ingeniero Senior sobre Testing

## Enfoque basado en riesgo

[Completar]

## Coste vs beneficio

[Completar]

## Qué testear y qué no testear

[Completar]

## Testing como herramienta de confianza

[Completar]

---

# Resumen Ejecutivo

[Completar]

---

# Glosario

| Término   | Definición |
| --------- | ---------- |
| Testing   | El proceso dentro del ciclo de vida del desarrollo de software que evalúa la calidad de un componente o sistema y los productos de trabajo relacionados.      |
| Bug       | Desviación entre el comportamiento esperado de un software y el comportamiento real observado durante las pruebas. Es un defecto en el código fuente, diseño o arquitectura que causa un fallo en el sistema, impidiendo que la aplicación cumpla con sus requisitos funcionales o de rendimiento.        |
| Defecto   | Una imperfección o deficiencia en un producto de trabajo que no cumple con sus requisitos o especificaciones o que perjudica su uso previsto.    |
| Error     | Una acción humana que produce un defecto.        |
| Falla     | Un evento en el que un componente o sistema no cumple con sus requistos dentro de los límites específicados durante su ejecución.      |
| Riesgo    | Un factor que podría tener consecuencias negativas a futuro.   |
| Cobertura | En español `Cobertura`, es el grado de apertura en que un conjunto de pruebas evalúa elementos de cobertura específicos, expresado como porcentaje.      |

Fuente: [ISBTQ Glossary](https://glossary.istqb.org/en_US/search)
---

# Referencias

## Fuentes Primarias

* ISTQB Glossary
* ISTQB Foundation Level Syllabus
* ISO/IEC 25010

## Fuentes Secundarias

* Martin Fowler
* Microsoft Learn
* Google Testing Blog

## Lecturas Recomendadas

[Completar]
