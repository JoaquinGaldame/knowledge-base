---
title: Roadmap de Estudio - Calidad de Software
---

# Roadmap de Estudio: Calidad de Software

Este documento constituye la guía de navegación principal para el estudio sistemático de la **Calidad de Software**, sintetizando y abstraiendo el conocimiento de los documentos fuente proporcionados (Fitzpatrick, 1996; Bedini; Petrasch; Tian; Zekic & Stapic, 2021).

El objetivo es transitar desde una comprensión taxonómica y terminológica hacia un dominio de los modelos estratégicos, métricos y procesales.

## Módulos y Ruta de Aprendizaje Sugerida

### **Fase I: Fundamentos Epistemológicos y Terminológicos**

- **[01.1 El Problema de Definir Calidad](./01-conceptos-fundacionales/01-el-problema-de-definir-calidad.md)**
    - Análisis crítico de definiciones normativas (ISO, IEEE, DIN).
    - La tesis de Fitzpatrick: multidimensionalidad y obsolescencia.
    - El concepto de "característica" como unidad atómica de calidad (Petrasch).

- **[01.2 Perspectivas y Marcos Teóricos](./01-conceptos-fundacionales/02-perspectivas-y-marcos-teoricos.md)**
    - Las cinco visiones fundamentales (trascendental, usuario, fabricación, producto, valor).
    - La dicotomía fundamental: visión externa (caja negra) vs. interna (caja clara).
    - El rol dual de consumidores (usuarios/clientes) y productores.

### **Fase II: Modelos Estructurales de Calidad**

- **[02.1 Modelos Clásicos: McCall y Boehm](./02-modelos-de-calidad/01-mccall-y-boehm.md)**
    - El modelo de McCall: génesis militar, 55 factores reducidos a 11, enfoque en la medibilidad.
    - El modelo jerárquico de Boehm: primario, intermedio y primitivo.
    - Comparativa y análisis de vigencia.

- **[02.2 ISO 9126 y la Familia SQuaRE](./02-modelos-de-calidad/02-iso-9126-y-squarE.md)**
    - La estructura jerárquica de 6 características y 27 subcaracterísticas.
    - Crítica de Dromey: solapamiento de propiedades (ej. redundancia).
    - Evolución hacia ISO 25000.

- **[02.3 Modelos Alternativos y por Dominio](./02-modelos-de-calidad/03-modelos-alternativos-y-especificos.md)**
    - SPARDAT (banca), CUPRIMDS (IBM), modelos para web y tiempo real.

### **Fase III: Factores de Calidad en Profundidad**

- **[03.1 Taxonomía y Clasificación](./03-factores-de-calidad/01-taxonomia-y-clasificacion.md)**
    - Externalidad vs. Internalidad.
    - El problema de los "-ilities" y su evolución semántica.

- **[03.2 Factores Externos (Visión del Consumidor)](./03-factores-de-calidad/02-factores-externos.md)**
    - Correctitud, Confiabilidad (MTBF, MTTR), Eficiencia, Integridad, Usabilidad (y sus subfactores como learnability).

- **[03.3 Factores Internos (Visión del Productor)](./03-factores-de-calidad/03-factores-internos.md)**
    - Mantenibilidad (correctiva, adaptativa, perfectiva), Testeabilidad, Interoperabilidad, Reusabilidad, Portabilidad.

- **[03.4 Relaciones y Priorización Estratégica](./03-factores-de-calidad/04-relaciones-y-priorizacion-estrategica.md)**
    - El modelo de interrelaciones de Perry (inversa, neutral, directa).
    - La priorización de Daily: Usabilidad como primer filtro.
    - Trade-offs en dominios críticos (tiempo real vs. mercado masivo).

### **Fase IV: Medición, Métricas y Evaluación**

- **[04.1 Fundamentos de Medición](./04-medicion-y-metricas/01-fundamentos-de-medicion.md)**
    - Medición directa e indirecta.
    - Complejidad ciclomática de McCabe.

- **[04.2 Métricas de Defectos](./04-medicion-y-metricas/02-metricas-de-defectos.md)**
    - Densidad de defectos (por KLOC, PF).
    - Tasa de fallos y modelos de confiabilidad.

- **[04.3 Métodos de Evaluación](./04-medicion-y-metricas/03-metodos-de-evaluacion.md)**
    - Técnicas cuantitativas (scoring ponderado, Kepner-Tregor).
    - LOQUM (LOCRIT, LOCREL, LOCPRO).

### **Fase V: Defectología y Correctitud**

- **[05.1 Terminología y Relaciones Causales](./05-gestion-de-defectos/01-terminologia-y-relaciones-causales.md)**
    - Definiciones IEEE: Error, Fault, Failure.
    - La relación causal: Error → Fault → Failure.
    - Fallos latentes vs. activos.

- **[05.2 Estrategias de Tratamiento de Defectos](./05-gestion-de-defectos/02-estrategias-de-tratamiento.md)**
    - Prevención, detección/eliminación, contención.
    - El concepto de "perfil de calidad" (Humphrey).

### **Fase VI: Estrategia y Gestión Organizacional**

- **[06.1 Perspectiva del Proveedor](./06-estrategia-y-gestion/01-perspectiva-del-proveedor.md)**
    - Mapeo con estrategias genéricas de Porter (diferenciación, liderazgo en costos, enfoque).
    - Modelo COCOMO y estimación de costos de calidad.

- **[06.2 Perspectiva del Cliente/Comprador](./06-estrategia-y-gestion/02-perspectiva-del-cliente.md)**
    - Matrices de ponderación y rating (Robson).
    - Especificación de requisitos de calidad en contratos.

### **Fase VII: Marcos de Trabajo y Mejora de Procesos**

- **[07.1 Taxonomía de Marcos de Trabajo (Bedini)](./07-marcos-de-trabajo-y-mejora-de-procesos/01-taxonomia-de-marcos.md)**
    - Categorías: estándares, modelos de madurez, guías, premios.
    - Conceptos de capacidad, performance y madurez.

- **[07.2 CMM y CMMI](./07-marcos-de-trabajo-y-mejora-de-procesos/02-cmm-y-cmmi.md)**
    - Los 5 niveles de madurez y las KPAs.
    - Organización madura vs. inmadura.

- **[07.3 ISO 9001 y TickIT](./07-marcos-de-trabajo-y-mejora-de-procesos/03-iso-9001-y-tickit.md)**
    - Enfoque en la conformidad de procesos.
    - Limitaciones para el software puro.

- **[07.4 SPICE / ISO 15504](./07-marcos-de-trabajo-y-mejora-de-procesos/04-spice-iso-15504.md)**
    - Evaluación de procesos vs. determinación de madurez.

- **[07.5 Críticas y Desafíos](./07-marcos-de-trabajo-y-mejora-de-procesos/06-criticas-y-desafios.md)**
    - Subjetividad en evaluaciones, "parálisis de procesos" (Yourdon).
    - El problema de los "campeones" y "sponsors".

### **Fase VIII: Métodos Ágiles y Calidad**

- **[08.1 Impacto de Enfoques Ágiles e Híbridos](./08-metodos-agiles-y-calidad/01-impacto-de-enfoques-agiles-e-hibridos.md)**
    - Combinaciones reportadas (Scrum+XP+Lean, TDD+ITL, Waterfall-Ágil).
    - Prácticas ágiles con impacto significativo (CI, pair programming, automated testing).
    - Atributos de calidad afectados (mantenibilidad, testabilidad, eficiencia).

### **Fase IX: Síntesis y Referencia**

- **[09.1 Glosario Unificado](./09-referencias/01-glosario-unificado.md)**
    - Definiciones formales de todos los términos clave.
- **[09.2 Bibliografía Integrada](./09-referencias/02-bibliografia-integrada.md)**
    - Referencias completas de los documentos fuente.