import experienceData from './../mocks/experience.json'
import educationData from './../mocks/education.json'
import './css/About.css'

export const About = () => {
  const experience = experienceData.experience
  const education = educationData.education

  const hasExperience = experience?.length > 0
  const hasEducation = education?.length > 0

  return (
    <section id='about-section'>
      <header className='about-header'>
        <img
          src='/armandodev.jpg'
          alt='Image of Jorge Armando Ceras Cárdenas'
          className='about-image'
        />
        <div className='about-me'>
          <h3 className='about-name'>Jorge Armando Ceras Cárdenas</h3>
          <p className='about-username'>@armandodev</p>
          <p className='about-occupation'>
            Full-stack web developer
          </p>
        </div>
      </header>

      <article className='about-experience'>
        <h3 className='about-subtitle'>Experience</h3>
        <ul className='about-list'>
          {hasExperience
            ? (
                experience.map((item) => (
                  <li key={item.id} className='about-item'>
                    <h4 className='about-item-title'>{item.company}</h4>
                    <p className='about-item-date'>
                      {item.start_date} - {item.end_date}
                    </p>
                    <p className='about-item-role'>{item.title}</p>
                    <p className='about-item-description'>{item.description}</p>
                  </li>
                ))
              )
            : (
              <li className='about-item'>Coming soon</li>
              )}
        </ul>
      </article>

      <article className='about-education'>
        <h3 className='about-subtitle'>Education</h3>
        <ul className='about-list'>
          {hasEducation
            ? (
                education.map((item) => (
                  <li key={item.id} className='about-item'>
                    <h4 className='about-item-title'>{item.school}</h4>
                    <p className='about-item-degree'>{item.degree}</p>
                    <p className='about-item-state'>{item.state}</p>
                    <p className='about-item-date'>
                      {item.start_date} - {item.end_date}
                    </p>
                  </li>
                ))
              )
            : (
              <li className='about-item'>Coming soon</li>
              )}
        </ul>
      </article>
    </section>
  )
}
