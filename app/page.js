import Navbar from '@/Components/Navbar';
import PageTitle from '@/Components/PageTitle';
//home pagepage
export default function HomePage() {
  return (
    <div className="page">
      <Navbar currentPage="Home" />
      <PageTitle text="Welcome to My App!" />
    </div>
  );
}
