
import PropTypes from 'prop-types'



const Input = ({ field, multiLine, rows, fullWidth, size, value, startIcon, endIcon, disabled, error, helperText, placeholder }) => {
    console.log('multiLine', multiLine)
    multiLine ? multiLine : ""
    return (
        <div className="input flex flex-col">
            <label htmlFor="" className={`${error ? 'errorClass' : ""}`} >{field ? field : 'Label'}</label>
            <div className='icon-cont'>
                {

                    multiLine ? <textarea rows={rows} placeholder={placeholder} value={value} disabled={disabled} type="text" className={`${error ? 'errorClass' : ""}  ${fullWidth ? "lg" : ""}`}></textarea> :
                        <input placeholder={placeholder} /*value={'value'}*/ disabled={disabled} type="text" className={`${error ? 'errorClass' : ""} ${size} ${fullWidth ? "lg" : ""}`} />}
                <span className="material-symbols-outlined">{startIcon}</span>
                <span className="material-symbols-outlined">{endIcon}</span>
            </div>
            <p className={`${error ? 'errorClass' : ""}`}>{helperText}</p>
        </div>
    )
}

Input.propTypes = {
    field:PropTypes.string,
    multiLine:PropTypes.bool,
    rows:PropTypes.string,
    value:PropTypes.string,
    fullWidth:PropTypes.bool,
    size:PropTypes.string,
    startIcon:PropTypes.node,
    endIcon:PropTypes.node,
    disabled:PropTypes.bool,
    error:PropTypes.bool,
    helperText:PropTypes.string,
    placeholder:PropTypes.string,
}


export default Input
