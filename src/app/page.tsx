import { Hi } from '@pages/Hi/Hi';
import { What } from '@pages/What/What';
import { Columns } from '@pages/Columns/Columns';
import { Verticals } from '@pages/Verticals/Verticals';

export default function HomePage() {
  return (
    <>
      <Hi />
      <What />
      <Columns />
      <Verticals />
    </>
  );
}