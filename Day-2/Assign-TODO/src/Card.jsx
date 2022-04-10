import style from './Card.module.css'

const rightStyle={
    color:"blue",
   
}
const orStyle={
    color:"green"
}
function Card (props) {
    const {name,organization,qualification,gender,imgURL} = props;
return(
    <div className={style.main}>
        <div className={style.left_Content}>
            <img src={props.imgURL} alt="debuImg" />
        </div>
        <div className="right_content">
        {/* <img src={imgURL} alt="" /> */}
            <h2 style={rightStyle}>Name: {name}</h2>
            <h4 style={orStyle}> Organization: {organization}</h4>
    <h4 className={style.quali}>Qualification: {qualification}</h4>
    <h4>Gender: {gender}</h4>


        </div>
    </div>
)
}
export default Card;