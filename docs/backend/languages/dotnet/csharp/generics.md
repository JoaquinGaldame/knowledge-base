# Generics en C#

## Introducción

Los generics constituyen uno de los mecanismos más importantes del sistema de tipos de .NET. Permiten definir algoritmos, estructuras de datos y contratos reutilizables preservando la seguridad de tipos, eliminando conversiones innecesarias y reduciendo costes asociados al boxing y unboxing.

Desde una perspectiva formal, los generics representan una forma de parametrización de tipos. En lugar de escribir una implementación específica para cada tipo concreto, es posible definir una única implementación abstracta que será especializada para los tipos utilizados posteriormente.

Esta capacidad permite construir APIs expresivas, reutilizables y seguras sin sacrificar rendimiento.

La introducción de generics en .NET 2.0 representó uno de los cambios arquitectónicos más importantes en la evolución de la plataforma, afectando directamente al diseño de colecciones, LINQ, Entity Framework, Dependency Injection, ASP.NET Core y gran parte de las bibliotecas modernas del ecosistema.

---

# Motivación

Antes de la incorporación de generics, la reutilización de código presentaba dos problemas fundamentales:

## Duplicación de Implementaciones

Considérese una pila para enteros:

```csharp
public class IntStack
{
    public void Push(int value)
    {
    }

    public int Pop()
    {
        return 0;
    }
}
```

Si posteriormente fuera necesario soportar:

```csharp
string
Customer
Product
Order
```

sería necesario crear múltiples implementaciones:

```text
IntStack
StringStack
CustomerStack
ProductStack
OrderStack
```

La duplicación resulta evidente.

---

## Pérdida de Seguridad de Tipos

Una alternativa consistía en utilizar:

```csharp
object
```

Ejemplo:

```csharp
public class Stack
{
    public void Push(object value)
    {
    }

    public object Pop()
    {
        return null!;
    }
}
```

Uso:

```csharp
Stack stack = new();

stack.Push(10);

int value = (int)stack.Pop();
```

Problemas:

* Casts explícitos.
* Posibles errores en tiempo de ejecución.
* Boxing de value types.
* Pérdida de información de tipos.

Los generics fueron diseñados para resolver simultáneamente ambos problemas.

---

# Definición Formal

La especificación de C# define un tipo genérico como un tipo parametrizado por uno o más parámetros de tipo.

Ejemplo:

```csharp
public class Repository<T>
{
}
```

Aquí:

```csharp
T
```

no representa un tipo concreto.

Representa una variable de tipo que será sustituida posteriormente.

---

# Parámetros de Tipo

Un parámetro de tipo es un marcador abstracto que representa un tipo aún desconocido.

Ejemplo:

```csharp
public sealed class Repository<T>
{
}
```

El compilador no sabe inicialmente qué representa:

```csharp
T
```

La definición permanece abierta hasta que se especifica un argumento de tipo.

---

# Argumentos de Tipo

Cuando se proporciona un tipo concreto:

```csharp
Repository<Customer>
```

el parámetro:

```csharp
T
```

queda sustituido por:

```csharp
Customer
```

La construcción resultante se denomina tipo genérico cerrado.

---

# Tipos Genéricos Abiertos y Cerrados

## Tipo Abierto

```csharp
Repository<T>
```

Todavía contiene parámetros sin resolver.

---

## Tipo Cerrado

```csharp
Repository<Customer>
```

Todos los parámetros poseen un tipo concreto.

Los tipos cerrados son los que normalmente se instancian durante la ejecución.

---

# Generic Classes

Ejemplo:

```csharp
public sealed class Repository<T>
{
    private readonly List<T> _items = [];

    public void Add(T item)
    {
        _items.Add(item);
    }
}
```

Uso:

```csharp
Repository<Customer> repository =
    new();
```

La misma implementación puede utilizarse para cualquier tipo.

---

# Generic Methods

Los generics no se limitan a clases.

También pueden utilizarse en métodos.

Ejemplo:

```csharp
public static T Identity<T>(T value)
{
    return value;
}
```

Uso:

```csharp
int number =
    Identity(42);

string text =
    Identity("hello");
```

---

# Inferencia de Tipos

En muchos casos el compilador puede inferir automáticamente los argumentos genéricos.

Ejemplo:

```csharp
var result =
    Identity(42);
```

El compilador deduce:

```csharp
T = int
```

Sin necesidad de especificarlo explícitamente.

---

# Generic Interfaces

Los contratos también pueden parametrizarse.

Ejemplo:

```csharp
public interface IRepository<T>
{
    Task<T?> GetByIdAsync(Guid id);

    Task AddAsync(T entity);
}
```

Esto permite construir abstracciones reutilizables y seguras.

---

# Generic Delegates

Ejemplo:

```csharp
Func<int, string>

Action<Customer>
```

Internamente son delegates genéricos.

---

# Generic Constraints

Uno de los aspectos más importantes de los generics es la capacidad de imponer restricciones.

Sin restricciones:

```csharp
public class Repository<T>
{
}
```

El compilador no conoce nada sobre:

```csharp
T
```

No puede asumir propiedades, métodos o constructores.

---

# Restricción class

```csharp
where T : class
```

Ejemplo:

```csharp
public class Repository<T>
    where T : class
{
}
```

Garantiza que:

```csharp
T
```

es un tipo por referencia.

---

# Restricción struct

```csharp
where T : struct
```

Garantiza:

```text
Value Type
```

Ejemplo:

```csharp
public class Calculator<T>
    where T : struct
{
}
```

---

# Restricción new()

Permite instanciar:

```csharp
T
```

dentro del código.

```csharp
where T : new()
```

Ejemplo:

```csharp
public T Create()
{
    return new T();
}
```

---

# Restricción de Herencia

```csharp
where T : Entity
```

Ejemplo:

```csharp
public class Repository<T>
    where T : Entity
{
}
```

Ahora el compilador sabe que:

```csharp
T
```

posee todos los miembros de:

```csharp
Entity
```

---

# Restricción de Interfaces

```csharp
where T : IAggregateRoot
```

Permite construir APIs basadas en contratos.

---

# Restricciones Combinadas

Ejemplo:

```csharp
where T : Entity,
          IAggregateRoot,
          new()
```

El compilador aplica todas simultáneamente.

---

# Reified Generics

Una característica distintiva de .NET es que los generics existen en tiempo de ejecución.

Esto se conoce como:

```text
Reified Generics
```

El runtime conserva información completa sobre:

```csharp
List<Customer>
```

y

```csharp
List<Product>
```

como tipos distintos.

Ejemplo:

```csharp
typeof(List<Customer>)
```

es diferente de:

```csharp
typeof(List<Product>)
```

---

# Comparación con Java

Java implementa generics mediante:

```text
Type Erasure
```

La información genérica se elimina durante compilación.

En .NET:

```text
Reification
```

La información permanece disponible en runtime.

Esto permite:

* Reflection más potente.
* Dependency Injection basada en tipos genéricos.
* Mejor integración con metadatos.
* Mayor expresividad en frameworks.

---

# Implementación Interna

Cuando se utiliza:

```csharp
List<int>
```

el CLR genera una implementación especializada para:

```csharp
int
```

Cuando se utiliza:

```csharp
List<Customer>
```

el runtime puede reutilizar gran parte de la implementación.

Este comportamiento permite equilibrar:

* Seguridad de tipos.
* Rendimiento.
* Uso de memoria.

---

# Generics y Boxing

Uno de los mayores beneficios de los generics es eliminar boxing innecesario.

Ejemplo no genérico:

```csharp
ArrayList values = new();

values.Add(42);
```

Produce boxing.

---

Versión genérica:

```csharp
List<int> values = new();

values.Add(42);
```

No produce boxing.

Esto fue una de las razones principales para introducir generics en .NET 2.0.

---

# Generics y Colecciones

Las colecciones modernas se basan completamente en generics.

Ejemplos:

```csharp
List<T>

HashSet<T>

Dictionary<TKey, TValue>

Queue<T>

Stack<T>
```

Sin generics estas APIs serían significativamente menos seguras y menos eficientes.

---

# Generics y LINQ

LINQ depende extensivamente de generics.

Ejemplo:

```csharp
IEnumerable<Customer>
```

Métodos como:

```csharp
Where
Select
GroupBy
OrderBy
```

operan mediante tipos genéricos.

---

# Generics y Dependency Injection

ASP.NET Core utiliza generics de forma intensiva.

Ejemplo:

```csharp
ILogger<T>
```

```csharp
IOptions<T>
```

```csharp
IRepository<T>
```

Estos patrones serían mucho más complejos sin soporte genérico.

---

# Generics y Entity Framework Core

Entity Framework Core utiliza generics extensivamente.

Ejemplos:

```csharp
DbSet<Customer>

DbSet<Product>
```

```csharp
IEntityTypeConfiguration<T>
```

```csharp
EntityEntry<T>
```

La mayor parte de la API pública está basada en parametrización de tipos.

---

# Covarianza y Contravarianza

Algunos tipos genéricos admiten variación.

Ejemplo:

```csharp
IEnumerable<string>
```

puede utilizarse como:

```csharp
IEnumerable<object>
```

Esto se conoce como:

```text
Covarianza
```

La contravarianza permite relaciones inversas para ciertos delegates e interfaces.

Estos conceptos constituyen una extensión formal del sistema de tipos y requieren un estudio específico.

---

# Limitaciones

Los generics no permiten:

## Heredar de un Parámetro de Tipo

Inválido:

```csharp
class MyClass : T
{
}
```

---

## Instanciar Sin Restricción

Inválido:

```csharp
new T();
```

Sin:

```csharp
where T : new()
```

---

## Operadores Arbitrarios

El compilador no puede asumir:

```csharp
T + T
```

salvo en escenarios especiales soportados por versiones modernas mediante Generic Math.

---

# Generic Math

Introducido progresivamente en .NET moderno.

Permite expresar operaciones matemáticas sobre tipos genéricos.

Ejemplo conceptual:

```csharp
where T : INumber<T>
```

Esto habilita algoritmos matemáticos genéricos con seguridad de tipos.

Representa una evolución significativa del sistema de tipos de .NET.

---

# Implicancias Arquitectónicas

Los generics constituyen uno de los mecanismos fundamentales sobre los cuales se construyen:

* Colecciones modernas.
* LINQ.
* Entity Framework Core.
* ASP.NET Core.
* Dependency Injection.
* Logging.
* Options Pattern.
* Result Patterns.
* Domain-Driven Design.
* Clean Architecture.

La parametrización de tipos permite construir componentes reutilizables sin sacrificar seguridad, expresividad ni rendimiento.

Su comprensión resulta indispensable para entender gran parte de las APIs modernas de la plataforma .NET.

---

# Referencias

* ECMA-334 C# Language Specification.
* ECMA-335 Common Language Infrastructure.
* Microsoft Learn — Generics in .NET.
* Microsoft Learn — Generic Classes and Methods.
* Microsoft Learn — Constraints on Type Parameters.
* Microsoft Learn — Covariance and Contravariance.
* Microsoft Learn — Generic Math.
* Richter, Jeffrey. CLR via C#.
* Skeet, Jon. C# in Depth.
* Troelsen & Japikse. Pro C# and the .NET Platform.