# Factores Externos de Calidad (Visión del Consumidor)

> **Fuente primaria:** [FITZ] §2.3 (pp. 9-14)
> **Fuente secundaria:** [TIA] §2.1, §2.3

## 1. Definición y alcance de los factores externos

Los **factores externos de calidad** son aquellos atributos del software que resultan directamente **visibles y experimentables por el usuario final** durante la operación normal del sistema.

> **Definición operativa (FITZ, adaptado de NCC):** *"La calidad externa es la calidad del producto terminado, la calidad tal como aparece al mundo exterior, cuando sale de la línea de montaje."*

Estos factores determinan la **experiencia de uso** y, en última instancia, la aceptación o rechazo del producto por parte del consumidor. Los desarrolladores no pueden "ocultar" deficiencias en estos factores detrás de buenas prácticas internas; si el usuario percibe una falla o una mala experiencia, la calidad externa es deficiente, independientemente de la calidad interna del código.

---

## 2. Correctitud / Exactitud (Accuracy)

### 2.1. Definición según McCall

> *"El grado en que un programa cumple con su especificación."* [FITZ]

### 2.2. Precisiones conceptuales

La correctitud se refiere a la **correspondencia biunívoca** entre el comportamiento observable del software y lo que fue documentado en su especificación de requisitos. Ince (1994) prefiere el término **correctness** para este factor [FITZ].

### 2.3. Limitaciones prácticas señaladas por Fitzpatrick

Fitzpatrick califica la correctitud como un factor "típicamente de lista de deseos" (*wish-list*) por las siguientes razones [FITZ]:

- En la mayoría de los proyectos (excepto sistemas de alto presupuesto o críticos para la seguridad), **no existe una especificación completa y formal** contra la cual contrastar el comportamiento.
- Por lo tanto, en la práctica, la correctitud se **confirma indirectamente mediante pruebas** (testing), no mediante verificación formal exhaustiva.

### 2.4. Técnicas para lograr o verificar la correctitud

| Técnica | Descripción |
|----------|-------------|
| **Inspecciones de programa (program inspections)** | Revisión manual del código por pares para detectar discrepancias con la especificación. |
| **Verificación basada en matemáticas (métodos formales)** | Demostración formal de que el código satisface su especificación (costoso, solo para sistemas críticos). |
| **Analizadores estáticos** | Herramientas que examinan el código fuente sin ejecutarlo para detectar violaciones de especificaciones implícitas. |
| **Reutilización de componentes probados** | Usar código que ya ha sido verificado correcto en usos anteriores reduce la necesidad de nueva verificación. |

---

## 3. Confiabilidad (Reliability)

### 3.1. Advertencia crítica de Fitzpatrick sobre la definición de McCall

> *"El grado en que un programa puede mantenerse para que pueda cumplir su función específica"* [FITZ]

**Fitzpatrick objeta explícitamente esta definición:** "Esta definición parece ser más apropiada para un factor de calidad diferente llamado **mantenibilidad**" [FITZ]. Por lo tanto, adopta la definición de la ingeniería tradicional.

### 3.2. Definición adoptada (ingenieril)

La confiabilidad es **la capacidad de un producto o componente de continuar realizando su función prevista durante un período de tiempo bajo condiciones predefinidas** [FITZ].

### 3.3. Métricas fundamentales de confiabilidad

| Métrica | Definición | Fórmula / Notación |
|----------|-------------|---------------------|
| **MTBF** (Mean Time Between Failures) | Tiempo promedio entre fallas consecutivas bajo condiciones predefinidas | \[ \text{MTBF} = \frac{T_{\text{total}}}{N} \] donde \(N\) = número de fallas en \(T_{\text{total}}\) |
| **MTTR** (Mean Time To Repair) | Tiempo promedio para reparar o mantener el equipo | - |
| **MTRec** (Mean Time to Recover) | Tiempo promedio para restaurar la operación del sistema tras una falla (incluye restauración desde puntos de control) | - |
| **Probabilidad de falla** | Predicción formal (métodos formales) de la probabilidad de que el sistema se comporte de manera esperada bajo ciertas circunstancias | Especialmente apropiada para sistemas críticos y "de ejecución continua" |

### 3.4. Aplicaciones donde la confiabilidad es crítica

- **Sistemas de seguridad crítica** (safety-critical): aviónica, sistemas hospitalarios, control de plantas nucleares.
- **Sistemas de ejecución continua** (*continuous running*): sistemas operativos de servidores, infraestructura de red.
- **Sistemas en línea y de bases de datos** donde el tiempo de inactividad (downtime) impacta directamente la operación del negocio.

### 3.5. Técnicas para programar para alta confiabilidad (Sommerville, 1992, citado por FITZ)

- **Fault avoidance:** escribir código correcto desde el principio, evitando introducir fallos.
- **Fault tolerance:** el sistema continúa operando (quizás con degradación) cuando ocurren fallos.
- **Exception handling:** manejo estructurado de condiciones excepcionales.
- **Defensive programming:** validar todas las entradas y suposiciones en tiempo de ejecución.

---

## 4. Eficiencia (Efficiency)

### 4.1. Definición de McCall

> *"El volumen de código o recursos de computadora (ej., tiempo o almacenamiento externo) necesarios para que un programa pueda cumplir su función."* [FITZ]

### 4.2. Limitación histórica señalada por Fitzpatrick

La definición de McCall de 1977 **limita erróneamente la eficiencia al almacenamiento externo**. En la actualidad, se debe considerar también: CPU RAM, Video RAM, printer RAM, CD-ROM, y otros medios de almacenamiento modernos [FITZ].

### 4.3. Técnicas documentadas para lograr eficiencia

| Área de intervención | Técnicas específicas |
|----------------------|----------------------|
| **Lenguajes de programación** | Seleccionar el lenguaje apropiado al dominio: COBOL para aplicaciones de negocio con grandes volúmenes de informes; FORTRAN para cálculos científicos intensivos. |
| **Sistemas operativos** | Aprovechar capacidades de **multitarea** para operaciones en segundo plano (*background*), mejorando el rendimiento aparente. |
| **Diseño** | Aplicar principios de **cohesión y acoplamiento**, **normalización** (para reducir redundancia de datos), y **algoritmos optimizados** en tiempo de ejecución. |
| **Estrategias de acceso** | Implementar algoritmos que optimicen **tiempo de búsqueda** (seek time), **retardo rotacional** y **tiempo de transferencia de datos**; considerar conceptos de cilindro y algoritmos de hashing. |
| **Técnicas de programación** | - Diseño top-down para problemas complejos<br>- Uso de estructuras de control básicas (secuencia, selección, iteración)<br>- Mantener variables locales dentro de procedimientos<br>- Paso de parámetros adecuado<br>- Nombres significativos de variables y procedimientos<br>- Documentación apropiada |

### 4.4. Factores modernos que afectan la eficiencia (actualización de Fitzpatrick para finales de los 90)

- **Potencia de procesamiento** de los equipos de escritorio: el mismo software (ej. Windows 3.1) tiene rendimiento muy diferente en un procesador 386 vs. un 586.
- **Tecnologías de comunicación**: fibra óptica, velocidades de transferencia.
- **Madurez tecnológica**: la eficiencia no depende solo del software, sino de cómo maduran las plataformas hardware a lo largo del tiempo (la dimensión temporal de la calidad).

---

## 5. Integridad (Integrity)

### 5.1. Definición de McCall

> *"El grado en que se puede controlar el acceso ilegal a los programas y datos de un producto."* [FITZ]

### 5.2. Ampliación crítica de Fitzpatrick

La definición de McCall es **insuficiente** porque solo considera el acceso ilegal (malicioso). Sin embargo, los programas y datos también pueden ser alterados **inocentemente por usuarios autorizados que cometen errores**. No hay nada ilegal en este acceso, pero la integridad debe proteger también contra ello [FITZ].

Por lo tanto, la integridad debe preocuparse por:
1. Controles que **previenen la entrada de datos incorrectos**.
2. Controles que **detectan** datos incorrectos cuando ya han ingresado.
3. Prevención de cambios en el software que **comprometan su propósito original**.

### 5.3. Objetivos de los controles de integridad (French, 1986, citado por FITZ)

> *"a) asegurar que todos los datos sean procesados; b) preservar la integridad de los datos mantenidos; c) detectar, corregir y reprocesar todos los errores; d) prevenir y detectar fraudes."*

### 5.4. Tipos de controles (French, 1986, citado por FITZ)

| Tipo de control | Descripción | ¿Construible en software? |
|-----------------|-------------|---------------------------|
| Verificaciones manuales | Aplicadas a documentos antes del procesamiento informático | No |
| Controles de preparación de datos | Verificaciones durante la entrada de datos | Parcialmente |
| **Validaciones** | Verificaciones automáticas en el software | ✅ Sí |
| **Controles de lote** | Totales de control generados por computadora comparados con manuales | ✅ Sí |
| **Controles de archivo** | Totales de control al final de cada archivo | ✅ Sí |

### 5.5. Integridad en entornos de base de datos (Oxborrow, 1986, citado por FITZ)

> *"La integridad de una base de datos se mantiene mediante reglas de validación aplicadas a los datos de entrada y actualizados, y mediante bloqueos y reglas de acceso concurrente que impiden que transacciones concurrentes interfieran entre sí."* [FITZ]

**Mecanismos específicos en bases de datos:**
- **Reglas de validación:** verificación de tipos de datos, rangos máximos/mínimos, verificaciones de razonabilidad.
- **Control de concurrencia:** bloqueos de lectura (*read-locking*) y escritura (*write-locking*) para evitar problemas de *lost update* y *deadlock*.
- **Mínima redundancia de datos:** los atributos de entidad almacenados más de una vez tienden a volverse inconsistentes, comprometiendo la integridad.

### 5.6. Integridad en sistemas críticos

En sistemas de seguridad crítica, **la especificación de seguridad debe estar escrita en la especificación de requisitos**. Fitzpatrick menciona ejemplos de casos hospitalarios donde pacientes recibieron tratamiento incorrecto como resultado de entrada inválida [FITZ].

---

## 6. Usabilidad (Usability)

### 6.1. Definición original de McCall (1977)

> *"El costo/esfuerzo para aprender y manejar un producto."* [FITZ]

### 6.2. Contexto histórico de 1977 (fundamental para entender la evolución)

Fitzpatrick contextualiza rigurosamente esta definición [FITZ]:
- **Computadoras de la época:** mainframes y minicomputadoras, no computadoras personales.
- **Propósito:** aplicaciones de procesamiento de datos (DP) a gran escala.
- **Usuarios:** personal entrenado específicamente para operar el sistema, ingresar datos y recibir salida.
- **Pantallas:** monitores monocromáticos de baja especificación (texto verde sobre fondo negro, o viceversa).
- **Estrategias de diseño:** generalmente basadas en archivos, no en interfaces gráficas.

En ese contexto, la definición de McCall era **perfectamente adecuada**: la usabilidad se limitaba a "aprender a usar" el sistema para un grupo seleccionado y entrenado.

### 6.3. Transformación en los años 90 (Fitzpatrick)

> *"La usabilidad a finales de los 90 se ocupa de una gran cantidad de cuestiones del usuario final, y el aprendizaje para usar sistemas ahora abarca tantos temas que algunos autores consideran la capacidad de aprendizaje (learnability) como un factor de calidad por derecho propio."* [FITZ]

**Temas de usabilidad en los 90:**
- **Suitability** (adecuación)
- **Learnability** (capacidad de aprendizaje)
- **Adaptability** (adaptabilidad)

### 6.4. Definición de la propuesta ISO 9241 (1996)

> *"La usabilidad es el grado en que un producto puede ser utilizado por usuarios específicos para lograr objetivos específicos con efectividad, eficiencia y satisfacción en un contexto de uso específico."* [FITZ, citando a Curson 1996]

### 6.5. Críticas explícitas de Fitzpatrick a la definición ISO 9241

Fitzpatrick es **explícitamente crítico** con esta definición [FITZ]:

1. **Demasiado vaga.** No resuelve el debate sobre qué es exactamente la usabilidad.
2. **Omite el concepto de confianza del usuario** (user confidence), que es fundamental.
3. **Es circular.** Define "usabilidad" como el grado en que un producto puede ser "usado". Pero "usado" es exactamente lo que se intenta definir.
4. **Ignora la necesidad de soportar todos los niveles de habilidad.** Un producto de calidad debe apoyar tanto a novatos como a expertos; la definición ISO no aborda esto.

### 6.6. Componentes de la usabilidad según la EU Directive 90/270/EEC

Fitzpatrick organiza los componentes en dos grandes categorías derivadas de los requisitos de la directiva europea sobre seguridad y salud en el trabajo con equipos de pantalla de visualización:

#### A) Ergonomía general (equipo y entorno laboral)

| Componente | Aspectos a considerar |
|------------|----------------------|
| **Equipo** | Selección de pantallas, teclados, superficies de trabajo y sillas |
| **Entorno** | Requisitos de espacio, iluminación, reflejos distractores, ruido, radiación de calor, humedad |

> *"Aunque no son esencialmente cuestiones de software, deben considerarse porque muchos sistemas han fallado porque los factores involucrados no se abordaron adecuadamente."* [FITZ]

#### B) Ergonomía de software

| Componente | Aspectos a considerar |
|------------|----------------------|
| **Adecuación** | ¿El software es adecuado para las operaciones previstas? |
| **Aprendizaje y dominio** | ¿Es fácil de aprender y dominar? |
| **Estilos de diálogo** | Desde línea de comandos hasta interfaces gráficas de usuario (GUI) |
| **Factores humanos** | Percepción, memoria, sentidos; metáforas que facilitan estos factores |
| **Reglas de Shneiderman (1987)** | - Consistencia de la pantalla<br>- Feedback y mensajes de error<br>- Rendimiento del sistema<br>- Capacidad de deshacer la última acción del usuario |

### 6.7. Conclusión de Fitzpatrick sobre usabilidad

> *"Todo el tema de la usabilidad es un factor de calidad de vanguardia. Las ideas académicas y de la industria, las normas independientes y los requisitos legales se ocupan del tema, pero desafortunadamente parece no haber uniformidad de definiciones o vocabulario. Quizás en el futuro esto se resuelva. Subdividirlo en factores de calidad nuevos y más enfocados parecería apropiado."* [FITZ]

---

## Preguntas de integración (estudio activo)

1. ¿Por qué Fitzpatrick considera que la definición de confiabilidad de McCall es inapropiada y qué definición propone en su lugar?
2. ¿Cuál es la diferencia fundamental entre un **fallo (fault)** y una **falla (failure)** según la terminología IEEE?
3. ¿Qué limitación específica señala Fitzpatrick en la definición de eficiencia de McCall y qué nuevos recursos deben considerarse hoy?
4. ¿Por qué la definición original de integridad de McCall es insuficiente y qué tipo de accesos adicionales deben controlarse?
5. ¿Cuáles son las cuatro críticas explícitas que Fitzpatrick hace a la definición ISO 9241 de usabilidad?
6. En el contexto histórico de 1977, ¿era adecuada la definición de usabilidad de McCall? ¿Por qué sí o por qué no?