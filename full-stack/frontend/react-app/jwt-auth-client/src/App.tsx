import React from 'react';
import { useHelloQuery } from './generated/graphql';

const App: React.FC = () => {
  const { data, loading } = useHelloQuery()

  if (loading) return (
    <div>
      Loading...
    </div>
  )

  return (
      <div>
        { JSON.stringify(data?.hello) }
      </div>
  );
}

export default App;
