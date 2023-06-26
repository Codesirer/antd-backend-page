/**
 *
 * @param {Object} {ok: false, req:{node:action.node, url:action.url, time:action.time}, resp:{data:xxx}}
 * @param {Object} action with payload
 * @returns
 */
export function renderContentReducer(state, action) {
  switch (action.type) {
    case 'node-change':
      console.log('node-change')
      return {
        ...state,
        req: { ...state.req, node: action.node },
      }

    case 'url-change':
      console.log('url-change')
      return {
        ...state,
        req: { ...state.req, urlPath: url },
      }

    case 'fetching':
      return {
        ...state,
        ok: action.ok,
      }

    case 'fetch_success_node':
      return {
        ...state,
        ok: true,
        req: { ...state.req, node: action.node },
        resp: { ...state.resp, data: action.payload },
      }

    case 'fetch_success_url':
      let url = action.urlPath === '/' ? '/overview' : action.urlPath
      return {
        ...state,
        ok: true,
        req: { ...state.req, urlPath: action.urlPath },
        resp: { ...state.resp, data: action.payload },
      }
    case 'fetch_error':
      return {
        ...state,
        ok: false,
        resp: { ...state.resp, data: {} },
      }

    // case 'time-change':
    //   console.log('time-change')
    //   getDataFromServer(state.req.urlPath).then((res) => {
    //     return { ...state, ok: true, ...state, resp: { ...state.resp, res } }
    //   })

    default:
      return state
  }
}
