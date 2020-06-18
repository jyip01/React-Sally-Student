'use strict';

/* globals ReactDOM */

function App(props) {
  return (
    <div className="container">
      <Header name={props.name} />

      <main>
        <section role='region'>
          <address role='contact-info'>
            <img src="https://ia.media-imdb.com/images/M/MV5BMTY5NzE3NzU3MF5BMl5BanBnXkFtZTgwMjg0NTQ5MDE@._V1_UX214_CR0,0,214,317_AL_.jpg" alt="Picutre of Sally with crossed arms" />
            <p>Name: {props.name}</p>
            <p>Email: sallystudent@gmail.com</p>
            <p>Phone Number: 123.456.7890</p>
            <p>Address: 123 Nowhere St., New York, NY 10021</p>
          </address>
        </section>

        <section role='region'>
          <h2>Employment History</h2>
          <ul>
            <li>
              <p>Google, Inc</p>
              <p>Software Engineer</p>
              <p>2014-Present</p>
              <p>Did a lot of computer things like programming</p>
            </li>
            <li>
              <p>Fairway</p>
              <p>Manager</p>
              <p>1999-2013</p>
              <p>In charge of a whole department</p>
            </li>
          </ul>
        </section>

        <section role='region'>
          <h2>Education</h2>
          <ul>
            <li>
              <p>New York Institute of Technology</p>
              <p>Bachelors of Computer Science</p>
              <p>1999-2003</p>
              <p>GPA: 3.0</p>
            </li>
          </ul>
        </section>
      </main>
    </div>
  )
}

App.defaultProps = {
  name: 'Sally Student'
};


ReactDOM.render(
  <App name="Sally Student"/>,
  document.querySelector('#root')
);
