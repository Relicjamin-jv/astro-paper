let pyodideReadyPromise = (async () => {
  // @ts-expect-error
  let pyodide = await import("https://cdn.jsdelivr.net/pyodide/v0.27.7/full/pyodide.mjs");
  return pyodide.loadPyodide({
    indexURL: "https://cdn.jsdelivr.net/pyodide/v0.27.7/full"
  });
})();

function overrideShow(python: string) {
  const pythonOverrideCode = `
import matplotlib
matplotlib.use("AGG")
import matplotlib.pyplot as plt
import io
import base64

def show_base64():
    buf = io.BytesIO()
    plt.savefig(buf, format='png')
    buf.seek(0)
    img_base64 = base64.b64encode(buf.read()).decode('utf-8')
    buf.close()
    plt.close()
    return f"data:image/png;base64,{img_base64}"

# Override plt.show
plt.show = show_base64
  `
  return `${pythonOverrideCode}\n${python}`
}

self.onmessage = async (event) => {
  // make sure loading is done
  const pyodide = await pyodideReadyPromise;
  let { id, python, context } = event.data;
  python = overrideShow(python) // override plt.show to send base64 code back to main thread
  // Now load any packages we need, run the code, and send the result back.
  await pyodide.loadPackagesFromImports(python);
  // make a Python dictionary with the data from `context`
  const dict = pyodide.globals.get("dict");
  const globals = dict(Object.entries(context));
  try {
    // Execute the python code in this context
    let result = await pyodide.runPythonAsync(python, { globals });
    if (result instanceof pyodide.ffi.PyProxy) {
      result = result.toJs();
    }
    self.postMessage({ result, id });
    result.destroy()
  } catch (error: any) {
    self.postMessage({ error: error.message, id });
  }
};

