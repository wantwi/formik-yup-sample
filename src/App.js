import "./App.css";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import { useFormik } from 'formik';
import * as yup from 'yup';
import {connect,useDispatch} from 'react-redux';
import {addUser} from "./redux/user/user.action"
import {selectAddUser} from "./redux/user/user.selector"

// validationSchema={Yup.object({
//   firstName: Yup.string()
//     .max(15, 'Must be 15 characters or less')
//     .required('Required'),
//   lastName: Yup.string()
//     .max(20, 'Must be 20 characters or less')
//     .required('Required'),
//   email: Yup.string()
//     .email('Invalid email address')
//     .required('Required'),
//   acceptedTerms: Yup.boolean()
//     .required('Required')
//     .oneOf([true], 'You must accept the terms and conditions.'),
//   jobType: Yup.string()
//     .oneOf(
//       ['designer', 'development', 'product', 'other'],
//       'Invalid Job Type'
//     )
//     .required('Required'),
// })}


let schema = yup.object().shape({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  gender: yup.string().required("Gender is required"),
  phone: yup.number()

});

function App() {
  const dispatch = useDispatch()
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      gender: '',
      phone:''

    },
    validationSchema:schema,
    onSubmit: values => {
      dispatch(addUser(values))
    
    },
  });

  return (
    <div >
      <form className="App" onSubmit={formik.handleSubmit}>
        <FormControl fullWidth>
          <TextField
            id="outlined-basic"
            size="small"
            name="firstName"
            label="First Name"
            variant="outlined"
            onChange={formik.handleChange}
            value={formik.values.firstName}
            error={formik.touched.firstName && Boolean(formik.errors.firstName)}
            helpertext={formik.touched.firstName && formik.errors.firstName}
          />
        </FormControl>

        <FormControl fullWidth>
          <TextField
            id="outlined-basic"
            size="small"
            name="lastName"
            label="Last Name"
            variant="outlined"
            onChange={formik.handleChange}
            value={formik.values.lastName}
            error={formik.touched.lastName && Boolean(formik.errors.lastName)}
            helpertext={formik.touched.lastName && formik.errors.lastName}
          />
        </FormControl>

        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Gender</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            size="small"
            label="Gender"
            name="gender"
            onChange={formik.handleChange}
            value={formik.values.gender}
            error={formik.touched.gender && Boolean(formik.errors.gender)}
            helpertext={formik.touched.gender && formik.errors.gender}
          >
            <MenuItem value={10}>Male</MenuItem>
            <MenuItem value={20}>Female</MenuItem>
          </Select>
        </FormControl>

        <FormControl fullWidth>
          <TextField
            size="small"
            name="phone"
            label="Phone"
            variant="outlined"
            onChange={formik.handleChange}
            value={formik.values.phone}
            error={formik.touched.phone && Boolean(formik.errors.phone)}
            helperText={formik.touched.phone && formik.errors.phone}
          />
        </FormControl>

        <button style={{marginTop:"25px"}} type="submit">Submit</button>
      </form>
    
    </div>
  );
}



export default App;
