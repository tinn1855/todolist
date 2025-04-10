import { Home } from '@/components/pages/home';
import { DefaultTemplate } from '@/components/templates/default';
import { Route, Routes } from 'react-router-dom';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<DefaultTemplate />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}
