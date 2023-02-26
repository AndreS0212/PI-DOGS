import React,{useEffect,useState} from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { getAllTemps,createDog } from '../../redux/actions';
import style from './Form.module.css'
import { validate } from './validate';
import { DogPreview } from '../DogPreview/DogPreview';
export const Form = ()=>{
    const dispatch= useDispatch()
    const temps = useSelector(state=>state.allTemperaments).sort()
    const [form, setForm] = useState({
        name: "",
        min_height: '',
        max_height:'',
        min_life_span: '',
        max_life_span: '',
        image: 'https://images.hola.com/imagenes/mascotas/20221020219416/razas-perros-toy/1-154-385/razas-de-perro-toy-m.jpg?tx=w_680',
        temperaments: [],
        min_weight: '',
        max_weight:''
      });
      const [button, setButton] = useState(true);
      const [errors, setErrors] = useState({
          name: "",
          min_height: "",
          max_height: "",
          min_weight: "",
          max_weight: "",
          min_life_span: '',
          max_life_span: '',
          image: "",
          temperaments:''
      });
      const handleChange=(e)=>{
        setForm({
            ...form,
            [e.target.name] : e.target.value //el valor del atributo modificado del estado en el form se actualizara con lo escrito en dicho campo
        });
        setErrors(validate({...form,[e.target.name] : e.target.value}))
      }
      const handleSubmit = (e) =>{
        e.preventDefault()
        if(Object.values(form).some((v) => v == false)){
          alert('Enter all required fields')
        }
        createDog(form)

      }
      const handleChangeSel= (e)=>{
        const encontrado = form.temperaments.find(temp => temp === e.target.value)
        if(!encontrado){
              setForm({
                  ...form,
                  temperaments: [...form.temperaments, e.target.value]
              })
        }
      }
      const uploadImage = async (e) => {
        try {
          const file = e.target.files[0];
          const formData = new FormData();
          formData.append("file", file);
          formData.append("tags", "PI");
          formData.append("upload_preset", "db1xdljk");
        
          const response = await fetch("https://api.cloudinary.com/v1_1/dg1roy34p/image/upload", {
            method: "POST",
            body: formData
          });
          const data = await response.json();
          setForm({...form ,image :data.secure_url})
        } catch (error) {
          console.error(error);
        }
      };
      const handleDelete= (temp)=>{
        console.log(temp)
        const encontrado = form.temperaments.find(tem => tem === temp)
        if(encontrado){ 
          setForm({
            ...form,
            temperaments: form.temperaments.filter(t=>t!==temp)
          })
        }
      }  
    useEffect(() => {
        dispatch(getAllTemps());
      }, [dispatch]);



    return(
        <div className={style.form}>
          <form  onSubmit={(e)=>handleSubmit(e)}>
          <h1>Creating a new dog!</h1>
            <div className={style.flex}>
              <div>
                <label>Name:</label>
                <div className={style.input}>
                  <input value={form.name}  name="name" onChange={(e) => handleChange(e)} type="text" />
                  {errors.name && <span>{errors.name}</span>}
                </div>  
              </div>
            </div>
            <div className={style.flex}>
              <div>
                <label>MinWeight:</label>
                <div className={style.input}>
                  <input value={form.min_weight} name="min_weight" onChange={(e) => handleChange(e)}  type="text" />
                  {errors.min_weight && <span>{errors.min_weight}</span>}
                </div>
              </div>
              <div>
                <label>MaxWeight:</label>
                <div className={style.input}>
                  <input value={form.max_weight} name="max_weight" onChange={(e) => handleChange(e)}  type="text" />
                  {errors.max_weight && <span>{errors.max_weight}</span>}
                </div>  
              </div>
            </div>
            <div className={style.flex}>
              <div>
                  <label>MinHeight:</label>
                  <div className={style.input}>
                    <input value={form.min_height}  name="min_height" onChange={(e) => handleChange(e)}  type="text" />
                    {errors.min_height && <span>{errors.min_height}</span>}
                  </div>
              </div>
              <div>
                  <label>MaxHeight:</label>
                  <div className={style.input}>
                    <input value={form.max_height} name="max_height" onChange={(e) => handleChange(e)}  type="text" />
                    {errors.max_height && <span>{errors.max_height}</span>}
                  </div>
              </div>
            </div>
            <div className={style.flex}>
              <div>
                  <label>Min Life Span:</label>
                  <div className={style.input}>
                    <input value={form.min_life_span}  name="min_life_span" onChange={(e) => handleChange(e)}  type="text" />
                    {errors.min_life_span && <span>{errors.min_life_span}</span>}
                  </div>
              </div>
              <div>
                  <label>Max Life Span:</label>
                  <div className={style.input}>
                    <input value={form.max_life_span} name="max_life_span" onChange={(e) => handleChange(e)}  type="text" />
                    {errors.max_life_span && <span>{errors.max_life_span}</span>}
                  </div>
              </div>
            </div>
            <div className={style.flex}>
              <div className={style.temperaments}>
                <label>Temperaments:</label>
                <select onChange={(e)=> handleChangeSel(e)}>
                  {temps?.map(temp=>{return(<option key={temp} value={temp}>{temp}</option>)})}
                </select>
              </div>
              <div>
                  <label>Image</label>
                  <div className={style.inputimg}>
                    <input onChange={uploadImage} className='modal_pic_input' id="file-input" type="file"/>
                    {errors.image && <span>{errors.image}</span>}
                  </div>
                </div>
            </div>
            <button type='submit'>Create</button>

          </form>
          <div className={style.dog}>
            <DogPreview form={form} handleDelete={handleDelete}/>
          </div>
        </div>
        

    )


}