// Function allows us to pass any type to it and then checks that it is not null
// It returns a non-nullable type back, which avoids typescript type (or undefined) mismatches
export function assertIsDefined<T> (val: T): asserts val is NonNullable<T> {
  if (!val) {
    throw Error("Expected 'val' to be defined, but received " + val)
  }
}
