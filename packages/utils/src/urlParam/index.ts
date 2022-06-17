function urlParam<T> (search:string) {
    const param = {} as T
    search.replace(/([^&=?]+)=([^&]+)/g, (_m, $1:keyof T, $2) => (param[$1] = $2));
    return param
}

export default urlParam