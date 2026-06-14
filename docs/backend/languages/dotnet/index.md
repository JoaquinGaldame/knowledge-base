# .NET Backend

.NET es una plataforma de desarrollo utilizada para construir APIs, servicios backend, aplicaciones empresariales, microservicios, workers y sistemas distribuidos.

Esta sección documenta .NET desde una perspectiva profesional y arquitectónica, enfocada en backend moderno con C#, ASP.NET Core, Entity Framework Core, SQL Server, Clean Architecture, DDD, testing, seguridad, performance, observabilidad, Docker y despliegue en cloud.

El objetivo no es solamente conocer la sintaxis de C#, sino desarrollar criterio senior para diseñar, construir, mantener y evolucionar APIs backend reales en producción.

---

## C# Profesional

- [Fundamentos de C#](./csharp/fundamentals.md)
- [Sistema de Tipos de C#](./csharp/type-system.md)
- [Tipos por Valor y Referencia](./csharp/value-types-vs-reference-types.md)
- [Modelo de Memoria en C#](./csharp/memory-model.md)
- [Generics en C#](./csharp/generics.md)
- [Exceptions](./csharp/exceptions.md)
- [Delegates y Events en C#](./csharp/delegates-events.md)
- [boxing-unboxing](./csharp/boxing-unboxing.md)

---

## ASP.NET Core

- [Pipeline HTTP](./aspnet-core/http-pipeline.md)
- [Middleware](./aspnet-core/middleware.md)
- [Dependency Injection](./aspnet-core/dependency-injection.md)
- [Configuration](./aspnet-core/configuration.md)
- [Options Pattern](./aspnet-core/options-pattern.md)
- [Logging](./aspnet-core/logging.md)
- [Environments](./aspnet-core/environments.md)

---

## Web APIs

- [Controllers](./web-api/controllers.md)
- [DTOs](./web-api/dtos.md)
- [Model Binding](./web-api/model-binding.md)
- [Validation](./web-api/validation.md)
- [Error Handling](./web-api/error-handling.md)
- [Problem Details](./web-api/problem-details.md)
- [Versioning](./web-api/versioning.md)
- [OpenAPI / Swagger](./web-api/openapi-swagger.md)

---

## Minimal APIs

- [Introducción a Minimal APIs](./minimal-apis/introduction.md)
- [Route Handlers](./minimal-apis/route-handlers.md)
- [Route Groups](./minimal-apis/route-groups.md)
- [Endpoint Filters](./minimal-apis/endpoint-filters.md)
- [Typed Results](./minimal-apis/typed-results.md)
- [Validación en Minimal APIs](./minimal-apis/validation.md)

---

## Clean Architecture

- [Arquitectura por Capas](./clean-architecture/layers.md)
- [Domain Layer](./clean-architecture/domain-layer.md)
- [Application Layer](./clean-architecture/application-layer.md)
- [Infrastructure Layer](./clean-architecture/infrastructure-layer.md)
- [Persistence Layer](./clean-architecture/persistence-layer.md)
- [API Layer](./clean-architecture/api-layer.md)
- [Use Cases, Commands y Queries](./clean-architecture/use-cases.md)
- [Repositorios](./clean-architecture/repositories.md)

---

## Domain-Driven Design

- [Entities](./domain-driven-design/entities.md)
- [Value Objects](./domain-driven-design/value-objects.md)
- [Aggregates](./domain-driven-design/aggregates.md)
- [Domain Services](./domain-driven-design/domain-services.md)
- [Domain Events](./domain-driven-design/domain-events.md)
- [Invariants](./domain-driven-design/invariants.md)

---

## Entity Framework Core

- [DbContext](./entity-framework-core/dbcontext.md)
- [Entities Mapping](./entity-framework-core/entities-mapping.md)
- [Migrations](./entity-framework-core/migrations.md)
- [Relationships](./entity-framework-core/relationships.md)
- [Tracking vs No Tracking](./entity-framework-core/tracking.md)
- [Transactions](./entity-framework-core/transactions.md)
- [Concurrency](./entity-framework-core/concurrency.md)
- [Performance](./entity-framework-core/performance.md)

---

## Persistencia

- [SQL Server](./persistence/sql-server.md)
- [PostgreSQL](./persistence/postgresql.md)
- [MongoDB](./persistence/mongodb.md)
- [Repositories](./persistence/repositories.md)
- [Unit of Work](./persistence/unit-of-work.md)
- [Outbox Pattern](./persistence/outbox-pattern.md)

---

## Seguridad

- [Authentication](./authentication-authorization/authentication.md)
- [Authorization](./authentication-authorization/authorization.md)
- [JWT](./authentication-authorization/jwt.md)
- [Refresh Tokens](./authentication-authorization/refresh-tokens.md)
- [API Keys](./authentication-authorization/api-keys.md)
- [CORS](./security/cors.md)
- [Rate Limiting](./security/rate-limiting.md)
- [Secrets](./security/secrets.md)

---

## Testing

- [Unit Testing](./testing/unit-testing.md)
- [Integration Testing](./testing/integration-testing.md)
- [WebApplicationFactory](./testing/web-application-factory.md)
- [Testcontainers](./testing/testcontainers.md)
- [Mocking](./testing/mocking.md)
- [Testing Repositories](./testing/testing-repositories.md)
- [Testing APIs](./testing/testing-apis.md)

---

## Performance

- [Async Performance](./performance/async-performance.md)
- [Memory Management](./performance/memory-management.md)
- [Caching](./performance/caching.md)
- [Response Compression](./performance/response-compression.md)
- [Database Performance](./performance/database-performance.md)
- [BenchmarkDotNet](./performance/benchmarkdotnet.md)

---

## Observabilidad

- [Structured Logging](./observability/structured-logging.md)
- [Serilog](./observability/serilog.md)
- [OpenTelemetry](./observability/opentelemetry.md)
- [Metrics](./observability/metrics.md)
- [Tracing](./observability/tracing.md)
- [Health Checks](./observability/health-checks.md)

---

## Background Jobs y Workers

- [Worker Services](./background-jobs/worker-services.md)
- [Hosted Services](./background-jobs/hosted-services.md)
- [Hangfire](./background-jobs/hangfire.md)
- [Quartz.NET](./background-jobs/quartz.md)

---

## Messaging y Sistemas Distribuidos

- [RabbitMQ](./messaging/rabbitmq.md)
- [Kafka](./messaging/kafka.md)
- [Azure Service Bus](./messaging/azure-service-bus.md)
- [SQS](./messaging/sqs.md)
- [Idempotencia](./messaging/idempotency.md)
- [Retries](./messaging/retries.md)
- [Dead Letter Queues](./messaging/dead-letter-queues.md)

---

## Docker y Cloud

- [Dockerfile para .NET](./docker/dockerfile.md)
- [Docker Compose](./docker/docker-compose.md)
- [Variables de Entorno](./docker/environment-variables.md)
- [AWS ECS Fargate](./cloud-deployment/aws-ecs-fargate.md)
- [CI/CD](./cloud-deployment/ci-cd.md)
- [Deployments](./cloud-deployment/deployments.md)

---

## Legacy y Migraciones

- [.NET Framework](./legacy/dotnet-framework.md)
- [Migración de .NET Framework a .NET Moderno](./legacy/framework-to-modern-dotnet.md)
- [IIS](./legacy/iis.md)
- [Windows Services](./legacy/windows-services.md)

---

## Versiones de .NET

- [.NET 6](./versions/dotnet-6.md)
- [.NET 7](./versions/dotnet-7.md)
- [.NET 8](./versions/dotnet-8.md)
- [.NET 9](./versions/dotnet-9.md)
- [.NET 10](./versions/dotnet-10.md)

---

## Nivel Senior

- [Checklist Senior Backend .NET](./senior/checklist.md)
- [Preguntas de Entrevista](./senior/interview-questions.md)
- [System Design Backend](./senior/system-design.md)
- [Code Review Senior](./senior/code-review.md)
- [Errores Comunes en APIs .NET](./senior/common-mistakes.md)