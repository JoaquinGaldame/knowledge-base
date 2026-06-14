# Modelo de Memoria en C#

## Introducción

El modelo de memoria constituye uno de los fundamentos de la ejecución de aplicaciones .NET. Define cómo se almacenan los datos durante la ejecución de un programa, cómo se crean y destruyen los objetos, cómo interactúan los hilos con la memoria compartida y qué garantías ofrece el runtime respecto a la visibilidad y consistencia de los datos.

Aunque el lenguaje C# abstrae gran parte de los detalles relacionados con la administración de memoria, comprender el modelo subyacente resulta fundamental para diseñar software eficiente, evitar errores de concurrencia, interpretar correctamente el comportamiento de los tipos y optimizar el rendimiento de aplicaciones de gran escala.

El modelo de memoria de C# no debe confundirse con la implementación específica de un sistema operativo o de una arquitectura de CPU determinada. Se trata de un conjunto de reglas definidas por el Common Language Runtime (CLR) y la especificación del lenguaje que establecen cómo deben comportarse las operaciones de lectura y escritura de memoria.

---

# Motivación

Considérese el siguiente ejemplo:

```csharp
public sealed class Customer
{
    public string Name { get; set; }
}
```

```csharp
Customer customer = new();

customer.Name = "John";
```

A simple vista parece una operación trivial.

Sin embargo, internamente ocurren múltiples procesos:

1. Se reserva memoria para el objeto.
2. Se inicializan sus campos.
3. Se crea una referencia al objeto.
4. La referencia se almacena en una variable.
5. El Garbage Collector comienza a rastrear dicho objeto.

Comprender estos mecanismos permite responder preguntas importantes:

* ¿Dónde se almacena un objeto?
* ¿Cuándo se libera?
* ¿Qué ocurre al copiar una referencia?
* ¿Qué sucede cuando varios hilos acceden al mismo objeto?
* ¿Por qué se producen ciertas pausas del Garbage Collector?
* ¿Cómo afectan las asignaciones al rendimiento?

---

# Abstracción y Realidad

Una simplificación frecuente consiste en afirmar:

```text
Value Types → Stack

Reference Types → Heap
```

Aunque útil para introducir el tema, esta afirmación es técnicamente incorrecta.

La realidad es más compleja.

Lo correcto es entender que:

* Los tipos por valor contienen sus datos directamente.
* Los tipos por referencia contienen una referencia a un objeto.
* El lugar donde terminan almacenándose depende del contexto de ejecución.

Por ejemplo:

```csharp
public struct Point
{
    public int X;
    public int Y;
}
```

Puede almacenarse:

* Dentro de un objeto del heap.
* Como variable local.
* Como campo de otro struct.
* Como parámetro.
* Dentro de un array.

Por lo tanto, la clasificación "valor" o "referencia" no determina automáticamente la ubicación física en memoria.

---

# Espacios de Memoria Principales

Conceptualmente, una aplicación .NET utiliza dos áreas principales:

```text
Stack
Heap Administrado
```

Ambas tienen funciones completamente distintas.

---

# Stack

El stack es una estructura de datos tipo LIFO (*Last In, First Out*).

Cada hilo posee su propio stack.

Se utiliza principalmente para almacenar:

* Variables locales.
* Parámetros.
* Direcciones de retorno.
* Información de llamadas a métodos.
* Datos temporales.

Ejemplo:

```csharp
void Process()
{
    int age = 30;

    string name = "John";
}
```

Representación conceptual:

```text
Stack

name ──► referencia

age  ──► 30
```

La referencia a la cadena se almacena en el stack, pero el objeto string normalmente reside en el heap.

---

# Frames de Ejecución

Cada llamada a un método genera un frame en el stack.

Ejemplo:

```csharp
void Main()
{
    Process();
}
```

```csharp
void Process()
{
}
```

Representación:

```text
Process Frame
-------------
variables locales

Main Frame
-------------
variables locales
```

Cuando el método finaliza, su frame se elimina automáticamente.

Esta operación es extremadamente rápida.

---

# Heap Administrado

El heap administrado es la región de memoria utilizada para almacenar objetos administrados.

Ejemplo:

```csharp
Customer customer = new();
```

Representación conceptual:

```text
Stack

customer
    │
    ▼

Heap

Customer Object
```

La referencia reside en el stack.

El objeto reside en el heap.

---

# Objetos Administrados

Un objeto administrado es cualquier instancia cuya vida útil es supervisada por el CLR.

Ejemplos:

```csharp
new Customer()

new List<int>()

new Dictionary<string, int>()

new HttpClient()
```

Todos son rastreados por el Garbage Collector.

---

# Layout Conceptual de un Objeto

Internamente, un objeto contiene más información que sus propiedades visibles.

Representación simplificada:

```text
Object Header

Method Table Pointer

Fields
```

Ejemplo:

```csharp
public class Customer
{
    public string Name;
}
```

No solo existe el campo `Name`.

También existen estructuras internas utilizadas por el runtime.

---

# Referencias

Una referencia es un valor que apunta a la ubicación de un objeto.

Ejemplo:

```csharp
Customer customer = new();
```

Representación:

```text
customer
    │
    ▼

Customer Object
```

Copiar una referencia no crea un nuevo objeto.

```csharp
Customer a = new();

Customer b = a;
```

Resultado:

```text
a
 \
  \
   ---> Customer

  /
 /
b
```

Ambas variables apuntan al mismo objeto.

---

# Asignación de Objetos

La creación de un objeto implica una asignación de memoria.

Ejemplo:

```csharp
var customer = new Customer();
```

Proceso simplificado:

```text
1. Reservar memoria.
2. Inicializar objeto.
3. Ejecutar constructor.
4. Devolver referencia.
```

Las asignaciones son rápidas, pero no gratuitas.

En aplicaciones de alta carga, millones de asignaciones pueden generar presión sobre el Garbage Collector.

---

# Garbage Collector

El Garbage Collector (GC) es el sistema encargado de recuperar memoria ocupada por objetos que ya no son accesibles.

Su función principal es:

```text
Identificar objetos inalcanzables.
Liberar su memoria.
Compactar el heap cuando sea necesario.
```

Esto evita errores clásicos como:

* Double free.
* Use after free.
* Dangling pointers.
* Memory corruption.

---

# Objetos Alcanzables

Un objeto continúa vivo mientras exista una ruta desde una raíz (*GC Root*) hasta dicho objeto.

Ejemplo:

```csharp
Customer customer = new();
```

Mientras exista la variable:

```text
Stack
   │
   ▼

Customer Object
```

El objeto permanece vivo.

---

# Objetos Inalcanzables

Cuando ninguna referencia apunta al objeto:

```csharp
customer = null;
```

Representación:

```text
Customer Object
```

Ya no existe una ruta desde una raíz.

El objeto pasa a ser elegible para recolección.

---

# GC Roots

El Garbage Collector comienza su análisis desde un conjunto especial de referencias conocidas como GC Roots.

Ejemplos:

* Variables locales activas.
* Variables estáticas.
* Objetos fijados (*Pinned Objects*).
* Referencias de CPU activas.
* Objetos referenciados por otros objetos vivos.

Todo objeto alcanzable desde una raíz permanece vivo.

---

# Heap Generacional

El GC utiliza un modelo generacional.

Las generaciones son:

```text
Generation 0
Generation 1
Generation 2
```

---

## Generation 0

Contiene objetos recién creados.

Ejemplo:

```csharp
new Customer();
```

La mayoría de los objetos mueren aquí.

Por ello las recolecciones de Gen 0 suelen ser rápidas.

---

## Generation 1

Actúa como zona intermedia.

Contiene objetos que sobrevivieron a una recolección inicial.

---

## Generation 2

Contiene objetos longevos.

Ejemplos:

* Cachés.
* Singletons.
* Configuraciones.
* Grandes estructuras compartidas.

Las recolecciones de Gen 2 suelen ser más costosas.

---

# Large Object Heap (LOH)

Objetos muy grandes se almacenan en una región especial.

Generalmente:

```text
≥ 85 KB
```

Ejemplos:

```csharp
byte[]
char[]
string grandes
```

Estas asignaciones requieren atención porque generan costes mayores de GC.

---

# Compactación

Después de una recolección, el GC puede compactar memoria.

Ejemplo:

Antes:

```text
A
B
[Vacío]
C
```

Después:

```text
A
B
C
```

Esto reduce fragmentación y mejora localidad de memoria.

---

# Finalización

Algunos objetos requieren lógica antes de ser eliminados.

Ejemplo:

```csharp
~Customer()
{
}
```

Esto define un finalizador.

Los finalizadores tienen costes importantes y deben utilizarse únicamente cuando existe una necesidad real relacionada con recursos no administrados.

---

# IDisposable

El Garbage Collector administra memoria.

No administra recursos externos.

Ejemplos:

* Archivos.
* Sockets.
* Conexiones.
* Handles.
* Streams.

Por ello existe:

```csharp
IDisposable
```

Ejemplo:

```csharp
using var stream =
    File.OpenRead("data.txt");
```

La liberación ocurre de forma determinística.

---

# Stack vs Heap

Comparación conceptual:

| Característica         | Stack              | Heap              |
| ---------------------- | ------------------ | ----------------- |
| Administración         | Automática         | Garbage Collector |
| Velocidad              | Muy alta           | Menor             |
| Fragmentación          | No                 | Sí                |
| Tamaño                 | Limitado           | Mucho mayor       |
| Compartido entre hilos | No                 | Sí                |
| Objetivo               | Frames y variables | Objetos           |

---

# Modelo de Memoria y Concurrencia

Cuando múltiples hilos acceden al mismo objeto aparecen nuevos desafíos.

Ejemplo:

```csharp
counter++;
```

Esta operación no es atómica.

Internamente puede descomponerse en:

```text
Leer
Incrementar
Escribir
```

Dos hilos pueden interferir entre sí.

---

# Reordenamiento de Instrucciones

El compilador, el CLR y la CPU pueden reordenar instrucciones para optimizar rendimiento.

Ejemplo conceptual:

```csharp
x = 1;
y = 2;
```

No necesariamente se ejecutan exactamente en ese orden observado por otros hilos.

Esto introduce la necesidad de mecanismos de sincronización.

---

# volatile

La palabra clave:

```csharp
volatile
```

Impide ciertas optimizaciones relacionadas con caché y reordenamiento.

Ejemplo:

```csharp
private volatile bool _running;
```

Su uso es relativamente especializado.

Las primitivas modernas de sincronización suelen ser preferibles.

---

# lock

El mecanismo más común de sincronización es:

```csharp
lock
```

Ejemplo:

```csharp
lock (_sync)
{
    counter++;
}
```

Garantiza exclusión mutua.

---

# Interlocked

Para operaciones simples existen primitivas atómicas.

Ejemplo:

```csharp
Interlocked.Increment(ref counter);
```

Evita el coste completo de un lock.

---

# Escape Analysis

No todos los datos terminan necesariamente en el heap.

El runtime moderno puede aplicar optimizaciones que eviten ciertas asignaciones cuando detecta que un valor no escapa de su contexto.

Estas optimizaciones son internas y no deben asumirse explícitamente durante el diseño.

Sin embargo, explican por qué algunos comportamientos reales son más complejos que los modelos simplificados enseñados tradicionalmente.

---

# Mitos Comunes

## "Los Value Types Siempre Van al Stack"

Incorrecto.

Ejemplo:

```csharp
public class Customer
{
    public Point Location;
}
```

`Point` forma parte de un objeto almacenado en el heap.

---

## "Los Reference Types Siempre Van al Heap"

No necesariamente.

Existen optimizaciones del runtime que pueden alterar esta simplificación.

---

## "GC Libera Memoria Inmediatamente"

Incorrecto.

Un objeto elegible para recolección no implica recolección inmediata.

---

## "Null Destruye un Objeto"

Incorrecto.

```csharp
customer = null;
```

Únicamente elimina una referencia.

El objeto continúa existiendo hasta que el GC decida recolectarlo.

---

## "Dispose Libera Memoria"

Incorrecto.

Dispose libera recursos.

La memoria sigue siendo responsabilidad del Garbage Collector.

---

# Implicancias Arquitectónicas

Comprender el modelo de memoria permite:

* Diseñar tipos más eficientes.
* Reducir presión sobre el GC.
* Evitar asignaciones innecesarias.
* Comprender el coste de colecciones.
* Diseñar APIs de alta concurrencia.
* Entender el comportamiento de Entity Framework Core.
* Comprender internamente async/await.
* Interpretar perfiles de rendimiento.
* Diagnosticar problemas de memoria en producción.

El modelo de memoria constituye una de las bases teóricas sobre las cuales se construyen el runtime de .NET, el Garbage Collector, el sistema de tipos y los mecanismos de concurrencia del lenguaje.

---

# Referencias

* ECMA-335 Common Language Infrastructure.
* Microsoft Learn — Managed Memory.
* Microsoft Learn — Garbage Collection Fundamentals.
* Microsoft Learn — Large Object Heap.
* Microsoft Learn — IDisposable Pattern.
* Microsoft Learn — Memory Management and Garbage Collection.
* Richter, Jeffrey. CLR via C#.
* Skeet, Jon. C# in Depth.