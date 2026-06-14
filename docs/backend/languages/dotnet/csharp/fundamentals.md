# Fundamentos de C#

## Introducción

C# es un lenguaje de programación moderno, multiparadigma, fuertemente tipado y orientado a objetos, diseñado originalmente por Microsoft como parte de la plataforma .NET. Su propósito principal es permitir la construcción de aplicaciones robustas, mantenibles y seguras, combinando productividad de desarrollo con capacidades avanzadas de ingeniería de software.

Aunque C# suele asociarse principalmente al desarrollo backend con ASP.NET Core, su campo de aplicación es más amplio. El lenguaje puede utilizarse para construir APIs, aplicaciones de escritorio, servicios en segundo plano, aplicaciones móviles, videojuegos, sistemas distribuidos, herramientas de línea de comandos y aplicaciones cloud-native.

Desde una perspectiva profesional, C# no debe entenderse únicamente como una sintaxis para escribir programas sobre .NET, sino como un lenguaje diseñado sobre un modelo de ejecución administrado, un sistema de tipos formal, un compilador moderno, una especificación pública y una integración profunda con el Common Language Runtime.

---

## Objetivos de Diseño del Lenguaje

C# fue diseñado como un lenguaje de propósito general, moderno y orientado a objetos. Su especificación establece como objetivos principales la simplicidad relativa, la seguridad de tipos, la productividad del programador y la capacidad de construir software robusto.

Entre sus objetivos de diseño más relevantes se encuentran:

* Proveer un lenguaje moderno, general y orientado a objetos.
* Soportar principios de ingeniería de software como tipado fuerte, verificación de límites en arreglos y detección de variables no inicializadas.
* Integrarse con un entorno de ejecución administrado.
* Permitir el desarrollo de aplicaciones grandes, mantenibles y escalables.
* Mantener un equilibrio entre productividad, expresividad y rendimiento.
* Proporcionar interoperabilidad con otros lenguajes de la plataforma .NET.

Estos objetivos explican varias decisiones del lenguaje: la existencia de un recolector de basura, el sistema de tipos unificado, la distinción entre tipos por valor y tipos por referencia, el soporte de excepciones, la metaprogramación mediante atributos, la programación asincrónica basada en `Task` y la evolución progresiva del lenguaje mediante nuevas versiones.

---

## Relación entre C#, .NET y CLR

C# es el lenguaje de programación. .NET es la plataforma de desarrollo. El CLR, o Common Language Runtime, es el entorno de ejecución que administra la ejecución del código compilado.

La relación puede representarse de la siguiente forma:

```text
Código fuente C#
        ↓
Compilador de C#
        ↓
Intermediate Language (IL)
        ↓
Common Language Runtime (CLR)
        ↓
Código nativo ejecutado por la máquina
```

El compilador de C# no genera directamente código máquina específico del sistema operativo. En su lugar, genera Intermediate Language, también conocido como IL. Este código intermedio es empaquetado dentro de assemblies, normalmente archivos `.dll` o `.exe`.

Durante la ejecución, el CLR se encarga de convertir el IL en código nativo mediante compilación Just-In-Time. Además, administra aspectos esenciales como memoria, seguridad de tipos, carga de assemblies, manejo de excepciones, interoperabilidad y garbage collection.

Esta separación entre lenguaje, compilación intermedia y runtime permite que distintos lenguajes de .NET puedan interoperar entre sí siempre que respeten las reglas del Common Type System.

---

## Código Administrado

El código escrito en C# normalmente se ejecuta como código administrado. Esto significa que su ejecución está controlada por el runtime de .NET.

El código administrado obtiene servicios del CLR, entre ellos:

* Administración automática de memoria.
* Verificación de seguridad de tipos.
* Manejo estructurado de excepciones.
* Compilación Just-In-Time.
* Carga y aislamiento de assemblies.
* Metadatos de tipos disponibles en tiempo de ejecución.
* Integración con herramientas de diagnóstico, profiling y debugging.

La administración automática de memoria no significa ausencia de problemas de rendimiento o consumo de recursos. Significa que el programador no libera manualmente la memoria de los objetos administrados. Sin embargo, sigue siendo necesario comprender ciclos de vida, referencias, asignaciones, presión sobre el garbage collector y uso correcto de recursos no administrados.

---

## Assemblies

Un assembly es la unidad fundamental de despliegue, versionado y carga en .NET. Puede ser un archivo `.dll` o `.exe` y contiene código IL, metadatos y manifiesto.

Los metadatos describen los tipos definidos en el assembly, sus miembros, referencias, atributos y dependencias. Esta información permite que el runtime inspeccione, cargue y ejecute el código de forma controlada.

En aplicaciones .NET modernas, una solución suele estar compuesta por múltiples assemblies. Por ejemplo, una API basada en Clean Architecture puede separar su código en proyectos como:

```text
Financial.Api
Financial.Application
Financial.Domain
Financial.Persistence
Financial.Infrastructure
```

Cada proyecto compila en un assembly independiente. Esta separación permite controlar dependencias, encapsular responsabilidades y mantener una arquitectura más clara.

---

## Namespaces

Un namespace es un mecanismo lógico de organización de tipos. Su función principal es evitar colisiones de nombres y agrupar clases, interfaces, estructuras, enumeraciones y delegates relacionados.

Ejemplo:

```csharp
namespace Financial.Domain.Customers;

public sealed class Customer
{
}
```

El namespace no define necesariamente la ubicación física del archivo en el sistema de carpetas, aunque por convención suele existir una correspondencia entre carpetas y namespaces.

En sistemas profesionales, los namespaces cumplen una función arquitectónica. Permiten expresar límites conceptuales dentro del sistema y facilitan la navegación del código.

Por ejemplo:

```text
Financial.Domain.Customers
Financial.Domain.Accounts
Financial.Application.Customers.Commands
Financial.Application.Customers.Queries
Financial.Infrastructure.Persistence
```

Una estructura de namespaces coherente ayuda a que el diseño del sistema sea comprensible y mantenible.

---

## Sistema de Tipos

C# posee un sistema de tipos estático, fuerte y unificado. Estático significa que la mayoría de las comprobaciones de tipos ocurren durante la compilación. Fuerte significa que el lenguaje impone reglas estrictas sobre las operaciones válidas entre tipos. Unificado significa que todos los tipos derivan directa o indirectamente de `object`.

El sistema de tipos de C# distingue principalmente entre:

```text
Tipos por valor
Tipos por referencia
Parámetros de tipo
Tipos puntero en contextos unsafe
```

Los tipos por valor almacenan directamente sus datos. Los tipos por referencia almacenan una referencia a un objeto ubicado en memoria administrada.

Ejemplos de tipos por valor:

```csharp
int age = 30;
decimal amount = 1500.75m;
bool isActive = true;
DateTime createdAt = DateTime.UtcNow;
```

Ejemplos de tipos por referencia:

```csharp
string name = "Joaquin";
Customer customer = new Customer();
List<string> names = new List<string>();
```

Comprender el sistema de tipos es fundamental para dominar C#, porque afecta directamente al diseño de APIs, uso de memoria, nullability, boxing, generics, igualdad, mutabilidad y rendimiento.

---

## Clases

Una clase es un tipo por referencia que permite modelar entidades con estado y comportamiento.

Ejemplo:

```csharp
public sealed class Customer
{
    public Guid Id { get; private set; }

    public string Name { get; private set; }

    public bool IsActive { get; private set; }

    public Customer(Guid id, string name)
    {
        Id = id;
        Name = name;
        IsActive = true;
    }

    public void Deactivate()
    {
        IsActive = false;
    }
}
```

Las clases son apropiadas cuando se necesita identidad, ciclo de vida, mutabilidad controlada o comportamiento asociado al estado interno.

En sistemas orientados a dominio, una clase puede representar una entidad cuando su identidad es más importante que sus valores actuales. Por ejemplo, un cliente puede cambiar su nombre o estado, pero sigue siendo el mismo cliente si conserva su identidad.

---

## Structs

Un `struct` es un tipo por valor. A diferencia de una clase, una variable de tipo `struct` contiene directamente sus datos.

Ejemplo:

```csharp
public readonly struct Money
{
    public decimal Amount { get; }

    public string Currency { get; }

    public Money(decimal amount, string currency)
    {
        Amount = amount;
        Currency = currency;
    }
}
```

Los structs pueden ser útiles para representar valores pequeños, inmutables y sin identidad propia. Sin embargo, su uso requiere cuidado porque las copias de tipos por valor pueden generar efectos no deseados si el tipo es mutable o demasiado grande.

En código profesional, los structs suelen utilizarse cuando existe una razón clara de modelado o rendimiento. Para muchos casos de dominio, los records o clases inmutables pueden resultar más expresivos.

---

## Interfaces

Una interfaz define un contrato. Especifica qué operaciones debe exponer un tipo, pero no necesariamente cómo deben implementarse.

Ejemplo:

```csharp
public interface ICustomerRepository
{
    Task<Customer?> GetByIdAsync(Guid customerId, CancellationToken cancellationToken);

    Task AddAsync(Customer customer, CancellationToken cancellationToken);
}
```

Las interfaces son una herramienta central para aplicar inversión de dependencias, desacoplar capas y permitir sustitución de implementaciones.

En arquitectura backend, las interfaces suelen ubicarse en capas internas, como Application o Domain, mientras que sus implementaciones concretas se ubican en Infrastructure o Persistence.

Este diseño permite que la lógica de negocio dependa de abstracciones y no de detalles técnicos como Entity Framework Core, SQL Server, MongoDB o servicios externos.

---

## Enums

Un enum define un conjunto limitado de constantes con nombre.

Ejemplo:

```csharp
public enum CustomerStatus
{
    Pending = 1,
    Active = 2,
    Suspended = 3,
    Deleted = 4
}
```

Los enums son útiles cuando el conjunto de valores posibles es cerrado y estable. Sin embargo, en dominios complejos pueden ser insuficientes si cada estado requiere comportamiento específico, reglas de transición o metadatos adicionales.

En esos casos puede ser más adecuado utilizar patrones como Smart Enum, Value Object o una entidad de catálogo persistida en base de datos.

---

## Records

Los records fueron introducidos para facilitar la definición de modelos orientados a valores, con soporte nativo para igualdad estructural, inmutabilidad parcial y expresividad sintáctica.

Ejemplo:

```csharp
public sealed record CustomerDto(
    Guid Id,
    string Name,
    string Status
);
```

A diferencia de una clase tradicional, un record compara sus valores por defecto. Esto lo hace útil para DTOs, mensajes, resultados de operaciones, eventos de dominio y objetos inmutables.

Sin embargo, el uso de records debe responder al significado del modelo. Si un objeto representa identidad, ciclo de vida y comportamiento mutable controlado, una clase suele ser más apropiada. Si representa datos o valores, un record puede ser una opción adecuada.

---

## Métodos

Un método define una operación asociada a un tipo. Puede recibir parámetros, devolver un valor y modificar el estado del objeto si pertenece a una instancia mutable.

Ejemplo:

```csharp
public void Activate()
{
    if (IsActive)
    {
        throw new InvalidOperationException("The customer is already active.");
    }

    IsActive = true;
}
```

Los métodos son una unidad esencial de encapsulamiento. En un diseño orientado a objetos, las reglas que modifican el estado de una entidad deberían estar cerca del estado que protegen.

Esto evita que la lógica de negocio quede dispersa en servicios anémicos o capas externas.

---

## Propiedades

Las propiedades permiten exponer estado de forma controlada.

Ejemplo:

```csharp
public string Name { get; private set; }
```

El uso de `private set` permite que el estado sea leído desde fuera del objeto, pero modificado únicamente desde dentro de la propia clase.

Esto favorece el encapsulamiento y evita que cualquier consumidor pueda alterar el estado sin pasar por las reglas del dominio.

Ejemplo:

```csharp
public void ChangeName(string name)
{
    if (string.IsNullOrWhiteSpace(name))
    {
        throw new ArgumentException("Name cannot be empty.", nameof(name));
    }

    Name = name;
}
```

El acceso directo e indiscriminado a setters públicos puede debilitar el modelo de dominio, porque permite construir estados inválidos desde cualquier punto del sistema.

---

## Modificadores de Acceso

Los modificadores de acceso controlan la visibilidad de tipos y miembros.

Los más utilizados son:

```text
public
private
protected
internal
protected internal
private protected
```

El uso correcto de modificadores de acceso es una herramienta de diseño. No todo debe ser público. Una API pública, incluso dentro de una solución, representa un contrato que otros componentes pueden consumir.

Reducir la superficie pública del código permite disminuir acoplamiento, proteger invariantes y facilitar refactorizaciones futuras.

Ejemplo:

```csharp
public sealed class Order
{
    private readonly List<OrderItem> _items = new();

    public IReadOnlyCollection<OrderItem> Items => _items.AsReadOnly();

    public void AddItem(Product product, int quantity)
    {
        // Business rules
    }
}
```

En este ejemplo, la colección interna no se expone como modificable. El consumidor puede leer los ítems, pero no puede modificar la colección sin pasar por el método de dominio correspondiente.

---

## Compilación

El proceso de compilación de C# transforma código fuente en Intermediate Language y metadatos.

El flujo general es:

```text
Archivos .cs
    ↓
Compilador de C#
    ↓
IL + Metadata
    ↓
Assembly
    ↓
Ejecución por CLR
```

El compilador realiza análisis léxico, sintáctico y semántico. También verifica tipos, accesibilidad, conversiones, flujo de datos, inicialización de variables y reglas del lenguaje.

En versiones modernas de .NET, el compilador de C# forma parte de la plataforma Roslyn. Roslyn expone APIs de compilación y análisis que permiten crear analizadores, generadores de código, refactorizaciones y herramientas estáticas.

---

## Intermediate Language

Intermediate Language es una representación intermedia del programa. No es código fuente C# ni código máquina final. Es un lenguaje intermedio diseñado para ser ejecutado por el runtime de .NET.

Ejemplo conceptual:

```text
C# source code
    ↓
IL code
    ↓
JIT compilation
    ↓
Native machine code
```

El uso de IL permite interoperabilidad entre lenguajes de .NET. C#, F# y Visual Basic pueden compilar hacia IL y compartir tipos mediante el Common Type System.

---

## Common Language Runtime

El CLR es el entorno de ejecución de .NET. Sus responsabilidades incluyen:

* Carga de assemblies.
* Verificación de tipos.
* Compilación Just-In-Time.
* Administración de memoria.
* Garbage collection.
* Manejo de excepciones.
* Interoperabilidad.
* Seguridad de ejecución.
* Soporte para debugging y profiling.

Desde la perspectiva de un desarrollador backend, comprender el CLR permite razonar mejor sobre rendimiento, memoria, excepciones, concurrencia, carga de tipos y comportamiento en producción.

---

## Garbage Collection

C# utiliza administración automática de memoria para objetos administrados. El garbage collector identifica objetos que ya no son alcanzables por el programa y recupera su memoria.

Esto reduce errores comunes de lenguajes con administración manual de memoria, como liberación doble, uso posterior a liberación o fugas por falta de liberación explícita.

Sin embargo, el garbage collector no elimina la necesidad de diseñar correctamente el ciclo de vida de los objetos. Una aplicación puede seguir teniendo problemas de memoria si mantiene referencias innecesarias, crea demasiadas asignaciones, usa colecciones sin límites o no libera recursos no administrados.

Los recursos no administrados, como archivos, sockets, conexiones o handles, deben liberarse mediante patrones como `IDisposable`, `using` o `await using`.

Ejemplo:

```csharp
using var stream = File.OpenRead("data.txt");
```

---

## Excepciones

C# utiliza excepciones para representar errores que interrumpen el flujo normal del programa.

Ejemplo:

```csharp
public Customer GetCustomer(Guid id)
{
    Customer? customer = repository.Find(id);

    if (customer is null)
    {
        throw new InvalidOperationException("Customer was not found.");
    }

    return customer;
}
```

Las excepciones deben utilizarse para situaciones excepcionales, no como mecanismo ordinario de control de flujo.

En aplicaciones backend, el manejo de excepciones suele centralizarse mediante middleware, filtros o mecanismos globales de error handling. Esto permite transformar errores internos en respuestas HTTP consistentes, como `400 Bad Request`, `404 Not Found`, `409 Conflict` o `500 Internal Server Error`.

---

## Programación Asincrónica

C# soporta programación asincrónica mediante `Task`, `Task<T>`, `async` y `await`.

Ejemplo:

```csharp
public async Task<Customer?> GetByIdAsync(
    Guid customerId,
    CancellationToken cancellationToken)
{
    return await dbContext.Customers
        .FirstOrDefaultAsync(x => x.Id == customerId, cancellationToken);
}
```

La programación asincrónica es fundamental en aplicaciones backend porque muchas operaciones son I/O bound: acceso a base de datos, llamadas HTTP, lectura de archivos, colas de mensajes o servicios externos.

El uso de `async` y `await` permite liberar el hilo mientras la operación espera una respuesta externa. Esto mejora la escalabilidad del servidor, especialmente en APIs con alta concurrencia.

---

## Nullability

Históricamente, las referencias nulas han sido una de las fuentes más frecuentes de errores en lenguajes orientados a objetos. C# introdujo Nullable Reference Types para permitir que el compilador ayude a detectar posibles usos incorrectos de `null`.

Ejemplo:

```csharp
public string Name { get; set; } = string.Empty;

public string? Description { get; set; }
```

En este caso, `Name` expresa que no debería ser nulo, mientras que `Description` expresa que puede ser nulo.

Nullable Reference Types no elimina `null` del lenguaje. Tampoco cambia completamente el comportamiento en tiempo de ejecución. Su valor principal está en el análisis estático del compilador y en la documentación explícita de intención.

---

## Paradigmas Soportados

C# es un lenguaje multiparadigma. Aunque su base histórica es la programación orientada a objetos, también incorpora características de otros estilos.

Entre los paradigmas soportados se encuentran:

* Programación orientada a objetos.
* Programación imperativa.
* Programación genérica.
* Programación funcional parcial.
* Programación declarativa mediante LINQ.
* Programación asincrónica.
* Programación orientada a eventos.
* Metaprogramación mediante atributos y reflection.

Esta combinación permite utilizar diferentes estilos según el problema. En backend, por ejemplo, es habitual combinar orientación a objetos para el dominio, programación funcional parcial para transformaciones, LINQ para consultas, asincronía para I/O y atributos para configuración declarativa.

---

## Evolución del Lenguaje

C# ha evolucionado progresivamente desde su primera versión. Cada versión agregó características orientadas a mejorar expresividad, seguridad, rendimiento o productividad.

Algunos hitos relevantes son:

```text
C# 1.0  - Clases, interfaces, delegates, exceptions, properties
C# 2.0  - Generics, nullable value types, iterators
C# 3.0  - LINQ, lambdas, extension methods, anonymous types
C# 4.0  - dynamic, named arguments, optional arguments
C# 5.0  - async/await
C# 6.0  - null propagation, expression-bodied members
C# 7.x  - tuples, pattern matching inicial, local functions
C# 8.0  - nullable reference types, async streams
C# 9.0  - records, init-only properties
C# 10   - global usings, file-scoped namespaces
C# 11   - required members, raw string literals
C# 12   - primary constructors, collection expressions
C# 13   - mejoras incrementales del lenguaje
```

La evolución de C# muestra una tendencia clara: mayor expresividad, mayor seguridad estática, mejor soporte para inmutabilidad, asincronía, patrones, rendimiento y reducción de código repetitivo.

---

## Importancia Profesional

Dominar los fundamentos de C# implica comprender más que la sintaxis básica. En un contexto profesional, especialmente en backend, C# debe entenderse en relación con:

* El sistema de tipos.
* El runtime de .NET.
* La administración de memoria.
* El modelo de excepciones.
* La asincronía.
* La interoperabilidad entre assemblies.
* La seguridad de nullability.
* La organización arquitectónica del código.
* El diseño de APIs mantenibles.
* La evolución del lenguaje.

Un uso profesional de C# requiere escribir código correcto, expresivo, mantenible y coherente con las reglas del runtime y del dominio de negocio.

---

## Referencias

* Microsoft Learn. C# documentation.
* Microsoft Learn. C# language reference.
* Microsoft Learn. C# language specification.
* Microsoft Learn. C# standard specification.
* ECMA International. ECMA-334 C# Language Specification.