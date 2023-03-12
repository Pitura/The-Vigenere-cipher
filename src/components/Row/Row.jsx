import s from "./Row.module.scss";

const alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

const Row = ({topRow, firstLetter}) => {
   
   const checkFirstLetter = (firstLetter) => {
      const indexOfLetter = alphabet.indexOf(firstLetter);
      const arrStepOne = alphabet.slice(indexOfLetter + 1);
      const arrStepTwo = alphabet.slice(0, indexOfLetter);
      return [...arrStepOne, ...arrStepTwo];
   }

   const result = checkFirstLetter(firstLetter);

   return (
      <tr >
         {
            topRow 
            ? alphabet.map((letter, id) => {
               return <th key={id}>{letter}</th>
            })
            : <th>{firstLetter}</th>
         }
         {
            topRow
            ? null
            : result.map((letter, id) => {
                  return <td key={id}>{letter}</td>
               })
         }
      </tr>
   );
}

export default Row;