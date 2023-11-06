import './css/Contact.css'

export const Contact = () => {
  return (
    <section id='contact' aria-labelledby='contact-title'>
      <article id='contact-info'>
        <h3>Contact Info</h3>
        <p>
          <span>Phone:</span>
          <a href='tel:+523328298224'>&nbsp;+52 (33) 2829 8224</a>
        </p>
        <p>
          <span>Email:</span>
          <a href='mailto: jorge.armando.c.cardenas@gmail.com'>
            &nbsp;jorge.armando.c.cardenas@gmail.com
          </a>
        </p>
      </article>

      <article id='form-container'>
        <h3>Send Me a Message</h3>
        <form action='' id='contact-form'>
          <label htmlFor='name'>
            Send by:
            <input
              type='text'
              name='name'
              id='name'
              placeholder='John Walker'
              aria-label='Your name'
            />
          </label>
          <label htmlFor='email'>
            Email:
            <input
              type='email'
              name='email'
              id='email'
              placeholder='john@gmail.com'
              aria-label='Your email address'
            />
          </label>
          <label htmlFor='message'>
            Message:
            <textarea
              name='message'
              id='message'
              placeholder='Your message'
              aria-label='Your message'
            />
          </label>
          <input type='submit' value='Send' />
        </form>
      </article>
    </section>
  )
}
