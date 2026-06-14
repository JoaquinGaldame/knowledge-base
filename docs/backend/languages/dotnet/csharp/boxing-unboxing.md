# Boxing y Unboxing en C#

## Introducción

Boxing y unboxing son mecanismos fundamentales del sistema de tipos de .NET que permiten la conversión entre tipos por valor (*value types*) y tipos por referencia (*reference types*).

Aunque suelen presentarse como conversiones simples entre ambos mundos, en realidad implican operaciones de asignación de memoria, copias de datos y potenciales costes de rendimiento que pueden afectar significativamente aplicaciones de alta concurrencia o alto volumen de procesamiento.

Comprender boxing y unboxing resulta esencial para entender el funcionamiento interno del Common Language Runtime (CLR), el comportamiento de colecciones no genéricas, la interoperabilidad con APIs heredadas y los motivos por los cuales los generics representan una mejora arquitectónica importante dentro de .NET.

---

# Motivación

Considérese el siguiente código:

```csharp
int number = 42;

object value = number;
```

Aparentemente se trata de una asignación simple.

Sin embargo, ocurre algo más complejo.

`number` es un tipo por valor:

```csharp
System.Int32
```

Mientras que:

```csharp
object
```

es un tipo por referencia.

El CLR debe transformar temporalmente el valor entero en un objeto administrado.

Este proceso se conoce como:

```text
Boxing
```

Posteriormente:

```csharp
int restored = (int)value;
```

requiere la operación inversa:

```text
Unboxing
```

---

# Definición Formal

La especificación de C# define:

## Boxing

Conversión de un tipo por valor hacia:

```csharp
object
```

o hacia una interfaz implementada por dicho tipo.

## Unboxing

Conversión explícita de un objeto boxed nuevamente a su tipo por valor original.

---

# El Problema que Resuelve Boxing

El sistema de tipos de .NET es unificado.

Todos los tipos derivan directa o indirectamente de:

```csharp
System.Object
```

Sin embargo:

```csharp
int
```

no es un objeto.

Es un value type.

Cuando el runtime necesita tratar un value type como un objeto, debe encapsularlo dentro de una instancia administrada.

Ese encapsulamiento es boxing.

---

# Ejemplo Básico de Boxing

```csharp
int number = 42;

object value = number;
```

Representación conceptual antes del boxing:

```text
Stack

number
  │
  ▼

42
```

Después:

```text
Stack

value
  │
  ▼

Heap

Object
└── 42
```

El CLR:

1. Reserva memoria en el heap.
2. Crea un objeto administrado.
3. Copia el valor.
4. Devuelve una referencia al nuevo objeto.

---

# Qué Ocurre Internamente

Código:

```csharp
int number = 42;

object boxed = number;
```

Proceso simplificado:

```text
1. Leer valor original.
2. Reservar memoria en heap.
3. Crear object header.
4. Copiar valor.
5. Devolver referencia.
```

Resultado:

```text
Stack

boxed
   │
   ▼

Heap

[Object]
   │
   ▼

42
```

El valor original y el boxed son entidades diferentes.

---

# Boxing Genera Copias

Ejemplo:

```csharp
int number = 42;

object boxed = number;

number = 100;
```

Resultado:

```text
number = 100

boxed = 42
```

El objeto boxed contiene una copia independiente.

Modificar el valor original no afecta al boxed.

---

# Ejemplo con Structs

```csharp
public struct Point
{
    public int X;
    public int Y;
}
```

```csharp
Point point = new()
{
    X = 10,
    Y = 20
};

object boxed = point;
```

El runtime crea un nuevo objeto que contiene una copia completa del struct.

---

# Boxing hacia Interfaces

No solo ocurre con object.

También ocurre al convertir hacia una interfaz implementada por un value type.

Ejemplo:

```csharp
int number = 42;

IComparable comparable = number;
```

Proceso:

```text
int
   ↓
Boxing
   ↓
Object
   ↓
IComparable
```

El boxing sigue ocurriendo.

---

# Ejemplo con Enum

```csharp
public enum Status
{
    Active,
    Inactive
}
```

```csharp
Status status = Status.Active;

object value = status;
```

También produce boxing.

---

# Definición de Unboxing

Unboxing es la operación inversa.

Ejemplo:

```csharp
object value = 42;

int number = (int)value;
```

Proceso:

```text
Object
   ↓
Validación de tipo
   ↓
Extracción del valor
   ↓
Copia del valor
```

El resultado vuelve a ser un value type.

---

# Unboxing Requiere Conversión Explícita

Ejemplo válido:

```csharp
object value = 42;

int number = (int)value;
```

Ejemplo inválido:

```csharp
object value = 42;

int number = value;
```

El compilador exige un cast explícito.

---

# Validación de Tipo Durante Unboxing

El runtime verifica que el objeto boxed contiene exactamente el tipo esperado.

Ejemplo:

```csharp
object value = 42;

long number = (long)value;
```

Resultado:

```text
InvalidCastException
```

Aunque:

```text
int → long
```

sea una conversión válida normalmente.

Durante unboxing el tipo debe coincidir exactamente.

---

# Proceso Completo

Ejemplo:

```csharp
int number = 42;

object boxed = number;

int restored = (int)boxed;
```

Representación:

```text
Value Type
     │
     ▼

Boxing

     │
     ▼

Reference Type

     │
     ▼

Unboxing

     │
     ▼

Value Type
```

---

# Costes de Boxing

Boxing no es gratuito.

Implica:

* Asignación en heap.
* Copia de datos.
* Presión sobre el Garbage Collector.
* Posibles pérdidas de rendimiento.

Por ello, en aplicaciones críticas, suele evitarse cuando es posible.

---

# Costes de Unboxing

Unboxing también tiene costes.

Implica:

* Validación de tipos.
* Extracción del valor.
* Copia del valor.

Aunque normalmente es menos costoso que el boxing, sigue siendo una operación adicional.

---

# Colecciones No Genéricas

Antes de .NET 2.0 era común utilizar:

```csharp
ArrayList
Hashtable
```

Ejemplo:

```csharp
ArrayList list = new();

list.Add(1);
list.Add(2);
list.Add(3);
```

Internamente:

```text
1 → Boxing
2 → Boxing
3 → Boxing
```

Cada entero genera una asignación independiente.

---

# Problema de Rendimiento

Ejemplo:

```csharp
for (int i = 0; i < 1_000_000; i++)
{
    list.Add(i);
}
```

Resultado:

```text
1.000.000 boxings
1.000.000 asignaciones
1.000.000 objetos para GC
```

El impacto puede ser significativo.

---

# Generics como Solución

La aparición de generics eliminó gran parte de este problema.

Ejemplo:

```csharp
List<int> values = new();
```

```csharp
values.Add(1);
values.Add(2);
values.Add(3);
```

Aquí no ocurre boxing.

El CLR genera una implementación especializada para:

```csharp
List<int>
```

permitiendo almacenar directamente los valores.

---

# Boxing Implícito

Muchas veces ocurre sin ser evidente.

Ejemplo:

```csharp
int number = 42;

Console.WriteLine(number);
```

Dependiendo de la sobrecarga utilizada, puede producirse boxing.

Por esta razón es importante comprender qué firmas reciben:

```csharp
object
```

---

# Boxing en String Interpolation

Ejemplo:

```csharp
int age = 30;

string text = $"Age: {age}";
```

Las implementaciones modernas reducen considerablemente este problema mediante optimizaciones del compilador.

Sin embargo, históricamente ciertos escenarios generaban boxing implícito.

---

# Boxing en Params Object[]

Ejemplo:

```csharp
Log(
    "User",
    1,
    true,
    DateTime.UtcNow);
```

Firma:

```csharp
void Log(params object[] values)
```

Todos los value types serán boxed.

---

# Boxing en Interfaces Genéricas

Considérese:

```csharp
public struct Money
{
}
```

```csharp
Money money = new();

IDisposable disposable =
    (IDisposable)money;
```

Si la interfaz es implementada por el struct, normalmente se producirá boxing.

---

# Boxing en foreach

En algunos escenarios relacionados con enumeradores e interfaces puede producirse boxing oculto.

Ejemplo conceptual:

```csharp
IEnumerable<int> values = list;
```

Dependiendo del tipo concreto utilizado.

Por esta razón muchas colecciones modernas proporcionan enumeradores optimizados.

---

# Cómo Detectar Boxing

Indicadores comunes:

```csharp
object
```

```csharp
params object[]
```

```csharp
ArrayList
```

```csharp
Hashtable
```

```csharp
Interfaces sobre structs
```

Herramientas útiles:

* BenchmarkDotNet
* Visual Studio Profiler
* PerfView
* dotMemory
* JetBrains Rider Profiler

---

# Boxing y Equality

Considérese:

```csharp
int x = 10;

object a = x;
object b = x;
```

```csharp
ReferenceEquals(a, b)
```

Resultado:

```text
false
```

Se han creado dos objetos distintos.

Cada boxing genera una nueva asignación.

---

# Impacto en Aplicaciones Reales

El impacto suele ser insignificante cuando:

* Ocurre esporádicamente.
* Se ejecuta fuera de caminos críticos.

Sin embargo puede ser relevante cuando:

* Se ejecuta millones de veces.
* Aparece dentro de loops.
* Ocurre en sistemas de baja latencia.
* Forma parte de procesamiento intensivo.

---

# Buenas Prácticas

## Preferir Colecciones Genéricas

Correcto:

```csharp
List<int>
```

Evitar:

```csharp
ArrayList
```

---

## Evitar APIs Basadas en Object

Preferir:

```csharp
void Save<T>(T value)
```

Antes que:

```csharp
void Save(object value)
```

cuando sea apropiado.

---

## Diseñar Structs Cuidadosamente

Los structs suelen utilizarse para:

* Value Objects.
* Coordenadas.
* Rangos.
* Cantidades monetarias.

Debe evitarse convertirlos constantemente a interfaces u object.

---

## Medir Antes de Optimizar

No todo boxing constituye un problema real.

La optimización debe basarse en mediciones y perfiles de rendimiento.

---

# Relación con Otros Conceptos

Boxing y unboxing se relacionan directamente con:

* Sistema de Tipos.
* Value Types.
* Reference Types.
* Memory Model.
* Generics.
* Collections.
* Garbage Collection.
* Performance.
* Records.
* Value Objects.

La comprensión de estos mecanismos resulta fundamental para entender por qué muchas de las decisiones de diseño de .NET moderno, especialmente generics y colecciones tipadas, fueron introducidas para eliminar costes derivados de conversiones entre tipos por valor y tipos por referencia.

---

# Referencias

* ECMA-334 C# Language Specification.
* ECMA-335 Common Language Infrastructure.
* Microsoft Learn — Boxing and Unboxing.
* Microsoft Learn — Value Types.
* Microsoft Learn — Generics.
* Microsoft Learn — Performance Best Practices.
* Richter, Jeffrey. CLR via C#.
* Skeet, Jon. C# in Depth.