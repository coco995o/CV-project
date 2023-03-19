import React, {useState, useEffect} from 'react';
import Experience from './components/Experience';
import Education from './components/Education';
import General from './components/GeneralInfo';
import Header from './components/Header';
import uniqid from 'uniqid';
import './styles/styles.css';

const App=()=>{

  const [person, setPerson]=useState({
    info:{
      name:'',
      email: '',
      phone: '',
      address: '',
      description: '',
    },
    persons:[],
  }
  );
  const [experience, setExperience]=useState({
    info:{
      companyName: '',
      position: '',
      expCity: '',
      expFrom:'',
      expTo:'',
      id: uniqid(),
    },
    experiences:[],
  });
  const [education, setEducation]=useState({
    info:{
      university: '',
      degree:'',
      eduCity:'',
      eduFrom:'',
      eduTo:'',
      id: uniqid(),
    },
    educations:[]
  });

  const handleChange = (e) =>{
    const value=e.target.value;
    setPerson({
      // ...person, [e.target.id]:value,
      ...person, info:{...person.info,[e.target.id]:e.target.value},
    });
  };

  const onSubmitPerson = (e) =>{
    console.log(person);
    e.preventDefault();
    // setDetails(person=>[...person, person]);
    setPerson({
      ...person, persons:[...person.persons, person.info], 
    });
  };

  const handleExperience =(e)=>{
    setExperience({
      ...experience, info:{...experience.info, [e.target.id]:e.target.value},
    });
  }
  const handleEducation=(e)=>{
    setEducation({
      ...education, info:{...education.info, [e.target.id]:e.target.value},
    })
  }
  
  const onSubmitExperience=(e)=>{
    e.preventDefault();
    setExperience({
      ...experience, experiences:[...experience.experiences, experience.info], info:{id:uniqid()},
    });
  }
  const onSubmitEducation=(e)=>{
    e.preventDefault();
    setEducation({
      ...education, educations:[...education.educations, education.info], info:{id:uniqid()},
    });
    console.log(education);
    console.log(education.info);

  }
  const deleteFunction=(e)=>{
   console.log(e.target.id);
   setEducation((education) =>{
    const newEducation=education.educations.filter((element)=>element.id!==e.target.id)
    return {...education, educations:[...newEducation]}
  });
  setExperience((experience) =>{
    const newExperience=experience.experiences.filter((element)=>element.id!==e.target.id)
    return {...experience, experiences:[...newExperience]}
  });

  }
  const print=()=>{
    let printContent=document.getElementById('general-container').innerHTML;
    let originalContent=document.body.innerHTML;
    document.body.innerHTML=printContent;
    window.print();
    document.body.innerHTML=originalContent;
  }


  return (
    <div className='container'>
      <Header />
      <div className='general'>
        <div>
          <button className='print-button' onClick={print}>Print</button>
        </div>
        <div id='general-container' className='general-container'>
        <div className='personal-info'>
          <h3>Personal Information</h3>
        <form className='info-form no-printme' onSubmit={onSubmitPerson}>
            <div>
            <input placeholder='Your Name' onChange={handleChange} type='text' id='name' name='name' value={person.name}/>
            <input placeholder='Your Address' onChange={handleChange} type='text' id='address' name='address' value={person.address}/>
            <input placeholder='Your Email' onChange={handleChange} type='email' id='email' name='email' value={person.email}/>
            <input placeholder='Your Phone' onChange={handleChange} type='number' id='phone' name='phone' value={person.phone}/>
            <input placeholder='Description' onChange={handleChange} type='textarea' id='description' name='description' value={person.description}/>
            <button className='submit-btn' type='submit'>Add</button>
            </div>
        </form>
        <div className='printme personal-info'>
          <General myArray={person.persons}/>
        </div>
        </div>
        <div className='experience-div'>
            <h3>Experience</h3>
            <form className='no-printme' onSubmit={onSubmitExperience}>
              <input onChange={handleExperience} value={experience.companyName} type='text' id='companyName' placeholder='Company Name'/>
              <input onChange={handleExperience} value={experience.position} type='text' id='position' placeholder='Position'/>
              <input onChange={handleExperience} value={experience.expCity} type='text' id='expCity' placeholder='City'/>
              <input onChange={handleExperience} value={experience.expFrom} type='number' id='expFrom' placeholder='From'/>
              <input onChange={handleExperience} value={experience.expTo} type='number' id='expTo' placeholder='To'/>
              <button  type='submit'>Add</button>
            </form>
            <div className='printme'>
              <Experience myArray={experience.experiences} onButtonClicked={deleteFunction} />
            </div>
        </div>
        <div className='education-div'>
            <h3>Education</h3>
            <form className='no-printme' onSubmit={onSubmitEducation}>
              <input onChange={handleEducation} value={education.university} type='text' id='university' placeholder='University Name'/>
              <input onChange={handleEducation} value={education.degree} type='text' id='degree' placeholder='Degree'/>
              <input onChange={handleEducation} value={education.eduCity} type='text' id='eduCity' placeholder='City'/>
              <input onChange={handleEducation} value={education.eduFrom} type='number' id='eduFrom' placeholder='From'/>
              <input onChange={handleEducation} value={education.eduTo} type='number' id='eduTo' placeholder='To'/>
              <button type='submit'>Add</button>
            </form>
            <div className='printme'>
            <Education myArray={education.educations} onButtonClicked={deleteFunction}/>
            </div>
        </div>
        </div>
        
      </div>
    </div>
  );
    
  }
export default App;
