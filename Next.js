export default function TodoPage() {
  return (
    <main style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Todo List App</h1>
 
      <div style={{ margin: '20px 0' }}>
        <input
          type="text"
          placeholder="Enter a new task.."
          style={{
            padding: '8px',
            width: '200px',
            marginRight: '5px',
            border: '1px solid #ccc',
            borderRadius: '4px'
          }}
        />
        <button
          style={{
            padding: '8px 12px',
            border: 'none',
            backgroundColor: '#ddd',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Add
        </button>
      </div>
 
      <ul style={{ listStyleType: 'disc', display: 'inline-block', textAlign: 'left' }}>
        <li>
          <input type="checkbox" /> Sleep
        </li>
        <li>
          <input type="checkbox" defaultChecked />{' '}
          <span style={{ textDecoration: 'line-through' }}>Join React class</span>
        </li>
        <li>
          <input type="checkbox" /> Do react homework
        </li>
      </ul>
    </main>
  );
}