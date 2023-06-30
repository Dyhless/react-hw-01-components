import data from './data.json';

export const Statistics = () => {
   return (
      <section className="statistics">
         <div className='stat-block'>
         <h2 className="title">Upload stats</h2>

         <ul className="stat-list">
            {data.map(stats => (
               <li key={stats.id} className="item">
               <span className="label lbl-txt"> {stats.label} %</span>
               <span className="percentage"> {stats.percentage} %</span>
               </li>
            ))}
         </ul>
         </div>
      </section>  
  );
};
