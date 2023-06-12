

const MyEnrolledClassCard = ({enroll,index}) => {
    console.log(enroll);
    const {email,date,sportsName,price,status} = enroll;
      return (
          <>
          <tr>
            <th className='text-black bold'>
              {index + 1}
            </th>
            <td>{sportsName}</td>
            <td>{date}</td>
            <td>{email}</td>
            <td>{price}</td>
            <td>{status}</td>
          </tr>
        </>
       
      );
    };
    
    export default MyEnrolledClassCard;
