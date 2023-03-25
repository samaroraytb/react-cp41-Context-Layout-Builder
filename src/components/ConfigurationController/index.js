import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      const changeShowContent = () => {
        onToggleShowContent()
      }

      const changeLeftNavbar = () => {
        onToggleShowLeftNavbar()
      }

      const changeRightNavbar = () => {
        onToggleShowRightNavbar()
      }

      return (
        <div className="main-container-for-controller">
          <h1>Layout</h1>
          <div className="input-element">
            <input
              onChange={changeShowContent}
              checked={showContent}
              value="content"
              type="checkbox"
              id="content"
            />
            <label htmlFor="content">Content</label>
          </div>

          <div className="input-element">
            <input
              onChange={changeLeftNavbar}
              checked={showLeftNavbar}
              value="leftNavbar"
              type="checkbox"
              id="leftNavbar"
            />
            <label htmlFor="leftNavbar">Left Navbar</label>
          </div>

          <div className="input-element">
            <input
              onChange={changeRightNavbar}
              checked={showRightNavbar}
              value="rightNavbar"
              type="checkbox"
              id="rightNavbar"
            />
            <label htmlFor="content">Right Navbar</label>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
