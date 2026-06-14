# Factores Internos de Calidad (Visión del Productor)

> **Fuente primaria:** [FITZ] §2.3 (pp. 14-19)
> **Fuente secundaria:** [TIA] §2.1

## 1. Definición y alcance de los factores internos

Los **factores internos de calidad** son aquellos atributos del software que **no son directamente visibles para el usuario final**, pero que determinan la facilidad con que los desarrolladores, mantenedores y testers pueden trabajar con el producto.

> **Definición operativa (FITZ, adaptado de NCC):** *"La calidad interna es la calidad del producto mientras se está construyendo, mientras está en la línea de montaje."*

Estos factores son **instrumentales**: no son un fin en sí mismos, sino medios para lograr los factores externos. Como señalan Ghezzi et al. (1991, citado por FITZ): *"En general, los usuarios del software solo se preocupan por las cualidades externas, pero son las cualidades internas —que tratan en gran medida con la estructura del software— las que ayudan a los desarrolladores a lograr las cualidades externas."*

---

## 2. Mantenibilidad (Maintainability)

### 2.1. Definición de McCall (insuficiente)

> *"El costo de localizar y corregir errores."* [FITZ]

### 2.2. Crítica de Fitzpatrick

Esta definición es **demasiado restrictiva**. El mantenimiento moderno abarca mucho más que la corrección de errores.

### 2.3. Las tres categorías de mantenimiento (Ghezzi et al., 1991, citado por FITZ)

| Categoría | Propósito | Ejemplo |
|-----------|-----------|---------|
| **Mantenimiento correctivo** | Eliminación de errores menores remanentes después del desarrollo y las pruebas. También ocurre después de otras actividades de mantenimiento. | Corregir un bug que causa un cálculo incorrecto bajo condiciones específicas. |
| **Mantenimiento adaptativo** | Modificación del software para reflejar cambios en los requisitos del usuario. | Cambiar tasas de IVA, tramos del impuesto sobre la renta, o añadir nueva funcionalidad. |
| **Mantenimiento perfectivo** | Mejora de los algoritmos para mejorar el rendimiento. A menudo influenciado por desarrollos tecnológicos. | Reemplazar un algoritmo de ordenamiento O(n²) por uno O(n log n). |

### 2.4. El ciclo de vida del mantenimiento

> *"El mantenimiento comienza desde el momento en que un sistema entra en operación y continúa durante el resto de la vida del producto. Para algunos productos, esto puede ser veinte años o más."* [FITZ]

### 2.5. Prácticas que favorecen la mantenibilidad

| Práctica | Descripción | Impacto en mantenibilidad |
|----------|-------------|--------------------------|
| **Metodología bien definida** | Metodologías como SSADM garantizan que todos los aspectos de la obtención de hechos y el modelado (DFD, ERD) se completen y documenten con técnicas y formularios estándar. | Reduce el tiempo de localización de componentes a modificar. |
| **Buenas técnicas de diseño** | Principios de **cohesión y acoplamiento** y **normalización** para minimizar la redundancia de datos. | Facilita los tres tipos de mantenimiento (correctivo, adaptativo, perfectivo). |
| **Atención a la documentación** | Uno de los factores más importantes para los gestores de mantenimiento. | Un sistema bien documentado reduce sustancialmente el costo de localizar y corregir errores. Sin documentación, el costo aumenta y la mantenibilidad disminuye. |
| **Buenas prácticas de programación** | Nombres significativos, código legible, estructuras de control básicas (secuencia, selección, iteración), puntos de entrada y salida únicos en procedimientos. | Permite localizar rápidamente el código ofensivo y el módulo correspondiente. |

### 2.6. Definición revisada propuesta por Fitzpatrick

> *"Los costos no operacionales asociados con un producto después de una prueba de aceptación exitosa por parte del usuario."* [FITZ]

---

## 3. Testeabilidad (Testability)

### 3.1. Definición de McCall

> *"El costo de las pruebas del programa para salvaguardar que se cumplan los requisitos específicos."* [FITZ]

### 3.2. Las cinco etapas de prueba según Sommerville (1992)

Fitzpatrick señala que Sommerville propone cinco etapas, aunque la mayoría de los autores se limitan a cuatro.

| Etapa (Sommerville) | Etapa (ISO 9000-3) | Descripción |
|---------------------|--------------------|-------------|
| Unit testing | Item testing | Prueba de componentes independientes. Gran parte de esta prueba la realizan los programadores como parte de su rol normal. |
| Module testing | Integration testing | Integración de componentes independientes en módulos; se prueban las interconexiones en el nuevo entorno. |
| Subsystem testing | (incluido en system testing) | Prueba de subsistemas completos. |
| System testing | System testing | Prueba completa del sistema que el cliente está a punto de recibir, pero **sin la presencia del cliente**. Es la oportunidad del proveedor de confirmar que la especificación de requisitos se ha cumplido plenamente. |
| Acceptance testing | Acceptance testing | El cliente ejecuta el nuevo sistema para garantizar que cumple con las especificaciones originales. También se denomina **prueba alfa (alpha testing)**. |

### 3.3. Estrategias de prueba documentadas

| Estrategia | Descripción | Técnicas asociadas |
|------------|-------------|--------------------|
| **Pruebas funcionales (caja negra)** | Se basa en las especificaciones del programa, ignorando su estructura interna. | - |
| **Pruebas estructurales (caja blanca)** | Se basa en la estructura interna del programa (caminos, condiciones). | - |
| **Estimación de defectos residuales** | Técnicas estadísticas para estimar cuántos defectos permanecen después de las pruebas. | - |
| **Prueba top-down** | Prueba del código que llama a otro código aún no escrito, utilizando **stubs** (rutinas vacías). Ejemplo: probar una estructura de menú con stubs que representan los módulos ramificados. | Útil para aislar fallos: si al reemplazar un stub por un módulo real algo falla, el fallo está en el nuevo módulo. |
| **Prueba bottom-up** | Complemento de la top-down. Los módulos se codifican y prueban unitariamente (a menudo por diferentes desarrolladores en diferentes sitios y momentos). Luego se combinan y se prueba la estructura de llamadas. | - |
| **Prueba de estrés (stress testing)** | Prueba de sistemas diseñados para manejar una carga específica (ej., un banco que debe procesar un número determinado de transacciones por hora). Investiga qué ocurre si se supera la capacidad especificada. | ¿El sistema colapsa? ¿Se pierden datos? |

### 3.4. Métodos para minimizar el costo de las pruebas (mejorar la testabilidad)

- **Uso de herramientas de prueba automatizadas.**
- **Buenas estrategias de diseño** (cohesión, acoplamiento).
- **Buenas técnicas de programación.**
- **Matriz de complejidad de McCall et al. (1979)** : número y tamaño de módulos, tamaño de los procedimientos, profundidad de anidamiento, número de errores por unidad de tiempo, número de alteraciones por unidad de tiempo [FITZ].

### 3.5. Valoración de Fitzpatrick

> *"La definición de testabilidad de McCall ha resistido el paso del tiempo y sigue siendo muy aplicable hoy en día."* [FITZ]

---

## 4. Interoperabilidad (Interface facility → Interoperability)

### 4.1. Definición de McCall

> *"El costo de conectar dos productos entre sí."* [FITZ]

### 4.2. Terminología moderna

Fitzpatrick señala que *"los autores modernos, en consonancia con el uso del formato ...ilidad, han renombrado este factor como **interoperabilidad**."* [FITZ]

### 4.3. Definición actualizada

Es la estrategia de desarrollo que fomenta que un producto pueda **interactuar con otros productos**.

**Ejemplos proporcionados por Fitzpatrick:**
- Procesadores de texto que pueden incorporar gráficos de hojas de cálculo, o gráficos de paquetes CAD, o datos de bases de datos.
- Un sistema de nóminas (donde el personal cobra comisiones por ventas) que puede interactuar con un sistema de ventas o de entrada de pedidos.

### 4.4. Requisito técnico para la interoperabilidad

La interoperabilidad depende fundamentalmente de **una política de sistemas abiertos** (open systems policy) respaldada por los desarrolladores de software.

### 4.5. Ejemplo concreto: Lotus Corporation (1993)

Fitzpatrick cita el **libro blanco de Lotus sobre arquitecturas de comunicaciones**:

- Lotus, en conjunto con Apple, Borland, IBM, Novell y WordPerfect, se comprometió con una política de **Vendor Independent Messaging (VIM)**.
- Declaran cumplir con estándares industriales y *de facto* como **x.400, SQL, OLE**, etc.
- Sus productos (cc:Mail, Lotus Notes) tienen **interfaces de programación de aplicaciones (APIs) abiertas y publicadas**, lo que permite a proveedores de software independientes desarrollar aplicaciones que interactúen con los productos de Lotus y sus socios.

---

## 5. Reusabilidad (Re-usability)

### 5.1. Definición de McCall

> *"El costo de transferir un módulo o programa a otra aplicación."* [FITZ]

### 5.2. Concepto fundamental

La reusabilidad aborda la escritura de código para que pueda ser **utilizado más de una vez**. El ejemplo clásico es escribir procedimientos o rutinas que reciben **parámetros variables**: el código llamante pasa los parámetros y el procedimiento llamado los procesa adecuadamente, devolviendo el resultado.

### 5.3. Ventaja principal señalada por Fitzpatrick

> *"Una vez que un procedimiento ha sido escrito y completamente probado, puede usarse con plena confianza en su exactitud en adelante. Nunca debería necesitar ser probado nuevamente."* [FITZ]

### 5.4. Fuentes de código reutilizable

- **Bibliotecas comerciales** de código reutilizable (ej., archivos `.lib` del lenguaje C).
- **Entornos de desarrollo visual** como Visual Basic.
- **Técnicas de desarrollo orientado a objetos** (herencia, polimorfismo, composición).

### 5.5. La paradoja económica de la reusabilidad

Fitzpatrick señala explícitamente un trade-off:

> *"Si bien la reusabilidad se refiere al costo de adaptar el código para que pueda reutilizarse en otra aplicación, existe, en primer lugar, un costo de **desarrollo** de código reutilizable. Toma mucho más tiempo y, por lo tanto, cuesta más desarrollar código reutilizable. Con bastante frecuencia, los presupuestos y los plazos van en contra del deseo de desarrollar código reutilizable."* [FITZ]

### 5.6. Consideraciones legales y contractuales

Fitzpatrick plantea cuestiones que deben especificarse en los documentos de especificación del proyecto y del contrato:

- ¿El código reutilizable escrito especialmente pertenece al **proveedor** o al **cliente**?
- ¿El código reutilizado de una biblioteca comercial atrae **tasas de licencia**?

---

## 6. Portabilidad (Transferability → Portability)

### 6.1. Definición de McCall

> *"El costo de transferir un producto de su entorno de hardware u operativo a otro."* [FITZ]

### 6.2. Terminología moderna

> *"La expresión moderna para este factor de calidad es **portabilidad**."* [FITZ]

### 6.3. Definición de Sommerville (1992)

Fitzpatrick cita a Sommerville, quien considera la portabilidad como **un caso especial de reutilización de software**:

> *"Donde toda la aplicación se reutiliza implementándola en una gama de diferentes computadoras y sistemas operativos."* [FITZ]

### 6.4. Factores que favorecen la portabilidad (avances en estándares)

| Área | Estándares que facilitan la portabilidad |
|------|------------------------------------------|
| **Sistemas operativos** | UNIX, MS-DOS (estándares bien establecidos y ampliamente adoptados) |
| **Lenguajes de programación** | Estándares acordados para COBOL, C, FORTRAN, PASCAL. Los compiladores que implementan los estándares facilitan la portabilidad entre sistemas. |
| **Entornos de ventanas** | X-Windows, Microsoft Windows (estándares *de facto* para interfaces gráficas) |

### 6.5. Conclusión de Fitzpatrick

> *"Los productos desarrollados para cumplir con estos estándares deberían ser portables a otros entornos con un mínimo esfuerzo de conversión."* [FITZ]

---

## Preguntas de integración (estudio activo)

1. ¿Cuáles son las **tres categorías de mantenimiento** según Ghezzi et al. y qué diferencias hay entre ellas?
2. Según Fitzpatrick, ¿por qué la definición de mantenibilidad de McCall es insuficiente?
3. ¿Cuáles son las **cinco etapas de prueba** según Sommerville y en qué se diferencian la prueba de sistema y la prueba de aceptación?
4. ¿Qué es una **prueba top-down** y para qué sirven los **stubs**?
5. ¿Qué significa que Lotus Corporation publicara sus **APIs abiertas** y qué relación tiene con la interoperabilidad?
6. ¿Cuál es la **paradoja económica** de la reusabilidad que señala Fitzpatrick?
7. Según Sommerville, ¿por qué la portabilidad es un **caso especial de reutilización**?