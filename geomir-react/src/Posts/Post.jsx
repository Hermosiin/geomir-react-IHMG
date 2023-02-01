import { useParams } from 'react-router-dom';

export default function Posts() {

  let { id } = useParams();

    return (
    <div className="posts">
      <h1>Aqui va el POST {id}</h1>
    </div>
    )
  }
  