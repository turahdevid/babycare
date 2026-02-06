
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model VerificationToken
 * 
 */
export type VerificationToken = $Result.DefaultSelection<Prisma.$VerificationTokenPayload>
/**
 * Model Customer
 * 
 */
export type Customer = $Result.DefaultSelection<Prisma.$CustomerPayload>
/**
 * Model Baby
 * 
 */
export type Baby = $Result.DefaultSelection<Prisma.$BabyPayload>
/**
 * Model Treatment
 * 
 */
export type Treatment = $Result.DefaultSelection<Prisma.$TreatmentPayload>
/**
 * Model Reservation
 * 
 */
export type Reservation = $Result.DefaultSelection<Prisma.$ReservationPayload>
/**
 * Model ReservationTreatment
 * 
 */
export type ReservationTreatment = $Result.DefaultSelection<Prisma.$ReservationTreatmentPayload>
/**
 * Model ReservationAuditLog
 * 
 */
export type ReservationAuditLog = $Result.DefaultSelection<Prisma.$ReservationAuditLogPayload>
/**
 * Model Notification
 * 
 */
export type Notification = $Result.DefaultSelection<Prisma.$NotificationPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  ADMIN: 'ADMIN',
  MIDWIFE: 'MIDWIFE'
};

export type Role = (typeof Role)[keyof typeof Role]


export const BabyGender: {
  MALE: 'MALE',
  FEMALE: 'FEMALE'
};

export type BabyGender = (typeof BabyGender)[keyof typeof BabyGender]


export const ReservationStatus: {
  PENDING: 'PENDING',
  CONFIRMED: 'CONFIRMED',
  IN_PROGRESS: 'IN_PROGRESS',
  COMPLETED: 'COMPLETED',
  CANCELLED: 'CANCELLED',
  NO_SHOW: 'NO_SHOW'
};

export type ReservationStatus = (typeof ReservationStatus)[keyof typeof ReservationStatus]


export const ReservationChannel: {
  ADMIN: 'ADMIN',
  CUSTOMER: 'CUSTOMER'
};

export type ReservationChannel = (typeof ReservationChannel)[keyof typeof ReservationChannel]


export const ServiceType: {
  OUTLET: 'OUTLET',
  HOMECARE: 'HOMECARE'
};

export type ServiceType = (typeof ServiceType)[keyof typeof ServiceType]


export const ReservationAuditAction: {
  CREATE: 'CREATE',
  UPDATE_STATUS: 'UPDATE_STATUS',
  ASSIGN_MIDWIFE: 'ASSIGN_MIDWIFE',
  UPDATE_SCHEDULE: 'UPDATE_SCHEDULE',
  CANCEL: 'CANCEL',
  COMPLETE: 'COMPLETE'
};

export type ReservationAuditAction = (typeof ReservationAuditAction)[keyof typeof ReservationAuditAction]


export const NotificationType: {
  RESERVATION_CREATED: 'RESERVATION_CREATED',
  RESERVATION_STATUS_CHANGED: 'RESERVATION_STATUS_CHANGED',
  MIDWIFE_ASSIGNED: 'MIDWIFE_ASSIGNED'
};

export type NotificationType = (typeof NotificationType)[keyof typeof NotificationType]


export const NotificationStatus: {
  UNREAD: 'UNREAD',
  READ: 'READ',
  ARCHIVED: 'ARCHIVED'
};

export type NotificationStatus = (typeof NotificationStatus)[keyof typeof NotificationStatus]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type BabyGender = $Enums.BabyGender

export const BabyGender: typeof $Enums.BabyGender

export type ReservationStatus = $Enums.ReservationStatus

export const ReservationStatus: typeof $Enums.ReservationStatus

export type ReservationChannel = $Enums.ReservationChannel

export const ReservationChannel: typeof $Enums.ReservationChannel

export type ServiceType = $Enums.ServiceType

export const ServiceType: typeof $Enums.ServiceType

export type ReservationAuditAction = $Enums.ReservationAuditAction

export const ReservationAuditAction: typeof $Enums.ReservationAuditAction

export type NotificationType = $Enums.NotificationType

export const NotificationType: typeof $Enums.NotificationType

export type NotificationStatus = $Enums.NotificationStatus

export const NotificationStatus: typeof $Enums.NotificationStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Accounts
 * const accounts = await prisma.account.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Accounts
   * const accounts = await prisma.account.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.verificationToken`: Exposes CRUD operations for the **VerificationToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VerificationTokens
    * const verificationTokens = await prisma.verificationToken.findMany()
    * ```
    */
  get verificationToken(): Prisma.VerificationTokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.customer`: Exposes CRUD operations for the **Customer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Customers
    * const customers = await prisma.customer.findMany()
    * ```
    */
  get customer(): Prisma.CustomerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.baby`: Exposes CRUD operations for the **Baby** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Babies
    * const babies = await prisma.baby.findMany()
    * ```
    */
  get baby(): Prisma.BabyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.treatment`: Exposes CRUD operations for the **Treatment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Treatments
    * const treatments = await prisma.treatment.findMany()
    * ```
    */
  get treatment(): Prisma.TreatmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reservation`: Exposes CRUD operations for the **Reservation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reservations
    * const reservations = await prisma.reservation.findMany()
    * ```
    */
  get reservation(): Prisma.ReservationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reservationTreatment`: Exposes CRUD operations for the **ReservationTreatment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ReservationTreatments
    * const reservationTreatments = await prisma.reservationTreatment.findMany()
    * ```
    */
  get reservationTreatment(): Prisma.ReservationTreatmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reservationAuditLog`: Exposes CRUD operations for the **ReservationAuditLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ReservationAuditLogs
    * const reservationAuditLogs = await prisma.reservationAuditLog.findMany()
    * ```
    */
  get reservationAuditLog(): Prisma.ReservationAuditLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notification`: Exposes CRUD operations for the **Notification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifications
    * const notifications = await prisma.notification.findMany()
    * ```
    */
  get notification(): Prisma.NotificationDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.2
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Account: 'Account',
    Session: 'Session',
    User: 'User',
    VerificationToken: 'VerificationToken',
    Customer: 'Customer',
    Baby: 'Baby',
    Treatment: 'Treatment',
    Reservation: 'Reservation',
    ReservationTreatment: 'ReservationTreatment',
    ReservationAuditLog: 'ReservationAuditLog',
    Notification: 'Notification'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "account" | "session" | "user" | "verificationToken" | "customer" | "baby" | "treatment" | "reservation" | "reservationTreatment" | "reservationAuditLog" | "notification"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      VerificationToken: {
        payload: Prisma.$VerificationTokenPayload<ExtArgs>
        fields: Prisma.VerificationTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VerificationTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VerificationTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findFirst: {
            args: Prisma.VerificationTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VerificationTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findMany: {
            args: Prisma.VerificationTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          create: {
            args: Prisma.VerificationTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          createMany: {
            args: Prisma.VerificationTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.VerificationTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          update: {
            args: Prisma.VerificationTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          deleteMany: {
            args: Prisma.VerificationTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VerificationTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.VerificationTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          aggregate: {
            args: Prisma.VerificationTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVerificationToken>
          }
          groupBy: {
            args: Prisma.VerificationTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<VerificationTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.VerificationTokenCountArgs<ExtArgs>
            result: $Utils.Optional<VerificationTokenCountAggregateOutputType> | number
          }
        }
      }
      Customer: {
        payload: Prisma.$CustomerPayload<ExtArgs>
        fields: Prisma.CustomerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CustomerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CustomerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findFirst: {
            args: Prisma.CustomerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CustomerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findMany: {
            args: Prisma.CustomerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          create: {
            args: Prisma.CustomerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          createMany: {
            args: Prisma.CustomerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CustomerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          update: {
            args: Prisma.CustomerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          deleteMany: {
            args: Prisma.CustomerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CustomerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CustomerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          aggregate: {
            args: Prisma.CustomerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustomer>
          }
          groupBy: {
            args: Prisma.CustomerGroupByArgs<ExtArgs>
            result: $Utils.Optional<CustomerGroupByOutputType>[]
          }
          count: {
            args: Prisma.CustomerCountArgs<ExtArgs>
            result: $Utils.Optional<CustomerCountAggregateOutputType> | number
          }
        }
      }
      Baby: {
        payload: Prisma.$BabyPayload<ExtArgs>
        fields: Prisma.BabyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BabyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BabyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BabyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BabyPayload>
          }
          findFirst: {
            args: Prisma.BabyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BabyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BabyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BabyPayload>
          }
          findMany: {
            args: Prisma.BabyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BabyPayload>[]
          }
          create: {
            args: Prisma.BabyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BabyPayload>
          }
          createMany: {
            args: Prisma.BabyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.BabyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BabyPayload>
          }
          update: {
            args: Prisma.BabyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BabyPayload>
          }
          deleteMany: {
            args: Prisma.BabyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BabyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BabyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BabyPayload>
          }
          aggregate: {
            args: Prisma.BabyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBaby>
          }
          groupBy: {
            args: Prisma.BabyGroupByArgs<ExtArgs>
            result: $Utils.Optional<BabyGroupByOutputType>[]
          }
          count: {
            args: Prisma.BabyCountArgs<ExtArgs>
            result: $Utils.Optional<BabyCountAggregateOutputType> | number
          }
        }
      }
      Treatment: {
        payload: Prisma.$TreatmentPayload<ExtArgs>
        fields: Prisma.TreatmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TreatmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreatmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TreatmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreatmentPayload>
          }
          findFirst: {
            args: Prisma.TreatmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreatmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TreatmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreatmentPayload>
          }
          findMany: {
            args: Prisma.TreatmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreatmentPayload>[]
          }
          create: {
            args: Prisma.TreatmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreatmentPayload>
          }
          createMany: {
            args: Prisma.TreatmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TreatmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreatmentPayload>
          }
          update: {
            args: Prisma.TreatmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreatmentPayload>
          }
          deleteMany: {
            args: Prisma.TreatmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TreatmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TreatmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreatmentPayload>
          }
          aggregate: {
            args: Prisma.TreatmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTreatment>
          }
          groupBy: {
            args: Prisma.TreatmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<TreatmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.TreatmentCountArgs<ExtArgs>
            result: $Utils.Optional<TreatmentCountAggregateOutputType> | number
          }
        }
      }
      Reservation: {
        payload: Prisma.$ReservationPayload<ExtArgs>
        fields: Prisma.ReservationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReservationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReservationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>
          }
          findFirst: {
            args: Prisma.ReservationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReservationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>
          }
          findMany: {
            args: Prisma.ReservationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>[]
          }
          create: {
            args: Prisma.ReservationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>
          }
          createMany: {
            args: Prisma.ReservationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ReservationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>
          }
          update: {
            args: Prisma.ReservationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>
          }
          deleteMany: {
            args: Prisma.ReservationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReservationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ReservationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>
          }
          aggregate: {
            args: Prisma.ReservationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReservation>
          }
          groupBy: {
            args: Prisma.ReservationGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReservationGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReservationCountArgs<ExtArgs>
            result: $Utils.Optional<ReservationCountAggregateOutputType> | number
          }
        }
      }
      ReservationTreatment: {
        payload: Prisma.$ReservationTreatmentPayload<ExtArgs>
        fields: Prisma.ReservationTreatmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReservationTreatmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationTreatmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReservationTreatmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationTreatmentPayload>
          }
          findFirst: {
            args: Prisma.ReservationTreatmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationTreatmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReservationTreatmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationTreatmentPayload>
          }
          findMany: {
            args: Prisma.ReservationTreatmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationTreatmentPayload>[]
          }
          create: {
            args: Prisma.ReservationTreatmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationTreatmentPayload>
          }
          createMany: {
            args: Prisma.ReservationTreatmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ReservationTreatmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationTreatmentPayload>
          }
          update: {
            args: Prisma.ReservationTreatmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationTreatmentPayload>
          }
          deleteMany: {
            args: Prisma.ReservationTreatmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReservationTreatmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ReservationTreatmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationTreatmentPayload>
          }
          aggregate: {
            args: Prisma.ReservationTreatmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReservationTreatment>
          }
          groupBy: {
            args: Prisma.ReservationTreatmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReservationTreatmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReservationTreatmentCountArgs<ExtArgs>
            result: $Utils.Optional<ReservationTreatmentCountAggregateOutputType> | number
          }
        }
      }
      ReservationAuditLog: {
        payload: Prisma.$ReservationAuditLogPayload<ExtArgs>
        fields: Prisma.ReservationAuditLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReservationAuditLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationAuditLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReservationAuditLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationAuditLogPayload>
          }
          findFirst: {
            args: Prisma.ReservationAuditLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationAuditLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReservationAuditLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationAuditLogPayload>
          }
          findMany: {
            args: Prisma.ReservationAuditLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationAuditLogPayload>[]
          }
          create: {
            args: Prisma.ReservationAuditLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationAuditLogPayload>
          }
          createMany: {
            args: Prisma.ReservationAuditLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ReservationAuditLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationAuditLogPayload>
          }
          update: {
            args: Prisma.ReservationAuditLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationAuditLogPayload>
          }
          deleteMany: {
            args: Prisma.ReservationAuditLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReservationAuditLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ReservationAuditLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationAuditLogPayload>
          }
          aggregate: {
            args: Prisma.ReservationAuditLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReservationAuditLog>
          }
          groupBy: {
            args: Prisma.ReservationAuditLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReservationAuditLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReservationAuditLogCountArgs<ExtArgs>
            result: $Utils.Optional<ReservationAuditLogCountAggregateOutputType> | number
          }
        }
      }
      Notification: {
        payload: Prisma.$NotificationPayload<ExtArgs>
        fields: Prisma.NotificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findFirst: {
            args: Prisma.NotificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findMany: {
            args: Prisma.NotificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          create: {
            args: Prisma.NotificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          createMany: {
            args: Prisma.NotificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.NotificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          update: {
            args: Prisma.NotificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          deleteMany: {
            args: Prisma.NotificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.NotificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          aggregate: {
            args: Prisma.NotificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotification>
          }
          groupBy: {
            args: Prisma.NotificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificationCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    account?: AccountOmit
    session?: SessionOmit
    user?: UserOmit
    verificationToken?: VerificationTokenOmit
    customer?: CustomerOmit
    baby?: BabyOmit
    treatment?: TreatmentOmit
    reservation?: ReservationOmit
    reservationTreatment?: ReservationTreatmentOmit
    reservationAuditLog?: ReservationAuditLogOmit
    notification?: NotificationOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    accounts: number
    sessions: number
    midwifeReservations: number
    reservationAuditLogs: number
    notifications: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | UserCountOutputTypeCountAccountsArgs
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
    midwifeReservations?: boolean | UserCountOutputTypeCountMidwifeReservationsArgs
    reservationAuditLogs?: boolean | UserCountOutputTypeCountReservationAuditLogsArgs
    notifications?: boolean | UserCountOutputTypeCountNotificationsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMidwifeReservationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReservationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReservationAuditLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReservationAuditLogWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
  }


  /**
   * Count Type CustomerCountOutputType
   */

  export type CustomerCountOutputType = {
    babies: number
    reservations: number
  }

  export type CustomerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    babies?: boolean | CustomerCountOutputTypeCountBabiesArgs
    reservations?: boolean | CustomerCountOutputTypeCountReservationsArgs
  }

  // Custom InputTypes
  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerCountOutputType
     */
    select?: CustomerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeCountBabiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BabyWhereInput
  }

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeCountReservationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReservationWhereInput
  }


  /**
   * Count Type BabyCountOutputType
   */

  export type BabyCountOutputType = {
    reservations: number
  }

  export type BabyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reservations?: boolean | BabyCountOutputTypeCountReservationsArgs
  }

  // Custom InputTypes
  /**
   * BabyCountOutputType without action
   */
  export type BabyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BabyCountOutputType
     */
    select?: BabyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BabyCountOutputType without action
   */
  export type BabyCountOutputTypeCountReservationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReservationWhereInput
  }


  /**
   * Count Type TreatmentCountOutputType
   */

  export type TreatmentCountOutputType = {
    reservationItems: number
  }

  export type TreatmentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reservationItems?: boolean | TreatmentCountOutputTypeCountReservationItemsArgs
  }

  // Custom InputTypes
  /**
   * TreatmentCountOutputType without action
   */
  export type TreatmentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreatmentCountOutputType
     */
    select?: TreatmentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TreatmentCountOutputType without action
   */
  export type TreatmentCountOutputTypeCountReservationItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReservationTreatmentWhereInput
  }


  /**
   * Count Type ReservationCountOutputType
   */

  export type ReservationCountOutputType = {
    items: number
    auditLogs: number
    notifications: number
  }

  export type ReservationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | ReservationCountOutputTypeCountItemsArgs
    auditLogs?: boolean | ReservationCountOutputTypeCountAuditLogsArgs
    notifications?: boolean | ReservationCountOutputTypeCountNotificationsArgs
  }

  // Custom InputTypes
  /**
   * ReservationCountOutputType without action
   */
  export type ReservationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReservationCountOutputType
     */
    select?: ReservationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ReservationCountOutputType without action
   */
  export type ReservationCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReservationTreatmentWhereInput
  }

  /**
   * ReservationCountOutputType without action
   */
  export type ReservationCountOutputTypeCountAuditLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReservationAuditLogWhereInput
  }

  /**
   * ReservationCountOutputType without action
   */
  export type ReservationCountOutputTypeCountNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountAvgAggregateOutputType = {
    expires_at: number | null
    refresh_token_expires_in: number | null
  }

  export type AccountSumAggregateOutputType = {
    expires_at: number | null
    refresh_token_expires_in: number | null
  }

  export type AccountMinAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    refresh_token_expires_in: number | null
  }

  export type AccountMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    refresh_token_expires_in: number | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    provider: number
    providerAccountId: number
    refresh_token: number
    access_token: number
    expires_at: number
    token_type: number
    scope: number
    id_token: number
    session_state: number
    refresh_token_expires_in: number
    _all: number
  }


  export type AccountAvgAggregateInputType = {
    expires_at?: true
    refresh_token_expires_in?: true
  }

  export type AccountSumAggregateInputType = {
    expires_at?: true
    refresh_token_expires_in?: true
  }

  export type AccountMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    refresh_token_expires_in?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    refresh_token_expires_in?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    refresh_token_expires_in?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _avg?: AccountAvgAggregateInputType
    _sum?: AccountSumAggregateInputType
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    id: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    refresh_token_expires_in: number | null
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    refresh_token_expires_in?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>



  export type AccountSelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    refresh_token_expires_in?: boolean
  }

  export type AccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "type" | "provider" | "providerAccountId" | "refresh_token" | "access_token" | "expires_at" | "token_type" | "scope" | "id_token" | "session_state" | "refresh_token_expires_in", ExtArgs["result"]["account"]>
  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      type: string
      provider: string
      providerAccountId: string
      refresh_token: string | null
      access_token: string | null
      expires_at: number | null
      token_type: string | null
      scope: string | null
      id_token: string | null
      session_state: string | null
      refresh_token_expires_in: number | null
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountFindUniqueArgs>(args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountFindFirstArgs>(args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccountFindManyArgs>(args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
     */
    create<T extends AccountCreateArgs>(args: SelectSubset<T, AccountCreateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountCreateManyArgs>(args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
     */
    delete<T extends AccountDeleteArgs>(args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountUpdateArgs>(args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountDeleteManyArgs>(args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountUpdateManyArgs>(args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends AccountUpsertArgs>(args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Account model
   */
  interface AccountFieldRefs {
    readonly id: FieldRef<"Account", 'String'>
    readonly userId: FieldRef<"Account", 'String'>
    readonly type: FieldRef<"Account", 'String'>
    readonly provider: FieldRef<"Account", 'String'>
    readonly providerAccountId: FieldRef<"Account", 'String'>
    readonly refresh_token: FieldRef<"Account", 'String'>
    readonly access_token: FieldRef<"Account", 'String'>
    readonly expires_at: FieldRef<"Account", 'Int'>
    readonly token_type: FieldRef<"Account", 'String'>
    readonly scope: FieldRef<"Account", 'String'>
    readonly id_token: FieldRef<"Account", 'String'>
    readonly session_state: FieldRef<"Account", 'String'>
    readonly refresh_token_expires_in: FieldRef<"Account", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
  }

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }

  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to delete.
     */
    limit?: number
  }

  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    sessionToken: number
    userId: number
    expires: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    sessionToken: string
    userId: string
    expires: Date
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>



  export type SessionSelectScalar = {
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sessionToken" | "userId" | "expires", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sessionToken: string
      userId: string
      expires: Date
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly sessionToken: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'String'>
    readonly expires: FieldRef<"Session", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
    password: string | null
    role: $Enums.Role | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
    password: string | null
    role: $Enums.Role | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    emailVerified: number
    image: number
    password: number
    role: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    password?: true
    role?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    password?: true
    role?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    password?: true
    role?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
    password: string | null
    role: $Enums.Role
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    password?: boolean
    role?: boolean
    accounts?: boolean | User$accountsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    midwifeReservations?: boolean | User$midwifeReservationsArgs<ExtArgs>
    reservationAuditLogs?: boolean | User$reservationAuditLogsArgs<ExtArgs>
    notifications?: boolean | User$notificationsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    password?: boolean
    role?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "emailVerified" | "image" | "password" | "role", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | User$accountsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    midwifeReservations?: boolean | User$midwifeReservationsArgs<ExtArgs>
    reservationAuditLogs?: boolean | User$reservationAuditLogsArgs<ExtArgs>
    notifications?: boolean | User$notificationsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      accounts: Prisma.$AccountPayload<ExtArgs>[]
      sessions: Prisma.$SessionPayload<ExtArgs>[]
      midwifeReservations: Prisma.$ReservationPayload<ExtArgs>[]
      reservationAuditLogs: Prisma.$ReservationAuditLogPayload<ExtArgs>[]
      notifications: Prisma.$NotificationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      email: string | null
      emailVerified: Date | null
      image: string | null
      password: string | null
      role: $Enums.Role
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    accounts<T extends User$accountsArgs<ExtArgs> = {}>(args?: Subset<T, User$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    midwifeReservations<T extends User$midwifeReservationsArgs<ExtArgs> = {}>(args?: Subset<T, User$midwifeReservationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reservationAuditLogs<T extends User$reservationAuditLogsArgs<ExtArgs> = {}>(args?: Subset<T, User$reservationAuditLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservationAuditLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notifications<T extends User$notificationsArgs<ExtArgs> = {}>(args?: Subset<T, User$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly emailVerified: FieldRef<"User", 'DateTime'>
    readonly image: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data?: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.accounts
   */
  export type User$accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * User.midwifeReservations
   */
  export type User$midwifeReservationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    where?: ReservationWhereInput
    orderBy?: ReservationOrderByWithRelationInput | ReservationOrderByWithRelationInput[]
    cursor?: ReservationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReservationScalarFieldEnum | ReservationScalarFieldEnum[]
  }

  /**
   * User.reservationAuditLogs
   */
  export type User$reservationAuditLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReservationAuditLog
     */
    select?: ReservationAuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReservationAuditLog
     */
    omit?: ReservationAuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationAuditLogInclude<ExtArgs> | null
    where?: ReservationAuditLogWhereInput
    orderBy?: ReservationAuditLogOrderByWithRelationInput | ReservationAuditLogOrderByWithRelationInput[]
    cursor?: ReservationAuditLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReservationAuditLogScalarFieldEnum | ReservationAuditLogScalarFieldEnum[]
  }

  /**
   * User.notifications
   */
  export type User$notificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    cursor?: NotificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model VerificationToken
   */

  export type AggregateVerificationToken = {
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  export type VerificationTokenMinAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenMaxAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenCountAggregateOutputType = {
    identifier: number
    token: number
    expires: number
    _all: number
  }


  export type VerificationTokenMinAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenMaxAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenCountAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
    _all?: true
  }

  export type VerificationTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationToken to aggregate.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VerificationTokens
    **/
    _count?: true | VerificationTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type GetVerificationTokenAggregateType<T extends VerificationTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateVerificationToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerificationToken[P]>
      : GetScalarType<T[P], AggregateVerificationToken[P]>
  }




  export type VerificationTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationTokenWhereInput
    orderBy?: VerificationTokenOrderByWithAggregationInput | VerificationTokenOrderByWithAggregationInput[]
    by: VerificationTokenScalarFieldEnum[] | VerificationTokenScalarFieldEnum
    having?: VerificationTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationTokenCountAggregateInputType | true
    _min?: VerificationTokenMinAggregateInputType
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type VerificationTokenGroupByOutputType = {
    identifier: string
    token: string
    expires: Date
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  type GetVerificationTokenGroupByPayload<T extends VerificationTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerificationTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerificationTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
        }
      >
    >


  export type VerificationTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>



  export type VerificationTokenSelectScalar = {
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }

  export type VerificationTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"identifier" | "token" | "expires", ExtArgs["result"]["verificationToken"]>

  export type $VerificationTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VerificationToken"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      identifier: string
      token: string
      expires: Date
    }, ExtArgs["result"]["verificationToken"]>
    composites: {}
  }

  type VerificationTokenGetPayload<S extends boolean | null | undefined | VerificationTokenDefaultArgs> = $Result.GetResult<Prisma.$VerificationTokenPayload, S>

  type VerificationTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VerificationTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VerificationTokenCountAggregateInputType | true
    }

  export interface VerificationTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VerificationToken'], meta: { name: 'VerificationToken' } }
    /**
     * Find zero or one VerificationToken that matches the filter.
     * @param {VerificationTokenFindUniqueArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VerificationTokenFindUniqueArgs>(args: SelectSubset<T, VerificationTokenFindUniqueArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VerificationToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VerificationTokenFindUniqueOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VerificationTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, VerificationTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VerificationTokenFindFirstArgs>(args?: SelectSubset<T, VerificationTokenFindFirstArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VerificationTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, VerificationTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VerificationTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany()
     * 
     * // Get first 10 VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany({ take: 10 })
     * 
     * // Only select the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.findMany({ select: { identifier: true } })
     * 
     */
    findMany<T extends VerificationTokenFindManyArgs>(args?: SelectSubset<T, VerificationTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VerificationToken.
     * @param {VerificationTokenCreateArgs} args - Arguments to create a VerificationToken.
     * @example
     * // Create one VerificationToken
     * const VerificationToken = await prisma.verificationToken.create({
     *   data: {
     *     // ... data to create a VerificationToken
     *   }
     * })
     * 
     */
    create<T extends VerificationTokenCreateArgs>(args: SelectSubset<T, VerificationTokenCreateArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VerificationTokens.
     * @param {VerificationTokenCreateManyArgs} args - Arguments to create many VerificationTokens.
     * @example
     * // Create many VerificationTokens
     * const verificationToken = await prisma.verificationToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VerificationTokenCreateManyArgs>(args?: SelectSubset<T, VerificationTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a VerificationToken.
     * @param {VerificationTokenDeleteArgs} args - Arguments to delete one VerificationToken.
     * @example
     * // Delete one VerificationToken
     * const VerificationToken = await prisma.verificationToken.delete({
     *   where: {
     *     // ... filter to delete one VerificationToken
     *   }
     * })
     * 
     */
    delete<T extends VerificationTokenDeleteArgs>(args: SelectSubset<T, VerificationTokenDeleteArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VerificationToken.
     * @param {VerificationTokenUpdateArgs} args - Arguments to update one VerificationToken.
     * @example
     * // Update one VerificationToken
     * const verificationToken = await prisma.verificationToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VerificationTokenUpdateArgs>(args: SelectSubset<T, VerificationTokenUpdateArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VerificationTokens.
     * @param {VerificationTokenDeleteManyArgs} args - Arguments to filter VerificationTokens to delete.
     * @example
     * // Delete a few VerificationTokens
     * const { count } = await prisma.verificationToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VerificationTokenDeleteManyArgs>(args?: SelectSubset<T, VerificationTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VerificationTokens
     * const verificationToken = await prisma.verificationToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VerificationTokenUpdateManyArgs>(args: SelectSubset<T, VerificationTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one VerificationToken.
     * @param {VerificationTokenUpsertArgs} args - Arguments to update or create a VerificationToken.
     * @example
     * // Update or create a VerificationToken
     * const verificationToken = await prisma.verificationToken.upsert({
     *   create: {
     *     // ... data to create a VerificationToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VerificationToken we want to update
     *   }
     * })
     */
    upsert<T extends VerificationTokenUpsertArgs>(args: SelectSubset<T, VerificationTokenUpsertArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenCountArgs} args - Arguments to filter VerificationTokens to count.
     * @example
     * // Count the number of VerificationTokens
     * const count = await prisma.verificationToken.count({
     *   where: {
     *     // ... the filter for the VerificationTokens we want to count
     *   }
     * })
    **/
    count<T extends VerificationTokenCountArgs>(
      args?: Subset<T, VerificationTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VerificationTokenAggregateArgs>(args: Subset<T, VerificationTokenAggregateArgs>): Prisma.PrismaPromise<GetVerificationTokenAggregateType<T>>

    /**
     * Group by VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VerificationTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerificationTokenGroupByArgs['orderBy'] }
        : { orderBy?: VerificationTokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VerificationTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VerificationToken model
   */
  readonly fields: VerificationTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VerificationToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VerificationTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the VerificationToken model
   */
  interface VerificationTokenFieldRefs {
    readonly identifier: FieldRef<"VerificationToken", 'String'>
    readonly token: FieldRef<"VerificationToken", 'String'>
    readonly expires: FieldRef<"VerificationToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VerificationToken findUnique
   */
  export type VerificationTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken findUniqueOrThrow
   */
  export type VerificationTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken findFirst
   */
  export type VerificationTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken findFirstOrThrow
   */
  export type VerificationTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken findMany
   */
  export type VerificationTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationTokens to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken create
   */
  export type VerificationTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data needed to create a VerificationToken.
     */
    data: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
  }

  /**
   * VerificationToken createMany
   */
  export type VerificationTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VerificationTokens.
     */
    data: VerificationTokenCreateManyInput | VerificationTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VerificationToken update
   */
  export type VerificationTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data needed to update a VerificationToken.
     */
    data: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
    /**
     * Choose, which VerificationToken to update.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken updateMany
   */
  export type VerificationTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VerificationTokens.
     */
    data: XOR<VerificationTokenUpdateManyMutationInput, VerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which VerificationTokens to update
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to update.
     */
    limit?: number
  }

  /**
   * VerificationToken upsert
   */
  export type VerificationTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The filter to search for the VerificationToken to update in case it exists.
     */
    where: VerificationTokenWhereUniqueInput
    /**
     * In case the VerificationToken found by the `where` argument doesn't exist, create a new VerificationToken with this data.
     */
    create: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
    /**
     * In case the VerificationToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
  }

  /**
   * VerificationToken delete
   */
  export type VerificationTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter which VerificationToken to delete.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken deleteMany
   */
  export type VerificationTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationTokens to delete
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to delete.
     */
    limit?: number
  }

  /**
   * VerificationToken without action
   */
  export type VerificationTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
  }


  /**
   * Model Customer
   */

  export type AggregateCustomer = {
    _count: CustomerCountAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  export type CustomerMinAggregateOutputType = {
    id: string | null
    motherName: string | null
    motherPhone: string | null
    motherEmail: string | null
    address: string | null
    notes: string | null
    deletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CustomerMaxAggregateOutputType = {
    id: string | null
    motherName: string | null
    motherPhone: string | null
    motherEmail: string | null
    address: string | null
    notes: string | null
    deletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CustomerCountAggregateOutputType = {
    id: number
    motherName: number
    motherPhone: number
    motherEmail: number
    address: number
    notes: number
    deletedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CustomerMinAggregateInputType = {
    id?: true
    motherName?: true
    motherPhone?: true
    motherEmail?: true
    address?: true
    notes?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CustomerMaxAggregateInputType = {
    id?: true
    motherName?: true
    motherPhone?: true
    motherEmail?: true
    address?: true
    notes?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CustomerCountAggregateInputType = {
    id?: true
    motherName?: true
    motherPhone?: true
    motherEmail?: true
    address?: true
    notes?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CustomerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customer to aggregate.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Customers
    **/
    _count?: true | CustomerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomerMaxAggregateInputType
  }

  export type GetCustomerAggregateType<T extends CustomerAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomer[P]>
      : GetScalarType<T[P], AggregateCustomer[P]>
  }




  export type CustomerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerWhereInput
    orderBy?: CustomerOrderByWithAggregationInput | CustomerOrderByWithAggregationInput[]
    by: CustomerScalarFieldEnum[] | CustomerScalarFieldEnum
    having?: CustomerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomerCountAggregateInputType | true
    _min?: CustomerMinAggregateInputType
    _max?: CustomerMaxAggregateInputType
  }

  export type CustomerGroupByOutputType = {
    id: string
    motherName: string
    motherPhone: string
    motherEmail: string | null
    address: string | null
    notes: string | null
    deletedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: CustomerCountAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  type GetCustomerGroupByPayload<T extends CustomerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomerGroupByOutputType[P]>
            : GetScalarType<T[P], CustomerGroupByOutputType[P]>
        }
      >
    >


  export type CustomerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    motherName?: boolean
    motherPhone?: boolean
    motherEmail?: boolean
    address?: boolean
    notes?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    babies?: boolean | Customer$babiesArgs<ExtArgs>
    reservations?: boolean | Customer$reservationsArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customer"]>



  export type CustomerSelectScalar = {
    id?: boolean
    motherName?: boolean
    motherPhone?: boolean
    motherEmail?: boolean
    address?: boolean
    notes?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CustomerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "motherName" | "motherPhone" | "motherEmail" | "address" | "notes" | "deletedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["customer"]>
  export type CustomerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    babies?: boolean | Customer$babiesArgs<ExtArgs>
    reservations?: boolean | Customer$reservationsArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CustomerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Customer"
    objects: {
      babies: Prisma.$BabyPayload<ExtArgs>[]
      reservations: Prisma.$ReservationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      motherName: string
      motherPhone: string
      motherEmail: string | null
      address: string | null
      notes: string | null
      deletedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["customer"]>
    composites: {}
  }

  type CustomerGetPayload<S extends boolean | null | undefined | CustomerDefaultArgs> = $Result.GetResult<Prisma.$CustomerPayload, S>

  type CustomerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CustomerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CustomerCountAggregateInputType | true
    }

  export interface CustomerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Customer'], meta: { name: 'Customer' } }
    /**
     * Find zero or one Customer that matches the filter.
     * @param {CustomerFindUniqueArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CustomerFindUniqueArgs>(args: SelectSubset<T, CustomerFindUniqueArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Customer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CustomerFindUniqueOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CustomerFindUniqueOrThrowArgs>(args: SelectSubset<T, CustomerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CustomerFindFirstArgs>(args?: SelectSubset<T, CustomerFindFirstArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CustomerFindFirstOrThrowArgs>(args?: SelectSubset<T, CustomerFindFirstOrThrowArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Customers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Customers
     * const customers = await prisma.customer.findMany()
     * 
     * // Get first 10 Customers
     * const customers = await prisma.customer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const customerWithIdOnly = await prisma.customer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CustomerFindManyArgs>(args?: SelectSubset<T, CustomerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Customer.
     * @param {CustomerCreateArgs} args - Arguments to create a Customer.
     * @example
     * // Create one Customer
     * const Customer = await prisma.customer.create({
     *   data: {
     *     // ... data to create a Customer
     *   }
     * })
     * 
     */
    create<T extends CustomerCreateArgs>(args: SelectSubset<T, CustomerCreateArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Customers.
     * @param {CustomerCreateManyArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CustomerCreateManyArgs>(args?: SelectSubset<T, CustomerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Customer.
     * @param {CustomerDeleteArgs} args - Arguments to delete one Customer.
     * @example
     * // Delete one Customer
     * const Customer = await prisma.customer.delete({
     *   where: {
     *     // ... filter to delete one Customer
     *   }
     * })
     * 
     */
    delete<T extends CustomerDeleteArgs>(args: SelectSubset<T, CustomerDeleteArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Customer.
     * @param {CustomerUpdateArgs} args - Arguments to update one Customer.
     * @example
     * // Update one Customer
     * const customer = await prisma.customer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CustomerUpdateArgs>(args: SelectSubset<T, CustomerUpdateArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Customers.
     * @param {CustomerDeleteManyArgs} args - Arguments to filter Customers to delete.
     * @example
     * // Delete a few Customers
     * const { count } = await prisma.customer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CustomerDeleteManyArgs>(args?: SelectSubset<T, CustomerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CustomerUpdateManyArgs>(args: SelectSubset<T, CustomerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Customer.
     * @param {CustomerUpsertArgs} args - Arguments to update or create a Customer.
     * @example
     * // Update or create a Customer
     * const customer = await prisma.customer.upsert({
     *   create: {
     *     // ... data to create a Customer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Customer we want to update
     *   }
     * })
     */
    upsert<T extends CustomerUpsertArgs>(args: SelectSubset<T, CustomerUpsertArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerCountArgs} args - Arguments to filter Customers to count.
     * @example
     * // Count the number of Customers
     * const count = await prisma.customer.count({
     *   where: {
     *     // ... the filter for the Customers we want to count
     *   }
     * })
    **/
    count<T extends CustomerCountArgs>(
      args?: Subset<T, CustomerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CustomerAggregateArgs>(args: Subset<T, CustomerAggregateArgs>): Prisma.PrismaPromise<GetCustomerAggregateType<T>>

    /**
     * Group by Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CustomerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustomerGroupByArgs['orderBy'] }
        : { orderBy?: CustomerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CustomerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Customer model
   */
  readonly fields: CustomerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Customer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CustomerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    babies<T extends Customer$babiesArgs<ExtArgs> = {}>(args?: Subset<T, Customer$babiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BabyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reservations<T extends Customer$reservationsArgs<ExtArgs> = {}>(args?: Subset<T, Customer$reservationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Customer model
   */
  interface CustomerFieldRefs {
    readonly id: FieldRef<"Customer", 'String'>
    readonly motherName: FieldRef<"Customer", 'String'>
    readonly motherPhone: FieldRef<"Customer", 'String'>
    readonly motherEmail: FieldRef<"Customer", 'String'>
    readonly address: FieldRef<"Customer", 'String'>
    readonly notes: FieldRef<"Customer", 'String'>
    readonly deletedAt: FieldRef<"Customer", 'DateTime'>
    readonly createdAt: FieldRef<"Customer", 'DateTime'>
    readonly updatedAt: FieldRef<"Customer", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Customer findUnique
   */
  export type CustomerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findUniqueOrThrow
   */
  export type CustomerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findFirst
   */
  export type CustomerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer findFirstOrThrow
   */
  export type CustomerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer findMany
   */
  export type CustomerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customers to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer create
   */
  export type CustomerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to create a Customer.
     */
    data: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
  }

  /**
   * Customer createMany
   */
  export type CustomerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Customers.
     */
    data: CustomerCreateManyInput | CustomerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Customer update
   */
  export type CustomerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to update a Customer.
     */
    data: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
    /**
     * Choose, which Customer to update.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer updateMany
   */
  export type CustomerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Customers.
     */
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyInput>
    /**
     * Filter which Customers to update
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to update.
     */
    limit?: number
  }

  /**
   * Customer upsert
   */
  export type CustomerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The filter to search for the Customer to update in case it exists.
     */
    where: CustomerWhereUniqueInput
    /**
     * In case the Customer found by the `where` argument doesn't exist, create a new Customer with this data.
     */
    create: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
    /**
     * In case the Customer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
  }

  /**
   * Customer delete
   */
  export type CustomerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter which Customer to delete.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer deleteMany
   */
  export type CustomerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customers to delete
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to delete.
     */
    limit?: number
  }

  /**
   * Customer.babies
   */
  export type Customer$babiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Baby
     */
    select?: BabySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Baby
     */
    omit?: BabyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BabyInclude<ExtArgs> | null
    where?: BabyWhereInput
    orderBy?: BabyOrderByWithRelationInput | BabyOrderByWithRelationInput[]
    cursor?: BabyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BabyScalarFieldEnum | BabyScalarFieldEnum[]
  }

  /**
   * Customer.reservations
   */
  export type Customer$reservationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    where?: ReservationWhereInput
    orderBy?: ReservationOrderByWithRelationInput | ReservationOrderByWithRelationInput[]
    cursor?: ReservationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReservationScalarFieldEnum | ReservationScalarFieldEnum[]
  }

  /**
   * Customer without action
   */
  export type CustomerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
  }


  /**
   * Model Baby
   */

  export type AggregateBaby = {
    _count: BabyCountAggregateOutputType | null
    _min: BabyMinAggregateOutputType | null
    _max: BabyMaxAggregateOutputType | null
  }

  export type BabyMinAggregateOutputType = {
    id: string | null
    customerId: string | null
    name: string | null
    gender: $Enums.BabyGender | null
    birthDate: Date | null
    notes: string | null
    deletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BabyMaxAggregateOutputType = {
    id: string | null
    customerId: string | null
    name: string | null
    gender: $Enums.BabyGender | null
    birthDate: Date | null
    notes: string | null
    deletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BabyCountAggregateOutputType = {
    id: number
    customerId: number
    name: number
    gender: number
    birthDate: number
    notes: number
    deletedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BabyMinAggregateInputType = {
    id?: true
    customerId?: true
    name?: true
    gender?: true
    birthDate?: true
    notes?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BabyMaxAggregateInputType = {
    id?: true
    customerId?: true
    name?: true
    gender?: true
    birthDate?: true
    notes?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BabyCountAggregateInputType = {
    id?: true
    customerId?: true
    name?: true
    gender?: true
    birthDate?: true
    notes?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BabyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Baby to aggregate.
     */
    where?: BabyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Babies to fetch.
     */
    orderBy?: BabyOrderByWithRelationInput | BabyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BabyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Babies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Babies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Babies
    **/
    _count?: true | BabyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BabyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BabyMaxAggregateInputType
  }

  export type GetBabyAggregateType<T extends BabyAggregateArgs> = {
        [P in keyof T & keyof AggregateBaby]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBaby[P]>
      : GetScalarType<T[P], AggregateBaby[P]>
  }




  export type BabyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BabyWhereInput
    orderBy?: BabyOrderByWithAggregationInput | BabyOrderByWithAggregationInput[]
    by: BabyScalarFieldEnum[] | BabyScalarFieldEnum
    having?: BabyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BabyCountAggregateInputType | true
    _min?: BabyMinAggregateInputType
    _max?: BabyMaxAggregateInputType
  }

  export type BabyGroupByOutputType = {
    id: string
    customerId: string
    name: string
    gender: $Enums.BabyGender | null
    birthDate: Date | null
    notes: string | null
    deletedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: BabyCountAggregateOutputType | null
    _min: BabyMinAggregateOutputType | null
    _max: BabyMaxAggregateOutputType | null
  }

  type GetBabyGroupByPayload<T extends BabyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BabyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BabyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BabyGroupByOutputType[P]>
            : GetScalarType<T[P], BabyGroupByOutputType[P]>
        }
      >
    >


  export type BabySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerId?: boolean
    name?: boolean
    gender?: boolean
    birthDate?: boolean
    notes?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    reservations?: boolean | Baby$reservationsArgs<ExtArgs>
    _count?: boolean | BabyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["baby"]>



  export type BabySelectScalar = {
    id?: boolean
    customerId?: boolean
    name?: boolean
    gender?: boolean
    birthDate?: boolean
    notes?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BabyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "customerId" | "name" | "gender" | "birthDate" | "notes" | "deletedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["baby"]>
  export type BabyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    reservations?: boolean | Baby$reservationsArgs<ExtArgs>
    _count?: boolean | BabyCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $BabyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Baby"
    objects: {
      customer: Prisma.$CustomerPayload<ExtArgs>
      reservations: Prisma.$ReservationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      customerId: string
      name: string
      gender: $Enums.BabyGender | null
      birthDate: Date | null
      notes: string | null
      deletedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["baby"]>
    composites: {}
  }

  type BabyGetPayload<S extends boolean | null | undefined | BabyDefaultArgs> = $Result.GetResult<Prisma.$BabyPayload, S>

  type BabyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BabyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BabyCountAggregateInputType | true
    }

  export interface BabyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Baby'], meta: { name: 'Baby' } }
    /**
     * Find zero or one Baby that matches the filter.
     * @param {BabyFindUniqueArgs} args - Arguments to find a Baby
     * @example
     * // Get one Baby
     * const baby = await prisma.baby.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BabyFindUniqueArgs>(args: SelectSubset<T, BabyFindUniqueArgs<ExtArgs>>): Prisma__BabyClient<$Result.GetResult<Prisma.$BabyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Baby that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BabyFindUniqueOrThrowArgs} args - Arguments to find a Baby
     * @example
     * // Get one Baby
     * const baby = await prisma.baby.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BabyFindUniqueOrThrowArgs>(args: SelectSubset<T, BabyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BabyClient<$Result.GetResult<Prisma.$BabyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Baby that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BabyFindFirstArgs} args - Arguments to find a Baby
     * @example
     * // Get one Baby
     * const baby = await prisma.baby.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BabyFindFirstArgs>(args?: SelectSubset<T, BabyFindFirstArgs<ExtArgs>>): Prisma__BabyClient<$Result.GetResult<Prisma.$BabyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Baby that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BabyFindFirstOrThrowArgs} args - Arguments to find a Baby
     * @example
     * // Get one Baby
     * const baby = await prisma.baby.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BabyFindFirstOrThrowArgs>(args?: SelectSubset<T, BabyFindFirstOrThrowArgs<ExtArgs>>): Prisma__BabyClient<$Result.GetResult<Prisma.$BabyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Babies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BabyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Babies
     * const babies = await prisma.baby.findMany()
     * 
     * // Get first 10 Babies
     * const babies = await prisma.baby.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const babyWithIdOnly = await prisma.baby.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BabyFindManyArgs>(args?: SelectSubset<T, BabyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BabyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Baby.
     * @param {BabyCreateArgs} args - Arguments to create a Baby.
     * @example
     * // Create one Baby
     * const Baby = await prisma.baby.create({
     *   data: {
     *     // ... data to create a Baby
     *   }
     * })
     * 
     */
    create<T extends BabyCreateArgs>(args: SelectSubset<T, BabyCreateArgs<ExtArgs>>): Prisma__BabyClient<$Result.GetResult<Prisma.$BabyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Babies.
     * @param {BabyCreateManyArgs} args - Arguments to create many Babies.
     * @example
     * // Create many Babies
     * const baby = await prisma.baby.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BabyCreateManyArgs>(args?: SelectSubset<T, BabyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Baby.
     * @param {BabyDeleteArgs} args - Arguments to delete one Baby.
     * @example
     * // Delete one Baby
     * const Baby = await prisma.baby.delete({
     *   where: {
     *     // ... filter to delete one Baby
     *   }
     * })
     * 
     */
    delete<T extends BabyDeleteArgs>(args: SelectSubset<T, BabyDeleteArgs<ExtArgs>>): Prisma__BabyClient<$Result.GetResult<Prisma.$BabyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Baby.
     * @param {BabyUpdateArgs} args - Arguments to update one Baby.
     * @example
     * // Update one Baby
     * const baby = await prisma.baby.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BabyUpdateArgs>(args: SelectSubset<T, BabyUpdateArgs<ExtArgs>>): Prisma__BabyClient<$Result.GetResult<Prisma.$BabyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Babies.
     * @param {BabyDeleteManyArgs} args - Arguments to filter Babies to delete.
     * @example
     * // Delete a few Babies
     * const { count } = await prisma.baby.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BabyDeleteManyArgs>(args?: SelectSubset<T, BabyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Babies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BabyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Babies
     * const baby = await prisma.baby.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BabyUpdateManyArgs>(args: SelectSubset<T, BabyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Baby.
     * @param {BabyUpsertArgs} args - Arguments to update or create a Baby.
     * @example
     * // Update or create a Baby
     * const baby = await prisma.baby.upsert({
     *   create: {
     *     // ... data to create a Baby
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Baby we want to update
     *   }
     * })
     */
    upsert<T extends BabyUpsertArgs>(args: SelectSubset<T, BabyUpsertArgs<ExtArgs>>): Prisma__BabyClient<$Result.GetResult<Prisma.$BabyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Babies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BabyCountArgs} args - Arguments to filter Babies to count.
     * @example
     * // Count the number of Babies
     * const count = await prisma.baby.count({
     *   where: {
     *     // ... the filter for the Babies we want to count
     *   }
     * })
    **/
    count<T extends BabyCountArgs>(
      args?: Subset<T, BabyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BabyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Baby.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BabyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BabyAggregateArgs>(args: Subset<T, BabyAggregateArgs>): Prisma.PrismaPromise<GetBabyAggregateType<T>>

    /**
     * Group by Baby.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BabyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BabyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BabyGroupByArgs['orderBy'] }
        : { orderBy?: BabyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BabyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBabyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Baby model
   */
  readonly fields: BabyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Baby.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BabyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    customer<T extends CustomerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CustomerDefaultArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    reservations<T extends Baby$reservationsArgs<ExtArgs> = {}>(args?: Subset<T, Baby$reservationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Baby model
   */
  interface BabyFieldRefs {
    readonly id: FieldRef<"Baby", 'String'>
    readonly customerId: FieldRef<"Baby", 'String'>
    readonly name: FieldRef<"Baby", 'String'>
    readonly gender: FieldRef<"Baby", 'BabyGender'>
    readonly birthDate: FieldRef<"Baby", 'DateTime'>
    readonly notes: FieldRef<"Baby", 'String'>
    readonly deletedAt: FieldRef<"Baby", 'DateTime'>
    readonly createdAt: FieldRef<"Baby", 'DateTime'>
    readonly updatedAt: FieldRef<"Baby", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Baby findUnique
   */
  export type BabyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Baby
     */
    select?: BabySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Baby
     */
    omit?: BabyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BabyInclude<ExtArgs> | null
    /**
     * Filter, which Baby to fetch.
     */
    where: BabyWhereUniqueInput
  }

  /**
   * Baby findUniqueOrThrow
   */
  export type BabyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Baby
     */
    select?: BabySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Baby
     */
    omit?: BabyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BabyInclude<ExtArgs> | null
    /**
     * Filter, which Baby to fetch.
     */
    where: BabyWhereUniqueInput
  }

  /**
   * Baby findFirst
   */
  export type BabyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Baby
     */
    select?: BabySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Baby
     */
    omit?: BabyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BabyInclude<ExtArgs> | null
    /**
     * Filter, which Baby to fetch.
     */
    where?: BabyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Babies to fetch.
     */
    orderBy?: BabyOrderByWithRelationInput | BabyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Babies.
     */
    cursor?: BabyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Babies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Babies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Babies.
     */
    distinct?: BabyScalarFieldEnum | BabyScalarFieldEnum[]
  }

  /**
   * Baby findFirstOrThrow
   */
  export type BabyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Baby
     */
    select?: BabySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Baby
     */
    omit?: BabyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BabyInclude<ExtArgs> | null
    /**
     * Filter, which Baby to fetch.
     */
    where?: BabyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Babies to fetch.
     */
    orderBy?: BabyOrderByWithRelationInput | BabyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Babies.
     */
    cursor?: BabyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Babies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Babies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Babies.
     */
    distinct?: BabyScalarFieldEnum | BabyScalarFieldEnum[]
  }

  /**
   * Baby findMany
   */
  export type BabyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Baby
     */
    select?: BabySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Baby
     */
    omit?: BabyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BabyInclude<ExtArgs> | null
    /**
     * Filter, which Babies to fetch.
     */
    where?: BabyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Babies to fetch.
     */
    orderBy?: BabyOrderByWithRelationInput | BabyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Babies.
     */
    cursor?: BabyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Babies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Babies.
     */
    skip?: number
    distinct?: BabyScalarFieldEnum | BabyScalarFieldEnum[]
  }

  /**
   * Baby create
   */
  export type BabyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Baby
     */
    select?: BabySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Baby
     */
    omit?: BabyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BabyInclude<ExtArgs> | null
    /**
     * The data needed to create a Baby.
     */
    data: XOR<BabyCreateInput, BabyUncheckedCreateInput>
  }

  /**
   * Baby createMany
   */
  export type BabyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Babies.
     */
    data: BabyCreateManyInput | BabyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Baby update
   */
  export type BabyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Baby
     */
    select?: BabySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Baby
     */
    omit?: BabyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BabyInclude<ExtArgs> | null
    /**
     * The data needed to update a Baby.
     */
    data: XOR<BabyUpdateInput, BabyUncheckedUpdateInput>
    /**
     * Choose, which Baby to update.
     */
    where: BabyWhereUniqueInput
  }

  /**
   * Baby updateMany
   */
  export type BabyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Babies.
     */
    data: XOR<BabyUpdateManyMutationInput, BabyUncheckedUpdateManyInput>
    /**
     * Filter which Babies to update
     */
    where?: BabyWhereInput
    /**
     * Limit how many Babies to update.
     */
    limit?: number
  }

  /**
   * Baby upsert
   */
  export type BabyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Baby
     */
    select?: BabySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Baby
     */
    omit?: BabyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BabyInclude<ExtArgs> | null
    /**
     * The filter to search for the Baby to update in case it exists.
     */
    where: BabyWhereUniqueInput
    /**
     * In case the Baby found by the `where` argument doesn't exist, create a new Baby with this data.
     */
    create: XOR<BabyCreateInput, BabyUncheckedCreateInput>
    /**
     * In case the Baby was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BabyUpdateInput, BabyUncheckedUpdateInput>
  }

  /**
   * Baby delete
   */
  export type BabyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Baby
     */
    select?: BabySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Baby
     */
    omit?: BabyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BabyInclude<ExtArgs> | null
    /**
     * Filter which Baby to delete.
     */
    where: BabyWhereUniqueInput
  }

  /**
   * Baby deleteMany
   */
  export type BabyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Babies to delete
     */
    where?: BabyWhereInput
    /**
     * Limit how many Babies to delete.
     */
    limit?: number
  }

  /**
   * Baby.reservations
   */
  export type Baby$reservationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    where?: ReservationWhereInput
    orderBy?: ReservationOrderByWithRelationInput | ReservationOrderByWithRelationInput[]
    cursor?: ReservationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReservationScalarFieldEnum | ReservationScalarFieldEnum[]
  }

  /**
   * Baby without action
   */
  export type BabyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Baby
     */
    select?: BabySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Baby
     */
    omit?: BabyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BabyInclude<ExtArgs> | null
  }


  /**
   * Model Treatment
   */

  export type AggregateTreatment = {
    _count: TreatmentCountAggregateOutputType | null
    _avg: TreatmentAvgAggregateOutputType | null
    _sum: TreatmentSumAggregateOutputType | null
    _min: TreatmentMinAggregateOutputType | null
    _max: TreatmentMaxAggregateOutputType | null
  }

  export type TreatmentAvgAggregateOutputType = {
    durationMinutes: number | null
    basePrice: Decimal | null
  }

  export type TreatmentSumAggregateOutputType = {
    durationMinutes: number | null
    basePrice: Decimal | null
  }

  export type TreatmentMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    durationMinutes: number | null
    basePrice: Decimal | null
    isActive: boolean | null
    deletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TreatmentMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    durationMinutes: number | null
    basePrice: Decimal | null
    isActive: boolean | null
    deletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TreatmentCountAggregateOutputType = {
    id: number
    name: number
    description: number
    durationMinutes: number
    basePrice: number
    isActive: number
    deletedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TreatmentAvgAggregateInputType = {
    durationMinutes?: true
    basePrice?: true
  }

  export type TreatmentSumAggregateInputType = {
    durationMinutes?: true
    basePrice?: true
  }

  export type TreatmentMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    durationMinutes?: true
    basePrice?: true
    isActive?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TreatmentMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    durationMinutes?: true
    basePrice?: true
    isActive?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TreatmentCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    durationMinutes?: true
    basePrice?: true
    isActive?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TreatmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Treatment to aggregate.
     */
    where?: TreatmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Treatments to fetch.
     */
    orderBy?: TreatmentOrderByWithRelationInput | TreatmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TreatmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Treatments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Treatments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Treatments
    **/
    _count?: true | TreatmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TreatmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TreatmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TreatmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TreatmentMaxAggregateInputType
  }

  export type GetTreatmentAggregateType<T extends TreatmentAggregateArgs> = {
        [P in keyof T & keyof AggregateTreatment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTreatment[P]>
      : GetScalarType<T[P], AggregateTreatment[P]>
  }




  export type TreatmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TreatmentWhereInput
    orderBy?: TreatmentOrderByWithAggregationInput | TreatmentOrderByWithAggregationInput[]
    by: TreatmentScalarFieldEnum[] | TreatmentScalarFieldEnum
    having?: TreatmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TreatmentCountAggregateInputType | true
    _avg?: TreatmentAvgAggregateInputType
    _sum?: TreatmentSumAggregateInputType
    _min?: TreatmentMinAggregateInputType
    _max?: TreatmentMaxAggregateInputType
  }

  export type TreatmentGroupByOutputType = {
    id: string
    name: string
    description: string | null
    durationMinutes: number
    basePrice: Decimal
    isActive: boolean
    deletedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: TreatmentCountAggregateOutputType | null
    _avg: TreatmentAvgAggregateOutputType | null
    _sum: TreatmentSumAggregateOutputType | null
    _min: TreatmentMinAggregateOutputType | null
    _max: TreatmentMaxAggregateOutputType | null
  }

  type GetTreatmentGroupByPayload<T extends TreatmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TreatmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TreatmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TreatmentGroupByOutputType[P]>
            : GetScalarType<T[P], TreatmentGroupByOutputType[P]>
        }
      >
    >


  export type TreatmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    durationMinutes?: boolean
    basePrice?: boolean
    isActive?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    reservationItems?: boolean | Treatment$reservationItemsArgs<ExtArgs>
    _count?: boolean | TreatmentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["treatment"]>



  export type TreatmentSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    durationMinutes?: boolean
    basePrice?: boolean
    isActive?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TreatmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "durationMinutes" | "basePrice" | "isActive" | "deletedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["treatment"]>
  export type TreatmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reservationItems?: boolean | Treatment$reservationItemsArgs<ExtArgs>
    _count?: boolean | TreatmentCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $TreatmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Treatment"
    objects: {
      reservationItems: Prisma.$ReservationTreatmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      durationMinutes: number
      basePrice: Prisma.Decimal
      isActive: boolean
      deletedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["treatment"]>
    composites: {}
  }

  type TreatmentGetPayload<S extends boolean | null | undefined | TreatmentDefaultArgs> = $Result.GetResult<Prisma.$TreatmentPayload, S>

  type TreatmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TreatmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TreatmentCountAggregateInputType | true
    }

  export interface TreatmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Treatment'], meta: { name: 'Treatment' } }
    /**
     * Find zero or one Treatment that matches the filter.
     * @param {TreatmentFindUniqueArgs} args - Arguments to find a Treatment
     * @example
     * // Get one Treatment
     * const treatment = await prisma.treatment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TreatmentFindUniqueArgs>(args: SelectSubset<T, TreatmentFindUniqueArgs<ExtArgs>>): Prisma__TreatmentClient<$Result.GetResult<Prisma.$TreatmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Treatment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TreatmentFindUniqueOrThrowArgs} args - Arguments to find a Treatment
     * @example
     * // Get one Treatment
     * const treatment = await prisma.treatment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TreatmentFindUniqueOrThrowArgs>(args: SelectSubset<T, TreatmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TreatmentClient<$Result.GetResult<Prisma.$TreatmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Treatment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TreatmentFindFirstArgs} args - Arguments to find a Treatment
     * @example
     * // Get one Treatment
     * const treatment = await prisma.treatment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TreatmentFindFirstArgs>(args?: SelectSubset<T, TreatmentFindFirstArgs<ExtArgs>>): Prisma__TreatmentClient<$Result.GetResult<Prisma.$TreatmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Treatment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TreatmentFindFirstOrThrowArgs} args - Arguments to find a Treatment
     * @example
     * // Get one Treatment
     * const treatment = await prisma.treatment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TreatmentFindFirstOrThrowArgs>(args?: SelectSubset<T, TreatmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__TreatmentClient<$Result.GetResult<Prisma.$TreatmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Treatments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TreatmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Treatments
     * const treatments = await prisma.treatment.findMany()
     * 
     * // Get first 10 Treatments
     * const treatments = await prisma.treatment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const treatmentWithIdOnly = await prisma.treatment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TreatmentFindManyArgs>(args?: SelectSubset<T, TreatmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TreatmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Treatment.
     * @param {TreatmentCreateArgs} args - Arguments to create a Treatment.
     * @example
     * // Create one Treatment
     * const Treatment = await prisma.treatment.create({
     *   data: {
     *     // ... data to create a Treatment
     *   }
     * })
     * 
     */
    create<T extends TreatmentCreateArgs>(args: SelectSubset<T, TreatmentCreateArgs<ExtArgs>>): Prisma__TreatmentClient<$Result.GetResult<Prisma.$TreatmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Treatments.
     * @param {TreatmentCreateManyArgs} args - Arguments to create many Treatments.
     * @example
     * // Create many Treatments
     * const treatment = await prisma.treatment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TreatmentCreateManyArgs>(args?: SelectSubset<T, TreatmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Treatment.
     * @param {TreatmentDeleteArgs} args - Arguments to delete one Treatment.
     * @example
     * // Delete one Treatment
     * const Treatment = await prisma.treatment.delete({
     *   where: {
     *     // ... filter to delete one Treatment
     *   }
     * })
     * 
     */
    delete<T extends TreatmentDeleteArgs>(args: SelectSubset<T, TreatmentDeleteArgs<ExtArgs>>): Prisma__TreatmentClient<$Result.GetResult<Prisma.$TreatmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Treatment.
     * @param {TreatmentUpdateArgs} args - Arguments to update one Treatment.
     * @example
     * // Update one Treatment
     * const treatment = await prisma.treatment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TreatmentUpdateArgs>(args: SelectSubset<T, TreatmentUpdateArgs<ExtArgs>>): Prisma__TreatmentClient<$Result.GetResult<Prisma.$TreatmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Treatments.
     * @param {TreatmentDeleteManyArgs} args - Arguments to filter Treatments to delete.
     * @example
     * // Delete a few Treatments
     * const { count } = await prisma.treatment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TreatmentDeleteManyArgs>(args?: SelectSubset<T, TreatmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Treatments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TreatmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Treatments
     * const treatment = await prisma.treatment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TreatmentUpdateManyArgs>(args: SelectSubset<T, TreatmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Treatment.
     * @param {TreatmentUpsertArgs} args - Arguments to update or create a Treatment.
     * @example
     * // Update or create a Treatment
     * const treatment = await prisma.treatment.upsert({
     *   create: {
     *     // ... data to create a Treatment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Treatment we want to update
     *   }
     * })
     */
    upsert<T extends TreatmentUpsertArgs>(args: SelectSubset<T, TreatmentUpsertArgs<ExtArgs>>): Prisma__TreatmentClient<$Result.GetResult<Prisma.$TreatmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Treatments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TreatmentCountArgs} args - Arguments to filter Treatments to count.
     * @example
     * // Count the number of Treatments
     * const count = await prisma.treatment.count({
     *   where: {
     *     // ... the filter for the Treatments we want to count
     *   }
     * })
    **/
    count<T extends TreatmentCountArgs>(
      args?: Subset<T, TreatmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TreatmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Treatment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TreatmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TreatmentAggregateArgs>(args: Subset<T, TreatmentAggregateArgs>): Prisma.PrismaPromise<GetTreatmentAggregateType<T>>

    /**
     * Group by Treatment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TreatmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TreatmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TreatmentGroupByArgs['orderBy'] }
        : { orderBy?: TreatmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TreatmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTreatmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Treatment model
   */
  readonly fields: TreatmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Treatment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TreatmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    reservationItems<T extends Treatment$reservationItemsArgs<ExtArgs> = {}>(args?: Subset<T, Treatment$reservationItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservationTreatmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Treatment model
   */
  interface TreatmentFieldRefs {
    readonly id: FieldRef<"Treatment", 'String'>
    readonly name: FieldRef<"Treatment", 'String'>
    readonly description: FieldRef<"Treatment", 'String'>
    readonly durationMinutes: FieldRef<"Treatment", 'Int'>
    readonly basePrice: FieldRef<"Treatment", 'Decimal'>
    readonly isActive: FieldRef<"Treatment", 'Boolean'>
    readonly deletedAt: FieldRef<"Treatment", 'DateTime'>
    readonly createdAt: FieldRef<"Treatment", 'DateTime'>
    readonly updatedAt: FieldRef<"Treatment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Treatment findUnique
   */
  export type TreatmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Treatment
     */
    select?: TreatmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Treatment
     */
    omit?: TreatmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreatmentInclude<ExtArgs> | null
    /**
     * Filter, which Treatment to fetch.
     */
    where: TreatmentWhereUniqueInput
  }

  /**
   * Treatment findUniqueOrThrow
   */
  export type TreatmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Treatment
     */
    select?: TreatmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Treatment
     */
    omit?: TreatmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreatmentInclude<ExtArgs> | null
    /**
     * Filter, which Treatment to fetch.
     */
    where: TreatmentWhereUniqueInput
  }

  /**
   * Treatment findFirst
   */
  export type TreatmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Treatment
     */
    select?: TreatmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Treatment
     */
    omit?: TreatmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreatmentInclude<ExtArgs> | null
    /**
     * Filter, which Treatment to fetch.
     */
    where?: TreatmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Treatments to fetch.
     */
    orderBy?: TreatmentOrderByWithRelationInput | TreatmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Treatments.
     */
    cursor?: TreatmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Treatments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Treatments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Treatments.
     */
    distinct?: TreatmentScalarFieldEnum | TreatmentScalarFieldEnum[]
  }

  /**
   * Treatment findFirstOrThrow
   */
  export type TreatmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Treatment
     */
    select?: TreatmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Treatment
     */
    omit?: TreatmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreatmentInclude<ExtArgs> | null
    /**
     * Filter, which Treatment to fetch.
     */
    where?: TreatmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Treatments to fetch.
     */
    orderBy?: TreatmentOrderByWithRelationInput | TreatmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Treatments.
     */
    cursor?: TreatmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Treatments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Treatments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Treatments.
     */
    distinct?: TreatmentScalarFieldEnum | TreatmentScalarFieldEnum[]
  }

  /**
   * Treatment findMany
   */
  export type TreatmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Treatment
     */
    select?: TreatmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Treatment
     */
    omit?: TreatmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreatmentInclude<ExtArgs> | null
    /**
     * Filter, which Treatments to fetch.
     */
    where?: TreatmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Treatments to fetch.
     */
    orderBy?: TreatmentOrderByWithRelationInput | TreatmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Treatments.
     */
    cursor?: TreatmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Treatments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Treatments.
     */
    skip?: number
    distinct?: TreatmentScalarFieldEnum | TreatmentScalarFieldEnum[]
  }

  /**
   * Treatment create
   */
  export type TreatmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Treatment
     */
    select?: TreatmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Treatment
     */
    omit?: TreatmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreatmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Treatment.
     */
    data: XOR<TreatmentCreateInput, TreatmentUncheckedCreateInput>
  }

  /**
   * Treatment createMany
   */
  export type TreatmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Treatments.
     */
    data: TreatmentCreateManyInput | TreatmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Treatment update
   */
  export type TreatmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Treatment
     */
    select?: TreatmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Treatment
     */
    omit?: TreatmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreatmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Treatment.
     */
    data: XOR<TreatmentUpdateInput, TreatmentUncheckedUpdateInput>
    /**
     * Choose, which Treatment to update.
     */
    where: TreatmentWhereUniqueInput
  }

  /**
   * Treatment updateMany
   */
  export type TreatmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Treatments.
     */
    data: XOR<TreatmentUpdateManyMutationInput, TreatmentUncheckedUpdateManyInput>
    /**
     * Filter which Treatments to update
     */
    where?: TreatmentWhereInput
    /**
     * Limit how many Treatments to update.
     */
    limit?: number
  }

  /**
   * Treatment upsert
   */
  export type TreatmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Treatment
     */
    select?: TreatmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Treatment
     */
    omit?: TreatmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreatmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Treatment to update in case it exists.
     */
    where: TreatmentWhereUniqueInput
    /**
     * In case the Treatment found by the `where` argument doesn't exist, create a new Treatment with this data.
     */
    create: XOR<TreatmentCreateInput, TreatmentUncheckedCreateInput>
    /**
     * In case the Treatment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TreatmentUpdateInput, TreatmentUncheckedUpdateInput>
  }

  /**
   * Treatment delete
   */
  export type TreatmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Treatment
     */
    select?: TreatmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Treatment
     */
    omit?: TreatmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreatmentInclude<ExtArgs> | null
    /**
     * Filter which Treatment to delete.
     */
    where: TreatmentWhereUniqueInput
  }

  /**
   * Treatment deleteMany
   */
  export type TreatmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Treatments to delete
     */
    where?: TreatmentWhereInput
    /**
     * Limit how many Treatments to delete.
     */
    limit?: number
  }

  /**
   * Treatment.reservationItems
   */
  export type Treatment$reservationItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReservationTreatment
     */
    select?: ReservationTreatmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReservationTreatment
     */
    omit?: ReservationTreatmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationTreatmentInclude<ExtArgs> | null
    where?: ReservationTreatmentWhereInput
    orderBy?: ReservationTreatmentOrderByWithRelationInput | ReservationTreatmentOrderByWithRelationInput[]
    cursor?: ReservationTreatmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReservationTreatmentScalarFieldEnum | ReservationTreatmentScalarFieldEnum[]
  }

  /**
   * Treatment without action
   */
  export type TreatmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Treatment
     */
    select?: TreatmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Treatment
     */
    omit?: TreatmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreatmentInclude<ExtArgs> | null
  }


  /**
   * Model Reservation
   */

  export type AggregateReservation = {
    _count: ReservationCountAggregateOutputType | null
    _min: ReservationMinAggregateOutputType | null
    _max: ReservationMaxAggregateOutputType | null
  }

  export type ReservationMinAggregateOutputType = {
    id: string | null
    customerId: string | null
    babyId: string | null
    midwifeId: string | null
    startAt: Date | null
    endAt: Date | null
    status: $Enums.ReservationStatus | null
    channel: $Enums.ReservationChannel | null
    serviceType: $Enums.ServiceType | null
    notes: string | null
    cancelledAt: Date | null
    completedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReservationMaxAggregateOutputType = {
    id: string | null
    customerId: string | null
    babyId: string | null
    midwifeId: string | null
    startAt: Date | null
    endAt: Date | null
    status: $Enums.ReservationStatus | null
    channel: $Enums.ReservationChannel | null
    serviceType: $Enums.ServiceType | null
    notes: string | null
    cancelledAt: Date | null
    completedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReservationCountAggregateOutputType = {
    id: number
    customerId: number
    babyId: number
    midwifeId: number
    startAt: number
    endAt: number
    status: number
    channel: number
    serviceType: number
    notes: number
    cancelledAt: number
    completedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ReservationMinAggregateInputType = {
    id?: true
    customerId?: true
    babyId?: true
    midwifeId?: true
    startAt?: true
    endAt?: true
    status?: true
    channel?: true
    serviceType?: true
    notes?: true
    cancelledAt?: true
    completedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReservationMaxAggregateInputType = {
    id?: true
    customerId?: true
    babyId?: true
    midwifeId?: true
    startAt?: true
    endAt?: true
    status?: true
    channel?: true
    serviceType?: true
    notes?: true
    cancelledAt?: true
    completedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReservationCountAggregateInputType = {
    id?: true
    customerId?: true
    babyId?: true
    midwifeId?: true
    startAt?: true
    endAt?: true
    status?: true
    channel?: true
    serviceType?: true
    notes?: true
    cancelledAt?: true
    completedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ReservationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reservation to aggregate.
     */
    where?: ReservationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reservations to fetch.
     */
    orderBy?: ReservationOrderByWithRelationInput | ReservationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReservationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reservations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reservations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reservations
    **/
    _count?: true | ReservationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReservationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReservationMaxAggregateInputType
  }

  export type GetReservationAggregateType<T extends ReservationAggregateArgs> = {
        [P in keyof T & keyof AggregateReservation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReservation[P]>
      : GetScalarType<T[P], AggregateReservation[P]>
  }




  export type ReservationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReservationWhereInput
    orderBy?: ReservationOrderByWithAggregationInput | ReservationOrderByWithAggregationInput[]
    by: ReservationScalarFieldEnum[] | ReservationScalarFieldEnum
    having?: ReservationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReservationCountAggregateInputType | true
    _min?: ReservationMinAggregateInputType
    _max?: ReservationMaxAggregateInputType
  }

  export type ReservationGroupByOutputType = {
    id: string
    customerId: string
    babyId: string | null
    midwifeId: string | null
    startAt: Date
    endAt: Date
    status: $Enums.ReservationStatus
    channel: $Enums.ReservationChannel
    serviceType: $Enums.ServiceType
    notes: string | null
    cancelledAt: Date | null
    completedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: ReservationCountAggregateOutputType | null
    _min: ReservationMinAggregateOutputType | null
    _max: ReservationMaxAggregateOutputType | null
  }

  type GetReservationGroupByPayload<T extends ReservationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReservationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReservationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReservationGroupByOutputType[P]>
            : GetScalarType<T[P], ReservationGroupByOutputType[P]>
        }
      >
    >


  export type ReservationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerId?: boolean
    babyId?: boolean
    midwifeId?: boolean
    startAt?: boolean
    endAt?: boolean
    status?: boolean
    channel?: boolean
    serviceType?: boolean
    notes?: boolean
    cancelledAt?: boolean
    completedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    baby?: boolean | Reservation$babyArgs<ExtArgs>
    midwife?: boolean | Reservation$midwifeArgs<ExtArgs>
    items?: boolean | Reservation$itemsArgs<ExtArgs>
    auditLogs?: boolean | Reservation$auditLogsArgs<ExtArgs>
    notifications?: boolean | Reservation$notificationsArgs<ExtArgs>
    _count?: boolean | ReservationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reservation"]>



  export type ReservationSelectScalar = {
    id?: boolean
    customerId?: boolean
    babyId?: boolean
    midwifeId?: boolean
    startAt?: boolean
    endAt?: boolean
    status?: boolean
    channel?: boolean
    serviceType?: boolean
    notes?: boolean
    cancelledAt?: boolean
    completedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ReservationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "customerId" | "babyId" | "midwifeId" | "startAt" | "endAt" | "status" | "channel" | "serviceType" | "notes" | "cancelledAt" | "completedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["reservation"]>
  export type ReservationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    baby?: boolean | Reservation$babyArgs<ExtArgs>
    midwife?: boolean | Reservation$midwifeArgs<ExtArgs>
    items?: boolean | Reservation$itemsArgs<ExtArgs>
    auditLogs?: boolean | Reservation$auditLogsArgs<ExtArgs>
    notifications?: boolean | Reservation$notificationsArgs<ExtArgs>
    _count?: boolean | ReservationCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ReservationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Reservation"
    objects: {
      customer: Prisma.$CustomerPayload<ExtArgs>
      baby: Prisma.$BabyPayload<ExtArgs> | null
      midwife: Prisma.$UserPayload<ExtArgs> | null
      items: Prisma.$ReservationTreatmentPayload<ExtArgs>[]
      auditLogs: Prisma.$ReservationAuditLogPayload<ExtArgs>[]
      notifications: Prisma.$NotificationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      customerId: string
      babyId: string | null
      midwifeId: string | null
      startAt: Date
      endAt: Date
      status: $Enums.ReservationStatus
      channel: $Enums.ReservationChannel
      serviceType: $Enums.ServiceType
      notes: string | null
      cancelledAt: Date | null
      completedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["reservation"]>
    composites: {}
  }

  type ReservationGetPayload<S extends boolean | null | undefined | ReservationDefaultArgs> = $Result.GetResult<Prisma.$ReservationPayload, S>

  type ReservationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReservationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReservationCountAggregateInputType | true
    }

  export interface ReservationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Reservation'], meta: { name: 'Reservation' } }
    /**
     * Find zero or one Reservation that matches the filter.
     * @param {ReservationFindUniqueArgs} args - Arguments to find a Reservation
     * @example
     * // Get one Reservation
     * const reservation = await prisma.reservation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReservationFindUniqueArgs>(args: SelectSubset<T, ReservationFindUniqueArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Reservation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReservationFindUniqueOrThrowArgs} args - Arguments to find a Reservation
     * @example
     * // Get one Reservation
     * const reservation = await prisma.reservation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReservationFindUniqueOrThrowArgs>(args: SelectSubset<T, ReservationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reservation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationFindFirstArgs} args - Arguments to find a Reservation
     * @example
     * // Get one Reservation
     * const reservation = await prisma.reservation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReservationFindFirstArgs>(args?: SelectSubset<T, ReservationFindFirstArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reservation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationFindFirstOrThrowArgs} args - Arguments to find a Reservation
     * @example
     * // Get one Reservation
     * const reservation = await prisma.reservation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReservationFindFirstOrThrowArgs>(args?: SelectSubset<T, ReservationFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reservations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reservations
     * const reservations = await prisma.reservation.findMany()
     * 
     * // Get first 10 Reservations
     * const reservations = await prisma.reservation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reservationWithIdOnly = await prisma.reservation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReservationFindManyArgs>(args?: SelectSubset<T, ReservationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Reservation.
     * @param {ReservationCreateArgs} args - Arguments to create a Reservation.
     * @example
     * // Create one Reservation
     * const Reservation = await prisma.reservation.create({
     *   data: {
     *     // ... data to create a Reservation
     *   }
     * })
     * 
     */
    create<T extends ReservationCreateArgs>(args: SelectSubset<T, ReservationCreateArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reservations.
     * @param {ReservationCreateManyArgs} args - Arguments to create many Reservations.
     * @example
     * // Create many Reservations
     * const reservation = await prisma.reservation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReservationCreateManyArgs>(args?: SelectSubset<T, ReservationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Reservation.
     * @param {ReservationDeleteArgs} args - Arguments to delete one Reservation.
     * @example
     * // Delete one Reservation
     * const Reservation = await prisma.reservation.delete({
     *   where: {
     *     // ... filter to delete one Reservation
     *   }
     * })
     * 
     */
    delete<T extends ReservationDeleteArgs>(args: SelectSubset<T, ReservationDeleteArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Reservation.
     * @param {ReservationUpdateArgs} args - Arguments to update one Reservation.
     * @example
     * // Update one Reservation
     * const reservation = await prisma.reservation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReservationUpdateArgs>(args: SelectSubset<T, ReservationUpdateArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reservations.
     * @param {ReservationDeleteManyArgs} args - Arguments to filter Reservations to delete.
     * @example
     * // Delete a few Reservations
     * const { count } = await prisma.reservation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReservationDeleteManyArgs>(args?: SelectSubset<T, ReservationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reservations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reservations
     * const reservation = await prisma.reservation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReservationUpdateManyArgs>(args: SelectSubset<T, ReservationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Reservation.
     * @param {ReservationUpsertArgs} args - Arguments to update or create a Reservation.
     * @example
     * // Update or create a Reservation
     * const reservation = await prisma.reservation.upsert({
     *   create: {
     *     // ... data to create a Reservation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reservation we want to update
     *   }
     * })
     */
    upsert<T extends ReservationUpsertArgs>(args: SelectSubset<T, ReservationUpsertArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reservations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationCountArgs} args - Arguments to filter Reservations to count.
     * @example
     * // Count the number of Reservations
     * const count = await prisma.reservation.count({
     *   where: {
     *     // ... the filter for the Reservations we want to count
     *   }
     * })
    **/
    count<T extends ReservationCountArgs>(
      args?: Subset<T, ReservationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReservationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reservation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReservationAggregateArgs>(args: Subset<T, ReservationAggregateArgs>): Prisma.PrismaPromise<GetReservationAggregateType<T>>

    /**
     * Group by Reservation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReservationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReservationGroupByArgs['orderBy'] }
        : { orderBy?: ReservationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReservationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReservationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Reservation model
   */
  readonly fields: ReservationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Reservation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReservationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    customer<T extends CustomerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CustomerDefaultArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    baby<T extends Reservation$babyArgs<ExtArgs> = {}>(args?: Subset<T, Reservation$babyArgs<ExtArgs>>): Prisma__BabyClient<$Result.GetResult<Prisma.$BabyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    midwife<T extends Reservation$midwifeArgs<ExtArgs> = {}>(args?: Subset<T, Reservation$midwifeArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    items<T extends Reservation$itemsArgs<ExtArgs> = {}>(args?: Subset<T, Reservation$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservationTreatmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    auditLogs<T extends Reservation$auditLogsArgs<ExtArgs> = {}>(args?: Subset<T, Reservation$auditLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservationAuditLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notifications<T extends Reservation$notificationsArgs<ExtArgs> = {}>(args?: Subset<T, Reservation$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Reservation model
   */
  interface ReservationFieldRefs {
    readonly id: FieldRef<"Reservation", 'String'>
    readonly customerId: FieldRef<"Reservation", 'String'>
    readonly babyId: FieldRef<"Reservation", 'String'>
    readonly midwifeId: FieldRef<"Reservation", 'String'>
    readonly startAt: FieldRef<"Reservation", 'DateTime'>
    readonly endAt: FieldRef<"Reservation", 'DateTime'>
    readonly status: FieldRef<"Reservation", 'ReservationStatus'>
    readonly channel: FieldRef<"Reservation", 'ReservationChannel'>
    readonly serviceType: FieldRef<"Reservation", 'ServiceType'>
    readonly notes: FieldRef<"Reservation", 'String'>
    readonly cancelledAt: FieldRef<"Reservation", 'DateTime'>
    readonly completedAt: FieldRef<"Reservation", 'DateTime'>
    readonly createdAt: FieldRef<"Reservation", 'DateTime'>
    readonly updatedAt: FieldRef<"Reservation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Reservation findUnique
   */
  export type ReservationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * Filter, which Reservation to fetch.
     */
    where: ReservationWhereUniqueInput
  }

  /**
   * Reservation findUniqueOrThrow
   */
  export type ReservationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * Filter, which Reservation to fetch.
     */
    where: ReservationWhereUniqueInput
  }

  /**
   * Reservation findFirst
   */
  export type ReservationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * Filter, which Reservation to fetch.
     */
    where?: ReservationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reservations to fetch.
     */
    orderBy?: ReservationOrderByWithRelationInput | ReservationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reservations.
     */
    cursor?: ReservationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reservations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reservations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reservations.
     */
    distinct?: ReservationScalarFieldEnum | ReservationScalarFieldEnum[]
  }

  /**
   * Reservation findFirstOrThrow
   */
  export type ReservationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * Filter, which Reservation to fetch.
     */
    where?: ReservationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reservations to fetch.
     */
    orderBy?: ReservationOrderByWithRelationInput | ReservationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reservations.
     */
    cursor?: ReservationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reservations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reservations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reservations.
     */
    distinct?: ReservationScalarFieldEnum | ReservationScalarFieldEnum[]
  }

  /**
   * Reservation findMany
   */
  export type ReservationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * Filter, which Reservations to fetch.
     */
    where?: ReservationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reservations to fetch.
     */
    orderBy?: ReservationOrderByWithRelationInput | ReservationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reservations.
     */
    cursor?: ReservationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reservations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reservations.
     */
    skip?: number
    distinct?: ReservationScalarFieldEnum | ReservationScalarFieldEnum[]
  }

  /**
   * Reservation create
   */
  export type ReservationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * The data needed to create a Reservation.
     */
    data: XOR<ReservationCreateInput, ReservationUncheckedCreateInput>
  }

  /**
   * Reservation createMany
   */
  export type ReservationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reservations.
     */
    data: ReservationCreateManyInput | ReservationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Reservation update
   */
  export type ReservationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * The data needed to update a Reservation.
     */
    data: XOR<ReservationUpdateInput, ReservationUncheckedUpdateInput>
    /**
     * Choose, which Reservation to update.
     */
    where: ReservationWhereUniqueInput
  }

  /**
   * Reservation updateMany
   */
  export type ReservationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reservations.
     */
    data: XOR<ReservationUpdateManyMutationInput, ReservationUncheckedUpdateManyInput>
    /**
     * Filter which Reservations to update
     */
    where?: ReservationWhereInput
    /**
     * Limit how many Reservations to update.
     */
    limit?: number
  }

  /**
   * Reservation upsert
   */
  export type ReservationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * The filter to search for the Reservation to update in case it exists.
     */
    where: ReservationWhereUniqueInput
    /**
     * In case the Reservation found by the `where` argument doesn't exist, create a new Reservation with this data.
     */
    create: XOR<ReservationCreateInput, ReservationUncheckedCreateInput>
    /**
     * In case the Reservation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReservationUpdateInput, ReservationUncheckedUpdateInput>
  }

  /**
   * Reservation delete
   */
  export type ReservationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * Filter which Reservation to delete.
     */
    where: ReservationWhereUniqueInput
  }

  /**
   * Reservation deleteMany
   */
  export type ReservationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reservations to delete
     */
    where?: ReservationWhereInput
    /**
     * Limit how many Reservations to delete.
     */
    limit?: number
  }

  /**
   * Reservation.baby
   */
  export type Reservation$babyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Baby
     */
    select?: BabySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Baby
     */
    omit?: BabyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BabyInclude<ExtArgs> | null
    where?: BabyWhereInput
  }

  /**
   * Reservation.midwife
   */
  export type Reservation$midwifeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Reservation.items
   */
  export type Reservation$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReservationTreatment
     */
    select?: ReservationTreatmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReservationTreatment
     */
    omit?: ReservationTreatmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationTreatmentInclude<ExtArgs> | null
    where?: ReservationTreatmentWhereInput
    orderBy?: ReservationTreatmentOrderByWithRelationInput | ReservationTreatmentOrderByWithRelationInput[]
    cursor?: ReservationTreatmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReservationTreatmentScalarFieldEnum | ReservationTreatmentScalarFieldEnum[]
  }

  /**
   * Reservation.auditLogs
   */
  export type Reservation$auditLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReservationAuditLog
     */
    select?: ReservationAuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReservationAuditLog
     */
    omit?: ReservationAuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationAuditLogInclude<ExtArgs> | null
    where?: ReservationAuditLogWhereInput
    orderBy?: ReservationAuditLogOrderByWithRelationInput | ReservationAuditLogOrderByWithRelationInput[]
    cursor?: ReservationAuditLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReservationAuditLogScalarFieldEnum | ReservationAuditLogScalarFieldEnum[]
  }

  /**
   * Reservation.notifications
   */
  export type Reservation$notificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    cursor?: NotificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Reservation without action
   */
  export type ReservationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
  }


  /**
   * Model ReservationTreatment
   */

  export type AggregateReservationTreatment = {
    _count: ReservationTreatmentCountAggregateOutputType | null
    _avg: ReservationTreatmentAvgAggregateOutputType | null
    _sum: ReservationTreatmentSumAggregateOutputType | null
    _min: ReservationTreatmentMinAggregateOutputType | null
    _max: ReservationTreatmentMaxAggregateOutputType | null
  }

  export type ReservationTreatmentAvgAggregateOutputType = {
    quantity: number | null
    unitPrice: Decimal | null
    durationMinutes: number | null
  }

  export type ReservationTreatmentSumAggregateOutputType = {
    quantity: number | null
    unitPrice: Decimal | null
    durationMinutes: number | null
  }

  export type ReservationTreatmentMinAggregateOutputType = {
    id: string | null
    reservationId: string | null
    treatmentId: string | null
    quantity: number | null
    unitPrice: Decimal | null
    durationMinutes: number | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReservationTreatmentMaxAggregateOutputType = {
    id: string | null
    reservationId: string | null
    treatmentId: string | null
    quantity: number | null
    unitPrice: Decimal | null
    durationMinutes: number | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReservationTreatmentCountAggregateOutputType = {
    id: number
    reservationId: number
    treatmentId: number
    quantity: number
    unitPrice: number
    durationMinutes: number
    notes: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ReservationTreatmentAvgAggregateInputType = {
    quantity?: true
    unitPrice?: true
    durationMinutes?: true
  }

  export type ReservationTreatmentSumAggregateInputType = {
    quantity?: true
    unitPrice?: true
    durationMinutes?: true
  }

  export type ReservationTreatmentMinAggregateInputType = {
    id?: true
    reservationId?: true
    treatmentId?: true
    quantity?: true
    unitPrice?: true
    durationMinutes?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReservationTreatmentMaxAggregateInputType = {
    id?: true
    reservationId?: true
    treatmentId?: true
    quantity?: true
    unitPrice?: true
    durationMinutes?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReservationTreatmentCountAggregateInputType = {
    id?: true
    reservationId?: true
    treatmentId?: true
    quantity?: true
    unitPrice?: true
    durationMinutes?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ReservationTreatmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReservationTreatment to aggregate.
     */
    where?: ReservationTreatmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReservationTreatments to fetch.
     */
    orderBy?: ReservationTreatmentOrderByWithRelationInput | ReservationTreatmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReservationTreatmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReservationTreatments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReservationTreatments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ReservationTreatments
    **/
    _count?: true | ReservationTreatmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReservationTreatmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReservationTreatmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReservationTreatmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReservationTreatmentMaxAggregateInputType
  }

  export type GetReservationTreatmentAggregateType<T extends ReservationTreatmentAggregateArgs> = {
        [P in keyof T & keyof AggregateReservationTreatment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReservationTreatment[P]>
      : GetScalarType<T[P], AggregateReservationTreatment[P]>
  }




  export type ReservationTreatmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReservationTreatmentWhereInput
    orderBy?: ReservationTreatmentOrderByWithAggregationInput | ReservationTreatmentOrderByWithAggregationInput[]
    by: ReservationTreatmentScalarFieldEnum[] | ReservationTreatmentScalarFieldEnum
    having?: ReservationTreatmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReservationTreatmentCountAggregateInputType | true
    _avg?: ReservationTreatmentAvgAggregateInputType
    _sum?: ReservationTreatmentSumAggregateInputType
    _min?: ReservationTreatmentMinAggregateInputType
    _max?: ReservationTreatmentMaxAggregateInputType
  }

  export type ReservationTreatmentGroupByOutputType = {
    id: string
    reservationId: string
    treatmentId: string
    quantity: number
    unitPrice: Decimal
    durationMinutes: number
    notes: string | null
    createdAt: Date
    updatedAt: Date
    _count: ReservationTreatmentCountAggregateOutputType | null
    _avg: ReservationTreatmentAvgAggregateOutputType | null
    _sum: ReservationTreatmentSumAggregateOutputType | null
    _min: ReservationTreatmentMinAggregateOutputType | null
    _max: ReservationTreatmentMaxAggregateOutputType | null
  }

  type GetReservationTreatmentGroupByPayload<T extends ReservationTreatmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReservationTreatmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReservationTreatmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReservationTreatmentGroupByOutputType[P]>
            : GetScalarType<T[P], ReservationTreatmentGroupByOutputType[P]>
        }
      >
    >


  export type ReservationTreatmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reservationId?: boolean
    treatmentId?: boolean
    quantity?: boolean
    unitPrice?: boolean
    durationMinutes?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    reservation?: boolean | ReservationDefaultArgs<ExtArgs>
    treatment?: boolean | TreatmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reservationTreatment"]>



  export type ReservationTreatmentSelectScalar = {
    id?: boolean
    reservationId?: boolean
    treatmentId?: boolean
    quantity?: boolean
    unitPrice?: boolean
    durationMinutes?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ReservationTreatmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "reservationId" | "treatmentId" | "quantity" | "unitPrice" | "durationMinutes" | "notes" | "createdAt" | "updatedAt", ExtArgs["result"]["reservationTreatment"]>
  export type ReservationTreatmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reservation?: boolean | ReservationDefaultArgs<ExtArgs>
    treatment?: boolean | TreatmentDefaultArgs<ExtArgs>
  }

  export type $ReservationTreatmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ReservationTreatment"
    objects: {
      reservation: Prisma.$ReservationPayload<ExtArgs>
      treatment: Prisma.$TreatmentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      reservationId: string
      treatmentId: string
      quantity: number
      unitPrice: Prisma.Decimal
      durationMinutes: number
      notes: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["reservationTreatment"]>
    composites: {}
  }

  type ReservationTreatmentGetPayload<S extends boolean | null | undefined | ReservationTreatmentDefaultArgs> = $Result.GetResult<Prisma.$ReservationTreatmentPayload, S>

  type ReservationTreatmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReservationTreatmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReservationTreatmentCountAggregateInputType | true
    }

  export interface ReservationTreatmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ReservationTreatment'], meta: { name: 'ReservationTreatment' } }
    /**
     * Find zero or one ReservationTreatment that matches the filter.
     * @param {ReservationTreatmentFindUniqueArgs} args - Arguments to find a ReservationTreatment
     * @example
     * // Get one ReservationTreatment
     * const reservationTreatment = await prisma.reservationTreatment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReservationTreatmentFindUniqueArgs>(args: SelectSubset<T, ReservationTreatmentFindUniqueArgs<ExtArgs>>): Prisma__ReservationTreatmentClient<$Result.GetResult<Prisma.$ReservationTreatmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ReservationTreatment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReservationTreatmentFindUniqueOrThrowArgs} args - Arguments to find a ReservationTreatment
     * @example
     * // Get one ReservationTreatment
     * const reservationTreatment = await prisma.reservationTreatment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReservationTreatmentFindUniqueOrThrowArgs>(args: SelectSubset<T, ReservationTreatmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReservationTreatmentClient<$Result.GetResult<Prisma.$ReservationTreatmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReservationTreatment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationTreatmentFindFirstArgs} args - Arguments to find a ReservationTreatment
     * @example
     * // Get one ReservationTreatment
     * const reservationTreatment = await prisma.reservationTreatment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReservationTreatmentFindFirstArgs>(args?: SelectSubset<T, ReservationTreatmentFindFirstArgs<ExtArgs>>): Prisma__ReservationTreatmentClient<$Result.GetResult<Prisma.$ReservationTreatmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReservationTreatment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationTreatmentFindFirstOrThrowArgs} args - Arguments to find a ReservationTreatment
     * @example
     * // Get one ReservationTreatment
     * const reservationTreatment = await prisma.reservationTreatment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReservationTreatmentFindFirstOrThrowArgs>(args?: SelectSubset<T, ReservationTreatmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReservationTreatmentClient<$Result.GetResult<Prisma.$ReservationTreatmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ReservationTreatments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationTreatmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ReservationTreatments
     * const reservationTreatments = await prisma.reservationTreatment.findMany()
     * 
     * // Get first 10 ReservationTreatments
     * const reservationTreatments = await prisma.reservationTreatment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reservationTreatmentWithIdOnly = await prisma.reservationTreatment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReservationTreatmentFindManyArgs>(args?: SelectSubset<T, ReservationTreatmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservationTreatmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ReservationTreatment.
     * @param {ReservationTreatmentCreateArgs} args - Arguments to create a ReservationTreatment.
     * @example
     * // Create one ReservationTreatment
     * const ReservationTreatment = await prisma.reservationTreatment.create({
     *   data: {
     *     // ... data to create a ReservationTreatment
     *   }
     * })
     * 
     */
    create<T extends ReservationTreatmentCreateArgs>(args: SelectSubset<T, ReservationTreatmentCreateArgs<ExtArgs>>): Prisma__ReservationTreatmentClient<$Result.GetResult<Prisma.$ReservationTreatmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ReservationTreatments.
     * @param {ReservationTreatmentCreateManyArgs} args - Arguments to create many ReservationTreatments.
     * @example
     * // Create many ReservationTreatments
     * const reservationTreatment = await prisma.reservationTreatment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReservationTreatmentCreateManyArgs>(args?: SelectSubset<T, ReservationTreatmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ReservationTreatment.
     * @param {ReservationTreatmentDeleteArgs} args - Arguments to delete one ReservationTreatment.
     * @example
     * // Delete one ReservationTreatment
     * const ReservationTreatment = await prisma.reservationTreatment.delete({
     *   where: {
     *     // ... filter to delete one ReservationTreatment
     *   }
     * })
     * 
     */
    delete<T extends ReservationTreatmentDeleteArgs>(args: SelectSubset<T, ReservationTreatmentDeleteArgs<ExtArgs>>): Prisma__ReservationTreatmentClient<$Result.GetResult<Prisma.$ReservationTreatmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ReservationTreatment.
     * @param {ReservationTreatmentUpdateArgs} args - Arguments to update one ReservationTreatment.
     * @example
     * // Update one ReservationTreatment
     * const reservationTreatment = await prisma.reservationTreatment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReservationTreatmentUpdateArgs>(args: SelectSubset<T, ReservationTreatmentUpdateArgs<ExtArgs>>): Prisma__ReservationTreatmentClient<$Result.GetResult<Prisma.$ReservationTreatmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ReservationTreatments.
     * @param {ReservationTreatmentDeleteManyArgs} args - Arguments to filter ReservationTreatments to delete.
     * @example
     * // Delete a few ReservationTreatments
     * const { count } = await prisma.reservationTreatment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReservationTreatmentDeleteManyArgs>(args?: SelectSubset<T, ReservationTreatmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReservationTreatments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationTreatmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ReservationTreatments
     * const reservationTreatment = await prisma.reservationTreatment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReservationTreatmentUpdateManyArgs>(args: SelectSubset<T, ReservationTreatmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ReservationTreatment.
     * @param {ReservationTreatmentUpsertArgs} args - Arguments to update or create a ReservationTreatment.
     * @example
     * // Update or create a ReservationTreatment
     * const reservationTreatment = await prisma.reservationTreatment.upsert({
     *   create: {
     *     // ... data to create a ReservationTreatment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ReservationTreatment we want to update
     *   }
     * })
     */
    upsert<T extends ReservationTreatmentUpsertArgs>(args: SelectSubset<T, ReservationTreatmentUpsertArgs<ExtArgs>>): Prisma__ReservationTreatmentClient<$Result.GetResult<Prisma.$ReservationTreatmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ReservationTreatments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationTreatmentCountArgs} args - Arguments to filter ReservationTreatments to count.
     * @example
     * // Count the number of ReservationTreatments
     * const count = await prisma.reservationTreatment.count({
     *   where: {
     *     // ... the filter for the ReservationTreatments we want to count
     *   }
     * })
    **/
    count<T extends ReservationTreatmentCountArgs>(
      args?: Subset<T, ReservationTreatmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReservationTreatmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ReservationTreatment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationTreatmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReservationTreatmentAggregateArgs>(args: Subset<T, ReservationTreatmentAggregateArgs>): Prisma.PrismaPromise<GetReservationTreatmentAggregateType<T>>

    /**
     * Group by ReservationTreatment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationTreatmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReservationTreatmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReservationTreatmentGroupByArgs['orderBy'] }
        : { orderBy?: ReservationTreatmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReservationTreatmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReservationTreatmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ReservationTreatment model
   */
  readonly fields: ReservationTreatmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ReservationTreatment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReservationTreatmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    reservation<T extends ReservationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ReservationDefaultArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    treatment<T extends TreatmentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TreatmentDefaultArgs<ExtArgs>>): Prisma__TreatmentClient<$Result.GetResult<Prisma.$TreatmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ReservationTreatment model
   */
  interface ReservationTreatmentFieldRefs {
    readonly id: FieldRef<"ReservationTreatment", 'String'>
    readonly reservationId: FieldRef<"ReservationTreatment", 'String'>
    readonly treatmentId: FieldRef<"ReservationTreatment", 'String'>
    readonly quantity: FieldRef<"ReservationTreatment", 'Int'>
    readonly unitPrice: FieldRef<"ReservationTreatment", 'Decimal'>
    readonly durationMinutes: FieldRef<"ReservationTreatment", 'Int'>
    readonly notes: FieldRef<"ReservationTreatment", 'String'>
    readonly createdAt: FieldRef<"ReservationTreatment", 'DateTime'>
    readonly updatedAt: FieldRef<"ReservationTreatment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ReservationTreatment findUnique
   */
  export type ReservationTreatmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReservationTreatment
     */
    select?: ReservationTreatmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReservationTreatment
     */
    omit?: ReservationTreatmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationTreatmentInclude<ExtArgs> | null
    /**
     * Filter, which ReservationTreatment to fetch.
     */
    where: ReservationTreatmentWhereUniqueInput
  }

  /**
   * ReservationTreatment findUniqueOrThrow
   */
  export type ReservationTreatmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReservationTreatment
     */
    select?: ReservationTreatmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReservationTreatment
     */
    omit?: ReservationTreatmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationTreatmentInclude<ExtArgs> | null
    /**
     * Filter, which ReservationTreatment to fetch.
     */
    where: ReservationTreatmentWhereUniqueInput
  }

  /**
   * ReservationTreatment findFirst
   */
  export type ReservationTreatmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReservationTreatment
     */
    select?: ReservationTreatmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReservationTreatment
     */
    omit?: ReservationTreatmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationTreatmentInclude<ExtArgs> | null
    /**
     * Filter, which ReservationTreatment to fetch.
     */
    where?: ReservationTreatmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReservationTreatments to fetch.
     */
    orderBy?: ReservationTreatmentOrderByWithRelationInput | ReservationTreatmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReservationTreatments.
     */
    cursor?: ReservationTreatmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReservationTreatments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReservationTreatments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReservationTreatments.
     */
    distinct?: ReservationTreatmentScalarFieldEnum | ReservationTreatmentScalarFieldEnum[]
  }

  /**
   * ReservationTreatment findFirstOrThrow
   */
  export type ReservationTreatmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReservationTreatment
     */
    select?: ReservationTreatmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReservationTreatment
     */
    omit?: ReservationTreatmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationTreatmentInclude<ExtArgs> | null
    /**
     * Filter, which ReservationTreatment to fetch.
     */
    where?: ReservationTreatmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReservationTreatments to fetch.
     */
    orderBy?: ReservationTreatmentOrderByWithRelationInput | ReservationTreatmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReservationTreatments.
     */
    cursor?: ReservationTreatmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReservationTreatments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReservationTreatments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReservationTreatments.
     */
    distinct?: ReservationTreatmentScalarFieldEnum | ReservationTreatmentScalarFieldEnum[]
  }

  /**
   * ReservationTreatment findMany
   */
  export type ReservationTreatmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReservationTreatment
     */
    select?: ReservationTreatmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReservationTreatment
     */
    omit?: ReservationTreatmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationTreatmentInclude<ExtArgs> | null
    /**
     * Filter, which ReservationTreatments to fetch.
     */
    where?: ReservationTreatmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReservationTreatments to fetch.
     */
    orderBy?: ReservationTreatmentOrderByWithRelationInput | ReservationTreatmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ReservationTreatments.
     */
    cursor?: ReservationTreatmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReservationTreatments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReservationTreatments.
     */
    skip?: number
    distinct?: ReservationTreatmentScalarFieldEnum | ReservationTreatmentScalarFieldEnum[]
  }

  /**
   * ReservationTreatment create
   */
  export type ReservationTreatmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReservationTreatment
     */
    select?: ReservationTreatmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReservationTreatment
     */
    omit?: ReservationTreatmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationTreatmentInclude<ExtArgs> | null
    /**
     * The data needed to create a ReservationTreatment.
     */
    data: XOR<ReservationTreatmentCreateInput, ReservationTreatmentUncheckedCreateInput>
  }

  /**
   * ReservationTreatment createMany
   */
  export type ReservationTreatmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ReservationTreatments.
     */
    data: ReservationTreatmentCreateManyInput | ReservationTreatmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ReservationTreatment update
   */
  export type ReservationTreatmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReservationTreatment
     */
    select?: ReservationTreatmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReservationTreatment
     */
    omit?: ReservationTreatmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationTreatmentInclude<ExtArgs> | null
    /**
     * The data needed to update a ReservationTreatment.
     */
    data: XOR<ReservationTreatmentUpdateInput, ReservationTreatmentUncheckedUpdateInput>
    /**
     * Choose, which ReservationTreatment to update.
     */
    where: ReservationTreatmentWhereUniqueInput
  }

  /**
   * ReservationTreatment updateMany
   */
  export type ReservationTreatmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ReservationTreatments.
     */
    data: XOR<ReservationTreatmentUpdateManyMutationInput, ReservationTreatmentUncheckedUpdateManyInput>
    /**
     * Filter which ReservationTreatments to update
     */
    where?: ReservationTreatmentWhereInput
    /**
     * Limit how many ReservationTreatments to update.
     */
    limit?: number
  }

  /**
   * ReservationTreatment upsert
   */
  export type ReservationTreatmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReservationTreatment
     */
    select?: ReservationTreatmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReservationTreatment
     */
    omit?: ReservationTreatmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationTreatmentInclude<ExtArgs> | null
    /**
     * The filter to search for the ReservationTreatment to update in case it exists.
     */
    where: ReservationTreatmentWhereUniqueInput
    /**
     * In case the ReservationTreatment found by the `where` argument doesn't exist, create a new ReservationTreatment with this data.
     */
    create: XOR<ReservationTreatmentCreateInput, ReservationTreatmentUncheckedCreateInput>
    /**
     * In case the ReservationTreatment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReservationTreatmentUpdateInput, ReservationTreatmentUncheckedUpdateInput>
  }

  /**
   * ReservationTreatment delete
   */
  export type ReservationTreatmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReservationTreatment
     */
    select?: ReservationTreatmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReservationTreatment
     */
    omit?: ReservationTreatmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationTreatmentInclude<ExtArgs> | null
    /**
     * Filter which ReservationTreatment to delete.
     */
    where: ReservationTreatmentWhereUniqueInput
  }

  /**
   * ReservationTreatment deleteMany
   */
  export type ReservationTreatmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReservationTreatments to delete
     */
    where?: ReservationTreatmentWhereInput
    /**
     * Limit how many ReservationTreatments to delete.
     */
    limit?: number
  }

  /**
   * ReservationTreatment without action
   */
  export type ReservationTreatmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReservationTreatment
     */
    select?: ReservationTreatmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReservationTreatment
     */
    omit?: ReservationTreatmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationTreatmentInclude<ExtArgs> | null
  }


  /**
   * Model ReservationAuditLog
   */

  export type AggregateReservationAuditLog = {
    _count: ReservationAuditLogCountAggregateOutputType | null
    _min: ReservationAuditLogMinAggregateOutputType | null
    _max: ReservationAuditLogMaxAggregateOutputType | null
  }

  export type ReservationAuditLogMinAggregateOutputType = {
    id: string | null
    reservationId: string | null
    action: $Enums.ReservationAuditAction | null
    fromStatus: $Enums.ReservationStatus | null
    toStatus: $Enums.ReservationStatus | null
    actorId: string | null
    message: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReservationAuditLogMaxAggregateOutputType = {
    id: string | null
    reservationId: string | null
    action: $Enums.ReservationAuditAction | null
    fromStatus: $Enums.ReservationStatus | null
    toStatus: $Enums.ReservationStatus | null
    actorId: string | null
    message: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReservationAuditLogCountAggregateOutputType = {
    id: number
    reservationId: number
    action: number
    fromStatus: number
    toStatus: number
    actorId: number
    message: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ReservationAuditLogMinAggregateInputType = {
    id?: true
    reservationId?: true
    action?: true
    fromStatus?: true
    toStatus?: true
    actorId?: true
    message?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReservationAuditLogMaxAggregateInputType = {
    id?: true
    reservationId?: true
    action?: true
    fromStatus?: true
    toStatus?: true
    actorId?: true
    message?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReservationAuditLogCountAggregateInputType = {
    id?: true
    reservationId?: true
    action?: true
    fromStatus?: true
    toStatus?: true
    actorId?: true
    message?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ReservationAuditLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReservationAuditLog to aggregate.
     */
    where?: ReservationAuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReservationAuditLogs to fetch.
     */
    orderBy?: ReservationAuditLogOrderByWithRelationInput | ReservationAuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReservationAuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReservationAuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReservationAuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ReservationAuditLogs
    **/
    _count?: true | ReservationAuditLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReservationAuditLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReservationAuditLogMaxAggregateInputType
  }

  export type GetReservationAuditLogAggregateType<T extends ReservationAuditLogAggregateArgs> = {
        [P in keyof T & keyof AggregateReservationAuditLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReservationAuditLog[P]>
      : GetScalarType<T[P], AggregateReservationAuditLog[P]>
  }




  export type ReservationAuditLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReservationAuditLogWhereInput
    orderBy?: ReservationAuditLogOrderByWithAggregationInput | ReservationAuditLogOrderByWithAggregationInput[]
    by: ReservationAuditLogScalarFieldEnum[] | ReservationAuditLogScalarFieldEnum
    having?: ReservationAuditLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReservationAuditLogCountAggregateInputType | true
    _min?: ReservationAuditLogMinAggregateInputType
    _max?: ReservationAuditLogMaxAggregateInputType
  }

  export type ReservationAuditLogGroupByOutputType = {
    id: string
    reservationId: string
    action: $Enums.ReservationAuditAction
    fromStatus: $Enums.ReservationStatus | null
    toStatus: $Enums.ReservationStatus | null
    actorId: string | null
    message: string | null
    createdAt: Date
    updatedAt: Date
    _count: ReservationAuditLogCountAggregateOutputType | null
    _min: ReservationAuditLogMinAggregateOutputType | null
    _max: ReservationAuditLogMaxAggregateOutputType | null
  }

  type GetReservationAuditLogGroupByPayload<T extends ReservationAuditLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReservationAuditLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReservationAuditLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReservationAuditLogGroupByOutputType[P]>
            : GetScalarType<T[P], ReservationAuditLogGroupByOutputType[P]>
        }
      >
    >


  export type ReservationAuditLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reservationId?: boolean
    action?: boolean
    fromStatus?: boolean
    toStatus?: boolean
    actorId?: boolean
    message?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    reservation?: boolean | ReservationDefaultArgs<ExtArgs>
    actor?: boolean | ReservationAuditLog$actorArgs<ExtArgs>
  }, ExtArgs["result"]["reservationAuditLog"]>



  export type ReservationAuditLogSelectScalar = {
    id?: boolean
    reservationId?: boolean
    action?: boolean
    fromStatus?: boolean
    toStatus?: boolean
    actorId?: boolean
    message?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ReservationAuditLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "reservationId" | "action" | "fromStatus" | "toStatus" | "actorId" | "message" | "createdAt" | "updatedAt", ExtArgs["result"]["reservationAuditLog"]>
  export type ReservationAuditLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reservation?: boolean | ReservationDefaultArgs<ExtArgs>
    actor?: boolean | ReservationAuditLog$actorArgs<ExtArgs>
  }

  export type $ReservationAuditLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ReservationAuditLog"
    objects: {
      reservation: Prisma.$ReservationPayload<ExtArgs>
      actor: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      reservationId: string
      action: $Enums.ReservationAuditAction
      fromStatus: $Enums.ReservationStatus | null
      toStatus: $Enums.ReservationStatus | null
      actorId: string | null
      message: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["reservationAuditLog"]>
    composites: {}
  }

  type ReservationAuditLogGetPayload<S extends boolean | null | undefined | ReservationAuditLogDefaultArgs> = $Result.GetResult<Prisma.$ReservationAuditLogPayload, S>

  type ReservationAuditLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReservationAuditLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReservationAuditLogCountAggregateInputType | true
    }

  export interface ReservationAuditLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ReservationAuditLog'], meta: { name: 'ReservationAuditLog' } }
    /**
     * Find zero or one ReservationAuditLog that matches the filter.
     * @param {ReservationAuditLogFindUniqueArgs} args - Arguments to find a ReservationAuditLog
     * @example
     * // Get one ReservationAuditLog
     * const reservationAuditLog = await prisma.reservationAuditLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReservationAuditLogFindUniqueArgs>(args: SelectSubset<T, ReservationAuditLogFindUniqueArgs<ExtArgs>>): Prisma__ReservationAuditLogClient<$Result.GetResult<Prisma.$ReservationAuditLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ReservationAuditLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReservationAuditLogFindUniqueOrThrowArgs} args - Arguments to find a ReservationAuditLog
     * @example
     * // Get one ReservationAuditLog
     * const reservationAuditLog = await prisma.reservationAuditLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReservationAuditLogFindUniqueOrThrowArgs>(args: SelectSubset<T, ReservationAuditLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReservationAuditLogClient<$Result.GetResult<Prisma.$ReservationAuditLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReservationAuditLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationAuditLogFindFirstArgs} args - Arguments to find a ReservationAuditLog
     * @example
     * // Get one ReservationAuditLog
     * const reservationAuditLog = await prisma.reservationAuditLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReservationAuditLogFindFirstArgs>(args?: SelectSubset<T, ReservationAuditLogFindFirstArgs<ExtArgs>>): Prisma__ReservationAuditLogClient<$Result.GetResult<Prisma.$ReservationAuditLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReservationAuditLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationAuditLogFindFirstOrThrowArgs} args - Arguments to find a ReservationAuditLog
     * @example
     * // Get one ReservationAuditLog
     * const reservationAuditLog = await prisma.reservationAuditLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReservationAuditLogFindFirstOrThrowArgs>(args?: SelectSubset<T, ReservationAuditLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReservationAuditLogClient<$Result.GetResult<Prisma.$ReservationAuditLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ReservationAuditLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationAuditLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ReservationAuditLogs
     * const reservationAuditLogs = await prisma.reservationAuditLog.findMany()
     * 
     * // Get first 10 ReservationAuditLogs
     * const reservationAuditLogs = await prisma.reservationAuditLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reservationAuditLogWithIdOnly = await prisma.reservationAuditLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReservationAuditLogFindManyArgs>(args?: SelectSubset<T, ReservationAuditLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservationAuditLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ReservationAuditLog.
     * @param {ReservationAuditLogCreateArgs} args - Arguments to create a ReservationAuditLog.
     * @example
     * // Create one ReservationAuditLog
     * const ReservationAuditLog = await prisma.reservationAuditLog.create({
     *   data: {
     *     // ... data to create a ReservationAuditLog
     *   }
     * })
     * 
     */
    create<T extends ReservationAuditLogCreateArgs>(args: SelectSubset<T, ReservationAuditLogCreateArgs<ExtArgs>>): Prisma__ReservationAuditLogClient<$Result.GetResult<Prisma.$ReservationAuditLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ReservationAuditLogs.
     * @param {ReservationAuditLogCreateManyArgs} args - Arguments to create many ReservationAuditLogs.
     * @example
     * // Create many ReservationAuditLogs
     * const reservationAuditLog = await prisma.reservationAuditLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReservationAuditLogCreateManyArgs>(args?: SelectSubset<T, ReservationAuditLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ReservationAuditLog.
     * @param {ReservationAuditLogDeleteArgs} args - Arguments to delete one ReservationAuditLog.
     * @example
     * // Delete one ReservationAuditLog
     * const ReservationAuditLog = await prisma.reservationAuditLog.delete({
     *   where: {
     *     // ... filter to delete one ReservationAuditLog
     *   }
     * })
     * 
     */
    delete<T extends ReservationAuditLogDeleteArgs>(args: SelectSubset<T, ReservationAuditLogDeleteArgs<ExtArgs>>): Prisma__ReservationAuditLogClient<$Result.GetResult<Prisma.$ReservationAuditLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ReservationAuditLog.
     * @param {ReservationAuditLogUpdateArgs} args - Arguments to update one ReservationAuditLog.
     * @example
     * // Update one ReservationAuditLog
     * const reservationAuditLog = await prisma.reservationAuditLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReservationAuditLogUpdateArgs>(args: SelectSubset<T, ReservationAuditLogUpdateArgs<ExtArgs>>): Prisma__ReservationAuditLogClient<$Result.GetResult<Prisma.$ReservationAuditLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ReservationAuditLogs.
     * @param {ReservationAuditLogDeleteManyArgs} args - Arguments to filter ReservationAuditLogs to delete.
     * @example
     * // Delete a few ReservationAuditLogs
     * const { count } = await prisma.reservationAuditLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReservationAuditLogDeleteManyArgs>(args?: SelectSubset<T, ReservationAuditLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReservationAuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationAuditLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ReservationAuditLogs
     * const reservationAuditLog = await prisma.reservationAuditLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReservationAuditLogUpdateManyArgs>(args: SelectSubset<T, ReservationAuditLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ReservationAuditLog.
     * @param {ReservationAuditLogUpsertArgs} args - Arguments to update or create a ReservationAuditLog.
     * @example
     * // Update or create a ReservationAuditLog
     * const reservationAuditLog = await prisma.reservationAuditLog.upsert({
     *   create: {
     *     // ... data to create a ReservationAuditLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ReservationAuditLog we want to update
     *   }
     * })
     */
    upsert<T extends ReservationAuditLogUpsertArgs>(args: SelectSubset<T, ReservationAuditLogUpsertArgs<ExtArgs>>): Prisma__ReservationAuditLogClient<$Result.GetResult<Prisma.$ReservationAuditLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ReservationAuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationAuditLogCountArgs} args - Arguments to filter ReservationAuditLogs to count.
     * @example
     * // Count the number of ReservationAuditLogs
     * const count = await prisma.reservationAuditLog.count({
     *   where: {
     *     // ... the filter for the ReservationAuditLogs we want to count
     *   }
     * })
    **/
    count<T extends ReservationAuditLogCountArgs>(
      args?: Subset<T, ReservationAuditLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReservationAuditLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ReservationAuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationAuditLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReservationAuditLogAggregateArgs>(args: Subset<T, ReservationAuditLogAggregateArgs>): Prisma.PrismaPromise<GetReservationAuditLogAggregateType<T>>

    /**
     * Group by ReservationAuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationAuditLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReservationAuditLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReservationAuditLogGroupByArgs['orderBy'] }
        : { orderBy?: ReservationAuditLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReservationAuditLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReservationAuditLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ReservationAuditLog model
   */
  readonly fields: ReservationAuditLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ReservationAuditLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReservationAuditLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    reservation<T extends ReservationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ReservationDefaultArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    actor<T extends ReservationAuditLog$actorArgs<ExtArgs> = {}>(args?: Subset<T, ReservationAuditLog$actorArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ReservationAuditLog model
   */
  interface ReservationAuditLogFieldRefs {
    readonly id: FieldRef<"ReservationAuditLog", 'String'>
    readonly reservationId: FieldRef<"ReservationAuditLog", 'String'>
    readonly action: FieldRef<"ReservationAuditLog", 'ReservationAuditAction'>
    readonly fromStatus: FieldRef<"ReservationAuditLog", 'ReservationStatus'>
    readonly toStatus: FieldRef<"ReservationAuditLog", 'ReservationStatus'>
    readonly actorId: FieldRef<"ReservationAuditLog", 'String'>
    readonly message: FieldRef<"ReservationAuditLog", 'String'>
    readonly createdAt: FieldRef<"ReservationAuditLog", 'DateTime'>
    readonly updatedAt: FieldRef<"ReservationAuditLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ReservationAuditLog findUnique
   */
  export type ReservationAuditLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReservationAuditLog
     */
    select?: ReservationAuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReservationAuditLog
     */
    omit?: ReservationAuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationAuditLogInclude<ExtArgs> | null
    /**
     * Filter, which ReservationAuditLog to fetch.
     */
    where: ReservationAuditLogWhereUniqueInput
  }

  /**
   * ReservationAuditLog findUniqueOrThrow
   */
  export type ReservationAuditLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReservationAuditLog
     */
    select?: ReservationAuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReservationAuditLog
     */
    omit?: ReservationAuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationAuditLogInclude<ExtArgs> | null
    /**
     * Filter, which ReservationAuditLog to fetch.
     */
    where: ReservationAuditLogWhereUniqueInput
  }

  /**
   * ReservationAuditLog findFirst
   */
  export type ReservationAuditLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReservationAuditLog
     */
    select?: ReservationAuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReservationAuditLog
     */
    omit?: ReservationAuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationAuditLogInclude<ExtArgs> | null
    /**
     * Filter, which ReservationAuditLog to fetch.
     */
    where?: ReservationAuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReservationAuditLogs to fetch.
     */
    orderBy?: ReservationAuditLogOrderByWithRelationInput | ReservationAuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReservationAuditLogs.
     */
    cursor?: ReservationAuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReservationAuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReservationAuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReservationAuditLogs.
     */
    distinct?: ReservationAuditLogScalarFieldEnum | ReservationAuditLogScalarFieldEnum[]
  }

  /**
   * ReservationAuditLog findFirstOrThrow
   */
  export type ReservationAuditLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReservationAuditLog
     */
    select?: ReservationAuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReservationAuditLog
     */
    omit?: ReservationAuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationAuditLogInclude<ExtArgs> | null
    /**
     * Filter, which ReservationAuditLog to fetch.
     */
    where?: ReservationAuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReservationAuditLogs to fetch.
     */
    orderBy?: ReservationAuditLogOrderByWithRelationInput | ReservationAuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReservationAuditLogs.
     */
    cursor?: ReservationAuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReservationAuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReservationAuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReservationAuditLogs.
     */
    distinct?: ReservationAuditLogScalarFieldEnum | ReservationAuditLogScalarFieldEnum[]
  }

  /**
   * ReservationAuditLog findMany
   */
  export type ReservationAuditLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReservationAuditLog
     */
    select?: ReservationAuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReservationAuditLog
     */
    omit?: ReservationAuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationAuditLogInclude<ExtArgs> | null
    /**
     * Filter, which ReservationAuditLogs to fetch.
     */
    where?: ReservationAuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReservationAuditLogs to fetch.
     */
    orderBy?: ReservationAuditLogOrderByWithRelationInput | ReservationAuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ReservationAuditLogs.
     */
    cursor?: ReservationAuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReservationAuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReservationAuditLogs.
     */
    skip?: number
    distinct?: ReservationAuditLogScalarFieldEnum | ReservationAuditLogScalarFieldEnum[]
  }

  /**
   * ReservationAuditLog create
   */
  export type ReservationAuditLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReservationAuditLog
     */
    select?: ReservationAuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReservationAuditLog
     */
    omit?: ReservationAuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationAuditLogInclude<ExtArgs> | null
    /**
     * The data needed to create a ReservationAuditLog.
     */
    data: XOR<ReservationAuditLogCreateInput, ReservationAuditLogUncheckedCreateInput>
  }

  /**
   * ReservationAuditLog createMany
   */
  export type ReservationAuditLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ReservationAuditLogs.
     */
    data: ReservationAuditLogCreateManyInput | ReservationAuditLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ReservationAuditLog update
   */
  export type ReservationAuditLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReservationAuditLog
     */
    select?: ReservationAuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReservationAuditLog
     */
    omit?: ReservationAuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationAuditLogInclude<ExtArgs> | null
    /**
     * The data needed to update a ReservationAuditLog.
     */
    data: XOR<ReservationAuditLogUpdateInput, ReservationAuditLogUncheckedUpdateInput>
    /**
     * Choose, which ReservationAuditLog to update.
     */
    where: ReservationAuditLogWhereUniqueInput
  }

  /**
   * ReservationAuditLog updateMany
   */
  export type ReservationAuditLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ReservationAuditLogs.
     */
    data: XOR<ReservationAuditLogUpdateManyMutationInput, ReservationAuditLogUncheckedUpdateManyInput>
    /**
     * Filter which ReservationAuditLogs to update
     */
    where?: ReservationAuditLogWhereInput
    /**
     * Limit how many ReservationAuditLogs to update.
     */
    limit?: number
  }

  /**
   * ReservationAuditLog upsert
   */
  export type ReservationAuditLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReservationAuditLog
     */
    select?: ReservationAuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReservationAuditLog
     */
    omit?: ReservationAuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationAuditLogInclude<ExtArgs> | null
    /**
     * The filter to search for the ReservationAuditLog to update in case it exists.
     */
    where: ReservationAuditLogWhereUniqueInput
    /**
     * In case the ReservationAuditLog found by the `where` argument doesn't exist, create a new ReservationAuditLog with this data.
     */
    create: XOR<ReservationAuditLogCreateInput, ReservationAuditLogUncheckedCreateInput>
    /**
     * In case the ReservationAuditLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReservationAuditLogUpdateInput, ReservationAuditLogUncheckedUpdateInput>
  }

  /**
   * ReservationAuditLog delete
   */
  export type ReservationAuditLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReservationAuditLog
     */
    select?: ReservationAuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReservationAuditLog
     */
    omit?: ReservationAuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationAuditLogInclude<ExtArgs> | null
    /**
     * Filter which ReservationAuditLog to delete.
     */
    where: ReservationAuditLogWhereUniqueInput
  }

  /**
   * ReservationAuditLog deleteMany
   */
  export type ReservationAuditLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReservationAuditLogs to delete
     */
    where?: ReservationAuditLogWhereInput
    /**
     * Limit how many ReservationAuditLogs to delete.
     */
    limit?: number
  }

  /**
   * ReservationAuditLog.actor
   */
  export type ReservationAuditLog$actorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * ReservationAuditLog without action
   */
  export type ReservationAuditLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReservationAuditLog
     */
    select?: ReservationAuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReservationAuditLog
     */
    omit?: ReservationAuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationAuditLogInclude<ExtArgs> | null
  }


  /**
   * Model Notification
   */

  export type AggregateNotification = {
    _count: NotificationCountAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  export type NotificationMinAggregateOutputType = {
    id: string | null
    type: $Enums.NotificationType | null
    status: $Enums.NotificationStatus | null
    userId: string | null
    reservationId: string | null
    title: string | null
    body: string | null
    readAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NotificationMaxAggregateOutputType = {
    id: string | null
    type: $Enums.NotificationType | null
    status: $Enums.NotificationStatus | null
    userId: string | null
    reservationId: string | null
    title: string | null
    body: string | null
    readAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NotificationCountAggregateOutputType = {
    id: number
    type: number
    status: number
    userId: number
    reservationId: number
    title: number
    body: number
    readAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type NotificationMinAggregateInputType = {
    id?: true
    type?: true
    status?: true
    userId?: true
    reservationId?: true
    title?: true
    body?: true
    readAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NotificationMaxAggregateInputType = {
    id?: true
    type?: true
    status?: true
    userId?: true
    reservationId?: true
    title?: true
    body?: true
    readAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NotificationCountAggregateInputType = {
    id?: true
    type?: true
    status?: true
    userId?: true
    reservationId?: true
    title?: true
    body?: true
    readAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type NotificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notification to aggregate.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notifications
    **/
    _count?: true | NotificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationMaxAggregateInputType
  }

  export type GetNotificationAggregateType<T extends NotificationAggregateArgs> = {
        [P in keyof T & keyof AggregateNotification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotification[P]>
      : GetScalarType<T[P], AggregateNotification[P]>
  }




  export type NotificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithAggregationInput | NotificationOrderByWithAggregationInput[]
    by: NotificationScalarFieldEnum[] | NotificationScalarFieldEnum
    having?: NotificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationCountAggregateInputType | true
    _min?: NotificationMinAggregateInputType
    _max?: NotificationMaxAggregateInputType
  }

  export type NotificationGroupByOutputType = {
    id: string
    type: $Enums.NotificationType
    status: $Enums.NotificationStatus
    userId: string | null
    reservationId: string | null
    title: string
    body: string
    readAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: NotificationCountAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  type GetNotificationGroupByPayload<T extends NotificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationGroupByOutputType[P]>
        }
      >
    >


  export type NotificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    status?: boolean
    userId?: boolean
    reservationId?: boolean
    title?: boolean
    body?: boolean
    readAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | Notification$userArgs<ExtArgs>
    reservation?: boolean | Notification$reservationArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>



  export type NotificationSelectScalar = {
    id?: boolean
    type?: boolean
    status?: boolean
    userId?: boolean
    reservationId?: boolean
    title?: boolean
    body?: boolean
    readAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type NotificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "status" | "userId" | "reservationId" | "title" | "body" | "readAt" | "createdAt" | "updatedAt", ExtArgs["result"]["notification"]>
  export type NotificationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Notification$userArgs<ExtArgs>
    reservation?: boolean | Notification$reservationArgs<ExtArgs>
  }

  export type $NotificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notification"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
      reservation: Prisma.$ReservationPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      type: $Enums.NotificationType
      status: $Enums.NotificationStatus
      userId: string | null
      reservationId: string | null
      title: string
      body: string
      readAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["notification"]>
    composites: {}
  }

  type NotificationGetPayload<S extends boolean | null | undefined | NotificationDefaultArgs> = $Result.GetResult<Prisma.$NotificationPayload, S>

  type NotificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NotificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificationCountAggregateInputType | true
    }

  export interface NotificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Notification'], meta: { name: 'Notification' } }
    /**
     * Find zero or one Notification that matches the filter.
     * @param {NotificationFindUniqueArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificationFindUniqueArgs>(args: SelectSubset<T, NotificationFindUniqueArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotificationFindUniqueOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificationFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificationFindFirstArgs>(args?: SelectSubset<T, NotificationFindFirstArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificationFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifications
     * const notifications = await prisma.notification.findMany()
     * 
     * // Get first 10 Notifications
     * const notifications = await prisma.notification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationWithIdOnly = await prisma.notification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotificationFindManyArgs>(args?: SelectSubset<T, NotificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notification.
     * @param {NotificationCreateArgs} args - Arguments to create a Notification.
     * @example
     * // Create one Notification
     * const Notification = await prisma.notification.create({
     *   data: {
     *     // ... data to create a Notification
     *   }
     * })
     * 
     */
    create<T extends NotificationCreateArgs>(args: SelectSubset<T, NotificationCreateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notifications.
     * @param {NotificationCreateManyArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificationCreateManyArgs>(args?: SelectSubset<T, NotificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Notification.
     * @param {NotificationDeleteArgs} args - Arguments to delete one Notification.
     * @example
     * // Delete one Notification
     * const Notification = await prisma.notification.delete({
     *   where: {
     *     // ... filter to delete one Notification
     *   }
     * })
     * 
     */
    delete<T extends NotificationDeleteArgs>(args: SelectSubset<T, NotificationDeleteArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notification.
     * @param {NotificationUpdateArgs} args - Arguments to update one Notification.
     * @example
     * // Update one Notification
     * const notification = await prisma.notification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificationUpdateArgs>(args: SelectSubset<T, NotificationUpdateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notifications.
     * @param {NotificationDeleteManyArgs} args - Arguments to filter Notifications to delete.
     * @example
     * // Delete a few Notifications
     * const { count } = await prisma.notification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificationDeleteManyArgs>(args?: SelectSubset<T, NotificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificationUpdateManyArgs>(args: SelectSubset<T, NotificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Notification.
     * @param {NotificationUpsertArgs} args - Arguments to update or create a Notification.
     * @example
     * // Update or create a Notification
     * const notification = await prisma.notification.upsert({
     *   create: {
     *     // ... data to create a Notification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notification we want to update
     *   }
     * })
     */
    upsert<T extends NotificationUpsertArgs>(args: SelectSubset<T, NotificationUpsertArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationCountArgs} args - Arguments to filter Notifications to count.
     * @example
     * // Count the number of Notifications
     * const count = await prisma.notification.count({
     *   where: {
     *     // ... the filter for the Notifications we want to count
     *   }
     * })
    **/
    count<T extends NotificationCountArgs>(
      args?: Subset<T, NotificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NotificationAggregateArgs>(args: Subset<T, NotificationAggregateArgs>): Prisma.PrismaPromise<GetNotificationAggregateType<T>>

    /**
     * Group by Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NotificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationGroupByArgs['orderBy'] }
        : { orderBy?: NotificationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NotificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Notification model
   */
  readonly fields: NotificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends Notification$userArgs<ExtArgs> = {}>(args?: Subset<T, Notification$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    reservation<T extends Notification$reservationArgs<ExtArgs> = {}>(args?: Subset<T, Notification$reservationArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Notification model
   */
  interface NotificationFieldRefs {
    readonly id: FieldRef<"Notification", 'String'>
    readonly type: FieldRef<"Notification", 'NotificationType'>
    readonly status: FieldRef<"Notification", 'NotificationStatus'>
    readonly userId: FieldRef<"Notification", 'String'>
    readonly reservationId: FieldRef<"Notification", 'String'>
    readonly title: FieldRef<"Notification", 'String'>
    readonly body: FieldRef<"Notification", 'String'>
    readonly readAt: FieldRef<"Notification", 'DateTime'>
    readonly createdAt: FieldRef<"Notification", 'DateTime'>
    readonly updatedAt: FieldRef<"Notification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Notification findUnique
   */
  export type NotificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findUniqueOrThrow
   */
  export type NotificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findFirst
   */
  export type NotificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findFirstOrThrow
   */
  export type NotificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findMany
   */
  export type NotificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification create
   */
  export type NotificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to create a Notification.
     */
    data: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
  }

  /**
   * Notification createMany
   */
  export type NotificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Notification update
   */
  export type NotificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to update a Notification.
     */
    data: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
    /**
     * Choose, which Notification to update.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification updateMany
   */
  export type NotificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
  }

  /**
   * Notification upsert
   */
  export type NotificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The filter to search for the Notification to update in case it exists.
     */
    where: NotificationWhereUniqueInput
    /**
     * In case the Notification found by the `where` argument doesn't exist, create a new Notification with this data.
     */
    create: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
    /**
     * In case the Notification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
  }

  /**
   * Notification delete
   */
  export type NotificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter which Notification to delete.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification deleteMany
   */
  export type NotificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notifications to delete
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to delete.
     */
    limit?: number
  }

  /**
   * Notification.user
   */
  export type Notification$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Notification.reservation
   */
  export type Notification$reservationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    where?: ReservationWhereInput
  }

  /**
   * Notification without action
   */
  export type NotificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AccountScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    provider: 'provider',
    providerAccountId: 'providerAccountId',
    refresh_token: 'refresh_token',
    access_token: 'access_token',
    expires_at: 'expires_at',
    token_type: 'token_type',
    scope: 'scope',
    id_token: 'id_token',
    session_state: 'session_state',
    refresh_token_expires_in: 'refresh_token_expires_in'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    sessionToken: 'sessionToken',
    userId: 'userId',
    expires: 'expires'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    emailVerified: 'emailVerified',
    image: 'image',
    password: 'password',
    role: 'role'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const VerificationTokenScalarFieldEnum: {
    identifier: 'identifier',
    token: 'token',
    expires: 'expires'
  };

  export type VerificationTokenScalarFieldEnum = (typeof VerificationTokenScalarFieldEnum)[keyof typeof VerificationTokenScalarFieldEnum]


  export const CustomerScalarFieldEnum: {
    id: 'id',
    motherName: 'motherName',
    motherPhone: 'motherPhone',
    motherEmail: 'motherEmail',
    address: 'address',
    notes: 'notes',
    deletedAt: 'deletedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CustomerScalarFieldEnum = (typeof CustomerScalarFieldEnum)[keyof typeof CustomerScalarFieldEnum]


  export const BabyScalarFieldEnum: {
    id: 'id',
    customerId: 'customerId',
    name: 'name',
    gender: 'gender',
    birthDate: 'birthDate',
    notes: 'notes',
    deletedAt: 'deletedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BabyScalarFieldEnum = (typeof BabyScalarFieldEnum)[keyof typeof BabyScalarFieldEnum]


  export const TreatmentScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    durationMinutes: 'durationMinutes',
    basePrice: 'basePrice',
    isActive: 'isActive',
    deletedAt: 'deletedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TreatmentScalarFieldEnum = (typeof TreatmentScalarFieldEnum)[keyof typeof TreatmentScalarFieldEnum]


  export const ReservationScalarFieldEnum: {
    id: 'id',
    customerId: 'customerId',
    babyId: 'babyId',
    midwifeId: 'midwifeId',
    startAt: 'startAt',
    endAt: 'endAt',
    status: 'status',
    channel: 'channel',
    serviceType: 'serviceType',
    notes: 'notes',
    cancelledAt: 'cancelledAt',
    completedAt: 'completedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ReservationScalarFieldEnum = (typeof ReservationScalarFieldEnum)[keyof typeof ReservationScalarFieldEnum]


  export const ReservationTreatmentScalarFieldEnum: {
    id: 'id',
    reservationId: 'reservationId',
    treatmentId: 'treatmentId',
    quantity: 'quantity',
    unitPrice: 'unitPrice',
    durationMinutes: 'durationMinutes',
    notes: 'notes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ReservationTreatmentScalarFieldEnum = (typeof ReservationTreatmentScalarFieldEnum)[keyof typeof ReservationTreatmentScalarFieldEnum]


  export const ReservationAuditLogScalarFieldEnum: {
    id: 'id',
    reservationId: 'reservationId',
    action: 'action',
    fromStatus: 'fromStatus',
    toStatus: 'toStatus',
    actorId: 'actorId',
    message: 'message',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ReservationAuditLogScalarFieldEnum = (typeof ReservationAuditLogScalarFieldEnum)[keyof typeof ReservationAuditLogScalarFieldEnum]


  export const NotificationScalarFieldEnum: {
    id: 'id',
    type: 'type',
    status: 'status',
    userId: 'userId',
    reservationId: 'reservationId',
    title: 'title',
    body: 'body',
    readAt: 'readAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const AccountOrderByRelevanceFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    provider: 'provider',
    providerAccountId: 'providerAccountId',
    refresh_token: 'refresh_token',
    access_token: 'access_token',
    token_type: 'token_type',
    scope: 'scope',
    id_token: 'id_token',
    session_state: 'session_state'
  };

  export type AccountOrderByRelevanceFieldEnum = (typeof AccountOrderByRelevanceFieldEnum)[keyof typeof AccountOrderByRelevanceFieldEnum]


  export const SessionOrderByRelevanceFieldEnum: {
    id: 'id',
    sessionToken: 'sessionToken',
    userId: 'userId'
  };

  export type SessionOrderByRelevanceFieldEnum = (typeof SessionOrderByRelevanceFieldEnum)[keyof typeof SessionOrderByRelevanceFieldEnum]


  export const UserOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    image: 'image',
    password: 'password'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const VerificationTokenOrderByRelevanceFieldEnum: {
    identifier: 'identifier',
    token: 'token'
  };

  export type VerificationTokenOrderByRelevanceFieldEnum = (typeof VerificationTokenOrderByRelevanceFieldEnum)[keyof typeof VerificationTokenOrderByRelevanceFieldEnum]


  export const CustomerOrderByRelevanceFieldEnum: {
    id: 'id',
    motherName: 'motherName',
    motherPhone: 'motherPhone',
    motherEmail: 'motherEmail',
    address: 'address',
    notes: 'notes'
  };

  export type CustomerOrderByRelevanceFieldEnum = (typeof CustomerOrderByRelevanceFieldEnum)[keyof typeof CustomerOrderByRelevanceFieldEnum]


  export const BabyOrderByRelevanceFieldEnum: {
    id: 'id',
    customerId: 'customerId',
    name: 'name',
    notes: 'notes'
  };

  export type BabyOrderByRelevanceFieldEnum = (typeof BabyOrderByRelevanceFieldEnum)[keyof typeof BabyOrderByRelevanceFieldEnum]


  export const TreatmentOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description'
  };

  export type TreatmentOrderByRelevanceFieldEnum = (typeof TreatmentOrderByRelevanceFieldEnum)[keyof typeof TreatmentOrderByRelevanceFieldEnum]


  export const ReservationOrderByRelevanceFieldEnum: {
    id: 'id',
    customerId: 'customerId',
    babyId: 'babyId',
    midwifeId: 'midwifeId',
    notes: 'notes'
  };

  export type ReservationOrderByRelevanceFieldEnum = (typeof ReservationOrderByRelevanceFieldEnum)[keyof typeof ReservationOrderByRelevanceFieldEnum]


  export const ReservationTreatmentOrderByRelevanceFieldEnum: {
    id: 'id',
    reservationId: 'reservationId',
    treatmentId: 'treatmentId',
    notes: 'notes'
  };

  export type ReservationTreatmentOrderByRelevanceFieldEnum = (typeof ReservationTreatmentOrderByRelevanceFieldEnum)[keyof typeof ReservationTreatmentOrderByRelevanceFieldEnum]


  export const ReservationAuditLogOrderByRelevanceFieldEnum: {
    id: 'id',
    reservationId: 'reservationId',
    actorId: 'actorId',
    message: 'message'
  };

  export type ReservationAuditLogOrderByRelevanceFieldEnum = (typeof ReservationAuditLogOrderByRelevanceFieldEnum)[keyof typeof ReservationAuditLogOrderByRelevanceFieldEnum]


  export const NotificationOrderByRelevanceFieldEnum: {
    id: 'id',
    userId: 'userId',
    reservationId: 'reservationId',
    title: 'title',
    body: 'body'
  };

  export type NotificationOrderByRelevanceFieldEnum = (typeof NotificationOrderByRelevanceFieldEnum)[keyof typeof NotificationOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'BabyGender'
   */
  export type EnumBabyGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BabyGender'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'ReservationStatus'
   */
  export type EnumReservationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ReservationStatus'>
    


  /**
   * Reference to a field of type 'ReservationChannel'
   */
  export type EnumReservationChannelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ReservationChannel'>
    


  /**
   * Reference to a field of type 'ServiceType'
   */
  export type EnumServiceTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ServiceType'>
    


  /**
   * Reference to a field of type 'ReservationAuditAction'
   */
  export type EnumReservationAuditActionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ReservationAuditAction'>
    


  /**
   * Reference to a field of type 'NotificationType'
   */
  export type EnumNotificationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NotificationType'>
    


  /**
   * Reference to a field of type 'NotificationStatus'
   */
  export type EnumNotificationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NotificationStatus'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    refresh_token_expires_in?: IntNullableFilter<"Account"> | number | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    refresh_token_expires_in?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    _relevance?: AccountOrderByRelevanceInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    provider_providerAccountId?: AccountProviderProviderAccountIdCompoundUniqueInput
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    refresh_token_expires_in?: IntNullableFilter<"Account"> | number | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "provider_providerAccountId">

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    refresh_token_expires_in?: SortOrderInput | SortOrder
    _count?: AccountCountOrderByAggregateInput
    _avg?: AccountAvgOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
    _sum?: AccountSumOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Account"> | string
    userId?: StringWithAggregatesFilter<"Account"> | string
    type?: StringWithAggregatesFilter<"Account"> | string
    provider?: StringWithAggregatesFilter<"Account"> | string
    providerAccountId?: StringWithAggregatesFilter<"Account"> | string
    refresh_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    access_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    expires_at?: IntNullableWithAggregatesFilter<"Account"> | number | null
    token_type?: StringNullableWithAggregatesFilter<"Account"> | string | null
    scope?: StringNullableWithAggregatesFilter<"Account"> | string | null
    id_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    session_state?: StringNullableWithAggregatesFilter<"Account"> | string | null
    refresh_token_expires_in?: IntNullableWithAggregatesFilter<"Account"> | number | null
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    user?: UserOrderByWithRelationInput
    _relevance?: SessionOrderByRelevanceInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sessionToken?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "sessionToken">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    sessionToken?: StringWithAggregatesFilter<"Session"> | string
    userId?: StringWithAggregatesFilter<"Session"> | string
    expires?: DateTimeWithAggregatesFilter<"Session"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    email?: StringNullableFilter<"User"> | string | null
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    image?: StringNullableFilter<"User"> | string | null
    password?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    accounts?: AccountListRelationFilter
    sessions?: SessionListRelationFilter
    midwifeReservations?: ReservationListRelationFilter
    reservationAuditLogs?: ReservationAuditLogListRelationFilter
    notifications?: NotificationListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    emailVerified?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    role?: SortOrder
    accounts?: AccountOrderByRelationAggregateInput
    sessions?: SessionOrderByRelationAggregateInput
    midwifeReservations?: ReservationOrderByRelationAggregateInput
    reservationAuditLogs?: ReservationAuditLogOrderByRelationAggregateInput
    notifications?: NotificationOrderByRelationAggregateInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    image?: StringNullableFilter<"User"> | string | null
    password?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    accounts?: AccountListRelationFilter
    sessions?: SessionListRelationFilter
    midwifeReservations?: ReservationListRelationFilter
    reservationAuditLogs?: ReservationAuditLogListRelationFilter
    notifications?: NotificationListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    emailVerified?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    role?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    emailVerified?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    password?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
  }

  export type VerificationTokenWhereInput = {
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    identifier?: StringFilter<"VerificationToken"> | string
    token?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }

  export type VerificationTokenOrderByWithRelationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    _relevance?: VerificationTokenOrderByRelevanceInput
  }

  export type VerificationTokenWhereUniqueInput = Prisma.AtLeast<{
    token?: string
    identifier_token?: VerificationTokenIdentifierTokenCompoundUniqueInput
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    identifier?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }, "token" | "identifier_token">

  export type VerificationTokenOrderByWithAggregationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    _count?: VerificationTokenCountOrderByAggregateInput
    _max?: VerificationTokenMaxOrderByAggregateInput
    _min?: VerificationTokenMinOrderByAggregateInput
  }

  export type VerificationTokenScalarWhereWithAggregatesInput = {
    AND?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    OR?: VerificationTokenScalarWhereWithAggregatesInput[]
    NOT?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    identifier?: StringWithAggregatesFilter<"VerificationToken"> | string
    token?: StringWithAggregatesFilter<"VerificationToken"> | string
    expires?: DateTimeWithAggregatesFilter<"VerificationToken"> | Date | string
  }

  export type CustomerWhereInput = {
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    id?: StringFilter<"Customer"> | string
    motherName?: StringFilter<"Customer"> | string
    motherPhone?: StringFilter<"Customer"> | string
    motherEmail?: StringNullableFilter<"Customer"> | string | null
    address?: StringNullableFilter<"Customer"> | string | null
    notes?: StringNullableFilter<"Customer"> | string | null
    deletedAt?: DateTimeNullableFilter<"Customer"> | Date | string | null
    createdAt?: DateTimeFilter<"Customer"> | Date | string
    updatedAt?: DateTimeFilter<"Customer"> | Date | string
    babies?: BabyListRelationFilter
    reservations?: ReservationListRelationFilter
  }

  export type CustomerOrderByWithRelationInput = {
    id?: SortOrder
    motherName?: SortOrder
    motherPhone?: SortOrder
    motherEmail?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    babies?: BabyOrderByRelationAggregateInput
    reservations?: ReservationOrderByRelationAggregateInput
    _relevance?: CustomerOrderByRelevanceInput
  }

  export type CustomerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    motherName?: StringFilter<"Customer"> | string
    motherPhone?: StringFilter<"Customer"> | string
    motherEmail?: StringNullableFilter<"Customer"> | string | null
    address?: StringNullableFilter<"Customer"> | string | null
    notes?: StringNullableFilter<"Customer"> | string | null
    deletedAt?: DateTimeNullableFilter<"Customer"> | Date | string | null
    createdAt?: DateTimeFilter<"Customer"> | Date | string
    updatedAt?: DateTimeFilter<"Customer"> | Date | string
    babies?: BabyListRelationFilter
    reservations?: ReservationListRelationFilter
  }, "id">

  export type CustomerOrderByWithAggregationInput = {
    id?: SortOrder
    motherName?: SortOrder
    motherPhone?: SortOrder
    motherEmail?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CustomerCountOrderByAggregateInput
    _max?: CustomerMaxOrderByAggregateInput
    _min?: CustomerMinOrderByAggregateInput
  }

  export type CustomerScalarWhereWithAggregatesInput = {
    AND?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    OR?: CustomerScalarWhereWithAggregatesInput[]
    NOT?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Customer"> | string
    motherName?: StringWithAggregatesFilter<"Customer"> | string
    motherPhone?: StringWithAggregatesFilter<"Customer"> | string
    motherEmail?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    address?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    notes?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Customer"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Customer"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Customer"> | Date | string
  }

  export type BabyWhereInput = {
    AND?: BabyWhereInput | BabyWhereInput[]
    OR?: BabyWhereInput[]
    NOT?: BabyWhereInput | BabyWhereInput[]
    id?: StringFilter<"Baby"> | string
    customerId?: StringFilter<"Baby"> | string
    name?: StringFilter<"Baby"> | string
    gender?: EnumBabyGenderNullableFilter<"Baby"> | $Enums.BabyGender | null
    birthDate?: DateTimeNullableFilter<"Baby"> | Date | string | null
    notes?: StringNullableFilter<"Baby"> | string | null
    deletedAt?: DateTimeNullableFilter<"Baby"> | Date | string | null
    createdAt?: DateTimeFilter<"Baby"> | Date | string
    updatedAt?: DateTimeFilter<"Baby"> | Date | string
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
    reservations?: ReservationListRelationFilter
  }

  export type BabyOrderByWithRelationInput = {
    id?: SortOrder
    customerId?: SortOrder
    name?: SortOrder
    gender?: SortOrderInput | SortOrder
    birthDate?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    customer?: CustomerOrderByWithRelationInput
    reservations?: ReservationOrderByRelationAggregateInput
    _relevance?: BabyOrderByRelevanceInput
  }

  export type BabyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BabyWhereInput | BabyWhereInput[]
    OR?: BabyWhereInput[]
    NOT?: BabyWhereInput | BabyWhereInput[]
    customerId?: StringFilter<"Baby"> | string
    name?: StringFilter<"Baby"> | string
    gender?: EnumBabyGenderNullableFilter<"Baby"> | $Enums.BabyGender | null
    birthDate?: DateTimeNullableFilter<"Baby"> | Date | string | null
    notes?: StringNullableFilter<"Baby"> | string | null
    deletedAt?: DateTimeNullableFilter<"Baby"> | Date | string | null
    createdAt?: DateTimeFilter<"Baby"> | Date | string
    updatedAt?: DateTimeFilter<"Baby"> | Date | string
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
    reservations?: ReservationListRelationFilter
  }, "id">

  export type BabyOrderByWithAggregationInput = {
    id?: SortOrder
    customerId?: SortOrder
    name?: SortOrder
    gender?: SortOrderInput | SortOrder
    birthDate?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BabyCountOrderByAggregateInput
    _max?: BabyMaxOrderByAggregateInput
    _min?: BabyMinOrderByAggregateInput
  }

  export type BabyScalarWhereWithAggregatesInput = {
    AND?: BabyScalarWhereWithAggregatesInput | BabyScalarWhereWithAggregatesInput[]
    OR?: BabyScalarWhereWithAggregatesInput[]
    NOT?: BabyScalarWhereWithAggregatesInput | BabyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Baby"> | string
    customerId?: StringWithAggregatesFilter<"Baby"> | string
    name?: StringWithAggregatesFilter<"Baby"> | string
    gender?: EnumBabyGenderNullableWithAggregatesFilter<"Baby"> | $Enums.BabyGender | null
    birthDate?: DateTimeNullableWithAggregatesFilter<"Baby"> | Date | string | null
    notes?: StringNullableWithAggregatesFilter<"Baby"> | string | null
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Baby"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Baby"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Baby"> | Date | string
  }

  export type TreatmentWhereInput = {
    AND?: TreatmentWhereInput | TreatmentWhereInput[]
    OR?: TreatmentWhereInput[]
    NOT?: TreatmentWhereInput | TreatmentWhereInput[]
    id?: StringFilter<"Treatment"> | string
    name?: StringFilter<"Treatment"> | string
    description?: StringNullableFilter<"Treatment"> | string | null
    durationMinutes?: IntFilter<"Treatment"> | number
    basePrice?: DecimalFilter<"Treatment"> | Decimal | DecimalJsLike | number | string
    isActive?: BoolFilter<"Treatment"> | boolean
    deletedAt?: DateTimeNullableFilter<"Treatment"> | Date | string | null
    createdAt?: DateTimeFilter<"Treatment"> | Date | string
    updatedAt?: DateTimeFilter<"Treatment"> | Date | string
    reservationItems?: ReservationTreatmentListRelationFilter
  }

  export type TreatmentOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    durationMinutes?: SortOrder
    basePrice?: SortOrder
    isActive?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    reservationItems?: ReservationTreatmentOrderByRelationAggregateInput
    _relevance?: TreatmentOrderByRelevanceInput
  }

  export type TreatmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TreatmentWhereInput | TreatmentWhereInput[]
    OR?: TreatmentWhereInput[]
    NOT?: TreatmentWhereInput | TreatmentWhereInput[]
    name?: StringFilter<"Treatment"> | string
    description?: StringNullableFilter<"Treatment"> | string | null
    durationMinutes?: IntFilter<"Treatment"> | number
    basePrice?: DecimalFilter<"Treatment"> | Decimal | DecimalJsLike | number | string
    isActive?: BoolFilter<"Treatment"> | boolean
    deletedAt?: DateTimeNullableFilter<"Treatment"> | Date | string | null
    createdAt?: DateTimeFilter<"Treatment"> | Date | string
    updatedAt?: DateTimeFilter<"Treatment"> | Date | string
    reservationItems?: ReservationTreatmentListRelationFilter
  }, "id">

  export type TreatmentOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    durationMinutes?: SortOrder
    basePrice?: SortOrder
    isActive?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TreatmentCountOrderByAggregateInput
    _avg?: TreatmentAvgOrderByAggregateInput
    _max?: TreatmentMaxOrderByAggregateInput
    _min?: TreatmentMinOrderByAggregateInput
    _sum?: TreatmentSumOrderByAggregateInput
  }

  export type TreatmentScalarWhereWithAggregatesInput = {
    AND?: TreatmentScalarWhereWithAggregatesInput | TreatmentScalarWhereWithAggregatesInput[]
    OR?: TreatmentScalarWhereWithAggregatesInput[]
    NOT?: TreatmentScalarWhereWithAggregatesInput | TreatmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Treatment"> | string
    name?: StringWithAggregatesFilter<"Treatment"> | string
    description?: StringNullableWithAggregatesFilter<"Treatment"> | string | null
    durationMinutes?: IntWithAggregatesFilter<"Treatment"> | number
    basePrice?: DecimalWithAggregatesFilter<"Treatment"> | Decimal | DecimalJsLike | number | string
    isActive?: BoolWithAggregatesFilter<"Treatment"> | boolean
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Treatment"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Treatment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Treatment"> | Date | string
  }

  export type ReservationWhereInput = {
    AND?: ReservationWhereInput | ReservationWhereInput[]
    OR?: ReservationWhereInput[]
    NOT?: ReservationWhereInput | ReservationWhereInput[]
    id?: StringFilter<"Reservation"> | string
    customerId?: StringFilter<"Reservation"> | string
    babyId?: StringNullableFilter<"Reservation"> | string | null
    midwifeId?: StringNullableFilter<"Reservation"> | string | null
    startAt?: DateTimeFilter<"Reservation"> | Date | string
    endAt?: DateTimeFilter<"Reservation"> | Date | string
    status?: EnumReservationStatusFilter<"Reservation"> | $Enums.ReservationStatus
    channel?: EnumReservationChannelFilter<"Reservation"> | $Enums.ReservationChannel
    serviceType?: EnumServiceTypeFilter<"Reservation"> | $Enums.ServiceType
    notes?: StringNullableFilter<"Reservation"> | string | null
    cancelledAt?: DateTimeNullableFilter<"Reservation"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"Reservation"> | Date | string | null
    createdAt?: DateTimeFilter<"Reservation"> | Date | string
    updatedAt?: DateTimeFilter<"Reservation"> | Date | string
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
    baby?: XOR<BabyNullableScalarRelationFilter, BabyWhereInput> | null
    midwife?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    items?: ReservationTreatmentListRelationFilter
    auditLogs?: ReservationAuditLogListRelationFilter
    notifications?: NotificationListRelationFilter
  }

  export type ReservationOrderByWithRelationInput = {
    id?: SortOrder
    customerId?: SortOrder
    babyId?: SortOrderInput | SortOrder
    midwifeId?: SortOrderInput | SortOrder
    startAt?: SortOrder
    endAt?: SortOrder
    status?: SortOrder
    channel?: SortOrder
    serviceType?: SortOrder
    notes?: SortOrderInput | SortOrder
    cancelledAt?: SortOrderInput | SortOrder
    completedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    customer?: CustomerOrderByWithRelationInput
    baby?: BabyOrderByWithRelationInput
    midwife?: UserOrderByWithRelationInput
    items?: ReservationTreatmentOrderByRelationAggregateInput
    auditLogs?: ReservationAuditLogOrderByRelationAggregateInput
    notifications?: NotificationOrderByRelationAggregateInput
    _relevance?: ReservationOrderByRelevanceInput
  }

  export type ReservationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    midwifeId_startAt?: ReservationMidwifeIdStartAtCompoundUniqueInput
    AND?: ReservationWhereInput | ReservationWhereInput[]
    OR?: ReservationWhereInput[]
    NOT?: ReservationWhereInput | ReservationWhereInput[]
    customerId?: StringFilter<"Reservation"> | string
    babyId?: StringNullableFilter<"Reservation"> | string | null
    midwifeId?: StringNullableFilter<"Reservation"> | string | null
    startAt?: DateTimeFilter<"Reservation"> | Date | string
    endAt?: DateTimeFilter<"Reservation"> | Date | string
    status?: EnumReservationStatusFilter<"Reservation"> | $Enums.ReservationStatus
    channel?: EnumReservationChannelFilter<"Reservation"> | $Enums.ReservationChannel
    serviceType?: EnumServiceTypeFilter<"Reservation"> | $Enums.ServiceType
    notes?: StringNullableFilter<"Reservation"> | string | null
    cancelledAt?: DateTimeNullableFilter<"Reservation"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"Reservation"> | Date | string | null
    createdAt?: DateTimeFilter<"Reservation"> | Date | string
    updatedAt?: DateTimeFilter<"Reservation"> | Date | string
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
    baby?: XOR<BabyNullableScalarRelationFilter, BabyWhereInput> | null
    midwife?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    items?: ReservationTreatmentListRelationFilter
    auditLogs?: ReservationAuditLogListRelationFilter
    notifications?: NotificationListRelationFilter
  }, "id" | "midwifeId_startAt">

  export type ReservationOrderByWithAggregationInput = {
    id?: SortOrder
    customerId?: SortOrder
    babyId?: SortOrderInput | SortOrder
    midwifeId?: SortOrderInput | SortOrder
    startAt?: SortOrder
    endAt?: SortOrder
    status?: SortOrder
    channel?: SortOrder
    serviceType?: SortOrder
    notes?: SortOrderInput | SortOrder
    cancelledAt?: SortOrderInput | SortOrder
    completedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ReservationCountOrderByAggregateInput
    _max?: ReservationMaxOrderByAggregateInput
    _min?: ReservationMinOrderByAggregateInput
  }

  export type ReservationScalarWhereWithAggregatesInput = {
    AND?: ReservationScalarWhereWithAggregatesInput | ReservationScalarWhereWithAggregatesInput[]
    OR?: ReservationScalarWhereWithAggregatesInput[]
    NOT?: ReservationScalarWhereWithAggregatesInput | ReservationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Reservation"> | string
    customerId?: StringWithAggregatesFilter<"Reservation"> | string
    babyId?: StringNullableWithAggregatesFilter<"Reservation"> | string | null
    midwifeId?: StringNullableWithAggregatesFilter<"Reservation"> | string | null
    startAt?: DateTimeWithAggregatesFilter<"Reservation"> | Date | string
    endAt?: DateTimeWithAggregatesFilter<"Reservation"> | Date | string
    status?: EnumReservationStatusWithAggregatesFilter<"Reservation"> | $Enums.ReservationStatus
    channel?: EnumReservationChannelWithAggregatesFilter<"Reservation"> | $Enums.ReservationChannel
    serviceType?: EnumServiceTypeWithAggregatesFilter<"Reservation"> | $Enums.ServiceType
    notes?: StringNullableWithAggregatesFilter<"Reservation"> | string | null
    cancelledAt?: DateTimeNullableWithAggregatesFilter<"Reservation"> | Date | string | null
    completedAt?: DateTimeNullableWithAggregatesFilter<"Reservation"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Reservation"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Reservation"> | Date | string
  }

  export type ReservationTreatmentWhereInput = {
    AND?: ReservationTreatmentWhereInput | ReservationTreatmentWhereInput[]
    OR?: ReservationTreatmentWhereInput[]
    NOT?: ReservationTreatmentWhereInput | ReservationTreatmentWhereInput[]
    id?: StringFilter<"ReservationTreatment"> | string
    reservationId?: StringFilter<"ReservationTreatment"> | string
    treatmentId?: StringFilter<"ReservationTreatment"> | string
    quantity?: IntFilter<"ReservationTreatment"> | number
    unitPrice?: DecimalFilter<"ReservationTreatment"> | Decimal | DecimalJsLike | number | string
    durationMinutes?: IntFilter<"ReservationTreatment"> | number
    notes?: StringNullableFilter<"ReservationTreatment"> | string | null
    createdAt?: DateTimeFilter<"ReservationTreatment"> | Date | string
    updatedAt?: DateTimeFilter<"ReservationTreatment"> | Date | string
    reservation?: XOR<ReservationScalarRelationFilter, ReservationWhereInput>
    treatment?: XOR<TreatmentScalarRelationFilter, TreatmentWhereInput>
  }

  export type ReservationTreatmentOrderByWithRelationInput = {
    id?: SortOrder
    reservationId?: SortOrder
    treatmentId?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    durationMinutes?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    reservation?: ReservationOrderByWithRelationInput
    treatment?: TreatmentOrderByWithRelationInput
    _relevance?: ReservationTreatmentOrderByRelevanceInput
  }

  export type ReservationTreatmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    reservationId_treatmentId?: ReservationTreatmentReservationIdTreatmentIdCompoundUniqueInput
    AND?: ReservationTreatmentWhereInput | ReservationTreatmentWhereInput[]
    OR?: ReservationTreatmentWhereInput[]
    NOT?: ReservationTreatmentWhereInput | ReservationTreatmentWhereInput[]
    reservationId?: StringFilter<"ReservationTreatment"> | string
    treatmentId?: StringFilter<"ReservationTreatment"> | string
    quantity?: IntFilter<"ReservationTreatment"> | number
    unitPrice?: DecimalFilter<"ReservationTreatment"> | Decimal | DecimalJsLike | number | string
    durationMinutes?: IntFilter<"ReservationTreatment"> | number
    notes?: StringNullableFilter<"ReservationTreatment"> | string | null
    createdAt?: DateTimeFilter<"ReservationTreatment"> | Date | string
    updatedAt?: DateTimeFilter<"ReservationTreatment"> | Date | string
    reservation?: XOR<ReservationScalarRelationFilter, ReservationWhereInput>
    treatment?: XOR<TreatmentScalarRelationFilter, TreatmentWhereInput>
  }, "id" | "reservationId_treatmentId">

  export type ReservationTreatmentOrderByWithAggregationInput = {
    id?: SortOrder
    reservationId?: SortOrder
    treatmentId?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    durationMinutes?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ReservationTreatmentCountOrderByAggregateInput
    _avg?: ReservationTreatmentAvgOrderByAggregateInput
    _max?: ReservationTreatmentMaxOrderByAggregateInput
    _min?: ReservationTreatmentMinOrderByAggregateInput
    _sum?: ReservationTreatmentSumOrderByAggregateInput
  }

  export type ReservationTreatmentScalarWhereWithAggregatesInput = {
    AND?: ReservationTreatmentScalarWhereWithAggregatesInput | ReservationTreatmentScalarWhereWithAggregatesInput[]
    OR?: ReservationTreatmentScalarWhereWithAggregatesInput[]
    NOT?: ReservationTreatmentScalarWhereWithAggregatesInput | ReservationTreatmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ReservationTreatment"> | string
    reservationId?: StringWithAggregatesFilter<"ReservationTreatment"> | string
    treatmentId?: StringWithAggregatesFilter<"ReservationTreatment"> | string
    quantity?: IntWithAggregatesFilter<"ReservationTreatment"> | number
    unitPrice?: DecimalWithAggregatesFilter<"ReservationTreatment"> | Decimal | DecimalJsLike | number | string
    durationMinutes?: IntWithAggregatesFilter<"ReservationTreatment"> | number
    notes?: StringNullableWithAggregatesFilter<"ReservationTreatment"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ReservationTreatment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ReservationTreatment"> | Date | string
  }

  export type ReservationAuditLogWhereInput = {
    AND?: ReservationAuditLogWhereInput | ReservationAuditLogWhereInput[]
    OR?: ReservationAuditLogWhereInput[]
    NOT?: ReservationAuditLogWhereInput | ReservationAuditLogWhereInput[]
    id?: StringFilter<"ReservationAuditLog"> | string
    reservationId?: StringFilter<"ReservationAuditLog"> | string
    action?: EnumReservationAuditActionFilter<"ReservationAuditLog"> | $Enums.ReservationAuditAction
    fromStatus?: EnumReservationStatusNullableFilter<"ReservationAuditLog"> | $Enums.ReservationStatus | null
    toStatus?: EnumReservationStatusNullableFilter<"ReservationAuditLog"> | $Enums.ReservationStatus | null
    actorId?: StringNullableFilter<"ReservationAuditLog"> | string | null
    message?: StringNullableFilter<"ReservationAuditLog"> | string | null
    createdAt?: DateTimeFilter<"ReservationAuditLog"> | Date | string
    updatedAt?: DateTimeFilter<"ReservationAuditLog"> | Date | string
    reservation?: XOR<ReservationScalarRelationFilter, ReservationWhereInput>
    actor?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type ReservationAuditLogOrderByWithRelationInput = {
    id?: SortOrder
    reservationId?: SortOrder
    action?: SortOrder
    fromStatus?: SortOrderInput | SortOrder
    toStatus?: SortOrderInput | SortOrder
    actorId?: SortOrderInput | SortOrder
    message?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    reservation?: ReservationOrderByWithRelationInput
    actor?: UserOrderByWithRelationInput
    _relevance?: ReservationAuditLogOrderByRelevanceInput
  }

  export type ReservationAuditLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ReservationAuditLogWhereInput | ReservationAuditLogWhereInput[]
    OR?: ReservationAuditLogWhereInput[]
    NOT?: ReservationAuditLogWhereInput | ReservationAuditLogWhereInput[]
    reservationId?: StringFilter<"ReservationAuditLog"> | string
    action?: EnumReservationAuditActionFilter<"ReservationAuditLog"> | $Enums.ReservationAuditAction
    fromStatus?: EnumReservationStatusNullableFilter<"ReservationAuditLog"> | $Enums.ReservationStatus | null
    toStatus?: EnumReservationStatusNullableFilter<"ReservationAuditLog"> | $Enums.ReservationStatus | null
    actorId?: StringNullableFilter<"ReservationAuditLog"> | string | null
    message?: StringNullableFilter<"ReservationAuditLog"> | string | null
    createdAt?: DateTimeFilter<"ReservationAuditLog"> | Date | string
    updatedAt?: DateTimeFilter<"ReservationAuditLog"> | Date | string
    reservation?: XOR<ReservationScalarRelationFilter, ReservationWhereInput>
    actor?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type ReservationAuditLogOrderByWithAggregationInput = {
    id?: SortOrder
    reservationId?: SortOrder
    action?: SortOrder
    fromStatus?: SortOrderInput | SortOrder
    toStatus?: SortOrderInput | SortOrder
    actorId?: SortOrderInput | SortOrder
    message?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ReservationAuditLogCountOrderByAggregateInput
    _max?: ReservationAuditLogMaxOrderByAggregateInput
    _min?: ReservationAuditLogMinOrderByAggregateInput
  }

  export type ReservationAuditLogScalarWhereWithAggregatesInput = {
    AND?: ReservationAuditLogScalarWhereWithAggregatesInput | ReservationAuditLogScalarWhereWithAggregatesInput[]
    OR?: ReservationAuditLogScalarWhereWithAggregatesInput[]
    NOT?: ReservationAuditLogScalarWhereWithAggregatesInput | ReservationAuditLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ReservationAuditLog"> | string
    reservationId?: StringWithAggregatesFilter<"ReservationAuditLog"> | string
    action?: EnumReservationAuditActionWithAggregatesFilter<"ReservationAuditLog"> | $Enums.ReservationAuditAction
    fromStatus?: EnumReservationStatusNullableWithAggregatesFilter<"ReservationAuditLog"> | $Enums.ReservationStatus | null
    toStatus?: EnumReservationStatusNullableWithAggregatesFilter<"ReservationAuditLog"> | $Enums.ReservationStatus | null
    actorId?: StringNullableWithAggregatesFilter<"ReservationAuditLog"> | string | null
    message?: StringNullableWithAggregatesFilter<"ReservationAuditLog"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ReservationAuditLog"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ReservationAuditLog"> | Date | string
  }

  export type NotificationWhereInput = {
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    id?: StringFilter<"Notification"> | string
    type?: EnumNotificationTypeFilter<"Notification"> | $Enums.NotificationType
    status?: EnumNotificationStatusFilter<"Notification"> | $Enums.NotificationStatus
    userId?: StringNullableFilter<"Notification"> | string | null
    reservationId?: StringNullableFilter<"Notification"> | string | null
    title?: StringFilter<"Notification"> | string
    body?: StringFilter<"Notification"> | string
    readAt?: DateTimeNullableFilter<"Notification"> | Date | string | null
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    updatedAt?: DateTimeFilter<"Notification"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    reservation?: XOR<ReservationNullableScalarRelationFilter, ReservationWhereInput> | null
  }

  export type NotificationOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    status?: SortOrder
    userId?: SortOrderInput | SortOrder
    reservationId?: SortOrderInput | SortOrder
    title?: SortOrder
    body?: SortOrder
    readAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    reservation?: ReservationOrderByWithRelationInput
    _relevance?: NotificationOrderByRelevanceInput
  }

  export type NotificationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    type?: EnumNotificationTypeFilter<"Notification"> | $Enums.NotificationType
    status?: EnumNotificationStatusFilter<"Notification"> | $Enums.NotificationStatus
    userId?: StringNullableFilter<"Notification"> | string | null
    reservationId?: StringNullableFilter<"Notification"> | string | null
    title?: StringFilter<"Notification"> | string
    body?: StringFilter<"Notification"> | string
    readAt?: DateTimeNullableFilter<"Notification"> | Date | string | null
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    updatedAt?: DateTimeFilter<"Notification"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    reservation?: XOR<ReservationNullableScalarRelationFilter, ReservationWhereInput> | null
  }, "id">

  export type NotificationOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    status?: SortOrder
    userId?: SortOrderInput | SortOrder
    reservationId?: SortOrderInput | SortOrder
    title?: SortOrder
    body?: SortOrder
    readAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: NotificationCountOrderByAggregateInput
    _max?: NotificationMaxOrderByAggregateInput
    _min?: NotificationMinOrderByAggregateInput
  }

  export type NotificationScalarWhereWithAggregatesInput = {
    AND?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    OR?: NotificationScalarWhereWithAggregatesInput[]
    NOT?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Notification"> | string
    type?: EnumNotificationTypeWithAggregatesFilter<"Notification"> | $Enums.NotificationType
    status?: EnumNotificationStatusWithAggregatesFilter<"Notification"> | $Enums.NotificationStatus
    userId?: StringNullableWithAggregatesFilter<"Notification"> | string | null
    reservationId?: StringNullableWithAggregatesFilter<"Notification"> | string | null
    title?: StringWithAggregatesFilter<"Notification"> | string
    body?: StringWithAggregatesFilter<"Notification"> | string
    readAt?: DateTimeNullableWithAggregatesFilter<"Notification"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Notification"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Notification"> | Date | string
  }

  export type AccountCreateInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    refresh_token_expires_in?: number | null
    user: UserCreateNestedOneWithoutAccountsInput
  }

  export type AccountUncheckedCreateInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    refresh_token_expires_in?: number | null
  }

  export type AccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token_expires_in?: NullableIntFieldUpdateOperationsInput | number | null
    user?: UserUpdateOneRequiredWithoutAccountsNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token_expires_in?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AccountCreateManyInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    refresh_token_expires_in?: number | null
  }

  export type AccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token_expires_in?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token_expires_in?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type SessionCreateInput = {
    id?: string
    sessionToken: string
    expires: Date | string
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id?: string
    sessionToken: string
    userId: string
    expires: Date | string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyInput = {
    id?: string
    sessionToken: string
    userId: string
    expires: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    password?: string | null
    role?: $Enums.Role
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    midwifeReservations?: ReservationCreateNestedManyWithoutMidwifeInput
    reservationAuditLogs?: ReservationAuditLogCreateNestedManyWithoutActorInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    password?: string | null
    role?: $Enums.Role
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    midwifeReservations?: ReservationUncheckedCreateNestedManyWithoutMidwifeInput
    reservationAuditLogs?: ReservationAuditLogUncheckedCreateNestedManyWithoutActorInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    midwifeReservations?: ReservationUpdateManyWithoutMidwifeNestedInput
    reservationAuditLogs?: ReservationAuditLogUpdateManyWithoutActorNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    midwifeReservations?: ReservationUncheckedUpdateManyWithoutMidwifeNestedInput
    reservationAuditLogs?: ReservationAuditLogUncheckedUpdateManyWithoutActorNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    password?: string | null
    role?: $Enums.Role
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type VerificationTokenCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUncheckedCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenCreateManyInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateManyMutationInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateManyInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerCreateInput = {
    id?: string
    motherName: string
    motherPhone: string
    motherEmail?: string | null
    address?: string | null
    notes?: string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    babies?: BabyCreateNestedManyWithoutCustomerInput
    reservations?: ReservationCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateInput = {
    id?: string
    motherName: string
    motherPhone: string
    motherEmail?: string | null
    address?: string | null
    notes?: string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    babies?: BabyUncheckedCreateNestedManyWithoutCustomerInput
    reservations?: ReservationUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    motherName?: StringFieldUpdateOperationsInput | string
    motherPhone?: StringFieldUpdateOperationsInput | string
    motherEmail?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    babies?: BabyUpdateManyWithoutCustomerNestedInput
    reservations?: ReservationUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    motherName?: StringFieldUpdateOperationsInput | string
    motherPhone?: StringFieldUpdateOperationsInput | string
    motherEmail?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    babies?: BabyUncheckedUpdateManyWithoutCustomerNestedInput
    reservations?: ReservationUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerCreateManyInput = {
    id?: string
    motherName: string
    motherPhone: string
    motherEmail?: string | null
    address?: string | null
    notes?: string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CustomerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    motherName?: StringFieldUpdateOperationsInput | string
    motherPhone?: StringFieldUpdateOperationsInput | string
    motherEmail?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    motherName?: StringFieldUpdateOperationsInput | string
    motherPhone?: StringFieldUpdateOperationsInput | string
    motherEmail?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BabyCreateInput = {
    id?: string
    name: string
    gender?: $Enums.BabyGender | null
    birthDate?: Date | string | null
    notes?: string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    customer: CustomerCreateNestedOneWithoutBabiesInput
    reservations?: ReservationCreateNestedManyWithoutBabyInput
  }

  export type BabyUncheckedCreateInput = {
    id?: string
    customerId: string
    name: string
    gender?: $Enums.BabyGender | null
    birthDate?: Date | string | null
    notes?: string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    reservations?: ReservationUncheckedCreateNestedManyWithoutBabyInput
  }

  export type BabyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: NullableEnumBabyGenderFieldUpdateOperationsInput | $Enums.BabyGender | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneRequiredWithoutBabiesNestedInput
    reservations?: ReservationUpdateManyWithoutBabyNestedInput
  }

  export type BabyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: NullableEnumBabyGenderFieldUpdateOperationsInput | $Enums.BabyGender | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reservations?: ReservationUncheckedUpdateManyWithoutBabyNestedInput
  }

  export type BabyCreateManyInput = {
    id?: string
    customerId: string
    name: string
    gender?: $Enums.BabyGender | null
    birthDate?: Date | string | null
    notes?: string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BabyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: NullableEnumBabyGenderFieldUpdateOperationsInput | $Enums.BabyGender | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BabyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: NullableEnumBabyGenderFieldUpdateOperationsInput | $Enums.BabyGender | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TreatmentCreateInput = {
    id?: string
    name: string
    description?: string | null
    durationMinutes: number
    basePrice: Decimal | DecimalJsLike | number | string
    isActive?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    reservationItems?: ReservationTreatmentCreateNestedManyWithoutTreatmentInput
  }

  export type TreatmentUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    durationMinutes: number
    basePrice: Decimal | DecimalJsLike | number | string
    isActive?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    reservationItems?: ReservationTreatmentUncheckedCreateNestedManyWithoutTreatmentInput
  }

  export type TreatmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    durationMinutes?: IntFieldUpdateOperationsInput | number
    basePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reservationItems?: ReservationTreatmentUpdateManyWithoutTreatmentNestedInput
  }

  export type TreatmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    durationMinutes?: IntFieldUpdateOperationsInput | number
    basePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reservationItems?: ReservationTreatmentUncheckedUpdateManyWithoutTreatmentNestedInput
  }

  export type TreatmentCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    durationMinutes: number
    basePrice: Decimal | DecimalJsLike | number | string
    isActive?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TreatmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    durationMinutes?: IntFieldUpdateOperationsInput | number
    basePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TreatmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    durationMinutes?: IntFieldUpdateOperationsInput | number
    basePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservationCreateInput = {
    id?: string
    startAt: Date | string
    endAt: Date | string
    status?: $Enums.ReservationStatus
    channel?: $Enums.ReservationChannel
    serviceType?: $Enums.ServiceType
    notes?: string | null
    cancelledAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    customer: CustomerCreateNestedOneWithoutReservationsInput
    baby?: BabyCreateNestedOneWithoutReservationsInput
    midwife?: UserCreateNestedOneWithoutMidwifeReservationsInput
    items?: ReservationTreatmentCreateNestedManyWithoutReservationInput
    auditLogs?: ReservationAuditLogCreateNestedManyWithoutReservationInput
    notifications?: NotificationCreateNestedManyWithoutReservationInput
  }

  export type ReservationUncheckedCreateInput = {
    id?: string
    customerId: string
    babyId?: string | null
    midwifeId?: string | null
    startAt: Date | string
    endAt: Date | string
    status?: $Enums.ReservationStatus
    channel?: $Enums.ReservationChannel
    serviceType?: $Enums.ServiceType
    notes?: string | null
    cancelledAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: ReservationTreatmentUncheckedCreateNestedManyWithoutReservationInput
    auditLogs?: ReservationAuditLogUncheckedCreateNestedManyWithoutReservationInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutReservationInput
  }

  export type ReservationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    channel?: EnumReservationChannelFieldUpdateOperationsInput | $Enums.ReservationChannel
    serviceType?: EnumServiceTypeFieldUpdateOperationsInput | $Enums.ServiceType
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneRequiredWithoutReservationsNestedInput
    baby?: BabyUpdateOneWithoutReservationsNestedInput
    midwife?: UserUpdateOneWithoutMidwifeReservationsNestedInput
    items?: ReservationTreatmentUpdateManyWithoutReservationNestedInput
    auditLogs?: ReservationAuditLogUpdateManyWithoutReservationNestedInput
    notifications?: NotificationUpdateManyWithoutReservationNestedInput
  }

  export type ReservationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    babyId?: NullableStringFieldUpdateOperationsInput | string | null
    midwifeId?: NullableStringFieldUpdateOperationsInput | string | null
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    channel?: EnumReservationChannelFieldUpdateOperationsInput | $Enums.ReservationChannel
    serviceType?: EnumServiceTypeFieldUpdateOperationsInput | $Enums.ServiceType
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: ReservationTreatmentUncheckedUpdateManyWithoutReservationNestedInput
    auditLogs?: ReservationAuditLogUncheckedUpdateManyWithoutReservationNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutReservationNestedInput
  }

  export type ReservationCreateManyInput = {
    id?: string
    customerId: string
    babyId?: string | null
    midwifeId?: string | null
    startAt: Date | string
    endAt: Date | string
    status?: $Enums.ReservationStatus
    channel?: $Enums.ReservationChannel
    serviceType?: $Enums.ServiceType
    notes?: string | null
    cancelledAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReservationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    channel?: EnumReservationChannelFieldUpdateOperationsInput | $Enums.ReservationChannel
    serviceType?: EnumServiceTypeFieldUpdateOperationsInput | $Enums.ServiceType
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    babyId?: NullableStringFieldUpdateOperationsInput | string | null
    midwifeId?: NullableStringFieldUpdateOperationsInput | string | null
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    channel?: EnumReservationChannelFieldUpdateOperationsInput | $Enums.ReservationChannel
    serviceType?: EnumServiceTypeFieldUpdateOperationsInput | $Enums.ServiceType
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservationTreatmentCreateInput = {
    id?: string
    quantity?: number
    unitPrice: Decimal | DecimalJsLike | number | string
    durationMinutes: number
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    reservation: ReservationCreateNestedOneWithoutItemsInput
    treatment: TreatmentCreateNestedOneWithoutReservationItemsInput
  }

  export type ReservationTreatmentUncheckedCreateInput = {
    id?: string
    reservationId: string
    treatmentId: string
    quantity?: number
    unitPrice: Decimal | DecimalJsLike | number | string
    durationMinutes: number
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReservationTreatmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    durationMinutes?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reservation?: ReservationUpdateOneRequiredWithoutItemsNestedInput
    treatment?: TreatmentUpdateOneRequiredWithoutReservationItemsNestedInput
  }

  export type ReservationTreatmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    reservationId?: StringFieldUpdateOperationsInput | string
    treatmentId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    durationMinutes?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservationTreatmentCreateManyInput = {
    id?: string
    reservationId: string
    treatmentId: string
    quantity?: number
    unitPrice: Decimal | DecimalJsLike | number | string
    durationMinutes: number
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReservationTreatmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    durationMinutes?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservationTreatmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    reservationId?: StringFieldUpdateOperationsInput | string
    treatmentId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    durationMinutes?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservationAuditLogCreateInput = {
    id?: string
    action: $Enums.ReservationAuditAction
    fromStatus?: $Enums.ReservationStatus | null
    toStatus?: $Enums.ReservationStatus | null
    message?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    reservation: ReservationCreateNestedOneWithoutAuditLogsInput
    actor?: UserCreateNestedOneWithoutReservationAuditLogsInput
  }

  export type ReservationAuditLogUncheckedCreateInput = {
    id?: string
    reservationId: string
    action: $Enums.ReservationAuditAction
    fromStatus?: $Enums.ReservationStatus | null
    toStatus?: $Enums.ReservationStatus | null
    actorId?: string | null
    message?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReservationAuditLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: EnumReservationAuditActionFieldUpdateOperationsInput | $Enums.ReservationAuditAction
    fromStatus?: NullableEnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus | null
    toStatus?: NullableEnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reservation?: ReservationUpdateOneRequiredWithoutAuditLogsNestedInput
    actor?: UserUpdateOneWithoutReservationAuditLogsNestedInput
  }

  export type ReservationAuditLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    reservationId?: StringFieldUpdateOperationsInput | string
    action?: EnumReservationAuditActionFieldUpdateOperationsInput | $Enums.ReservationAuditAction
    fromStatus?: NullableEnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus | null
    toStatus?: NullableEnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus | null
    actorId?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservationAuditLogCreateManyInput = {
    id?: string
    reservationId: string
    action: $Enums.ReservationAuditAction
    fromStatus?: $Enums.ReservationStatus | null
    toStatus?: $Enums.ReservationStatus | null
    actorId?: string | null
    message?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReservationAuditLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: EnumReservationAuditActionFieldUpdateOperationsInput | $Enums.ReservationAuditAction
    fromStatus?: NullableEnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus | null
    toStatus?: NullableEnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservationAuditLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    reservationId?: StringFieldUpdateOperationsInput | string
    action?: EnumReservationAuditActionFieldUpdateOperationsInput | $Enums.ReservationAuditAction
    fromStatus?: NullableEnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus | null
    toStatus?: NullableEnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus | null
    actorId?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationCreateInput = {
    id?: string
    type: $Enums.NotificationType
    status?: $Enums.NotificationStatus
    title: string
    body: string
    readAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutNotificationsInput
    reservation?: ReservationCreateNestedOneWithoutNotificationsInput
  }

  export type NotificationUncheckedCreateInput = {
    id?: string
    type: $Enums.NotificationType
    status?: $Enums.NotificationStatus
    userId?: string | null
    reservationId?: string | null
    title: string
    body: string
    readAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    status?: EnumNotificationStatusFieldUpdateOperationsInput | $Enums.NotificationStatus
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutNotificationsNestedInput
    reservation?: ReservationUpdateOneWithoutNotificationsNestedInput
  }

  export type NotificationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    status?: EnumNotificationStatusFieldUpdateOperationsInput | $Enums.NotificationStatus
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    reservationId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationCreateManyInput = {
    id?: string
    type: $Enums.NotificationType
    status?: $Enums.NotificationStatus
    userId?: string | null
    reservationId?: string | null
    title: string
    body: string
    readAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    status?: EnumNotificationStatusFieldUpdateOperationsInput | $Enums.NotificationStatus
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    status?: EnumNotificationStatusFieldUpdateOperationsInput | $Enums.NotificationStatus
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    reservationId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AccountOrderByRelevanceInput = {
    fields: AccountOrderByRelevanceFieldEnum | AccountOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AccountProviderProviderAccountIdCompoundUniqueInput = {
    provider: string
    providerAccountId: string
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
    refresh_token_expires_in?: SortOrder
  }

  export type AccountAvgOrderByAggregateInput = {
    expires_at?: SortOrder
    refresh_token_expires_in?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
    refresh_token_expires_in?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
    refresh_token_expires_in?: SortOrder
  }

  export type AccountSumOrderByAggregateInput = {
    expires_at?: SortOrder
    refresh_token_expires_in?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SessionOrderByRelevanceInput = {
    fields: SessionOrderByRelevanceFieldEnum | SessionOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type ReservationListRelationFilter = {
    every?: ReservationWhereInput
    some?: ReservationWhereInput
    none?: ReservationWhereInput
  }

  export type ReservationAuditLogListRelationFilter = {
    every?: ReservationAuditLogWhereInput
    some?: ReservationAuditLogWhereInput
    none?: ReservationAuditLogWhereInput
  }

  export type NotificationListRelationFilter = {
    every?: NotificationWhereInput
    some?: NotificationWhereInput
    none?: NotificationWhereInput
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReservationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReservationAuditLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NotificationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type VerificationTokenOrderByRelevanceInput = {
    fields: VerificationTokenOrderByRelevanceFieldEnum | VerificationTokenOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type VerificationTokenIdentifierTokenCompoundUniqueInput = {
    identifier: string
    token: string
  }

  export type VerificationTokenCountOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMaxOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMinOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type BabyListRelationFilter = {
    every?: BabyWhereInput
    some?: BabyWhereInput
    none?: BabyWhereInput
  }

  export type BabyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CustomerOrderByRelevanceInput = {
    fields: CustomerOrderByRelevanceFieldEnum | CustomerOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CustomerCountOrderByAggregateInput = {
    id?: SortOrder
    motherName?: SortOrder
    motherPhone?: SortOrder
    motherEmail?: SortOrder
    address?: SortOrder
    notes?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CustomerMaxOrderByAggregateInput = {
    id?: SortOrder
    motherName?: SortOrder
    motherPhone?: SortOrder
    motherEmail?: SortOrder
    address?: SortOrder
    notes?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CustomerMinOrderByAggregateInput = {
    id?: SortOrder
    motherName?: SortOrder
    motherPhone?: SortOrder
    motherEmail?: SortOrder
    address?: SortOrder
    notes?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumBabyGenderNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.BabyGender | EnumBabyGenderFieldRefInput<$PrismaModel> | null
    in?: $Enums.BabyGender[] | null
    notIn?: $Enums.BabyGender[] | null
    not?: NestedEnumBabyGenderNullableFilter<$PrismaModel> | $Enums.BabyGender | null
  }

  export type CustomerScalarRelationFilter = {
    is?: CustomerWhereInput
    isNot?: CustomerWhereInput
  }

  export type BabyOrderByRelevanceInput = {
    fields: BabyOrderByRelevanceFieldEnum | BabyOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type BabyCountOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    name?: SortOrder
    gender?: SortOrder
    birthDate?: SortOrder
    notes?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BabyMaxOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    name?: SortOrder
    gender?: SortOrder
    birthDate?: SortOrder
    notes?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BabyMinOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    name?: SortOrder
    gender?: SortOrder
    birthDate?: SortOrder
    notes?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumBabyGenderNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BabyGender | EnumBabyGenderFieldRefInput<$PrismaModel> | null
    in?: $Enums.BabyGender[] | null
    notIn?: $Enums.BabyGender[] | null
    not?: NestedEnumBabyGenderNullableWithAggregatesFilter<$PrismaModel> | $Enums.BabyGender | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumBabyGenderNullableFilter<$PrismaModel>
    _max?: NestedEnumBabyGenderNullableFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ReservationTreatmentListRelationFilter = {
    every?: ReservationTreatmentWhereInput
    some?: ReservationTreatmentWhereInput
    none?: ReservationTreatmentWhereInput
  }

  export type ReservationTreatmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TreatmentOrderByRelevanceInput = {
    fields: TreatmentOrderByRelevanceFieldEnum | TreatmentOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type TreatmentCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    durationMinutes?: SortOrder
    basePrice?: SortOrder
    isActive?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TreatmentAvgOrderByAggregateInput = {
    durationMinutes?: SortOrder
    basePrice?: SortOrder
  }

  export type TreatmentMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    durationMinutes?: SortOrder
    basePrice?: SortOrder
    isActive?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TreatmentMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    durationMinutes?: SortOrder
    basePrice?: SortOrder
    isActive?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TreatmentSumOrderByAggregateInput = {
    durationMinutes?: SortOrder
    basePrice?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumReservationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ReservationStatus | EnumReservationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ReservationStatus[]
    notIn?: $Enums.ReservationStatus[]
    not?: NestedEnumReservationStatusFilter<$PrismaModel> | $Enums.ReservationStatus
  }

  export type EnumReservationChannelFilter<$PrismaModel = never> = {
    equals?: $Enums.ReservationChannel | EnumReservationChannelFieldRefInput<$PrismaModel>
    in?: $Enums.ReservationChannel[]
    notIn?: $Enums.ReservationChannel[]
    not?: NestedEnumReservationChannelFilter<$PrismaModel> | $Enums.ReservationChannel
  }

  export type EnumServiceTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ServiceType | EnumServiceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ServiceType[]
    notIn?: $Enums.ServiceType[]
    not?: NestedEnumServiceTypeFilter<$PrismaModel> | $Enums.ServiceType
  }

  export type BabyNullableScalarRelationFilter = {
    is?: BabyWhereInput | null
    isNot?: BabyWhereInput | null
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type ReservationOrderByRelevanceInput = {
    fields: ReservationOrderByRelevanceFieldEnum | ReservationOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ReservationMidwifeIdStartAtCompoundUniqueInput = {
    midwifeId: string
    startAt: Date | string
  }

  export type ReservationCountOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    babyId?: SortOrder
    midwifeId?: SortOrder
    startAt?: SortOrder
    endAt?: SortOrder
    status?: SortOrder
    channel?: SortOrder
    serviceType?: SortOrder
    notes?: SortOrder
    cancelledAt?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReservationMaxOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    babyId?: SortOrder
    midwifeId?: SortOrder
    startAt?: SortOrder
    endAt?: SortOrder
    status?: SortOrder
    channel?: SortOrder
    serviceType?: SortOrder
    notes?: SortOrder
    cancelledAt?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReservationMinOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    babyId?: SortOrder
    midwifeId?: SortOrder
    startAt?: SortOrder
    endAt?: SortOrder
    status?: SortOrder
    channel?: SortOrder
    serviceType?: SortOrder
    notes?: SortOrder
    cancelledAt?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumReservationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ReservationStatus | EnumReservationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ReservationStatus[]
    notIn?: $Enums.ReservationStatus[]
    not?: NestedEnumReservationStatusWithAggregatesFilter<$PrismaModel> | $Enums.ReservationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumReservationStatusFilter<$PrismaModel>
    _max?: NestedEnumReservationStatusFilter<$PrismaModel>
  }

  export type EnumReservationChannelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ReservationChannel | EnumReservationChannelFieldRefInput<$PrismaModel>
    in?: $Enums.ReservationChannel[]
    notIn?: $Enums.ReservationChannel[]
    not?: NestedEnumReservationChannelWithAggregatesFilter<$PrismaModel> | $Enums.ReservationChannel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumReservationChannelFilter<$PrismaModel>
    _max?: NestedEnumReservationChannelFilter<$PrismaModel>
  }

  export type EnumServiceTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ServiceType | EnumServiceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ServiceType[]
    notIn?: $Enums.ServiceType[]
    not?: NestedEnumServiceTypeWithAggregatesFilter<$PrismaModel> | $Enums.ServiceType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumServiceTypeFilter<$PrismaModel>
    _max?: NestedEnumServiceTypeFilter<$PrismaModel>
  }

  export type ReservationScalarRelationFilter = {
    is?: ReservationWhereInput
    isNot?: ReservationWhereInput
  }

  export type TreatmentScalarRelationFilter = {
    is?: TreatmentWhereInput
    isNot?: TreatmentWhereInput
  }

  export type ReservationTreatmentOrderByRelevanceInput = {
    fields: ReservationTreatmentOrderByRelevanceFieldEnum | ReservationTreatmentOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ReservationTreatmentReservationIdTreatmentIdCompoundUniqueInput = {
    reservationId: string
    treatmentId: string
  }

  export type ReservationTreatmentCountOrderByAggregateInput = {
    id?: SortOrder
    reservationId?: SortOrder
    treatmentId?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    durationMinutes?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReservationTreatmentAvgOrderByAggregateInput = {
    quantity?: SortOrder
    unitPrice?: SortOrder
    durationMinutes?: SortOrder
  }

  export type ReservationTreatmentMaxOrderByAggregateInput = {
    id?: SortOrder
    reservationId?: SortOrder
    treatmentId?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    durationMinutes?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReservationTreatmentMinOrderByAggregateInput = {
    id?: SortOrder
    reservationId?: SortOrder
    treatmentId?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    durationMinutes?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReservationTreatmentSumOrderByAggregateInput = {
    quantity?: SortOrder
    unitPrice?: SortOrder
    durationMinutes?: SortOrder
  }

  export type EnumReservationAuditActionFilter<$PrismaModel = never> = {
    equals?: $Enums.ReservationAuditAction | EnumReservationAuditActionFieldRefInput<$PrismaModel>
    in?: $Enums.ReservationAuditAction[]
    notIn?: $Enums.ReservationAuditAction[]
    not?: NestedEnumReservationAuditActionFilter<$PrismaModel> | $Enums.ReservationAuditAction
  }

  export type EnumReservationStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.ReservationStatus | EnumReservationStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.ReservationStatus[] | null
    notIn?: $Enums.ReservationStatus[] | null
    not?: NestedEnumReservationStatusNullableFilter<$PrismaModel> | $Enums.ReservationStatus | null
  }

  export type ReservationAuditLogOrderByRelevanceInput = {
    fields: ReservationAuditLogOrderByRelevanceFieldEnum | ReservationAuditLogOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ReservationAuditLogCountOrderByAggregateInput = {
    id?: SortOrder
    reservationId?: SortOrder
    action?: SortOrder
    fromStatus?: SortOrder
    toStatus?: SortOrder
    actorId?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReservationAuditLogMaxOrderByAggregateInput = {
    id?: SortOrder
    reservationId?: SortOrder
    action?: SortOrder
    fromStatus?: SortOrder
    toStatus?: SortOrder
    actorId?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReservationAuditLogMinOrderByAggregateInput = {
    id?: SortOrder
    reservationId?: SortOrder
    action?: SortOrder
    fromStatus?: SortOrder
    toStatus?: SortOrder
    actorId?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumReservationAuditActionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ReservationAuditAction | EnumReservationAuditActionFieldRefInput<$PrismaModel>
    in?: $Enums.ReservationAuditAction[]
    notIn?: $Enums.ReservationAuditAction[]
    not?: NestedEnumReservationAuditActionWithAggregatesFilter<$PrismaModel> | $Enums.ReservationAuditAction
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumReservationAuditActionFilter<$PrismaModel>
    _max?: NestedEnumReservationAuditActionFilter<$PrismaModel>
  }

  export type EnumReservationStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ReservationStatus | EnumReservationStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.ReservationStatus[] | null
    notIn?: $Enums.ReservationStatus[] | null
    not?: NestedEnumReservationStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.ReservationStatus | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumReservationStatusNullableFilter<$PrismaModel>
    _max?: NestedEnumReservationStatusNullableFilter<$PrismaModel>
  }

  export type EnumNotificationTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | EnumNotificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationType[]
    notIn?: $Enums.NotificationType[]
    not?: NestedEnumNotificationTypeFilter<$PrismaModel> | $Enums.NotificationType
  }

  export type EnumNotificationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationStatus | EnumNotificationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationStatus[]
    notIn?: $Enums.NotificationStatus[]
    not?: NestedEnumNotificationStatusFilter<$PrismaModel> | $Enums.NotificationStatus
  }

  export type ReservationNullableScalarRelationFilter = {
    is?: ReservationWhereInput | null
    isNot?: ReservationWhereInput | null
  }

  export type NotificationOrderByRelevanceInput = {
    fields: NotificationOrderByRelevanceFieldEnum | NotificationOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type NotificationCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    status?: SortOrder
    userId?: SortOrder
    reservationId?: SortOrder
    title?: SortOrder
    body?: SortOrder
    readAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NotificationMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    status?: SortOrder
    userId?: SortOrder
    reservationId?: SortOrder
    title?: SortOrder
    body?: SortOrder
    readAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NotificationMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    status?: SortOrder
    userId?: SortOrder
    reservationId?: SortOrder
    title?: SortOrder
    body?: SortOrder
    readAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumNotificationTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | EnumNotificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationType[]
    notIn?: $Enums.NotificationType[]
    not?: NestedEnumNotificationTypeWithAggregatesFilter<$PrismaModel> | $Enums.NotificationType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumNotificationTypeFilter<$PrismaModel>
    _max?: NestedEnumNotificationTypeFilter<$PrismaModel>
  }

  export type EnumNotificationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationStatus | EnumNotificationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationStatus[]
    notIn?: $Enums.NotificationStatus[]
    not?: NestedEnumNotificationStatusWithAggregatesFilter<$PrismaModel> | $Enums.NotificationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumNotificationStatusFilter<$PrismaModel>
    _max?: NestedEnumNotificationStatusFilter<$PrismaModel>
  }

  export type UserCreateNestedOneWithoutAccountsInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    upsert?: UserUpsertWithoutAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccountsInput, UserUpdateWithoutAccountsInput>, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type ReservationCreateNestedManyWithoutMidwifeInput = {
    create?: XOR<ReservationCreateWithoutMidwifeInput, ReservationUncheckedCreateWithoutMidwifeInput> | ReservationCreateWithoutMidwifeInput[] | ReservationUncheckedCreateWithoutMidwifeInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutMidwifeInput | ReservationCreateOrConnectWithoutMidwifeInput[]
    createMany?: ReservationCreateManyMidwifeInputEnvelope
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
  }

  export type ReservationAuditLogCreateNestedManyWithoutActorInput = {
    create?: XOR<ReservationAuditLogCreateWithoutActorInput, ReservationAuditLogUncheckedCreateWithoutActorInput> | ReservationAuditLogCreateWithoutActorInput[] | ReservationAuditLogUncheckedCreateWithoutActorInput[]
    connectOrCreate?: ReservationAuditLogCreateOrConnectWithoutActorInput | ReservationAuditLogCreateOrConnectWithoutActorInput[]
    createMany?: ReservationAuditLogCreateManyActorInputEnvelope
    connect?: ReservationAuditLogWhereUniqueInput | ReservationAuditLogWhereUniqueInput[]
  }

  export type NotificationCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type ReservationUncheckedCreateNestedManyWithoutMidwifeInput = {
    create?: XOR<ReservationCreateWithoutMidwifeInput, ReservationUncheckedCreateWithoutMidwifeInput> | ReservationCreateWithoutMidwifeInput[] | ReservationUncheckedCreateWithoutMidwifeInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutMidwifeInput | ReservationCreateOrConnectWithoutMidwifeInput[]
    createMany?: ReservationCreateManyMidwifeInputEnvelope
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
  }

  export type ReservationAuditLogUncheckedCreateNestedManyWithoutActorInput = {
    create?: XOR<ReservationAuditLogCreateWithoutActorInput, ReservationAuditLogUncheckedCreateWithoutActorInput> | ReservationAuditLogCreateWithoutActorInput[] | ReservationAuditLogUncheckedCreateWithoutActorInput[]
    connectOrCreate?: ReservationAuditLogCreateOrConnectWithoutActorInput | ReservationAuditLogCreateOrConnectWithoutActorInput[]
    createMany?: ReservationAuditLogCreateManyActorInputEnvelope
    connect?: ReservationAuditLogWhereUniqueInput | ReservationAuditLogWhereUniqueInput[]
  }

  export type NotificationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type AccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type ReservationUpdateManyWithoutMidwifeNestedInput = {
    create?: XOR<ReservationCreateWithoutMidwifeInput, ReservationUncheckedCreateWithoutMidwifeInput> | ReservationCreateWithoutMidwifeInput[] | ReservationUncheckedCreateWithoutMidwifeInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutMidwifeInput | ReservationCreateOrConnectWithoutMidwifeInput[]
    upsert?: ReservationUpsertWithWhereUniqueWithoutMidwifeInput | ReservationUpsertWithWhereUniqueWithoutMidwifeInput[]
    createMany?: ReservationCreateManyMidwifeInputEnvelope
    set?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    disconnect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    delete?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    update?: ReservationUpdateWithWhereUniqueWithoutMidwifeInput | ReservationUpdateWithWhereUniqueWithoutMidwifeInput[]
    updateMany?: ReservationUpdateManyWithWhereWithoutMidwifeInput | ReservationUpdateManyWithWhereWithoutMidwifeInput[]
    deleteMany?: ReservationScalarWhereInput | ReservationScalarWhereInput[]
  }

  export type ReservationAuditLogUpdateManyWithoutActorNestedInput = {
    create?: XOR<ReservationAuditLogCreateWithoutActorInput, ReservationAuditLogUncheckedCreateWithoutActorInput> | ReservationAuditLogCreateWithoutActorInput[] | ReservationAuditLogUncheckedCreateWithoutActorInput[]
    connectOrCreate?: ReservationAuditLogCreateOrConnectWithoutActorInput | ReservationAuditLogCreateOrConnectWithoutActorInput[]
    upsert?: ReservationAuditLogUpsertWithWhereUniqueWithoutActorInput | ReservationAuditLogUpsertWithWhereUniqueWithoutActorInput[]
    createMany?: ReservationAuditLogCreateManyActorInputEnvelope
    set?: ReservationAuditLogWhereUniqueInput | ReservationAuditLogWhereUniqueInput[]
    disconnect?: ReservationAuditLogWhereUniqueInput | ReservationAuditLogWhereUniqueInput[]
    delete?: ReservationAuditLogWhereUniqueInput | ReservationAuditLogWhereUniqueInput[]
    connect?: ReservationAuditLogWhereUniqueInput | ReservationAuditLogWhereUniqueInput[]
    update?: ReservationAuditLogUpdateWithWhereUniqueWithoutActorInput | ReservationAuditLogUpdateWithWhereUniqueWithoutActorInput[]
    updateMany?: ReservationAuditLogUpdateManyWithWhereWithoutActorInput | ReservationAuditLogUpdateManyWithWhereWithoutActorInput[]
    deleteMany?: ReservationAuditLogScalarWhereInput | ReservationAuditLogScalarWhereInput[]
  }

  export type NotificationUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutUserInput | NotificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutUserInput | NotificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutUserInput | NotificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type AccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type ReservationUncheckedUpdateManyWithoutMidwifeNestedInput = {
    create?: XOR<ReservationCreateWithoutMidwifeInput, ReservationUncheckedCreateWithoutMidwifeInput> | ReservationCreateWithoutMidwifeInput[] | ReservationUncheckedCreateWithoutMidwifeInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutMidwifeInput | ReservationCreateOrConnectWithoutMidwifeInput[]
    upsert?: ReservationUpsertWithWhereUniqueWithoutMidwifeInput | ReservationUpsertWithWhereUniqueWithoutMidwifeInput[]
    createMany?: ReservationCreateManyMidwifeInputEnvelope
    set?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    disconnect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    delete?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    update?: ReservationUpdateWithWhereUniqueWithoutMidwifeInput | ReservationUpdateWithWhereUniqueWithoutMidwifeInput[]
    updateMany?: ReservationUpdateManyWithWhereWithoutMidwifeInput | ReservationUpdateManyWithWhereWithoutMidwifeInput[]
    deleteMany?: ReservationScalarWhereInput | ReservationScalarWhereInput[]
  }

  export type ReservationAuditLogUncheckedUpdateManyWithoutActorNestedInput = {
    create?: XOR<ReservationAuditLogCreateWithoutActorInput, ReservationAuditLogUncheckedCreateWithoutActorInput> | ReservationAuditLogCreateWithoutActorInput[] | ReservationAuditLogUncheckedCreateWithoutActorInput[]
    connectOrCreate?: ReservationAuditLogCreateOrConnectWithoutActorInput | ReservationAuditLogCreateOrConnectWithoutActorInput[]
    upsert?: ReservationAuditLogUpsertWithWhereUniqueWithoutActorInput | ReservationAuditLogUpsertWithWhereUniqueWithoutActorInput[]
    createMany?: ReservationAuditLogCreateManyActorInputEnvelope
    set?: ReservationAuditLogWhereUniqueInput | ReservationAuditLogWhereUniqueInput[]
    disconnect?: ReservationAuditLogWhereUniqueInput | ReservationAuditLogWhereUniqueInput[]
    delete?: ReservationAuditLogWhereUniqueInput | ReservationAuditLogWhereUniqueInput[]
    connect?: ReservationAuditLogWhereUniqueInput | ReservationAuditLogWhereUniqueInput[]
    update?: ReservationAuditLogUpdateWithWhereUniqueWithoutActorInput | ReservationAuditLogUpdateWithWhereUniqueWithoutActorInput[]
    updateMany?: ReservationAuditLogUpdateManyWithWhereWithoutActorInput | ReservationAuditLogUpdateManyWithWhereWithoutActorInput[]
    deleteMany?: ReservationAuditLogScalarWhereInput | ReservationAuditLogScalarWhereInput[]
  }

  export type NotificationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutUserInput | NotificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutUserInput | NotificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutUserInput | NotificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type BabyCreateNestedManyWithoutCustomerInput = {
    create?: XOR<BabyCreateWithoutCustomerInput, BabyUncheckedCreateWithoutCustomerInput> | BabyCreateWithoutCustomerInput[] | BabyUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: BabyCreateOrConnectWithoutCustomerInput | BabyCreateOrConnectWithoutCustomerInput[]
    createMany?: BabyCreateManyCustomerInputEnvelope
    connect?: BabyWhereUniqueInput | BabyWhereUniqueInput[]
  }

  export type ReservationCreateNestedManyWithoutCustomerInput = {
    create?: XOR<ReservationCreateWithoutCustomerInput, ReservationUncheckedCreateWithoutCustomerInput> | ReservationCreateWithoutCustomerInput[] | ReservationUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutCustomerInput | ReservationCreateOrConnectWithoutCustomerInput[]
    createMany?: ReservationCreateManyCustomerInputEnvelope
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
  }

  export type BabyUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<BabyCreateWithoutCustomerInput, BabyUncheckedCreateWithoutCustomerInput> | BabyCreateWithoutCustomerInput[] | BabyUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: BabyCreateOrConnectWithoutCustomerInput | BabyCreateOrConnectWithoutCustomerInput[]
    createMany?: BabyCreateManyCustomerInputEnvelope
    connect?: BabyWhereUniqueInput | BabyWhereUniqueInput[]
  }

  export type ReservationUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<ReservationCreateWithoutCustomerInput, ReservationUncheckedCreateWithoutCustomerInput> | ReservationCreateWithoutCustomerInput[] | ReservationUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutCustomerInput | ReservationCreateOrConnectWithoutCustomerInput[]
    createMany?: ReservationCreateManyCustomerInputEnvelope
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
  }

  export type BabyUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<BabyCreateWithoutCustomerInput, BabyUncheckedCreateWithoutCustomerInput> | BabyCreateWithoutCustomerInput[] | BabyUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: BabyCreateOrConnectWithoutCustomerInput | BabyCreateOrConnectWithoutCustomerInput[]
    upsert?: BabyUpsertWithWhereUniqueWithoutCustomerInput | BabyUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: BabyCreateManyCustomerInputEnvelope
    set?: BabyWhereUniqueInput | BabyWhereUniqueInput[]
    disconnect?: BabyWhereUniqueInput | BabyWhereUniqueInput[]
    delete?: BabyWhereUniqueInput | BabyWhereUniqueInput[]
    connect?: BabyWhereUniqueInput | BabyWhereUniqueInput[]
    update?: BabyUpdateWithWhereUniqueWithoutCustomerInput | BabyUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: BabyUpdateManyWithWhereWithoutCustomerInput | BabyUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: BabyScalarWhereInput | BabyScalarWhereInput[]
  }

  export type ReservationUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<ReservationCreateWithoutCustomerInput, ReservationUncheckedCreateWithoutCustomerInput> | ReservationCreateWithoutCustomerInput[] | ReservationUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutCustomerInput | ReservationCreateOrConnectWithoutCustomerInput[]
    upsert?: ReservationUpsertWithWhereUniqueWithoutCustomerInput | ReservationUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: ReservationCreateManyCustomerInputEnvelope
    set?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    disconnect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    delete?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    update?: ReservationUpdateWithWhereUniqueWithoutCustomerInput | ReservationUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: ReservationUpdateManyWithWhereWithoutCustomerInput | ReservationUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: ReservationScalarWhereInput | ReservationScalarWhereInput[]
  }

  export type BabyUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<BabyCreateWithoutCustomerInput, BabyUncheckedCreateWithoutCustomerInput> | BabyCreateWithoutCustomerInput[] | BabyUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: BabyCreateOrConnectWithoutCustomerInput | BabyCreateOrConnectWithoutCustomerInput[]
    upsert?: BabyUpsertWithWhereUniqueWithoutCustomerInput | BabyUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: BabyCreateManyCustomerInputEnvelope
    set?: BabyWhereUniqueInput | BabyWhereUniqueInput[]
    disconnect?: BabyWhereUniqueInput | BabyWhereUniqueInput[]
    delete?: BabyWhereUniqueInput | BabyWhereUniqueInput[]
    connect?: BabyWhereUniqueInput | BabyWhereUniqueInput[]
    update?: BabyUpdateWithWhereUniqueWithoutCustomerInput | BabyUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: BabyUpdateManyWithWhereWithoutCustomerInput | BabyUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: BabyScalarWhereInput | BabyScalarWhereInput[]
  }

  export type ReservationUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<ReservationCreateWithoutCustomerInput, ReservationUncheckedCreateWithoutCustomerInput> | ReservationCreateWithoutCustomerInput[] | ReservationUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutCustomerInput | ReservationCreateOrConnectWithoutCustomerInput[]
    upsert?: ReservationUpsertWithWhereUniqueWithoutCustomerInput | ReservationUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: ReservationCreateManyCustomerInputEnvelope
    set?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    disconnect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    delete?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    update?: ReservationUpdateWithWhereUniqueWithoutCustomerInput | ReservationUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: ReservationUpdateManyWithWhereWithoutCustomerInput | ReservationUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: ReservationScalarWhereInput | ReservationScalarWhereInput[]
  }

  export type CustomerCreateNestedOneWithoutBabiesInput = {
    create?: XOR<CustomerCreateWithoutBabiesInput, CustomerUncheckedCreateWithoutBabiesInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutBabiesInput
    connect?: CustomerWhereUniqueInput
  }

  export type ReservationCreateNestedManyWithoutBabyInput = {
    create?: XOR<ReservationCreateWithoutBabyInput, ReservationUncheckedCreateWithoutBabyInput> | ReservationCreateWithoutBabyInput[] | ReservationUncheckedCreateWithoutBabyInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutBabyInput | ReservationCreateOrConnectWithoutBabyInput[]
    createMany?: ReservationCreateManyBabyInputEnvelope
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
  }

  export type ReservationUncheckedCreateNestedManyWithoutBabyInput = {
    create?: XOR<ReservationCreateWithoutBabyInput, ReservationUncheckedCreateWithoutBabyInput> | ReservationCreateWithoutBabyInput[] | ReservationUncheckedCreateWithoutBabyInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutBabyInput | ReservationCreateOrConnectWithoutBabyInput[]
    createMany?: ReservationCreateManyBabyInputEnvelope
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
  }

  export type NullableEnumBabyGenderFieldUpdateOperationsInput = {
    set?: $Enums.BabyGender | null
  }

  export type CustomerUpdateOneRequiredWithoutBabiesNestedInput = {
    create?: XOR<CustomerCreateWithoutBabiesInput, CustomerUncheckedCreateWithoutBabiesInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutBabiesInput
    upsert?: CustomerUpsertWithoutBabiesInput
    connect?: CustomerWhereUniqueInput
    update?: XOR<XOR<CustomerUpdateToOneWithWhereWithoutBabiesInput, CustomerUpdateWithoutBabiesInput>, CustomerUncheckedUpdateWithoutBabiesInput>
  }

  export type ReservationUpdateManyWithoutBabyNestedInput = {
    create?: XOR<ReservationCreateWithoutBabyInput, ReservationUncheckedCreateWithoutBabyInput> | ReservationCreateWithoutBabyInput[] | ReservationUncheckedCreateWithoutBabyInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutBabyInput | ReservationCreateOrConnectWithoutBabyInput[]
    upsert?: ReservationUpsertWithWhereUniqueWithoutBabyInput | ReservationUpsertWithWhereUniqueWithoutBabyInput[]
    createMany?: ReservationCreateManyBabyInputEnvelope
    set?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    disconnect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    delete?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    update?: ReservationUpdateWithWhereUniqueWithoutBabyInput | ReservationUpdateWithWhereUniqueWithoutBabyInput[]
    updateMany?: ReservationUpdateManyWithWhereWithoutBabyInput | ReservationUpdateManyWithWhereWithoutBabyInput[]
    deleteMany?: ReservationScalarWhereInput | ReservationScalarWhereInput[]
  }

  export type ReservationUncheckedUpdateManyWithoutBabyNestedInput = {
    create?: XOR<ReservationCreateWithoutBabyInput, ReservationUncheckedCreateWithoutBabyInput> | ReservationCreateWithoutBabyInput[] | ReservationUncheckedCreateWithoutBabyInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutBabyInput | ReservationCreateOrConnectWithoutBabyInput[]
    upsert?: ReservationUpsertWithWhereUniqueWithoutBabyInput | ReservationUpsertWithWhereUniqueWithoutBabyInput[]
    createMany?: ReservationCreateManyBabyInputEnvelope
    set?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    disconnect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    delete?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    update?: ReservationUpdateWithWhereUniqueWithoutBabyInput | ReservationUpdateWithWhereUniqueWithoutBabyInput[]
    updateMany?: ReservationUpdateManyWithWhereWithoutBabyInput | ReservationUpdateManyWithWhereWithoutBabyInput[]
    deleteMany?: ReservationScalarWhereInput | ReservationScalarWhereInput[]
  }

  export type ReservationTreatmentCreateNestedManyWithoutTreatmentInput = {
    create?: XOR<ReservationTreatmentCreateWithoutTreatmentInput, ReservationTreatmentUncheckedCreateWithoutTreatmentInput> | ReservationTreatmentCreateWithoutTreatmentInput[] | ReservationTreatmentUncheckedCreateWithoutTreatmentInput[]
    connectOrCreate?: ReservationTreatmentCreateOrConnectWithoutTreatmentInput | ReservationTreatmentCreateOrConnectWithoutTreatmentInput[]
    createMany?: ReservationTreatmentCreateManyTreatmentInputEnvelope
    connect?: ReservationTreatmentWhereUniqueInput | ReservationTreatmentWhereUniqueInput[]
  }

  export type ReservationTreatmentUncheckedCreateNestedManyWithoutTreatmentInput = {
    create?: XOR<ReservationTreatmentCreateWithoutTreatmentInput, ReservationTreatmentUncheckedCreateWithoutTreatmentInput> | ReservationTreatmentCreateWithoutTreatmentInput[] | ReservationTreatmentUncheckedCreateWithoutTreatmentInput[]
    connectOrCreate?: ReservationTreatmentCreateOrConnectWithoutTreatmentInput | ReservationTreatmentCreateOrConnectWithoutTreatmentInput[]
    createMany?: ReservationTreatmentCreateManyTreatmentInputEnvelope
    connect?: ReservationTreatmentWhereUniqueInput | ReservationTreatmentWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type ReservationTreatmentUpdateManyWithoutTreatmentNestedInput = {
    create?: XOR<ReservationTreatmentCreateWithoutTreatmentInput, ReservationTreatmentUncheckedCreateWithoutTreatmentInput> | ReservationTreatmentCreateWithoutTreatmentInput[] | ReservationTreatmentUncheckedCreateWithoutTreatmentInput[]
    connectOrCreate?: ReservationTreatmentCreateOrConnectWithoutTreatmentInput | ReservationTreatmentCreateOrConnectWithoutTreatmentInput[]
    upsert?: ReservationTreatmentUpsertWithWhereUniqueWithoutTreatmentInput | ReservationTreatmentUpsertWithWhereUniqueWithoutTreatmentInput[]
    createMany?: ReservationTreatmentCreateManyTreatmentInputEnvelope
    set?: ReservationTreatmentWhereUniqueInput | ReservationTreatmentWhereUniqueInput[]
    disconnect?: ReservationTreatmentWhereUniqueInput | ReservationTreatmentWhereUniqueInput[]
    delete?: ReservationTreatmentWhereUniqueInput | ReservationTreatmentWhereUniqueInput[]
    connect?: ReservationTreatmentWhereUniqueInput | ReservationTreatmentWhereUniqueInput[]
    update?: ReservationTreatmentUpdateWithWhereUniqueWithoutTreatmentInput | ReservationTreatmentUpdateWithWhereUniqueWithoutTreatmentInput[]
    updateMany?: ReservationTreatmentUpdateManyWithWhereWithoutTreatmentInput | ReservationTreatmentUpdateManyWithWhereWithoutTreatmentInput[]
    deleteMany?: ReservationTreatmentScalarWhereInput | ReservationTreatmentScalarWhereInput[]
  }

  export type ReservationTreatmentUncheckedUpdateManyWithoutTreatmentNestedInput = {
    create?: XOR<ReservationTreatmentCreateWithoutTreatmentInput, ReservationTreatmentUncheckedCreateWithoutTreatmentInput> | ReservationTreatmentCreateWithoutTreatmentInput[] | ReservationTreatmentUncheckedCreateWithoutTreatmentInput[]
    connectOrCreate?: ReservationTreatmentCreateOrConnectWithoutTreatmentInput | ReservationTreatmentCreateOrConnectWithoutTreatmentInput[]
    upsert?: ReservationTreatmentUpsertWithWhereUniqueWithoutTreatmentInput | ReservationTreatmentUpsertWithWhereUniqueWithoutTreatmentInput[]
    createMany?: ReservationTreatmentCreateManyTreatmentInputEnvelope
    set?: ReservationTreatmentWhereUniqueInput | ReservationTreatmentWhereUniqueInput[]
    disconnect?: ReservationTreatmentWhereUniqueInput | ReservationTreatmentWhereUniqueInput[]
    delete?: ReservationTreatmentWhereUniqueInput | ReservationTreatmentWhereUniqueInput[]
    connect?: ReservationTreatmentWhereUniqueInput | ReservationTreatmentWhereUniqueInput[]
    update?: ReservationTreatmentUpdateWithWhereUniqueWithoutTreatmentInput | ReservationTreatmentUpdateWithWhereUniqueWithoutTreatmentInput[]
    updateMany?: ReservationTreatmentUpdateManyWithWhereWithoutTreatmentInput | ReservationTreatmentUpdateManyWithWhereWithoutTreatmentInput[]
    deleteMany?: ReservationTreatmentScalarWhereInput | ReservationTreatmentScalarWhereInput[]
  }

  export type CustomerCreateNestedOneWithoutReservationsInput = {
    create?: XOR<CustomerCreateWithoutReservationsInput, CustomerUncheckedCreateWithoutReservationsInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutReservationsInput
    connect?: CustomerWhereUniqueInput
  }

  export type BabyCreateNestedOneWithoutReservationsInput = {
    create?: XOR<BabyCreateWithoutReservationsInput, BabyUncheckedCreateWithoutReservationsInput>
    connectOrCreate?: BabyCreateOrConnectWithoutReservationsInput
    connect?: BabyWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutMidwifeReservationsInput = {
    create?: XOR<UserCreateWithoutMidwifeReservationsInput, UserUncheckedCreateWithoutMidwifeReservationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMidwifeReservationsInput
    connect?: UserWhereUniqueInput
  }

  export type ReservationTreatmentCreateNestedManyWithoutReservationInput = {
    create?: XOR<ReservationTreatmentCreateWithoutReservationInput, ReservationTreatmentUncheckedCreateWithoutReservationInput> | ReservationTreatmentCreateWithoutReservationInput[] | ReservationTreatmentUncheckedCreateWithoutReservationInput[]
    connectOrCreate?: ReservationTreatmentCreateOrConnectWithoutReservationInput | ReservationTreatmentCreateOrConnectWithoutReservationInput[]
    createMany?: ReservationTreatmentCreateManyReservationInputEnvelope
    connect?: ReservationTreatmentWhereUniqueInput | ReservationTreatmentWhereUniqueInput[]
  }

  export type ReservationAuditLogCreateNestedManyWithoutReservationInput = {
    create?: XOR<ReservationAuditLogCreateWithoutReservationInput, ReservationAuditLogUncheckedCreateWithoutReservationInput> | ReservationAuditLogCreateWithoutReservationInput[] | ReservationAuditLogUncheckedCreateWithoutReservationInput[]
    connectOrCreate?: ReservationAuditLogCreateOrConnectWithoutReservationInput | ReservationAuditLogCreateOrConnectWithoutReservationInput[]
    createMany?: ReservationAuditLogCreateManyReservationInputEnvelope
    connect?: ReservationAuditLogWhereUniqueInput | ReservationAuditLogWhereUniqueInput[]
  }

  export type NotificationCreateNestedManyWithoutReservationInput = {
    create?: XOR<NotificationCreateWithoutReservationInput, NotificationUncheckedCreateWithoutReservationInput> | NotificationCreateWithoutReservationInput[] | NotificationUncheckedCreateWithoutReservationInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutReservationInput | NotificationCreateOrConnectWithoutReservationInput[]
    createMany?: NotificationCreateManyReservationInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type ReservationTreatmentUncheckedCreateNestedManyWithoutReservationInput = {
    create?: XOR<ReservationTreatmentCreateWithoutReservationInput, ReservationTreatmentUncheckedCreateWithoutReservationInput> | ReservationTreatmentCreateWithoutReservationInput[] | ReservationTreatmentUncheckedCreateWithoutReservationInput[]
    connectOrCreate?: ReservationTreatmentCreateOrConnectWithoutReservationInput | ReservationTreatmentCreateOrConnectWithoutReservationInput[]
    createMany?: ReservationTreatmentCreateManyReservationInputEnvelope
    connect?: ReservationTreatmentWhereUniqueInput | ReservationTreatmentWhereUniqueInput[]
  }

  export type ReservationAuditLogUncheckedCreateNestedManyWithoutReservationInput = {
    create?: XOR<ReservationAuditLogCreateWithoutReservationInput, ReservationAuditLogUncheckedCreateWithoutReservationInput> | ReservationAuditLogCreateWithoutReservationInput[] | ReservationAuditLogUncheckedCreateWithoutReservationInput[]
    connectOrCreate?: ReservationAuditLogCreateOrConnectWithoutReservationInput | ReservationAuditLogCreateOrConnectWithoutReservationInput[]
    createMany?: ReservationAuditLogCreateManyReservationInputEnvelope
    connect?: ReservationAuditLogWhereUniqueInput | ReservationAuditLogWhereUniqueInput[]
  }

  export type NotificationUncheckedCreateNestedManyWithoutReservationInput = {
    create?: XOR<NotificationCreateWithoutReservationInput, NotificationUncheckedCreateWithoutReservationInput> | NotificationCreateWithoutReservationInput[] | NotificationUncheckedCreateWithoutReservationInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutReservationInput | NotificationCreateOrConnectWithoutReservationInput[]
    createMany?: NotificationCreateManyReservationInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type EnumReservationStatusFieldUpdateOperationsInput = {
    set?: $Enums.ReservationStatus
  }

  export type EnumReservationChannelFieldUpdateOperationsInput = {
    set?: $Enums.ReservationChannel
  }

  export type EnumServiceTypeFieldUpdateOperationsInput = {
    set?: $Enums.ServiceType
  }

  export type CustomerUpdateOneRequiredWithoutReservationsNestedInput = {
    create?: XOR<CustomerCreateWithoutReservationsInput, CustomerUncheckedCreateWithoutReservationsInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutReservationsInput
    upsert?: CustomerUpsertWithoutReservationsInput
    connect?: CustomerWhereUniqueInput
    update?: XOR<XOR<CustomerUpdateToOneWithWhereWithoutReservationsInput, CustomerUpdateWithoutReservationsInput>, CustomerUncheckedUpdateWithoutReservationsInput>
  }

  export type BabyUpdateOneWithoutReservationsNestedInput = {
    create?: XOR<BabyCreateWithoutReservationsInput, BabyUncheckedCreateWithoutReservationsInput>
    connectOrCreate?: BabyCreateOrConnectWithoutReservationsInput
    upsert?: BabyUpsertWithoutReservationsInput
    disconnect?: BabyWhereInput | boolean
    delete?: BabyWhereInput | boolean
    connect?: BabyWhereUniqueInput
    update?: XOR<XOR<BabyUpdateToOneWithWhereWithoutReservationsInput, BabyUpdateWithoutReservationsInput>, BabyUncheckedUpdateWithoutReservationsInput>
  }

  export type UserUpdateOneWithoutMidwifeReservationsNestedInput = {
    create?: XOR<UserCreateWithoutMidwifeReservationsInput, UserUncheckedCreateWithoutMidwifeReservationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMidwifeReservationsInput
    upsert?: UserUpsertWithoutMidwifeReservationsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMidwifeReservationsInput, UserUpdateWithoutMidwifeReservationsInput>, UserUncheckedUpdateWithoutMidwifeReservationsInput>
  }

  export type ReservationTreatmentUpdateManyWithoutReservationNestedInput = {
    create?: XOR<ReservationTreatmentCreateWithoutReservationInput, ReservationTreatmentUncheckedCreateWithoutReservationInput> | ReservationTreatmentCreateWithoutReservationInput[] | ReservationTreatmentUncheckedCreateWithoutReservationInput[]
    connectOrCreate?: ReservationTreatmentCreateOrConnectWithoutReservationInput | ReservationTreatmentCreateOrConnectWithoutReservationInput[]
    upsert?: ReservationTreatmentUpsertWithWhereUniqueWithoutReservationInput | ReservationTreatmentUpsertWithWhereUniqueWithoutReservationInput[]
    createMany?: ReservationTreatmentCreateManyReservationInputEnvelope
    set?: ReservationTreatmentWhereUniqueInput | ReservationTreatmentWhereUniqueInput[]
    disconnect?: ReservationTreatmentWhereUniqueInput | ReservationTreatmentWhereUniqueInput[]
    delete?: ReservationTreatmentWhereUniqueInput | ReservationTreatmentWhereUniqueInput[]
    connect?: ReservationTreatmentWhereUniqueInput | ReservationTreatmentWhereUniqueInput[]
    update?: ReservationTreatmentUpdateWithWhereUniqueWithoutReservationInput | ReservationTreatmentUpdateWithWhereUniqueWithoutReservationInput[]
    updateMany?: ReservationTreatmentUpdateManyWithWhereWithoutReservationInput | ReservationTreatmentUpdateManyWithWhereWithoutReservationInput[]
    deleteMany?: ReservationTreatmentScalarWhereInput | ReservationTreatmentScalarWhereInput[]
  }

  export type ReservationAuditLogUpdateManyWithoutReservationNestedInput = {
    create?: XOR<ReservationAuditLogCreateWithoutReservationInput, ReservationAuditLogUncheckedCreateWithoutReservationInput> | ReservationAuditLogCreateWithoutReservationInput[] | ReservationAuditLogUncheckedCreateWithoutReservationInput[]
    connectOrCreate?: ReservationAuditLogCreateOrConnectWithoutReservationInput | ReservationAuditLogCreateOrConnectWithoutReservationInput[]
    upsert?: ReservationAuditLogUpsertWithWhereUniqueWithoutReservationInput | ReservationAuditLogUpsertWithWhereUniqueWithoutReservationInput[]
    createMany?: ReservationAuditLogCreateManyReservationInputEnvelope
    set?: ReservationAuditLogWhereUniqueInput | ReservationAuditLogWhereUniqueInput[]
    disconnect?: ReservationAuditLogWhereUniqueInput | ReservationAuditLogWhereUniqueInput[]
    delete?: ReservationAuditLogWhereUniqueInput | ReservationAuditLogWhereUniqueInput[]
    connect?: ReservationAuditLogWhereUniqueInput | ReservationAuditLogWhereUniqueInput[]
    update?: ReservationAuditLogUpdateWithWhereUniqueWithoutReservationInput | ReservationAuditLogUpdateWithWhereUniqueWithoutReservationInput[]
    updateMany?: ReservationAuditLogUpdateManyWithWhereWithoutReservationInput | ReservationAuditLogUpdateManyWithWhereWithoutReservationInput[]
    deleteMany?: ReservationAuditLogScalarWhereInput | ReservationAuditLogScalarWhereInput[]
  }

  export type NotificationUpdateManyWithoutReservationNestedInput = {
    create?: XOR<NotificationCreateWithoutReservationInput, NotificationUncheckedCreateWithoutReservationInput> | NotificationCreateWithoutReservationInput[] | NotificationUncheckedCreateWithoutReservationInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutReservationInput | NotificationCreateOrConnectWithoutReservationInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutReservationInput | NotificationUpsertWithWhereUniqueWithoutReservationInput[]
    createMany?: NotificationCreateManyReservationInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutReservationInput | NotificationUpdateWithWhereUniqueWithoutReservationInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutReservationInput | NotificationUpdateManyWithWhereWithoutReservationInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type ReservationTreatmentUncheckedUpdateManyWithoutReservationNestedInput = {
    create?: XOR<ReservationTreatmentCreateWithoutReservationInput, ReservationTreatmentUncheckedCreateWithoutReservationInput> | ReservationTreatmentCreateWithoutReservationInput[] | ReservationTreatmentUncheckedCreateWithoutReservationInput[]
    connectOrCreate?: ReservationTreatmentCreateOrConnectWithoutReservationInput | ReservationTreatmentCreateOrConnectWithoutReservationInput[]
    upsert?: ReservationTreatmentUpsertWithWhereUniqueWithoutReservationInput | ReservationTreatmentUpsertWithWhereUniqueWithoutReservationInput[]
    createMany?: ReservationTreatmentCreateManyReservationInputEnvelope
    set?: ReservationTreatmentWhereUniqueInput | ReservationTreatmentWhereUniqueInput[]
    disconnect?: ReservationTreatmentWhereUniqueInput | ReservationTreatmentWhereUniqueInput[]
    delete?: ReservationTreatmentWhereUniqueInput | ReservationTreatmentWhereUniqueInput[]
    connect?: ReservationTreatmentWhereUniqueInput | ReservationTreatmentWhereUniqueInput[]
    update?: ReservationTreatmentUpdateWithWhereUniqueWithoutReservationInput | ReservationTreatmentUpdateWithWhereUniqueWithoutReservationInput[]
    updateMany?: ReservationTreatmentUpdateManyWithWhereWithoutReservationInput | ReservationTreatmentUpdateManyWithWhereWithoutReservationInput[]
    deleteMany?: ReservationTreatmentScalarWhereInput | ReservationTreatmentScalarWhereInput[]
  }

  export type ReservationAuditLogUncheckedUpdateManyWithoutReservationNestedInput = {
    create?: XOR<ReservationAuditLogCreateWithoutReservationInput, ReservationAuditLogUncheckedCreateWithoutReservationInput> | ReservationAuditLogCreateWithoutReservationInput[] | ReservationAuditLogUncheckedCreateWithoutReservationInput[]
    connectOrCreate?: ReservationAuditLogCreateOrConnectWithoutReservationInput | ReservationAuditLogCreateOrConnectWithoutReservationInput[]
    upsert?: ReservationAuditLogUpsertWithWhereUniqueWithoutReservationInput | ReservationAuditLogUpsertWithWhereUniqueWithoutReservationInput[]
    createMany?: ReservationAuditLogCreateManyReservationInputEnvelope
    set?: ReservationAuditLogWhereUniqueInput | ReservationAuditLogWhereUniqueInput[]
    disconnect?: ReservationAuditLogWhereUniqueInput | ReservationAuditLogWhereUniqueInput[]
    delete?: ReservationAuditLogWhereUniqueInput | ReservationAuditLogWhereUniqueInput[]
    connect?: ReservationAuditLogWhereUniqueInput | ReservationAuditLogWhereUniqueInput[]
    update?: ReservationAuditLogUpdateWithWhereUniqueWithoutReservationInput | ReservationAuditLogUpdateWithWhereUniqueWithoutReservationInput[]
    updateMany?: ReservationAuditLogUpdateManyWithWhereWithoutReservationInput | ReservationAuditLogUpdateManyWithWhereWithoutReservationInput[]
    deleteMany?: ReservationAuditLogScalarWhereInput | ReservationAuditLogScalarWhereInput[]
  }

  export type NotificationUncheckedUpdateManyWithoutReservationNestedInput = {
    create?: XOR<NotificationCreateWithoutReservationInput, NotificationUncheckedCreateWithoutReservationInput> | NotificationCreateWithoutReservationInput[] | NotificationUncheckedCreateWithoutReservationInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutReservationInput | NotificationCreateOrConnectWithoutReservationInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutReservationInput | NotificationUpsertWithWhereUniqueWithoutReservationInput[]
    createMany?: NotificationCreateManyReservationInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutReservationInput | NotificationUpdateWithWhereUniqueWithoutReservationInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutReservationInput | NotificationUpdateManyWithWhereWithoutReservationInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type ReservationCreateNestedOneWithoutItemsInput = {
    create?: XOR<ReservationCreateWithoutItemsInput, ReservationUncheckedCreateWithoutItemsInput>
    connectOrCreate?: ReservationCreateOrConnectWithoutItemsInput
    connect?: ReservationWhereUniqueInput
  }

  export type TreatmentCreateNestedOneWithoutReservationItemsInput = {
    create?: XOR<TreatmentCreateWithoutReservationItemsInput, TreatmentUncheckedCreateWithoutReservationItemsInput>
    connectOrCreate?: TreatmentCreateOrConnectWithoutReservationItemsInput
    connect?: TreatmentWhereUniqueInput
  }

  export type ReservationUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<ReservationCreateWithoutItemsInput, ReservationUncheckedCreateWithoutItemsInput>
    connectOrCreate?: ReservationCreateOrConnectWithoutItemsInput
    upsert?: ReservationUpsertWithoutItemsInput
    connect?: ReservationWhereUniqueInput
    update?: XOR<XOR<ReservationUpdateToOneWithWhereWithoutItemsInput, ReservationUpdateWithoutItemsInput>, ReservationUncheckedUpdateWithoutItemsInput>
  }

  export type TreatmentUpdateOneRequiredWithoutReservationItemsNestedInput = {
    create?: XOR<TreatmentCreateWithoutReservationItemsInput, TreatmentUncheckedCreateWithoutReservationItemsInput>
    connectOrCreate?: TreatmentCreateOrConnectWithoutReservationItemsInput
    upsert?: TreatmentUpsertWithoutReservationItemsInput
    connect?: TreatmentWhereUniqueInput
    update?: XOR<XOR<TreatmentUpdateToOneWithWhereWithoutReservationItemsInput, TreatmentUpdateWithoutReservationItemsInput>, TreatmentUncheckedUpdateWithoutReservationItemsInput>
  }

  export type ReservationCreateNestedOneWithoutAuditLogsInput = {
    create?: XOR<ReservationCreateWithoutAuditLogsInput, ReservationUncheckedCreateWithoutAuditLogsInput>
    connectOrCreate?: ReservationCreateOrConnectWithoutAuditLogsInput
    connect?: ReservationWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutReservationAuditLogsInput = {
    create?: XOR<UserCreateWithoutReservationAuditLogsInput, UserUncheckedCreateWithoutReservationAuditLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReservationAuditLogsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumReservationAuditActionFieldUpdateOperationsInput = {
    set?: $Enums.ReservationAuditAction
  }

  export type NullableEnumReservationStatusFieldUpdateOperationsInput = {
    set?: $Enums.ReservationStatus | null
  }

  export type ReservationUpdateOneRequiredWithoutAuditLogsNestedInput = {
    create?: XOR<ReservationCreateWithoutAuditLogsInput, ReservationUncheckedCreateWithoutAuditLogsInput>
    connectOrCreate?: ReservationCreateOrConnectWithoutAuditLogsInput
    upsert?: ReservationUpsertWithoutAuditLogsInput
    connect?: ReservationWhereUniqueInput
    update?: XOR<XOR<ReservationUpdateToOneWithWhereWithoutAuditLogsInput, ReservationUpdateWithoutAuditLogsInput>, ReservationUncheckedUpdateWithoutAuditLogsInput>
  }

  export type UserUpdateOneWithoutReservationAuditLogsNestedInput = {
    create?: XOR<UserCreateWithoutReservationAuditLogsInput, UserUncheckedCreateWithoutReservationAuditLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReservationAuditLogsInput
    upsert?: UserUpsertWithoutReservationAuditLogsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReservationAuditLogsInput, UserUpdateWithoutReservationAuditLogsInput>, UserUncheckedUpdateWithoutReservationAuditLogsInput>
  }

  export type UserCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput
    connect?: UserWhereUniqueInput
  }

  export type ReservationCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<ReservationCreateWithoutNotificationsInput, ReservationUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: ReservationCreateOrConnectWithoutNotificationsInput
    connect?: ReservationWhereUniqueInput
  }

  export type EnumNotificationTypeFieldUpdateOperationsInput = {
    set?: $Enums.NotificationType
  }

  export type EnumNotificationStatusFieldUpdateOperationsInput = {
    set?: $Enums.NotificationStatus
  }

  export type UserUpdateOneWithoutNotificationsNestedInput = {
    create?: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput
    upsert?: UserUpsertWithoutNotificationsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutNotificationsInput, UserUpdateWithoutNotificationsInput>, UserUncheckedUpdateWithoutNotificationsInput>
  }

  export type ReservationUpdateOneWithoutNotificationsNestedInput = {
    create?: XOR<ReservationCreateWithoutNotificationsInput, ReservationUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: ReservationCreateOrConnectWithoutNotificationsInput
    upsert?: ReservationUpsertWithoutNotificationsInput
    disconnect?: ReservationWhereInput | boolean
    delete?: ReservationWhereInput | boolean
    connect?: ReservationWhereUniqueInput
    update?: XOR<XOR<ReservationUpdateToOneWithWhereWithoutNotificationsInput, ReservationUpdateWithoutNotificationsInput>, ReservationUncheckedUpdateWithoutNotificationsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedEnumBabyGenderNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.BabyGender | EnumBabyGenderFieldRefInput<$PrismaModel> | null
    in?: $Enums.BabyGender[] | null
    notIn?: $Enums.BabyGender[] | null
    not?: NestedEnumBabyGenderNullableFilter<$PrismaModel> | $Enums.BabyGender | null
  }

  export type NestedEnumBabyGenderNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BabyGender | EnumBabyGenderFieldRefInput<$PrismaModel> | null
    in?: $Enums.BabyGender[] | null
    notIn?: $Enums.BabyGender[] | null
    not?: NestedEnumBabyGenderNullableWithAggregatesFilter<$PrismaModel> | $Enums.BabyGender | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumBabyGenderNullableFilter<$PrismaModel>
    _max?: NestedEnumBabyGenderNullableFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumReservationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ReservationStatus | EnumReservationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ReservationStatus[]
    notIn?: $Enums.ReservationStatus[]
    not?: NestedEnumReservationStatusFilter<$PrismaModel> | $Enums.ReservationStatus
  }

  export type NestedEnumReservationChannelFilter<$PrismaModel = never> = {
    equals?: $Enums.ReservationChannel | EnumReservationChannelFieldRefInput<$PrismaModel>
    in?: $Enums.ReservationChannel[]
    notIn?: $Enums.ReservationChannel[]
    not?: NestedEnumReservationChannelFilter<$PrismaModel> | $Enums.ReservationChannel
  }

  export type NestedEnumServiceTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ServiceType | EnumServiceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ServiceType[]
    notIn?: $Enums.ServiceType[]
    not?: NestedEnumServiceTypeFilter<$PrismaModel> | $Enums.ServiceType
  }

  export type NestedEnumReservationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ReservationStatus | EnumReservationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ReservationStatus[]
    notIn?: $Enums.ReservationStatus[]
    not?: NestedEnumReservationStatusWithAggregatesFilter<$PrismaModel> | $Enums.ReservationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumReservationStatusFilter<$PrismaModel>
    _max?: NestedEnumReservationStatusFilter<$PrismaModel>
  }

  export type NestedEnumReservationChannelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ReservationChannel | EnumReservationChannelFieldRefInput<$PrismaModel>
    in?: $Enums.ReservationChannel[]
    notIn?: $Enums.ReservationChannel[]
    not?: NestedEnumReservationChannelWithAggregatesFilter<$PrismaModel> | $Enums.ReservationChannel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumReservationChannelFilter<$PrismaModel>
    _max?: NestedEnumReservationChannelFilter<$PrismaModel>
  }

  export type NestedEnumServiceTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ServiceType | EnumServiceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ServiceType[]
    notIn?: $Enums.ServiceType[]
    not?: NestedEnumServiceTypeWithAggregatesFilter<$PrismaModel> | $Enums.ServiceType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumServiceTypeFilter<$PrismaModel>
    _max?: NestedEnumServiceTypeFilter<$PrismaModel>
  }

  export type NestedEnumReservationAuditActionFilter<$PrismaModel = never> = {
    equals?: $Enums.ReservationAuditAction | EnumReservationAuditActionFieldRefInput<$PrismaModel>
    in?: $Enums.ReservationAuditAction[]
    notIn?: $Enums.ReservationAuditAction[]
    not?: NestedEnumReservationAuditActionFilter<$PrismaModel> | $Enums.ReservationAuditAction
  }

  export type NestedEnumReservationStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.ReservationStatus | EnumReservationStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.ReservationStatus[] | null
    notIn?: $Enums.ReservationStatus[] | null
    not?: NestedEnumReservationStatusNullableFilter<$PrismaModel> | $Enums.ReservationStatus | null
  }

  export type NestedEnumReservationAuditActionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ReservationAuditAction | EnumReservationAuditActionFieldRefInput<$PrismaModel>
    in?: $Enums.ReservationAuditAction[]
    notIn?: $Enums.ReservationAuditAction[]
    not?: NestedEnumReservationAuditActionWithAggregatesFilter<$PrismaModel> | $Enums.ReservationAuditAction
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumReservationAuditActionFilter<$PrismaModel>
    _max?: NestedEnumReservationAuditActionFilter<$PrismaModel>
  }

  export type NestedEnumReservationStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ReservationStatus | EnumReservationStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.ReservationStatus[] | null
    notIn?: $Enums.ReservationStatus[] | null
    not?: NestedEnumReservationStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.ReservationStatus | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumReservationStatusNullableFilter<$PrismaModel>
    _max?: NestedEnumReservationStatusNullableFilter<$PrismaModel>
  }

  export type NestedEnumNotificationTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | EnumNotificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationType[]
    notIn?: $Enums.NotificationType[]
    not?: NestedEnumNotificationTypeFilter<$PrismaModel> | $Enums.NotificationType
  }

  export type NestedEnumNotificationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationStatus | EnumNotificationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationStatus[]
    notIn?: $Enums.NotificationStatus[]
    not?: NestedEnumNotificationStatusFilter<$PrismaModel> | $Enums.NotificationStatus
  }

  export type NestedEnumNotificationTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | EnumNotificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationType[]
    notIn?: $Enums.NotificationType[]
    not?: NestedEnumNotificationTypeWithAggregatesFilter<$PrismaModel> | $Enums.NotificationType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumNotificationTypeFilter<$PrismaModel>
    _max?: NestedEnumNotificationTypeFilter<$PrismaModel>
  }

  export type NestedEnumNotificationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationStatus | EnumNotificationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationStatus[]
    notIn?: $Enums.NotificationStatus[]
    not?: NestedEnumNotificationStatusWithAggregatesFilter<$PrismaModel> | $Enums.NotificationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumNotificationStatusFilter<$PrismaModel>
    _max?: NestedEnumNotificationStatusFilter<$PrismaModel>
  }

  export type UserCreateWithoutAccountsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    password?: string | null
    role?: $Enums.Role
    sessions?: SessionCreateNestedManyWithoutUserInput
    midwifeReservations?: ReservationCreateNestedManyWithoutMidwifeInput
    reservationAuditLogs?: ReservationAuditLogCreateNestedManyWithoutActorInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAccountsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    password?: string | null
    role?: $Enums.Role
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    midwifeReservations?: ReservationUncheckedCreateNestedManyWithoutMidwifeInput
    reservationAuditLogs?: ReservationAuditLogUncheckedCreateNestedManyWithoutActorInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
  }

  export type UserUpsertWithoutAccountsInput = {
    update: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    sessions?: SessionUpdateManyWithoutUserNestedInput
    midwifeReservations?: ReservationUpdateManyWithoutMidwifeNestedInput
    reservationAuditLogs?: ReservationAuditLogUpdateManyWithoutActorNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    midwifeReservations?: ReservationUncheckedUpdateManyWithoutMidwifeNestedInput
    reservationAuditLogs?: ReservationAuditLogUncheckedUpdateManyWithoutActorNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutSessionsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    password?: string | null
    role?: $Enums.Role
    accounts?: AccountCreateNestedManyWithoutUserInput
    midwifeReservations?: ReservationCreateNestedManyWithoutMidwifeInput
    reservationAuditLogs?: ReservationAuditLogCreateNestedManyWithoutActorInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    password?: string | null
    role?: $Enums.Role
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    midwifeReservations?: ReservationUncheckedCreateNestedManyWithoutMidwifeInput
    reservationAuditLogs?: ReservationAuditLogUncheckedCreateNestedManyWithoutActorInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    accounts?: AccountUpdateManyWithoutUserNestedInput
    midwifeReservations?: ReservationUpdateManyWithoutMidwifeNestedInput
    reservationAuditLogs?: ReservationAuditLogUpdateManyWithoutActorNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    midwifeReservations?: ReservationUncheckedUpdateManyWithoutMidwifeNestedInput
    reservationAuditLogs?: ReservationAuditLogUncheckedUpdateManyWithoutActorNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AccountCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    refresh_token_expires_in?: number | null
  }

  export type AccountUncheckedCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    refresh_token_expires_in?: number | null
  }

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountCreateManyUserInputEnvelope = {
    data: AccountCreateManyUserInput | AccountCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SessionCreateWithoutUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ReservationCreateWithoutMidwifeInput = {
    id?: string
    startAt: Date | string
    endAt: Date | string
    status?: $Enums.ReservationStatus
    channel?: $Enums.ReservationChannel
    serviceType?: $Enums.ServiceType
    notes?: string | null
    cancelledAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    customer: CustomerCreateNestedOneWithoutReservationsInput
    baby?: BabyCreateNestedOneWithoutReservationsInput
    items?: ReservationTreatmentCreateNestedManyWithoutReservationInput
    auditLogs?: ReservationAuditLogCreateNestedManyWithoutReservationInput
    notifications?: NotificationCreateNestedManyWithoutReservationInput
  }

  export type ReservationUncheckedCreateWithoutMidwifeInput = {
    id?: string
    customerId: string
    babyId?: string | null
    startAt: Date | string
    endAt: Date | string
    status?: $Enums.ReservationStatus
    channel?: $Enums.ReservationChannel
    serviceType?: $Enums.ServiceType
    notes?: string | null
    cancelledAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: ReservationTreatmentUncheckedCreateNestedManyWithoutReservationInput
    auditLogs?: ReservationAuditLogUncheckedCreateNestedManyWithoutReservationInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutReservationInput
  }

  export type ReservationCreateOrConnectWithoutMidwifeInput = {
    where: ReservationWhereUniqueInput
    create: XOR<ReservationCreateWithoutMidwifeInput, ReservationUncheckedCreateWithoutMidwifeInput>
  }

  export type ReservationCreateManyMidwifeInputEnvelope = {
    data: ReservationCreateManyMidwifeInput | ReservationCreateManyMidwifeInput[]
    skipDuplicates?: boolean
  }

  export type ReservationAuditLogCreateWithoutActorInput = {
    id?: string
    action: $Enums.ReservationAuditAction
    fromStatus?: $Enums.ReservationStatus | null
    toStatus?: $Enums.ReservationStatus | null
    message?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    reservation: ReservationCreateNestedOneWithoutAuditLogsInput
  }

  export type ReservationAuditLogUncheckedCreateWithoutActorInput = {
    id?: string
    reservationId: string
    action: $Enums.ReservationAuditAction
    fromStatus?: $Enums.ReservationStatus | null
    toStatus?: $Enums.ReservationStatus | null
    message?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReservationAuditLogCreateOrConnectWithoutActorInput = {
    where: ReservationAuditLogWhereUniqueInput
    create: XOR<ReservationAuditLogCreateWithoutActorInput, ReservationAuditLogUncheckedCreateWithoutActorInput>
  }

  export type ReservationAuditLogCreateManyActorInputEnvelope = {
    data: ReservationAuditLogCreateManyActorInput | ReservationAuditLogCreateManyActorInput[]
    skipDuplicates?: boolean
  }

  export type NotificationCreateWithoutUserInput = {
    id?: string
    type: $Enums.NotificationType
    status?: $Enums.NotificationStatus
    title: string
    body: string
    readAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    reservation?: ReservationCreateNestedOneWithoutNotificationsInput
  }

  export type NotificationUncheckedCreateWithoutUserInput = {
    id?: string
    type: $Enums.NotificationType
    status?: $Enums.NotificationStatus
    reservationId?: string | null
    title: string
    body: string
    readAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificationCreateOrConnectWithoutUserInput = {
    where: NotificationWhereUniqueInput
    create: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput>
  }

  export type NotificationCreateManyUserInputEnvelope = {
    data: NotificationCreateManyUserInput | NotificationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AccountUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
  }

  export type AccountUpdateManyWithWhereWithoutUserInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutUserInput>
  }

  export type AccountScalarWhereInput = {
    AND?: AccountScalarWhereInput | AccountScalarWhereInput[]
    OR?: AccountScalarWhereInput[]
    NOT?: AccountScalarWhereInput | AccountScalarWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    refresh_token_expires_in?: IntNullableFilter<"Account"> | number | null
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
  }

  export type ReservationUpsertWithWhereUniqueWithoutMidwifeInput = {
    where: ReservationWhereUniqueInput
    update: XOR<ReservationUpdateWithoutMidwifeInput, ReservationUncheckedUpdateWithoutMidwifeInput>
    create: XOR<ReservationCreateWithoutMidwifeInput, ReservationUncheckedCreateWithoutMidwifeInput>
  }

  export type ReservationUpdateWithWhereUniqueWithoutMidwifeInput = {
    where: ReservationWhereUniqueInput
    data: XOR<ReservationUpdateWithoutMidwifeInput, ReservationUncheckedUpdateWithoutMidwifeInput>
  }

  export type ReservationUpdateManyWithWhereWithoutMidwifeInput = {
    where: ReservationScalarWhereInput
    data: XOR<ReservationUpdateManyMutationInput, ReservationUncheckedUpdateManyWithoutMidwifeInput>
  }

  export type ReservationScalarWhereInput = {
    AND?: ReservationScalarWhereInput | ReservationScalarWhereInput[]
    OR?: ReservationScalarWhereInput[]
    NOT?: ReservationScalarWhereInput | ReservationScalarWhereInput[]
    id?: StringFilter<"Reservation"> | string
    customerId?: StringFilter<"Reservation"> | string
    babyId?: StringNullableFilter<"Reservation"> | string | null
    midwifeId?: StringNullableFilter<"Reservation"> | string | null
    startAt?: DateTimeFilter<"Reservation"> | Date | string
    endAt?: DateTimeFilter<"Reservation"> | Date | string
    status?: EnumReservationStatusFilter<"Reservation"> | $Enums.ReservationStatus
    channel?: EnumReservationChannelFilter<"Reservation"> | $Enums.ReservationChannel
    serviceType?: EnumServiceTypeFilter<"Reservation"> | $Enums.ServiceType
    notes?: StringNullableFilter<"Reservation"> | string | null
    cancelledAt?: DateTimeNullableFilter<"Reservation"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"Reservation"> | Date | string | null
    createdAt?: DateTimeFilter<"Reservation"> | Date | string
    updatedAt?: DateTimeFilter<"Reservation"> | Date | string
  }

  export type ReservationAuditLogUpsertWithWhereUniqueWithoutActorInput = {
    where: ReservationAuditLogWhereUniqueInput
    update: XOR<ReservationAuditLogUpdateWithoutActorInput, ReservationAuditLogUncheckedUpdateWithoutActorInput>
    create: XOR<ReservationAuditLogCreateWithoutActorInput, ReservationAuditLogUncheckedCreateWithoutActorInput>
  }

  export type ReservationAuditLogUpdateWithWhereUniqueWithoutActorInput = {
    where: ReservationAuditLogWhereUniqueInput
    data: XOR<ReservationAuditLogUpdateWithoutActorInput, ReservationAuditLogUncheckedUpdateWithoutActorInput>
  }

  export type ReservationAuditLogUpdateManyWithWhereWithoutActorInput = {
    where: ReservationAuditLogScalarWhereInput
    data: XOR<ReservationAuditLogUpdateManyMutationInput, ReservationAuditLogUncheckedUpdateManyWithoutActorInput>
  }

  export type ReservationAuditLogScalarWhereInput = {
    AND?: ReservationAuditLogScalarWhereInput | ReservationAuditLogScalarWhereInput[]
    OR?: ReservationAuditLogScalarWhereInput[]
    NOT?: ReservationAuditLogScalarWhereInput | ReservationAuditLogScalarWhereInput[]
    id?: StringFilter<"ReservationAuditLog"> | string
    reservationId?: StringFilter<"ReservationAuditLog"> | string
    action?: EnumReservationAuditActionFilter<"ReservationAuditLog"> | $Enums.ReservationAuditAction
    fromStatus?: EnumReservationStatusNullableFilter<"ReservationAuditLog"> | $Enums.ReservationStatus | null
    toStatus?: EnumReservationStatusNullableFilter<"ReservationAuditLog"> | $Enums.ReservationStatus | null
    actorId?: StringNullableFilter<"ReservationAuditLog"> | string | null
    message?: StringNullableFilter<"ReservationAuditLog"> | string | null
    createdAt?: DateTimeFilter<"ReservationAuditLog"> | Date | string
    updatedAt?: DateTimeFilter<"ReservationAuditLog"> | Date | string
  }

  export type NotificationUpsertWithWhereUniqueWithoutUserInput = {
    where: NotificationWhereUniqueInput
    update: XOR<NotificationUpdateWithoutUserInput, NotificationUncheckedUpdateWithoutUserInput>
    create: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput>
  }

  export type NotificationUpdateWithWhereUniqueWithoutUserInput = {
    where: NotificationWhereUniqueInput
    data: XOR<NotificationUpdateWithoutUserInput, NotificationUncheckedUpdateWithoutUserInput>
  }

  export type NotificationUpdateManyWithWhereWithoutUserInput = {
    where: NotificationScalarWhereInput
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyWithoutUserInput>
  }

  export type NotificationScalarWhereInput = {
    AND?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    OR?: NotificationScalarWhereInput[]
    NOT?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    id?: StringFilter<"Notification"> | string
    type?: EnumNotificationTypeFilter<"Notification"> | $Enums.NotificationType
    status?: EnumNotificationStatusFilter<"Notification"> | $Enums.NotificationStatus
    userId?: StringNullableFilter<"Notification"> | string | null
    reservationId?: StringNullableFilter<"Notification"> | string | null
    title?: StringFilter<"Notification"> | string
    body?: StringFilter<"Notification"> | string
    readAt?: DateTimeNullableFilter<"Notification"> | Date | string | null
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    updatedAt?: DateTimeFilter<"Notification"> | Date | string
  }

  export type BabyCreateWithoutCustomerInput = {
    id?: string
    name: string
    gender?: $Enums.BabyGender | null
    birthDate?: Date | string | null
    notes?: string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    reservations?: ReservationCreateNestedManyWithoutBabyInput
  }

  export type BabyUncheckedCreateWithoutCustomerInput = {
    id?: string
    name: string
    gender?: $Enums.BabyGender | null
    birthDate?: Date | string | null
    notes?: string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    reservations?: ReservationUncheckedCreateNestedManyWithoutBabyInput
  }

  export type BabyCreateOrConnectWithoutCustomerInput = {
    where: BabyWhereUniqueInput
    create: XOR<BabyCreateWithoutCustomerInput, BabyUncheckedCreateWithoutCustomerInput>
  }

  export type BabyCreateManyCustomerInputEnvelope = {
    data: BabyCreateManyCustomerInput | BabyCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type ReservationCreateWithoutCustomerInput = {
    id?: string
    startAt: Date | string
    endAt: Date | string
    status?: $Enums.ReservationStatus
    channel?: $Enums.ReservationChannel
    serviceType?: $Enums.ServiceType
    notes?: string | null
    cancelledAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    baby?: BabyCreateNestedOneWithoutReservationsInput
    midwife?: UserCreateNestedOneWithoutMidwifeReservationsInput
    items?: ReservationTreatmentCreateNestedManyWithoutReservationInput
    auditLogs?: ReservationAuditLogCreateNestedManyWithoutReservationInput
    notifications?: NotificationCreateNestedManyWithoutReservationInput
  }

  export type ReservationUncheckedCreateWithoutCustomerInput = {
    id?: string
    babyId?: string | null
    midwifeId?: string | null
    startAt: Date | string
    endAt: Date | string
    status?: $Enums.ReservationStatus
    channel?: $Enums.ReservationChannel
    serviceType?: $Enums.ServiceType
    notes?: string | null
    cancelledAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: ReservationTreatmentUncheckedCreateNestedManyWithoutReservationInput
    auditLogs?: ReservationAuditLogUncheckedCreateNestedManyWithoutReservationInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutReservationInput
  }

  export type ReservationCreateOrConnectWithoutCustomerInput = {
    where: ReservationWhereUniqueInput
    create: XOR<ReservationCreateWithoutCustomerInput, ReservationUncheckedCreateWithoutCustomerInput>
  }

  export type ReservationCreateManyCustomerInputEnvelope = {
    data: ReservationCreateManyCustomerInput | ReservationCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type BabyUpsertWithWhereUniqueWithoutCustomerInput = {
    where: BabyWhereUniqueInput
    update: XOR<BabyUpdateWithoutCustomerInput, BabyUncheckedUpdateWithoutCustomerInput>
    create: XOR<BabyCreateWithoutCustomerInput, BabyUncheckedCreateWithoutCustomerInput>
  }

  export type BabyUpdateWithWhereUniqueWithoutCustomerInput = {
    where: BabyWhereUniqueInput
    data: XOR<BabyUpdateWithoutCustomerInput, BabyUncheckedUpdateWithoutCustomerInput>
  }

  export type BabyUpdateManyWithWhereWithoutCustomerInput = {
    where: BabyScalarWhereInput
    data: XOR<BabyUpdateManyMutationInput, BabyUncheckedUpdateManyWithoutCustomerInput>
  }

  export type BabyScalarWhereInput = {
    AND?: BabyScalarWhereInput | BabyScalarWhereInput[]
    OR?: BabyScalarWhereInput[]
    NOT?: BabyScalarWhereInput | BabyScalarWhereInput[]
    id?: StringFilter<"Baby"> | string
    customerId?: StringFilter<"Baby"> | string
    name?: StringFilter<"Baby"> | string
    gender?: EnumBabyGenderNullableFilter<"Baby"> | $Enums.BabyGender | null
    birthDate?: DateTimeNullableFilter<"Baby"> | Date | string | null
    notes?: StringNullableFilter<"Baby"> | string | null
    deletedAt?: DateTimeNullableFilter<"Baby"> | Date | string | null
    createdAt?: DateTimeFilter<"Baby"> | Date | string
    updatedAt?: DateTimeFilter<"Baby"> | Date | string
  }

  export type ReservationUpsertWithWhereUniqueWithoutCustomerInput = {
    where: ReservationWhereUniqueInput
    update: XOR<ReservationUpdateWithoutCustomerInput, ReservationUncheckedUpdateWithoutCustomerInput>
    create: XOR<ReservationCreateWithoutCustomerInput, ReservationUncheckedCreateWithoutCustomerInput>
  }

  export type ReservationUpdateWithWhereUniqueWithoutCustomerInput = {
    where: ReservationWhereUniqueInput
    data: XOR<ReservationUpdateWithoutCustomerInput, ReservationUncheckedUpdateWithoutCustomerInput>
  }

  export type ReservationUpdateManyWithWhereWithoutCustomerInput = {
    where: ReservationScalarWhereInput
    data: XOR<ReservationUpdateManyMutationInput, ReservationUncheckedUpdateManyWithoutCustomerInput>
  }

  export type CustomerCreateWithoutBabiesInput = {
    id?: string
    motherName: string
    motherPhone: string
    motherEmail?: string | null
    address?: string | null
    notes?: string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    reservations?: ReservationCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateWithoutBabiesInput = {
    id?: string
    motherName: string
    motherPhone: string
    motherEmail?: string | null
    address?: string | null
    notes?: string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    reservations?: ReservationUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerCreateOrConnectWithoutBabiesInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutBabiesInput, CustomerUncheckedCreateWithoutBabiesInput>
  }

  export type ReservationCreateWithoutBabyInput = {
    id?: string
    startAt: Date | string
    endAt: Date | string
    status?: $Enums.ReservationStatus
    channel?: $Enums.ReservationChannel
    serviceType?: $Enums.ServiceType
    notes?: string | null
    cancelledAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    customer: CustomerCreateNestedOneWithoutReservationsInput
    midwife?: UserCreateNestedOneWithoutMidwifeReservationsInput
    items?: ReservationTreatmentCreateNestedManyWithoutReservationInput
    auditLogs?: ReservationAuditLogCreateNestedManyWithoutReservationInput
    notifications?: NotificationCreateNestedManyWithoutReservationInput
  }

  export type ReservationUncheckedCreateWithoutBabyInput = {
    id?: string
    customerId: string
    midwifeId?: string | null
    startAt: Date | string
    endAt: Date | string
    status?: $Enums.ReservationStatus
    channel?: $Enums.ReservationChannel
    serviceType?: $Enums.ServiceType
    notes?: string | null
    cancelledAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: ReservationTreatmentUncheckedCreateNestedManyWithoutReservationInput
    auditLogs?: ReservationAuditLogUncheckedCreateNestedManyWithoutReservationInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutReservationInput
  }

  export type ReservationCreateOrConnectWithoutBabyInput = {
    where: ReservationWhereUniqueInput
    create: XOR<ReservationCreateWithoutBabyInput, ReservationUncheckedCreateWithoutBabyInput>
  }

  export type ReservationCreateManyBabyInputEnvelope = {
    data: ReservationCreateManyBabyInput | ReservationCreateManyBabyInput[]
    skipDuplicates?: boolean
  }

  export type CustomerUpsertWithoutBabiesInput = {
    update: XOR<CustomerUpdateWithoutBabiesInput, CustomerUncheckedUpdateWithoutBabiesInput>
    create: XOR<CustomerCreateWithoutBabiesInput, CustomerUncheckedCreateWithoutBabiesInput>
    where?: CustomerWhereInput
  }

  export type CustomerUpdateToOneWithWhereWithoutBabiesInput = {
    where?: CustomerWhereInput
    data: XOR<CustomerUpdateWithoutBabiesInput, CustomerUncheckedUpdateWithoutBabiesInput>
  }

  export type CustomerUpdateWithoutBabiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    motherName?: StringFieldUpdateOperationsInput | string
    motherPhone?: StringFieldUpdateOperationsInput | string
    motherEmail?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reservations?: ReservationUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateWithoutBabiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    motherName?: StringFieldUpdateOperationsInput | string
    motherPhone?: StringFieldUpdateOperationsInput | string
    motherEmail?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reservations?: ReservationUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type ReservationUpsertWithWhereUniqueWithoutBabyInput = {
    where: ReservationWhereUniqueInput
    update: XOR<ReservationUpdateWithoutBabyInput, ReservationUncheckedUpdateWithoutBabyInput>
    create: XOR<ReservationCreateWithoutBabyInput, ReservationUncheckedCreateWithoutBabyInput>
  }

  export type ReservationUpdateWithWhereUniqueWithoutBabyInput = {
    where: ReservationWhereUniqueInput
    data: XOR<ReservationUpdateWithoutBabyInput, ReservationUncheckedUpdateWithoutBabyInput>
  }

  export type ReservationUpdateManyWithWhereWithoutBabyInput = {
    where: ReservationScalarWhereInput
    data: XOR<ReservationUpdateManyMutationInput, ReservationUncheckedUpdateManyWithoutBabyInput>
  }

  export type ReservationTreatmentCreateWithoutTreatmentInput = {
    id?: string
    quantity?: number
    unitPrice: Decimal | DecimalJsLike | number | string
    durationMinutes: number
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    reservation: ReservationCreateNestedOneWithoutItemsInput
  }

  export type ReservationTreatmentUncheckedCreateWithoutTreatmentInput = {
    id?: string
    reservationId: string
    quantity?: number
    unitPrice: Decimal | DecimalJsLike | number | string
    durationMinutes: number
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReservationTreatmentCreateOrConnectWithoutTreatmentInput = {
    where: ReservationTreatmentWhereUniqueInput
    create: XOR<ReservationTreatmentCreateWithoutTreatmentInput, ReservationTreatmentUncheckedCreateWithoutTreatmentInput>
  }

  export type ReservationTreatmentCreateManyTreatmentInputEnvelope = {
    data: ReservationTreatmentCreateManyTreatmentInput | ReservationTreatmentCreateManyTreatmentInput[]
    skipDuplicates?: boolean
  }

  export type ReservationTreatmentUpsertWithWhereUniqueWithoutTreatmentInput = {
    where: ReservationTreatmentWhereUniqueInput
    update: XOR<ReservationTreatmentUpdateWithoutTreatmentInput, ReservationTreatmentUncheckedUpdateWithoutTreatmentInput>
    create: XOR<ReservationTreatmentCreateWithoutTreatmentInput, ReservationTreatmentUncheckedCreateWithoutTreatmentInput>
  }

  export type ReservationTreatmentUpdateWithWhereUniqueWithoutTreatmentInput = {
    where: ReservationTreatmentWhereUniqueInput
    data: XOR<ReservationTreatmentUpdateWithoutTreatmentInput, ReservationTreatmentUncheckedUpdateWithoutTreatmentInput>
  }

  export type ReservationTreatmentUpdateManyWithWhereWithoutTreatmentInput = {
    where: ReservationTreatmentScalarWhereInput
    data: XOR<ReservationTreatmentUpdateManyMutationInput, ReservationTreatmentUncheckedUpdateManyWithoutTreatmentInput>
  }

  export type ReservationTreatmentScalarWhereInput = {
    AND?: ReservationTreatmentScalarWhereInput | ReservationTreatmentScalarWhereInput[]
    OR?: ReservationTreatmentScalarWhereInput[]
    NOT?: ReservationTreatmentScalarWhereInput | ReservationTreatmentScalarWhereInput[]
    id?: StringFilter<"ReservationTreatment"> | string
    reservationId?: StringFilter<"ReservationTreatment"> | string
    treatmentId?: StringFilter<"ReservationTreatment"> | string
    quantity?: IntFilter<"ReservationTreatment"> | number
    unitPrice?: DecimalFilter<"ReservationTreatment"> | Decimal | DecimalJsLike | number | string
    durationMinutes?: IntFilter<"ReservationTreatment"> | number
    notes?: StringNullableFilter<"ReservationTreatment"> | string | null
    createdAt?: DateTimeFilter<"ReservationTreatment"> | Date | string
    updatedAt?: DateTimeFilter<"ReservationTreatment"> | Date | string
  }

  export type CustomerCreateWithoutReservationsInput = {
    id?: string
    motherName: string
    motherPhone: string
    motherEmail?: string | null
    address?: string | null
    notes?: string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    babies?: BabyCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateWithoutReservationsInput = {
    id?: string
    motherName: string
    motherPhone: string
    motherEmail?: string | null
    address?: string | null
    notes?: string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    babies?: BabyUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerCreateOrConnectWithoutReservationsInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutReservationsInput, CustomerUncheckedCreateWithoutReservationsInput>
  }

  export type BabyCreateWithoutReservationsInput = {
    id?: string
    name: string
    gender?: $Enums.BabyGender | null
    birthDate?: Date | string | null
    notes?: string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    customer: CustomerCreateNestedOneWithoutBabiesInput
  }

  export type BabyUncheckedCreateWithoutReservationsInput = {
    id?: string
    customerId: string
    name: string
    gender?: $Enums.BabyGender | null
    birthDate?: Date | string | null
    notes?: string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BabyCreateOrConnectWithoutReservationsInput = {
    where: BabyWhereUniqueInput
    create: XOR<BabyCreateWithoutReservationsInput, BabyUncheckedCreateWithoutReservationsInput>
  }

  export type UserCreateWithoutMidwifeReservationsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    password?: string | null
    role?: $Enums.Role
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    reservationAuditLogs?: ReservationAuditLogCreateNestedManyWithoutActorInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMidwifeReservationsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    password?: string | null
    role?: $Enums.Role
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    reservationAuditLogs?: ReservationAuditLogUncheckedCreateNestedManyWithoutActorInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMidwifeReservationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMidwifeReservationsInput, UserUncheckedCreateWithoutMidwifeReservationsInput>
  }

  export type ReservationTreatmentCreateWithoutReservationInput = {
    id?: string
    quantity?: number
    unitPrice: Decimal | DecimalJsLike | number | string
    durationMinutes: number
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    treatment: TreatmentCreateNestedOneWithoutReservationItemsInput
  }

  export type ReservationTreatmentUncheckedCreateWithoutReservationInput = {
    id?: string
    treatmentId: string
    quantity?: number
    unitPrice: Decimal | DecimalJsLike | number | string
    durationMinutes: number
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReservationTreatmentCreateOrConnectWithoutReservationInput = {
    where: ReservationTreatmentWhereUniqueInput
    create: XOR<ReservationTreatmentCreateWithoutReservationInput, ReservationTreatmentUncheckedCreateWithoutReservationInput>
  }

  export type ReservationTreatmentCreateManyReservationInputEnvelope = {
    data: ReservationTreatmentCreateManyReservationInput | ReservationTreatmentCreateManyReservationInput[]
    skipDuplicates?: boolean
  }

  export type ReservationAuditLogCreateWithoutReservationInput = {
    id?: string
    action: $Enums.ReservationAuditAction
    fromStatus?: $Enums.ReservationStatus | null
    toStatus?: $Enums.ReservationStatus | null
    message?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    actor?: UserCreateNestedOneWithoutReservationAuditLogsInput
  }

  export type ReservationAuditLogUncheckedCreateWithoutReservationInput = {
    id?: string
    action: $Enums.ReservationAuditAction
    fromStatus?: $Enums.ReservationStatus | null
    toStatus?: $Enums.ReservationStatus | null
    actorId?: string | null
    message?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReservationAuditLogCreateOrConnectWithoutReservationInput = {
    where: ReservationAuditLogWhereUniqueInput
    create: XOR<ReservationAuditLogCreateWithoutReservationInput, ReservationAuditLogUncheckedCreateWithoutReservationInput>
  }

  export type ReservationAuditLogCreateManyReservationInputEnvelope = {
    data: ReservationAuditLogCreateManyReservationInput | ReservationAuditLogCreateManyReservationInput[]
    skipDuplicates?: boolean
  }

  export type NotificationCreateWithoutReservationInput = {
    id?: string
    type: $Enums.NotificationType
    status?: $Enums.NotificationStatus
    title: string
    body: string
    readAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutNotificationsInput
  }

  export type NotificationUncheckedCreateWithoutReservationInput = {
    id?: string
    type: $Enums.NotificationType
    status?: $Enums.NotificationStatus
    userId?: string | null
    title: string
    body: string
    readAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificationCreateOrConnectWithoutReservationInput = {
    where: NotificationWhereUniqueInput
    create: XOR<NotificationCreateWithoutReservationInput, NotificationUncheckedCreateWithoutReservationInput>
  }

  export type NotificationCreateManyReservationInputEnvelope = {
    data: NotificationCreateManyReservationInput | NotificationCreateManyReservationInput[]
    skipDuplicates?: boolean
  }

  export type CustomerUpsertWithoutReservationsInput = {
    update: XOR<CustomerUpdateWithoutReservationsInput, CustomerUncheckedUpdateWithoutReservationsInput>
    create: XOR<CustomerCreateWithoutReservationsInput, CustomerUncheckedCreateWithoutReservationsInput>
    where?: CustomerWhereInput
  }

  export type CustomerUpdateToOneWithWhereWithoutReservationsInput = {
    where?: CustomerWhereInput
    data: XOR<CustomerUpdateWithoutReservationsInput, CustomerUncheckedUpdateWithoutReservationsInput>
  }

  export type CustomerUpdateWithoutReservationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    motherName?: StringFieldUpdateOperationsInput | string
    motherPhone?: StringFieldUpdateOperationsInput | string
    motherEmail?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    babies?: BabyUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateWithoutReservationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    motherName?: StringFieldUpdateOperationsInput | string
    motherPhone?: StringFieldUpdateOperationsInput | string
    motherEmail?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    babies?: BabyUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type BabyUpsertWithoutReservationsInput = {
    update: XOR<BabyUpdateWithoutReservationsInput, BabyUncheckedUpdateWithoutReservationsInput>
    create: XOR<BabyCreateWithoutReservationsInput, BabyUncheckedCreateWithoutReservationsInput>
    where?: BabyWhereInput
  }

  export type BabyUpdateToOneWithWhereWithoutReservationsInput = {
    where?: BabyWhereInput
    data: XOR<BabyUpdateWithoutReservationsInput, BabyUncheckedUpdateWithoutReservationsInput>
  }

  export type BabyUpdateWithoutReservationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: NullableEnumBabyGenderFieldUpdateOperationsInput | $Enums.BabyGender | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneRequiredWithoutBabiesNestedInput
  }

  export type BabyUncheckedUpdateWithoutReservationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: NullableEnumBabyGenderFieldUpdateOperationsInput | $Enums.BabyGender | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutMidwifeReservationsInput = {
    update: XOR<UserUpdateWithoutMidwifeReservationsInput, UserUncheckedUpdateWithoutMidwifeReservationsInput>
    create: XOR<UserCreateWithoutMidwifeReservationsInput, UserUncheckedCreateWithoutMidwifeReservationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMidwifeReservationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMidwifeReservationsInput, UserUncheckedUpdateWithoutMidwifeReservationsInput>
  }

  export type UserUpdateWithoutMidwifeReservationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    reservationAuditLogs?: ReservationAuditLogUpdateManyWithoutActorNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMidwifeReservationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    reservationAuditLogs?: ReservationAuditLogUncheckedUpdateManyWithoutActorNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ReservationTreatmentUpsertWithWhereUniqueWithoutReservationInput = {
    where: ReservationTreatmentWhereUniqueInput
    update: XOR<ReservationTreatmentUpdateWithoutReservationInput, ReservationTreatmentUncheckedUpdateWithoutReservationInput>
    create: XOR<ReservationTreatmentCreateWithoutReservationInput, ReservationTreatmentUncheckedCreateWithoutReservationInput>
  }

  export type ReservationTreatmentUpdateWithWhereUniqueWithoutReservationInput = {
    where: ReservationTreatmentWhereUniqueInput
    data: XOR<ReservationTreatmentUpdateWithoutReservationInput, ReservationTreatmentUncheckedUpdateWithoutReservationInput>
  }

  export type ReservationTreatmentUpdateManyWithWhereWithoutReservationInput = {
    where: ReservationTreatmentScalarWhereInput
    data: XOR<ReservationTreatmentUpdateManyMutationInput, ReservationTreatmentUncheckedUpdateManyWithoutReservationInput>
  }

  export type ReservationAuditLogUpsertWithWhereUniqueWithoutReservationInput = {
    where: ReservationAuditLogWhereUniqueInput
    update: XOR<ReservationAuditLogUpdateWithoutReservationInput, ReservationAuditLogUncheckedUpdateWithoutReservationInput>
    create: XOR<ReservationAuditLogCreateWithoutReservationInput, ReservationAuditLogUncheckedCreateWithoutReservationInput>
  }

  export type ReservationAuditLogUpdateWithWhereUniqueWithoutReservationInput = {
    where: ReservationAuditLogWhereUniqueInput
    data: XOR<ReservationAuditLogUpdateWithoutReservationInput, ReservationAuditLogUncheckedUpdateWithoutReservationInput>
  }

  export type ReservationAuditLogUpdateManyWithWhereWithoutReservationInput = {
    where: ReservationAuditLogScalarWhereInput
    data: XOR<ReservationAuditLogUpdateManyMutationInput, ReservationAuditLogUncheckedUpdateManyWithoutReservationInput>
  }

  export type NotificationUpsertWithWhereUniqueWithoutReservationInput = {
    where: NotificationWhereUniqueInput
    update: XOR<NotificationUpdateWithoutReservationInput, NotificationUncheckedUpdateWithoutReservationInput>
    create: XOR<NotificationCreateWithoutReservationInput, NotificationUncheckedCreateWithoutReservationInput>
  }

  export type NotificationUpdateWithWhereUniqueWithoutReservationInput = {
    where: NotificationWhereUniqueInput
    data: XOR<NotificationUpdateWithoutReservationInput, NotificationUncheckedUpdateWithoutReservationInput>
  }

  export type NotificationUpdateManyWithWhereWithoutReservationInput = {
    where: NotificationScalarWhereInput
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyWithoutReservationInput>
  }

  export type ReservationCreateWithoutItemsInput = {
    id?: string
    startAt: Date | string
    endAt: Date | string
    status?: $Enums.ReservationStatus
    channel?: $Enums.ReservationChannel
    serviceType?: $Enums.ServiceType
    notes?: string | null
    cancelledAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    customer: CustomerCreateNestedOneWithoutReservationsInput
    baby?: BabyCreateNestedOneWithoutReservationsInput
    midwife?: UserCreateNestedOneWithoutMidwifeReservationsInput
    auditLogs?: ReservationAuditLogCreateNestedManyWithoutReservationInput
    notifications?: NotificationCreateNestedManyWithoutReservationInput
  }

  export type ReservationUncheckedCreateWithoutItemsInput = {
    id?: string
    customerId: string
    babyId?: string | null
    midwifeId?: string | null
    startAt: Date | string
    endAt: Date | string
    status?: $Enums.ReservationStatus
    channel?: $Enums.ReservationChannel
    serviceType?: $Enums.ServiceType
    notes?: string | null
    cancelledAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    auditLogs?: ReservationAuditLogUncheckedCreateNestedManyWithoutReservationInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutReservationInput
  }

  export type ReservationCreateOrConnectWithoutItemsInput = {
    where: ReservationWhereUniqueInput
    create: XOR<ReservationCreateWithoutItemsInput, ReservationUncheckedCreateWithoutItemsInput>
  }

  export type TreatmentCreateWithoutReservationItemsInput = {
    id?: string
    name: string
    description?: string | null
    durationMinutes: number
    basePrice: Decimal | DecimalJsLike | number | string
    isActive?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TreatmentUncheckedCreateWithoutReservationItemsInput = {
    id?: string
    name: string
    description?: string | null
    durationMinutes: number
    basePrice: Decimal | DecimalJsLike | number | string
    isActive?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TreatmentCreateOrConnectWithoutReservationItemsInput = {
    where: TreatmentWhereUniqueInput
    create: XOR<TreatmentCreateWithoutReservationItemsInput, TreatmentUncheckedCreateWithoutReservationItemsInput>
  }

  export type ReservationUpsertWithoutItemsInput = {
    update: XOR<ReservationUpdateWithoutItemsInput, ReservationUncheckedUpdateWithoutItemsInput>
    create: XOR<ReservationCreateWithoutItemsInput, ReservationUncheckedCreateWithoutItemsInput>
    where?: ReservationWhereInput
  }

  export type ReservationUpdateToOneWithWhereWithoutItemsInput = {
    where?: ReservationWhereInput
    data: XOR<ReservationUpdateWithoutItemsInput, ReservationUncheckedUpdateWithoutItemsInput>
  }

  export type ReservationUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    channel?: EnumReservationChannelFieldUpdateOperationsInput | $Enums.ReservationChannel
    serviceType?: EnumServiceTypeFieldUpdateOperationsInput | $Enums.ServiceType
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneRequiredWithoutReservationsNestedInput
    baby?: BabyUpdateOneWithoutReservationsNestedInput
    midwife?: UserUpdateOneWithoutMidwifeReservationsNestedInput
    auditLogs?: ReservationAuditLogUpdateManyWithoutReservationNestedInput
    notifications?: NotificationUpdateManyWithoutReservationNestedInput
  }

  export type ReservationUncheckedUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    babyId?: NullableStringFieldUpdateOperationsInput | string | null
    midwifeId?: NullableStringFieldUpdateOperationsInput | string | null
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    channel?: EnumReservationChannelFieldUpdateOperationsInput | $Enums.ReservationChannel
    serviceType?: EnumServiceTypeFieldUpdateOperationsInput | $Enums.ServiceType
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    auditLogs?: ReservationAuditLogUncheckedUpdateManyWithoutReservationNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutReservationNestedInput
  }

  export type TreatmentUpsertWithoutReservationItemsInput = {
    update: XOR<TreatmentUpdateWithoutReservationItemsInput, TreatmentUncheckedUpdateWithoutReservationItemsInput>
    create: XOR<TreatmentCreateWithoutReservationItemsInput, TreatmentUncheckedCreateWithoutReservationItemsInput>
    where?: TreatmentWhereInput
  }

  export type TreatmentUpdateToOneWithWhereWithoutReservationItemsInput = {
    where?: TreatmentWhereInput
    data: XOR<TreatmentUpdateWithoutReservationItemsInput, TreatmentUncheckedUpdateWithoutReservationItemsInput>
  }

  export type TreatmentUpdateWithoutReservationItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    durationMinutes?: IntFieldUpdateOperationsInput | number
    basePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TreatmentUncheckedUpdateWithoutReservationItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    durationMinutes?: IntFieldUpdateOperationsInput | number
    basePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservationCreateWithoutAuditLogsInput = {
    id?: string
    startAt: Date | string
    endAt: Date | string
    status?: $Enums.ReservationStatus
    channel?: $Enums.ReservationChannel
    serviceType?: $Enums.ServiceType
    notes?: string | null
    cancelledAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    customer: CustomerCreateNestedOneWithoutReservationsInput
    baby?: BabyCreateNestedOneWithoutReservationsInput
    midwife?: UserCreateNestedOneWithoutMidwifeReservationsInput
    items?: ReservationTreatmentCreateNestedManyWithoutReservationInput
    notifications?: NotificationCreateNestedManyWithoutReservationInput
  }

  export type ReservationUncheckedCreateWithoutAuditLogsInput = {
    id?: string
    customerId: string
    babyId?: string | null
    midwifeId?: string | null
    startAt: Date | string
    endAt: Date | string
    status?: $Enums.ReservationStatus
    channel?: $Enums.ReservationChannel
    serviceType?: $Enums.ServiceType
    notes?: string | null
    cancelledAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: ReservationTreatmentUncheckedCreateNestedManyWithoutReservationInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutReservationInput
  }

  export type ReservationCreateOrConnectWithoutAuditLogsInput = {
    where: ReservationWhereUniqueInput
    create: XOR<ReservationCreateWithoutAuditLogsInput, ReservationUncheckedCreateWithoutAuditLogsInput>
  }

  export type UserCreateWithoutReservationAuditLogsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    password?: string | null
    role?: $Enums.Role
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    midwifeReservations?: ReservationCreateNestedManyWithoutMidwifeInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutReservationAuditLogsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    password?: string | null
    role?: $Enums.Role
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    midwifeReservations?: ReservationUncheckedCreateNestedManyWithoutMidwifeInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutReservationAuditLogsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReservationAuditLogsInput, UserUncheckedCreateWithoutReservationAuditLogsInput>
  }

  export type ReservationUpsertWithoutAuditLogsInput = {
    update: XOR<ReservationUpdateWithoutAuditLogsInput, ReservationUncheckedUpdateWithoutAuditLogsInput>
    create: XOR<ReservationCreateWithoutAuditLogsInput, ReservationUncheckedCreateWithoutAuditLogsInput>
    where?: ReservationWhereInput
  }

  export type ReservationUpdateToOneWithWhereWithoutAuditLogsInput = {
    where?: ReservationWhereInput
    data: XOR<ReservationUpdateWithoutAuditLogsInput, ReservationUncheckedUpdateWithoutAuditLogsInput>
  }

  export type ReservationUpdateWithoutAuditLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    channel?: EnumReservationChannelFieldUpdateOperationsInput | $Enums.ReservationChannel
    serviceType?: EnumServiceTypeFieldUpdateOperationsInput | $Enums.ServiceType
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneRequiredWithoutReservationsNestedInput
    baby?: BabyUpdateOneWithoutReservationsNestedInput
    midwife?: UserUpdateOneWithoutMidwifeReservationsNestedInput
    items?: ReservationTreatmentUpdateManyWithoutReservationNestedInput
    notifications?: NotificationUpdateManyWithoutReservationNestedInput
  }

  export type ReservationUncheckedUpdateWithoutAuditLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    babyId?: NullableStringFieldUpdateOperationsInput | string | null
    midwifeId?: NullableStringFieldUpdateOperationsInput | string | null
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    channel?: EnumReservationChannelFieldUpdateOperationsInput | $Enums.ReservationChannel
    serviceType?: EnumServiceTypeFieldUpdateOperationsInput | $Enums.ServiceType
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: ReservationTreatmentUncheckedUpdateManyWithoutReservationNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutReservationNestedInput
  }

  export type UserUpsertWithoutReservationAuditLogsInput = {
    update: XOR<UserUpdateWithoutReservationAuditLogsInput, UserUncheckedUpdateWithoutReservationAuditLogsInput>
    create: XOR<UserCreateWithoutReservationAuditLogsInput, UserUncheckedCreateWithoutReservationAuditLogsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReservationAuditLogsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReservationAuditLogsInput, UserUncheckedUpdateWithoutReservationAuditLogsInput>
  }

  export type UserUpdateWithoutReservationAuditLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    midwifeReservations?: ReservationUpdateManyWithoutMidwifeNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReservationAuditLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    midwifeReservations?: ReservationUncheckedUpdateManyWithoutMidwifeNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutNotificationsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    password?: string | null
    role?: $Enums.Role
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    midwifeReservations?: ReservationCreateNestedManyWithoutMidwifeInput
    reservationAuditLogs?: ReservationAuditLogCreateNestedManyWithoutActorInput
  }

  export type UserUncheckedCreateWithoutNotificationsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    password?: string | null
    role?: $Enums.Role
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    midwifeReservations?: ReservationUncheckedCreateNestedManyWithoutMidwifeInput
    reservationAuditLogs?: ReservationAuditLogUncheckedCreateNestedManyWithoutActorInput
  }

  export type UserCreateOrConnectWithoutNotificationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
  }

  export type ReservationCreateWithoutNotificationsInput = {
    id?: string
    startAt: Date | string
    endAt: Date | string
    status?: $Enums.ReservationStatus
    channel?: $Enums.ReservationChannel
    serviceType?: $Enums.ServiceType
    notes?: string | null
    cancelledAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    customer: CustomerCreateNestedOneWithoutReservationsInput
    baby?: BabyCreateNestedOneWithoutReservationsInput
    midwife?: UserCreateNestedOneWithoutMidwifeReservationsInput
    items?: ReservationTreatmentCreateNestedManyWithoutReservationInput
    auditLogs?: ReservationAuditLogCreateNestedManyWithoutReservationInput
  }

  export type ReservationUncheckedCreateWithoutNotificationsInput = {
    id?: string
    customerId: string
    babyId?: string | null
    midwifeId?: string | null
    startAt: Date | string
    endAt: Date | string
    status?: $Enums.ReservationStatus
    channel?: $Enums.ReservationChannel
    serviceType?: $Enums.ServiceType
    notes?: string | null
    cancelledAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: ReservationTreatmentUncheckedCreateNestedManyWithoutReservationInput
    auditLogs?: ReservationAuditLogUncheckedCreateNestedManyWithoutReservationInput
  }

  export type ReservationCreateOrConnectWithoutNotificationsInput = {
    where: ReservationWhereUniqueInput
    create: XOR<ReservationCreateWithoutNotificationsInput, ReservationUncheckedCreateWithoutNotificationsInput>
  }

  export type UserUpsertWithoutNotificationsInput = {
    update: XOR<UserUpdateWithoutNotificationsInput, UserUncheckedUpdateWithoutNotificationsInput>
    create: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutNotificationsInput, UserUncheckedUpdateWithoutNotificationsInput>
  }

  export type UserUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    midwifeReservations?: ReservationUpdateManyWithoutMidwifeNestedInput
    reservationAuditLogs?: ReservationAuditLogUpdateManyWithoutActorNestedInput
  }

  export type UserUncheckedUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    midwifeReservations?: ReservationUncheckedUpdateManyWithoutMidwifeNestedInput
    reservationAuditLogs?: ReservationAuditLogUncheckedUpdateManyWithoutActorNestedInput
  }

  export type ReservationUpsertWithoutNotificationsInput = {
    update: XOR<ReservationUpdateWithoutNotificationsInput, ReservationUncheckedUpdateWithoutNotificationsInput>
    create: XOR<ReservationCreateWithoutNotificationsInput, ReservationUncheckedCreateWithoutNotificationsInput>
    where?: ReservationWhereInput
  }

  export type ReservationUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: ReservationWhereInput
    data: XOR<ReservationUpdateWithoutNotificationsInput, ReservationUncheckedUpdateWithoutNotificationsInput>
  }

  export type ReservationUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    channel?: EnumReservationChannelFieldUpdateOperationsInput | $Enums.ReservationChannel
    serviceType?: EnumServiceTypeFieldUpdateOperationsInput | $Enums.ServiceType
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneRequiredWithoutReservationsNestedInput
    baby?: BabyUpdateOneWithoutReservationsNestedInput
    midwife?: UserUpdateOneWithoutMidwifeReservationsNestedInput
    items?: ReservationTreatmentUpdateManyWithoutReservationNestedInput
    auditLogs?: ReservationAuditLogUpdateManyWithoutReservationNestedInput
  }

  export type ReservationUncheckedUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    babyId?: NullableStringFieldUpdateOperationsInput | string | null
    midwifeId?: NullableStringFieldUpdateOperationsInput | string | null
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    channel?: EnumReservationChannelFieldUpdateOperationsInput | $Enums.ReservationChannel
    serviceType?: EnumServiceTypeFieldUpdateOperationsInput | $Enums.ServiceType
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: ReservationTreatmentUncheckedUpdateManyWithoutReservationNestedInput
    auditLogs?: ReservationAuditLogUncheckedUpdateManyWithoutReservationNestedInput
  }

  export type AccountCreateManyUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    refresh_token_expires_in?: number | null
  }

  export type SessionCreateManyUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type ReservationCreateManyMidwifeInput = {
    id?: string
    customerId: string
    babyId?: string | null
    startAt: Date | string
    endAt: Date | string
    status?: $Enums.ReservationStatus
    channel?: $Enums.ReservationChannel
    serviceType?: $Enums.ServiceType
    notes?: string | null
    cancelledAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReservationAuditLogCreateManyActorInput = {
    id?: string
    reservationId: string
    action: $Enums.ReservationAuditAction
    fromStatus?: $Enums.ReservationStatus | null
    toStatus?: $Enums.ReservationStatus | null
    message?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificationCreateManyUserInput = {
    id?: string
    type: $Enums.NotificationType
    status?: $Enums.NotificationStatus
    reservationId?: string | null
    title: string
    body: string
    readAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token_expires_in?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AccountUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token_expires_in?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AccountUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token_expires_in?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservationUpdateWithoutMidwifeInput = {
    id?: StringFieldUpdateOperationsInput | string
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    channel?: EnumReservationChannelFieldUpdateOperationsInput | $Enums.ReservationChannel
    serviceType?: EnumServiceTypeFieldUpdateOperationsInput | $Enums.ServiceType
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneRequiredWithoutReservationsNestedInput
    baby?: BabyUpdateOneWithoutReservationsNestedInput
    items?: ReservationTreatmentUpdateManyWithoutReservationNestedInput
    auditLogs?: ReservationAuditLogUpdateManyWithoutReservationNestedInput
    notifications?: NotificationUpdateManyWithoutReservationNestedInput
  }

  export type ReservationUncheckedUpdateWithoutMidwifeInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    babyId?: NullableStringFieldUpdateOperationsInput | string | null
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    channel?: EnumReservationChannelFieldUpdateOperationsInput | $Enums.ReservationChannel
    serviceType?: EnumServiceTypeFieldUpdateOperationsInput | $Enums.ServiceType
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: ReservationTreatmentUncheckedUpdateManyWithoutReservationNestedInput
    auditLogs?: ReservationAuditLogUncheckedUpdateManyWithoutReservationNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutReservationNestedInput
  }

  export type ReservationUncheckedUpdateManyWithoutMidwifeInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    babyId?: NullableStringFieldUpdateOperationsInput | string | null
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    channel?: EnumReservationChannelFieldUpdateOperationsInput | $Enums.ReservationChannel
    serviceType?: EnumServiceTypeFieldUpdateOperationsInput | $Enums.ServiceType
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservationAuditLogUpdateWithoutActorInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: EnumReservationAuditActionFieldUpdateOperationsInput | $Enums.ReservationAuditAction
    fromStatus?: NullableEnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus | null
    toStatus?: NullableEnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reservation?: ReservationUpdateOneRequiredWithoutAuditLogsNestedInput
  }

  export type ReservationAuditLogUncheckedUpdateWithoutActorInput = {
    id?: StringFieldUpdateOperationsInput | string
    reservationId?: StringFieldUpdateOperationsInput | string
    action?: EnumReservationAuditActionFieldUpdateOperationsInput | $Enums.ReservationAuditAction
    fromStatus?: NullableEnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus | null
    toStatus?: NullableEnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservationAuditLogUncheckedUpdateManyWithoutActorInput = {
    id?: StringFieldUpdateOperationsInput | string
    reservationId?: StringFieldUpdateOperationsInput | string
    action?: EnumReservationAuditActionFieldUpdateOperationsInput | $Enums.ReservationAuditAction
    fromStatus?: NullableEnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus | null
    toStatus?: NullableEnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    status?: EnumNotificationStatusFieldUpdateOperationsInput | $Enums.NotificationStatus
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reservation?: ReservationUpdateOneWithoutNotificationsNestedInput
  }

  export type NotificationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    status?: EnumNotificationStatusFieldUpdateOperationsInput | $Enums.NotificationStatus
    reservationId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    status?: EnumNotificationStatusFieldUpdateOperationsInput | $Enums.NotificationStatus
    reservationId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BabyCreateManyCustomerInput = {
    id?: string
    name: string
    gender?: $Enums.BabyGender | null
    birthDate?: Date | string | null
    notes?: string | null
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReservationCreateManyCustomerInput = {
    id?: string
    babyId?: string | null
    midwifeId?: string | null
    startAt: Date | string
    endAt: Date | string
    status?: $Enums.ReservationStatus
    channel?: $Enums.ReservationChannel
    serviceType?: $Enums.ServiceType
    notes?: string | null
    cancelledAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BabyUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: NullableEnumBabyGenderFieldUpdateOperationsInput | $Enums.BabyGender | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reservations?: ReservationUpdateManyWithoutBabyNestedInput
  }

  export type BabyUncheckedUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: NullableEnumBabyGenderFieldUpdateOperationsInput | $Enums.BabyGender | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reservations?: ReservationUncheckedUpdateManyWithoutBabyNestedInput
  }

  export type BabyUncheckedUpdateManyWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: NullableEnumBabyGenderFieldUpdateOperationsInput | $Enums.BabyGender | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservationUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    channel?: EnumReservationChannelFieldUpdateOperationsInput | $Enums.ReservationChannel
    serviceType?: EnumServiceTypeFieldUpdateOperationsInput | $Enums.ServiceType
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    baby?: BabyUpdateOneWithoutReservationsNestedInput
    midwife?: UserUpdateOneWithoutMidwifeReservationsNestedInput
    items?: ReservationTreatmentUpdateManyWithoutReservationNestedInput
    auditLogs?: ReservationAuditLogUpdateManyWithoutReservationNestedInput
    notifications?: NotificationUpdateManyWithoutReservationNestedInput
  }

  export type ReservationUncheckedUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    babyId?: NullableStringFieldUpdateOperationsInput | string | null
    midwifeId?: NullableStringFieldUpdateOperationsInput | string | null
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    channel?: EnumReservationChannelFieldUpdateOperationsInput | $Enums.ReservationChannel
    serviceType?: EnumServiceTypeFieldUpdateOperationsInput | $Enums.ServiceType
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: ReservationTreatmentUncheckedUpdateManyWithoutReservationNestedInput
    auditLogs?: ReservationAuditLogUncheckedUpdateManyWithoutReservationNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutReservationNestedInput
  }

  export type ReservationUncheckedUpdateManyWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    babyId?: NullableStringFieldUpdateOperationsInput | string | null
    midwifeId?: NullableStringFieldUpdateOperationsInput | string | null
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    channel?: EnumReservationChannelFieldUpdateOperationsInput | $Enums.ReservationChannel
    serviceType?: EnumServiceTypeFieldUpdateOperationsInput | $Enums.ServiceType
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservationCreateManyBabyInput = {
    id?: string
    customerId: string
    midwifeId?: string | null
    startAt: Date | string
    endAt: Date | string
    status?: $Enums.ReservationStatus
    channel?: $Enums.ReservationChannel
    serviceType?: $Enums.ServiceType
    notes?: string | null
    cancelledAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReservationUpdateWithoutBabyInput = {
    id?: StringFieldUpdateOperationsInput | string
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    channel?: EnumReservationChannelFieldUpdateOperationsInput | $Enums.ReservationChannel
    serviceType?: EnumServiceTypeFieldUpdateOperationsInput | $Enums.ServiceType
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneRequiredWithoutReservationsNestedInput
    midwife?: UserUpdateOneWithoutMidwifeReservationsNestedInput
    items?: ReservationTreatmentUpdateManyWithoutReservationNestedInput
    auditLogs?: ReservationAuditLogUpdateManyWithoutReservationNestedInput
    notifications?: NotificationUpdateManyWithoutReservationNestedInput
  }

  export type ReservationUncheckedUpdateWithoutBabyInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    midwifeId?: NullableStringFieldUpdateOperationsInput | string | null
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    channel?: EnumReservationChannelFieldUpdateOperationsInput | $Enums.ReservationChannel
    serviceType?: EnumServiceTypeFieldUpdateOperationsInput | $Enums.ServiceType
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: ReservationTreatmentUncheckedUpdateManyWithoutReservationNestedInput
    auditLogs?: ReservationAuditLogUncheckedUpdateManyWithoutReservationNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutReservationNestedInput
  }

  export type ReservationUncheckedUpdateManyWithoutBabyInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    midwifeId?: NullableStringFieldUpdateOperationsInput | string | null
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    channel?: EnumReservationChannelFieldUpdateOperationsInput | $Enums.ReservationChannel
    serviceType?: EnumServiceTypeFieldUpdateOperationsInput | $Enums.ServiceType
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservationTreatmentCreateManyTreatmentInput = {
    id?: string
    reservationId: string
    quantity?: number
    unitPrice: Decimal | DecimalJsLike | number | string
    durationMinutes: number
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReservationTreatmentUpdateWithoutTreatmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    durationMinutes?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reservation?: ReservationUpdateOneRequiredWithoutItemsNestedInput
  }

  export type ReservationTreatmentUncheckedUpdateWithoutTreatmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    reservationId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    durationMinutes?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservationTreatmentUncheckedUpdateManyWithoutTreatmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    reservationId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    durationMinutes?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservationTreatmentCreateManyReservationInput = {
    id?: string
    treatmentId: string
    quantity?: number
    unitPrice: Decimal | DecimalJsLike | number | string
    durationMinutes: number
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReservationAuditLogCreateManyReservationInput = {
    id?: string
    action: $Enums.ReservationAuditAction
    fromStatus?: $Enums.ReservationStatus | null
    toStatus?: $Enums.ReservationStatus | null
    actorId?: string | null
    message?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificationCreateManyReservationInput = {
    id?: string
    type: $Enums.NotificationType
    status?: $Enums.NotificationStatus
    userId?: string | null
    title: string
    body: string
    readAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReservationTreatmentUpdateWithoutReservationInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    durationMinutes?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    treatment?: TreatmentUpdateOneRequiredWithoutReservationItemsNestedInput
  }

  export type ReservationTreatmentUncheckedUpdateWithoutReservationInput = {
    id?: StringFieldUpdateOperationsInput | string
    treatmentId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    durationMinutes?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservationTreatmentUncheckedUpdateManyWithoutReservationInput = {
    id?: StringFieldUpdateOperationsInput | string
    treatmentId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    durationMinutes?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservationAuditLogUpdateWithoutReservationInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: EnumReservationAuditActionFieldUpdateOperationsInput | $Enums.ReservationAuditAction
    fromStatus?: NullableEnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus | null
    toStatus?: NullableEnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    actor?: UserUpdateOneWithoutReservationAuditLogsNestedInput
  }

  export type ReservationAuditLogUncheckedUpdateWithoutReservationInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: EnumReservationAuditActionFieldUpdateOperationsInput | $Enums.ReservationAuditAction
    fromStatus?: NullableEnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus | null
    toStatus?: NullableEnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus | null
    actorId?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservationAuditLogUncheckedUpdateManyWithoutReservationInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: EnumReservationAuditActionFieldUpdateOperationsInput | $Enums.ReservationAuditAction
    fromStatus?: NullableEnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus | null
    toStatus?: NullableEnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus | null
    actorId?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUpdateWithoutReservationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    status?: EnumNotificationStatusFieldUpdateOperationsInput | $Enums.NotificationStatus
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutNotificationsNestedInput
  }

  export type NotificationUncheckedUpdateWithoutReservationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    status?: EnumNotificationStatusFieldUpdateOperationsInput | $Enums.NotificationStatus
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyWithoutReservationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    status?: EnumNotificationStatusFieldUpdateOperationsInput | $Enums.NotificationStatus
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}