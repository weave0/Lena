import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <header className="bg-white shadow">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-primary">MeetConnect</h1>
            <div className="space-x-4">
              <Link to="/activities" className="text-gray-700 hover:text-primary">
                Activities
              </Link>
              <Link to="/messages" className="text-gray-700 hover:text-primary">
                Messages
              </Link>
              <Link to="/profile" className="text-gray-700 hover:text-primary">
                Profile
              </Link>
            </div>
          </div>
        </nav>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Meet People in Real Life
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Connect through shared activities and interests
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">Discover Activities</h3>
              <p className="text-gray-600">Find events and meetups near you</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">Meet Safely</h3>
              <p className="text-gray-600">Verified users and public meetup suggestions</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">Travel & Connect</h3>
              <p className="text-gray-600">Find locals and travelers worldwide</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
