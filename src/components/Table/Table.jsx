import { Row } from "..";

import s from "./Table.module.scss";

const alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

const Table = () => {
   
   return (
      <section>
         <table>
            <thead>
               <Row topRow={true} firstLetter='A' />
            </thead>
            <tbody>
               {
                  alphabet.slice(1).map((letter, id) => {
                     return <Row key={id} topRow={false} firstLetter={letter} />
                  })
               }
            </tbody>
         </table>
      </section>
   );
}

export default Table;