// import React, { useContext, useEffect, useState } from 'react'
// import './userCollectData.css'
// import { IoMdCloudUpload } from 'react-icons/io'
// import { FormControl, Input, Heading, Textarea, Button, Switch } from '@chakra-ui/react'
// import ResumeContext from '../../Context/ResumeContext'
// const UserDataCollect = () => {


//     const { themeData, checkAward, setCheckAward, setThemeData, checkProj, checkWork, setCheckProj, setCheckWork } = useContext(ResumeContext)


//     const [projectCount, setProjectCount] = useState(0)
//     const [educationCount, setEducationCount] = useState(0)
//     const [workCount, setWorkCount] = useState(0)
//     const [projArrTemplate, setProjArrTemplate] = useState([])
//     const [educationArrTemplate, setEducationArrTemplate] = useState([])
//     const [workArrTemplate, setWorkArrTemplate] = useState([])
//     const [projectData, setProjectData] = useState({ 'projectTitles': { pTitle1: "Project Title " }, 'projectDesc': { pDescription1: "Project Description are Shown here , with Bullet Points" } })
//     const [educationData, setEducationData] = useState({ 'educationTitles': { eTitle1: "Education Title" }, 'educationDesc': { eDescription1: "Education Description are Shown here , with Bullet Points" } })
//     const [workData, setWorkData] = useState({ 'workTitles': { wTitle1: "Work Title" }, 'workDesc': { wDescription1: "Work Description are Shown here , with Bullet Points" } })
//     const [personalData, setPersonalData] = useState({ profileImage: 'https://www.w3schools.com/howto/img_avatar.png', name: "Srishti Pandey", summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing eli', profile: "Work Profile", address: "Address Line", phone: "Phone Number", email: "Email Address", skill: 'Your, Skills, are, shown, here', })
//     const [awardData, setAwardData] = useState({ awards: 'Your Awards are shown here' })
//     // To Add Personal Data to the State
//     const handleChangePersonal = (e) => {
//         const { name, value } = e.target
//         setPersonalData({ ...personalData, [name]: value })
//         if (e.target.name === 'profileImage') {
//             setPersonalData({ ...personalData, profileImage: URL.createObjectURL(e.target.files[0]) })
//         }
//     }// To Add Project Data to the State
// const handleChangeProject = (e) => {
//     const { name, value } = e.target
//     let tempProjectData = projectData
//     if (name.includes('pName')) {
//         tempProjectData["projectTitles"][name] = value;
//     } else {
//         tempProjectData["projectDesc"][name] = value;
//     }
//     setProjectData(tempProjectData)
// }

// const handleProjectClick = (e) => {
//     e.preventDefault();
//     let i = projectCount
//     ++i;
//     setProjectCount(i)
//     let tempProjectData = projectData
//     tempProjectData["projectTitles"]['pTitle' + i] = ""
//     tempProjectData["projectDesc"]['pDescription' + i] = ""
//     setProjectData(tempProjectData)
// }

// // To Add Education Data to the State
// const handleChangeEducation = (e) => {
//     const { name, value } = e.target
//     let tempEducationData = educationData
//     if (name.includes('eName')) {
//         tempEducationData["educationTitles"][name] = value;
//     } else {
//         tempEducationData["educationDesc"][name] = value;
//     }
//     setEducationData(tempEducationData)
// }

// const handleEducationClick = (e) => {
//     e.preventDefault();
//     let i = educationCount
//     ++i;
//     setEducationCount(i)
//     let tempEducationData = educationData
//     tempEducationData["educationTitles"]['eTitle' + i] = ""
//     tempEducationData["educationDesc"]['eDescription' + i] = ""
//     setEducationData(tempEducationData)
// }

// // To Add Work Data to the State
// const handleChangeWork = (e) => {
//     const { name, value } = e.target
//     let tempWorkData = workData
//     if (name.includes('wName')) {
//         tempWorkData["workTitles"][name] = value;
//     } else {
//         tempWorkData["workDesc"][name] = value;
//     }
//     setWorkData(tempWorkData)
// }

// const handleWorkClick = (e) => {
//     e.preventDefault();
//     let i = workCount
//     ++i;
//     setWorkCount(i)
//     let tempWorkData = workData
//     tempWorkData["workTitles"]['wTitle' + i] = ""
//     tempWorkData["workDesc"]['wDescription' + i] = ""
//     setWorkData(tempWorkData)
// }
//     // To Add Project Data to the State
//     // const handleChangeProject = (e) => {
//     //     const { name, value, id } = e.target
//     //     let tempProjectData = projectData
//     //     if (name.includes('pName')) {
//     //         tempProjectData["projectTitles"][id] = value;
//     //     } else {
//     //         tempProjectData["projectDesc"][id] = value;
//     //     }
//     //     setProjectData({ ...projectData, tempProjectData })
//     //     setThemeData({ ...themeData, projectData: projectData })
//     // }

//     // const handleProjectClick = (e) => {
//     //     e.preventDefault();
//     //     let i = projectCount
//     //     ++i;
//     //     const template = (
//     //         <>
//     //             <FormControl isRequired className='my-2'>
//     //                 <Input disabled={checkProj} id={`pTitle${i}`} name='pName' onChange={handleChangeProject} type={'text'} placeholder='Enter Project Title' />
//     //             </FormControl>
//     //             <FormControl isRequired className='my-2'>
//     //                 <Textarea disabled={checkProj} id={`pDescription${i}`} name='pDescription' onChange={handleChangeProject} placeholder='Use comma to separate Description' />
//     //             </FormControl>
//     //         </>
//     //     )
//     //     let arr = projArrTemplate
//     //     arr.push(template)
//     //     setProjArrTemplate(arr)
//     //     setProjectCount(i)
//     // }

//     // // To Add Education Data to the State
//     // const handleChangeEducation = (e) => {
//     //     const { name, value, id } = e.target
//     //     let tempEducationData = educationData
//     //     if (name.includes('eName')) {
//     //         tempEducationData["educationTitles"][id] = value;
//     //     } else {
//     //         tempEducationData["educationDesc"][id] = value;
//     //     }
//     //     setEducationData({ ...educationData }, tempEducationData)
//     // }
//     // const handleEducationClick = (e) => {
//     //     e.preventDefault();
//     //     let i = educationCount
//     //     ++i;
//     //     const template = (
//     //         <>
//     //             <FormControl isRequired className='my-2'>
//     //                 <Input id={`eTitle${i}`} name='eName' onChange={handleChangeEducation} type={'text'} placeholder='Enter Title' />
//     //             </FormControl>
//     //             <FormControl isRequired className='my-2'>
//     //                 <Textarea id={`eDescription${i}`} name='eDescription' onChange={handleChangeEducation} placeholder='Use comma to separate Description' />
//     //             </FormControl>
//     //         </>
//     //     )
//     //     let arr = educationArrTemplate
//     //     arr.push(template)
//     //     setEducationArrTemplate(arr)
//     //     setEducationCount(i)
//     // }

//     // // To Add Work Data to the State
//     // const handleChangeWork = (e) => {
//     //     const { name, value, id } = e.target
//     //     let tempWorkData = workData
//     //     if (name.includes('wName')) {
//     //         tempWorkData["workTitles"][id] = value;
//     //     } else {
//     //         tempWorkData["workDesc"][id] = value;
//     //     }
//     //     setWorkData({ ...workData }, tempWorkData)
//     // }
//     // const handleWorkClick = (e) => {
//     //     e.preventDefault();
//     //     let i = workCount
//     //     ++i;
//     //     const template = (
//     //         <>
//     //             <FormControl isRequired className='my-2'>
//     //                 <Input id={`wTitle${i}`} name='wName' onChange={handleChangeWork} type={'text'} placeholder='Enter Job Title' />
//     //             </FormControl>
//     //             <FormControl isRequired className='my-2'>
//     //                 <Textarea id={`wDescription${i}`} name='wDescription' onChange={handleChangeWork} placeholder='Use comma to separate Description' />
//     //             </FormControl>
//     //         </>
//     //     )
//     //     let arr = workArrTemplate
//     //     arr.push(template)
//     //     setWorkArrTemplate(arr)
//     //     setWorkCount(i)
//     // }

//     // To Add Award & Achievement Data to the State
//     const handleChangeAwards = (e) => {
//         const { name, value } = e.target
//         setAwardData({ ...awardData, [name]: value })
//     }
//     useEffect(() => {
//         setThemeData({ ...themeData, personalData, projectData, educationData, workData, awardData })
       
//     }, [themeData, personalData, setThemeData, projectData, educationData, workData, awardData])

//     return (
//         <>
//             <div id="form-collect">
//                 {/* Personal Details Area  */}
//                 <div id="form-personal" className='mb-2'>
//                     <Heading as='h4' size='md' className='mb-2'>
//                         Personal Details
//                     </Heading>
//                     <hr />

//                     <FormControl isRequired className='my-2'>
//                         <div className='file'>
//                             <label htmlFor='input-file'>
//                                 <i className="material-icons"><IoMdCloudUpload size={30} />
//                                 </i>Select a file
//                             </label>
//                             <input accept="image/*" name='profileImage' onChange={handleChangePersonal} id='input-file' type='file' />
//                             <img className="blah" src={personalData.profileImage} alt="your profile preview" />
//                         </div>
//                     </FormControl>
//                     <FormControl isRequired className='my-2'>
//                         <Input name='name' onChange={handleChangePersonal} type={'text'} placeholder='Srishti Pandey' />
//                     </FormControl>
//                     <FormControl isRequired className='my-2'>
//                         <Input name='summary' onChange={handleChangePersonal} type={'text'} placeholder='Your Summary' />
//                     </FormControl>
//                     <FormControl isRequired className='my-2'>
//                         <Input name='profile' onChange={handleChangePersonal} type={'text'} placeholder='Work Profile' />
//                     </FormControl>
//                     <FormControl isRequired className='my-2'>
//                         <Input name='address' onChange={handleChangePersonal} type={'text'} placeholder='Address' />
//                     </FormControl>
//                     <FormControl isRequired className='my-2'>
//                         <Input name='phone' onChange={handleChangePersonal} type={'tel'} placeholder='Phone number' />
//                     </FormControl>
//                     <FormControl isRequired className='my-2'>
//                         <Input name='email' onChange={handleChangePersonal} type={'email'} placeholder='Email id' />
//                     </FormControl>
//                 </div>

//                 {/* Skills Area  */}
//                 <div id="form-personal" className='mb-2'>
//                     <Heading as='h4' size='md' className='my-2'>
//                         Technical Skills
//                     </Heading>
//                     <hr />

//                     <FormControl isRequired className='my-2'>
//                         <Input name='skill' onChange={handleChangePersonal} type={'text'} placeholder='Comma Separated (e.g. HTML,CSS)' />
//                     </FormControl>
//                 </div>

               
//             {/* Projects Area  */}
//             <div id="form-projects" className='mb-2'>
//                 <Heading as='h4' size='md' className='mb-2'>
//                     Projects
//                 </Heading>
//                 <hr />
//                 {Object.keys(projectData.projectTitles).map((key, index) => (
//                     <div key={index}>
//                         <FormControl isRequired className='my-2'>
//                             <Input id={key} name={key} onChange={handleChangeProject} type={'text'} placeholder='Enter Project Title' />
//                         </FormControl>
//                         <FormControl isRequired className='my-2'>
//                             <Textarea id={`pDescription${index + 1}`} name={`pDescription${index + 1}`} onChange={handleChangeProject} placeholder='Use comma to separate Description' />
//                         </FormControl>
//                     </div>
//                 ))}
//                 <div className='addMore'>
//                     <Button onClick={handleProjectClick} colorScheme='blue'>Add More</Button>
//                 </div>
//             </div>

//             {/* Work Experience Area  */}
//             <div id="form-workExperience" className='mb-2'>
//                 <Heading as='h4' size='md' className='mb-2'>
//                     Work Experience
//                 </Heading>
//                 <hr />
//                 {Object.keys(workData.workTitles).map((key, index) => (
//                     <div key={index}>
//                         <FormControl isRequired className='my-2'>
//                             <Input id={key} name={key} onChange={handleChangeWork} type={'text'} placeholder='Enter Job Title' />
//                         </FormControl>
//                         <FormControl isRequired className='my-2'>
//                             <Textarea id={`wDescription${index + 1}`} name={`wDescription${index + 1}`} onChange={handleChangeWork} placeholder='Use comma to separate Description' />
//                         </FormControl>
//                     </div>
//                 ))}
//                 <div className='addMore'>
//                     <Button onClick={handleWorkClick} colorScheme='blue'>Add More</Button>
//                 </div>
//             </div>

//             {/* Education Area  */}
//             <div id="form-education" className='mb-2'>
//                 <Heading as='h4' size='md' className='mb-2'>
//                     Education
//                 </Heading>
//                 <hr />
//                 { Object.keys(educationData.educationTitles).map((key, index) => (
//                     <div key={index}>
//                         <FormControl isRequired className='my-2'>
//                             <Input id={key} name={key} onChange={handleChangeEducation} type={'text'} placeholder='Enter Title' />
//                         </FormControl>
//                         <FormControl isRequired className='my-2'>
//                             <Textarea id={`eDescription${index + 1}`} name={`eDescription${index + 1}`} onChange={handleChangeEducation} placeholder='Use comma to separate Description' />
//                         </FormControl>
//                     </div>
//                 ))}
//                 <div className='addMore'>
//                     <Button onClick={handleEducationClick} colorScheme='blue'>Add More</Button>
//                 </div>
//             </div>


//                 {/* Awards Area  */}
//                 <div id="form-personal" className='mb-2'>
//                     <Heading as='h4' size='md' className='my-2'>
//                         Awards & Achievements
//                     </Heading>
//                     <hr />
//                     <FormControl className='my-2'>
//                         <Textarea id='awards' name='awards' onChange={handleChangeAwards} placeholder='Use comma to separate Awards' />
//                     </FormControl>
//                     <FormControl className='my-2'>
//                         <Switch id='checkAwards' colorScheme='red' onChange={(e) => setCheckAward(!checkAward)}><label>Disable/Enable Awards</label></Switch>
//                     </FormControl>
//                 </div>
//             </div>
//         </>
//     )
// }
// export default UserDataCollect
import React, { useContext, useEffect, useState } from 'react';
import './userCollectData.css';
import { IoMdCloudUpload } from 'react-icons/io';
import { FormControl, Input, Heading, Textarea, Button } from '@chakra-ui/react';
import ResumeContext from '../../Context/ResumeContext';

const UserDataCollect = () => {
    const { themeData, setThemeData } = useContext(ResumeContext);

    const [projectCount, setProjectCount] = useState(0);
    const [educationCount, setEducationCount] = useState(0);
    const [workCount, setWorkCount] = useState(0);
    const [projectData, setProjectData] = useState({
        projectTitles: { pTitle1: "" },
        projectDesc: { pDescription1: "Project Title" }
    });
    const [educationData, setEducationData] = useState({
        educationTitles: { eTitle1: "" },
        educationDesc: { eDescription1: "Education Title" }
    });
    const [workData, setWorkData] = useState({
        workTitles: { wTitle1: "" },
        workDesc: { wDescription1: "Work Title" }
    });
    const [personalData, setPersonalData] = useState({
        profileImage: 'https://www.w3schools.com/howto/img_avatar.png',
        name: "Srishti Pandey",
        summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing eli',
        profile: "Work Profile",
        address: "Address Line",
        phone: "Phone Number",
        email: "Email Address",
        skill: 'Your, Skills, are, shown, here',
    });
    const [awardData, setAwardData] = useState({ awards: 'Your Awards are shown here' });

    // To Add Personal Data to the State
    const handleChangePersonal = (e) => {
        const { name, value } = e.target;
        if (e.target.name === 'profileImage') {
            setPersonalData({ ...personalData, profileImage: URL.createObjectURL(e.target.files[0]) });
        } else {
            setPersonalData({ ...personalData, [name]: value });
        }
    };

    // To Add Project Data to the State
    const handleChangeProject = (e) => {
        const { name, value } = e.target;
        let tempProjectData = { ...projectData };
        if (name.includes('pName')) {
            tempProjectData.projectTitles[name] = value;
        } else {
            tempProjectData.projectDesc[name] = value;
        }
        setProjectData(tempProjectData);
    };

    const handleProjectClick = (e) => {
        e.preventDefault();
        setProjectCount((prev) => {
            const i = prev + 1;
            setProjectData((prevData) => ({
                ...prevData,
                projectTitles: { ...prevData.projectTitles, [`pTitle${i}`]: "" },
                projectDesc: { ...prevData.projectDesc, [`pDescription${i}`]: "" }
            }));
            return i;
        });
    };

    // To Add Education Data to the State
    const handleChangeEducation = (e) => {
        const { name, value } = e.target;
        let tempEducationData = { ...educationData };
        if (name.includes('eName')) {
            tempEducationData.educationTitles[name] = value;
        } else {
            tempEducationData.educationDesc[name] = value;
        }
        setEducationData(tempEducationData);
    };

    const handleEducationClick = (e) => {
        e.preventDefault();
        setEducationCount((prev) => {
            const i = prev + 1;
            setEducationData((prevData) => ({
                ...prevData,
                educationTitles: { ...prevData.educationTitles, [`eTitle${i}`]: "" },
                educationDesc: { ...prevData.educationDesc, [`eDescription${i}`]: "" }
            }));
            return i;
        });
    };

    // To Add Work Data to the State
    const handleChangeWork = (e) => {
        const { name, value } = e.target;
        let tempWorkData = { ...workData };
        if (name.includes('wName')) {
            tempWorkData.workTitles[name] = value;
        } else {
            tempWorkData.workDesc[name] = value;
        }
        setWorkData(tempWorkData);
    };

    const handleWorkClick = (e) => {
        e.preventDefault();
        setWorkCount((prev) => {
            const i = prev + 1;
            setWorkData((prevData) => ({
                ...prevData,
                workTitles: { ...prevData.workTitles, [`wTitle${i}`]: "" },
                workDesc: { ...prevData.workDesc, [`wDescription${i}`]: "" }
            }));
            return i;
        });
    };

    // To Add Award & Achievement Data to the State
    const handleChangeAwards = (e) => {
        const { name, value } = e.target;
        setAwardData({ ...awardData, [name]: value });
    };

    useEffect(() => {
        setThemeData({ ...themeData, personalData, projectData, educationData, workData, awardData });
    }, [themeData, personalData, projectData, educationData, workData, awardData, setThemeData]);

    return (
        <>
            <div id="form-collect">
                {/* Personal Details Area  */}
                <div id="form-personal" className='mb-2'>
                    <Heading as='h4' size='md' className='mb-2'>Personal Details</Heading>
                    <hr />
                    <FormControl isRequired className='my-2'>
                        <div className='file'>
                            <label htmlFor='input-file'>
                                <IoMdCloudUpload size={30} /> Select a file
                            </label>
                            <input accept="image/*" name='profileImage' onChange={handleChangePersonal} id='input-file' type='file' />
                            <img className="blah" src={personalData.profileImage} alt="your profile preview" />
                        </div>
                    </FormControl>
                    <FormControl isRequired className='my-2'>
                        <Input name='name' onChange={handleChangePersonal} type={'text'} placeholder='Srishti Pandey' />
                    </FormControl>
                    <FormControl isRequired className='my-2'>
                        <Input name='summary' onChange={handleChangePersonal} type={'text'} placeholder='Your Summary' />
                    </FormControl>
                    <FormControl isRequired className='my-2'>
                        <Input name='profile' onChange={handleChangePersonal} type={'text'} placeholder='Work Profile' />
                    </FormControl>
                    <FormControl isRequired className='my-2'>
                        <Input name='address' onChange={handleChangePersonal} type={'text'} placeholder='Address' />
                    </FormControl>
                    <FormControl isRequired className='my-2'>
                        <Input name='phone' onChange={handleChangePersonal} type={'tel'} placeholder='Phone number' />
                    </FormControl>
                    <FormControl isRequired className='my-2'>
                        <Input name='email' onChange={handleChangePersonal} type={'email'} placeholder='Email id' />
                    </FormControl>
                </div>

                {/* Skills Area  */}
                <div id="form-personal" className='mb-2'>
                    <Heading as='h4' size='md' className='my-2'>Technical Skills</Heading>
                    <hr />
                    <FormControl isRequired className='my-2'>
                        <Input name='skill' onChange={handleChangePersonal} type={'text'} placeholder='Comma Separated (e.g. HTML,CSS)' />
                    </FormControl>
                </div>

                {/* Projects Area  */}
                <div id="form-projects" className='mb-2'>
                    <Heading as='h4' size='md' className='mb-2'>Projects</Heading>
                    <hr />
                    {Object.keys(projectData.projectTitles).map((key, index) => (
                        <div key={index}>
                            <FormControl isRequired className='my-2'>
                                <Input name={`pName${index + 1}`} onChange={handleChangeProject} type={'text'} placeholder={`Project Description ${index + 1}`} />
                            </FormControl>
                            <FormControl isRequired className='my-2'>
                                <Textarea name={`pDescription${index + 1}`} onChange={handleChangeProject} placeholder={`Project Title ${index + 1}`} />
                            </FormControl>
                        </div>
                    ))}
                    <Button onClick={handleProjectClick} colorScheme="teal" className='my-2'>Add Project</Button>
                </div>

                {/* Education Area  */}
                <div id="form-education" className='mb-2'>
                    <Heading as='h4' size='md' className='mb-2'>Education</Heading>
                    <hr />
                    {Object.keys(educationData.educationTitles).map((key, index) => (
                        <div key={index}>
                            <FormControl isRequired className='my-2'>
                                <Input name={`eName${index + 1}`} onChange={handleChangeEducation} type={'text'} placeholder={`Education Description ${index + 1}`}  />
                            </FormControl>
                            <FormControl isRequired className='my-2'>
                                <Textarea name={`eDescription${index + 1}`} onChange={handleChangeEducation} placeholder={`Education Title ${index + 1}`}  />
                            </FormControl>
                        </div>
                    ))}
                    <Button onClick={handleEducationClick} colorScheme="teal" className='my-2'>Add Education</Button>
                </div>

                {/* Work Experience Area  */}
                <div id="form-work" className='mb-2'>
                    <Heading as='h4' size='md' className='mb-2'>Work Experience</Heading>
                    <hr />
                    {Object.keys(workData.workTitles).map((key, index) => (
                        <div key={index}>
                            <FormControl isRequired className='my-2'>
                                <Input name={`wName${index + 1}`} onChange={handleChangeWork} type={'text'} placeholder={`Work Title ${index + 1}`} />
                            </FormControl>
                            <FormControl isRequired className='my-2'>
                                <Textarea name={`wDescription${index + 1}`} onChange={handleChangeWork} placeholder={`Work Description ${index + 1}`} />
                            </FormControl>
                        </div>
                    ))}
                    <Button onClick={handleWorkClick} colorScheme="teal" className='my-2'>Add Work Experience</Button>
                </div>

                {/* Awards Area  */}
                <div id="form-awards" className='mb-2'>
                    <Heading as='h4' size='md' className='my-2'>Awards and Achievements</Heading>
                    <hr />
                    <FormControl className='my-2'>
                        <Textarea name='awards' onChange={handleChangeAwards} placeholder='Your Awards are shown here' />
                    </FormControl>
                </div>
            </div>
        </>
    );
}

export default UserDataCollect;
