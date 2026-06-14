# Delegates y Events en C#

## Introducción

Los delegates constituyen uno de los mecanismos fundamentales del sistema de tipos de C#. Permiten representar métodos como valores, almacenarlos en variables, pasarlos como argumentos, devolverlos desde métodos y combinarlos dinámicamente durante la ejecución.

Desde una perspectiva conceptual, los delegates introducen en C# la noción de funciones de primera clase (*first-class functions*), permitiendo tratar el comportamiento como un dato.

Sobre esta capacidad se construyen numerosas características modernas del ecosistema .NET:

* Eventos.
* Expresiones Lambda.
* LINQ.
* Task Parallel Library.
* Async/Await.
* Middleware Pipeline.
* Dependency Injection.
* Callbacks.
* Reactive Programming.

Aunque actualmente muchos desarrolladores utilizan expresiones lambda diariamente, pocos comprenden que detrás de ellas existe una infraestructura basada en delegates.

Comprender delegates y events resulta esencial para entender cómo funciona internamente gran parte del framework .NET moderno.

---

# Motivación

Considérese el siguiente método:

```csharp
public static int Add(int x, int y)
{
    return x + y;
}
```

Normalmente el método sólo puede ejecutarse mediante una llamada directa:

```csharp
int result = Add(10, 20);
```

Sin embargo, existen escenarios donde resulta útil:

* Almacenar un método en una variable.
* Seleccionar dinámicamente qué método ejecutar.
* Pasar comportamiento como parámetro.
* Registrar callbacks.
* Desacoplar componentes.

Para resolver este problema, C# introduce delegates.

---

# Definición Formal

La especificación de C# define un delegate como un tipo que representa referencias a métodos con una firma determinada.

Un delegate describe:

* Tipo de retorno.
* Número de parámetros.
* Tipo de parámetros.

Ejemplo:

```csharp
public delegate int Operation(int x, int y);
```

Esta definición establece un contrato:

```text
Métodos que reciben:
    int
    int

Y devuelven:
    int
```

Cualquier método compatible podrá asociarse a este delegate.

---

# Naturaleza de los Delegates

Aunque conceptualmente representan funciones, los delegates son tipos por referencia.

Internamente heredan de:

```csharp
System.MulticastDelegate
```

Jerarquía simplificada:

```text
System.Object
    │
    └── System.Delegate
            │
            └── System.MulticastDelegate
                    │
                    └── Delegate definido por el usuario
```

Por lo tanto:

```csharp
Operation operation;
```

es una referencia a un objeto administrado.

---

# Declaración de un Delegate

Ejemplo:

```csharp
public delegate int Calculator(
    int x,
    int y);
```

Esta declaración genera un nuevo tipo dentro del sistema.

Posteriormente puede utilizarse como cualquier otro tipo.

---

# Asociación de Métodos

Considérese:

```csharp
public static int Add(int x, int y)
{
    return x + y;
}
```

Asignación:

```csharp
Calculator calculator = Add;
```

Invocación:

```csharp
int result = calculator(10, 20);
```

Resultado:

```text
30
```

---

# Invocación Explícita

Todo delegate posee un método:

```csharp
Invoke()
```

Ejemplo:

```csharp
int result =
    calculator.Invoke(10, 20);
```

Esta forma es equivalente a:

```csharp
calculator(10, 20);
```

La segunda suele ser preferida por claridad.

---

# Referencias a Métodos

Cuando se escribe:

```csharp
Calculator calculator = Add;
```

no se está ejecutando el método.

Se está almacenando una referencia a dicho método.

Es equivalente conceptualmente a:

```text
calculator
      │
      ▼

Add()
```

La ejecución ocurre únicamente durante la invocación.

---

# Delegates como Parámetros

Uno de los usos más importantes consiste en pasar comportamiento.

Ejemplo:

```csharp
public static int Execute(
    int x,
    int y,
    Calculator operation)
{
    return operation(x, y);
}
```

Uso:

```csharp
int result =
    Execute(10, 20, Add);
```

El método se vuelve independiente de la operación concreta.

---

# Delegates como Valores de Retorno

También pueden devolverse desde métodos.

Ejemplo:

```csharp
public static Calculator GetOperation()
{
    return Add;
}
```

Uso:

```csharp
Calculator operation =
    GetOperation();
```

Este patrón es utilizado extensivamente en programación funcional y construcción dinámica de pipelines.

---

# Multicast Delegates

Una característica importante es que un delegate puede almacenar múltiples métodos.

Ejemplo:

```csharp
public delegate void Notification(
    string message);
```

```csharp
Notification notification =
    SendEmail;

notification += SendSms;
```

Representación:

```text
Notification
    │
    ├── SendEmail
    └── SendSms
```

Invocación:

```csharp
notification("Hello");
```

Ejecutará ambos métodos.

---

# Invocation List

Internamente un MulticastDelegate mantiene una lista de invocación.

Puede inspeccionarse mediante:

```csharp
GetInvocationList()
```

Ejemplo:

```csharp
Delegate[] delegates =
    notification.GetInvocationList();
```

---

# Delegates Genéricos

A partir de .NET 2.0 aparecieron delegates genéricos predefinidos.

Esto eliminó gran parte de la necesidad de definir delegates personalizados.

---

# Action

Representa métodos que no retornan valor.

Ejemplo:

```csharp
Action<string> action;
```

Equivale conceptualmente a:

```csharp
delegate void Action(string value);
```

Uso:

```csharp
Action<string> print =
    Console.WriteLine;
```

---

# Func

Representa métodos que retornan valor.

Ejemplo:

```csharp
Func<int, int, int>
```

Interpretación:

```text
Parámetro 1 -> int
Parámetro 2 -> int
Retorno     -> int
```

Uso:

```csharp
Func<int, int, int> add =
    (x, y) => x + y;
```

---

# Predicate

Representa funciones booleanas.

Definición conceptual:

```csharp
Predicate<T>
```

Equivalente a:

```csharp
bool Function(T value)
```

Ejemplo:

```csharp
Predicate<int> isEven =
    number => number % 2 == 0;
```

---

# Expresiones Lambda

Las expresiones lambda son una sintaxis compacta para crear delegates.

Ejemplo:

```csharp
(int x, int y) => x + y
```

Asignación:

```csharp
Func<int, int, int> add =
    (x, y) => x + y;
```

Internamente el compilador genera código compatible con delegates.

---

# Closures

Las lambdas pueden capturar variables externas.

Ejemplo:

```csharp
int factor = 10;

Func<int, int> multiply =
    x => x * factor;
```

La variable:

```csharp
factor
```

permanece disponible incluso después de finalizar el contexto original.

Este mecanismo se denomina:

```text
Closure
```

---

# Closures y Memoria

Cuando una lambda captura variables externas, el compilador genera una clase auxiliar.

Ejemplo conceptual:

```text
Display Class
     │
     ├── factor
     └── Lambda Method
```

Esto implica asignaciones adicionales y debe considerarse en escenarios de alto rendimiento.

---

# Expresiones Lambda y LINQ

LINQ se construye sobre delegates.

Ejemplo:

```csharp
customers.Where(
    customer => customer.IsActive);
```

La expresión:

```csharp
customer => customer.IsActive
```

es una lambda que genera un delegate.

Sin delegates, LINQ no existiría en su forma actual.

---

# Delegates y Programación Funcional

Los delegates permiten aplicar conceptos funcionales:

* Funciones de orden superior.
* Composición.
* Currying parcial.
* Pipelines.
* Transformaciones.

Ejemplo:

```csharp
Func<int, int> square =
    x => x * x;
```

El comportamiento puede tratarse como un dato.

---

# Delegates y Async/Await

Los delegates son ampliamente utilizados en APIs asincrónicas.

Ejemplo:

```csharp
Task.Run(() =>
{
    Process();
});
```

La lambda se convierte en un delegate.

Internamente:

```csharp
Action
```

---

# Expresiones de Árbol (Expression Trees)

Existe una variante especial:

```csharp
Expression<Func<T>>
```

Ejemplo:

```csharp
Expression<Func<Customer, bool>>
```

A diferencia de un delegate normal:

```csharp
Func<Customer, bool>
```

no representa código ejecutable.

Representa una estructura de datos que describe código.

Esto permite:

* Entity Framework Core.
* LINQ Providers.
* Generación dinámica de consultas.
* Motores de reglas.

---

# Events

Los eventos se construyen sobre delegates.

Representan un mecanismo controlado de publicación de notificaciones.

---

# Problema que Resuelven los Eventos

Considérese:

```csharp
public class Order
{
}
```

Cuando un pedido cambia de estado, múltiples componentes podrían necesitar reaccionar:

* Email.
* Auditoría.
* Logging.
* Notificaciones.

Sin eventos:

```text
Order
  ├── Email
  ├── Audit
  ├── Logging
  └── Notifications
```

El acoplamiento crece rápidamente.

---

# Declaración de un Evento

Ejemplo:

```csharp
public event EventHandler? Created;
```

Esto permite que consumidores se suscriban.

---

# Suscripción

```csharp
order.Created += HandleCreated;
```

Representación:

```text
Order
   │
   ▼

Created Event
   │
   ▼

HandleCreated
```

---

# Desuscripción

```csharp
order.Created -= HandleCreated;
```

La eliminación es importante para evitar referencias innecesarias y posibles memory leaks.

---

# EventHandler

El patrón estándar de .NET utiliza:

```csharp
EventHandler
```

o

```csharp
EventHandler<TEventArgs>
```

Ejemplo:

```csharp
public event EventHandler<OrderCreatedEventArgs>? Created;
```

---

# EventArgs

Los datos asociados al evento suelen encapsularse en un objeto derivado de:

```csharp
EventArgs
```

Ejemplo:

```csharp
public sealed class OrderCreatedEventArgs
    : EventArgs
{
    public Guid OrderId { get; }

    public OrderCreatedEventArgs(
        Guid orderId)
    {
        OrderId = orderId;
    }
}
```

---

# Publicación de Eventos

Ejemplo:

```csharp
Created?.Invoke(
    this,
    new OrderCreatedEventArgs(Id));
```

La invocación notifica a todos los suscriptores.

---

# Diferencia entre Delegate y Event

Un delegate:

```csharp
public Notification Notification;
```

permite:

* Invocar.
* Suscribir.
* Reemplazar.

Desde cualquier consumidor.

---

Un evento:

```csharp
public event Notification Notification;
```

permite:

* Suscribir.
* Desuscribir.

Pero únicamente el propietario puede invocarlo.

Esto proporciona encapsulamiento.

---

# Eventos y Arquitectura

Los eventos aparecen en múltiples niveles:

## UI Events

```text
Button Click
Mouse Move
Key Press
```

---

## Domain Events

```text
CustomerCreated
OrderPaid
ReservationConfirmed
```

---

## Integration Events

```text
OrderCreated
PaymentCompleted
InventoryLocked
```

Estos conceptos comparten la misma raíz técnica: delegates y eventos.

---

# Buenas Prácticas

## Utilizar EventHandler

Preferir:

```csharp
EventHandler<TEventArgs>
```

antes que delegates personalizados cuando sea posible.

---

## Desuscribir Eventos

Particularmente en aplicaciones de larga vida.

```csharp
event -= handler;
```

---

## Mantener Eventos Livianos

La publicación de eventos no debería contener lógica pesada.

---

## Evitar Acoplamiento Excesivo

Los eventos deben comunicar hechos ocurridos.

No deberían transformarse en mecanismos ocultos de flujo de negocio complejo.

---

# Implicancias Arquitectónicas

Delegates y events constituyen la base técnica de:

* LINQ.
* Middleware.
* ASP.NET Core.
* Entity Framework Core.
* Async/Await.
* Reactive Extensions.
* Domain Events.
* Integration Events.
* Dependency Injection.
* Programación Funcional en C#.

Comprender estos mecanismos permite entender cómo el lenguaje representa comportamiento como datos y cómo el ecosistema .NET construye modelos desacoplados de comunicación y composición.

---

# Referencias

* ECMA-334 C# Language Specification.
* Microsoft Learn — Delegates.
* Microsoft Learn — Multicast Delegates.
* Microsoft Learn — Events.
* Microsoft Learn — EventHandler Pattern.
* Microsoft Learn — Lambda Expressions.
* Microsoft Learn — Expression Trees.
* Richter, Jeffrey. CLR via C#.
* Skeet, Jon. C# in Depth.
* Albahari, Joseph. C# 12 in a Nutshell.