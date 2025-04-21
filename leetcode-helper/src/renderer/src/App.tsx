function App(): React.JSX.Element {
  const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')

  return (
    <>
      <div className="h-screen bg-red-200"></div>
    </>
  )
}

export default App
