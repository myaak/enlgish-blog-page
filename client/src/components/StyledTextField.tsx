
let border
let textColor
export const StyledTextField = {
  "& label": {
    color: textColor,
    fontWeight: 600,
  },
  "& label.Mui-focused": {
    color: textColor,
    fontWeight: 700
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: border
  },
  "& .MuiInputBase-root": {
    borderRadius: '15px',
    color: textColor
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderRadius: '15px',
      borderColor: border,
      borderWidth: 1,

    },
    "&:hover fieldset": {
      borderColor: border,
      borderWidth: 2
    },
    "&.Mui-focused fieldset": {
      borderColor: border,
    }
  }
}
