import { useState, useEffect } from 'react'


function App() {
  const [name, setName] = useState("")
  const [age, setAge] = useState("")
  const [mob, setMob] = useState("")
  const [email, setEmail] = useState("")
  const [gender, setGender] = useState("")
  const [pass, setPass] = useState("")
  const [hobby, setHobby] = useState([])
  const [city,setCity] = useState("")
  const [address,setAddress] = useState("")

  const [form, setForm] = useState([])
  const [edit, set_edit] = useState(null)

  function form_fill(){

    const entry =  {
      name,age,mob,email,pass,gender,hobby,city,address
    }

    if(edit!==null){
      const updated = [...form]
      updated[edit] = entry
      setForm(updated)
      set_edit(null)
    }

    else{
    setForm(prev => [...prev,entry])}

    Clear_all()
  }

  function Edit(index){
    const item = form[index]
    setName(item.name)
    setAge(item.age)
    setMob(item.mob)
    setEmail(item.email)
    setPass(item.pass)
    setGender(item.gender)
    setHobby(item.hobby)
    setCity(item.city)
    setAddress(item.address)
    set_edit(index)
  }

  function Clear_all(){
    setName("")
    setAge("")
    setMob("")
    setEmail("")
    setPass("")
    setGender("")
    setHobby([])
    setCity("")
    setAddress("")
  }

  function Delete(index){
    setForm(form.filter((_, i) => i !== index))

    Clear_all()
  }

  function hobbies_check(e){
    if(e.target.checked){
      setHobby(prev => [...prev,e.target.value])
    }
    else{
      setHobby(hobby.filter((i) => i!=e.target.value))
    }
  }

  return (
    <>

    <h1>Form</h1> <br />

    <div className='form_container'>

      Name: <input type="text" value={name} onChange={(e) => setName(e.target.value)} /> <br /> <br />

      Age: <input type="text" value={age} onChange={(e) => setAge(e.target.value)}  /> <br /> <br />

      Mobile Number: <input type="number" value={mob} onChange={(e) => setMob(e.target.value)} /> <br /> <br />

      Email: <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} /> <br /> <br />

      Password: <input type="password" value={pass} onChange={(e) => setPass(e.target.value)} /> <br /> <br />

      Gender: 
      <input type="radio" name="gender" value= "Male" checked={gender === "Male"} onChange={(e) => setGender(e.target.value)}/>Male
      <input type="radio" name="gender" value= "Female" checked={gender === "Female"} onChange={(e) => setGender(e.target.value)} />Female <br /> <br />

      Hobbies:
      <input 
      type="checkbox" 
      name="hobbies" 
      value="Reading" 
      checked={hobby.includes("Reading")} 
      onChange={hobbies_check}/>Reading
      
      <input type="checkbox" name="hobbies" value="Writing" checked={hobby.includes("Writing")} onChange={hobbies_check}/>Writing
      <input type="checkbox" name="hobbies" value="Vibe Coding" checked={hobby.includes("Vibe Coding")} onChange={hobbies_check}/>Vibe Coding
      <input type="checkbox" name="hobbies" value="Outdoor Sports" checked={hobby.includes("Outdoor Sports")} onChange={hobbies_check}/>Outdoor Sports
      <input type="checkbox" name="hobbies" value="Indoor Sports" checked={hobby.includes("Indoor Sports")} onChange={hobbies_check}/>Indoor Sports
      <input type="checkbox" name="hobbies" value="Binge Watching" checked={hobby.includes("Binge Watching")} onChange={hobbies_check}/>Binge Watching <br /><br />

      City: <select name="city" value={city} onChange={(e) => setCity(e.target.value)}>
        <option value="">Select City</option>
        <option value="Indore">Indore</option>
        <option value="Bhopal">Bhopal</option>
        <option value="Pune">Pune</option>
        <option value="Mumbai">Mumbai</option>
      </select> <br /><br />

      Address: <textarea value={address} onChange={(e) => setAddress(e.target.value)}></textarea> <br /><br />

      <button onClick={form_fill}> {edit!=null ? "Update": "Submit"} </button><br /> <br />

      </div>

      <h1>Display Table</h1>

      <table>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Mobile Number</th>
          <th>Email</th>
          <th>Password</th>
          <th>Gender</th>
          <th>Hobbies</th>
          <th>City</th>
          <th>Address</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>

        {form.map((item,index) =>(
          <tr key={index}>
          <td>{item.name}</td>
          <td>{item.age}</td>
          <td>{item.mob}</td>
          <td>{item.email}</td>
          <td>{item.pass}</td>
          <td>{item.gender}</td>
          <td>{item.hobby.join(",") || ""}</td>
          <td>{item.city}</td>
          <td>{item.address}</td>
          <td><button onClick={() => Edit(index)}>Edit</button></td>
          <td><button onClick={() => Delete(index)}>Delete</button></td>
          </tr>
        )) }
        
      </table>

    </>
  )
}

export default App
