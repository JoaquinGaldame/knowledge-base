# Glosario Unificado de Términos de Calidad de Software

> **Fuentes:** [FITZ], [BED], [PET], [TIA] §2.3, [ZEC]

Este glosario consolida y unifica las definiciones de los términos clave utilizados en la literatura de calidad de software, eliminando ambigüedades y proporcionando un vocabulario de referencia para el estudio.

## A

- **Accidente (Accident):** Falla con consecuencias severas, que puede resultar en daño a la propiedad, el medio ambiente o pérdida de vidas humanas. Un subconjunto crítico de las fallas. [TIA]

- **Adaptabilidad (Adaptability):** Capacidad del software para ser modificado para operar en entornos o contextos de uso diferentes a aquellos para los que fue originalmente diseñado. En ISO 9126, subcaracterística de Portabilidad. [FITZ, ISO 9126]

- **Atributo de Calidad (Quality Attribute):** Una propiedad medible o característica de un sistema software que puede ser utilizada para evaluar su calidad. Sinónimo de "factor de calidad" o "característica de calidad". [TIA]

## C

- **Calidad (Quality):** *Definición unificada operativa:* Grado en que las características de un producto software se corresponden con los requisitos, minimizan fallos, facilitan la evolución y satisfacen a los stakeholders en contexto, dentro de restricciones de recursos. [Síntesis propia]

- **Capacidad de un Proceso (Process Capability):** El rango de resultados esperados que se pueden lograr siguiendo un proceso de software. Predice el resultado más probable del próximo proyecto. [BED]

- **Característica (Characteristic):** Una propiedad inherente de un producto software. Puede ser positiva (aporta calidad), contraproducente (resta calidad), o neutral. La calidad es la existencia de características asignables a requisitos. [PET]

- **Ciclo de Vida del Software (Software Lifecycle):** El período que comienza con la concepción de un producto software y termina cuando ya no está disponible para su uso. Incluye fases de requisitos, diseño, implementación, prueba, operación y mantenimiento. [FITZ]

- **Correctitud (Correctness):** La propiedad de un programa de comportarse exactamente según lo especificado en sus requisitos funcionales. Sinónimo de "exactitud" (accuracy). Es un factor de calidad externo. [FITZ, TIA]

- **Confiabilidad (Reliability):** La probabilidad de que un software opere sin fallas durante un período de tiempo específico bajo condiciones definidas. Se mide mediante MTBF, MTTR, etc. [FITZ, TIA, ISO 9126]

## D

- **Defecto (Defect):** Término genérico que engloba errores, fallos (faults) y fallas (failures). Su uso es común en la literatura, aunque menos preciso que la triada error-fault-failure. [TIA]

## E

- **Eficiencia (Efficiency):** La relación entre el rendimiento (performance) de un software y la cantidad de recursos (tiempo de CPU, memoria, ancho de banda) que utiliza bajo condiciones establecidas. [FITZ, ISO 9126]

- **Entorno (Environment):** El contexto operacional del software, que incluye hardware, sistema operativo, otras aplicaciones, red y usuarios (humanos o no humanos). [TIA]

- **Error (Error):** Una acción humana incorrecta o faltante que resulta en la inyección de uno o más fallos (faults) en el software durante su desarrollo o modificación. Es la causa raíz humana. [TIA, IEEE 610.12]

## F

- **Factor de Calidad (Quality Factor):** Un atributo o característica de alto nivel del software que contribuye a su calidad global. Ejemplos típicos son los "-ilities": confiabilidad, usabilidad, mantenibilidad. [FITZ]

- **Falla (Failure):** La incapacidad de un sistema o componente de realizar su función requerida dentro de las especificaciones de rendimiento. Es una desviación del comportamiento observable esperado. Ocurre en tiempo de ejecución. [TIA, IEEE 610.12]

- **Fallo (Fault):** Un paso, proceso o definición de datos incorrecto en un programa. Es la condición interna que, cuando se ejecuta bajo ciertas circunstancias, causa una o más fallas (failures). Sinónimo de "bug" (término impreciso). [TIA, IEEE 610.12]

- **Fallo Latente (Dormant/Latent Fault):** Un fallo presente en el software que no ha causado una falla observable porque las condiciones para su activación no se han dado todavía. [TIA]

## I

- **Integridad (Integrity):** El grado en que se puede controlar el acceso (tanto ilegal como accidental) a los programas y datos, asegurando que no sean alterados de manera no autorizada o errónea. [FITZ]

- **Interoperabilidad (Interoperability):** La capacidad de un software para interactuar e intercambiar información con otros sistemas o componentes. Originalmente denominado "interface facility" por McCall. [FITZ, ISO 9126]

## M

- **Madurez de un Proceso (Process Maturity):** El grado en que un proceso de software está explícitamente definido, administrado, medido, controlado y es efectivo. Una organización madura posee la habilidad de gestionar proyectos de desarrollo y mantenimiento en toda la organización. [BED, CMM]

- **Mantenibilidad (Maintainability):** El esfuerzo necesario para localizar y corregir errores (corrective), adaptarse a cambios de requisitos (adaptive) o mejorar el rendimiento (perfective). Incluye analizabilidad, cambiabilidad, estabilidad y testabilidad. [FITZ, ISO 9126]

- **MTBF (Mean Time Between Failures):** Tiempo promedio entre fallas consecutivas de un sistema. Una métrica fundamental de confiabilidad. \[ \mathrm{MTBF} = \frac{T_{\text{total}}}{N} \] donde \( N \) es el número de fallas en el período \( T_{\text{total}} \). [FITZ]

## P

- **Portabilidad (Portability):** La capacidad de un software de ser transferido de un entorno operativo (hardware/OS) a otro con un esfuerzo mínimo. [FITZ, ISO 9126]

- **Productividad (Productivity):** En el contexto de calidad, se refiere a la eficiencia del proceso de desarrollo. Mejora a través de la reusabilidad, la portabilidad y la implementación de sistemas de aseguramiento de calidad como ISO 9001. [FITZ]

## R

- **Requisito (Requirement):** Una necesidad o expectativa establecida, generalmente documentada, que un producto software debe satisfacer. Los requisitos pueden ser funcionales (qué hace) o no funcionales (cómo lo hace, ej., calidad). [PET]

- **Reusabilidad (Reusability):** El costo y esfuerzo asociado a transferir un módulo o programa desde una aplicación a otra. Implica escribir código parametrizable y desacoplado. [FITZ]

## T

- **Testeabilidad (Testability):** El costo y esfuerzo asociado a probar un programa para garantizar que cumple con sus requisitos específicos. Se mejora con buen diseño (cohesión, acoplamiento) y automatización. [FITZ, ISO 9126]

## U

- **Usabilidad (Usability):** El costo y esfuerzo para aprender, manejar y operar un producto. Incluye sub-factores como learnability (facilidad de aprendizaje), understandability (comprensibilidad) y operability (operabilidad). [FITZ, ISO 9126]

## V

- **Visión Externa (External View):** La perspectiva del consumidor (usuario o cliente) que trata el software como una "caja negra", enfocándose en su comportamiento observable (fallas, rendimiento, usabilidad). [TIA]

- **Visión Interna (Internal View):** La perspectiva del productor (desarrollador, tester, mantenedor) que trata el software como una "caja clara", enfocándose en sus características estructurales (fallos, complejidad, modularidad). [TIA]