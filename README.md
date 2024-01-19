This is a simple project to reproduce Angular SSR not waiting for http calls

the error received from the http.get call is:

```
Error:  _e {
  headers: e {
    normalizedNames: Map(0) {},
    lazyUpdate: null,
    headers: Map(0) {}
  },
  status: 0,
  statusText: 'Unknown Error',
  url: 'https://www.boredapi.com/api/activity',
  ok: false,
  name: 'HttpErrorResponse',
  message: 'Http failure response for https://www.boredapi.com/api/activity: 0 undefined',
  error: TypeError: fetch failed
      at Object.fetch (node:internal/deps/undici/undici:14062:11)
      at process.processTicksAndRejections (node:internal/process/task_queues:95:5) {
    cause: ConnectTimeoutError: Connect Timeout Error
        at onConnectTimeout (C:\Users\Alfonso Moscato\Documents\progetti_sw\test-angular\test-angular\node_modules\undici\lib\core\connect.js:186:24)
        at C:\Users\Alfonso Moscato\Documents\progetti_sw\test-angular\test-angular\node_modules\undici\lib\core\connect.js:133:46
        at Immediate.<anonymous> (C:\Users\Alfonso Moscato\Documents\progetti_sw\test-angular\test-angular\node_modules\undici\lib\core\connect.js:172:33)
        at b.<computed> (file:///C:/Users/Alfonso%20Moscato/Documents/progetti_sw/test-angular/test-angular/.angular/prerender-root/cb636af2-887c-4e33-aa91-bb5fa7ab2ea4/polyfills.server.mjs:4:11677)
        at s.invokeTask (file:///C:/Users/Alfonso%20Moscato/Documents/progetti_sw/test-angular/test-angular/.angular/prerender-root/cb636af2-887c-4e33-aa91-bb5fa7ab2ea4/polyfills.server.mjs:3:7335)
        at Object.onInvokeTask (file:///C:/Users/Alfonso%20Moscato/Documents/progetti_sw/test-angular/test-angular/.angular/prerender-root/cb636af2-887c-4e33-aa91-bb5fa7ab2ea4/chunk-W4NUC77D.mjs:8:49532)
        at s.invokeTask (file:///C:/Users/Alfonso%20Moscato/Documents/progetti_sw/test-angular/test-angular/.angular/prerender-root/cb636af2-887c-4e33-aa91-bb5fa7ab2ea4/polyfills.server.mjs:3:7256)
        at ne.runTask (file:///C:/Users/Alfonso%20Moscato/Documents/progetti_sw/test-angular/test-angular/.angular/prerender-root/cb636af2-887c-4e33-aa91-bb5fa7ab2ea4/polyfills.server.mjs:3:2678)
        at invokeTask (file:///C:/Users/Alfonso%20Moscato/Documents/progetti_sw/test-angular/test-angular/.angular/prerender-root/cb636af2-887c-4e33-aa91-bb5fa7ab2ea4/polyfills.server.mjs:3:8410)
        at E.z.useG.invoke (file:///C:/Users/Alfonso%20Moscato/Documents/progetti_sw/test-angular/test-angular/.angular/prerender-root/cb636af2-887c-4e33-aa91-bb5fa7ab2ea4/polyfills.server.mjs:3:8312) {
      code: 'UND_ERR_CONNECT_TIMEOUT'
    }
  }
```

To check the html page you can inspect its html printed on terminal. There is also error text inside the html, as otherwiese it wasn't visible
