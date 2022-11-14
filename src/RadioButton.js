import './RadioButton.css';

export const RadioButton = (props) => {
    const { changed, id, isSelected, label,iconLink, value } = props;
    return (
      <div className="RadioButton">
        <input
          id={id}
          onChange={changed}
          value={value}
          type="radio"
          checked={isSelected}
          className="rad"
        />
        <label htmlFor={id}><img src={iconLink} id="rimg"  alt=""/>{label}</label>
      </div>
    );
  };
  