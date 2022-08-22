import { useState, useCallback } from "react"

interface State<D> {
  status: "idle" | "loading" | "error" | "success";
  data: D | null;
  error: null | Error;
}

const defaultValue: State<null> = {
  status: "idle",
  data: null,
  error: null
}

export const useAsync = <D>(initialState?: State<D>) => {
  const [state, setState] = useState({
    ...initialState,
    ...defaultValue
  })

  const setData = useCallback((data: any) => {
    setState({
      data,
      status: "success",
      error: null
    })
  }, [])


  const setError = useCallback(
    (error: Error) =>
      setState({
        error,
        status: 'error',
        data: null,
      }),
    []
  );

  const run = useCallback((promise: Promise<any>) => {
    if (!promise || !promise.then) {
      throw new Error('请传入Promise类型数据')
    }
    setState({
      ...state,
      status: "loading"
    })
    return promise.then((data) => {
      setData(data)
      return data
    }).catch(error => {
      setError(error)
    })
  }, [])

  return {
    isLoading: state.status === 'loading',
    isError: state.status === 'error',
    isIdle: state.status === 'idle',
    isSuccess: state.status === 'success',
    run,
    ...state
  }
}
