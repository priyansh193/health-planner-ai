
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model CountryInsight
 * 
 */
export type CountryInsight = $Result.DefaultSelection<Prisma.$CountryInsightPayload>
/**
 * Model DietChart
 * 
 */
export type DietChart = $Result.DefaultSelection<Prisma.$DietChartPayload>
/**
 * Model ProgressUpdate
 * 
 */
export type ProgressUpdate = $Result.DefaultSelection<Prisma.$ProgressUpdatePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const DietaryPreference: {
  VEGETARIAN: 'VEGETARIAN',
  NON_VEGETARIAN: 'NON_VEGETARIAN',
  VEGAN: 'VEGAN',
  EGGETARIAN: 'EGGETARIAN'
};

export type DietaryPreference = (typeof DietaryPreference)[keyof typeof DietaryPreference]

}

export type DietaryPreference = $Enums.DietaryPreference

export const DietaryPreference: typeof $Enums.DietaryPreference

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

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


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.countryInsight`: Exposes CRUD operations for the **CountryInsight** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CountryInsights
    * const countryInsights = await prisma.countryInsight.findMany()
    * ```
    */
  get countryInsight(): Prisma.CountryInsightDelegate<ExtArgs>;

  /**
   * `prisma.dietChart`: Exposes CRUD operations for the **DietChart** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DietCharts
    * const dietCharts = await prisma.dietChart.findMany()
    * ```
    */
  get dietChart(): Prisma.DietChartDelegate<ExtArgs>;

  /**
   * `prisma.progressUpdate`: Exposes CRUD operations for the **ProgressUpdate** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProgressUpdates
    * const progressUpdates = await prisma.progressUpdate.findMany()
    * ```
    */
  get progressUpdate(): Prisma.ProgressUpdateDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 5.10.2
   * Query Engine version: 5a9203d0590c951969e85a7d07215503f4672eb9
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    User: 'User',
    CountryInsight: 'CountryInsight',
    DietChart: 'DietChart',
    ProgressUpdate: 'ProgressUpdate'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'user' | 'countryInsight' | 'dietChart' | 'progressUpdate'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      CountryInsight: {
        payload: Prisma.$CountryInsightPayload<ExtArgs>
        fields: Prisma.CountryInsightFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CountryInsightFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CountryInsightPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CountryInsightFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CountryInsightPayload>
          }
          findFirst: {
            args: Prisma.CountryInsightFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CountryInsightPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CountryInsightFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CountryInsightPayload>
          }
          findMany: {
            args: Prisma.CountryInsightFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CountryInsightPayload>[]
          }
          create: {
            args: Prisma.CountryInsightCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CountryInsightPayload>
          }
          createMany: {
            args: Prisma.CountryInsightCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.CountryInsightDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CountryInsightPayload>
          }
          update: {
            args: Prisma.CountryInsightUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CountryInsightPayload>
          }
          deleteMany: {
            args: Prisma.CountryInsightDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CountryInsightUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CountryInsightUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CountryInsightPayload>
          }
          aggregate: {
            args: Prisma.CountryInsightAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCountryInsight>
          }
          groupBy: {
            args: Prisma.CountryInsightGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CountryInsightGroupByOutputType>[]
          }
          count: {
            args: Prisma.CountryInsightCountArgs<ExtArgs>,
            result: $Utils.Optional<CountryInsightCountAggregateOutputType> | number
          }
        }
      }
      DietChart: {
        payload: Prisma.$DietChartPayload<ExtArgs>
        fields: Prisma.DietChartFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DietChartFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DietChartPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DietChartFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DietChartPayload>
          }
          findFirst: {
            args: Prisma.DietChartFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DietChartPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DietChartFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DietChartPayload>
          }
          findMany: {
            args: Prisma.DietChartFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DietChartPayload>[]
          }
          create: {
            args: Prisma.DietChartCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DietChartPayload>
          }
          createMany: {
            args: Prisma.DietChartCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.DietChartDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DietChartPayload>
          }
          update: {
            args: Prisma.DietChartUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DietChartPayload>
          }
          deleteMany: {
            args: Prisma.DietChartDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.DietChartUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.DietChartUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DietChartPayload>
          }
          aggregate: {
            args: Prisma.DietChartAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateDietChart>
          }
          groupBy: {
            args: Prisma.DietChartGroupByArgs<ExtArgs>,
            result: $Utils.Optional<DietChartGroupByOutputType>[]
          }
          count: {
            args: Prisma.DietChartCountArgs<ExtArgs>,
            result: $Utils.Optional<DietChartCountAggregateOutputType> | number
          }
        }
      }
      ProgressUpdate: {
        payload: Prisma.$ProgressUpdatePayload<ExtArgs>
        fields: Prisma.ProgressUpdateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProgressUpdateFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProgressUpdatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProgressUpdateFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProgressUpdatePayload>
          }
          findFirst: {
            args: Prisma.ProgressUpdateFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProgressUpdatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProgressUpdateFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProgressUpdatePayload>
          }
          findMany: {
            args: Prisma.ProgressUpdateFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProgressUpdatePayload>[]
          }
          create: {
            args: Prisma.ProgressUpdateCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProgressUpdatePayload>
          }
          createMany: {
            args: Prisma.ProgressUpdateCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ProgressUpdateDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProgressUpdatePayload>
          }
          update: {
            args: Prisma.ProgressUpdateUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProgressUpdatePayload>
          }
          deleteMany: {
            args: Prisma.ProgressUpdateDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ProgressUpdateUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ProgressUpdateUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProgressUpdatePayload>
          }
          aggregate: {
            args: Prisma.ProgressUpdateAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateProgressUpdate>
          }
          groupBy: {
            args: Prisma.ProgressUpdateGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ProgressUpdateGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProgressUpdateCountArgs<ExtArgs>,
            result: $Utils.Optional<ProgressUpdateCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
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
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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
    | 'update'
    | 'updateMany'
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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
    dietCharts: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dietCharts?: boolean | UserCountOutputTypeCountDietChartsArgs
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
  export type UserCountOutputTypeCountDietChartsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DietChartWhereInput
  }



  /**
   * Count Type CountryInsightCountOutputType
   */

  export type CountryInsightCountOutputType = {
    users: number
  }

  export type CountryInsightCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | CountryInsightCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes

  /**
   * CountryInsightCountOutputType without action
   */
  export type CountryInsightCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CountryInsightCountOutputType
     */
    select?: CountryInsightCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * CountryInsightCountOutputType without action
   */
  export type CountryInsightCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }



  /**
   * Count Type DietChartCountOutputType
   */

  export type DietChartCountOutputType = {
    progressUpdates: number
  }

  export type DietChartCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    progressUpdates?: boolean | DietChartCountOutputTypeCountProgressUpdatesArgs
  }

  // Custom InputTypes

  /**
   * DietChartCountOutputType without action
   */
  export type DietChartCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DietChartCountOutputType
     */
    select?: DietChartCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * DietChartCountOutputType without action
   */
  export type DietChartCountOutputTypeCountProgressUpdatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProgressUpdateWhereInput
  }



  /**
   * Models
   */

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
    clerkUserId: string | null
    email: string | null
    name: string | null
    imageUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
    country: string | null
    ageGroup: string | null
    gender: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    clerkUserId: string | null
    email: string | null
    name: string | null
    imageUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
    country: string | null
    ageGroup: string | null
    gender: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    clerkUserId: number
    email: number
    name: number
    imageUrl: number
    createdAt: number
    updatedAt: number
    country: number
    ageGroup: number
    gender: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    clerkUserId?: true
    email?: true
    name?: true
    imageUrl?: true
    createdAt?: true
    updatedAt?: true
    country?: true
    ageGroup?: true
    gender?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    clerkUserId?: true
    email?: true
    name?: true
    imageUrl?: true
    createdAt?: true
    updatedAt?: true
    country?: true
    ageGroup?: true
    gender?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    clerkUserId?: true
    email?: true
    name?: true
    imageUrl?: true
    createdAt?: true
    updatedAt?: true
    country?: true
    ageGroup?: true
    gender?: true
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
    clerkUserId: string
    email: string
    name: string | null
    imageUrl: string | null
    createdAt: Date
    updatedAt: Date
    country: string | null
    ageGroup: string | null
    gender: string | null
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
    clerkUserId?: boolean
    email?: boolean
    name?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    country?: boolean
    ageGroup?: boolean
    gender?: boolean
    countryInsight?: boolean | User$countryInsightArgs<ExtArgs>
    dietCharts?: boolean | User$dietChartsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    clerkUserId?: boolean
    email?: boolean
    name?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    country?: boolean
    ageGroup?: boolean
    gender?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    countryInsight?: boolean | User$countryInsightArgs<ExtArgs>
    dietCharts?: boolean | User$dietChartsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      countryInsight: Prisma.$CountryInsightPayload<ExtArgs> | null
      dietCharts: Prisma.$DietChartPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      clerkUserId: string
      email: string
      name: string | null
      imageUrl: string | null
      createdAt: Date
      updatedAt: Date
      country: string | null
      ageGroup: string | null
      gender: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }


  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
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
    **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

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
    **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

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
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
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
    **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'>>

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
    **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

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
    **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

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
    **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

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
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    countryInsight<T extends User$countryInsightArgs<ExtArgs> = {}>(args?: Subset<T, User$countryInsightArgs<ExtArgs>>): Prisma__CountryInsightClient<$Result.GetResult<Prisma.$CountryInsightPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    dietCharts<T extends User$dietChartsArgs<ExtArgs> = {}>(args?: Subset<T, User$dietChartsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DietChartPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly clerkUserId: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly imageUrl: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly country: FieldRef<"User", 'String'>
    readonly ageGroup: FieldRef<"User", 'String'>
    readonly gender: FieldRef<"User", 'String'>
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
  }


  /**
   * User.countryInsight
   */
  export type User$countryInsightArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CountryInsight
     */
    select?: CountryInsightSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CountryInsightInclude<ExtArgs> | null
    where?: CountryInsightWhereInput
  }


  /**
   * User.dietCharts
   */
  export type User$dietChartsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DietChart
     */
    select?: DietChartSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DietChartInclude<ExtArgs> | null
    where?: DietChartWhereInput
    orderBy?: DietChartOrderByWithRelationInput | DietChartOrderByWithRelationInput[]
    cursor?: DietChartWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DietChartScalarFieldEnum | DietChartScalarFieldEnum[]
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
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
  }



  /**
   * Model CountryInsight
   */

  export type AggregateCountryInsight = {
    _count: CountryInsightCountAggregateOutputType | null
    _avg: CountryInsightAvgAggregateOutputType | null
    _sum: CountryInsightSumAggregateOutputType | null
    _min: CountryInsightMinAggregateOutputType | null
    _max: CountryInsightMaxAggregateOutputType | null
  }

  export type CountryInsightAvgAggregateOutputType = {
    averageLifeExpectancy: number | null
    aqi: number | null
    RecommendedDailySleepByAgeGroup: number | null
  }

  export type CountryInsightSumAggregateOutputType = {
    averageLifeExpectancy: number | null
    aqi: number | null
    RecommendedDailySleepByAgeGroup: number | null
  }

  export type CountryInsightMinAggregateOutputType = {
    country: string | null
    ageGroup: string | null
    id: string | null
    averageLifeExpectancy: number | null
    aqi: number | null
    aqiCategory: string | null
    RecommendedDailySleepByAgeGroup: number | null
  }

  export type CountryInsightMaxAggregateOutputType = {
    country: string | null
    ageGroup: string | null
    id: string | null
    averageLifeExpectancy: number | null
    aqi: number | null
    aqiCategory: string | null
    RecommendedDailySleepByAgeGroup: number | null
  }

  export type CountryInsightCountAggregateOutputType = {
    country: number
    ageGroup: number
    id: number
    averageLifeExpectancy: number
    aqi: number
    aqiCategory: number
    stepsRecommendationByAgeGroup: number
    RecommendedDailySleepByAgeGroup: number
    nutritionNeeds: number
    healthTips: number
    healthTrends: number
    _all: number
  }


  export type CountryInsightAvgAggregateInputType = {
    averageLifeExpectancy?: true
    aqi?: true
    RecommendedDailySleepByAgeGroup?: true
  }

  export type CountryInsightSumAggregateInputType = {
    averageLifeExpectancy?: true
    aqi?: true
    RecommendedDailySleepByAgeGroup?: true
  }

  export type CountryInsightMinAggregateInputType = {
    country?: true
    ageGroup?: true
    id?: true
    averageLifeExpectancy?: true
    aqi?: true
    aqiCategory?: true
    RecommendedDailySleepByAgeGroup?: true
  }

  export type CountryInsightMaxAggregateInputType = {
    country?: true
    ageGroup?: true
    id?: true
    averageLifeExpectancy?: true
    aqi?: true
    aqiCategory?: true
    RecommendedDailySleepByAgeGroup?: true
  }

  export type CountryInsightCountAggregateInputType = {
    country?: true
    ageGroup?: true
    id?: true
    averageLifeExpectancy?: true
    aqi?: true
    aqiCategory?: true
    stepsRecommendationByAgeGroup?: true
    RecommendedDailySleepByAgeGroup?: true
    nutritionNeeds?: true
    healthTips?: true
    healthTrends?: true
    _all?: true
  }

  export type CountryInsightAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CountryInsight to aggregate.
     */
    where?: CountryInsightWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CountryInsights to fetch.
     */
    orderBy?: CountryInsightOrderByWithRelationInput | CountryInsightOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CountryInsightWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CountryInsights from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CountryInsights.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CountryInsights
    **/
    _count?: true | CountryInsightCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CountryInsightAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CountryInsightSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CountryInsightMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CountryInsightMaxAggregateInputType
  }

  export type GetCountryInsightAggregateType<T extends CountryInsightAggregateArgs> = {
        [P in keyof T & keyof AggregateCountryInsight]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCountryInsight[P]>
      : GetScalarType<T[P], AggregateCountryInsight[P]>
  }




  export type CountryInsightGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CountryInsightWhereInput
    orderBy?: CountryInsightOrderByWithAggregationInput | CountryInsightOrderByWithAggregationInput[]
    by: CountryInsightScalarFieldEnum[] | CountryInsightScalarFieldEnum
    having?: CountryInsightScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CountryInsightCountAggregateInputType | true
    _avg?: CountryInsightAvgAggregateInputType
    _sum?: CountryInsightSumAggregateInputType
    _min?: CountryInsightMinAggregateInputType
    _max?: CountryInsightMaxAggregateInputType
  }

  export type CountryInsightGroupByOutputType = {
    country: string
    ageGroup: string
    id: string
    averageLifeExpectancy: number
    aqi: number
    aqiCategory: string
    stepsRecommendationByAgeGroup: JsonValue[]
    RecommendedDailySleepByAgeGroup: number
    nutritionNeeds: string[]
    healthTips: string[]
    healthTrends: string[]
    _count: CountryInsightCountAggregateOutputType | null
    _avg: CountryInsightAvgAggregateOutputType | null
    _sum: CountryInsightSumAggregateOutputType | null
    _min: CountryInsightMinAggregateOutputType | null
    _max: CountryInsightMaxAggregateOutputType | null
  }

  type GetCountryInsightGroupByPayload<T extends CountryInsightGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CountryInsightGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CountryInsightGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CountryInsightGroupByOutputType[P]>
            : GetScalarType<T[P], CountryInsightGroupByOutputType[P]>
        }
      >
    >


  export type CountryInsightSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    country?: boolean
    ageGroup?: boolean
    id?: boolean
    averageLifeExpectancy?: boolean
    aqi?: boolean
    aqiCategory?: boolean
    stepsRecommendationByAgeGroup?: boolean
    RecommendedDailySleepByAgeGroup?: boolean
    nutritionNeeds?: boolean
    healthTips?: boolean
    healthTrends?: boolean
    users?: boolean | CountryInsight$usersArgs<ExtArgs>
    _count?: boolean | CountryInsightCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["countryInsight"]>

  export type CountryInsightSelectScalar = {
    country?: boolean
    ageGroup?: boolean
    id?: boolean
    averageLifeExpectancy?: boolean
    aqi?: boolean
    aqiCategory?: boolean
    stepsRecommendationByAgeGroup?: boolean
    RecommendedDailySleepByAgeGroup?: boolean
    nutritionNeeds?: boolean
    healthTips?: boolean
    healthTrends?: boolean
  }

  export type CountryInsightInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | CountryInsight$usersArgs<ExtArgs>
    _count?: boolean | CountryInsightCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $CountryInsightPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CountryInsight"
    objects: {
      users: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      country: string
      ageGroup: string
      id: string
      averageLifeExpectancy: number
      aqi: number
      aqiCategory: string
      stepsRecommendationByAgeGroup: Prisma.JsonValue[]
      RecommendedDailySleepByAgeGroup: number
      nutritionNeeds: string[]
      healthTips: string[]
      healthTrends: string[]
    }, ExtArgs["result"]["countryInsight"]>
    composites: {}
  }


  type CountryInsightGetPayload<S extends boolean | null | undefined | CountryInsightDefaultArgs> = $Result.GetResult<Prisma.$CountryInsightPayload, S>

  type CountryInsightCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CountryInsightFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CountryInsightCountAggregateInputType | true
    }

  export interface CountryInsightDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CountryInsight'], meta: { name: 'CountryInsight' } }
    /**
     * Find zero or one CountryInsight that matches the filter.
     * @param {CountryInsightFindUniqueArgs} args - Arguments to find a CountryInsight
     * @example
     * // Get one CountryInsight
     * const countryInsight = await prisma.countryInsight.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CountryInsightFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CountryInsightFindUniqueArgs<ExtArgs>>
    ): Prisma__CountryInsightClient<$Result.GetResult<Prisma.$CountryInsightPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one CountryInsight that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CountryInsightFindUniqueOrThrowArgs} args - Arguments to find a CountryInsight
     * @example
     * // Get one CountryInsight
     * const countryInsight = await prisma.countryInsight.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CountryInsightFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CountryInsightFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CountryInsightClient<$Result.GetResult<Prisma.$CountryInsightPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first CountryInsight that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryInsightFindFirstArgs} args - Arguments to find a CountryInsight
     * @example
     * // Get one CountryInsight
     * const countryInsight = await prisma.countryInsight.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CountryInsightFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CountryInsightFindFirstArgs<ExtArgs>>
    ): Prisma__CountryInsightClient<$Result.GetResult<Prisma.$CountryInsightPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first CountryInsight that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryInsightFindFirstOrThrowArgs} args - Arguments to find a CountryInsight
     * @example
     * // Get one CountryInsight
     * const countryInsight = await prisma.countryInsight.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CountryInsightFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CountryInsightFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CountryInsightClient<$Result.GetResult<Prisma.$CountryInsightPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more CountryInsights that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryInsightFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CountryInsights
     * const countryInsights = await prisma.countryInsight.findMany()
     * 
     * // Get first 10 CountryInsights
     * const countryInsights = await prisma.countryInsight.findMany({ take: 10 })
     * 
     * // Only select the `country`
     * const countryInsightWithCountryOnly = await prisma.countryInsight.findMany({ select: { country: true } })
     * 
    **/
    findMany<T extends CountryInsightFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CountryInsightFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CountryInsightPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a CountryInsight.
     * @param {CountryInsightCreateArgs} args - Arguments to create a CountryInsight.
     * @example
     * // Create one CountryInsight
     * const CountryInsight = await prisma.countryInsight.create({
     *   data: {
     *     // ... data to create a CountryInsight
     *   }
     * })
     * 
    **/
    create<T extends CountryInsightCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CountryInsightCreateArgs<ExtArgs>>
    ): Prisma__CountryInsightClient<$Result.GetResult<Prisma.$CountryInsightPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many CountryInsights.
     *     @param {CountryInsightCreateManyArgs} args - Arguments to create many CountryInsights.
     *     @example
     *     // Create many CountryInsights
     *     const countryInsight = await prisma.countryInsight.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CountryInsightCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CountryInsightCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CountryInsight.
     * @param {CountryInsightDeleteArgs} args - Arguments to delete one CountryInsight.
     * @example
     * // Delete one CountryInsight
     * const CountryInsight = await prisma.countryInsight.delete({
     *   where: {
     *     // ... filter to delete one CountryInsight
     *   }
     * })
     * 
    **/
    delete<T extends CountryInsightDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CountryInsightDeleteArgs<ExtArgs>>
    ): Prisma__CountryInsightClient<$Result.GetResult<Prisma.$CountryInsightPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one CountryInsight.
     * @param {CountryInsightUpdateArgs} args - Arguments to update one CountryInsight.
     * @example
     * // Update one CountryInsight
     * const countryInsight = await prisma.countryInsight.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CountryInsightUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CountryInsightUpdateArgs<ExtArgs>>
    ): Prisma__CountryInsightClient<$Result.GetResult<Prisma.$CountryInsightPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more CountryInsights.
     * @param {CountryInsightDeleteManyArgs} args - Arguments to filter CountryInsights to delete.
     * @example
     * // Delete a few CountryInsights
     * const { count } = await prisma.countryInsight.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CountryInsightDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CountryInsightDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CountryInsights.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryInsightUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CountryInsights
     * const countryInsight = await prisma.countryInsight.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CountryInsightUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CountryInsightUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CountryInsight.
     * @param {CountryInsightUpsertArgs} args - Arguments to update or create a CountryInsight.
     * @example
     * // Update or create a CountryInsight
     * const countryInsight = await prisma.countryInsight.upsert({
     *   create: {
     *     // ... data to create a CountryInsight
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CountryInsight we want to update
     *   }
     * })
    **/
    upsert<T extends CountryInsightUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CountryInsightUpsertArgs<ExtArgs>>
    ): Prisma__CountryInsightClient<$Result.GetResult<Prisma.$CountryInsightPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of CountryInsights.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryInsightCountArgs} args - Arguments to filter CountryInsights to count.
     * @example
     * // Count the number of CountryInsights
     * const count = await prisma.countryInsight.count({
     *   where: {
     *     // ... the filter for the CountryInsights we want to count
     *   }
     * })
    **/
    count<T extends CountryInsightCountArgs>(
      args?: Subset<T, CountryInsightCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CountryInsightCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CountryInsight.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryInsightAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CountryInsightAggregateArgs>(args: Subset<T, CountryInsightAggregateArgs>): Prisma.PrismaPromise<GetCountryInsightAggregateType<T>>

    /**
     * Group by CountryInsight.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryInsightGroupByArgs} args - Group by arguments.
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
      T extends CountryInsightGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CountryInsightGroupByArgs['orderBy'] }
        : { orderBy?: CountryInsightGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CountryInsightGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCountryInsightGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CountryInsight model
   */
  readonly fields: CountryInsightFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CountryInsight.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CountryInsightClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    users<T extends CountryInsight$usersArgs<ExtArgs> = {}>(args?: Subset<T, CountryInsight$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the CountryInsight model
   */ 
  interface CountryInsightFieldRefs {
    readonly country: FieldRef<"CountryInsight", 'String'>
    readonly ageGroup: FieldRef<"CountryInsight", 'String'>
    readonly id: FieldRef<"CountryInsight", 'String'>
    readonly averageLifeExpectancy: FieldRef<"CountryInsight", 'Float'>
    readonly aqi: FieldRef<"CountryInsight", 'Int'>
    readonly aqiCategory: FieldRef<"CountryInsight", 'String'>
    readonly stepsRecommendationByAgeGroup: FieldRef<"CountryInsight", 'Json[]'>
    readonly RecommendedDailySleepByAgeGroup: FieldRef<"CountryInsight", 'Int'>
    readonly nutritionNeeds: FieldRef<"CountryInsight", 'String[]'>
    readonly healthTips: FieldRef<"CountryInsight", 'String[]'>
    readonly healthTrends: FieldRef<"CountryInsight", 'String[]'>
  }
    

  // Custom InputTypes

  /**
   * CountryInsight findUnique
   */
  export type CountryInsightFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CountryInsight
     */
    select?: CountryInsightSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CountryInsightInclude<ExtArgs> | null
    /**
     * Filter, which CountryInsight to fetch.
     */
    where: CountryInsightWhereUniqueInput
  }


  /**
   * CountryInsight findUniqueOrThrow
   */
  export type CountryInsightFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CountryInsight
     */
    select?: CountryInsightSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CountryInsightInclude<ExtArgs> | null
    /**
     * Filter, which CountryInsight to fetch.
     */
    where: CountryInsightWhereUniqueInput
  }


  /**
   * CountryInsight findFirst
   */
  export type CountryInsightFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CountryInsight
     */
    select?: CountryInsightSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CountryInsightInclude<ExtArgs> | null
    /**
     * Filter, which CountryInsight to fetch.
     */
    where?: CountryInsightWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CountryInsights to fetch.
     */
    orderBy?: CountryInsightOrderByWithRelationInput | CountryInsightOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CountryInsights.
     */
    cursor?: CountryInsightWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CountryInsights from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CountryInsights.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CountryInsights.
     */
    distinct?: CountryInsightScalarFieldEnum | CountryInsightScalarFieldEnum[]
  }


  /**
   * CountryInsight findFirstOrThrow
   */
  export type CountryInsightFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CountryInsight
     */
    select?: CountryInsightSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CountryInsightInclude<ExtArgs> | null
    /**
     * Filter, which CountryInsight to fetch.
     */
    where?: CountryInsightWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CountryInsights to fetch.
     */
    orderBy?: CountryInsightOrderByWithRelationInput | CountryInsightOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CountryInsights.
     */
    cursor?: CountryInsightWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CountryInsights from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CountryInsights.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CountryInsights.
     */
    distinct?: CountryInsightScalarFieldEnum | CountryInsightScalarFieldEnum[]
  }


  /**
   * CountryInsight findMany
   */
  export type CountryInsightFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CountryInsight
     */
    select?: CountryInsightSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CountryInsightInclude<ExtArgs> | null
    /**
     * Filter, which CountryInsights to fetch.
     */
    where?: CountryInsightWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CountryInsights to fetch.
     */
    orderBy?: CountryInsightOrderByWithRelationInput | CountryInsightOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CountryInsights.
     */
    cursor?: CountryInsightWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CountryInsights from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CountryInsights.
     */
    skip?: number
    distinct?: CountryInsightScalarFieldEnum | CountryInsightScalarFieldEnum[]
  }


  /**
   * CountryInsight create
   */
  export type CountryInsightCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CountryInsight
     */
    select?: CountryInsightSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CountryInsightInclude<ExtArgs> | null
    /**
     * The data needed to create a CountryInsight.
     */
    data: XOR<CountryInsightCreateInput, CountryInsightUncheckedCreateInput>
  }


  /**
   * CountryInsight createMany
   */
  export type CountryInsightCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CountryInsights.
     */
    data: CountryInsightCreateManyInput | CountryInsightCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * CountryInsight update
   */
  export type CountryInsightUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CountryInsight
     */
    select?: CountryInsightSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CountryInsightInclude<ExtArgs> | null
    /**
     * The data needed to update a CountryInsight.
     */
    data: XOR<CountryInsightUpdateInput, CountryInsightUncheckedUpdateInput>
    /**
     * Choose, which CountryInsight to update.
     */
    where: CountryInsightWhereUniqueInput
  }


  /**
   * CountryInsight updateMany
   */
  export type CountryInsightUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CountryInsights.
     */
    data: XOR<CountryInsightUpdateManyMutationInput, CountryInsightUncheckedUpdateManyInput>
    /**
     * Filter which CountryInsights to update
     */
    where?: CountryInsightWhereInput
  }


  /**
   * CountryInsight upsert
   */
  export type CountryInsightUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CountryInsight
     */
    select?: CountryInsightSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CountryInsightInclude<ExtArgs> | null
    /**
     * The filter to search for the CountryInsight to update in case it exists.
     */
    where: CountryInsightWhereUniqueInput
    /**
     * In case the CountryInsight found by the `where` argument doesn't exist, create a new CountryInsight with this data.
     */
    create: XOR<CountryInsightCreateInput, CountryInsightUncheckedCreateInput>
    /**
     * In case the CountryInsight was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CountryInsightUpdateInput, CountryInsightUncheckedUpdateInput>
  }


  /**
   * CountryInsight delete
   */
  export type CountryInsightDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CountryInsight
     */
    select?: CountryInsightSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CountryInsightInclude<ExtArgs> | null
    /**
     * Filter which CountryInsight to delete.
     */
    where: CountryInsightWhereUniqueInput
  }


  /**
   * CountryInsight deleteMany
   */
  export type CountryInsightDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CountryInsights to delete
     */
    where?: CountryInsightWhereInput
  }


  /**
   * CountryInsight.users
   */
  export type CountryInsight$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * CountryInsight without action
   */
  export type CountryInsightDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CountryInsight
     */
    select?: CountryInsightSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CountryInsightInclude<ExtArgs> | null
  }



  /**
   * Model DietChart
   */

  export type AggregateDietChart = {
    _count: DietChartCountAggregateOutputType | null
    _avg: DietChartAvgAggregateOutputType | null
    _sum: DietChartSumAggregateOutputType | null
    _min: DietChartMinAggregateOutputType | null
    _max: DietChartMaxAggregateOutputType | null
  }

  export type DietChartAvgAggregateOutputType = {
    targetWeight: number | null
    currentWeight: number | null
    duration: number | null
    calories: number | null
    proteins: number | null
    carbs: number | null
    fats: number | null
  }

  export type DietChartSumAggregateOutputType = {
    targetWeight: number | null
    currentWeight: number | null
    duration: number | null
    calories: number | null
    proteins: number | null
    carbs: number | null
    fats: number | null
  }

  export type DietChartMinAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    goalType: string | null
    dietaryPreference: $Enums.DietaryPreference | null
    targetWeight: number | null
    currentWeight: number | null
    duration: number | null
    startDate: Date | null
    endDate: Date | null
    calories: number | null
    proteins: number | null
    carbs: number | null
    fats: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DietChartMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    goalType: string | null
    dietaryPreference: $Enums.DietaryPreference | null
    targetWeight: number | null
    currentWeight: number | null
    duration: number | null
    startDate: Date | null
    endDate: Date | null
    calories: number | null
    proteins: number | null
    carbs: number | null
    fats: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DietChartCountAggregateOutputType = {
    id: number
    userId: number
    name: number
    goalType: number
    dietaryPreference: number
    targetWeight: number
    currentWeight: number
    duration: number
    startDate: number
    endDate: number
    monday: number
    tuesday: number
    wednesday: number
    thursday: number
    friday: number
    saturday: number
    sunday: number
    calories: number
    proteins: number
    carbs: number
    fats: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DietChartAvgAggregateInputType = {
    targetWeight?: true
    currentWeight?: true
    duration?: true
    calories?: true
    proteins?: true
    carbs?: true
    fats?: true
  }

  export type DietChartSumAggregateInputType = {
    targetWeight?: true
    currentWeight?: true
    duration?: true
    calories?: true
    proteins?: true
    carbs?: true
    fats?: true
  }

  export type DietChartMinAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    goalType?: true
    dietaryPreference?: true
    targetWeight?: true
    currentWeight?: true
    duration?: true
    startDate?: true
    endDate?: true
    calories?: true
    proteins?: true
    carbs?: true
    fats?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DietChartMaxAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    goalType?: true
    dietaryPreference?: true
    targetWeight?: true
    currentWeight?: true
    duration?: true
    startDate?: true
    endDate?: true
    calories?: true
    proteins?: true
    carbs?: true
    fats?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DietChartCountAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    goalType?: true
    dietaryPreference?: true
    targetWeight?: true
    currentWeight?: true
    duration?: true
    startDate?: true
    endDate?: true
    monday?: true
    tuesday?: true
    wednesday?: true
    thursday?: true
    friday?: true
    saturday?: true
    sunday?: true
    calories?: true
    proteins?: true
    carbs?: true
    fats?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DietChartAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DietChart to aggregate.
     */
    where?: DietChartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DietCharts to fetch.
     */
    orderBy?: DietChartOrderByWithRelationInput | DietChartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DietChartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DietCharts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DietCharts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DietCharts
    **/
    _count?: true | DietChartCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DietChartAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DietChartSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DietChartMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DietChartMaxAggregateInputType
  }

  export type GetDietChartAggregateType<T extends DietChartAggregateArgs> = {
        [P in keyof T & keyof AggregateDietChart]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDietChart[P]>
      : GetScalarType<T[P], AggregateDietChart[P]>
  }




  export type DietChartGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DietChartWhereInput
    orderBy?: DietChartOrderByWithAggregationInput | DietChartOrderByWithAggregationInput[]
    by: DietChartScalarFieldEnum[] | DietChartScalarFieldEnum
    having?: DietChartScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DietChartCountAggregateInputType | true
    _avg?: DietChartAvgAggregateInputType
    _sum?: DietChartSumAggregateInputType
    _min?: DietChartMinAggregateInputType
    _max?: DietChartMaxAggregateInputType
  }

  export type DietChartGroupByOutputType = {
    id: string
    userId: string
    name: string
    goalType: string
    dietaryPreference: $Enums.DietaryPreference
    targetWeight: number | null
    currentWeight: number
    duration: number
    startDate: Date
    endDate: Date
    monday: JsonValue
    tuesday: JsonValue
    wednesday: JsonValue
    thursday: JsonValue
    friday: JsonValue
    saturday: JsonValue
    sunday: JsonValue
    calories: number
    proteins: number
    carbs: number
    fats: number
    createdAt: Date
    updatedAt: Date
    _count: DietChartCountAggregateOutputType | null
    _avg: DietChartAvgAggregateOutputType | null
    _sum: DietChartSumAggregateOutputType | null
    _min: DietChartMinAggregateOutputType | null
    _max: DietChartMaxAggregateOutputType | null
  }

  type GetDietChartGroupByPayload<T extends DietChartGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DietChartGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DietChartGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DietChartGroupByOutputType[P]>
            : GetScalarType<T[P], DietChartGroupByOutputType[P]>
        }
      >
    >


  export type DietChartSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    goalType?: boolean
    dietaryPreference?: boolean
    targetWeight?: boolean
    currentWeight?: boolean
    duration?: boolean
    startDate?: boolean
    endDate?: boolean
    monday?: boolean
    tuesday?: boolean
    wednesday?: boolean
    thursday?: boolean
    friday?: boolean
    saturday?: boolean
    sunday?: boolean
    calories?: boolean
    proteins?: boolean
    carbs?: boolean
    fats?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    progressUpdates?: boolean | DietChart$progressUpdatesArgs<ExtArgs>
    _count?: boolean | DietChartCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dietChart"]>

  export type DietChartSelectScalar = {
    id?: boolean
    userId?: boolean
    name?: boolean
    goalType?: boolean
    dietaryPreference?: boolean
    targetWeight?: boolean
    currentWeight?: boolean
    duration?: boolean
    startDate?: boolean
    endDate?: boolean
    monday?: boolean
    tuesday?: boolean
    wednesday?: boolean
    thursday?: boolean
    friday?: boolean
    saturday?: boolean
    sunday?: boolean
    calories?: boolean
    proteins?: boolean
    carbs?: boolean
    fats?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DietChartInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    progressUpdates?: boolean | DietChart$progressUpdatesArgs<ExtArgs>
    _count?: boolean | DietChartCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $DietChartPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DietChart"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      progressUpdates: Prisma.$ProgressUpdatePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      name: string
      goalType: string
      dietaryPreference: $Enums.DietaryPreference
      targetWeight: number | null
      currentWeight: number
      duration: number
      startDate: Date
      endDate: Date
      monday: Prisma.JsonValue
      tuesday: Prisma.JsonValue
      wednesday: Prisma.JsonValue
      thursday: Prisma.JsonValue
      friday: Prisma.JsonValue
      saturday: Prisma.JsonValue
      sunday: Prisma.JsonValue
      calories: number
      proteins: number
      carbs: number
      fats: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["dietChart"]>
    composites: {}
  }


  type DietChartGetPayload<S extends boolean | null | undefined | DietChartDefaultArgs> = $Result.GetResult<Prisma.$DietChartPayload, S>

  type DietChartCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DietChartFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DietChartCountAggregateInputType | true
    }

  export interface DietChartDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DietChart'], meta: { name: 'DietChart' } }
    /**
     * Find zero or one DietChart that matches the filter.
     * @param {DietChartFindUniqueArgs} args - Arguments to find a DietChart
     * @example
     * // Get one DietChart
     * const dietChart = await prisma.dietChart.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends DietChartFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, DietChartFindUniqueArgs<ExtArgs>>
    ): Prisma__DietChartClient<$Result.GetResult<Prisma.$DietChartPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one DietChart that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {DietChartFindUniqueOrThrowArgs} args - Arguments to find a DietChart
     * @example
     * // Get one DietChart
     * const dietChart = await prisma.dietChart.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends DietChartFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DietChartFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__DietChartClient<$Result.GetResult<Prisma.$DietChartPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first DietChart that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DietChartFindFirstArgs} args - Arguments to find a DietChart
     * @example
     * // Get one DietChart
     * const dietChart = await prisma.dietChart.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends DietChartFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, DietChartFindFirstArgs<ExtArgs>>
    ): Prisma__DietChartClient<$Result.GetResult<Prisma.$DietChartPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first DietChart that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DietChartFindFirstOrThrowArgs} args - Arguments to find a DietChart
     * @example
     * // Get one DietChart
     * const dietChart = await prisma.dietChart.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends DietChartFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DietChartFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__DietChartClient<$Result.GetResult<Prisma.$DietChartPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more DietCharts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DietChartFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DietCharts
     * const dietCharts = await prisma.dietChart.findMany()
     * 
     * // Get first 10 DietCharts
     * const dietCharts = await prisma.dietChart.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dietChartWithIdOnly = await prisma.dietChart.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends DietChartFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DietChartFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DietChartPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a DietChart.
     * @param {DietChartCreateArgs} args - Arguments to create a DietChart.
     * @example
     * // Create one DietChart
     * const DietChart = await prisma.dietChart.create({
     *   data: {
     *     // ... data to create a DietChart
     *   }
     * })
     * 
    **/
    create<T extends DietChartCreateArgs<ExtArgs>>(
      args: SelectSubset<T, DietChartCreateArgs<ExtArgs>>
    ): Prisma__DietChartClient<$Result.GetResult<Prisma.$DietChartPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many DietCharts.
     *     @param {DietChartCreateManyArgs} args - Arguments to create many DietCharts.
     *     @example
     *     // Create many DietCharts
     *     const dietChart = await prisma.dietChart.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends DietChartCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DietChartCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a DietChart.
     * @param {DietChartDeleteArgs} args - Arguments to delete one DietChart.
     * @example
     * // Delete one DietChart
     * const DietChart = await prisma.dietChart.delete({
     *   where: {
     *     // ... filter to delete one DietChart
     *   }
     * })
     * 
    **/
    delete<T extends DietChartDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, DietChartDeleteArgs<ExtArgs>>
    ): Prisma__DietChartClient<$Result.GetResult<Prisma.$DietChartPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one DietChart.
     * @param {DietChartUpdateArgs} args - Arguments to update one DietChart.
     * @example
     * // Update one DietChart
     * const dietChart = await prisma.dietChart.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends DietChartUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, DietChartUpdateArgs<ExtArgs>>
    ): Prisma__DietChartClient<$Result.GetResult<Prisma.$DietChartPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more DietCharts.
     * @param {DietChartDeleteManyArgs} args - Arguments to filter DietCharts to delete.
     * @example
     * // Delete a few DietCharts
     * const { count } = await prisma.dietChart.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends DietChartDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DietChartDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DietCharts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DietChartUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DietCharts
     * const dietChart = await prisma.dietChart.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends DietChartUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, DietChartUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DietChart.
     * @param {DietChartUpsertArgs} args - Arguments to update or create a DietChart.
     * @example
     * // Update or create a DietChart
     * const dietChart = await prisma.dietChart.upsert({
     *   create: {
     *     // ... data to create a DietChart
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DietChart we want to update
     *   }
     * })
    **/
    upsert<T extends DietChartUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, DietChartUpsertArgs<ExtArgs>>
    ): Prisma__DietChartClient<$Result.GetResult<Prisma.$DietChartPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of DietCharts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DietChartCountArgs} args - Arguments to filter DietCharts to count.
     * @example
     * // Count the number of DietCharts
     * const count = await prisma.dietChart.count({
     *   where: {
     *     // ... the filter for the DietCharts we want to count
     *   }
     * })
    **/
    count<T extends DietChartCountArgs>(
      args?: Subset<T, DietChartCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DietChartCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DietChart.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DietChartAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DietChartAggregateArgs>(args: Subset<T, DietChartAggregateArgs>): Prisma.PrismaPromise<GetDietChartAggregateType<T>>

    /**
     * Group by DietChart.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DietChartGroupByArgs} args - Group by arguments.
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
      T extends DietChartGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DietChartGroupByArgs['orderBy'] }
        : { orderBy?: DietChartGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DietChartGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDietChartGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DietChart model
   */
  readonly fields: DietChartFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DietChart.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DietChartClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    progressUpdates<T extends DietChart$progressUpdatesArgs<ExtArgs> = {}>(args?: Subset<T, DietChart$progressUpdatesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgressUpdatePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the DietChart model
   */ 
  interface DietChartFieldRefs {
    readonly id: FieldRef<"DietChart", 'String'>
    readonly userId: FieldRef<"DietChart", 'String'>
    readonly name: FieldRef<"DietChart", 'String'>
    readonly goalType: FieldRef<"DietChart", 'String'>
    readonly dietaryPreference: FieldRef<"DietChart", 'DietaryPreference'>
    readonly targetWeight: FieldRef<"DietChart", 'Float'>
    readonly currentWeight: FieldRef<"DietChart", 'Float'>
    readonly duration: FieldRef<"DietChart", 'Int'>
    readonly startDate: FieldRef<"DietChart", 'DateTime'>
    readonly endDate: FieldRef<"DietChart", 'DateTime'>
    readonly monday: FieldRef<"DietChart", 'Json'>
    readonly tuesday: FieldRef<"DietChart", 'Json'>
    readonly wednesday: FieldRef<"DietChart", 'Json'>
    readonly thursday: FieldRef<"DietChart", 'Json'>
    readonly friday: FieldRef<"DietChart", 'Json'>
    readonly saturday: FieldRef<"DietChart", 'Json'>
    readonly sunday: FieldRef<"DietChart", 'Json'>
    readonly calories: FieldRef<"DietChart", 'Int'>
    readonly proteins: FieldRef<"DietChart", 'Int'>
    readonly carbs: FieldRef<"DietChart", 'Int'>
    readonly fats: FieldRef<"DietChart", 'Int'>
    readonly createdAt: FieldRef<"DietChart", 'DateTime'>
    readonly updatedAt: FieldRef<"DietChart", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * DietChart findUnique
   */
  export type DietChartFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DietChart
     */
    select?: DietChartSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DietChartInclude<ExtArgs> | null
    /**
     * Filter, which DietChart to fetch.
     */
    where: DietChartWhereUniqueInput
  }


  /**
   * DietChart findUniqueOrThrow
   */
  export type DietChartFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DietChart
     */
    select?: DietChartSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DietChartInclude<ExtArgs> | null
    /**
     * Filter, which DietChart to fetch.
     */
    where: DietChartWhereUniqueInput
  }


  /**
   * DietChart findFirst
   */
  export type DietChartFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DietChart
     */
    select?: DietChartSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DietChartInclude<ExtArgs> | null
    /**
     * Filter, which DietChart to fetch.
     */
    where?: DietChartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DietCharts to fetch.
     */
    orderBy?: DietChartOrderByWithRelationInput | DietChartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DietCharts.
     */
    cursor?: DietChartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DietCharts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DietCharts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DietCharts.
     */
    distinct?: DietChartScalarFieldEnum | DietChartScalarFieldEnum[]
  }


  /**
   * DietChart findFirstOrThrow
   */
  export type DietChartFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DietChart
     */
    select?: DietChartSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DietChartInclude<ExtArgs> | null
    /**
     * Filter, which DietChart to fetch.
     */
    where?: DietChartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DietCharts to fetch.
     */
    orderBy?: DietChartOrderByWithRelationInput | DietChartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DietCharts.
     */
    cursor?: DietChartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DietCharts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DietCharts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DietCharts.
     */
    distinct?: DietChartScalarFieldEnum | DietChartScalarFieldEnum[]
  }


  /**
   * DietChart findMany
   */
  export type DietChartFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DietChart
     */
    select?: DietChartSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DietChartInclude<ExtArgs> | null
    /**
     * Filter, which DietCharts to fetch.
     */
    where?: DietChartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DietCharts to fetch.
     */
    orderBy?: DietChartOrderByWithRelationInput | DietChartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DietCharts.
     */
    cursor?: DietChartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DietCharts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DietCharts.
     */
    skip?: number
    distinct?: DietChartScalarFieldEnum | DietChartScalarFieldEnum[]
  }


  /**
   * DietChart create
   */
  export type DietChartCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DietChart
     */
    select?: DietChartSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DietChartInclude<ExtArgs> | null
    /**
     * The data needed to create a DietChart.
     */
    data: XOR<DietChartCreateInput, DietChartUncheckedCreateInput>
  }


  /**
   * DietChart createMany
   */
  export type DietChartCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DietCharts.
     */
    data: DietChartCreateManyInput | DietChartCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * DietChart update
   */
  export type DietChartUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DietChart
     */
    select?: DietChartSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DietChartInclude<ExtArgs> | null
    /**
     * The data needed to update a DietChart.
     */
    data: XOR<DietChartUpdateInput, DietChartUncheckedUpdateInput>
    /**
     * Choose, which DietChart to update.
     */
    where: DietChartWhereUniqueInput
  }


  /**
   * DietChart updateMany
   */
  export type DietChartUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DietCharts.
     */
    data: XOR<DietChartUpdateManyMutationInput, DietChartUncheckedUpdateManyInput>
    /**
     * Filter which DietCharts to update
     */
    where?: DietChartWhereInput
  }


  /**
   * DietChart upsert
   */
  export type DietChartUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DietChart
     */
    select?: DietChartSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DietChartInclude<ExtArgs> | null
    /**
     * The filter to search for the DietChart to update in case it exists.
     */
    where: DietChartWhereUniqueInput
    /**
     * In case the DietChart found by the `where` argument doesn't exist, create a new DietChart with this data.
     */
    create: XOR<DietChartCreateInput, DietChartUncheckedCreateInput>
    /**
     * In case the DietChart was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DietChartUpdateInput, DietChartUncheckedUpdateInput>
  }


  /**
   * DietChart delete
   */
  export type DietChartDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DietChart
     */
    select?: DietChartSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DietChartInclude<ExtArgs> | null
    /**
     * Filter which DietChart to delete.
     */
    where: DietChartWhereUniqueInput
  }


  /**
   * DietChart deleteMany
   */
  export type DietChartDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DietCharts to delete
     */
    where?: DietChartWhereInput
  }


  /**
   * DietChart.progressUpdates
   */
  export type DietChart$progressUpdatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressUpdate
     */
    select?: ProgressUpdateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProgressUpdateInclude<ExtArgs> | null
    where?: ProgressUpdateWhereInput
    orderBy?: ProgressUpdateOrderByWithRelationInput | ProgressUpdateOrderByWithRelationInput[]
    cursor?: ProgressUpdateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProgressUpdateScalarFieldEnum | ProgressUpdateScalarFieldEnum[]
  }


  /**
   * DietChart without action
   */
  export type DietChartDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DietChart
     */
    select?: DietChartSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DietChartInclude<ExtArgs> | null
  }



  /**
   * Model ProgressUpdate
   */

  export type AggregateProgressUpdate = {
    _count: ProgressUpdateCountAggregateOutputType | null
    _min: ProgressUpdateMinAggregateOutputType | null
    _max: ProgressUpdateMaxAggregateOutputType | null
  }

  export type ProgressUpdateMinAggregateOutputType = {
    id: string | null
    chartId: string | null
    date: Date | null
    completed: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProgressUpdateMaxAggregateOutputType = {
    id: string | null
    chartId: string | null
    date: Date | null
    completed: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProgressUpdateCountAggregateOutputType = {
    id: number
    chartId: number
    date: number
    completed: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProgressUpdateMinAggregateInputType = {
    id?: true
    chartId?: true
    date?: true
    completed?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProgressUpdateMaxAggregateInputType = {
    id?: true
    chartId?: true
    date?: true
    completed?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProgressUpdateCountAggregateInputType = {
    id?: true
    chartId?: true
    date?: true
    completed?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProgressUpdateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProgressUpdate to aggregate.
     */
    where?: ProgressUpdateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProgressUpdates to fetch.
     */
    orderBy?: ProgressUpdateOrderByWithRelationInput | ProgressUpdateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProgressUpdateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProgressUpdates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProgressUpdates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProgressUpdates
    **/
    _count?: true | ProgressUpdateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProgressUpdateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProgressUpdateMaxAggregateInputType
  }

  export type GetProgressUpdateAggregateType<T extends ProgressUpdateAggregateArgs> = {
        [P in keyof T & keyof AggregateProgressUpdate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProgressUpdate[P]>
      : GetScalarType<T[P], AggregateProgressUpdate[P]>
  }




  export type ProgressUpdateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProgressUpdateWhereInput
    orderBy?: ProgressUpdateOrderByWithAggregationInput | ProgressUpdateOrderByWithAggregationInput[]
    by: ProgressUpdateScalarFieldEnum[] | ProgressUpdateScalarFieldEnum
    having?: ProgressUpdateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProgressUpdateCountAggregateInputType | true
    _min?: ProgressUpdateMinAggregateInputType
    _max?: ProgressUpdateMaxAggregateInputType
  }

  export type ProgressUpdateGroupByOutputType = {
    id: string
    chartId: string
    date: Date
    completed: boolean
    createdAt: Date
    updatedAt: Date
    _count: ProgressUpdateCountAggregateOutputType | null
    _min: ProgressUpdateMinAggregateOutputType | null
    _max: ProgressUpdateMaxAggregateOutputType | null
  }

  type GetProgressUpdateGroupByPayload<T extends ProgressUpdateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProgressUpdateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProgressUpdateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProgressUpdateGroupByOutputType[P]>
            : GetScalarType<T[P], ProgressUpdateGroupByOutputType[P]>
        }
      >
    >


  export type ProgressUpdateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    chartId?: boolean
    date?: boolean
    completed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    dietChart?: boolean | DietChartDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["progressUpdate"]>

  export type ProgressUpdateSelectScalar = {
    id?: boolean
    chartId?: boolean
    date?: boolean
    completed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProgressUpdateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dietChart?: boolean | DietChartDefaultArgs<ExtArgs>
  }


  export type $ProgressUpdatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProgressUpdate"
    objects: {
      dietChart: Prisma.$DietChartPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      chartId: string
      date: Date
      completed: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["progressUpdate"]>
    composites: {}
  }


  type ProgressUpdateGetPayload<S extends boolean | null | undefined | ProgressUpdateDefaultArgs> = $Result.GetResult<Prisma.$ProgressUpdatePayload, S>

  type ProgressUpdateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProgressUpdateFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ProgressUpdateCountAggregateInputType | true
    }

  export interface ProgressUpdateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProgressUpdate'], meta: { name: 'ProgressUpdate' } }
    /**
     * Find zero or one ProgressUpdate that matches the filter.
     * @param {ProgressUpdateFindUniqueArgs} args - Arguments to find a ProgressUpdate
     * @example
     * // Get one ProgressUpdate
     * const progressUpdate = await prisma.progressUpdate.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ProgressUpdateFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ProgressUpdateFindUniqueArgs<ExtArgs>>
    ): Prisma__ProgressUpdateClient<$Result.GetResult<Prisma.$ProgressUpdatePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one ProgressUpdate that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ProgressUpdateFindUniqueOrThrowArgs} args - Arguments to find a ProgressUpdate
     * @example
     * // Get one ProgressUpdate
     * const progressUpdate = await prisma.progressUpdate.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ProgressUpdateFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProgressUpdateFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ProgressUpdateClient<$Result.GetResult<Prisma.$ProgressUpdatePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first ProgressUpdate that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgressUpdateFindFirstArgs} args - Arguments to find a ProgressUpdate
     * @example
     * // Get one ProgressUpdate
     * const progressUpdate = await prisma.progressUpdate.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ProgressUpdateFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ProgressUpdateFindFirstArgs<ExtArgs>>
    ): Prisma__ProgressUpdateClient<$Result.GetResult<Prisma.$ProgressUpdatePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first ProgressUpdate that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgressUpdateFindFirstOrThrowArgs} args - Arguments to find a ProgressUpdate
     * @example
     * // Get one ProgressUpdate
     * const progressUpdate = await prisma.progressUpdate.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ProgressUpdateFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProgressUpdateFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ProgressUpdateClient<$Result.GetResult<Prisma.$ProgressUpdatePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more ProgressUpdates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgressUpdateFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProgressUpdates
     * const progressUpdates = await prisma.progressUpdate.findMany()
     * 
     * // Get first 10 ProgressUpdates
     * const progressUpdates = await prisma.progressUpdate.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const progressUpdateWithIdOnly = await prisma.progressUpdate.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ProgressUpdateFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProgressUpdateFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgressUpdatePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a ProgressUpdate.
     * @param {ProgressUpdateCreateArgs} args - Arguments to create a ProgressUpdate.
     * @example
     * // Create one ProgressUpdate
     * const ProgressUpdate = await prisma.progressUpdate.create({
     *   data: {
     *     // ... data to create a ProgressUpdate
     *   }
     * })
     * 
    **/
    create<T extends ProgressUpdateCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ProgressUpdateCreateArgs<ExtArgs>>
    ): Prisma__ProgressUpdateClient<$Result.GetResult<Prisma.$ProgressUpdatePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many ProgressUpdates.
     *     @param {ProgressUpdateCreateManyArgs} args - Arguments to create many ProgressUpdates.
     *     @example
     *     // Create many ProgressUpdates
     *     const progressUpdate = await prisma.progressUpdate.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ProgressUpdateCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProgressUpdateCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ProgressUpdate.
     * @param {ProgressUpdateDeleteArgs} args - Arguments to delete one ProgressUpdate.
     * @example
     * // Delete one ProgressUpdate
     * const ProgressUpdate = await prisma.progressUpdate.delete({
     *   where: {
     *     // ... filter to delete one ProgressUpdate
     *   }
     * })
     * 
    **/
    delete<T extends ProgressUpdateDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ProgressUpdateDeleteArgs<ExtArgs>>
    ): Prisma__ProgressUpdateClient<$Result.GetResult<Prisma.$ProgressUpdatePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one ProgressUpdate.
     * @param {ProgressUpdateUpdateArgs} args - Arguments to update one ProgressUpdate.
     * @example
     * // Update one ProgressUpdate
     * const progressUpdate = await prisma.progressUpdate.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ProgressUpdateUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ProgressUpdateUpdateArgs<ExtArgs>>
    ): Prisma__ProgressUpdateClient<$Result.GetResult<Prisma.$ProgressUpdatePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more ProgressUpdates.
     * @param {ProgressUpdateDeleteManyArgs} args - Arguments to filter ProgressUpdates to delete.
     * @example
     * // Delete a few ProgressUpdates
     * const { count } = await prisma.progressUpdate.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ProgressUpdateDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProgressUpdateDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProgressUpdates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgressUpdateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProgressUpdates
     * const progressUpdate = await prisma.progressUpdate.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ProgressUpdateUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ProgressUpdateUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ProgressUpdate.
     * @param {ProgressUpdateUpsertArgs} args - Arguments to update or create a ProgressUpdate.
     * @example
     * // Update or create a ProgressUpdate
     * const progressUpdate = await prisma.progressUpdate.upsert({
     *   create: {
     *     // ... data to create a ProgressUpdate
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProgressUpdate we want to update
     *   }
     * })
    **/
    upsert<T extends ProgressUpdateUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ProgressUpdateUpsertArgs<ExtArgs>>
    ): Prisma__ProgressUpdateClient<$Result.GetResult<Prisma.$ProgressUpdatePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of ProgressUpdates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgressUpdateCountArgs} args - Arguments to filter ProgressUpdates to count.
     * @example
     * // Count the number of ProgressUpdates
     * const count = await prisma.progressUpdate.count({
     *   where: {
     *     // ... the filter for the ProgressUpdates we want to count
     *   }
     * })
    **/
    count<T extends ProgressUpdateCountArgs>(
      args?: Subset<T, ProgressUpdateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProgressUpdateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProgressUpdate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgressUpdateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProgressUpdateAggregateArgs>(args: Subset<T, ProgressUpdateAggregateArgs>): Prisma.PrismaPromise<GetProgressUpdateAggregateType<T>>

    /**
     * Group by ProgressUpdate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgressUpdateGroupByArgs} args - Group by arguments.
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
      T extends ProgressUpdateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProgressUpdateGroupByArgs['orderBy'] }
        : { orderBy?: ProgressUpdateGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProgressUpdateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProgressUpdateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProgressUpdate model
   */
  readonly fields: ProgressUpdateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProgressUpdate.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProgressUpdateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    dietChart<T extends DietChartDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DietChartDefaultArgs<ExtArgs>>): Prisma__DietChartClient<$Result.GetResult<Prisma.$DietChartPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the ProgressUpdate model
   */ 
  interface ProgressUpdateFieldRefs {
    readonly id: FieldRef<"ProgressUpdate", 'String'>
    readonly chartId: FieldRef<"ProgressUpdate", 'String'>
    readonly date: FieldRef<"ProgressUpdate", 'DateTime'>
    readonly completed: FieldRef<"ProgressUpdate", 'Boolean'>
    readonly createdAt: FieldRef<"ProgressUpdate", 'DateTime'>
    readonly updatedAt: FieldRef<"ProgressUpdate", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * ProgressUpdate findUnique
   */
  export type ProgressUpdateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressUpdate
     */
    select?: ProgressUpdateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProgressUpdateInclude<ExtArgs> | null
    /**
     * Filter, which ProgressUpdate to fetch.
     */
    where: ProgressUpdateWhereUniqueInput
  }


  /**
   * ProgressUpdate findUniqueOrThrow
   */
  export type ProgressUpdateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressUpdate
     */
    select?: ProgressUpdateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProgressUpdateInclude<ExtArgs> | null
    /**
     * Filter, which ProgressUpdate to fetch.
     */
    where: ProgressUpdateWhereUniqueInput
  }


  /**
   * ProgressUpdate findFirst
   */
  export type ProgressUpdateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressUpdate
     */
    select?: ProgressUpdateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProgressUpdateInclude<ExtArgs> | null
    /**
     * Filter, which ProgressUpdate to fetch.
     */
    where?: ProgressUpdateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProgressUpdates to fetch.
     */
    orderBy?: ProgressUpdateOrderByWithRelationInput | ProgressUpdateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProgressUpdates.
     */
    cursor?: ProgressUpdateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProgressUpdates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProgressUpdates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProgressUpdates.
     */
    distinct?: ProgressUpdateScalarFieldEnum | ProgressUpdateScalarFieldEnum[]
  }


  /**
   * ProgressUpdate findFirstOrThrow
   */
  export type ProgressUpdateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressUpdate
     */
    select?: ProgressUpdateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProgressUpdateInclude<ExtArgs> | null
    /**
     * Filter, which ProgressUpdate to fetch.
     */
    where?: ProgressUpdateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProgressUpdates to fetch.
     */
    orderBy?: ProgressUpdateOrderByWithRelationInput | ProgressUpdateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProgressUpdates.
     */
    cursor?: ProgressUpdateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProgressUpdates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProgressUpdates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProgressUpdates.
     */
    distinct?: ProgressUpdateScalarFieldEnum | ProgressUpdateScalarFieldEnum[]
  }


  /**
   * ProgressUpdate findMany
   */
  export type ProgressUpdateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressUpdate
     */
    select?: ProgressUpdateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProgressUpdateInclude<ExtArgs> | null
    /**
     * Filter, which ProgressUpdates to fetch.
     */
    where?: ProgressUpdateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProgressUpdates to fetch.
     */
    orderBy?: ProgressUpdateOrderByWithRelationInput | ProgressUpdateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProgressUpdates.
     */
    cursor?: ProgressUpdateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProgressUpdates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProgressUpdates.
     */
    skip?: number
    distinct?: ProgressUpdateScalarFieldEnum | ProgressUpdateScalarFieldEnum[]
  }


  /**
   * ProgressUpdate create
   */
  export type ProgressUpdateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressUpdate
     */
    select?: ProgressUpdateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProgressUpdateInclude<ExtArgs> | null
    /**
     * The data needed to create a ProgressUpdate.
     */
    data: XOR<ProgressUpdateCreateInput, ProgressUpdateUncheckedCreateInput>
  }


  /**
   * ProgressUpdate createMany
   */
  export type ProgressUpdateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProgressUpdates.
     */
    data: ProgressUpdateCreateManyInput | ProgressUpdateCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * ProgressUpdate update
   */
  export type ProgressUpdateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressUpdate
     */
    select?: ProgressUpdateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProgressUpdateInclude<ExtArgs> | null
    /**
     * The data needed to update a ProgressUpdate.
     */
    data: XOR<ProgressUpdateUpdateInput, ProgressUpdateUncheckedUpdateInput>
    /**
     * Choose, which ProgressUpdate to update.
     */
    where: ProgressUpdateWhereUniqueInput
  }


  /**
   * ProgressUpdate updateMany
   */
  export type ProgressUpdateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProgressUpdates.
     */
    data: XOR<ProgressUpdateUpdateManyMutationInput, ProgressUpdateUncheckedUpdateManyInput>
    /**
     * Filter which ProgressUpdates to update
     */
    where?: ProgressUpdateWhereInput
  }


  /**
   * ProgressUpdate upsert
   */
  export type ProgressUpdateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressUpdate
     */
    select?: ProgressUpdateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProgressUpdateInclude<ExtArgs> | null
    /**
     * The filter to search for the ProgressUpdate to update in case it exists.
     */
    where: ProgressUpdateWhereUniqueInput
    /**
     * In case the ProgressUpdate found by the `where` argument doesn't exist, create a new ProgressUpdate with this data.
     */
    create: XOR<ProgressUpdateCreateInput, ProgressUpdateUncheckedCreateInput>
    /**
     * In case the ProgressUpdate was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProgressUpdateUpdateInput, ProgressUpdateUncheckedUpdateInput>
  }


  /**
   * ProgressUpdate delete
   */
  export type ProgressUpdateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressUpdate
     */
    select?: ProgressUpdateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProgressUpdateInclude<ExtArgs> | null
    /**
     * Filter which ProgressUpdate to delete.
     */
    where: ProgressUpdateWhereUniqueInput
  }


  /**
   * ProgressUpdate deleteMany
   */
  export type ProgressUpdateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProgressUpdates to delete
     */
    where?: ProgressUpdateWhereInput
  }


  /**
   * ProgressUpdate without action
   */
  export type ProgressUpdateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgressUpdate
     */
    select?: ProgressUpdateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProgressUpdateInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    clerkUserId: 'clerkUserId',
    email: 'email',
    name: 'name',
    imageUrl: 'imageUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    country: 'country',
    ageGroup: 'ageGroup',
    gender: 'gender'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const CountryInsightScalarFieldEnum: {
    country: 'country',
    ageGroup: 'ageGroup',
    id: 'id',
    averageLifeExpectancy: 'averageLifeExpectancy',
    aqi: 'aqi',
    aqiCategory: 'aqiCategory',
    stepsRecommendationByAgeGroup: 'stepsRecommendationByAgeGroup',
    RecommendedDailySleepByAgeGroup: 'RecommendedDailySleepByAgeGroup',
    nutritionNeeds: 'nutritionNeeds',
    healthTips: 'healthTips',
    healthTrends: 'healthTrends'
  };

  export type CountryInsightScalarFieldEnum = (typeof CountryInsightScalarFieldEnum)[keyof typeof CountryInsightScalarFieldEnum]


  export const DietChartScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    name: 'name',
    goalType: 'goalType',
    dietaryPreference: 'dietaryPreference',
    targetWeight: 'targetWeight',
    currentWeight: 'currentWeight',
    duration: 'duration',
    startDate: 'startDate',
    endDate: 'endDate',
    monday: 'monday',
    tuesday: 'tuesday',
    wednesday: 'wednesday',
    thursday: 'thursday',
    friday: 'friday',
    saturday: 'saturday',
    sunday: 'sunday',
    calories: 'calories',
    proteins: 'proteins',
    carbs: 'carbs',
    fats: 'fats',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DietChartScalarFieldEnum = (typeof DietChartScalarFieldEnum)[keyof typeof DietChartScalarFieldEnum]


  export const ProgressUpdateScalarFieldEnum: {
    id: 'id',
    chartId: 'chartId',
    date: 'date',
    completed: 'completed',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProgressUpdateScalarFieldEnum = (typeof ProgressUpdateScalarFieldEnum)[keyof typeof ProgressUpdateScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Json[]'
   */
  export type ListJsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'DietaryPreference'
   */
  export type EnumDietaryPreferenceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DietaryPreference'>
    


  /**
   * Reference to a field of type 'DietaryPreference[]'
   */
  export type ListEnumDietaryPreferenceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DietaryPreference[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    clerkUserId?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    imageUrl?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    country?: StringNullableFilter<"User"> | string | null
    ageGroup?: StringNullableFilter<"User"> | string | null
    gender?: StringNullableFilter<"User"> | string | null
    countryInsight?: XOR<CountryInsightNullableRelationFilter, CountryInsightWhereInput> | null
    dietCharts?: DietChartListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    clerkUserId?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    country?: SortOrderInput | SortOrder
    ageGroup?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    countryInsight?: CountryInsightOrderByWithRelationInput
    dietCharts?: DietChartOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    clerkUserId?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    imageUrl?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    country?: StringNullableFilter<"User"> | string | null
    ageGroup?: StringNullableFilter<"User"> | string | null
    gender?: StringNullableFilter<"User"> | string | null
    countryInsight?: XOR<CountryInsightNullableRelationFilter, CountryInsightWhereInput> | null
    dietCharts?: DietChartListRelationFilter
  }, "id" | "clerkUserId" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    clerkUserId?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    country?: SortOrderInput | SortOrder
    ageGroup?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    clerkUserId?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    imageUrl?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    country?: StringNullableWithAggregatesFilter<"User"> | string | null
    ageGroup?: StringNullableWithAggregatesFilter<"User"> | string | null
    gender?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type CountryInsightWhereInput = {
    AND?: CountryInsightWhereInput | CountryInsightWhereInput[]
    OR?: CountryInsightWhereInput[]
    NOT?: CountryInsightWhereInput | CountryInsightWhereInput[]
    country?: StringFilter<"CountryInsight"> | string
    ageGroup?: StringFilter<"CountryInsight"> | string
    id?: StringFilter<"CountryInsight"> | string
    averageLifeExpectancy?: FloatFilter<"CountryInsight"> | number
    aqi?: IntFilter<"CountryInsight"> | number
    aqiCategory?: StringFilter<"CountryInsight"> | string
    stepsRecommendationByAgeGroup?: JsonNullableListFilter<"CountryInsight">
    RecommendedDailySleepByAgeGroup?: IntFilter<"CountryInsight"> | number
    nutritionNeeds?: StringNullableListFilter<"CountryInsight">
    healthTips?: StringNullableListFilter<"CountryInsight">
    healthTrends?: StringNullableListFilter<"CountryInsight">
    users?: UserListRelationFilter
  }

  export type CountryInsightOrderByWithRelationInput = {
    country?: SortOrder
    ageGroup?: SortOrder
    id?: SortOrder
    averageLifeExpectancy?: SortOrder
    aqi?: SortOrder
    aqiCategory?: SortOrder
    stepsRecommendationByAgeGroup?: SortOrder
    RecommendedDailySleepByAgeGroup?: SortOrder
    nutritionNeeds?: SortOrder
    healthTips?: SortOrder
    healthTrends?: SortOrder
    users?: UserOrderByRelationAggregateInput
  }

  export type CountryInsightWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    country_ageGroup?: CountryInsightCountryAgeGroupCompoundUniqueInput
    AND?: CountryInsightWhereInput | CountryInsightWhereInput[]
    OR?: CountryInsightWhereInput[]
    NOT?: CountryInsightWhereInput | CountryInsightWhereInput[]
    country?: StringFilter<"CountryInsight"> | string
    ageGroup?: StringFilter<"CountryInsight"> | string
    averageLifeExpectancy?: FloatFilter<"CountryInsight"> | number
    aqi?: IntFilter<"CountryInsight"> | number
    aqiCategory?: StringFilter<"CountryInsight"> | string
    stepsRecommendationByAgeGroup?: JsonNullableListFilter<"CountryInsight">
    RecommendedDailySleepByAgeGroup?: IntFilter<"CountryInsight"> | number
    nutritionNeeds?: StringNullableListFilter<"CountryInsight">
    healthTips?: StringNullableListFilter<"CountryInsight">
    healthTrends?: StringNullableListFilter<"CountryInsight">
    users?: UserListRelationFilter
  }, "id" | "country_ageGroup">

  export type CountryInsightOrderByWithAggregationInput = {
    country?: SortOrder
    ageGroup?: SortOrder
    id?: SortOrder
    averageLifeExpectancy?: SortOrder
    aqi?: SortOrder
    aqiCategory?: SortOrder
    stepsRecommendationByAgeGroup?: SortOrder
    RecommendedDailySleepByAgeGroup?: SortOrder
    nutritionNeeds?: SortOrder
    healthTips?: SortOrder
    healthTrends?: SortOrder
    _count?: CountryInsightCountOrderByAggregateInput
    _avg?: CountryInsightAvgOrderByAggregateInput
    _max?: CountryInsightMaxOrderByAggregateInput
    _min?: CountryInsightMinOrderByAggregateInput
    _sum?: CountryInsightSumOrderByAggregateInput
  }

  export type CountryInsightScalarWhereWithAggregatesInput = {
    AND?: CountryInsightScalarWhereWithAggregatesInput | CountryInsightScalarWhereWithAggregatesInput[]
    OR?: CountryInsightScalarWhereWithAggregatesInput[]
    NOT?: CountryInsightScalarWhereWithAggregatesInput | CountryInsightScalarWhereWithAggregatesInput[]
    country?: StringWithAggregatesFilter<"CountryInsight"> | string
    ageGroup?: StringWithAggregatesFilter<"CountryInsight"> | string
    id?: StringWithAggregatesFilter<"CountryInsight"> | string
    averageLifeExpectancy?: FloatWithAggregatesFilter<"CountryInsight"> | number
    aqi?: IntWithAggregatesFilter<"CountryInsight"> | number
    aqiCategory?: StringWithAggregatesFilter<"CountryInsight"> | string
    stepsRecommendationByAgeGroup?: JsonNullableListFilter<"CountryInsight">
    RecommendedDailySleepByAgeGroup?: IntWithAggregatesFilter<"CountryInsight"> | number
    nutritionNeeds?: StringNullableListFilter<"CountryInsight">
    healthTips?: StringNullableListFilter<"CountryInsight">
    healthTrends?: StringNullableListFilter<"CountryInsight">
  }

  export type DietChartWhereInput = {
    AND?: DietChartWhereInput | DietChartWhereInput[]
    OR?: DietChartWhereInput[]
    NOT?: DietChartWhereInput | DietChartWhereInput[]
    id?: StringFilter<"DietChart"> | string
    userId?: StringFilter<"DietChart"> | string
    name?: StringFilter<"DietChart"> | string
    goalType?: StringFilter<"DietChart"> | string
    dietaryPreference?: EnumDietaryPreferenceFilter<"DietChart"> | $Enums.DietaryPreference
    targetWeight?: FloatNullableFilter<"DietChart"> | number | null
    currentWeight?: FloatFilter<"DietChart"> | number
    duration?: IntFilter<"DietChart"> | number
    startDate?: DateTimeFilter<"DietChart"> | Date | string
    endDate?: DateTimeFilter<"DietChart"> | Date | string
    monday?: JsonFilter<"DietChart">
    tuesday?: JsonFilter<"DietChart">
    wednesday?: JsonFilter<"DietChart">
    thursday?: JsonFilter<"DietChart">
    friday?: JsonFilter<"DietChart">
    saturday?: JsonFilter<"DietChart">
    sunday?: JsonFilter<"DietChart">
    calories?: IntFilter<"DietChart"> | number
    proteins?: IntFilter<"DietChart"> | number
    carbs?: IntFilter<"DietChart"> | number
    fats?: IntFilter<"DietChart"> | number
    createdAt?: DateTimeFilter<"DietChart"> | Date | string
    updatedAt?: DateTimeFilter<"DietChart"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    progressUpdates?: ProgressUpdateListRelationFilter
  }

  export type DietChartOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    goalType?: SortOrder
    dietaryPreference?: SortOrder
    targetWeight?: SortOrderInput | SortOrder
    currentWeight?: SortOrder
    duration?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    monday?: SortOrder
    tuesday?: SortOrder
    wednesday?: SortOrder
    thursday?: SortOrder
    friday?: SortOrder
    saturday?: SortOrder
    sunday?: SortOrder
    calories?: SortOrder
    proteins?: SortOrder
    carbs?: SortOrder
    fats?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    progressUpdates?: ProgressUpdateOrderByRelationAggregateInput
  }

  export type DietChartWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DietChartWhereInput | DietChartWhereInput[]
    OR?: DietChartWhereInput[]
    NOT?: DietChartWhereInput | DietChartWhereInput[]
    userId?: StringFilter<"DietChart"> | string
    name?: StringFilter<"DietChart"> | string
    goalType?: StringFilter<"DietChart"> | string
    dietaryPreference?: EnumDietaryPreferenceFilter<"DietChart"> | $Enums.DietaryPreference
    targetWeight?: FloatNullableFilter<"DietChart"> | number | null
    currentWeight?: FloatFilter<"DietChart"> | number
    duration?: IntFilter<"DietChart"> | number
    startDate?: DateTimeFilter<"DietChart"> | Date | string
    endDate?: DateTimeFilter<"DietChart"> | Date | string
    monday?: JsonFilter<"DietChart">
    tuesday?: JsonFilter<"DietChart">
    wednesday?: JsonFilter<"DietChart">
    thursday?: JsonFilter<"DietChart">
    friday?: JsonFilter<"DietChart">
    saturday?: JsonFilter<"DietChart">
    sunday?: JsonFilter<"DietChart">
    calories?: IntFilter<"DietChart"> | number
    proteins?: IntFilter<"DietChart"> | number
    carbs?: IntFilter<"DietChart"> | number
    fats?: IntFilter<"DietChart"> | number
    createdAt?: DateTimeFilter<"DietChart"> | Date | string
    updatedAt?: DateTimeFilter<"DietChart"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    progressUpdates?: ProgressUpdateListRelationFilter
  }, "id">

  export type DietChartOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    goalType?: SortOrder
    dietaryPreference?: SortOrder
    targetWeight?: SortOrderInput | SortOrder
    currentWeight?: SortOrder
    duration?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    monday?: SortOrder
    tuesday?: SortOrder
    wednesday?: SortOrder
    thursday?: SortOrder
    friday?: SortOrder
    saturday?: SortOrder
    sunday?: SortOrder
    calories?: SortOrder
    proteins?: SortOrder
    carbs?: SortOrder
    fats?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DietChartCountOrderByAggregateInput
    _avg?: DietChartAvgOrderByAggregateInput
    _max?: DietChartMaxOrderByAggregateInput
    _min?: DietChartMinOrderByAggregateInput
    _sum?: DietChartSumOrderByAggregateInput
  }

  export type DietChartScalarWhereWithAggregatesInput = {
    AND?: DietChartScalarWhereWithAggregatesInput | DietChartScalarWhereWithAggregatesInput[]
    OR?: DietChartScalarWhereWithAggregatesInput[]
    NOT?: DietChartScalarWhereWithAggregatesInput | DietChartScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DietChart"> | string
    userId?: StringWithAggregatesFilter<"DietChart"> | string
    name?: StringWithAggregatesFilter<"DietChart"> | string
    goalType?: StringWithAggregatesFilter<"DietChart"> | string
    dietaryPreference?: EnumDietaryPreferenceWithAggregatesFilter<"DietChart"> | $Enums.DietaryPreference
    targetWeight?: FloatNullableWithAggregatesFilter<"DietChart"> | number | null
    currentWeight?: FloatWithAggregatesFilter<"DietChart"> | number
    duration?: IntWithAggregatesFilter<"DietChart"> | number
    startDate?: DateTimeWithAggregatesFilter<"DietChart"> | Date | string
    endDate?: DateTimeWithAggregatesFilter<"DietChart"> | Date | string
    monday?: JsonWithAggregatesFilter<"DietChart">
    tuesday?: JsonWithAggregatesFilter<"DietChart">
    wednesday?: JsonWithAggregatesFilter<"DietChart">
    thursday?: JsonWithAggregatesFilter<"DietChart">
    friday?: JsonWithAggregatesFilter<"DietChart">
    saturday?: JsonWithAggregatesFilter<"DietChart">
    sunday?: JsonWithAggregatesFilter<"DietChart">
    calories?: IntWithAggregatesFilter<"DietChart"> | number
    proteins?: IntWithAggregatesFilter<"DietChart"> | number
    carbs?: IntWithAggregatesFilter<"DietChart"> | number
    fats?: IntWithAggregatesFilter<"DietChart"> | number
    createdAt?: DateTimeWithAggregatesFilter<"DietChart"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"DietChart"> | Date | string
  }

  export type ProgressUpdateWhereInput = {
    AND?: ProgressUpdateWhereInput | ProgressUpdateWhereInput[]
    OR?: ProgressUpdateWhereInput[]
    NOT?: ProgressUpdateWhereInput | ProgressUpdateWhereInput[]
    id?: StringFilter<"ProgressUpdate"> | string
    chartId?: StringFilter<"ProgressUpdate"> | string
    date?: DateTimeFilter<"ProgressUpdate"> | Date | string
    completed?: BoolFilter<"ProgressUpdate"> | boolean
    createdAt?: DateTimeFilter<"ProgressUpdate"> | Date | string
    updatedAt?: DateTimeFilter<"ProgressUpdate"> | Date | string
    dietChart?: XOR<DietChartRelationFilter, DietChartWhereInput>
  }

  export type ProgressUpdateOrderByWithRelationInput = {
    id?: SortOrder
    chartId?: SortOrder
    date?: SortOrder
    completed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    dietChart?: DietChartOrderByWithRelationInput
  }

  export type ProgressUpdateWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    chartId_date?: ProgressUpdateChartIdDateCompoundUniqueInput
    AND?: ProgressUpdateWhereInput | ProgressUpdateWhereInput[]
    OR?: ProgressUpdateWhereInput[]
    NOT?: ProgressUpdateWhereInput | ProgressUpdateWhereInput[]
    chartId?: StringFilter<"ProgressUpdate"> | string
    date?: DateTimeFilter<"ProgressUpdate"> | Date | string
    completed?: BoolFilter<"ProgressUpdate"> | boolean
    createdAt?: DateTimeFilter<"ProgressUpdate"> | Date | string
    updatedAt?: DateTimeFilter<"ProgressUpdate"> | Date | string
    dietChart?: XOR<DietChartRelationFilter, DietChartWhereInput>
  }, "id" | "chartId_date">

  export type ProgressUpdateOrderByWithAggregationInput = {
    id?: SortOrder
    chartId?: SortOrder
    date?: SortOrder
    completed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProgressUpdateCountOrderByAggregateInput
    _max?: ProgressUpdateMaxOrderByAggregateInput
    _min?: ProgressUpdateMinOrderByAggregateInput
  }

  export type ProgressUpdateScalarWhereWithAggregatesInput = {
    AND?: ProgressUpdateScalarWhereWithAggregatesInput | ProgressUpdateScalarWhereWithAggregatesInput[]
    OR?: ProgressUpdateScalarWhereWithAggregatesInput[]
    NOT?: ProgressUpdateScalarWhereWithAggregatesInput | ProgressUpdateScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProgressUpdate"> | string
    chartId?: StringWithAggregatesFilter<"ProgressUpdate"> | string
    date?: DateTimeWithAggregatesFilter<"ProgressUpdate"> | Date | string
    completed?: BoolWithAggregatesFilter<"ProgressUpdate"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"ProgressUpdate"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ProgressUpdate"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    clerkUserId: string
    email: string
    name?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    gender?: string | null
    countryInsight?: CountryInsightCreateNestedOneWithoutUsersInput
    dietCharts?: DietChartCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    clerkUserId: string
    email: string
    name?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    country?: string | null
    ageGroup?: string | null
    gender?: string | null
    dietCharts?: DietChartUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    countryInsight?: CountryInsightUpdateOneWithoutUsersNestedInput
    dietCharts?: DietChartUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    ageGroup?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    dietCharts?: DietChartUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    clerkUserId: string
    email: string
    name?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    country?: string | null
    ageGroup?: string | null
    gender?: string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    ageGroup?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CountryInsightCreateInput = {
    country: string
    ageGroup: string
    id?: string
    averageLifeExpectancy: number
    aqi: number
    aqiCategory: string
    stepsRecommendationByAgeGroup?: CountryInsightCreatestepsRecommendationByAgeGroupInput | InputJsonValue[]
    RecommendedDailySleepByAgeGroup: number
    nutritionNeeds?: CountryInsightCreatenutritionNeedsInput | string[]
    healthTips?: CountryInsightCreatehealthTipsInput | string[]
    healthTrends?: CountryInsightCreatehealthTrendsInput | string[]
    users?: UserCreateNestedManyWithoutCountryInsightInput
  }

  export type CountryInsightUncheckedCreateInput = {
    country: string
    ageGroup: string
    id?: string
    averageLifeExpectancy: number
    aqi: number
    aqiCategory: string
    stepsRecommendationByAgeGroup?: CountryInsightCreatestepsRecommendationByAgeGroupInput | InputJsonValue[]
    RecommendedDailySleepByAgeGroup: number
    nutritionNeeds?: CountryInsightCreatenutritionNeedsInput | string[]
    healthTips?: CountryInsightCreatehealthTipsInput | string[]
    healthTrends?: CountryInsightCreatehealthTrendsInput | string[]
    users?: UserUncheckedCreateNestedManyWithoutCountryInsightInput
  }

  export type CountryInsightUpdateInput = {
    country?: StringFieldUpdateOperationsInput | string
    ageGroup?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    averageLifeExpectancy?: FloatFieldUpdateOperationsInput | number
    aqi?: IntFieldUpdateOperationsInput | number
    aqiCategory?: StringFieldUpdateOperationsInput | string
    stepsRecommendationByAgeGroup?: CountryInsightUpdatestepsRecommendationByAgeGroupInput | InputJsonValue[]
    RecommendedDailySleepByAgeGroup?: IntFieldUpdateOperationsInput | number
    nutritionNeeds?: CountryInsightUpdatenutritionNeedsInput | string[]
    healthTips?: CountryInsightUpdatehealthTipsInput | string[]
    healthTrends?: CountryInsightUpdatehealthTrendsInput | string[]
    users?: UserUpdateManyWithoutCountryInsightNestedInput
  }

  export type CountryInsightUncheckedUpdateInput = {
    country?: StringFieldUpdateOperationsInput | string
    ageGroup?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    averageLifeExpectancy?: FloatFieldUpdateOperationsInput | number
    aqi?: IntFieldUpdateOperationsInput | number
    aqiCategory?: StringFieldUpdateOperationsInput | string
    stepsRecommendationByAgeGroup?: CountryInsightUpdatestepsRecommendationByAgeGroupInput | InputJsonValue[]
    RecommendedDailySleepByAgeGroup?: IntFieldUpdateOperationsInput | number
    nutritionNeeds?: CountryInsightUpdatenutritionNeedsInput | string[]
    healthTips?: CountryInsightUpdatehealthTipsInput | string[]
    healthTrends?: CountryInsightUpdatehealthTrendsInput | string[]
    users?: UserUncheckedUpdateManyWithoutCountryInsightNestedInput
  }

  export type CountryInsightCreateManyInput = {
    country: string
    ageGroup: string
    id?: string
    averageLifeExpectancy: number
    aqi: number
    aqiCategory: string
    stepsRecommendationByAgeGroup?: CountryInsightCreatestepsRecommendationByAgeGroupInput | InputJsonValue[]
    RecommendedDailySleepByAgeGroup: number
    nutritionNeeds?: CountryInsightCreatenutritionNeedsInput | string[]
    healthTips?: CountryInsightCreatehealthTipsInput | string[]
    healthTrends?: CountryInsightCreatehealthTrendsInput | string[]
  }

  export type CountryInsightUpdateManyMutationInput = {
    country?: StringFieldUpdateOperationsInput | string
    ageGroup?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    averageLifeExpectancy?: FloatFieldUpdateOperationsInput | number
    aqi?: IntFieldUpdateOperationsInput | number
    aqiCategory?: StringFieldUpdateOperationsInput | string
    stepsRecommendationByAgeGroup?: CountryInsightUpdatestepsRecommendationByAgeGroupInput | InputJsonValue[]
    RecommendedDailySleepByAgeGroup?: IntFieldUpdateOperationsInput | number
    nutritionNeeds?: CountryInsightUpdatenutritionNeedsInput | string[]
    healthTips?: CountryInsightUpdatehealthTipsInput | string[]
    healthTrends?: CountryInsightUpdatehealthTrendsInput | string[]
  }

  export type CountryInsightUncheckedUpdateManyInput = {
    country?: StringFieldUpdateOperationsInput | string
    ageGroup?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    averageLifeExpectancy?: FloatFieldUpdateOperationsInput | number
    aqi?: IntFieldUpdateOperationsInput | number
    aqiCategory?: StringFieldUpdateOperationsInput | string
    stepsRecommendationByAgeGroup?: CountryInsightUpdatestepsRecommendationByAgeGroupInput | InputJsonValue[]
    RecommendedDailySleepByAgeGroup?: IntFieldUpdateOperationsInput | number
    nutritionNeeds?: CountryInsightUpdatenutritionNeedsInput | string[]
    healthTips?: CountryInsightUpdatehealthTipsInput | string[]
    healthTrends?: CountryInsightUpdatehealthTrendsInput | string[]
  }

  export type DietChartCreateInput = {
    id?: string
    name: string
    goalType: string
    dietaryPreference?: $Enums.DietaryPreference
    targetWeight?: number | null
    currentWeight: number
    duration: number
    startDate?: Date | string
    endDate: Date | string
    monday: JsonNullValueInput | InputJsonValue
    tuesday: JsonNullValueInput | InputJsonValue
    wednesday: JsonNullValueInput | InputJsonValue
    thursday: JsonNullValueInput | InputJsonValue
    friday: JsonNullValueInput | InputJsonValue
    saturday: JsonNullValueInput | InputJsonValue
    sunday: JsonNullValueInput | InputJsonValue
    calories: number
    proteins: number
    carbs: number
    fats: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutDietChartsInput
    progressUpdates?: ProgressUpdateCreateNestedManyWithoutDietChartInput
  }

  export type DietChartUncheckedCreateInput = {
    id?: string
    userId: string
    name: string
    goalType: string
    dietaryPreference?: $Enums.DietaryPreference
    targetWeight?: number | null
    currentWeight: number
    duration: number
    startDate?: Date | string
    endDate: Date | string
    monday: JsonNullValueInput | InputJsonValue
    tuesday: JsonNullValueInput | InputJsonValue
    wednesday: JsonNullValueInput | InputJsonValue
    thursday: JsonNullValueInput | InputJsonValue
    friday: JsonNullValueInput | InputJsonValue
    saturday: JsonNullValueInput | InputJsonValue
    sunday: JsonNullValueInput | InputJsonValue
    calories: number
    proteins: number
    carbs: number
    fats: number
    createdAt?: Date | string
    updatedAt?: Date | string
    progressUpdates?: ProgressUpdateUncheckedCreateNestedManyWithoutDietChartInput
  }

  export type DietChartUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    goalType?: StringFieldUpdateOperationsInput | string
    dietaryPreference?: EnumDietaryPreferenceFieldUpdateOperationsInput | $Enums.DietaryPreference
    targetWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    currentWeight?: FloatFieldUpdateOperationsInput | number
    duration?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    monday?: JsonNullValueInput | InputJsonValue
    tuesday?: JsonNullValueInput | InputJsonValue
    wednesday?: JsonNullValueInput | InputJsonValue
    thursday?: JsonNullValueInput | InputJsonValue
    friday?: JsonNullValueInput | InputJsonValue
    saturday?: JsonNullValueInput | InputJsonValue
    sunday?: JsonNullValueInput | InputJsonValue
    calories?: IntFieldUpdateOperationsInput | number
    proteins?: IntFieldUpdateOperationsInput | number
    carbs?: IntFieldUpdateOperationsInput | number
    fats?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutDietChartsNestedInput
    progressUpdates?: ProgressUpdateUpdateManyWithoutDietChartNestedInput
  }

  export type DietChartUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    goalType?: StringFieldUpdateOperationsInput | string
    dietaryPreference?: EnumDietaryPreferenceFieldUpdateOperationsInput | $Enums.DietaryPreference
    targetWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    currentWeight?: FloatFieldUpdateOperationsInput | number
    duration?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    monday?: JsonNullValueInput | InputJsonValue
    tuesday?: JsonNullValueInput | InputJsonValue
    wednesday?: JsonNullValueInput | InputJsonValue
    thursday?: JsonNullValueInput | InputJsonValue
    friday?: JsonNullValueInput | InputJsonValue
    saturday?: JsonNullValueInput | InputJsonValue
    sunday?: JsonNullValueInput | InputJsonValue
    calories?: IntFieldUpdateOperationsInput | number
    proteins?: IntFieldUpdateOperationsInput | number
    carbs?: IntFieldUpdateOperationsInput | number
    fats?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    progressUpdates?: ProgressUpdateUncheckedUpdateManyWithoutDietChartNestedInput
  }

  export type DietChartCreateManyInput = {
    id?: string
    userId: string
    name: string
    goalType: string
    dietaryPreference?: $Enums.DietaryPreference
    targetWeight?: number | null
    currentWeight: number
    duration: number
    startDate?: Date | string
    endDate: Date | string
    monday: JsonNullValueInput | InputJsonValue
    tuesday: JsonNullValueInput | InputJsonValue
    wednesday: JsonNullValueInput | InputJsonValue
    thursday: JsonNullValueInput | InputJsonValue
    friday: JsonNullValueInput | InputJsonValue
    saturday: JsonNullValueInput | InputJsonValue
    sunday: JsonNullValueInput | InputJsonValue
    calories: number
    proteins: number
    carbs: number
    fats: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DietChartUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    goalType?: StringFieldUpdateOperationsInput | string
    dietaryPreference?: EnumDietaryPreferenceFieldUpdateOperationsInput | $Enums.DietaryPreference
    targetWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    currentWeight?: FloatFieldUpdateOperationsInput | number
    duration?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    monday?: JsonNullValueInput | InputJsonValue
    tuesday?: JsonNullValueInput | InputJsonValue
    wednesday?: JsonNullValueInput | InputJsonValue
    thursday?: JsonNullValueInput | InputJsonValue
    friday?: JsonNullValueInput | InputJsonValue
    saturday?: JsonNullValueInput | InputJsonValue
    sunday?: JsonNullValueInput | InputJsonValue
    calories?: IntFieldUpdateOperationsInput | number
    proteins?: IntFieldUpdateOperationsInput | number
    carbs?: IntFieldUpdateOperationsInput | number
    fats?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DietChartUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    goalType?: StringFieldUpdateOperationsInput | string
    dietaryPreference?: EnumDietaryPreferenceFieldUpdateOperationsInput | $Enums.DietaryPreference
    targetWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    currentWeight?: FloatFieldUpdateOperationsInput | number
    duration?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    monday?: JsonNullValueInput | InputJsonValue
    tuesday?: JsonNullValueInput | InputJsonValue
    wednesday?: JsonNullValueInput | InputJsonValue
    thursday?: JsonNullValueInput | InputJsonValue
    friday?: JsonNullValueInput | InputJsonValue
    saturday?: JsonNullValueInput | InputJsonValue
    sunday?: JsonNullValueInput | InputJsonValue
    calories?: IntFieldUpdateOperationsInput | number
    proteins?: IntFieldUpdateOperationsInput | number
    carbs?: IntFieldUpdateOperationsInput | number
    fats?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProgressUpdateCreateInput = {
    id?: string
    date?: Date | string
    completed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    dietChart: DietChartCreateNestedOneWithoutProgressUpdatesInput
  }

  export type ProgressUpdateUncheckedCreateInput = {
    id?: string
    chartId: string
    date?: Date | string
    completed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProgressUpdateUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dietChart?: DietChartUpdateOneRequiredWithoutProgressUpdatesNestedInput
  }

  export type ProgressUpdateUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    chartId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProgressUpdateCreateManyInput = {
    id?: string
    chartId: string
    date?: Date | string
    completed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProgressUpdateUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProgressUpdateUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    chartId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type CountryInsightNullableRelationFilter = {
    is?: CountryInsightWhereInput | null
    isNot?: CountryInsightWhereInput | null
  }

  export type DietChartListRelationFilter = {
    every?: DietChartWhereInput
    some?: DietChartWhereInput
    none?: DietChartWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type DietChartOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    clerkUserId?: SortOrder
    email?: SortOrder
    name?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    country?: SortOrder
    ageGroup?: SortOrder
    gender?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    clerkUserId?: SortOrder
    email?: SortOrder
    name?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    country?: SortOrder
    ageGroup?: SortOrder
    gender?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    clerkUserId?: SortOrder
    email?: SortOrder
    name?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    country?: SortOrder
    ageGroup?: SortOrder
    gender?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }
  export type JsonNullableListFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableListFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableListFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableListFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableListFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableListFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue[] | ListJsonFieldRefInput<$PrismaModel> | null
    has?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    hasEvery?: InputJsonValue[] | ListJsonFieldRefInput<$PrismaModel>
    hasSome?: InputJsonValue[] | ListJsonFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CountryInsightCountryAgeGroupCompoundUniqueInput = {
    country: string
    ageGroup: string
  }

  export type CountryInsightCountOrderByAggregateInput = {
    country?: SortOrder
    ageGroup?: SortOrder
    id?: SortOrder
    averageLifeExpectancy?: SortOrder
    aqi?: SortOrder
    aqiCategory?: SortOrder
    stepsRecommendationByAgeGroup?: SortOrder
    RecommendedDailySleepByAgeGroup?: SortOrder
    nutritionNeeds?: SortOrder
    healthTips?: SortOrder
    healthTrends?: SortOrder
  }

  export type CountryInsightAvgOrderByAggregateInput = {
    averageLifeExpectancy?: SortOrder
    aqi?: SortOrder
    RecommendedDailySleepByAgeGroup?: SortOrder
  }

  export type CountryInsightMaxOrderByAggregateInput = {
    country?: SortOrder
    ageGroup?: SortOrder
    id?: SortOrder
    averageLifeExpectancy?: SortOrder
    aqi?: SortOrder
    aqiCategory?: SortOrder
    RecommendedDailySleepByAgeGroup?: SortOrder
  }

  export type CountryInsightMinOrderByAggregateInput = {
    country?: SortOrder
    ageGroup?: SortOrder
    id?: SortOrder
    averageLifeExpectancy?: SortOrder
    aqi?: SortOrder
    aqiCategory?: SortOrder
    RecommendedDailySleepByAgeGroup?: SortOrder
  }

  export type CountryInsightSumOrderByAggregateInput = {
    averageLifeExpectancy?: SortOrder
    aqi?: SortOrder
    RecommendedDailySleepByAgeGroup?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type EnumDietaryPreferenceFilter<$PrismaModel = never> = {
    equals?: $Enums.DietaryPreference | EnumDietaryPreferenceFieldRefInput<$PrismaModel>
    in?: $Enums.DietaryPreference[] | ListEnumDietaryPreferenceFieldRefInput<$PrismaModel>
    notIn?: $Enums.DietaryPreference[] | ListEnumDietaryPreferenceFieldRefInput<$PrismaModel>
    not?: NestedEnumDietaryPreferenceFilter<$PrismaModel> | $Enums.DietaryPreference
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }
  export type JsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ProgressUpdateListRelationFilter = {
    every?: ProgressUpdateWhereInput
    some?: ProgressUpdateWhereInput
    none?: ProgressUpdateWhereInput
  }

  export type ProgressUpdateOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DietChartCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    goalType?: SortOrder
    dietaryPreference?: SortOrder
    targetWeight?: SortOrder
    currentWeight?: SortOrder
    duration?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    monday?: SortOrder
    tuesday?: SortOrder
    wednesday?: SortOrder
    thursday?: SortOrder
    friday?: SortOrder
    saturday?: SortOrder
    sunday?: SortOrder
    calories?: SortOrder
    proteins?: SortOrder
    carbs?: SortOrder
    fats?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DietChartAvgOrderByAggregateInput = {
    targetWeight?: SortOrder
    currentWeight?: SortOrder
    duration?: SortOrder
    calories?: SortOrder
    proteins?: SortOrder
    carbs?: SortOrder
    fats?: SortOrder
  }

  export type DietChartMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    goalType?: SortOrder
    dietaryPreference?: SortOrder
    targetWeight?: SortOrder
    currentWeight?: SortOrder
    duration?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    calories?: SortOrder
    proteins?: SortOrder
    carbs?: SortOrder
    fats?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DietChartMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    goalType?: SortOrder
    dietaryPreference?: SortOrder
    targetWeight?: SortOrder
    currentWeight?: SortOrder
    duration?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    calories?: SortOrder
    proteins?: SortOrder
    carbs?: SortOrder
    fats?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DietChartSumOrderByAggregateInput = {
    targetWeight?: SortOrder
    currentWeight?: SortOrder
    duration?: SortOrder
    calories?: SortOrder
    proteins?: SortOrder
    carbs?: SortOrder
    fats?: SortOrder
  }

  export type EnumDietaryPreferenceWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DietaryPreference | EnumDietaryPreferenceFieldRefInput<$PrismaModel>
    in?: $Enums.DietaryPreference[] | ListEnumDietaryPreferenceFieldRefInput<$PrismaModel>
    notIn?: $Enums.DietaryPreference[] | ListEnumDietaryPreferenceFieldRefInput<$PrismaModel>
    not?: NestedEnumDietaryPreferenceWithAggregatesFilter<$PrismaModel> | $Enums.DietaryPreference
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDietaryPreferenceFilter<$PrismaModel>
    _max?: NestedEnumDietaryPreferenceFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DietChartRelationFilter = {
    is?: DietChartWhereInput
    isNot?: DietChartWhereInput
  }

  export type ProgressUpdateChartIdDateCompoundUniqueInput = {
    chartId: string
    date: Date | string
  }

  export type ProgressUpdateCountOrderByAggregateInput = {
    id?: SortOrder
    chartId?: SortOrder
    date?: SortOrder
    completed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProgressUpdateMaxOrderByAggregateInput = {
    id?: SortOrder
    chartId?: SortOrder
    date?: SortOrder
    completed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProgressUpdateMinOrderByAggregateInput = {
    id?: SortOrder
    chartId?: SortOrder
    date?: SortOrder
    completed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type CountryInsightCreateNestedOneWithoutUsersInput = {
    create?: XOR<CountryInsightCreateWithoutUsersInput, CountryInsightUncheckedCreateWithoutUsersInput>
    connectOrCreate?: CountryInsightCreateOrConnectWithoutUsersInput
    connect?: CountryInsightWhereUniqueInput
  }

  export type DietChartCreateNestedManyWithoutUserInput = {
    create?: XOR<DietChartCreateWithoutUserInput, DietChartUncheckedCreateWithoutUserInput> | DietChartCreateWithoutUserInput[] | DietChartUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DietChartCreateOrConnectWithoutUserInput | DietChartCreateOrConnectWithoutUserInput[]
    createMany?: DietChartCreateManyUserInputEnvelope
    connect?: DietChartWhereUniqueInput | DietChartWhereUniqueInput[]
  }

  export type DietChartUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<DietChartCreateWithoutUserInput, DietChartUncheckedCreateWithoutUserInput> | DietChartCreateWithoutUserInput[] | DietChartUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DietChartCreateOrConnectWithoutUserInput | DietChartCreateOrConnectWithoutUserInput[]
    createMany?: DietChartCreateManyUserInputEnvelope
    connect?: DietChartWhereUniqueInput | DietChartWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type CountryInsightUpdateOneWithoutUsersNestedInput = {
    create?: XOR<CountryInsightCreateWithoutUsersInput, CountryInsightUncheckedCreateWithoutUsersInput>
    connectOrCreate?: CountryInsightCreateOrConnectWithoutUsersInput
    upsert?: CountryInsightUpsertWithoutUsersInput
    disconnect?: CountryInsightWhereInput | boolean
    delete?: CountryInsightWhereInput | boolean
    connect?: CountryInsightWhereUniqueInput
    update?: XOR<XOR<CountryInsightUpdateToOneWithWhereWithoutUsersInput, CountryInsightUpdateWithoutUsersInput>, CountryInsightUncheckedUpdateWithoutUsersInput>
  }

  export type DietChartUpdateManyWithoutUserNestedInput = {
    create?: XOR<DietChartCreateWithoutUserInput, DietChartUncheckedCreateWithoutUserInput> | DietChartCreateWithoutUserInput[] | DietChartUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DietChartCreateOrConnectWithoutUserInput | DietChartCreateOrConnectWithoutUserInput[]
    upsert?: DietChartUpsertWithWhereUniqueWithoutUserInput | DietChartUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DietChartCreateManyUserInputEnvelope
    set?: DietChartWhereUniqueInput | DietChartWhereUniqueInput[]
    disconnect?: DietChartWhereUniqueInput | DietChartWhereUniqueInput[]
    delete?: DietChartWhereUniqueInput | DietChartWhereUniqueInput[]
    connect?: DietChartWhereUniqueInput | DietChartWhereUniqueInput[]
    update?: DietChartUpdateWithWhereUniqueWithoutUserInput | DietChartUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DietChartUpdateManyWithWhereWithoutUserInput | DietChartUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DietChartScalarWhereInput | DietChartScalarWhereInput[]
  }

  export type DietChartUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<DietChartCreateWithoutUserInput, DietChartUncheckedCreateWithoutUserInput> | DietChartCreateWithoutUserInput[] | DietChartUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DietChartCreateOrConnectWithoutUserInput | DietChartCreateOrConnectWithoutUserInput[]
    upsert?: DietChartUpsertWithWhereUniqueWithoutUserInput | DietChartUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DietChartCreateManyUserInputEnvelope
    set?: DietChartWhereUniqueInput | DietChartWhereUniqueInput[]
    disconnect?: DietChartWhereUniqueInput | DietChartWhereUniqueInput[]
    delete?: DietChartWhereUniqueInput | DietChartWhereUniqueInput[]
    connect?: DietChartWhereUniqueInput | DietChartWhereUniqueInput[]
    update?: DietChartUpdateWithWhereUniqueWithoutUserInput | DietChartUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DietChartUpdateManyWithWhereWithoutUserInput | DietChartUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DietChartScalarWhereInput | DietChartScalarWhereInput[]
  }

  export type CountryInsightCreatestepsRecommendationByAgeGroupInput = {
    set: InputJsonValue[]
  }

  export type CountryInsightCreatenutritionNeedsInput = {
    set: string[]
  }

  export type CountryInsightCreatehealthTipsInput = {
    set: string[]
  }

  export type CountryInsightCreatehealthTrendsInput = {
    set: string[]
  }

  export type UserCreateNestedManyWithoutCountryInsightInput = {
    create?: XOR<UserCreateWithoutCountryInsightInput, UserUncheckedCreateWithoutCountryInsightInput> | UserCreateWithoutCountryInsightInput[] | UserUncheckedCreateWithoutCountryInsightInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCountryInsightInput | UserCreateOrConnectWithoutCountryInsightInput[]
    createMany?: UserCreateManyCountryInsightInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutCountryInsightInput = {
    create?: XOR<UserCreateWithoutCountryInsightInput, UserUncheckedCreateWithoutCountryInsightInput> | UserCreateWithoutCountryInsightInput[] | UserUncheckedCreateWithoutCountryInsightInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCountryInsightInput | UserCreateOrConnectWithoutCountryInsightInput[]
    createMany?: UserCreateManyCountryInsightInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CountryInsightUpdatestepsRecommendationByAgeGroupInput = {
    set?: InputJsonValue[]
    push?: InputJsonValue | InputJsonValue[]
  }

  export type CountryInsightUpdatenutritionNeedsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type CountryInsightUpdatehealthTipsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type CountryInsightUpdatehealthTrendsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserUpdateManyWithoutCountryInsightNestedInput = {
    create?: XOR<UserCreateWithoutCountryInsightInput, UserUncheckedCreateWithoutCountryInsightInput> | UserCreateWithoutCountryInsightInput[] | UserUncheckedCreateWithoutCountryInsightInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCountryInsightInput | UserCreateOrConnectWithoutCountryInsightInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutCountryInsightInput | UserUpsertWithWhereUniqueWithoutCountryInsightInput[]
    createMany?: UserCreateManyCountryInsightInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutCountryInsightInput | UserUpdateWithWhereUniqueWithoutCountryInsightInput[]
    updateMany?: UserUpdateManyWithWhereWithoutCountryInsightInput | UserUpdateManyWithWhereWithoutCountryInsightInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutCountryInsightNestedInput = {
    create?: XOR<UserCreateWithoutCountryInsightInput, UserUncheckedCreateWithoutCountryInsightInput> | UserCreateWithoutCountryInsightInput[] | UserUncheckedCreateWithoutCountryInsightInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCountryInsightInput | UserCreateOrConnectWithoutCountryInsightInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutCountryInsightInput | UserUpsertWithWhereUniqueWithoutCountryInsightInput[]
    createMany?: UserCreateManyCountryInsightInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutCountryInsightInput | UserUpdateWithWhereUniqueWithoutCountryInsightInput[]
    updateMany?: UserUpdateManyWithWhereWithoutCountryInsightInput | UserUpdateManyWithWhereWithoutCountryInsightInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutDietChartsInput = {
    create?: XOR<UserCreateWithoutDietChartsInput, UserUncheckedCreateWithoutDietChartsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDietChartsInput
    connect?: UserWhereUniqueInput
  }

  export type ProgressUpdateCreateNestedManyWithoutDietChartInput = {
    create?: XOR<ProgressUpdateCreateWithoutDietChartInput, ProgressUpdateUncheckedCreateWithoutDietChartInput> | ProgressUpdateCreateWithoutDietChartInput[] | ProgressUpdateUncheckedCreateWithoutDietChartInput[]
    connectOrCreate?: ProgressUpdateCreateOrConnectWithoutDietChartInput | ProgressUpdateCreateOrConnectWithoutDietChartInput[]
    createMany?: ProgressUpdateCreateManyDietChartInputEnvelope
    connect?: ProgressUpdateWhereUniqueInput | ProgressUpdateWhereUniqueInput[]
  }

  export type ProgressUpdateUncheckedCreateNestedManyWithoutDietChartInput = {
    create?: XOR<ProgressUpdateCreateWithoutDietChartInput, ProgressUpdateUncheckedCreateWithoutDietChartInput> | ProgressUpdateCreateWithoutDietChartInput[] | ProgressUpdateUncheckedCreateWithoutDietChartInput[]
    connectOrCreate?: ProgressUpdateCreateOrConnectWithoutDietChartInput | ProgressUpdateCreateOrConnectWithoutDietChartInput[]
    createMany?: ProgressUpdateCreateManyDietChartInputEnvelope
    connect?: ProgressUpdateWhereUniqueInput | ProgressUpdateWhereUniqueInput[]
  }

  export type EnumDietaryPreferenceFieldUpdateOperationsInput = {
    set?: $Enums.DietaryPreference
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutDietChartsNestedInput = {
    create?: XOR<UserCreateWithoutDietChartsInput, UserUncheckedCreateWithoutDietChartsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDietChartsInput
    upsert?: UserUpsertWithoutDietChartsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDietChartsInput, UserUpdateWithoutDietChartsInput>, UserUncheckedUpdateWithoutDietChartsInput>
  }

  export type ProgressUpdateUpdateManyWithoutDietChartNestedInput = {
    create?: XOR<ProgressUpdateCreateWithoutDietChartInput, ProgressUpdateUncheckedCreateWithoutDietChartInput> | ProgressUpdateCreateWithoutDietChartInput[] | ProgressUpdateUncheckedCreateWithoutDietChartInput[]
    connectOrCreate?: ProgressUpdateCreateOrConnectWithoutDietChartInput | ProgressUpdateCreateOrConnectWithoutDietChartInput[]
    upsert?: ProgressUpdateUpsertWithWhereUniqueWithoutDietChartInput | ProgressUpdateUpsertWithWhereUniqueWithoutDietChartInput[]
    createMany?: ProgressUpdateCreateManyDietChartInputEnvelope
    set?: ProgressUpdateWhereUniqueInput | ProgressUpdateWhereUniqueInput[]
    disconnect?: ProgressUpdateWhereUniqueInput | ProgressUpdateWhereUniqueInput[]
    delete?: ProgressUpdateWhereUniqueInput | ProgressUpdateWhereUniqueInput[]
    connect?: ProgressUpdateWhereUniqueInput | ProgressUpdateWhereUniqueInput[]
    update?: ProgressUpdateUpdateWithWhereUniqueWithoutDietChartInput | ProgressUpdateUpdateWithWhereUniqueWithoutDietChartInput[]
    updateMany?: ProgressUpdateUpdateManyWithWhereWithoutDietChartInput | ProgressUpdateUpdateManyWithWhereWithoutDietChartInput[]
    deleteMany?: ProgressUpdateScalarWhereInput | ProgressUpdateScalarWhereInput[]
  }

  export type ProgressUpdateUncheckedUpdateManyWithoutDietChartNestedInput = {
    create?: XOR<ProgressUpdateCreateWithoutDietChartInput, ProgressUpdateUncheckedCreateWithoutDietChartInput> | ProgressUpdateCreateWithoutDietChartInput[] | ProgressUpdateUncheckedCreateWithoutDietChartInput[]
    connectOrCreate?: ProgressUpdateCreateOrConnectWithoutDietChartInput | ProgressUpdateCreateOrConnectWithoutDietChartInput[]
    upsert?: ProgressUpdateUpsertWithWhereUniqueWithoutDietChartInput | ProgressUpdateUpsertWithWhereUniqueWithoutDietChartInput[]
    createMany?: ProgressUpdateCreateManyDietChartInputEnvelope
    set?: ProgressUpdateWhereUniqueInput | ProgressUpdateWhereUniqueInput[]
    disconnect?: ProgressUpdateWhereUniqueInput | ProgressUpdateWhereUniqueInput[]
    delete?: ProgressUpdateWhereUniqueInput | ProgressUpdateWhereUniqueInput[]
    connect?: ProgressUpdateWhereUniqueInput | ProgressUpdateWhereUniqueInput[]
    update?: ProgressUpdateUpdateWithWhereUniqueWithoutDietChartInput | ProgressUpdateUpdateWithWhereUniqueWithoutDietChartInput[]
    updateMany?: ProgressUpdateUpdateManyWithWhereWithoutDietChartInput | ProgressUpdateUpdateManyWithWhereWithoutDietChartInput[]
    deleteMany?: ProgressUpdateScalarWhereInput | ProgressUpdateScalarWhereInput[]
  }

  export type DietChartCreateNestedOneWithoutProgressUpdatesInput = {
    create?: XOR<DietChartCreateWithoutProgressUpdatesInput, DietChartUncheckedCreateWithoutProgressUpdatesInput>
    connectOrCreate?: DietChartCreateOrConnectWithoutProgressUpdatesInput
    connect?: DietChartWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DietChartUpdateOneRequiredWithoutProgressUpdatesNestedInput = {
    create?: XOR<DietChartCreateWithoutProgressUpdatesInput, DietChartUncheckedCreateWithoutProgressUpdatesInput>
    connectOrCreate?: DietChartCreateOrConnectWithoutProgressUpdatesInput
    upsert?: DietChartUpsertWithoutProgressUpdatesInput
    connect?: DietChartWhereUniqueInput
    update?: XOR<XOR<DietChartUpdateToOneWithWhereWithoutProgressUpdatesInput, DietChartUpdateWithoutProgressUpdatesInput>, DietChartUncheckedUpdateWithoutProgressUpdatesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type NestedEnumDietaryPreferenceFilter<$PrismaModel = never> = {
    equals?: $Enums.DietaryPreference | EnumDietaryPreferenceFieldRefInput<$PrismaModel>
    in?: $Enums.DietaryPreference[] | ListEnumDietaryPreferenceFieldRefInput<$PrismaModel>
    notIn?: $Enums.DietaryPreference[] | ListEnumDietaryPreferenceFieldRefInput<$PrismaModel>
    not?: NestedEnumDietaryPreferenceFilter<$PrismaModel> | $Enums.DietaryPreference
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumDietaryPreferenceWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DietaryPreference | EnumDietaryPreferenceFieldRefInput<$PrismaModel>
    in?: $Enums.DietaryPreference[] | ListEnumDietaryPreferenceFieldRefInput<$PrismaModel>
    notIn?: $Enums.DietaryPreference[] | ListEnumDietaryPreferenceFieldRefInput<$PrismaModel>
    not?: NestedEnumDietaryPreferenceWithAggregatesFilter<$PrismaModel> | $Enums.DietaryPreference
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDietaryPreferenceFilter<$PrismaModel>
    _max?: NestedEnumDietaryPreferenceFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type CountryInsightCreateWithoutUsersInput = {
    country: string
    ageGroup: string
    id?: string
    averageLifeExpectancy: number
    aqi: number
    aqiCategory: string
    stepsRecommendationByAgeGroup?: CountryInsightCreatestepsRecommendationByAgeGroupInput | InputJsonValue[]
    RecommendedDailySleepByAgeGroup: number
    nutritionNeeds?: CountryInsightCreatenutritionNeedsInput | string[]
    healthTips?: CountryInsightCreatehealthTipsInput | string[]
    healthTrends?: CountryInsightCreatehealthTrendsInput | string[]
  }

  export type CountryInsightUncheckedCreateWithoutUsersInput = {
    country: string
    ageGroup: string
    id?: string
    averageLifeExpectancy: number
    aqi: number
    aqiCategory: string
    stepsRecommendationByAgeGroup?: CountryInsightCreatestepsRecommendationByAgeGroupInput | InputJsonValue[]
    RecommendedDailySleepByAgeGroup: number
    nutritionNeeds?: CountryInsightCreatenutritionNeedsInput | string[]
    healthTips?: CountryInsightCreatehealthTipsInput | string[]
    healthTrends?: CountryInsightCreatehealthTrendsInput | string[]
  }

  export type CountryInsightCreateOrConnectWithoutUsersInput = {
    where: CountryInsightWhereUniqueInput
    create: XOR<CountryInsightCreateWithoutUsersInput, CountryInsightUncheckedCreateWithoutUsersInput>
  }

  export type DietChartCreateWithoutUserInput = {
    id?: string
    name: string
    goalType: string
    dietaryPreference?: $Enums.DietaryPreference
    targetWeight?: number | null
    currentWeight: number
    duration: number
    startDate?: Date | string
    endDate: Date | string
    monday: JsonNullValueInput | InputJsonValue
    tuesday: JsonNullValueInput | InputJsonValue
    wednesday: JsonNullValueInput | InputJsonValue
    thursday: JsonNullValueInput | InputJsonValue
    friday: JsonNullValueInput | InputJsonValue
    saturday: JsonNullValueInput | InputJsonValue
    sunday: JsonNullValueInput | InputJsonValue
    calories: number
    proteins: number
    carbs: number
    fats: number
    createdAt?: Date | string
    updatedAt?: Date | string
    progressUpdates?: ProgressUpdateCreateNestedManyWithoutDietChartInput
  }

  export type DietChartUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    goalType: string
    dietaryPreference?: $Enums.DietaryPreference
    targetWeight?: number | null
    currentWeight: number
    duration: number
    startDate?: Date | string
    endDate: Date | string
    monday: JsonNullValueInput | InputJsonValue
    tuesday: JsonNullValueInput | InputJsonValue
    wednesday: JsonNullValueInput | InputJsonValue
    thursday: JsonNullValueInput | InputJsonValue
    friday: JsonNullValueInput | InputJsonValue
    saturday: JsonNullValueInput | InputJsonValue
    sunday: JsonNullValueInput | InputJsonValue
    calories: number
    proteins: number
    carbs: number
    fats: number
    createdAt?: Date | string
    updatedAt?: Date | string
    progressUpdates?: ProgressUpdateUncheckedCreateNestedManyWithoutDietChartInput
  }

  export type DietChartCreateOrConnectWithoutUserInput = {
    where: DietChartWhereUniqueInput
    create: XOR<DietChartCreateWithoutUserInput, DietChartUncheckedCreateWithoutUserInput>
  }

  export type DietChartCreateManyUserInputEnvelope = {
    data: DietChartCreateManyUserInput | DietChartCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CountryInsightUpsertWithoutUsersInput = {
    update: XOR<CountryInsightUpdateWithoutUsersInput, CountryInsightUncheckedUpdateWithoutUsersInput>
    create: XOR<CountryInsightCreateWithoutUsersInput, CountryInsightUncheckedCreateWithoutUsersInput>
    where?: CountryInsightWhereInput
  }

  export type CountryInsightUpdateToOneWithWhereWithoutUsersInput = {
    where?: CountryInsightWhereInput
    data: XOR<CountryInsightUpdateWithoutUsersInput, CountryInsightUncheckedUpdateWithoutUsersInput>
  }

  export type CountryInsightUpdateWithoutUsersInput = {
    country?: StringFieldUpdateOperationsInput | string
    ageGroup?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    averageLifeExpectancy?: FloatFieldUpdateOperationsInput | number
    aqi?: IntFieldUpdateOperationsInput | number
    aqiCategory?: StringFieldUpdateOperationsInput | string
    stepsRecommendationByAgeGroup?: CountryInsightUpdatestepsRecommendationByAgeGroupInput | InputJsonValue[]
    RecommendedDailySleepByAgeGroup?: IntFieldUpdateOperationsInput | number
    nutritionNeeds?: CountryInsightUpdatenutritionNeedsInput | string[]
    healthTips?: CountryInsightUpdatehealthTipsInput | string[]
    healthTrends?: CountryInsightUpdatehealthTrendsInput | string[]
  }

  export type CountryInsightUncheckedUpdateWithoutUsersInput = {
    country?: StringFieldUpdateOperationsInput | string
    ageGroup?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    averageLifeExpectancy?: FloatFieldUpdateOperationsInput | number
    aqi?: IntFieldUpdateOperationsInput | number
    aqiCategory?: StringFieldUpdateOperationsInput | string
    stepsRecommendationByAgeGroup?: CountryInsightUpdatestepsRecommendationByAgeGroupInput | InputJsonValue[]
    RecommendedDailySleepByAgeGroup?: IntFieldUpdateOperationsInput | number
    nutritionNeeds?: CountryInsightUpdatenutritionNeedsInput | string[]
    healthTips?: CountryInsightUpdatehealthTipsInput | string[]
    healthTrends?: CountryInsightUpdatehealthTrendsInput | string[]
  }

  export type DietChartUpsertWithWhereUniqueWithoutUserInput = {
    where: DietChartWhereUniqueInput
    update: XOR<DietChartUpdateWithoutUserInput, DietChartUncheckedUpdateWithoutUserInput>
    create: XOR<DietChartCreateWithoutUserInput, DietChartUncheckedCreateWithoutUserInput>
  }

  export type DietChartUpdateWithWhereUniqueWithoutUserInput = {
    where: DietChartWhereUniqueInput
    data: XOR<DietChartUpdateWithoutUserInput, DietChartUncheckedUpdateWithoutUserInput>
  }

  export type DietChartUpdateManyWithWhereWithoutUserInput = {
    where: DietChartScalarWhereInput
    data: XOR<DietChartUpdateManyMutationInput, DietChartUncheckedUpdateManyWithoutUserInput>
  }

  export type DietChartScalarWhereInput = {
    AND?: DietChartScalarWhereInput | DietChartScalarWhereInput[]
    OR?: DietChartScalarWhereInput[]
    NOT?: DietChartScalarWhereInput | DietChartScalarWhereInput[]
    id?: StringFilter<"DietChart"> | string
    userId?: StringFilter<"DietChart"> | string
    name?: StringFilter<"DietChart"> | string
    goalType?: StringFilter<"DietChart"> | string
    dietaryPreference?: EnumDietaryPreferenceFilter<"DietChart"> | $Enums.DietaryPreference
    targetWeight?: FloatNullableFilter<"DietChart"> | number | null
    currentWeight?: FloatFilter<"DietChart"> | number
    duration?: IntFilter<"DietChart"> | number
    startDate?: DateTimeFilter<"DietChart"> | Date | string
    endDate?: DateTimeFilter<"DietChart"> | Date | string
    monday?: JsonFilter<"DietChart">
    tuesday?: JsonFilter<"DietChart">
    wednesday?: JsonFilter<"DietChart">
    thursday?: JsonFilter<"DietChart">
    friday?: JsonFilter<"DietChart">
    saturday?: JsonFilter<"DietChart">
    sunday?: JsonFilter<"DietChart">
    calories?: IntFilter<"DietChart"> | number
    proteins?: IntFilter<"DietChart"> | number
    carbs?: IntFilter<"DietChart"> | number
    fats?: IntFilter<"DietChart"> | number
    createdAt?: DateTimeFilter<"DietChart"> | Date | string
    updatedAt?: DateTimeFilter<"DietChart"> | Date | string
  }

  export type UserCreateWithoutCountryInsightInput = {
    id?: string
    clerkUserId: string
    email: string
    name?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    gender?: string | null
    dietCharts?: DietChartCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCountryInsightInput = {
    id?: string
    clerkUserId: string
    email: string
    name?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    gender?: string | null
    dietCharts?: DietChartUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCountryInsightInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCountryInsightInput, UserUncheckedCreateWithoutCountryInsightInput>
  }

  export type UserCreateManyCountryInsightInputEnvelope = {
    data: UserCreateManyCountryInsightInput | UserCreateManyCountryInsightInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutCountryInsightInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutCountryInsightInput, UserUncheckedUpdateWithoutCountryInsightInput>
    create: XOR<UserCreateWithoutCountryInsightInput, UserUncheckedCreateWithoutCountryInsightInput>
  }

  export type UserUpdateWithWhereUniqueWithoutCountryInsightInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutCountryInsightInput, UserUncheckedUpdateWithoutCountryInsightInput>
  }

  export type UserUpdateManyWithWhereWithoutCountryInsightInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutCountryInsightInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    clerkUserId?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    imageUrl?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    country?: StringNullableFilter<"User"> | string | null
    ageGroup?: StringNullableFilter<"User"> | string | null
    gender?: StringNullableFilter<"User"> | string | null
  }

  export type UserCreateWithoutDietChartsInput = {
    id?: string
    clerkUserId: string
    email: string
    name?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    gender?: string | null
    countryInsight?: CountryInsightCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutDietChartsInput = {
    id?: string
    clerkUserId: string
    email: string
    name?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    country?: string | null
    ageGroup?: string | null
    gender?: string | null
  }

  export type UserCreateOrConnectWithoutDietChartsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDietChartsInput, UserUncheckedCreateWithoutDietChartsInput>
  }

  export type ProgressUpdateCreateWithoutDietChartInput = {
    id?: string
    date?: Date | string
    completed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProgressUpdateUncheckedCreateWithoutDietChartInput = {
    id?: string
    date?: Date | string
    completed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProgressUpdateCreateOrConnectWithoutDietChartInput = {
    where: ProgressUpdateWhereUniqueInput
    create: XOR<ProgressUpdateCreateWithoutDietChartInput, ProgressUpdateUncheckedCreateWithoutDietChartInput>
  }

  export type ProgressUpdateCreateManyDietChartInputEnvelope = {
    data: ProgressUpdateCreateManyDietChartInput | ProgressUpdateCreateManyDietChartInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutDietChartsInput = {
    update: XOR<UserUpdateWithoutDietChartsInput, UserUncheckedUpdateWithoutDietChartsInput>
    create: XOR<UserCreateWithoutDietChartsInput, UserUncheckedCreateWithoutDietChartsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDietChartsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDietChartsInput, UserUncheckedUpdateWithoutDietChartsInput>
  }

  export type UserUpdateWithoutDietChartsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    countryInsight?: CountryInsightUpdateOneWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutDietChartsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    ageGroup?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProgressUpdateUpsertWithWhereUniqueWithoutDietChartInput = {
    where: ProgressUpdateWhereUniqueInput
    update: XOR<ProgressUpdateUpdateWithoutDietChartInput, ProgressUpdateUncheckedUpdateWithoutDietChartInput>
    create: XOR<ProgressUpdateCreateWithoutDietChartInput, ProgressUpdateUncheckedCreateWithoutDietChartInput>
  }

  export type ProgressUpdateUpdateWithWhereUniqueWithoutDietChartInput = {
    where: ProgressUpdateWhereUniqueInput
    data: XOR<ProgressUpdateUpdateWithoutDietChartInput, ProgressUpdateUncheckedUpdateWithoutDietChartInput>
  }

  export type ProgressUpdateUpdateManyWithWhereWithoutDietChartInput = {
    where: ProgressUpdateScalarWhereInput
    data: XOR<ProgressUpdateUpdateManyMutationInput, ProgressUpdateUncheckedUpdateManyWithoutDietChartInput>
  }

  export type ProgressUpdateScalarWhereInput = {
    AND?: ProgressUpdateScalarWhereInput | ProgressUpdateScalarWhereInput[]
    OR?: ProgressUpdateScalarWhereInput[]
    NOT?: ProgressUpdateScalarWhereInput | ProgressUpdateScalarWhereInput[]
    id?: StringFilter<"ProgressUpdate"> | string
    chartId?: StringFilter<"ProgressUpdate"> | string
    date?: DateTimeFilter<"ProgressUpdate"> | Date | string
    completed?: BoolFilter<"ProgressUpdate"> | boolean
    createdAt?: DateTimeFilter<"ProgressUpdate"> | Date | string
    updatedAt?: DateTimeFilter<"ProgressUpdate"> | Date | string
  }

  export type DietChartCreateWithoutProgressUpdatesInput = {
    id?: string
    name: string
    goalType: string
    dietaryPreference?: $Enums.DietaryPreference
    targetWeight?: number | null
    currentWeight: number
    duration: number
    startDate?: Date | string
    endDate: Date | string
    monday: JsonNullValueInput | InputJsonValue
    tuesday: JsonNullValueInput | InputJsonValue
    wednesday: JsonNullValueInput | InputJsonValue
    thursday: JsonNullValueInput | InputJsonValue
    friday: JsonNullValueInput | InputJsonValue
    saturday: JsonNullValueInput | InputJsonValue
    sunday: JsonNullValueInput | InputJsonValue
    calories: number
    proteins: number
    carbs: number
    fats: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutDietChartsInput
  }

  export type DietChartUncheckedCreateWithoutProgressUpdatesInput = {
    id?: string
    userId: string
    name: string
    goalType: string
    dietaryPreference?: $Enums.DietaryPreference
    targetWeight?: number | null
    currentWeight: number
    duration: number
    startDate?: Date | string
    endDate: Date | string
    monday: JsonNullValueInput | InputJsonValue
    tuesday: JsonNullValueInput | InputJsonValue
    wednesday: JsonNullValueInput | InputJsonValue
    thursday: JsonNullValueInput | InputJsonValue
    friday: JsonNullValueInput | InputJsonValue
    saturday: JsonNullValueInput | InputJsonValue
    sunday: JsonNullValueInput | InputJsonValue
    calories: number
    proteins: number
    carbs: number
    fats: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DietChartCreateOrConnectWithoutProgressUpdatesInput = {
    where: DietChartWhereUniqueInput
    create: XOR<DietChartCreateWithoutProgressUpdatesInput, DietChartUncheckedCreateWithoutProgressUpdatesInput>
  }

  export type DietChartUpsertWithoutProgressUpdatesInput = {
    update: XOR<DietChartUpdateWithoutProgressUpdatesInput, DietChartUncheckedUpdateWithoutProgressUpdatesInput>
    create: XOR<DietChartCreateWithoutProgressUpdatesInput, DietChartUncheckedCreateWithoutProgressUpdatesInput>
    where?: DietChartWhereInput
  }

  export type DietChartUpdateToOneWithWhereWithoutProgressUpdatesInput = {
    where?: DietChartWhereInput
    data: XOR<DietChartUpdateWithoutProgressUpdatesInput, DietChartUncheckedUpdateWithoutProgressUpdatesInput>
  }

  export type DietChartUpdateWithoutProgressUpdatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    goalType?: StringFieldUpdateOperationsInput | string
    dietaryPreference?: EnumDietaryPreferenceFieldUpdateOperationsInput | $Enums.DietaryPreference
    targetWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    currentWeight?: FloatFieldUpdateOperationsInput | number
    duration?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    monday?: JsonNullValueInput | InputJsonValue
    tuesday?: JsonNullValueInput | InputJsonValue
    wednesday?: JsonNullValueInput | InputJsonValue
    thursday?: JsonNullValueInput | InputJsonValue
    friday?: JsonNullValueInput | InputJsonValue
    saturday?: JsonNullValueInput | InputJsonValue
    sunday?: JsonNullValueInput | InputJsonValue
    calories?: IntFieldUpdateOperationsInput | number
    proteins?: IntFieldUpdateOperationsInput | number
    carbs?: IntFieldUpdateOperationsInput | number
    fats?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutDietChartsNestedInput
  }

  export type DietChartUncheckedUpdateWithoutProgressUpdatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    goalType?: StringFieldUpdateOperationsInput | string
    dietaryPreference?: EnumDietaryPreferenceFieldUpdateOperationsInput | $Enums.DietaryPreference
    targetWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    currentWeight?: FloatFieldUpdateOperationsInput | number
    duration?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    monday?: JsonNullValueInput | InputJsonValue
    tuesday?: JsonNullValueInput | InputJsonValue
    wednesday?: JsonNullValueInput | InputJsonValue
    thursday?: JsonNullValueInput | InputJsonValue
    friday?: JsonNullValueInput | InputJsonValue
    saturday?: JsonNullValueInput | InputJsonValue
    sunday?: JsonNullValueInput | InputJsonValue
    calories?: IntFieldUpdateOperationsInput | number
    proteins?: IntFieldUpdateOperationsInput | number
    carbs?: IntFieldUpdateOperationsInput | number
    fats?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DietChartCreateManyUserInput = {
    id?: string
    name: string
    goalType: string
    dietaryPreference?: $Enums.DietaryPreference
    targetWeight?: number | null
    currentWeight: number
    duration: number
    startDate?: Date | string
    endDate: Date | string
    monday: JsonNullValueInput | InputJsonValue
    tuesday: JsonNullValueInput | InputJsonValue
    wednesday: JsonNullValueInput | InputJsonValue
    thursday: JsonNullValueInput | InputJsonValue
    friday: JsonNullValueInput | InputJsonValue
    saturday: JsonNullValueInput | InputJsonValue
    sunday: JsonNullValueInput | InputJsonValue
    calories: number
    proteins: number
    carbs: number
    fats: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DietChartUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    goalType?: StringFieldUpdateOperationsInput | string
    dietaryPreference?: EnumDietaryPreferenceFieldUpdateOperationsInput | $Enums.DietaryPreference
    targetWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    currentWeight?: FloatFieldUpdateOperationsInput | number
    duration?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    monday?: JsonNullValueInput | InputJsonValue
    tuesday?: JsonNullValueInput | InputJsonValue
    wednesday?: JsonNullValueInput | InputJsonValue
    thursday?: JsonNullValueInput | InputJsonValue
    friday?: JsonNullValueInput | InputJsonValue
    saturday?: JsonNullValueInput | InputJsonValue
    sunday?: JsonNullValueInput | InputJsonValue
    calories?: IntFieldUpdateOperationsInput | number
    proteins?: IntFieldUpdateOperationsInput | number
    carbs?: IntFieldUpdateOperationsInput | number
    fats?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    progressUpdates?: ProgressUpdateUpdateManyWithoutDietChartNestedInput
  }

  export type DietChartUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    goalType?: StringFieldUpdateOperationsInput | string
    dietaryPreference?: EnumDietaryPreferenceFieldUpdateOperationsInput | $Enums.DietaryPreference
    targetWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    currentWeight?: FloatFieldUpdateOperationsInput | number
    duration?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    monday?: JsonNullValueInput | InputJsonValue
    tuesday?: JsonNullValueInput | InputJsonValue
    wednesday?: JsonNullValueInput | InputJsonValue
    thursday?: JsonNullValueInput | InputJsonValue
    friday?: JsonNullValueInput | InputJsonValue
    saturday?: JsonNullValueInput | InputJsonValue
    sunday?: JsonNullValueInput | InputJsonValue
    calories?: IntFieldUpdateOperationsInput | number
    proteins?: IntFieldUpdateOperationsInput | number
    carbs?: IntFieldUpdateOperationsInput | number
    fats?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    progressUpdates?: ProgressUpdateUncheckedUpdateManyWithoutDietChartNestedInput
  }

  export type DietChartUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    goalType?: StringFieldUpdateOperationsInput | string
    dietaryPreference?: EnumDietaryPreferenceFieldUpdateOperationsInput | $Enums.DietaryPreference
    targetWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    currentWeight?: FloatFieldUpdateOperationsInput | number
    duration?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    monday?: JsonNullValueInput | InputJsonValue
    tuesday?: JsonNullValueInput | InputJsonValue
    wednesday?: JsonNullValueInput | InputJsonValue
    thursday?: JsonNullValueInput | InputJsonValue
    friday?: JsonNullValueInput | InputJsonValue
    saturday?: JsonNullValueInput | InputJsonValue
    sunday?: JsonNullValueInput | InputJsonValue
    calories?: IntFieldUpdateOperationsInput | number
    proteins?: IntFieldUpdateOperationsInput | number
    carbs?: IntFieldUpdateOperationsInput | number
    fats?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyCountryInsightInput = {
    id?: string
    clerkUserId: string
    email: string
    name?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    gender?: string | null
  }

  export type UserUpdateWithoutCountryInsightInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    dietCharts?: DietChartUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCountryInsightInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    dietCharts?: DietChartUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutCountryInsightInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProgressUpdateCreateManyDietChartInput = {
    id?: string
    date?: Date | string
    completed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProgressUpdateUpdateWithoutDietChartInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProgressUpdateUncheckedUpdateWithoutDietChartInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProgressUpdateUncheckedUpdateManyWithoutDietChartInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CountryInsightCountOutputTypeDefaultArgs instead
     */
    export type CountryInsightCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CountryInsightCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DietChartCountOutputTypeDefaultArgs instead
     */
    export type DietChartCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DietChartCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CountryInsightDefaultArgs instead
     */
    export type CountryInsightArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CountryInsightDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DietChartDefaultArgs instead
     */
    export type DietChartArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DietChartDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProgressUpdateDefaultArgs instead
     */
    export type ProgressUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProgressUpdateDefaultArgs<ExtArgs>

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