import { useState } from 'react';
import FilterModal from '../components/FilterModal';

function Home() {
  const [openFilter, setOpenFilter] = useState(false);

  return (
    <div>
      <FilterModal open={openFilter} setOpen={setOpenFilter} />
      <button onClick={() => setOpenFilter(true)}>filter</button>
      <h1>This is home</h1>
      <div className='row'>
        <div className='col-lg-6'>hello</div>
        <div className='col-lg-6'>hello2</div>
      </div>
    </div>
  );
}
export default Home;
