
import './App.css'
import Input from './components/Input'

function App() {

  return (

    <div className='app'>
      <article className="flex flex-col">
        <p>{'<Input />'}</p>
        <Input />
      </article>

      <article className="flex flex-col">
        <p>{'<Input error />'}</p>
        <Input helperText={'something is wrong'} error field={'Last name'} />
      </article>

      <article className="flex flex-col">
        <p>{'<Input  disabled/>'}</p>
        <Input disabled field={'Label'} />
      </article>

      <article className="flex flex-col">
        <p>{'<Input  helperText= "Some intersting text"/>'}</p>
        <Input helperText="Some intersting text" />
      </article>

      <article className="flex flex-col">
        <p>{'<Input startIcon />'}</p>
        <Input startIcon={'call'} />
      </article>

      <article className="flex flex-col">
        <p>{'<Input endIcon />'}</p>
        <Input placeholder={'Placeholder'} endIcon={'lock'} />
      </article>


      <article className="flex flex-col">
        <p>{'<Input value={"text"} />'}</p>
        <Input value={"text"} />
      </article>


      <article className="flex wrap">
        <div className='flex flex-col'>
          <p>{'<Input size="sm" />'}</p>
          <Input size="sm" />
        </div>



        <div>
          <p>{'<Input size="md" />'}</p>
          <Input size={'md'} />
        </div>
      </article>

      <article className="flex flex-col long">
        <p>{'<Input fullWidth/>'}</p>
        <Input fullWidth value="Text" />
      </article>


      <article className="flex flex-col">
        <p>{'<Input multiLine row="4"/>'}</p>
        <Input multiLine field={'Comment'} rows={"6"} />
      </article>
    </div>


  )
}

export default App
