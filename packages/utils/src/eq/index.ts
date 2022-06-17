function eq<T>(value:T, other:T) {
    return value === other || (value !== value && other !== other)
  }
  export default eq