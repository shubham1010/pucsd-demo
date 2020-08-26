class ToggleMenuBarController extends Stimulus.Controller {
  static targets = ["toggle"]
  connect() {
    console.log("Connect method of toggle class...")
  }

  toggleElement() {
    var nav = document.querySelector("nav")
    this.toggle.classList.toggle("active")
    nav.classList.toggle("active")
  }

  get toggle() {
    return this.toggleTarget
  }

}

const application = Stimulus.Application.start()
application.register("toggle-menu-bar", ToggleMenuBarController)
