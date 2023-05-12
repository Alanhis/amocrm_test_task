import { Link } from 'react-router-dom';

export default function MainPage() {
  return (
    <div>
      <Link to="firsttask">Первое задание</Link>
      <Link to="secondtask">Второе задание</Link>
    </div>
  );
}
