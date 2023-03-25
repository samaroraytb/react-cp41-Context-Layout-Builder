import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value

      return (
        <div className="main-body-container">
          {showLeftNavbar ? (
            <div className="navbar-sidebar">
              <h1>Left Navbar Menu</h1>
              <ul>
                <li>item 1</li>
                <li>item 2</li>
                <li>item 3</li>
                <li>item 4</li>
              </ul>
            </div>
          ) : (
            ''
          )}
          {showContent ? (
            <div className="navbar-sidebar">
              <h1>Content</h1>
              <p>
                Lorem ipsum It is a long established fact that a reader will be
                distracted by the readable content of a page when looking at its
                layout. The point of using Lorem Ipsum is that it has a
                more-or-less normal distribution of letters, as opposed to using
                &lsquo;Content here, content here&lsquo;, making it look like
                readable English.
              </p>
            </div>
          ) : (
            ''
          )}
          {showRightNavbar ? (
            <div className="navbar-sidebar">
              <h1>Right Navbar</h1>
              <div className="box-container">
                <p>Ad 1</p>
              </div>
              <div className="box-container">
                <p>Ad 2</p>
              </div>
            </div>
          ) : (
            ''
          )}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
