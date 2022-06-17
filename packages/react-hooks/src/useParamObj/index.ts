import { useRef } from "react";
import {useLocation} from 'react-router-dom'
import  {urlParam} from "@abc/utils"

function useParamObj<T>() {
    const location = useLocation()
    let {current} = useRef(urlParam<T>(location.search))
    return current
}
export default useParamObj