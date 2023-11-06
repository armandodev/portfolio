import stackLanguages from './../mocks/stack.json'
import './css/Stack.css' // Asegúrate de importar tu hoja de estilos

export const Stack = () => {
  const stackList = stackLanguages.stack

  return (
    <section id='stack'>
      <ul className='stack-list' role='list'>
        {stackList.map((item) => (
          <li key={item.id} className='stack-list-item' role='listitem'>
            <img
              src={item.icon}
              alt={item.name}
              className='stack-list-item-image'
            />
            <p className='stack-list-item-name'>{item.name}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
