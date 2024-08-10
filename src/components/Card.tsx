interface Props {
  id: number;
  name: string;
  email: string;
}

const Card = ({ id, name, email }: Props) => {
  return (
    <div className='tc grow bg-light-blue br3 pa3 ma2 dib bw2 shadow-5'>
      <img src={`https://robohash.org/${id}?200x200`} alt='photo' />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};
export default Card;
