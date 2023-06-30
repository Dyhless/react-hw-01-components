import transactions from './transactions.json';

export const Transactions = () => {
   return (
      <div>
         <table class="transaction-history">
         <thead>
            <tr>
               <th>Type</th>
               <th>Amount</th>
               <th>Currency</th>
            </tr>
         </thead>
         <tbody>
            <tr>
               <td>{transactions.type}</td>
               <td>{transactions.amount}</td>
               <td>{transactions.currency}</td>
            </tr>
         </tbody>
         </table>
      </div>
   );
};
